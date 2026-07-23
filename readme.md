# Por qué se eligió MongoDB?
Rendimiento y Concurrencia: Ideal para sistemas de parqueo que manejan un alto volumen de operaciones de escritura y lectura en tiempo real.

Transacciones ACID: Permite ejecutar operaciones multi-documento seguras, garantizando que el registro de un parqueo y el descuento de cupos en una zona ocurran de manera atómica y consistente.

Estructura Flexible y Escalable: Facilita el manejo de datos orientados a documentos, lo que permite estructurar jerarquías claras entre sedes, zonas, clientes y vehículos de forma natural.

Seguridad y Control Nativo: Ofrece un sistema robusto de control de acceso basado en roles y validación estricta de esquemas integrada, asegurando la integridad operativa sin depender de capas externas complejas.
 
 # Sistema de Estacionamiento

Base de datos diseñada en MongoDB (`mongosh`) para la gestión integral de un sistema de parqueaderos multi-sede, con control de acceso basado en roles, validación de esquemas y transacciones ACID.

## Estructura de Colecciones
- `sedes`: Información de las sucursales u oficinas principales.
- `zonas`: Áreas o pisos de cada sede con control de capacidad.
- `clientes y empleados`: Registro de usuarios del sistema y Personal operativo asignado a las sedes.
- `vehiculos`: Información automotor vinculada a los clientes.
- `parqueos`: Historial de entradas, salidas, estados (`activo`, `finalizado`) y tiempos.

# Control de Acceso 
1. `adminParqueo`: Control total (CRUD) sobre sedes, zonas, empleados, clientes y vehículos. Permiso de solo lectura en `parqueos`.
2. `empleadoParqueo`: Permite registrar, actualizar y consultar `clientes`, `vehiculos` y `parqueos` (sin permisos de eliminación).
3. `clienteParqueo`: Acceso de lectura exclusivo para consultar sus datos personales y vehículos.

# Características Técnicas
- Validación de Esquemas (`collMod`): Restricción de tipos de datos estrictos en todas las colecciones (ej. validación estricta de objetos `Date` para tiempos de parqueo).
- Índices Estratégicos: Optimización de consultas mediante campos únicos (`placa`, `email`, `codigo_empleado`) y índices compuestos para reportes rápidos.
- Agregaciones Avanzadas: Consultas analíticas optimizadas usando `$lookup`, `$group`, `$match` y `$sort` para reportes de ingresos, zonas más ocupadas e historiales.
- Transacciones ACID: Bloques seguros para el registro concurrente de ingresos de vehículos y el descuento automático de cupos en zonas.
