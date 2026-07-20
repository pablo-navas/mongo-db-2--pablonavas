//Para hacer transacciones, necesitamos iniciar una sesión.
const session = db.getMongo().startSession();

// Arrancamos la transacción dentro de esa sesión.
session.startTransaction();

 // Guardamos las colecciones pero conectadas a la sesión
try {
  const parquesColl = session.getDatabase("miBasedeDatos").parques;
  const zonasColl = session.getDatabase("miBasedeDatos").zonas;

  // ahors registraremos que un carro acaba de entrar!!.
  parquesColl.insertOne({
    _id: 50001,
    vehiculo: {
      vehiculo_id: 30099,
      tipo_vehiculo: "carro",
      placa: "ABC99",
      marca: "Ford"
    },
    sede_id: 10001,
    zona_id: "Z-CAR-1",
    hora_entrada: new Date(),
    estado: "activo"
  });

  //  quitamos un cupo a la zona porque el carro ocupó el espacio Usamos $inc y -1.
  zonasColl.updateOne(
    { _id: "Z-CAR-1" },
    { $inc: { cupos_disponibles: -1 } }
  );

  // Si llegamos hasta aquí sin errores, guardamos todo de verdad
  session.commitTransaction();

} catch (error) {
  session.abortTransaction();
   
  //si no existe o algun problema: abortamos la transacción. Es como hacer "Ctrl+Z"!! .
  print("Hubo un error, no se guardó nada. Error: " + error);
} finally {
  session.endSession();
}

