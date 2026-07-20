

db.sede.insertMany([
  {
    "_id": 10001,
    "nombre_sede": "Sede Racoon City",
    "ciudad": "Racoon City",
    "direccion": "Comisaria R.P.D.",
    "zonas": [
      { "zona_id": "Z-MOT-1", "nombre_zona": "Motos Alpha", "capacidad_maxima": 20, "cupos_disponibles": 20, "tipos_permitidos": ["moto"], "tarifa_por_hora": 1500.0 },
      { "zona_id": "Z-CAR-1", "nombre_zona": "Autos Bravo", "capacidad_maxima": 30, "cupos_disponibles": 30, "tipos_permitidos": ["carro"], "tarifa_por_hora": 3000.0 },
      { "zona_id": "Z-CAM-1", "nombre_zona": "Carga Charlie", "capacidad_maxima": 10, "cupos_disponibles": 10, "tipos_permitidos": ["camion"], "tarifa_por_hora": 5000.0 },
      { "zona_id": "Z-BIC-1", "nombre_zona": "Bicis Delta", "capacidad_maxima": 15, "cupos_disponibles": 15, "tipos_permitidos": ["bicicleta"], "tarifa_por_hora": 500.0 },
      { "zona_id": "Z-MON-1", "nombre_zona": "Patinetas Echo", "capacidad_maxima": 10, "cupos_disponibles": 10, "tipos_permitidos": ["monopatin-elctrico"], "tarifa_por_hora": 800.0 }
    ]
  },
  {
    "_id": 10002,
    "nombre_sede": "Sede Midgar",
    "ciudad": "Midgar",
    "direccion": "Sector 7",
    "zonas": [
      { "zona_id": "Z-MOT-2", "nombre_zona": "Motos Soldier", "capacidad_maxima": 25, "cupos_disponibles": 25, "tipos_permitidos": ["moto"], "tarifa_por_hora": 1600.0 },
      { "zona_id": "Z-CAR-2", "nombre_zona": "Autos Shinra", "capacidad_maxima": 40, "cupos_disponibles": 40, "tipos_permitidos": ["carro"], "tarifa_por_hora": 3500.0 },
      { "zona_id": "Z-CAM-2", "nombre_zona": "Carga Mako", "capacidad_maxima": 15, "cupos_disponibles": 15, "tipos_permitidos": ["camion"], "tarifa_por_hora": 5500.0 },
      { "zona_id": "Z-BIC-2", "nombre_zona": "Bicis Avalancha", "capacidad_maxima": 20, "cupos_disponibles": 20, "tipos_permitidos": ["bicicleta"], "tarifa_por_hora": 600.0 },
      { "zona_id": "Z-MON-2", "nombre_zona": "Patinetas Sector", "capacidad_maxima": 15, "cupos_disponibles": 15, "tipos_permitidos": ["monopatin-elctrico"], "tarifa_por_hora": 900.0 }
    ]
  },
  {
    "_id": 10003,
    "nombre_sede": "Sede Hyrule",
    "ciudad": "Ciudadela",
    "direccion": "Plaza del Castillo",
    "zonas": [
      { "zona_id": "Z-MOT-3", "nombre_zona": "Motos Sheikah", "capacidad_maxima": 30, "cupos_disponibles": 30, "tipos_permitidos": ["moto"], "tarifa_por_hora": 1400.0 },
      { "zona_id": "Z-CAR-3", "nombre_zona": "Autos Reales", "capacidad_maxima": 50, "cupos_disponibles": 50, "tipos_permitidos": ["carro"], "tarifa_por_hora": 2800.0 },
      { "zona_id": "Z-CAM-3", "nombre_zona": "Carga Goron", "capacidad_maxima": 12, "cupos_disponibles": 12, "tipos_permitidos": ["camion"], "tarifa_por_hora": 4800.0 },
      { "zona_id": "Z-BIC-3", "nombre_zona": "Bicis Hylianas", "capacidad_maxima": 25, "cupos_disponibles": 25, "tipos_permitidos": ["bicicleta"], "tarifa_por_hora": 400.0 },
      { "zona_id": "Z-MON-3", "nombre_zona": "Patinetas Zora", "capacidad_maxima": 20, "cupos_disponibles": 20, "tipos_permitidos": ["monopatin-elctrico"], "tarifa_por_hora": 700.0 }
    ]
  }
]);

