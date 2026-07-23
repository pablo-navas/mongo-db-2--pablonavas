

db.sede.insertMany([
  
  {
    "_id": 10001,
    "nombre_sede": "Sede Racoon City",
    "ciudad": "Racoon City",
    "direccion": "Comisaria R.P.D."
  },
  {
    "_id": 10002,
    "nombre_sede": "Sede Midgar",
    "ciudad": "Midgar",
    "direccion": "Sector 7"
  },
  {
    "_id": 10003,
    "nombre_sede": "Sede Hyrule",
    "ciudad": "Ciudadela",
    "direccion": "Plaza del Castillo"
  }
])

  db.zona.insertMany([
  // ZONAS - SEDE RACOON CITY 

  {
    "_id": "Z-CAR-1",
    "sede_id": 10001,
    "nombre_zona": "Autos Bravo",
    "capacidad_maxima": 40,
    "cupos_disponibles": 40,
    "tipos_permitidos": ["carro"],
    "tarifa_por_hora": 25.0
  },
  {
    "_id": "Z-BIC-1",
    "sede_id": 10001,
    "nombre_zona": "Bicis Delta",
    "capacidad_maxima": 15,
    "cupos_disponibles": 15,
    "tipos_permitidos": ["bicicleta"],
    "tarifa_por_hora": 10.0
  },
  {
    "_id": "Z-CAM-1",
    "sede_id": 10001,
    "nombre_zona": "Carga Charlie",
    "capacidad_maxima": 30,
    "cupos_disponibles": 30,
    "tipos_permitidos": ["camion"],
    "tarifa_por_hora": 40.0
  },
  {
    "_id": "Z-MOT-1",
    "sede_id": 10001,
    "nombre_zona": "Motos Alpha",
    "capacidad_maxima": 40,
    "cupos_disponibles": 40,
    "tipos_permitidos": ["moto"],
    "tarifa_por_hora": 20.0
  },
  {
    "_id": "Z-MON-1",
    "sede_id": 10001,
    "nombre_zona": "Patinetas Echo",
    "capacidad_maxima": 15,
    "cupos_disponibles": 15,
    "tipos_permitidos": ["monopatin-electrico"],
    "tarifa_por_hora": 10.0
  },

  // ZONAS - SEDE MIDGAR 
  {
    "_id": "Z-CAR-2",
    "sede_id": 10002,
    "nombre_zona": "Autos Shinra",
    "capacidad_maxima": 40,
    "cupos_disponibles": 40,
    "tipos_permitidos": ["carro"],
    "tarifa_por_hora": 25.0
  },
  {
    "_id": "Z-BIC-2",
    "sede_id": 10002,
    "nombre_zona": "Bicis Avalancha",
    "capacidad_maxima": 15,
    "cupos_disponibles": 15,
    "tipos_permitidos": ["bicicleta"],
    "tarifa_por_hora": 10.0
  },
  {
    "_id": "Z-CAM-2",
    "sede_id": 10002,
    "nombre_zona": "Carga Mako",
    "capacidad_maxima": 30,
    "cupos_disponibles": 30,
    "tipos_permitidos": ["camion"],
    "tarifa_por_hora": 40.0
  },
  {
    "_id": "Z-MOT-2",
    "sede_id": 10002,
    "nombre_zona": "Motos Soldier",
    "capacidad_maxima": 40,
    "cupos_disponibles": 40,
    "tipos_permitidos": ["moto"],
    "tarifa_por_hora": 20.0
  },
  {
    "_id": "Z-MON-2",
    "sede_id": 10002,
    "nombre_zona": "Patinetas Sector",
    "capacidad_maxima": 15,
    "cupos_disponibles": 15,
    "tipos_permitidos": ["monopatin-electrico"],
    "tarifa_por_hora": 10.0
  },

  // ZONAS - SEDE HYRULE 
  {
    "_id": "Z-CAR-3",
    "sede_id": 10003,
    "nombre_zona": "Autos Reales",
    "capacidad_maxima": 40,
    "cupos_disponibles": 40,
    "tipos_permitidos": ["carro"],
    "tarifa_por_hora": 25.0
  },
  {
    "_id": "Z-BIC-3",
    "sede_id": 10003,
    "nombre_zona": "Bicis Hylianas",
    "capacidad_maxima": 15,
    "cupos_disponibles": 15,
    "tipos_permitidos": ["bicicleta"],
    "tarifa_por_hora": 10.0
  },
  {
    "_id": "Z-CAM-3",
    "sede_id": 10003,
    "nombre_zona": "Carga Goron",
    "capacidad_maxima": 30,
    "cupos_disponibles": 30,
    "tipos_permitidos": ["camion"],
    "tarifa_por_hora": 40.0
  },
  {
    "_id": "Z-MOT-3",
    "sede_id": 10003,
    "nombre_zona": "Motos Sheikah",
    "capacidad_maxima": 40,
    "cupos_disponibles": 40,
    "tipos_permitidos": ["moto"],
    "tarifa_por_hora": 20.0
  },
  {
    "_id": "Z-MON-3",
    "sede_id": 10003,
    "nombre_zona": "Patinetas Zora",
    "capacidad_maxima": 15,
    "cupos_disponibles": 15,
    "tipos_permitidos": ["monopatin-electrico"],
    "tarifa_por_hora": 10.0
  }
])

