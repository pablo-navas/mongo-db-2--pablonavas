// clientes
db.runCommand({
  collMod: "clientes",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "apellido", "email"],
      properties: {
        nombre: { bsonType: "string" },
        apellido: { bsonType: "string" },
        email: { 
          bsonType: "string", 
          pattern: "^.+@.+$" 
        },
        telefono: { bsonType: "string" }
      }
    }
  }
});
// vehiculos
db.runCommand({
  collMod: "vehiculos",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["placa", "cliente_id"],
      properties: {
        placa: { bsonType: "string" },
        cliente_id: { bsonType: "objectId" },
        marca: { bsonType: "string" },
        modelo: { bsonType: "string" },
        color: { bsonType: "string" }
      }
    }
  }
});

// parqueos
db.runCommand({
  collMod: "parqueos",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["vehiculo_id", "sede_id", "zona_id", "hora_entrada", "estado"],
      properties: {
        vehiculo_id: { bsonType: "objectId" },
        sede_id: { bsonType: "objectId" },
        zona_id: { bsonType: "objectId" },
        hora_entrada: { bsonType: "date" },
        hora_salida: { bsonType: "date" },
        estado: { enum: ["activo", "finalizado"] }
      }
    }
  }
});

// empleados
db.runCommand({
  collMod: "empleados",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["codigo_empleado", "nombre", "sede_id", "activo"],
      properties: {
        codigo_empleado: { bsonType: "string" },
        nombre: { bsonType: "string" },
        sede_id: { bsonType: "objectId" },
        activo: { bsonType: "bool" }
      }
    }
  }
});

// sedes
db.runCommand({
  collMod: "sedes",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "ciudad"],
      properties: {
        nombre: { bsonType: "string" },
        ciudad: { bsonType: "string" },
        direccion: { bsonType: "string" }
      }
    }
  }
});

// zonas
db.runCommand({
  collMod: "zonas",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "sede_id", "capacidad"],
      properties: {
        nombre: { bsonType: "string" },
        sede_id: { bsonType: "objectId" },
        capacidad: { bsonType: "int" }
      }
    }
  }
});
// 1. Colección: clientes
db.clientes.createIndex(
  { email: 1 }, 
  { unique: true, name: "idx_clientes_email_unique" }
);

db.clientes.createIndex(
  { apellido: 1, nombre: 1 }, 
  { name: "idx_clientes_busqueda_nombre" }
);


//  vehiculos

db.vehiculos.createIndex(
  { placa: 1 }, 
  { unique: true, name: "idx_vehiculos_placa_unique" }
);

db.vehiculos.createIndex(
  { cliente_id: 1 }, 
  { name: "idx_vehiculos_cliente" }
);


//  parqueos

db.parqueos.createIndex(
  { vehiculo_id: 1, estado: 1 }, 
  { name: "idx_parqueos_vehiculo_estado" }
);
db.parqueos.createIndex(
  { fecha_entrada: -1, estado: 1 }, 
  { name: "idx_parqueos_fecha_estado" }
);


// empleados


db.empleados.createIndex(
  { codigo_empleado: 1 }, 
  { unique: true, name: "idx_empleados_codigo_unique" }
);

db.empleados.createIndex(
  { sede_id: 1, activo: 1 }, 
  { name: "idx_empleados_sede_activo" }
);

// sedes
db.sedes.createIndex(
  { nombre: 1 }, 
  { unique: true, name: "idx_sedes_nombre_unique" }
);

db.sedes.createIndex(
  { ciudad: 1 }, 
  { name: "idx_ciudad" }
);