db.usuario.insertMany([
  { "_id": 20001, "cedula": "E1001", "nombre": "Leon Kennedy", "correo": "leon.k@rpd.com", "rol": "Empleado de sede", "sede_id": 10001, "genero": "M" },
  { "_id": 20002, "cedula": "E1002", "nombre": "Claire Redfield", "correo": "claire.r@terrasave.com", "rol": "Empleado de sede", "sede_id": 10001, "genero": "F" },
  { "_id": 20003, "cedula": "E1003", "nombre": "Jill Valentine", "correo": "jill.v@stars.com", "rol": "Empleado de sede", "sede_id": 10001, "genero": "F" },
  { "_id": 20004, "cedula": "E1004", "nombre": "Chris Redfield", "correo": "chris.r@bsaa.com", "rol": "Empleado de sede", "sede_id": 10001, "genero": "M" },
  { "_id": 20005, "cedula": "E1005", "nombre": "Albert Wesker", "correo": "a.wesker@umbrella.com", "rol": "Empleado de sede", "sede_id": 10001, "genero": "M" },
  { "_id": 20006, "cedula": "E1006", "nombre": "Ada Wong", "correo": "ada.w@spy.com", "rol": "Empleado de sede", "sede_id": 10001, "genero": "F" },
  { "_id": 20007, "cedula": "E1007", "nombre": "Cloud Strife", "correo": "cloud@avalanche.com", "rol": "Empleado de sede", "sede_id": 10002, "genero": "M" },
  { "_id": 20008, "cedula": "E1008", "nombre": "Tifa Lockhart", "correo": "tifa@7thheaven.com", "rol": "Empleado de sede", "sede_id": 10002, "genero": "F" },
  { "_id": 20009, "cedula": "E1009", "nombre": "Aerith Gainsborough", "correo": "aerith@cetra.com", "rol": "Empleado de sede", "sede_id": 10002, "genero": "F" },
  { "_id": 20010, "cedula": "E1010", "nombre": "Barret Wallace", "correo": "barret@avalanche.com", "rol": "Empleado de sede", "sede_id": 10002, "genero": "M" },
  { "_id": 20011, "cedula": "E1011", "nombre": "Sephiroth", "correo": "sephiroth@shinra.com", "rol": "Empleado de sede", "sede_id": 10002, "genero": "M" },
  { "_id": 20012, "cedula": "E1012", "nombre": "Zack Fair", "correo": "zack@soldier.com", "rol": "Empleado de sede", "sede_id": 10002, "genero": "M" },
  { "_id": 20013, "cedula": "E1013", "nombre": "Link", "correo": "link@hyrule.com", "rol": "Empleado de sede", "sede_id": 10003, "genero": "M" },
  { "_id": 20014, "cedula": "E1014", "nombre": "Zelda", "correo": "zelda@hyrule.com", "rol": "Empleado de sede", "sede_id": 10003, "genero": "F" },
  { "_id": 20015, "cedula": "E1015", "nombre": "Ganondorf", "correo": "ganon@gerudo.com", "rol": "Empleado de sede", "sede_id": 10003, "genero": "M" },
  { "_id": 20016, "cedula": "E1016", "nombre": "Impa", "correo": "impa@sheikah.com", "rol": "Empleado de sede", "sede_id": 10003, "genero": "F" },
  { "_id": 20017, "cedula": "E1017", "nombre": "Midna", "correo": "midna@twilight.com", "rol": "Empleado de sede", "sede_id": 10003, "genero": "F" },
  { "_id": 20018, "cedula": "E1018", "nombre": "Daruk", "correo": "daruk@goron.com", "rol": "Empleado de sede", "sede_id": 10003, "genero": "M" },
  { "_id": 20019, "cedula": "E1019", "nombre": "Mipha", "correo": "mipha@zora.com", "rol": "Empleado de sede", "sede_id": 10003, "genero": "F" },
  { "_id": 20020, "cedula": "E1020", "nombre": "Revali", "correo": "revali@rito.com", "rol": "Empleado de sede", "sede_id": 10003, "genero": "M" },
  { "_id": 20021, "cedula": "C2001", "nombre": "Mewtwo", "correo": "mewtwo@kanto.com", "rol": "Cliente", "genero": "O" },
  { "_id": 20022, "cedula": "C2002", "nombre": "Crazy Dave", "correo": "dave@pvz.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20023, "cedula": "C2003", "nombre": "Mario", "correo": "mario@mushroom.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20024, "cedula": "C2004", "nombre": "Luigi", "correo": "luigi@mansion.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20025, "cedula": "C2005", "nombre": "Peach", "correo": "peach@castle.com", "rol": "Cliente", "genero": "F" },
  { "_id": 20026, "cedula": "C2006", "nombre": "Bowser", "correo": "bowser@darkworld.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20027, "cedula": "C2007", "nombre": "Samus Aran", "correo": "samus@bounty.com", "rol": "Cliente", "genero": "F" },
  { "_id": 20028, "cedula": "C2008", "nombre": "Master Chief", "correo": "john117@unsc.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20029, "cedula": "C2009", "nombre": "Cortana", "correo": "cortana@ai.unsc.com", "rol": "Cliente", "genero": "F" },
  { "_id": 20030, "cedula": "C2010", "nombre": "Kratos", "correo": "kratos@sparta.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20031, "cedula": "C2011", "nombre": "Atreus", "correo": "boy@midgard.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20032, "cedula": "C2012", "nombre": "Lara Croft", "correo": "lara@croft.com", "rol": "Cliente", "genero": "F" },
  { "_id": 20033, "cedula": "C2013", "nombre": "Nathan Drake", "correo": "nate@uncharted.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20034, "cedula": "C2014", "nombre": "Joel Miller", "correo": "joel@tlou.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20035, "cedula": "C2015", "nombre": "Ellie Williams", "correo": "ellie@fireflies.com", "rol": "Cliente", "genero": "F" },
  { "_id": 20036, "cedula": "C2016", "nombre": "Arthur Morgan", "correo": "arthur@vanderlinde.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20037, "cedula": "C2017", "nombre": "John Marston", "correo": "john@blackwater.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20038, "cedula": "C2018", "nombre": "Geralt de Rivia", "correo": "geralt@kaermorhen.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20039, "cedula": "C2019", "nombre": "Yennefer", "correo": "yen@vengerberg.com", "rol": "Cliente", "genero": "F" },
  { "_id": 20040, "cedula": "C2020", "nombre": "Ciri", "correo": "ciri@witcher.com", "rol": "Cliente", "genero": "F" },
  { "_id": 20041, "cedula": "C2021", "nombre": "Ryu", "correo": "ryu@hadouken.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20042, "cedula": "C2022", "nombre": "Chun-Li", "correo": "chunli@interpol.com", "rol": "Cliente", "genero": "F" },
  { "_id": 20043, "cedula": "C2023", "nombre": "Scorpion", "correo": "hanzo@shirai.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20044, "cedula": "C2024", "nombre": "Sub-Zero", "correo": "kuai@linkuei.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20045, "cedula": "C2025", "nombre": "Solid Snake", "correo": "snake@foxhound.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20046, "cedula": "C2026", "nombre": "Big Boss", "correo": "boss@outerheaven.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20047, "cedula": "C2027", "nombre": "Dante", "correo": "dante@dmc.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20048, "cedula": "C2028", "nombre": "Vergil", "correo": "vergil@power.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20049, "cedula": "C2029", "nombre": "Sora", "correo": "sora@destinyislands.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20050, "cedula": "C2030", "nombre": "Riku", "correo": "riku@keyblade.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20051, "cedula": "C2031", "nombre": "Aloy", "correo": "aloy@nora.com", "rol": "Cliente", "genero": "F" },
  { "_id": 20052, "cedula": "C2032", "nombre": "Marcus Fenix", "correo": "marcus@cog.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20053, "cedula": "C2033", "nombre": "Dom Santiago", "correo": "dom@cog.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20054, "cedula": "C2034", "nombre": "Gordon Freeman", "correo": "gordon@blackmesa.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20055, "cedula": "C2035", "nombre": "Alyx Vance", "correo": "alyx@resistance.com", "rol": "Cliente", "genero": "F" },
  { "_id": 20056, "cedula": "C2036", "nombre": "GLaDOS", "correo": "glados@aperture.com", "rol": "Cliente", "genero": "F" },
  { "_id": 20057, "cedula": "C2037", "nombre": "Chell", "correo": "chell@portal.com", "rol": "Cliente", "genero": "F" },
  { "_id": 20058, "cedula": "C2038", "nombre": "Steve", "correo": "steve@mojang.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20059, "cedula": "C2039", "nombre": "Alex", "correo": "alex@mojang.com", "rol": "Cliente", "genero": "F" },
  { "_id": 20060, "cedula": "C2040", "nombre": "Sonic", "correo": "sonic@greenhill.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20061, "cedula": "C2041", "nombre": "Tails", "correo": "tails@workshop.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20062, "cedula": "C2042", "nombre": "Knuckles", "correo": "knuckles@angelisland.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20063, "cedula": "C2043", "nombre": "Shadow", "correo": "shadow@gun.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20064, "cedula": "C2044", "nombre": "Pac-Man", "correo": "pacman@maze.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20065, "cedula": "C2045", "nombre": "Mega Man", "correo": "rock@lightlab.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20066, "cedula": "C2046", "nombre": "Zero", "correo": "zero@maverickhunters.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20067, "cedula": "C2047", "nombre": "Doomguy", "correo": "slayer@ufc.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20068, "cedula": "C2048", "nombre": "Duke Nukem", "correo": "duke@kickass.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20069, "cedula": "C2049", "nombre": "Rayman", "correo": "rayman@glade.com", "rol": "Cliente", "genero": "M" },
  { "_id": 20070, "cedula": "C2050", "nombre": "Crash Bandicoot", "correo": "crash@wumpa.com", "rol": "Cliente", "genero": "M" }
]);


db.vehiculo.insertMany([
  { "_id": 30001, "tipo_vehiculo": "moto", "placa": "MTO01", "marca": "Yamaha", "modelo": "2020", "cliente_id": 20021, "color": "Rojo" },
  { "_id": 30002, "tipo_vehiculo": "carro", "placa": "CAR02", "marca": "Toyota", "modelo": "2021", "cliente_id": 20022, "color": "Azul" },
  { "_id": 30003, "tipo_vehiculo": "camion", "placa": "CAM03", "marca": "Volvo", "modelo": "2018", "cliente_id": 20023, "color": "Blanco" },
  { "_id": 30004, "tipo_vehiculo": "bicicleta", "placa": "BIC04", "marca": "Trek", "modelo": "2022", "cliente_id": 20024, "color": "Negro" },
  { "_id": 30005, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON05", "marca": "Xiaomi", "modelo": "2023", "cliente_id": 20025, "color": "Gris" },
  { "_id": 30006, "tipo_vehiculo": "moto", "placa": "MTO06", "marca": "Honda", "modelo": "2019", "cliente_id": 20026, "color": "Verde" },
  { "_id": 30007, "tipo_vehiculo": "carro", "placa": "CAR07", "marca": "Mazda", "modelo": "2022", "cliente_id": 20027, "color": "Plata" },
  { "_id": 30008, "tipo_vehiculo": "camion", "placa": "CAM08", "marca": "Scania", "modelo": "2017", "cliente_id": 20028, "color": "Amarillo" },
  { "_id": 30009, "tipo_vehiculo": "bicicleta", "placa": "BIC09", "marca": "Specialized", "modelo": "2021", "cliente_id": 20029, "color": "Rojo" },
  { "_id": 30010, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON10", "marca": "Ninebot", "modelo": "2023", "cliente_id": 20030, "color": "Negro" },
  { "_id": 30011, "tipo_vehiculo": "moto", "placa": "MTO11", "marca": "Suzuki", "modelo": "2021", "cliente_id": 20031, "color": "Azul" },
  { "_id": 30012, "tipo_vehiculo": "carro", "placa": "CAR12", "marca": "Honda", "modelo": "2020", "cliente_id": 20032, "color": "Blanco" },
  { "_id": 30013, "tipo_vehiculo": "camion", "placa": "CAM13", "marca": "Mercedes", "modelo": "2019", "cliente_id": 20033, "color": "Gris" },
  { "_id": 30014, "tipo_vehiculo": "bicicleta", "placa": "BIC14", "marca": "Giant", "modelo": "2020", "cliente_id": 20034, "color": "Naranja" },
  { "_id": 30015, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON15", "marca": "Dualtron", "modelo": "2022", "cliente_id": 20035, "color": "Negro" },
  { "_id": 30016, "tipo_vehiculo": "moto", "placa": "MTO16", "marca": "Kawasaki", "modelo": "2022", "cliente_id": 20036, "color": "Verde" },
  { "_id": 30017, "tipo_vehiculo": "carro", "placa": "CAR17", "marca": "Ford", "modelo": "2018", "cliente_id": 20037, "color": "Azul Oscuro" },
  { "_id": 30018, "tipo_vehiculo": "camion", "placa": "CAM18", "marca": "Kenworth", "modelo": "2015", "cliente_id": 20038, "color": "Rojo" },
  { "_id": 30019, "tipo_vehiculo": "bicicleta", "placa": "BIC19", "marca": "Scott", "modelo": "2023", "cliente_id": 20039, "color": "Blanco" },
  { "_id": 30020, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON20", "marca": "Segway", "modelo": "2021", "cliente_id": 20040, "color": "Gris" },
  { "_id": 30021, "tipo_vehiculo": "moto", "placa": "MTO21", "marca": "Ducati", "modelo": "2023", "cliente_id": 20041, "color": "Rojo" },
  { "_id": 30022, "tipo_vehiculo": "carro", "placa": "CAR22", "marca": "Chevrolet", "modelo": "2019", "cliente_id": 20042, "color": "Negro" },
  { "_id": 30023, "tipo_vehiculo": "camion", "placa": "CAM23", "marca": "Peterbilt", "modelo": "2016", "cliente_id": 20043, "color": "Azul" },
  { "_id": 30024, "tipo_vehiculo": "bicicleta", "placa": "BIC24", "marca": "Cannondale", "modelo": "2019", "cliente_id": 20044, "color": "Verde" },
  { "_id": 30025, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON25", "marca": "Kugoo", "modelo": "2022", "cliente_id": 20045, "color": "Negro" },
  { "_id": 30026, "tipo_vehiculo": "moto", "placa": "MTO26", "marca": "BMW", "modelo": "2021", "cliente_id": 20046, "color": "Blanco" },
  { "_id": 30027, "tipo_vehiculo": "carro", "placa": "CAR27", "marca": "Nissan", "modelo": "2020", "cliente_id": 20047, "color": "Rojo" },
  { "_id": 30028, "tipo_vehiculo": "camion", "placa": "CAM28", "marca": "Mack", "modelo": "2018", "cliente_id": 20048, "color": "Negro" },
  { "_id": 30029, "tipo_vehiculo": "bicicleta", "placa": "BIC29", "marca": "Orbea", "modelo": "2021", "cliente_id": 20049, "color": "Azul" },
  { "_id": 30030, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON30", "marca": "Inokim", "modelo": "2023", "cliente_id": 20050, "color": "Blanco" },
  { "_id": 30031, "tipo_vehiculo": "moto", "placa": "MTO31", "marca": "KTM", "modelo": "2022", "cliente_id": 20051, "color": "Naranja" },
  { "_id": 30032, "tipo_vehiculo": "carro", "placa": "CAR32", "marca": "Volkswagen", "modelo": "2019", "cliente_id": 20052, "color": "Gris" },
  { "_id": 30033, "tipo_vehiculo": "camion", "placa": "CAM33", "marca": "Hino", "modelo": "2020", "cliente_id": 20053, "color": "Blanco" },
  { "_id": 30034, "tipo_vehiculo": "bicicleta", "placa": "BIC34", "marca": "Santa Cruz", "modelo": "2022", "cliente_id": 20054, "color": "Negro" },
  { "_id": 30035, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON35", "marca": "Apollo", "modelo": "2021", "cliente_id": 20055, "color": "Rojo" },
  { "_id": 30036, "tipo_vehiculo": "moto", "placa": "MTO36", "marca": "Triumph", "modelo": "2020", "cliente_id": 20056, "color": "Negro" },
  { "_id": 30037, "tipo_vehiculo": "carro", "placa": "CAR37", "marca": "Hyundai", "modelo": "2021", "cliente_id": 20057, "color": "Azul" },
  { "_id": 30038, "tipo_vehiculo": "camion", "placa": "CAM38", "marca": "Isuzu", "modelo": "2017", "cliente_id": 20058, "color": "Blanco" },
  { "_id": 30039, "tipo_vehiculo": "bicicleta", "placa": "BIC39", "marca": "Yeti", "modelo": "2023", "cliente_id": 20059, "color": "Turquesa" },
  { "_id": 30040, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON40", "marca": "Vsett", "modelo": "2022", "cliente_id": 20060, "color": "Negro y Amarillo" },
  { "_id": 30041, "tipo_vehiculo": "moto", "placa": "MTO41", "marca": "Harley Davidson", "modelo": "2019", "cliente_id": 20061, "color": "Negro" },
  { "_id": 30042, "tipo_vehiculo": "carro", "placa": "CAR42", "marca": "Kia", "modelo": "2022", "cliente_id": 20062, "color": "Rojo" },
  { "_id": 30043, "tipo_vehiculo": "camion", "placa": "CAM43", "marca": "Foton", "modelo": "2021", "cliente_id": 20063, "color": "Plata" },
  { "_id": 30044, "tipo_vehiculo": "bicicleta", "placa": "BIC44", "marca": "Cervelo", "modelo": "2020", "cliente_id": 20064, "color": "Negro" },
  { "_id": 30045, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON45", "marca": "Kaabo", "modelo": "2023", "cliente_id": 20065, "color": "Rojo" },
  { "_id": 30046, "tipo_vehiculo": "moto", "placa": "MTO46", "marca": "Royal Enfield", "modelo": "2021", "cliente_id": 20066, "color": "Verde Oliva" },
  { "_id": 30047, "tipo_vehiculo": "carro", "placa": "CAR47", "marca": "Audi", "modelo": "2023", "cliente_id": 20067, "color": "Negro" },
  { "_id": 30048, "tipo_vehiculo": "camion", "placa": "CAM48", "marca": "JAC", "modelo": "2019", "cliente_id": 20068, "color": "Blanco" },
  { "_id": 30049, "tipo_vehiculo": "bicicleta", "placa": "BIC49", "marca": "Pinarello", "modelo": "2022", "cliente_id": 20069, "color": "Rojo" },
  { "_id": 30050, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON50", "marca": "Gotrax", "modelo": "2021", "cliente_id": 20070, "color": "Gris" },
  { "_id": 30051, "tipo_vehiculo": "moto", "placa": "MTO51", "marca": "Aprilia", "modelo": "2022", "cliente_id": 20021, "color": "Negro" },
  { "_id": 30052, "tipo_vehiculo": "carro", "placa": "CAR52", "marca": "BMW", "modelo": "2021", "cliente_id": 20022, "color": "Blanco" },
  { "_id": 30053, "tipo_vehiculo": "camion", "placa": "CAM53", "marca": "Dongfeng", "modelo": "2020", "cliente_id": 20023, "color": "Rojo" },
  { "_id": 30054, "tipo_vehiculo": "bicicleta", "placa": "BIC54", "marca": "Bianchi", "modelo": "2021", "cliente_id": 20024, "color": "Celeste" },
  { "_id": 30055, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON55", "marca": "Hiboy", "modelo": "2022", "cliente_id": 20025, "color": "Negro" },
  { "_id": 30056, "tipo_vehiculo": "moto", "placa": "MTO56", "marca": "Indian", "modelo": "2020", "cliente_id": 20026, "color": "Rojo Oscuro" },
  { "_id": 30057, "tipo_vehiculo": "carro", "placa": "CAR57", "marca": "Mercedes-Benz", "modelo": "2023", "cliente_id": 20027, "color": "Plata" },
  { "_id": 30058, "tipo_vehiculo": "camion", "placa": "CAM58", "marca": "Iveco", "modelo": "2018", "cliente_id": 20028, "color": "Blanco" },
  { "_id": 30059, "tipo_vehiculo": "bicicleta", "placa": "BIC59", "marca": "BMC", "modelo": "2023", "cliente_id": 20029, "color": "Rojo" },
  { "_id": 30060, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON60", "marca": "Hover-1", "modelo": "2021", "cliente_id": 20030, "color": "Azul" },
  { "_id": 30061, "tipo_vehiculo": "moto", "placa": "MTO61", "marca": "Husqvarna", "modelo": "2022", "cliente_id": 20031, "color": "Blanco y Amarillo" },
  { "_id": 30062, "tipo_vehiculo": "carro", "placa": "CAR62", "marca": "Jeep", "modelo": "2020", "cliente_id": 20032, "color": "Verde" },
  { "_id": 30063, "tipo_vehiculo": "camion", "placa": "CAM63", "marca": "Renault", "modelo": "2019", "cliente_id": 20033, "color": "Blanco" },
  { "_id": 30064, "tipo_vehiculo": "bicicleta", "placa": "BIC64", "marca": "Merida", "modelo": "2021", "cliente_id": 20034, "color": "Verde" },
  { "_id": 30065, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON65", "marca": "Razor", "modelo": "2020", "cliente_id": 20035, "color": "Rojo" }
]);

db.parques.insertMany([
  { 
    "_id": 40001, 
    "vehiculo": { "_id": 30001, "tipo_vehiculo": "moto", "placa": "MTO01", "marca": "Yamaha", "modelo": "2020", "cliente_id": 20021, "color": "Rojo" }, 
    "sede_id": 10001, "zona_id": "Z-MOT-1", "hora_entrada": "2023-10-25T08:00:00Z", "estado": "activo" 
  },
  { 
    "_id": 40002, 
    "vehiculo": { "_id": 30002, "tipo_vehiculo": "carro", "placa": "CAR02", "marca": "Toyota", "modelo": "2021", "cliente_id": 20022, "color": "Azul" }, 
    "sede_id": 10001, "zona_id": "Z-CAR-1", "hora_entrada": "2023-10-25T08:15:00Z", "estado": "activo" 
  },
  { 
    "_id": 40003, 
    "vehiculo": { "_id": 30003, "tipo_vehiculo": "camion", "placa": "CAM03", "marca": "Volvo", "modelo": "2018", "cliente_id": 20023, "color": "Blanco" }, 
    "sede_id": 10001, "zona_id": "Z-CAM-1", "hora_entrada": "2023-10-25T08:30:00Z", "estado": "activo" 
  },
  { 
    "_id": 40004, 
    "vehiculo": { "_id": 30004, "tipo_vehiculo": "bicicleta", "placa": "BIC04", "marca": "Trek", "modelo": "2022", "cliente_id": 20024, "color": "Negro" }, 
    "sede_id": 10001, "zona_id": "Z-BIC-1", "hora_entrada": "2023-10-25T08:45:00Z", "estado": "activo" 
  },
  { 
    "_id": 40005, 
    "vehiculo": { "_id": 30005, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON05", "marca": "Xiaomi", "modelo": "2023", "cliente_id": 20025, "color": "Gris" }, 
    "sede_id": 10001, "zona_id": "Z-MON-1", "hora_entrada": "2023-10-25T09:00:00Z", "estado": "activo" 
  },
  { 
    "_id": 40006, 
    "vehiculo": { "_id": 30006, "tipo_vehiculo": "moto", "placa": "MTO06", "marca": "Honda", "modelo": "2019", "cliente_id": 20026, "color": "Verde" }, 
    "sede_id": 10002, "zona_id": "Z-MOT-2", "hora_entrada": "2023-10-25T09:10:00Z", "estado": "activo" 
  },
  { 
    "_id": 40007, 
    "vehiculo": { "_id": 30007, "tipo_vehiculo": "carro", "placa": "CAR07", "marca": "Mazda", "modelo": "2022", "cliente_id": 20027, "color": "Plata" }, 
    "sede_id": 10002, "zona_id": "Z-CAR-2", "hora_entrada": "2023-10-25T09:20:00Z", "estado": "activo" 
  },
  { 
    "_id": 40008, 
    "vehiculo": { "_id": 30008, "tipo_vehiculo": "camion", "placa": "CAM08", "marca": "Scania", "modelo": "2017", "cliente_id": 20028, "color": "Amarillo" }, 
    "sede_id": 10002, "zona_id": "Z-CAM-2", "hora_entrada": "2023-10-25T09:30:00Z", "estado": "activo" 
  },
  { 
    "_id": 40009, 
    "vehiculo": { "_id": 30009, "tipo_vehiculo": "bicicleta", "placa": "BIC09", "marca": "Specialized", "modelo": "2021", "cliente_id": 20029, "color": "Rojo" }, 
    "sede_id": 10002, "zona_id": "Z-BIC-2", "hora_entrada": "2023-10-25T09:40:00Z", "estado": "activo" 
  },
  { 
    "_id": 40010, 
    "vehiculo": { "_id": 30010, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON10", "marca": "Ninebot", "modelo": "2023", "cliente_id": 20030, "color": "Negro" }, 
    "sede_id": 10002, "zona_id": "Z-MON-2", "hora_entrada": "2023-10-25T09:50:00Z", "estado": "activo" 
  },
  { 
    "_id": 40011, 
    "vehiculo": { "_id": 30011, "tipo_vehiculo": "moto", "placa": "MTO11", "marca": "Suzuki", "modelo": "2021", "cliente_id": 20031, "color": "Azul" }, 
    "sede_id": 10003, "zona_id": "Z-MOT-3", "hora_entrada": "2023-10-25T10:00:00Z", "estado": "activo" 
  },
  { 
    "_id": 40012, 
    "vehiculo": { "_id": 30012, "tipo_vehiculo": "carro", "placa": "CAR12", "marca": "Honda", "modelo": "2020", "cliente_id": 20032, "color": "Blanco" }, 
    "sede_id": 10003, "zona_id": "Z-CAR-3", "hora_entrada": "2023-10-25T10:15:00Z", "estado": "activo" 
  },
  { 
    "_id": 40013, 
    "vehiculo": { "_id": 30013, "tipo_vehiculo": "camion", "placa": "CAM13", "marca": "Mercedes", "modelo": "2019", "cliente_id": 20033, "color": "Gris" }, 
    "sede_id": 10003, "zona_id": "Z-CAM-3", "hora_entrada": "2023-10-25T10:30:00Z", "estado": "activo" 
  },
  { 
    "_id": 40014, 
    "vehiculo": { "_id": 30014, "tipo_vehiculo": "bicicleta", "placa": "BIC14", "marca": "Giant", "modelo": "2020", "cliente_id": 20034, "color": "Naranja" }, 
    "sede_id": 10003, "zona_id": "Z-BIC-3", "hora_entrada": "2023-10-25T10:45:00Z", "estado": "activo" 
  },
  { 
    "_id": 40015, 
    "vehiculo": { "_id": 30015, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON15", "marca": "Dualtron", "modelo": "2022", "cliente_id": 20035, "color": "Negro" }, 
    "sede_id": 10003, "zona_id": "Z-MON-3", "hora_entrada": "2023-10-25T11:00:00Z", "estado": "activo" 
  },
  { 
    "_id": 40016, 
    "vehiculo": { "_id": 30016, "tipo_vehiculo": "moto", "placa": "MTO16", "marca": "Kawasaki", "modelo": "2022", "cliente_id": 20036, "color": "Verde" }, 
    "sede_id": 10001, "zona_id": "Z-MOT-1", "hora_entrada": "2023-10-25T11:10:00Z", "estado": "activo" 
  },
  { 
    "_id": 40017, 
    "vehiculo": { "_id": 30017, "tipo_vehiculo": "carro", "placa": "CAR17", "marca": "Ford", "modelo": "2018", "cliente_id": 20037, "color": "Azul Oscuro" }, 
    "sede_id": 10001, "zona_id": "Z-CAR-1", "hora_entrada": "2023-10-25T11:20:00Z", "estado": "activo" 
  },
  { 
    "_id": 40018, 
    "vehiculo": { "_id": 30018, "tipo_vehiculo": "camion", "placa": "CAM18", "marca": "Kenworth", "modelo": "2015", "cliente_id": 20038, "color": "Rojo" }, 
    "sede_id": 10002, "zona_id": "Z-CAM-2", "hora_entrada": "2023-10-25T11:30:00Z", "estado": "activo" 
  },
  { 
    "_id": 40019, 
    "vehiculo": { "_id": 30019, "tipo_vehiculo": "bicicleta", "placa": "BIC19", "marca": "Scott", "modelo": "2023", "cliente_id": 20039, "color": "Blanco" }, 
    "sede_id": 10002, "zona_id": "Z-BIC-2", "hora_entrada": "2023-10-25T11:40:00Z", "estado": "activo" 
  },
  { 
    "_id": 40020, 
    "vehiculo": { "_id": 30020, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON20", "marca": "Segway", "modelo": "2021", "cliente_id": 20040, "color": "Gris" }, 
    "sede_id": 10003, "zona_id": "Z-MON-3", "hora_entrada": "2023-10-25T11:50:00Z", "estado": "activo" 
  },
  { 
    "_id": 40021, 
    "vehiculo": { "_id": 30021, "tipo_vehiculo": "moto", "placa": "MTO21", "marca": "Ducati", "modelo": "2023", "cliente_id": 20041, "color": "Rojo" }, 
    "sede_id": 10001, "zona_id": "Z-MOT-1", "hora_entrada": "2023-10-25T12:00:00Z", "estado": "activo" 
  },
  { 
    "_id": 40022, 
    "vehiculo": { "_id": 30022, "tipo_vehiculo": "carro", "placa": "CAR22", "marca": "Chevrolet", "modelo": "2019", "cliente_id": 20042, "color": "Negro" }, 
    "sede_id": 10001, "zona_id": "Z-CAR-1", "hora_entrada": "2023-10-25T12:15:00Z", "estado": "activo" 
  },
  { 
    "_id": 40023, 
    "vehiculo": { "_id": 30023, "tipo_vehiculo": "camion", "placa": "CAM23", "marca": "Peterbilt", "modelo": "2016", "cliente_id": 20043, "color": "Azul" }, 
    "sede_id": 10002, "zona_id": "Z-CAM-2", "hora_entrada": "2023-10-25T12:30:00Z", "estado": "activo" 
  },
  { 
    "_id": 40024, 
    "vehiculo": { "_id": 30024, "tipo_vehiculo": "bicicleta", "placa": "BIC24", "marca": "Cannondale", "modelo": "2019", "cliente_id": 20044, "color": "Verde" }, 
    "sede_id": 10002, "zona_id": "Z-BIC-2", "hora_entrada": "2023-10-25T12:45:00Z", "estado": "activo" 
  },
  { 
    "_id": 40025, 
    "vehiculo": { "_id": 30025, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON25", "marca": "Kugoo", "modelo": "2022", "cliente_id": 20045, "color": "Negro" }, 
    "sede_id": 10003, "zona_id": "Z-MON-3", "hora_entrada": "2023-10-25T13:00:00Z", "estado": "activo" 
  },
  { 
    "_id": 40026, 
    "vehiculo": { "_id": 30026, "tipo_vehiculo": "moto", "placa": "MTO26", "marca": "BMW", "modelo": "2021", "cliente_id": 20046, "color": "Blanco" }, 
    "sede_id": 10003, "zona_id": "Z-MOT-3", "hora_entrada": "2023-10-25T13:10:00Z", "estado": "activo" 
  },
  { 
    "_id": 40027, 
    "vehiculo": { "_id": 30027, "tipo_vehiculo": "carro", "placa": "CAR27", "marca": "Nissan", "modelo": "2020", "cliente_id": 20047, "color": "Rojo" }, 
    "sede_id": 10001, "zona_id": "Z-CAR-1", "hora_entrada": "2023-10-25T13:20:00Z", "estado": "activo" 
  },
  { 
    "_id": 40028, 
    "vehiculo": { "_id": 30028, "tipo_vehiculo": "camion", "placa": "CAM28", "marca": "Mack", "modelo": "2018", "cliente_id": 20048, "color": "Negro" }, 
    "sede_id": 10001, "zona_id": "Z-CAM-1", "hora_entrada": "2023-10-25T13:30:00Z", "estado": "activo" 
  },
  { 
    "_id": 40029, 
    "vehiculo": { "_id": 30029, "tipo_vehiculo": "bicicleta", "placa": "BIC29", "marca": "Orbea", "modelo": "2021", "cliente_id": 20049, "color": "Azul" }, 
    "sede_id": 10002, "zona_id": "Z-BIC-2", "hora_entrada": "2023-10-25T13:40:00Z", "estado": "activo" 
  },
  { 
    "_id": 40030, 
    "vehiculo": { "_id": 30030, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON30", "marca": "Inokim", "modelo": "2023", "cliente_id": 20050, "color": "Blanco" }, 
    "sede_id": 10002, "zona_id": "Z-MON-2", "hora_entrada": "2023-10-25T13:50:00Z", "estado": "activo" 
  },
  { 
    "_id": 40031, 
    "vehiculo": { "_id": 30031, "tipo_vehiculo": "moto", "placa": "MTO31", "marca": "KTM", "modelo": "2022", "cliente_id": 20051, "color": "Naranja" }, 
    "sede_id": 10003, "zona_id": "Z-MOT-3", "hora_entrada": "2023-10-24T08:00:00Z", "hora_salida": "2023-10-24T10:00:00Z", "tiempo_total_minutos": 120, "costo_total": 2800.0, "estado": "finalizado" 
  },
  { 
    "_id": 40032, 
    "vehiculo": { "_id": 30032, "tipo_vehiculo": "carro", "placa": "CAR32", "marca": "Volkswagen", "modelo": "2019", "cliente_id": 20052, "color": "Gris" }, 
    "sede_id": 10003, "zona_id": "Z-CAR-3", "hora_entrada": "2023-10-24T08:30:00Z", "hora_salida": "2023-10-24T09:30:00Z", "tiempo_total_minutos": 60, "costo_total": 2800.0, "estado": "finalizado" 
  },
  { 
    "_id": 40033, 
    "vehiculo": { "_id": 30033, "tipo_vehiculo": "camion", "placa": "CAM33", "marca": "Hino", "modelo": "2020", "cliente_id": 20053, "color": "Blanco" }, 
    "sede_id": 10001, "zona_id": "Z-CAM-1", "hora_entrada": "2023-10-24T09:00:00Z", "hora_salida": "2023-10-24T12:00:00Z", "tiempo_total_minutos": 180, "costo_total": 15000.0, "estado": "finalizado" 
  },
  { 
    "_id": 40034, 
    "vehiculo": { "_id": 30034, "tipo_vehiculo": "bicicleta", "placa": "BIC34", "marca": "Santa Cruz", "modelo": "2022", "cliente_id": 20054, "color": "Negro" }, 
    "sede_id": 10001, "zona_id": "Z-BIC-1", "hora_entrada": "2023-10-24T09:15:00Z", "hora_salida": "2023-10-24T10:15:00Z", "tiempo_total_minutos": 60, "costo_total": 500.0, "estado": "finalizado" 
  },
  { 
    "_id": 40035, 
    "vehiculo": { "_id": 30035, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON35", "marca": "Apollo", "modelo": "2021", "cliente_id": 20055, "color": "Rojo" }, 
    "sede_id": 10002, "zona_id": "Z-MON-2", "hora_entrada": "2023-10-24T09:45:00Z", "hora_salida": "2023-10-24T11:45:00Z", "tiempo_total_minutos": 120, "costo_total": 1800.0, "estado": "finalizado" 
  },
  { 
    "_id": 40036, 
    "vehiculo": { "_id": 30036, "tipo_vehiculo": "moto", "placa": "MTO36", "marca": "Triumph", "modelo": "2020", "cliente_id": 20056, "color": "Negro" }, 
    "sede_id": 10002, "zona_id": "Z-MOT-2", "hora_entrada": "2023-10-24T10:00:00Z", "hora_salida": "2023-10-24T10:30:00Z", "tiempo_total_minutos": 30, "costo_total": 800.0, "estado": "finalizado" 
  },
  { 
    "_id": 40037, 
    "vehiculo": { "_id": 30037, "tipo_vehiculo": "carro", "placa": "CAR37", "marca": "Hyundai", "modelo": "2021", "cliente_id": 20057, "color": "Azul" }, 
    "sede_id": 10003, "zona_id": "Z-CAR-3", "hora_entrada": "2023-10-24T10:15:00Z", "hora_salida": "2023-10-24T13:15:00Z", "tiempo_total_minutos": 180, "costo_total": 8400.0, "estado": "finalizado" 
  },
  { 
    "_id": 40038, 
    "vehiculo": { "_id": 30038, "tipo_vehiculo": "camion", "placa": "CAM38", "marca": "Isuzu", "modelo": "2017", "cliente_id": 20058, "color": "Blanco" }, 
    "sede_id": 10003, "zona_id": "Z-CAM-3", "hora_entrada": "2023-10-24T10:30:00Z", "hora_salida": "2023-10-24T11:30:00Z", "tiempo_total_minutos": 60, "costo_total": 4800.0, "estado": "finalizado" 
  },
  { 
    "_id": 40039, 
    "vehiculo": { "_id": 30039, "tipo_vehiculo": "bicicleta", "placa": "BIC39", "marca": "Yeti", "modelo": "2023", "cliente_id": 20059, "color": "Turquesa" }, 
    "sede_id": 10001, "zona_id": "Z-BIC-1", "hora_entrada": "2023-10-24T11:00:00Z", "hora_salida": "2023-10-24T15:00:00Z", "tiempo_total_minutos": 240, "costo_total": 2000.0, "estado": "finalizado" 
  },
  { 
    "_id": 40040, 
    "vehiculo": { "_id": 30040, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON40", "marca": "Vsett", "modelo": "2022", "cliente_id": 20060, "color": "Negro y Amarillo" }, 
    "sede_id": 10001, "zona_id": "Z-MON-1", "hora_entrada": "2023-10-24T11:30:00Z", "hora_salida": "2023-10-24T12:30:00Z", "tiempo_total_minutos": 60, "costo_total": 800.0, "estado": "finalizado" 
  },
  { 
    "_id": 40041, 
    "vehiculo": { "_id": 30041, "tipo_vehiculo": "moto", "placa": "MTO41", "marca": "Harley Davidson", "modelo": "2019", "cliente_id": 20061, "color": "Negro" }, 
    "sede_id": 10002, "zona_id": "Z-MOT-2", "hora_entrada": "2023-10-24T12:00:00Z", "hora_salida": "2023-10-24T13:00:00Z", "tiempo_total_minutos": 60, "costo_total": 1600.0, "estado": "finalizado" 
  },
  { 
    "_id": 40042, 
    "vehiculo": { "_id": 30042, "tipo_vehiculo": "carro", "placa": "CAR42", "marca": "Kia", "modelo": "2022", "cliente_id": 20062, "color": "Rojo" }, 
    "sede_id": 10002, "zona_id": "Z-CAR-2", "hora_entrada": "2023-10-24T12:15:00Z", "hora_salida": "2023-10-24T14:15:00Z", "tiempo_total_minutos": 120, "costo_total": 7000.0, "estado": "finalizado" 
  },
  { 
    "_id": 40043, 
    "vehiculo": { "_id": 30043, "tipo_vehiculo": "camion", "placa": "CAM43", "marca": "Foton", "modelo": "2021", "cliente_id": 20063, "color": "Plata" }, 
    "sede_id": 10003, "zona_id": "Z-CAM-3", "hora_entrada": "2023-10-24T12:30:00Z", "hora_salida": "2023-10-24T13:30:00Z", "tiempo_total_minutos": 60, "costo_total": 4800.0, "estado": "finalizado" 
  },
  { 
    "_id": 40044, 
    "vehiculo": { "_id": 30044, "tipo_vehiculo": "bicicleta", "placa": "BIC44", "marca": "Cervelo", "modelo": "2020", "cliente_id": 20064, "color": "Negro" }, 
    "sede_id": 10003, "zona_id": "Z-BIC-3", "hora_entrada": "2023-10-24T13:00:00Z", "hora_salida": "2023-10-24T14:00:00Z", "tiempo_total_minutos": 60, "costo_total": 400.0, "estado": "finalizado" 
  },
  { 
    "_id": 40045, 
    "vehiculo": { "_id": 30045, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON45", "marca": "Kaabo", "modelo": "2023", "cliente_id": 20065, "color": "Rojo" }, 
    "sede_id": 10001, "zona_id": "Z-MON-1", "hora_entrada": "2023-10-24T13:15:00Z", "hora_salida": "2023-10-24T15:15:00Z", "tiempo_total_minutos": 120, "costo_total": 1600.0, "estado": "finalizado" 
  },
  { 
    "_id": 40046, 
    "vehiculo": { "_id": 30046, "tipo_vehiculo": "moto", "placa": "MTO46", "marca": "Royal Enfield", "modelo": "2021", "cliente_id": 20066, "color": "Verde Oliva" }, 
    "sede_id": 10001, "zona_id": "Z-MOT-1", "hora_entrada": "2023-10-24T13:30:00Z", "hora_salida": "2023-10-24T14:30:00Z", "tiempo_total_minutos": 60, "costo_total": 1500.0, "estado": "finalizado" 
  },
  { 
    "_id": 40047, 
    "vehiculo": { "_id": 30047, "tipo_vehiculo": "carro", "placa": "CAR47", "marca": "Audi", "modelo": "2023", "cliente_id": 20067, "color": "Negro" }, 
    "sede_id": 10002, "zona_id": "Z-CAR-2", "hora_entrada": "2023-10-24T14:00:00Z", "hora_salida": "2023-10-24T16:00:00Z", "tiempo_total_minutos": 120, "costo_total": 7000.0, "estado": "finalizado" 
  },
  { 
    "_id": 40048, 
    "vehiculo": { "_id": 30048, "tipo_vehiculo": "camion", "placa": "CAM48", "marca": "JAC", "modelo": "2019", "cliente_id": 20068, "color": "Blanco" }, 
    "sede_id": 10002, "zona_id": "Z-CAM-2", "hora_entrada": "2023-10-24T14:15:00Z", "hora_salida": "2023-10-24T16:15:00Z", "tiempo_total_minutos": 120, "costo_total": 11000.0, "estado": "finalizado" 
  },
  { 
    "_id": 40049, 
    "vehiculo": { "_id": 30049, "tipo_vehiculo": "bicicleta", "placa": "BIC49", "marca": "Pinarello", "modelo": "2022", "cliente_id": 20069, "color": "Rojo" }, 
    "sede_id": 10003, "zona_id": "Z-BIC-3", "hora_entrada": "2023-10-24T14:30:00Z", "hora_salida": "2023-10-24T15:30:00Z", "tiempo_total_minutos": 60, "costo_total": 400.0, "estado": "finalizado" 
  },
  { 
    "_id": 40050, 
    "vehiculo": { "_id": 30050, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON50", "marca": "Gotrax", "modelo": "2021", "cliente_id": 20070, "color": "Gris" }, 
    "sede_id": 10003, "zona_id": "Z-MON-3", "hora_entrada": "2023-10-24T15:00:00Z", "hora_salida": "2023-10-24T17:00:00Z", "tiempo_total_minutos": 120, "costo_total": 1400.0, "estado": "finalizado" 
  },
  { 
    "_id": 40051, 
    "vehiculo": { "_id": 30051, "tipo_vehiculo": "moto", "placa": "MTO51", "marca": "Aprilia", "modelo": "2022", "cliente_id": 20021, "color": "Negro" }, 
    "sede_id": 10001, "zona_id": "Z-MOT-1", "hora_entrada": "2023-10-24T15:15:00Z", "hora_salida": "2023-10-24T16:15:00Z", "tiempo_total_minutos": 60, "costo_total": 1500.0, "estado": "finalizado" 
  },
  { 
    "_id": 40052, 
    "vehiculo": { "_id": 30052, "tipo_vehiculo": "carro", "placa": "CAR52", "marca": "BMW", "modelo": "2021", "cliente_id": 20022, "color": "Blanco" }, 
    "sede_id": 10001, "zona_id": "Z-CAR-1", "hora_entrada": "2023-10-24T15:30:00Z", "hora_salida": "2023-10-24T17:30:00Z", "tiempo_total_minutos": 120, "costo_total": 6000.0, "estado": "finalizado" 
  },
  { 
    "_id": 40053, 
    "vehiculo": { "_id": 30053, "tipo_vehiculo": "camion", "placa": "CAM53", "marca": "Dongfeng", "modelo": "2020", "cliente_id": 20023, "color": "Rojo" }, 
    "sede_id": 10002, "zona_id": "Z-CAM-2", "hora_entrada": "2023-10-24T16:00:00Z", "hora_salida": "2023-10-24T18:00:00Z", "tiempo_total_minutos": 120, "costo_total": 11000.0, "estado": "finalizado" 
  },
  { 
    "_id": 40054, 
    "vehiculo": { "_id": 30054, "tipo_vehiculo": "bicicleta", "placa": "BIC54", "marca": "Bianchi", "modelo": "2021", "cliente_id": 20024, "color": "Celeste" }, 
    "sede_id": 10002, "zona_id": "Z-BIC-2", "hora_entrada": "2023-10-24T16:15:00Z", "hora_salida": "2023-10-24T17:15:00Z", "tiempo_total_minutos": 60, "costo_total": 600.0, "estado": "finalizado" 
  },
  { 
    "_id": 40055, 
    "vehiculo": { "_id": 30055, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON55", "marca": "Hiboy", "modelo": "2022", "cliente_id": 20025, "color": "Negro" }, 
    "sede_id": 10003, "zona_id": "Z-MON-3", "hora_entrada": "2023-10-24T16:30:00Z", "hora_salida": "2023-10-24T17:30:00Z", "tiempo_total_minutos": 60, "costo_total": 700.0, "estado": "finalizado" 
  },
  { 
    "_id": 40056, 
    "vehiculo": { "_id": 30056, "tipo_vehiculo": "moto", "placa": "MTO56", "marca": "Indian", "modelo": "2020", "cliente_id": 20026, "color": "Rojo Oscuro" }, 
    "sede_id": 10003, "zona_id": "Z-MOT-3", "hora_entrada": "2023-10-24T17:00:00Z", "hora_salida": "2023-10-24T18:00:00Z", "tiempo_total_minutos": 60, "costo_total": 1400.0, "estado": "finalizado" 
  },
  { 
    "_id": 40057, 
    "vehiculo": { "_id": 30057, "tipo_vehiculo": "carro", "placa": "CAR57", "marca": "Mercedes-Benz", "modelo": "2023", "cliente_id": 20027, "color": "Plata" }, 
    "sede_id": 10001, "zona_id": "Z-CAR-1", "hora_entrada": "2023-10-24T17:15:00Z", "hora_salida": "2023-10-24T19:15:00Z", "tiempo_total_minutos": 120, "costo_total": 6000.0, "estado": "finalizado" 
  },
  { 
    "_id": 40058, 
    "vehiculo": { "_id": 30058, "tipo_vehiculo": "camion", "placa": "CAM58", "marca": "Iveco", "modelo": "2018", "cliente_id": 20028, "color": "Blanco" }, 
    "sede_id": 10001, "zona_id": "Z-CAM-1", "hora_entrada": "2023-10-24T17:30:00Z", "hora_salida": "2023-10-24T18:30:00Z", "tiempo_total_minutos": 60, "costo_total": 5000.0, "estado": "finalizado" 
  },
  { 
    "_id": 40059, 
    "vehiculo": { "_id": 30059, "tipo_vehiculo": "bicicleta", "placa": "BIC59", "marca": "BMC", "modelo": "2023", "cliente_id": 20029, "color": "Rojo" }, 
    "sede_id": 10002, "zona_id": "Z-BIC-2", "hora_entrada": "2023-10-24T18:00:00Z", "hora_salida": "2023-10-24T19:00:00Z", "tiempo_total_minutos": 60, "costo_total": 600.0, "estado": "finalizado" 
  },
  { 
    "_id": 40060, 
    "vehiculo": { "_id": 30060, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON60", "marca": "Hover-1", "modelo": "2021", "cliente_id": 20030, "color": "Azul" }, 
    "sede_id": 10002, "zona_id": "Z-MON-2", "hora_entrada": "2023-10-24T18:15:00Z", "hora_salida": "2023-10-24T20:15:00Z", "tiempo_total_minutos": 120, "costo_total": 1800.0, "estado": "finalizado" 
  },
  { 
    "_id": 40061, 
    "vehiculo": { "_id": 30061, "tipo_vehiculo": "moto", "placa": "MTO61", "marca": "Husqvarna", "modelo": "2022", "cliente_id": 20031, "color": "Blanco y Amarillo" }, 
    "sede_id": 10003, "zona_id": "Z-MOT-3", "hora_entrada": "2023-10-24T18:30:00Z", "hora_salida": "2023-10-24T19:30:00Z", "tiempo_total_minutos": 60, "costo_total": 1400.0, "estado": "finalizado" 
  },
  { 
    "_id": 40062, 
    "vehiculo": { "_id": 30062, "tipo_vehiculo": "carro", "placa": "CAR62", "marca": "Jeep", "modelo": "2020", "cliente_id": 20032, "color": "Verde" }, 
    "sede_id": 10003, "zona_id": "Z-CAR-3", "hora_entrada": "2023-10-24T19:00:00Z", "hora_salida": "2023-10-24T20:00:00Z", "tiempo_total_minutos": 60, "costo_total": 2800.0, "estado": "finalizado" 
  },
  { 
    "_id": 40063, 
    "vehiculo": { "_id": 30063, "tipo_vehiculo": "camion", "placa": "CAM63", "marca": "Renault", "modelo": "2019", "cliente_id": 20033, "color": "Blanco" }, 
    "sede_id": 10001, "zona_id": "Z-CAM-1", "hora_entrada": "2023-10-24T19:15:00Z", "hora_salida": "2023-10-24T21:15:00Z", "tiempo_total_minutos": 120, "costo_total": 10000.0, "estado": "finalizado" 
  },
  { 
    "_id": 40064, 
    "vehiculo": { "_id": 30064, "tipo_vehiculo": "bicicleta", "placa": "BIC64", "marca": "Merida", "modelo": "2021", "cliente_id": 20034, "color": "Verde" }, 
    "sede_id": 10001, "zona_id": "Z-BIC-1", "hora_entrada": "2023-10-24T19:30:00Z", "hora_salida": "2023-10-24T20:30:00Z", "tiempo_total_minutos": 60, "costo_total": 500.0, "estado": "finalizado" 
  },
  { 
    "_id": 40065, 
    "vehiculo": { "_id": 30065, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON65", "marca": "Razor", "modelo": "2020", "cliente_id": 20035, "color": "Rojo" }, 
    "sede_id": 10002, "zona_id": "Z-MON-2", "hora_entrada": "2023-10-24T20:00:00Z", "hora_salida": "2023-10-24T21:00:00Z", "tiempo_total_minutos": 60, "costo_total": 900.0, "estado": "finalizado" 
  },
  { 
    "_id": 40066, 
    "vehiculo": { "_id": 30001, "tipo_vehiculo": "moto", "placa": "MTO01", "marca": "Yamaha", "modelo": "2020", "cliente_id": 20021, "color": "Rojo" }, 
    "sede_id": 10002, "zona_id": "Z-MOT-2", "hora_entrada": "2023-10-24T07:00:00Z", "hora_salida": "2023-10-24T09:00:00Z", "tiempo_total_minutos": 120, "costo_total": 3200.0, "estado": "finalizado" 
  },
  { 
    "_id": 40067, 
    "vehiculo": { "_id": 30002, "tipo_vehiculo": "carro", "placa": "CAR02", "marca": "Toyota", "modelo": "2021", "cliente_id": 20022, "color": "Azul" }, 
    "sede_id": 10003, "zona_id": "Z-CAR-3", "hora_entrada": "2023-10-24T07:30:00Z", "hora_salida": "2023-10-24T08:30:00Z", "tiempo_total_minutos": 60, "costo_total": 2800.0, "estado": "finalizado" 
  },
  { 
    "_id": 40068, 
    "vehiculo": { "_id": 30003, "tipo_vehiculo": "camion", "placa": "CAM03", "marca": "Volvo", "modelo": "2018", "cliente_id": 20023, "color": "Blanco" }, 
    "sede_id": 10001, "zona_id": "Z-CAM-1", "hora_entrada": "2023-10-24T08:00:00Z", "hora_salida": "2023-10-24T10:00:00Z", "tiempo_total_minutos": 120, "costo_total": 10000.0, "estado": "finalizado" 
  },
  { 
    "_id": 40069, 
    "vehiculo": { "_id": 30004, "tipo_vehiculo": "bicicleta", "placa": "BIC04", "marca": "Trek", "modelo": "2022", "cliente_id": 20024, "color": "Negro" }, 
    "sede_id": 10002, "zona_id": "Z-BIC-2", "hora_entrada": "2023-10-24T08:30:00Z", "hora_salida": "2023-10-24T10:30:00Z", "tiempo_total_minutos": 120, "costo_total": 1200.0, "estado": "finalizado" 
  },
  { 
    "_id": 40070, 
    "vehiculo": { "_id": 30005, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON05", "marca": "Xiaomi", "modelo": "2023", "cliente_id": 20025, "color": "Gris" }, 
    "sede_id": 10003, "zona_id": "Z-MON-3", "hora_entrada": "2023-10-24T09:00:00Z", "hora_salida": "2023-10-24T11:00:00Z", "tiempo_total_minutos": 120, "costo_total": 1400.0, "estado": "finalizado" 
  },
  { 
    "_id": 40071, 
    "vehiculo": { "_id": 30006, "tipo_vehiculo": "moto", "placa": "MTO06", "marca": "Honda", "modelo": "2019", "cliente_id": 20026, "color": "Verde" }, 
    "sede_id": 10001, "zona_id": "Z-MOT-1", "hora_entrada": "2023-10-24T09:30:00Z", "hora_salida": "2023-10-24T10:30:00Z", "tiempo_total_minutos": 60, "costo_total": 1500.0, "estado": "finalizado" 
  },
  { 
    "_id": 40072, 
    "vehiculo": { "_id": 30007, "tipo_vehiculo": "carro", "placa": "CAR07", "marca": "Mazda", "modelo": "2022", "cliente_id": 20027, "color": "Plata" }, 
    "sede_id": 10002, "zona_id": "Z-CAR-2", "hora_entrada": "2023-10-24T10:00:00Z", "hora_salida": "2023-10-24T12:00:00Z", "tiempo_total_minutos": 120, "costo_total": 7000.0, "estado": "finalizado" 
  },
  { 
    "_id": 40073, 
    "vehiculo": { "_id": 30008, "tipo_vehiculo": "camion", "placa": "CAM08", "marca": "Scania", "modelo": "2017", "cliente_id": 20028, "color": "Amarillo" }, 
    "sede_id": 10003, "zona_id": "Z-CAM-3", "hora_entrada": "2023-10-24T10:30:00Z", "hora_salida": "2023-10-24T11:30:00Z", "tiempo_total_minutos": 60, "costo_total": 4800.0, "estado": "finalizado" 
  },
  { 
    "_id": 40074, 
    "vehiculo": { "_id": 30009, "tipo_vehiculo": "bicicleta", "placa": "BIC09", "marca": "Specialized", "modelo": "2021", "cliente_id": 20029, "color": "Rojo" }, 
    "sede_id": 10001, "zona_id": "Z-BIC-1", "hora_entrada": "2023-10-24T11:00:00Z", "hora_salida": "2023-10-24T13:00:00Z", "tiempo_total_minutos": 120, "costo_total": 1000.0, "estado": "finalizado" 
  },
  { 
    "_id": 40075, 
    "vehiculo": { "_id": 30010, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON10", "marca": "Ninebot", "modelo": "2023", "cliente_id": 20030, "color": "Negro" }, 
    "sede_id": 10002, "zona_id": "Z-MON-2", "hora_entrada": "2023-10-24T11:30:00Z", "hora_salida": "2023-10-24T12:30:00Z", "tiempo_total_minutos": 60, "costo_total": 900.0, "estado": "finalizado" 
  },
  { 
    "_id": 40076, 
    "vehiculo": { "_id": 30011, "tipo_vehiculo": "moto", "placa": "MTO11", "marca": "Suzuki", "modelo": "2021", "cliente_id": 20031, "color": "Azul" }, 
    "sede_id": 10003, "zona_id": "Z-MOT-3", "hora_entrada": "2023-10-24T12:00:00Z", "hora_salida": "2023-10-24T14:00:00Z", "tiempo_total_minutos": 120, "costo_total": 2800.0, "estado": "finalizado" 
  },
  { 
    "_id": 40077, 
    "vehiculo": { "_id": 30012, "tipo_vehiculo": "carro", "placa": "CAR12", "marca": "Honda", "modelo": "2020", "cliente_id": 20032, "color": "Blanco" }, 
    "sede_id": 10001, "zona_id": "Z-CAR-1", "hora_entrada": "2023-10-24T12:30:00Z", "hora_salida": "2023-10-24T14:30:00Z", "tiempo_total_minutos": 120, "costo_total": 6000.0, "estado": "finalizado" 
  },
  { 
    "_id": 40078, 
    "vehiculo": { "_id": 30013, "tipo_vehiculo": "camion", "placa": "CAM13", "marca": "Mercedes", "modelo": "2019", "cliente_id": 20033, "color": "Gris" }, 
    "sede_id": 10002, "zona_id": "Z-CAM-2", "hora_entrada": "2023-10-24T13:00:00Z", "hora_salida": "2023-10-24T14:00:00Z", "tiempo_total_minutos": 60, "costo_total": 5500.0, "estado": "finalizado" 
  },
  { 
    "_id": 40079, 
    "vehiculo": { "_id": 30014, "tipo_vehiculo": "bicicleta", "placa": "BIC14", "marca": "Giant", "modelo": "2020", "cliente_id": 20034, "color": "Naranja" }, 
    "sede_id": 10003, "zona_id": "Z-BIC-3", "hora_entrada": "2023-10-24T13:30:00Z", "hora_salida": "2023-10-24T15:30:00Z", "tiempo_total_minutos": 120, "costo_total": 800.0, "estado": "finalizado" 
  },
  { 
    "_id": 40080, 
    "vehiculo": { "_id": 30015, "tipo_vehiculo": "monopatin-elctrico", "placa": "MON15", "marca": "Dualtron", "modelo": "2022", "cliente_id": 20035, "color": "Negro" }, 
    "sede_id": 10001, "zona_id": "Z-MON-1", "hora_entrada": "2023-10-24T14:00:00Z", "hora_salida": "2023-10-24T16:00:00Z", "tiempo_total_minutos": 120, "costo_total": 1600.0, "estado": "finalizado" 
  }
]);

