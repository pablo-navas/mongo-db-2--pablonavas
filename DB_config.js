// ==========================================
// 1. db_config.js
// Configuración de la base de datos y validaciones
// ==========================================

use sistema_parqueos;

// Eliminamos colecciones previas para poder ejecutar este archivo varias veces sin errores
db.parqueos.drop();
db.vehiculos.drop();
db.clientes.drop();
db.zonas.drop();
db.sedes.drop();

// 1. Colección: sedes
db.createCollection("sedes", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["nombre", "direccion"],
         properties: {
            nombre: { bsonType: "string", description: "Nombre de la sede requerido" },
            direccion: { bsonType: "string", description: "Dirección requerida" }
         }
      }
   }
});

// 2. Colección: zonas (¡Ahora es independiente, ya no está embebida!)
db.createCollection("zonas", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["sede_id", "nombre_zona", "capacidad_maxima", "cupos_disponibles", "tipo_vehiculo_permitido"],
         properties: {
            sede_id: { bsonType: "objectId", description: "Referencia a la sede" },
            nombre_zona: { bsonType: "string" },
            capacidad_maxima: { bsonType: "int" },
            cupos_disponibles: { bsonType: "int" },
            tipo_vehiculo_permitido: { enum: ["carro", "moto", "bici", "monopatin electrico"] 
}}}}});

// Colección: clientes
db.createCollection("clientes", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["nombre_completo", "documento_identidad"],
         properties: {
            nombre_completo: { bsonType: "string" },
            documento_identidad: { bsonType: "string" }}}
   }
});

// Colección: vehiculos
db.createCollection("vehiculos", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["cliente_id", "placa", "tipo_vehiculo"],
         properties: {
            cliente_id: { bsonType: "objectId" },
            placa: { bsonType: "string" },
            tipo_vehiculo: { enum: ["carro", "moto", "bici"] }
         }
      }
   }
});

// Colección: parqueos
db.createCollection("parqueos", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["vehiculo_id", "sede_id", "zona_id", "hora_entrada", "estado"],
         properties: {
            vehiculo_id: { bsonType: "objectId" },
            sede_id: { bsonType: "objectId" },
            zona_id: { bsonType: "objectId" },
            hora_entrada: { bsonType: "date", description: "Debe ser un objeto Date" },
            hora_salida: { bsonType: "date" },
            estado: { enum: ["activo", "finalizado"] }
         }
      }
   }
});

//INDEX

//parques
db.parques.createIndex(
  { sede_id: 1, zona_id: 1, "vehiculo.vehiculo_id": 1 }, 
  { 
    name: "inx_activos_ahora",
    partialFilterExpression: { estado: "activo" },
    background: true 
  }
);

// Índice Reportes Mensualespor indice por Fecha
db.parques.createIndex(
  { hora_entrada: -1 },
  { name: "inx_fechas_parqueo", background: true }
);

// Índex "Historial del Cliente" 
db.parques.createIndex(
  { "vehiculo.cliente_id": 1 },
  { name: "inx_historial_cliente", background: true }
);


//  COLECCIÓN: vehiculos 
db.vehiculos.createIndex(
  { placa: 1}, 
  { name: "inx_placa_unica", unique: true, background: true }
);

// Índice Dueño del Carro
db.vehiculos.createIndex(
  { cliente_id: 1 }, 
  { name: "inx_dueño_vehiculo", background: true }
);
ss
db.vehiculos.createIndex(
  { tipo_vehiculo: 1 }, 
  { name: "inx_tipo_vehiculo", background: true }
);


db.clientes.createIndex(
  { documento_identidad: 1 }, 
  { name: "inx_documento_unico", unique: true, background: true }
);

db.clientes.createIndex(
  { correo: 1 }, 
  { name: "inx_correo_unico", unique: true, background: true }
);
