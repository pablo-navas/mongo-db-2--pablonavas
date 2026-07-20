//1 Objetivo: Definir y crear todas las colecciones del sistema. Cada colección debe tener:

//Usuario 
     {
  "_id": "ObjectId",
  "cedula": "string (única)",
  "nombre": "string",
  "correo": "string",
  "rol": "string (enum: 'Administrador', 'Empleado de sede', 'Cliente')",
  "sede_id": "ObjectId (opcional, solo si es empleado para limitar su acceso a su sede de trabajo)",
  "genero": "string(M, masculino, F, femenino, O, otro)"
}

//vehiculo 
{ 
  "_id": "ObjectId",
  "tipo_vehiculo": "moto, carro, camion, bicicleta, monopatin-elctrico",
  "placa": "string (única)",
  "marca": "string",
  "modelo": "string",
  "cliente_id": "ObjectId",
   "color": "string"

}

//sede
 {
  "_id": "ObjectId",
  "nombre_sede": "string",
  "ciudad": "string",
  "direccion": "string",
  "zonas": [ 
    {
      "zona_id": "string (ej: 'Z-CAR-01')",
      "nombre_zona": "string",
      "capacidad_maxima": "int",
      "cupos_disponibles": "int",
      "tipos_permitidos": ["string"],
      "tarifa_por_hora": "double"
    }
  ]
}


//parques
{
  "_id": "ObjectId",
  "vehiculo": {
    "vehiculo_id": "ObjectId",
    "tipo_vehiculo": "string",
    "placa": "string",
    "marca": "string",
    "modelo": "string",
    "color": "string"
  },
  "sede_id": "ObjectId",
  "zona_id": "string",
  "hora_entrada": "date",
  "hora_salida": "date (opcional)",
  "tiempo_total_minutos": "int (opcional)",
  "costo_total": "double (opcional)",
  "estado": "string (enum: 'activo', 'finalizado')"
}

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
