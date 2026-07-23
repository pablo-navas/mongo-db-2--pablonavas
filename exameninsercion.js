use examen_parking

db.sede.insertMany([
        {
            "_id": 10004,
            "nombre_sede": "shinri",
            "ciudad": "rasmudie",
            "direccion": "arboleada calle 13"
          },
          {
            "_id": 10005,
            "nombre_sede": "nocturna",
            "ciudad": "kaelen",
            "direccion": "racoon"
          },
          {
            "_id": 10006,
            "nombre_sede": "emergency",
            "ciudad": "drac",
            "direccion": "area de emegencias"

          }
])

db.zona.insertMany([ 
    
    {
        "_id": "Z-CAR-4",
        "sede_id": 10004,
        "nombre_zona": "Automovilistico",
        "capacidad_maxima": 40,
        "cupos_disponibles": 40,
        "tipos_permitidos": ["carro"],
        "tarifa_por_hora": 25.0
      },
      {
        "_id": "Z-BIC-4",
        "sede_id": 10004,
        "nombre_zona": "Biclisticia",
        "capacidad_maxima": 15,
        "cupos_disponibles": 15,
        "tipos_permitidos": ["bicicleta"],
        "tarifa_por_hora": 10.0
      },
      {
        "_id": "Z-CAM-4",
        "sede_id": 10004,
        "nombre_zona": "camioneros",
        "capacidad_maxima": 30,
        "cupos_disponibles": 30,
        "tipos_permitidos": ["camion"],
        "tarifa_por_hora": 40.0
      },

      {
        "_id": "Z-CAR-5",
        "sede_id": 10005,
        "nombre_zona": "Autos nocturnos",
        "capacidad_maxima": 40,
        "cupos_disponibles": 40,
        "tipos_permitidos": ["carro"],
        "tarifa_por_hora": 25.0
      },
      {
        "_id": "Z-BIC-5",
        "sede_id": 10005,
        "nombre_zona": "Bicletas de noche",
        "capacidad_maxima": 15,
        "cupos_disponibles": 15,
        "tipos_permitidos": ["bicicleta"],
        "tarifa_por_hora": 10.0
      },
      {
        "_id": "Z-CAM-5",
        "sede_id": 10005,
        "nombre_zona": "camioneros trabajdores",
        "capacidad_maxima": 30,
        "cupos_disponibles": 30,
        "tipos_permitidos": ["camion"],
        "tarifa_por_hora": 40.0
      },
      {
        "_id": "Z-CAR-6",
        "sede_id": 10006,
        "nombre_zona": "Autos A",
        "capacidad_maxima": 40,
        "cupos_disponibles": 40,
        "tipos_permitidos": ["carro"],
        "tarifa_por_hora": 25.0
      },
      {
        "_id": "Z-BIC-6",
        "sede_id": 10006,
        "nombre_zona": "Bicleta B",
        "capacidad_maxima": 15,
        "cupos_disponibles": 15,
        "tipos_permitidos": ["bicicleta"],
        "tarifa_por_hora": 10.0
      },
      {
        "_id": "Z-CAM-6",
        "sede_id": 10006,
        "nombre_zona": "camioned C",
        "capacidad_maxima": 30,
        "cupos_disponibles": 30,
        "tipos_permitidos": ["camion"],
        "tarifa_por_hora": 40.0
      },
])