db.usuario.insertMany([
  
  {
    "_id": 20001,
    "Dpi": "1548236970101",
    "nombre": "Leon S. Kennedy",
    "email": "leon.k@rpd.com",
    "rol": "Empleado",
    "sede_id": 10001,
    "genero": "M"
  },
  {
    "_id": 20002,
    "Dpi": "2847591020101",
    "nombre": "Claire Redfield",
    "email": "claire.r@rpd.com",
    "rol": "Empleado",
    "sede_id": 10001,
    "genero": "F"
  },
  {
    "_id": 20003,
    "Dpi": "3958201470101",
    "nombre": "Jill Valentine",
    "email": "jill.v@stars.com",
    "rol": "Empleado",
    "sede_id": 10001,
    "genero": "F"
  },
  {
    "_id": 20004,
    "Dpi": "4815203690101",
    "nombre": "Chris Redfield",
    "email": "chris.r@stars.com",
    "rol": "Empleado",
    "sede_id": 10001,
    "genero": "M"
  },
  {
    "_id": 20005,
    "Dpi": "5120369870101",
    "nombre": "Ada Wong",
    "email": "ada.w@unknown.com",
    "rol": "Empleado",
    "sede_id": 10001,
    "genero": "F"
  },
  {
    "_id": 20006,
    "Dpi": "6201478520101",
    "nombre": "Cloud Strife",
    "email": "cloud.s@avalanche.com",
    "rol": "Empleado",
    "sede_id": 10002,
    "genero": "M"
  },
  {
    "_id": 20007,
    "Dpi": "7145203690101",
    "nombre": "Tifa Lockhart",
    "email": "tifa.l@7thheaven.com",
    "rol": "Empleado",
    "sede_id": 10002,
    "genero": "F"
  },
  {
    "_id": 20008,
    "Dpi": "8520147960101",
    "nombre": "Aerith Gainsborough",
    "email": "aerith.g@midgar.com",
    "rol": "Empleado",
    "sede_id": 10002,
    "genero": "F"
  },
  {
    "_id": 20009,
    "Dpi": "9632587410101",
    "nombre": "Barret Wallace",
    "email": "barret.w@avalanche.com",
    "rol": "Empleado",
    "sede_id": 10002,
    "genero": "M"
  },
  {
    "_id": 20010,
    "Dpi": "1025478960101",
    "nombre": "Cid Highwind",
    "email": "cid.h@shinra.com",
    "rol": "Empleado",
    "sede_id": 10002,
    "genero": "M"
  },
  {
    "_id": 20011,
    "Dpi": "1478523690101",
    "nombre": "Lara Croft",
    "email": "lara.c@tombraider.com",
    "rol": "Empleado",
    "sede_id": 10003,
    "genero": "F"
  },
  {
    "_id": 20012,
    "Dpi": "2589631470101",
    "nombre": "Nathan Drake",
    "email": "nate.d@uncharted.com",
    "rol": "Empleado",
    "sede_id": 10003,
    "genero": "M"
  },
  {
    "_id": 20013,
    "Dpi": "3698521470101",
    "nombre": "Arthur Morgan",
    "email": "arthur.m@vanderlinde.com",
    "rol": "Empleado",
    "sede_id": 10003,
    "genero": "M"
  },
  {
    "_id": 20014,
    "Dpi": "4785123690101",
    "nombre": "John Marston",
    "email": "john.m@rdr.com",
    "rol": "Empleado",
    "sede_id": 10003,
    "genero": "M"
  },
  {
    "_id": 20015,
    "Dpi": "5896321470101",
    "nombre": "Sadie Adler",
    "email": "sadie.a@rdr.com",
    "rol": "Empleado",
    "sede_id": 10003,
    "genero": "F"
  },
  { "_id": 30001, "Dpi": "1230004560101", "nombre": "Ellie Williams", "email": "ellie.w@tlou.com", "genero": "F" },
  { "_id": 30002, "Dpi": "1240004560101", "nombre": "Joel Miller", "email": "joel.m@tlou.com", "genero": "M" },
  { "_id": 30003, "Dpi": "1250004560101", "nombre": "Gordon Freeman", "email": "gordon.f@blackmesa.com", "genero": "M" },
  { "_id": 30004, "Dpi": "1260004560101", "nombre": "Alyx Vance", "email": "alyx.v@resistance.com", "genero": "F" },
  { "_id": 30005, "Dpi": "1270004560101", "nombre": "Solid Snake", "email": "snake.s@foxhound.com", "genero": "M" },
  { "_id": 30006, "Dpi": "1280004560101", "nombre": "Ryu Hoshi", "email": "ryu.h@sf.com", "genero": "M" },
  { "_id": 30007, "Dpi": "1290004560101", "nombre": "Chun-Li", "email": "chun.li@interpol.com", "genero": "F" },
  { "_id": 30008, "Dpi": "1300004560101", "nombre": "Sonya Blade", "email": "sonya.b@specialforces.com", "genero": "F" },
  { "_id": 30009, "Dpi": "1310004560101", "nombre": "Johnny Cage", "email": "johnny.c@hollywood.com", "genero": "M" },
  { "_id": 30010, "Dpi": "1320004560101", "nombre": "Aloy", "email": "aloy@nora.com", "genero": "F" },
  { "_id": 30011, "Dpi": "1330004560101", "nombre": "Marcus Fenix", "email": "marcus.f@cog.com", "genero": "M" },
  { "_id": 30012, "Dpi": "1340004560101", "nombre": "Niko Bellic", "email": "niko.b@libertycity.com", "genero": "M" },
  { "_id": 30013, "Dpi": "1350004560101", "nombre": "Carl Johnson", "email": "cj@grovestreet.com", "genero": "M" },
  { "_id": 30014, "Dpi": "1360004560101", "nombre": "Ezio Auditore", "email": "ezio.a@assassins.com", "genero": "M" },
  { "_id": 30015, "Dpi": "1370004560101", "nombre": "Desmond Miles", "email": "desmond.m@animus.com", "genero": "M" },
  { "_id": 30016, "Dpi": "1380004560101", "nombre": "Alan Wake", "email": "alan.w@brightfalls.com", "genero": "M" },
  { "_id": 30017, "Dpi": "1390004560101", "nombre": "Jesse Faden", "email": "jesse.f@fbc.com", "genero": "F" },
  { "_id": 30018, "Dpi": "1400004560101", "nombre": "Max Payne", "email": "max.p@nypd.com", "genero": "M" },
  { "_id": 30019, "Dpi": "1410004560101", "nombre": "Isaac Clarke", "email": "isaac.c@ishimura.com", "genero": "M" },
  { "_id": 30020, "Dpi": "1420004560101", "nombre": "Faith Connors", "email": "faith.c@runners.com", "genero": "F" },
  { "_id": 30021, "Dpi": "1430004560101", "nombre": "Amanda Ripley", "email": "amanda.r@weyland.com", "genero": "F" },
  { "_id": 30022, "Dpi": "1440004560101", "nombre": "Sam Fisher", "email": "sam.f@thirdechelon.com", "genero": "M" },
  { "_id": 30023, "Dpi": "1450004560101", "nombre": "Chloe Frazer", "email": "chloe.f@uncharted.com", "genero": "F" },
  { "_id": 30024, "Dpi": "1460004560101", "nombre": "Elena Fisher", "email": "elena.f@uncharted.com", "genero": "F" },
  { "_id": 30025, "Dpi": "1470004560101", "nombre": "Victor Sullivan", "email": "sully@uncharted.com", "genero": "M" },
  { "_id": 30026, "Dpi": "1480004560101", "nombre": "Jin Sakai", "email": "jin.s@tsushima.com", "genero": "M" },
  { "_id": 30027, "Dpi": "1490004560101", "nombre": "Yuna", "email": "yuna@spira.com", "genero": "F" },
  { "_id": 30028, "Dpi": "1500004560101", "nombre": "Peter Parker", "email": "peter.p@dailybugle.com", "genero": "M" },
  { "_id": 30029, "Dpi": "1510004560101", "nombre": "Mary Jane Watson", "email": "mj.w@dailybugle.com", "genero": "F" },
  { "_id": 30030, "Dpi": "1520004560101", "nombre": "Miles Morales", "email": "miles.m@brooklyn.com", "genero": "M" }
  ]);


