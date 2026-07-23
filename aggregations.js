// 1. Parqueos entre un rango de fechas (Usando ISODate para coincidir con bsonType: "date")
db.parques.aggregate([
  {
    $match: {
      hora_entrada: {
        $gte: ISODate("2023-10-01T00:00:00Z"),
        $lt: ISODate("2023-11-01T00:00:00Z")
      }
    }
  },

  {
    $group: {
      _id: "$sede_id",
      total_parqueos: { $sum: 1 }
    }
  }]);

// 2. Zonas más ocupadas agrupadas por sede y zona
db.parques.aggregate([
  {
    $group: {
      _id: { sede: "$sede_id", zona: "$zona_id" },
      cantidad_ocupaciones: { $sum: 1 }
    }
  },
  {
    $sort: { cantidad_ocupaciones: -1 }
  }
]);

// 3. Ingreso total generado por parqueos finalizados por sede
db.parques.aggregate([
  {
    $match: { estado: "finalizado" }
  },
  {
    $group: {
      _id: "$sede_id",
      dinero_generado: { $sum: "$costo_total" }
    }
  }
]);

// 4. Cliente que más ha usado el parqueadero (Requiere $lookup con vehiculos)
db.parqueos.aggregate([
  {
    $lookup: {
      from: "vehiculos",
      localField: "vehiculo_id",
      foreignField: "_id",
      as: "vehiculo"
    }
  },
  { $unwind: "$vehiculo" },
  {
    $group: {
      _id: "$vehiculo.cliente_id",
      veces_usado: { $sum: 1 }
    }
  },
  { $sort: { veces_usado: -1 } },
  { $limit: 1 }]);

// 5. Tipo de vehículo más frecuente por sede 
db.parques.aggregate([
  {
    $lookup: {
      from: "vehiculos",
      localField: "vehiculo_id",
      foreignField: "_id",
      as: "vehiculo"
    }
  },
  { $unwind: "$vehiculo" },
  {
    $group: {
      _id: { sede: "$sede_id", tipo: "$vehiculo.tipo_vehiculo" },
      cantidad: { $sum: 1 }
    }
  },
  { $sort: { "_id.sede": 1, cantidad: -1 } }
]);

// 6. Historial de parqueos de un cliente por su ObjectId
db.parques.aggregate([
  {
    $lookup: {
      from: "vehiculos",
      localField: "vehiculo_id",
      foreignField: "_id",
      as: "vehiculo"
    }
  },
  { $unwind: "$vehiculo" },
 {
    $match: { "vehiculo.cliente_id": ObjectId("Reemplaza con el ObjectId rea") }
  },
  {
    $project: {
      _id: 0, 
      fecha: "$hora_entrada",
      sede: "$sede_id",
      zona: "$zona_id",
      placa: "$vehiculo.placa",
      costo: "$costo_total"
    }
  }
]);

// 7. Vehículos parqueados actualmente (activos) por sede
db.parques.aggregate([
  {
    $match: { estado: "activo" }
  },
  {
    $lookup: {
      from: "vehiculos",
      localField: "vehiculo_id",
      foreignField: "_id",
      as: "vehiculo"
    }
  },
  { $unwind: "$vehiculo" },
  {
    $group: {
      _id: "$sede_id",
      vehiculos_parqueados: { $push: "$vehiculo.placa" }
    }
  }
]);

// 8. Zonas con más de 5 parqueos activos simultáneos
db.parques.aggregate([
  {
    $match: { estado: "activo" }
  },
  {
    $group: {
      _id: "$zona_id",
      ocupados_ahora: { $sum: 1 }
    }
  },
  {
    $match: { ocupados_ahora: { $gt: 5 } } 
  }]);