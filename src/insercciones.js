db.ventas.drop()

db.ventas.insertMany([
    { _id: 1, articulo: "Ratón inalámbrico", fecha_compra: new Date("2020-11-02"), qty: 10 , precio:{pUnidad: 15, pEmpresa:11.5}, cliente:"Juan Martín Parra", vendedor:"Marcos Linares Cuenda" },
    { _id: 2, articulo: "Cable de red", fecha_compra: new Date("2020-12-25"), qty: 15 , precio:{pUnidad: 2.5, pEmpresa:1}, cliente:"Pedro LLanos Gómez", vendedor:"Francisco Vera Laguna" },
    { _id: 3, articulo: "Router", fecha_compra: new Date("2020-11-23"), qty: 7 , precio:{pUnidad: 25, pEmpresa:17}, cliente:"Lucía Sánchez Pérez", vendedor:"Marcos Linares Cuenda" },
    { _id: 4, articulo: "Memoria RAM", fecha_compra: new Date("2020-11-22"), qty: 1 , precio:{pUnidad: 60, pEmpresa:49}, cliente:"Carlos Durán Dúran", vendedor:"Paula García Muñoz" },
    { _id: 5, articulo: "Teclado USB", fecha_compra: new Date("2020-12-16"), qty: 5 , precio:{pUnidad: 18, pEmpresa:13.5}, cliente:"Noelia Cayetano Moruno", vendedor:"Enrique Higuero López" }
])

db.ventas.insertMany([
    { _id: 6, articulo: "Altavoces", fecha_compra: new Date("2020-11-01"), qty: 18 , precio:{pUnidad: 15, pEmpresa:10}, cliente:"Juan Martín Parra", vendedor:"Enrique Higuero López" },
    { _id: 7, articulo: "Tajeta de red", fecha_compra: new Date("2020-12-03"), qty: 10 , precio:{pUnidad: 15, pEmpresa:12}, cliente:"Alberto Rojas Vargas", vendedor:"Paula García Muñoz" },
    { _id: 8, articulo: "Tarjeta gráfica", fecha_compra: new Date("2020-11-19"), qty: 2 , precio:{pUnidad: 300, pEmpresa:230}, cliente:"Juan Martín Parra", vendedor:"Marcos Linares Cuenda" },
    { _id: 9, articulo: "Ordenador portatil", fecha_compra: new Date("2020-12-14"), qty: 1 , precio:{pUnidad: 599, pEmpresa:400}, cliente:"Lucía Sánchez Pérez", vendedor:"Andrea Blanco Manzano" },
    { _id: 10, articulo: "Placa Base", fecha_compra: new Date("2020-11-18"), qty: 3 , precio:{pUnidad: 74.5, pEmpresa:67}, cliente:"Alberto Rojas Vargas", vendedor:"Francisco Vera Laguna" }
])

db.ventas.insertMany([
    { _id: 11, articulo: "Ordenador sobremesa", fecha_compra: new Date("2020-12-29"), qty: 1 , precio:{pUnidad: 999, pEmpresa:750}, cliente:"Pedro LLanos Gómez", vendedor:"Andrea Blanco Manzano" },
    { _id: 12, articulo: "Monitor", fecha_compra: new Date("2020-11-15"), qty: 14 , precio:{pUnidad: 100, pEmpresa:85}, cliente:"Carlos Durán Dúran", vendedor:"Paula García Muñoz" },
    { _id: 13, articulo: "Alfombrilla para ratón", fecha_compra: new Date("2020-12-05"), qty: 20 , precio:{pUnidad: 2.5, pEmpresa:1}, cliente:"Noelia Cayetano Moruno", vendedor:"Andrea Blanco Manzano" },
    { _id: 14, articulo: "Ventilador", fecha_compra: new Date("2020-11-27"), qty: 8 , precio:{pUnidad: 7.5, pEmpresa:4}, cliente:"Juan Martín Parra", vendedor:"Marcos Linares Cuenda" },
    { _id: 15, articulo: "Ratón USB", fecha_compra: new Date("2020-12-13"), qty: 12 , precio:{pUnidad: 8, pEmpresa:4.5}, cliente:"Juan Martín Parra", vendedor:"Francisco Vera Laguna" }
])