db.cliente.insertMany[
{ "_id": 30031, "Dpi": "1470004560101", 
    "nombre": "andrea", "email": "ari@gmail.com", "genero": "F" },
  { "_id": 30032, "Dpi": "1480004560101",
     "nombre": "david", "email": "david@gmail.com", "genero": "M" },
  { "_id": 30033, "Dpi": "1490004560101", 
    "nombre": "edwin", "email": "lovemessi@gmail.com", "genero": "M" },
  { "_id": 30034, "Dpi": "1500004560101",
     "nombre": "carol", "email": "carolee@gmail.com", "genero": "F" },
  { "_id": 30035, "Dpi": "1510004560101",
 "nombre": "pablo", "email": "pablonavas@gmai.conm", "genero": "M" },

  {
    "_id": 200016,
    "Dpi": "9632531410101",
    "nombre": "andre",
    "email": "programacion@gmail.com",
    "rol": "Empleado",
    "sede_id": 10004,
    "genero": "M"
  },
  {
    "_id": 20017,
    "Dpi": "1025487960101",
    "nombre": "bianca",
    "email": "abianca@gmail.com",
    "rol": "Empleado",
    "sede_id": 10005,
    "genero": "F"
  },
  {
    "_id": 20018,
    "Dpi": "1478577690101",
    "nombre": "jorge",
    "email": "shakiroc@gmail.com",
    "rol": "Empleado",
    "sede_id": 10019,
    "genero": "M"
  } ]

  db.vehiculo.insertMany([
    { "_id": 40051, "tipo_vehiculo": "auto", "placa": "P-141ABC", "marca": "mazda", "modelo": "2018", "cliente_id": 30031, "color": "Rojo" },
    { "_id": 40052, "tipo_vehiculo": "moto", "placa": "M-242XYZ", "marca": "toyota", "modelo": "2021", "cliente_id": 30032, "color": "Negro" },
    { "_id": 40053, "tipo_vehiculo": "camion", "placa": "SCOOT-01", "marca": "yamaha", "modelo": "2022", "cliente_id": 30034, "color": "Gris" },
    { "_id": 40054, "tipo_vehiculo": "auto", "placa": "P-343DEF", "marca": "mazda", "modelo": "2019", "cliente_id": 30035, "color": "Azul" },
    { "_id": 40055, "tipo_vehiculo": "camion", "placa": "C-404GHI", "marca": "toyota", "modelo": "2015", "cliente_id": 30031 , "color": "Blanco" },
    { "_id": 40056, "tipo_vehiculo": "moto", "placa": "M-545JKL", "marca": "porsh", "modelo": "2021", "cliente_id": 30032, "color": "Verde" },
    { "_id": 40057, "tipo_vehiculo": "bicicleta", "placa": "N/A", "marca": "yamaha", "modelo": "2011", "cliente_id": 30033 , "color": "Plata" },
    { "_id": 40058, "tipo_vehiculo": "auto", "placa": "P-604MNO", "marca": "mazda", "modelo": "2017", "cliente_id": 30034, "color": "Gris" }, 
    { "_id": 40059, "tipo_vehiculo": "moto", "placa": "M-704PQR", "marca": "nissan", "modelo": "2022", "cliente_id": 30035, "color": "Verde" },
    { "_id": 40060, "tipo_vehiculo": "auto", "placa": "P-848STU", "marca": "honda", "modelo": "2019", "cliente_id": 30033, "color": "Negro" },
 ]);

 
 db.parqueos.insertMany([
    "_id": 50080,
    "vehiculo":  { "_id": 40051, "tipo_vehiculo": "auto", "placa": "P-141ABC", "marca": "mazda", "modelo": "2018", "cliente_id": 30031, "color": "Rojo" },
    "sede_id": 10001,
    "zona_id": "Z-CAM-1",
    "hora_entrada": "2023-10-24T07:30:00",
    "hora_salida": "2023-10-24T10:30:00",
    "tiempo_total_minutos": 180,
    "costo_total": 120.0,
    "estado": "finalizado"
  ]),
  {
    "_id": 50079,
    "vehiculo":     { "_id": 40052, "tipo_vehiculo": "moto", "placa": "M-242XYZ", "marca": "toyota", "modelo": "2021", "cliente_id": 30032, "color": "Negro" },   "sede_id": 10002,
    "zona_id": "Z-CAR-2",
    "hora_entrada": "2023-10-24T13:30:00",
    "hora_salida": "2023-10-24T15:30:00",
    "tiempo_total_minutos": 120,
    "costo_total": 50.0,
    "estado": "finalizado"
  },
  {
    "_id": 50078,
    "vehiculo":   { "_id": 40055, "tipo_vehiculo": "camion", "placa": "C-404GHI", "marca": "toyota", "modelo": "2015", "cliente_id": 30031 , "color": "Blanco" },   "sede_id": 10002,
    "zona_id": "Z-BIC-2",
    "hora_entrada": "2023-10-24T08:00:00",
    "hora_salida": "2023-10-24T10:00:00",
    "tiempo_total_minutos": 120,
    "costo_total": 20.0,
    "estado": "finalizado"
  },
  {
    "_id": 50077,
    "vehiculo":{ "_id": 40054, "tipo_vehiculo": "auto", "placa": "P-343DEF", "marca": "mazda", "modelo": "2019", "cliente_id": 30035, "color": "Azul" },    "sede_id": 10003,
    "zona_id": "Z-MOT-3",
    "hora_entrada": "2023-10-24T10:00:00",
    "hora_salida": "2023-10-24T13:00:00",
    "tiempo_total_minutos": 180,
    "costo_total": 60.0,
    "estado": "finalizado"
  },
  {
    "_id": 50076,
    "vehiculo":    { "_id": 40054, "tipo_vehiculo": "auto", "placa": "P-343DEF", "marca": "mazda", "modelo": "2019", "cliente_id": 30035, "color": "Azul" },
    "sede_id": 10003,
    "zona_id": "Z-CAR-3",
    "hora_entrada": "2023-10-24T14:00:00",
    "hora_salida": "2023-10-24T16:00:00",
    "tiempo_total_minutos": 120,
    "costo_total": 50.0,
    "estado": "finalizado"
  },
  {
    "_id": 50075,
    "vehiculo": { "_id": 40055, "tipo_vehiculo": "camion", "placa": "C-404GHI", "marca": "toyota", "modelo": "2015", "cliente_id": 30031 , "color": "Blanco" },
    "sede_id": 10001,
    "zona_id": "Z-MON-1",
    "hora_entrada": "2023-10-24T16:00:00",
    "hora_salida": "2023-10-24T17:00:00",
    "tiempo_total_minutos": 60,
    "costo_total": 10.0,
    "estado": "finalizado"
  },
  {
    "_id": 50074,
    { "_id": 40056, "tipo_vehiculo": "moto", "placa": "M-545JKL", "marca": "porsh", "modelo": "2021", "cliente_id": 30032, "color": "Verde" },
    "sede_id": 10001,
    "zona_id": "Z-CAR-1",
    "hora_entrada": "2023-10-24T08:00:00",
    "hora_salida": "2023-10-24T11:00:00",
    "tiempo_total_minutos": 180,
    "costo_total": 75.0,
    "estado": "finalizado"
  },
  {
    "_id": 50073,
    { "_id": 40057, "tipo_vehiculo": "bicicleta", "placa": "N/A", "marca": "yamaha", "modelo": "2011", "cliente_id": 30033 , "color": "Plata" },
    "sede_id": 10002,
    "zona_id": "Z-CAM-2",
    "hora_entrada": "2023-10-24T09:00:00",
    "hora_salida": "2023-10-24T13:00:00",
    "tiempo_total_minutos": 240,
    "costo_total": 160.0,
    "estado": "finalizado"
  },
  {
    "_id": 50072,
    { "_id": 40058, "tipo_vehiculo": "auto", "placa": "P-604MNO", "marca": "mazda", "modelo": "2017", "cliente_id": 30034, "color": "Gris" }, 
    "sede_id": 10002,
    "zona_id": "Z-MOT-2",
    "hora_entrada": "2023-10-24T11:30:00",
    "hora_salida": "2023-10-24T12:30:00",
    "tiempo_total_minutos": 60,
    "costo_total": 20.0,
    "estado": "finalizado"
  },
  {
    "_id": 50071,
    { "_id": 40059, "tipo_vehiculo": "moto", "placa": "M-704PQR", "marca": "nissan", "modelo": "2022", "cliente_id": 30035, "color": "Verde" },
    "sede_id": 10003,
    "zona_id": "Z-BIC-3",
    "hora_entrada": "2023-10-24T15:00:00",
    "hora_salida": "2023-10-24T17:00:00",
    "tiempo_total_minutos": 120,
    "costo_total": 20.0,
    "estado": "finalizado"
  }
  "_id": 50070,
  "vehiculo":  { "_id": 40051, "tipo_vehiculo": "auto", "placa": "P-141ABC", "marca": "mazda", "modelo": "2018", "cliente_id": 30031, "color": "Rojo" },
  "sede_id": 10001,
  "zona_id": "Z-CAM-1",
  "hora_entrada": "2023-10-24T07:30:00",
  "hora_salida": "2023-10-24T10:30:00",
  "tiempo_total_minutos": 180,
  "costo_total": 120.0,
  "estado": "finalizado"
},
{
  "_id": 50069,
  "vehiculo":     { "_id": 40052, "tipo_vehiculo": "moto", "placa": "M-242XYZ", "marca": "toyota", "modelo": "2021", "cliente_id": 30032, "color": "Negro" },   "sede_id": 10002,
  "zona_id": "Z-CAR-2",
  "hora_entrada": "2023-10-24T13:30:00",
  "hora_salida": "2023-10-24T15:30:00",
  "tiempo_total_minutos": 120,
  "costo_total": 50.0,
  "estado": "finalizado"
},
{
  "_id": 50068,
  "vehiculo":   { "_id": 40055, "tipo_vehiculo": "camion", "placa": "C-404GHI", "marca": "toyota", "modelo": "2015", "cliente_id": 30031 , "color": "Blanco" },   "sede_id": 10002,
  "zona_id": "Z-BIC-2",
  "hora_entrada": "2023-10-24T08:00:00",
  "hora_salida": "2023-10-24T10:00:00",
  "tiempo_total_minutos": 120,
  "costo_total": 20.0,
  "estado": "finalizado"
},
{
  "_id": 50067,
  "vehiculo":{ "_id": 40054, "tipo_vehiculo": "auto", "placa": "P-343DEF", "marca": "mazda", "modelo": "2019", "cliente_id": 30035, "color": "Azul" },    "sede_id": 10003,
  "zona_id": "Z-MOT-3",
  "hora_entrada": "2023-10-24T10:00:00",
  "hora_salida": "2023-10-24T13:00:00",
  "tiempo_total_minutos": 180,
  "costo_total": 60.0,
  "estado": "finalizado"
},
{
  "_id": 50066,
  "vehiculo":    { "_id": 40054, "tipo_vehiculo": "auto", "placa": "P-343DEF", "marca": "mazda", "modelo": "2019", "cliente_id": 30035, "color": "Azul" },
  "sede_id": 10003,
  "zona_id": "Z-CAR-3",
  "hora_entrada": "2023-10-24T14:00:00",
  "hora_salida": "2023-10-24T16:00:00",
  "tiempo_total_minutos": 120,
  "costo_total": 50.0,
  "estado": "finalizado"
},
{
  "_id": 50065,
  "vehiculo": { "_id": 40055, "tipo_vehiculo": "camion", "placa": "C-404GHI", "marca": "toyota", "modelo": "2015", "cliente_id": 30031 , "color": "Blanco" },
  "sede_id": 10001,
  "zona_id": "Z-MON-1",
  "hora_entrada": "2023-10-24T16:00:00",
  "hora_salida": "2023-10-24T17:00:00",
  "tiempo_total_minutos": 60,
  "costo_total": 10.0,
  "estado": "finalizado"
},
{
  "_id": 5064,
  { "_id": 40056, "tipo_vehiculo": "moto", "placa": "M-545JKL", "marca": "porsh", "modelo": "2021", "cliente_id": 30032, "color": "Verde" },
  "sede_id": 10001,
  "zona_id": "Z-CAR-1",
  "hora_entrada": "2023-10-24T08:00:00",
  "hora_salida": "2023-10-24T11:00:00",
  "tiempo_total_minutos": 180,
  "costo_total": 75.0,
  "estado": "finalizado"
},
{
  "_id": 50063,
  { "_id": 40057, "tipo_vehiculo": "bicicleta", "placa": "N/A", "marca": "yamaha", "modelo": "2011", "cliente_id": 30033 , "color": "Plata" },
  "sede_id": 10002,
  "zona_id": "Z-CAM-2",
  "hora_entrada": "2023-10-24T09:00:00",
  "hora_salida": "2023-10-24T13:00:00",
  "tiempo_total_minutos": 240,
  "costo_total": 160.0,
  "estado": "finalizado"
},
{
  "_id": 50062,
  { "_id": 40058, "tipo_vehiculo": "auto", "placa": "P-604MNO", "marca": "mazda", "modelo": "2017", "cliente_id": 30034, "color": "Gris" }, 
  "sede_id": 10002,
  "zona_id": "Z-MOT-2",
  "hora_entrada": "2023-10-24T11:30:00",
  "hora_salida": "2023-10-24T12:30:00",
  "tiempo_total_minutos": 60,
  "costo_total": 20.0,
  "estado": "finalizado"
},
{
  "_id": 50061,
  { "_id": 40059, "tipo_vehiculo": "moto", "placa": "M-704PQR", "marca": "nissan", "modelo": "2022", "cliente_id": 30035, "color": "Verde" },
  "sede_id": 10003,
  "zona_id": "Z-BIC-3",
  "hora_entrada": "2023-10-24T15:00:00",
  "hora_salida": "2023-10-24T17:00:00",
  "tiempo_total_minutos": 120,
  "costo_total": 20.0,
  "estado": "finalizado"
},
{
    "_id": 50061,
    { "_id": 40059, "tipo_vehiculo": "moto", "placa": "M-704PQR", "marca": "nissan", "modelo": "2022", "cliente_id": 30035, "color": "Verde" },
    "sede_id": 10003,
    "zona_id": "Z-BIC-3",
    "hora_entrada": "2023-10-24T15:00:00",
    "hora_salida": "2023-10-24T17:00:00",
    "tiempo_total_minutos": 120,
    "costo_total": 20.0,
    "estado": "finalizado"
  }
]);


