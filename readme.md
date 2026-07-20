 Sistema de Gestión de Parqueaderos en MongoDB

Este proyecto implementa una solución completa en MongoDB para la gestión de vehículos, parqueos, zonas y sedes de una red de estacionamientos. El diseño está enfocado en la alta velocidad de lectura, integridad de datos mediante validaciones de esquema, transacciones para evitar inconsistencias de cupos y control de acceso mediante roles.

 Tabla de Contenidos
1. [Introducción al Proyecto](#introducción-al-proyecto)
2. [Justificación del Uso de MongoDB](#justificación-del-uso-de-mongodb)
3. [Diseño del Modelo de Datos](#diseño-del-modelo-de-datos)
4. [Validaciones $jsonSchema](#validaciones-jsonschema)
5. [Índices e Inserciones de Rendimiento](#índices-e-inserciones-de-rendimiento)
6. [Estructura de Datos de Prueba](#estructura-de-datos-de-prueba)
7. [Agregaciones (queries resueltas)](#agregaciones)
8. [Transacciones](#transacciones)
9. [Roles y Seguridad](#roles-y-seguridad)
10. [Conclusiones y Mejoras Posibles](#conclusiones-y-mejoras-posibles)



*Introducción al Proyecto Bv
El objetivo del sistema es llevar el control en tiempo real y todo momento, de los vehículos que ingresan y salen de distintos estacionamientos. Permite saber el estado actual de cada zona  calcular cobros de parqueo y generar reportes analíticos de rendimiento por sede y que no se derrumbes.

*el Uso de MongoDB
Se seleccionó MongoDB por las siguientes razones:
+-- Escalabilidad y velocidad: Permite procesar mil y un registros  y salida simultáneos, sin problemas.

+-- Modelo Embebido:  Nos permite guardar los datos del vehículo dentro del mismo registro de parqueo. Esto evita hacer uniones costosas cada vez que se consulta qué vehículo está estacionados.

+-- Flexibilidad de Esquema: Facilita la evolución de la base de datos sin necesidad de realizar migraciones complejas de tablas.



*Diseño del Modelo de Datos

Colecciones que decicidi colocar 

+-- parques:: Almacena las entradas, salidas-cálculo de costos (estas solo si ya se fue el vehiculo) y la información completa del vehículo parqueado.

+-- zonas: Mantiene la capacidad máxima y los cupos disponibles actualizados en tiempo real por cada sede.

+-- vehiculo: _id, tipo_vehiculo: "carro, moto, camion, bicicleta o monopatin electrico", placa, marca, modelo, cliente_id  color

+-- clientes(empledo): _id, cedula, nombre, correo, rol: "empleado", Empleado de sede, sede_id, genero.

+-- clientes(cliente): _id, cedula, nombre, correo, rol: "Cliente", genero


+-- sedes: Información de las distintas ubicaciones de parqueadero.


* Validaciones

Para asegurar que ningún documento se guarde con datos incorrectos o corruptos, se aplicó una regla de validación Schema en la colección de parkes

parques:

db.createCollection("parques", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["vehiculo", "sede_id", "zona_id", "hora_entrada", "estado"],
         properties: {
            estado: {
               enum: ["activo", "finalizado"],
               description: "El estado solo puede ser 'activo' o 'finalizado'"
            },
            hora_entrada: {
               bsonType: "string",
               description: "Debe ser una fecha válida en texto ISO o Date"
            },
            costo_total: {
               bsonType: ["double", "int", "number"],
               description: "El costo total debe ser un número positivo si existe"
            }
         }
      }
   }
});