db.vehiculo.insertMany([
  { "_id": 40001, "tipo_vehiculo": "auto", "placa": "P-101ABC", "marca": "Toyota", "modelo": "2018", "cliente_id": 30001, "color": "Rojo" },
  { "_id": 40002, "tipo_vehiculo": "moto", "placa": "M-202XYZ", "marca": "Yamaha", "modelo": "2021", "cliente_id": 30001, "color": "Negro" },
  { "_id": 40003, "tipo_vehiculo": "monopatin electrico", "placa": "SCOOT-01", "marca": "Xiaomi", "modelo": "2022", "cliente_id": 30001, "color": "Gris" },
  { "_id": 40004, "tipo_vehiculo": "auto", "placa": "P-303DEF", "marca": "Honda", "modelo": "2019", "cliente_id": 30002, "color": "Azul" },
  { "_id": 40005, "tipo_vehiculo": "camion", "placa": "C-404GHI", "marca": "Volvo", "modelo": "2015", "cliente_id": 30002, "color": "Blanco" },
  { "_id": 40006, "tipo_vehiculo": "moto", "placa": "M-505JKL", "marca": "Honda", "modelo": "2020", "cliente_id": 30003, "color": "Verde" },
  { "_id": 40007, "tipo_vehiculo": "bicicleta", "placa": "N/A", "marca": "Trek", "modelo": "2021", "cliente_id": 30003, "color": "Plata" },
  { "_id": 40008, "tipo_vehiculo": "auto", "placa": "P-606MNO", "marca": "Nissan", "modelo": "2017", "cliente_id": 30004, "color": "Gris" },
  { "_id": 40009, "tipo_vehiculo": "moto", "placa": "M-707PQR", "marca": "Kawasaki", "modelo": "2022", "cliente_id": 30005, "color": "Verde" },
  { "_id": 40010, "tipo_vehiculo": "auto", "placa": "P-808STU", "marca": "Ford", "modelo": "2020", "cliente_id": 30005, "color": "Negro" },
  { "_id": 40011, "tipo_vehiculo": "camion", "placa": "C-909VWX", "marca": "Scania", "modelo": "2018", "cliente_id": 30006, "color": "Rojo" },
  { "_id": 40012, "tipo_vehiculo": "auto", "placa": "P-110YZA", "marca": "Chevrolet", "modelo": "2016", "cliente_id": 30007, "color": "Amarillo" },
  { "_id": 40013, "tipo_vehiculo": "monopatin electrico", "placa": "SCOOT-02", "marca": "Segway", "modelo": "2023", "cliente_id": 30007, "color": "Negro" },
  { "_id": 40014, "tipo_vehiculo": "bicicleta", "placa": "N/A", "marca": "Specialized", "modelo": "2020", "cliente_id": 30008, "color": "Rojo" },
  { "_id": 40015, "tipo_vehiculo": "auto", "placa": "P-220BCD", "marca": "Mazda", "modelo": "2021", "cliente_id": 30009, "color": "Blanco" },
  { "_id": 40016, "tipo_vehiculo": "moto", "placa": "M-330EFG", "marca": "Suzuki", "modelo": "2019", "cliente_id": 30009, "color": "Azul" },
  { "_id": 40017, "tipo_vehiculo": "auto", "placa": "P-440HIJ", "marca": "Hyundai", "modelo": "2022", "cliente_id": 30010, "color": "Plata" },
  { "_id": 40018, "tipo_vehiculo": "bicicleta", "placa": "N/A", "marca": "Giant", "modelo": "2021", "cliente_id": 30010, "color": "Verde" },
  { "_id": 40019, "tipo_vehiculo": "camion", "placa": "C-550KLM", "marca": "International", "modelo": "2017", "cliente_id": 30011, "color": "Azul" },
  { "_id": 40020, "tipo_vehiculo": "auto", "placa": "P-660NOP", "marca": "Kia", "modelo": "2020", "cliente_id": 30012, "color": "Gris" },
  { "_id": 40021, "tipo_vehiculo": "moto", "placa": "M-770QRS", "marca": "Ducati", "modelo": "2023", "cliente_id": 30013, "color": "Rojo" },
  { "_id": 40022, "tipo_vehiculo": "auto", "placa": "P-880TUV", "marca": "BMW", "modelo": "2021", "cliente_id": 30014, "color": "Negro" },
  { "_id": 40023, "tipo_vehiculo": "monopatin electrico", "placa": "SCOOT-03", "marca": "NIU", "modelo": "2022", "cliente_id": 30014, "color": "Blanco" },
  { "_id": 40024, "tipo_vehiculo": "camion", "placa": "C-990WXY", "marca": "Freightliner", "modelo": "2016", "cliente_id": 30015, "color": "Blanco" },
  { "_id": 40025, "tipo_vehiculo": "bicicleta", "placa": "N/A", "marca": "Cannondale", "modelo": "2019", "cliente_id": 30015, "color": "Negro" },
  { "_id": 40026, "tipo_vehiculo": "auto", "placa": "P-102ZAB", "marca": "Audi", "modelo": "2022", "cliente_id": 30016, "color": "Plata" },
  { "_id": 40027, "tipo_vehiculo": "moto", "placa": "M-203CDE", "marca": "Harley-Davidson", "modelo": "2018", "cliente_id": 30017, "color": "Negro" },
  { "_id": 40028, "tipo_vehiculo": "auto", "placa": "P-304FGH", "marca": "Subaru", "modelo": "2020", "cliente_id": 30018, "color": "Azul" },
  { "_id": 40029, "tipo_vehiculo": "camion", "placa": "C-405IJK", "marca": "Mercedes-Benz", "modelo": "2019", "cliente_id": 30019, "color": "Gris" },
  { "_id": 40030, "tipo_vehiculo": "monopatin electrico", "placa": "SCOOT-04", "marca": "Xiaomi", "modelo": "2021", "cliente_id": 30020, "color": "Rojo" },
  { "_id": 40031, "tipo_vehiculo": "bicicleta", "placa": "N/A", "marca": "Scott", "modelo": "2022", "cliente_id": 30020, "color": "Amarillo" },
  { "_id": 40032, "tipo_vehiculo": "auto", "placa": "P-506LMN", "marca": "Volkswagen", "modelo": "2018", "cliente_id": 30021, "color": "Blanco" },
  { "_id": 40033, "tipo_vehiculo": "moto", "placa": "M-607OPQ", "marca": "BMW", "modelo": "2021", "cliente_id": 30022, "color": "Gris" },
  { "_id": 40034, "tipo_vehiculo": "auto", "placa": "P-708RST", "marca": "Jeep", "modelo": "2019", "cliente_id": 30022, "color": "Verde" },
  { "_id": 40035, "tipo_vehiculo": "camion", "placa": "C-809UVW", "marca": "Kenworth", "modelo": "2015", "cliente_id": 30023, "color": "Rojo" },
  { "_id": 40036, "tipo_vehiculo": "bicicleta", "placa": "N/A", "marca": "Santa Cruz", "modelo": "2023", "cliente_id": 30024, "color": "Azul" },
  { "_id": 40037, "tipo_vehiculo": "auto", "placa": "P-910XYZ", "marca": "Peugeot", "modelo": "2020", "cliente_id": 30024, "color": "Gris" },
  { "_id": 40038, "tipo_vehiculo": "moto", "placa": "M-111ABC", "marca": "KTM", "modelo": "2022", "cliente_id": 30025, "color": "Naranja" },
  { "_id": 40039, "tipo_vehiculo": "auto", "placa": "P-222DEF", "marca": "Ford", "modelo": "1967", "cliente_id": 30025, "color": "Negro" },
  { "_id": 40040, "tipo_vehiculo": "monopatin electrico", "placa": "SCOOT-05", "marca": "Ninebot", "modelo": "2022", "cliente_id": 30026, "color": "Negro" },
  { "_id": 40041, "tipo_vehiculo": "camion", "placa": "C-333GHI", "marca": "Isuzu", "modelo": "2018", "cliente_id": 30026, "color": "Blanco" },
  { "_id": 40042, "tipo_vehiculo": "auto", "placa": "P-444JKL", "marca": "Renault", "modelo": "2021", "cliente_id": 30027, "color": "Azul" },
  { "_id": 40043, "tipo_vehiculo": "bicicleta", "placa": "N/A", "marca": "Bianchi", "modelo": "2020", "cliente_id": 30027, "color": "Celeste" },
  { "_id": 40044, "tipo_vehiculo": "moto", "placa": "M-555MNO", "marca": "Royal Enfield", "modelo": "2021", "cliente_id": 30028, "color": "Verde" },
  { "_id": 40045, "tipo_vehiculo": "auto", "placa": "P-666PQR", "marca": "Tesla", "modelo": "2023", "cliente_id": 30028, "color": "Rojo" },
  { "_id": 40046, "tipo_vehiculo": "monopatin electrico", "placa": "SCOOT-06", "marca": "Xiaomi", "modelo": "2023", "cliente_id": 30029, "color": "Blanco" },
  { "_id": 40047, "tipo_vehiculo": "auto", "placa": "P-777STU", "marca": "Honda", "modelo": "2017", "cliente_id": 30029, "color": "Plata" },
  { "_id": 40048, "tipo_vehiculo": "camion", "placa": "C-888VWX", "marca": "Hino", "modelo": "2020", "cliente_id": 30030, "color": "Blanco" },
  { "_id": 40049, "tipo_vehiculo": "moto", "placa": "M-999YZA", "marca": "Aprilia", "modelo": "2022", "cliente_id": 30030, "color": "Negro" },
  { "_id": 40050, "tipo_vehiculo": "bicicleta", "placa": "N/A", "marca": "Merida", "modelo": "2021", "cliente_id": 30030, "color": "Rojo" }
]); 

