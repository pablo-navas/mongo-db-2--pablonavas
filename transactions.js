
const session = db.getMongo().startSession();
session.startTransaction();

try {
  const zonasColl = session.getDatabase("sistema_parqueos").zonas;
  const parqueosColl = session.getDatabase("sistema_parqueos").parqueos;
  const idZona = ObjectId("COLOCA_AQUI_UN_ID_DE_ZONA");
  const idVehiculo = ObjectId("COLOCA_AQUI_UN_ID_DE_VEHICULO");

  // 1. Validar que la zona existe
  const zona = zonasColl.findOne({ _id: idZona }, { session });
  if (!zona) throw new Error("La zona solicitada no existe.");

  // 2. Validar que haya cupos disponibles
  if (zona.cupos_disponibles <= 0) throw new Error("No hay cupos disponibles en esta zona.");

  // 3. Registrar el parqueo
  parqueosColl.insertOne({
    vehiculo_id: idVehiculo,
    sede_id: zona.sede_id,
    zona_id: idZona,
    hora_entrada: new Date(),
    estado: "activo"
  }, { session });

  // 4. Actualizar los cupos y validar que se actualizó correctamente, -1 para decir que un parqueo ya no esta disponible
  const updateResult = zonasColl.updateOne(
    { _id: idZona, cupos_disponibles: { $gt: 0 } },
    { $inc: { cupos_disponibles: -1 } },
    { session });
if (updateResult.modifiedCount === 0) throw new Error("Fallo al actualizar los cupos.");

  session.commitTransaction();
   print( "Parqueo registrado");

} catch (error) {
  session.abortTransaction();
  print("Transacción abortada. Razón: " + error.message);
} finally
 { session.endSession();
};