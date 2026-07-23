// role admin
db.createRole({
  role: "Admin",
  privileges: [],
  roles: [
    { role: "readWriteAnyDatabase", db: "examen_paking" },
    { role: "userAdminAnyDatabase", db: "examen_paking" },
    { role: "dbAdminAnyDatabase", db: "examen_paking" }
  ]
});

db.createRole({
  role: "empleado",
  privileges: [
    {
      resource: { db: "examen_paking", collection: "clientes" },
      actions: ["find", "insert", "update"] // Sin "remove"
    },
    {
      resource: { db: "examen_paking", collection: "vehiculos" },
      actions: ["find", "insert", "update"] // Sin "remove"
    },
    {
      resource: { db: "examen_paking", collection: "parqueos" },
      actions: ["find", "insert", "update"] // Sin "remove"
    }
  ],
  roles: []
});

// Crear rol de cliente
db.createRole({
  role: "cliente",
  privileges: [
    {
      resource: { db: "examen_paking", collection: "clientes" },
      actions: ["find"]
    },
    {
      resource: { db: "examen_paking", collection: "vehiculos" },
      actions: ["find"]
    }
  ],
  roles: []
});

// Crear usuarios
db.createUser({ user: "cajero_norte", pwd: "password123", roles: [] });
db.createUser({ user: "cliente_juan", pwd: "password123", roles: [] });

// Asignar los roles a los usuarios 
db.grantRolesToUser("cajero_norte", [{ role: "empleado", db: "examen_pakings" }]);
db.grantRolesToUser("cliente_juan", [{ role: "Cliente", db: "examen_pakings" }]);
print("Rol creado, Bienvenido.");