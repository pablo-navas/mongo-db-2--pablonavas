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

// 2. Rol: Empleado de sede

db.createRole({
  role: "RolEmpleado",
  privileges: [
    {
      resource: { db: "miBasedeDatos", collection: "parques" },
      actions: ["find", "insert", "update"] // Leer, ingresar y dar salida
    },
    {
      resource: { db: "miBasedeDatos", collection: "zonas" },
      actions: ["find"] // Solo leer disponibilidad
    }
  ],
  roles: []
});

// 3. Rol: Cliente
db.createRole({
  role: "RolCliente",
  privileges: [
    {
      resource: { db: "miBasedeDatos", collection: "parques" },
      actions: ["find"]
    },
    {
      resource: { db: "miBasedeDatos", collection: "zonas" },
      actions: ["find"]
    }
  ],
  roles: []
});

// EJEMPLO 
db.createUser({
  user: "JuanEmpleado",
  pwd: "password123",
  roles: [
    { role: "RolEmpleado", db: "miBasedeDatos" }
  ]
});