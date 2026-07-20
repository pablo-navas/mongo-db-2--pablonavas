db.parques.aggregate([
  {
    $match: {
      hora_entrada: {
        $gte: "2023-10-01T00:00:00Z",
        $lt: "2023-11-01T00:00:00Z"
      }
    }
  },
  {
    $group: {
      _id: "$sede_id",
      total_parqueos: { $sum: 1 }
    }
  }
]);

// 2. ¿Cuáles son las zonas más ocupadas en cada sede? agrupamos por dos cosas a la vez (sede y zona). Luego contamos cuántos hay. Al final usamos $sort para ordenar de mayor a menor -1osea  y ver las más ocupadas arriba.
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

// 3. ¿Cuál es el ingreso total generado por parqueo en cada sede? Primero filtramos solo los parqueos que ya están "finalizados" porque son los que tienen cobro. Después agrupamos por sede y sumamos el campo llamado costo_total
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

// 4. ¿Qué cliente ha usado más veces el parqueadero? como el cliente está dentro de vehiculo, agrupamos por vehiculo.cliente_id. Contamos, ordenamos de mayor a menor y usamos $limit para que solo nos devuelva el primer lugar (el ganador).
db.parques.aggregate([
  {
    $group: {
      _id: "$vehiculo.cliente_id",
      veces_usado: { $sum: 1 }
    }
  },
  {
    $sort: { veces_usado: -1 }
  },
  {
    $limit: 1
  }
]);

// 5. ¿Qué tipo de vehículo es más frecuente por sede? Aggrupamos por sede y tipo de vehículo. Cuenta cuántos hay de cada uno, Luego ordenamos. Para ver el más frecuente, los más altos quedarán de primeros.
db.parques.aggregate([
  {
    $group: {
      _id: { sede: "$sede_id", tipo: "$vehiculo.tipo_vehiculo" },
      cantidad: { $sum: 1 }
    }
  },
  {
    $sort: { "_id.sede": 1, cantidad: -1 }
  }
]);

// 6. Dado un cliente, mostrar su historial de parqueos. Digamos que buscamos al cliente 20022. Usamos $match para encontrarlo. Luego usamos $project para decirle a Mongo: HEy!! solo muéstrame estos campos y oculta los demás :D.
db.parques.aggregate([
  {
    $match: { "vehiculo.cliente_id": 20022 }
  },
  {
    $project: {
      _id: 0, 
      fecha: "$hora_entrada",
      sede: "$sede_id",
      zona: "$zona_id",
      tipo_vehiculo: "$vehiculo.tipo_vehiculo",
      tiempo: "$tiempo_total_minutos",
      costo: "$costo_total"
    }
  }
]);

// 7. Mostrar los vehículos parqueados actualmente en cada sede. Filtramos los que tienen estado activo.  Agrupamos por sede y usamos $push para meter las placas en una lista para que se vea ordenado.
db.parques.aggregate([
  {
    $match: { estado: "activo" }
  },
  {
    $group: {
      _id: "$sede_id",
      vehiculos_parqueados: { $push: "$vehiculo.placa" }
    }
  }
]);

// 8. Listar zonas que han excedido su capacidad de parqueo en algún momento. Supongamos que la capacidad máxima de una zona es de 5 vehículos. agrupamos los activos por zona, los contamos, y con otro $match, filtramos los que tengan más de 5.
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
  }
]);
