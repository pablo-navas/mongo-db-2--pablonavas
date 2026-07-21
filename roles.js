// role admin
db.createRole({
  role: "RolAdmin",
  privileges: [],
  roles: [
    { role: "readWriteAnyDatabase", db: "admin" },
    { role: "userAdminAnyDatabase", db: "admin" },
    { role: "dbAdminAnyDatabase", db: "admin" }
  ]
});

db.createRole({
  role: "Empleado",
  privileges: [
    { resource: { db: "sistema_parqueos", collection: "parqueos" }, actions: ["find", "insert", "update"] },
    { resource: { db: "sistema_parqueos", collection: "zonas" }, actions: ["find", "update"] },
    { resource: { db: "sistema_parqueos", collection: "vehiculos" }, actions: ["find"] }
  ],
  roles: []
});

// Crear rol de cliente
db.createRole({
  role: "Cliente",
  privileges: [
    { resource: { db: "sistema_parqueos", collection: "parqueos" }, actions: ["find"] },
    { resource: { db: "sistema_parqueos", collection: "zonas" }, actions: ["find"] }
  ],
  roles: []
});

// Crear usuarios
db.createUser({ user: "cajero_norte", pwd: "password123", roles: [] });
db.createUser({ user: "cliente_juan", pwd: "password123", roles: [] });

// Asignar los roles a los usuarios 
db.grantRolesToUser("cajero_norte", [{ role: "RolEmpleadoSede", db: "sistema_parqueos" }]);
db.grantRolesToUser("cliente_juan", [{ role: "RolCliente", db: "sistema_parqueos" }]);
print("Rol creado, Bienvenido.");