db.parques.insertMany([
  {
    "_id": 50001,
    "vehiculo": { "_id": 40001, "tipo_vehiculo": "auto", "placa": "P-101ABC", "marca": "Toyota", "modelo": "2018", "cliente_id": 30001, "color": "Rojo" },
    "sede_id": 10001,
    "zona_id": "Z-CAR-1",
    "hora_entrada": "2023-10-25T08:00:00",
    "estado": "activo"
  },
  {
    "_id": 50002,
    "vehiculo": { "_id": 40002, "tipo_vehiculo": "moto", "placa": "M-202XYZ", "marca": "Yamaha", "modelo": "2021", "cliente_id": 30001, "color": "Negro" },
    "sede_id": 10001,
    "zona_id": "Z-MOT-1",
    "hora_entrada": "2023-10-25T09:15:00",
    "estado": "activo"
  },
  {
    "_id": 50003,
    "vehiculo": { "_id": 40003, "tipo_vehiculo": "monopatin electrico", "placa": "SCOOT-01", "marca": "Xiaomi", "modelo": "2022", "cliente_id": 30001, "color": "Gris" },
    "sede_id": 10002,
    "zona_id": "Z-MON-2",
    "hora_entrada": "2023-10-25T10:00:00",
    "estado": "activo"
  },
  {
    "_id": 50004,
    "vehiculo": { "_id": 40004, "tipo_vehiculo": "auto", "placa": "P-303DEF", "marca": "Honda", "modelo": "2019", "cliente_id": 30002, "color": "Azul" },
    "sede_id": 10002,
    "zona_id": "Z-CAR-2",
    "hora_entrada": "2023-10-25T08:30:00",
    "estado": "activo"
  },
  {
    "_id": 50005,
    "vehiculo": { "_id": 40005, "tipo_vehiculo": "camion", "placa": "C-404GHI", "marca": "Volvo", "modelo": "2015", "cliente_id": 30002, "color": "Blanco" },
    "sede_id": 10003,
    "zona_id": "Z-CAM-3",
    "hora_entrada": "2023-10-25T07:00:00",
    "estado": "activo"
  },
  {
    "_id": 50006,
    "vehiculo": { "_id": 40006, "tipo_vehiculo": "moto", "placa": "M-505JKL", "marca": "Honda", "modelo": "2020", "cliente_id": 30003, "color": "Verde" },
    "sede_id": 10003,
    "zona_id": "Z-MOT-3",
    "hora_entrada": "2023-10-25T11:00:00",
    "estado": "activo"
  },
  {
    "_id": 50007,
    "vehiculo": { "_id": 40007, "tipo_vehiculo": "bicicleta", "placa": "N/A", "marca": "Trek", "modelo": "2021", "cliente_id": 30003, "color": "Plata" },
    "sede_id": 10001,
    "zona_id": "Z-BIC-1",
    "hora_entrada": "2023-10-25T09:00:00",
    "estado": "activo"
  },
  {
    "_id": 50008,
    "vehiculo": { "_id": 40008, "tipo_vehiculo": "auto", "placa": "P-606MNO", "marca": "Nissan", "modelo": "2017", "cliente_id": 30004, "color": "Gris" },
    "sede_id": 10001,
    "zona_id": "Z-CAR-1",
    "hora_entrada": "2023-10-25T10:30:00",
    "estado": "activo"
  },
  {
    "_id": 50009,
    "vehiculo": { "_id": 40009, "tipo_vehiculo": "moto", "placa": "M-707PQR", "marca": "Kawasaki", "modelo": "2022", "cliente_id": 30005, "color": "Verde" },
    "sede_id": 10002,
    "zona_id": "Z-MOT-2",
    "hora_entrada": "2023-10-25T08:45:00",
    "estado": "activo"
  },
  {
    "_id": 50010,
    "vehiculo": { "_id": 40010, "tipo_vehiculo": "auto", "placa": "P-808STU", "marca": "Ford", "modelo": "2020", "cliente_id": 30005, "color": "Negro" },
    "sede_id": 10002,
    "zona_id": "Z-CAR-2",
    "hora_entrada": "2023-10-25T09:30:00",
    "estado": "activo"
  },
  {
    "_id": 50011,
    "vehiculo": { "_id": 40011, "tipo_vehiculo": "camion", "placa": "C-909VWX", "marca": "Scania", "modelo": "2018", "cliente_id": 30006, "color": "Rojo" },
    "sede_id": 10001,
    "zona_id": "Z-CAM-1",
    "hora_entrada": "2023-10-25T06:30:00",
    "estado": "activo"
  },
  {
    "_id": 50012,
    "vehiculo": { "_id": 40012, "tipo_vehiculo": "auto", "placa": "P-110YZA", "marca": "Chevrolet", "modelo": "2016", "cliente_id": 30007, "color": "Amarillo" },
    "sede_id": 10003,
    "zona_id": "Z-CAR-3",
    "hora_entrada": "2023-10-25T11:15:00",
    "estado": "activo"
  },
  {
    "_id": 50013,
    "vehiculo": { "_id": 40013, "tipo_vehiculo": "monopatin electrico", "placa": "SCOOT-02", "marca": "Segway", "modelo": "2023", "cliente_id": 30007, "color": "Negro" },
    "sede_id": 10003,
    "zona_id": "Z-MON-3",
    "hora_entrada": "2023-10-25T12:00:00",
    "estado": "activo"
  },
  {
    "_id": 50014,
    "vehiculo": { "_id": 40014, "tipo_vehiculo": "bicicleta", "placa": "N/A", "marca": "Specialized", "modelo": "2020", "cliente_id": 30008, "color": "Rojo" },
    "sede_id": 10002,
    "zona_id": "Z-BIC-2",
    "hora_entrada": "2023-10-25T10:15:00",
    "estado": "activo"
  },
  {
    "_id": 50015,
    "vehiculo": { "_id": 40015, "tipo_vehiculo": "auto", "placa": "P-220BCD", "marca": "Mazda", "modelo": "2021", "cliente_id": 30009, "color": "Blanco" },
    "sede_id": 10001,
    "zona_id": "Z-CAR-1",
    "hora_entrada": "2023-10-25T07:45:00",
    "estado": "activo"
  },
  {
    "_id": 50016,
    "vehiculo": { "_id": 40016, "tipo_vehiculo": "moto", "placa": "M-330EFG", "marca": "Suzuki", "modelo": "2019", "cliente_id": 30009, "color": "Azul" },
    "sede_id": 10001,
    "zona_id": "Z-MOT-1",
    "hora_entrada": "2023-10-25T08:15:00",
    "estado": "activo"
  },
  {
    "_id": 50017,
    "vehiculo": { "_id": 40017, "tipo_vehiculo": "auto", "placa": "P-440HIJ", "marca": "Hyundai", "modelo": "2022", "cliente_id": 30010, "color": "Plata" },
    "sede_id": 10002,
    "zona_id": "Z-CAR-2",
    "hora_entrada": "2023-10-25T09:00:00",
    "estado": "activo"
  },
  {
    "_id": 50018,
    "vehiculo": { "_id": 40018, "tipo_vehiculo": "bicicleta", "placa": "N/A", "marca": "Giant", "modelo": "2021", "cliente_id": 30010, "color": "Verde" },
    "sede_id": 10003,
    "zona_id": "Z-BIC-3",
    "hora_entrada": "2023-10-25T11:30:00",
    "estado": "activo"
  },
  {
    "_id": 50019,
    "vehiculo": { "_id": 40019, "tipo_vehiculo": "camion", "placa": "C-550KLM", "marca": "International", "modelo": "2017", "cliente_id": 30011, "color": "Azul" },
    "sede_id": 10002,
    "zona_id": "Z-CAM-2",
    "hora_entrada": "2023-10-25T06:00:00",
    "estado": "activo"
  },
  {
    "_id": 50020,
    "vehiculo": { "_id": 40020, "tipo_vehiculo": "auto", "placa": "P-660NOP", "marca": "Kia", "modelo": "2020", "cliente_id": 30012, "color": "Gris" },
    "sede_id": 10003,
    "zona_id": "Z-CAR-3",
    "hora_entrada": "2023-10-25T10:00:00",
    "estado": "activo"
  },

  {
    "_id": 50021,
    "vehiculo": { "_id": 40021, "tipo_vehiculo": "moto", "placa": "M-770QRS", "marca": "Ducati", "modelo": "2023", "cliente_id": 30013, "color": "Rojo" },
    "sede_id": 10003,
    "zona_id": "Z-MOT-3",
    "hora_entrada": "2023-10-24T08:00:00",
    "hora_salida": "2023-10-24T10:00:00",
    "tiempo_total_minutos": 120,
    "costo_total": 40.0,
    "estado": "finalizado"
  },
  {
    "_id": 50022,
    "vehiculo": { "_id": 40022, "tipo_vehiculo": "auto", "placa": "P-880TUV", "marca": "BMW", "modelo": "2021", "cliente_id": 30014, "color": "Negro" },
    "sede_id": 10001,
    "zona_id": "Z-CAR-1",
    "hora_entrada": "2023-10-24T09:00:00",
    "hora_salida": "2023-10-24T12:00:00",
    "tiempo_total_minutos": 180,
    "costo_total": 75.0,
    "estado": "finalizado"
  },
  {
    "_id": 50023,
    "vehiculo": { "_id": 40023, "tipo_vehiculo": "monopatin electrico", "placa": "SCOOT-03", "marca": "NIU", "modelo": "2022", "cliente_id": 30014, "color": "Blanco" },
    "sede_id": 10001,
    "zona_id": "Z-MON-1",
    "hora_entrada": "2023-10-24T10:00:00",
    "hora_salida": "2023-10-24T11:00:00",
    "tiempo_total_minutos": 60,
    "costo_total": 10.0,
    "estado": "finalizado"
  },
  {
    "_id": 50024,
    "vehiculo": { "_id": 40024, "tipo_vehiculo": "camion", "placa": "C-990WXY", "marca": "Freightliner", "modelo": "2016", "cliente_id": 30015, "color": "Blanco" },
    "sede_id": 10002,
    "zona_id": "Z-CAM-2",
    "hora_entrada": "2023-10-24T07:00:00",
    "hora_salida": "2023-10-24T11:00:00",
    "tiempo_total_minutos": 240,
    "costo_total": 160.0,
    "estado": "finalizado"
  },
  {
    "_id": 50025,
    "vehiculo": { "_id": 40025, "tipo_vehiculo": "bicicleta", "placa": "N/A", "marca": "Cannondale", "modelo": "2019", "cliente_id": 30015, "color": "Negro" },
    "sede_id": 10002,
    "zona_id": "Z-BIC-2",
    "hora_entrada": "2023-10-24T14:00:00",
    "hora_salida": "2023-10-24T16:00:00",
    "tiempo_total_minutos": 120,
    "costo_total": 20.0,
    "estado": "finalizado"
  },
  {
    "_id": 50026,
    "vehiculo": { "_id": 40026, "tipo_vehiculo": "auto", "placa": "P-102ZAB", "marca": "Audi", "modelo": "2022", "cliente_id": 30016, "color": "Plata" },
    "sede_id": 10003,
    "zona_id": "Z-CAR-3",
    "hora_entrada": "2023-10-24T11:00:00",
    "hora_salida": "2023-10-24T13:00:00",
    "tiempo_total_minutos": 120,
    "costo_total": 50.0,
    "estado": "finalizado"
  },
  {
    "_id": 50027,
    "vehiculo": { "_id": 40027, "tipo_vehiculo": "moto", "placa": "M-203CDE", "marca": "Harley-Davidson", "modelo": "2018", "cliente_id": 30017, "color": "Negro" },
    "sede_id": 10003,
    "zona_id": "Z-MOT-3",
    "hora_entrada": "2023-10-24T15:00:00",
    "hora_salida": "2023-10-24T18:00:00",
    "tiempo_total_minutos": 180,
    "costo_total": 60.0,
    "estado": "finalizado"
  },
  {
    "_id": 50028,
    "vehiculo": { "_id": 40028, "tipo_vehiculo": "auto", "placa": "P-304FGH", "marca": "Subaru", "modelo": "2020", "cliente_id": 30018, "color": "Azul" },
    "sede_id": 10001,
    "zona_id": "Z-CAR-1",
    "hora_entrada": "2023-10-24T13:00:00",
    "hora_salida": "2023-10-24T17:00:00",
    "tiempo_total_minutos": 240,
    "costo_total": 100.0,
    "estado": "finalizado"
  },
  {
    "_id": 50029,
    "vehiculo": { "_id": 40029, "tipo_vehiculo": "camion", "placa": "C-405IJK", "marca": "Mercedes-Benz", "modelo": "2019", "cliente_id": 30019, "color": "Gris" },
    "sede_id": 10001,
    "zona_id": "Z-CAM-1",
    "hora_entrada": "2023-10-24T08:00:00",
    "hora_salida": "2023-10-24T10:00:00",
    "tiempo_total_minutos": 120,
    "costo_total": 80.0,
    "estado": "finalizado"
  },
  {
    "_id": 50030,
    "vehiculo": { "_id": 40030, "tipo_vehiculo": "monopatin electrico", "placa": "SCOOT-04", "marca": "Xiaomi", "modelo": "2021", "cliente_id": 30020, "color": "Rojo" },
    "sede_id": 10002,
    "zona_id": "Z-MON-2",
    "hora_entrada": "2023-10-24T09:00:00",
    "hora_salida": "2023-10-24T11:00:00",
    "tiempo_total_minutos": 120,
    "costo_total": 20.0,
    "estado": "finalizado"
  },
  {
    "_id": 50031,
    "vehiculo": { "_id": 40031, "tipo_vehiculo": "bicicleta", "placa": "N/A", "marca": "Scott", "modelo": "2022", "cliente_id": 30020, "color": "Amarillo" },
    "sede_id": 10002,
    "zona_id": "Z-BIC-2",
    "hora_entrada": "2023-10-24T10:00:00",
    "hora_salida": "2023-10-24T12:00:00",
    "tiempo_total_minutos": 120,
    "costo_total": 20.0,
    "estado": "finalizado"
  },
  {
    "_id": 50032,
    "vehiculo": { "_id": 40032, "tipo_vehiculo": "auto", "placa": "P-506LMN", "marca": "Volkswagen", "modelo": "2018", "cliente_id": 30021, "color": "Blanco" },
    "sede_id": 10003,
    "zona_id": "Z-CAR-3",
    "hora_entrada": "2023-10-24T08:30:00",
    "hora_salida": "2023-10-24T09:30:00",
    "tiempo_total_minutos": 60,
    "costo_total": 25.0,
    "estado": "finalizado"
  },
  {
    "_id": 50033,
    "vehiculo": { "_id": 40033, "tipo_vehiculo": "moto", "placa": "M-607OPQ", "marca": "BMW", "modelo": "2021", "cliente_id": 30022, "color": "Gris" },
    "sede_id": 10003,
    "zona_id": "Z-MOT-3",
    "hora_entrada": "2023-10-24T14:00:00",
    "hora_salida": "2023-10-24T16:00:00",
    "tiempo_total_minutos": 120,
    "costo_total": 40.0,
    "estado": "finalizado"
  },
  {
    "_id": 50034,
    "vehiculo": { "_id": 40034, "tipo_vehiculo": "auto", "placa": "P-708RST", "marca": "Jeep", "modelo": "2019", "cliente_id": 30022, "color": "Verde" },
    "sede_id": 10001,
    "zona_id": "Z-CAR-1",
    "hora_entrada": "2023-10-24T10:00:00",
    "hora_salida": "2023-10-24T12:00:00",
    "tiempo_total_minutos": 120,
    "costo_total": 50.0,
    "estado": "finalizado"
  },
  {
    "_id": 50035,
    "vehiculo": { "_id": 40035, "tipo_vehiculo": "camion", "placa": "C-809UVW", "marca": "Kenworth", "modelo": "2015", "cliente_id": 30023, "color": "Rojo" },
    "sede_id": 10001,
    "zona_id": "Z-CAM-1",
    "hora_entrada": "2023-10-24T06:00:00",
    "hora_salida": "2023-10-24T09:00:00",
    "tiempo_total_minutos": 180,
    "costo_total": 120.0,
    "estado": "finalizado"
  },
  {
    "_id": 50036,
    "vehiculo": { "_id": 40036, "tipo_vehiculo": "bicicleta", "placa": "N/A", "marca": "Santa Cruz", "modelo": "2023", "cliente_id": 30024, "color": "Azul" },
    "sede_id": 10002,
    "zona_id": "Z-BIC-2",
    "hora_entrada": "2023-10-24T16:00:00",
    "hora_salida": "2023-10-24T17:00:00",
    "tiempo_total_minutos": 60,
    "costo_total": 10.0,
    "estado": "finalizado"
  },
  {
    "_id": 50037,
    "vehiculo": { "_id": 40037, "tipo_vehiculo": "auto", "placa": "P-910XYZ", "marca": "Peugeot", "modelo": "2020", "cliente_id": 30024, "color": "Gris" },
    "sede_id": 10002,
    "zona_id": "Z-CAR-2",
    "hora_entrada": "2023-10-24T12:00:00",
    "hora_salida": "2023-10-24T14:00:00",
    "tiempo_total_minutos": 120,
    "costo_total": 50.0,
    "estado": "finalizado"
  },
  {
    "_id": 50038,
    "vehiculo": { "_id": 40038, "tipo_vehiculo": "moto", "placa": "M-111ABC", "marca": "KTM", "modelo": "2022", "cliente_id": 30025, "color": "Naranja" },
    "sede_id": 10003,
    "zona_id": "Z-MOT-3",
    "hora_entrada": "2023-10-24T09:00:00",
    "hora_salida": "2023-10-24T11:00:00",
    "tiempo_total_minutos": 120,
    "costo_total": 40.0,
    "estado": "finalizado"
  },
  {
    "_id": 50039,
    "vehiculo": { "_id": 40039, "tipo_vehiculo": "auto", "placa": "P-222DEF", "marca": "Ford", "modelo": "1967", "cliente_id": 30025, "color": "Negro" },
    "sede_id": 10003,
    "zona_id": "Z-CAR-3",
    "hora_entrada": "2023-10-24T15:00:00",
    "hora_salida": "2023-10-24T18:00:00",
    "tiempo_total_minutos": 180,
    "costo_total": 75.0,
    "estado": "finalizado"
  },
  {
    "_id": 50040,
    "vehiculo": { "_id": 40040, "tipo_vehiculo": "monopatin electrico", "placa": "SCOOT-05", "marca": "Ninebot", "modelo": "2022", "cliente_id": 30026, "color": "Negro" },
    "sede_id": 10001,
    "zona_id": "Z-MON-1",
    "hora_entrada": "2023-10-24T11:00:00",
    "hora_salida": "2023-10-24T13:00:00",
    "tiempo_total_minutos": 120,
    "costo_total": 20.0,
    "estado": "finalizado"
  },
  {
    "_id": 50041,
    "vehiculo": { "_id": 40041, "tipo_vehiculo": "camion", "placa": "C-333GHI", "marca": "Isuzu", "modelo": "2018", "cliente_id": 30026, "color": "Blanco" },
    "sede_id": 10001,
    "zona_id": "Z-CAM-1",
    "hora_entrada": "2023-10-24T07:30:00",
    "hora_salida": "2023-10-24T10:30:00",
    "tiempo_total_minutos": 180,
    "costo_total": 120.0,
    "estado": "finalizado"
  },
  {
    "_id": 50042,
    "vehiculo": { "_id": 40042, "tipo_vehiculo": "auto", "placa": "P-444JKL", "marca": "Renault", "modelo": "2021", "cliente_id": 30027, "color": "Azul" },
    "sede_id": 10002,
    "zona_id": "Z-CAR-2",
    "hora_entrada": "2023-10-24T13:30:00",
    "hora_salida": "2023-10-24T15:30:00",
    "tiempo_total_minutos": 120,
    "costo_total": 50.0,
    "estado": "finalizado"
  },
  {
    "_id": 50043,
    "vehiculo": { "_id": 40043, "tipo_vehiculo": "bicicleta", "placa": "N/A", "marca": "Bianchi", "modelo": "2020", "cliente_id": 30027, "color": "Celeste" },
    "sede_id": 10002,
    "zona_id": "Z-BIC-2",
    "hora_entrada": "2023-10-24T08:00:00",
    "hora_salida": "2023-10-24T10:00:00",
    "tiempo_total_minutos": 120,
    "costo_total": 20.0,
    "estado": "finalizado"
  },
  {
    "_id": 50044,
    "vehiculo": { "_id": 40044, "tipo_vehiculo": "moto", "placa": "M-555MNO", "marca": "Royal Enfield", "modelo": "2021", "cliente_id": 30028, "color": "Verde" },
    "sede_id": 10003,
    "zona_id": "Z-MOT-3",
    "hora_entrada": "2023-10-24T10:00:00",
    "hora_salida": "2023-10-24T13:00:00",
    "tiempo_total_minutos": 180,
    "costo_total": 60.0,
    "estado": "finalizado"
  },
  {
    "_id": 50045,
    "vehiculo": { "_id": 40045, "tipo_vehiculo": "auto", "placa": "P-666PQR", "marca": "Tesla", "modelo": "2023", "cliente_id": 30028, "color": "Rojo" },
    "sede_id": 10003,
    "zona_id": "Z-CAR-3",
    "hora_entrada": "2023-10-24T14:00:00",
    "hora_salida": "2023-10-24T16:00:00",
    "tiempo_total_minutos": 120,
    "costo_total": 50.0,
    "estado": "finalizado"
  },
  {
    "_id": 50046,
    "vehiculo": { "_id": 40046, "tipo_vehiculo": "monopatin electrico", "placa": "SCOOT-06", "marca": "Xiaomi", "modelo": "2023", "cliente_id": 30029, "color": "Blanco" },
    "sede_id": 10001,
    "zona_id": "Z-MON-1",
    "hora_entrada": "2023-10-24T16:00:00",
    "hora_salida": "2023-10-24T17:00:00",
    "tiempo_total_minutos": 60,
    "costo_total": 10.0,
    "estado": "finalizado"
  },
  {
    "_id": 50047,
    "vehiculo": { "_id": 40047, "tipo_vehiculo": "auto", "placa": "P-777STU", "marca": "Honda", "modelo": "2017", "cliente_id": 30029, "color": "Plata" },
    "sede_id": 10001,
    "zona_id": "Z-CAR-1",
    "hora_entrada": "2023-10-24T08:00:00",
    "hora_salida": "2023-10-24T11:00:00",
    "tiempo_total_minutos": 180,
    "costo_total": 75.0,
    "estado": "finalizado"
  },
  {
    "_id": 50048,
    "vehiculo": { "_id": 40048, "tipo_vehiculo": "camion", "placa": "C-888VWX", "marca": "Hino", "modelo": "2020", "cliente_id": 30030, "color": "Blanco" },
    "sede_id": 10002,
    "zona_id": "Z-CAM-2",
    "hora_entrada": "2023-10-24T09:00:00",
    "hora_salida": "2023-10-24T13:00:00",
    "tiempo_total_minutos": 240,
    "costo_total": 160.0,
    "estado": "finalizado"
  },
  {
    "_id": 50049,
    "vehiculo": { "_id": 40049, "tipo_vehiculo": "moto", "placa": "M-999YZA", "marca": "Aprilia", "modelo": "2022", "cliente_id": 30030, "color": "Negro" },
    "sede_id": 10002,
    "zona_id": "Z-MOT-2",
    "hora_entrada": "2023-10-24T11:30:00",
    "hora_salida": "2023-10-24T12:30:00",
    "tiempo_total_minutos": 60,
    "costo_total": 20.0,
    "estado": "finalizado"
  },
  {
    "_id": 50050,
    "vehiculo": { "_id": 40050, "tipo_vehiculo": "bicicleta", "placa": "N/A", "marca": "Merida", "modelo": "2021", "cliente_id": 30030, "color": "Rojo" },
    "sede_id": 10003,
    "zona_id": "Z-BIC-3",
    "hora_entrada": "2023-10-24T15:00:00",
    "hora_salida": "2023-10-24T17:00:00",
    "tiempo_total_minutos": 120,
    "costo_total": 20.0,
    "estado": "finalizado"
  }
]);