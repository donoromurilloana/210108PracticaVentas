/** Beneficio de cada vendedor */
db.ventas.aggregate([
  { 
    $group:{
      _id:"$vendedor",
      importeTotalVenta: { $sum: { $multiply: [ "$precio.pUnidad","$qty" ] } },
      p_compraEmpresa: {$sum:{ $multiply:["$precio.pEmpresa", "$qty"]}}
    
  }},
    {
      $addFields:
        {
          beneficios: { $subtract: [ "$importeTotalVenta","$p_compraEmpresa"]}
        }
    }
])
/** Resultados de la consulta 
{ "_id" : "Paula García Muñoz", "importeTotalVenta" : 1610, "p_compraEmpresa" : 1359, "beneficios" : 251 }
{ "_id" : "Andrea Blanco Manzano", "importeTotalVenta" : 1648, "p_compraEmpresa" : 1170, "beneficios" : 478 }
{ "_id" : "Francisco Vera Laguna", "importeTotalVenta" : 357, "p_compraEmpresa" : 270, "beneficios" : 87 }
{ "_id" : "Enrique Higuero López", "importeTotalVenta" : 360, "p_compraEmpresa" : 247.5, "beneficios" : 112.5 }
{ "_id" : "Marcos Linares Cuenda", "importeTotalVenta" : 985, "p_compraEmpresa" : 726, "beneficios" : 259 }
*/

/**Importe total de las ventas */
db.ventas.aggregate([
  {
    $group:{ _id:null,
    importe_total: { $sum: { $multiply: [ "$precio.pUnidad","$qty" ] } } }
  }
])
/** Resultado de la consulta 
{ "_id" : null, "importe_total" : 4960 }
*/

/** Mejores clientes */
db.ventas.aggregate([
  {
    $group:{ 
      _id:"$cliente",
      comprasTotales: { $sum:  "$qty"  } ,
      precioTotalCompras: { $sum: { $multiply: [ "$precio.pUnidad","$qty" ] } } 
    }
  },
    {
      $sort:
      {
        precioTotalCompras:-1
      }
    }
  ])
/** Resultado de la consulta 
{ "_id" : "Carlos Durán Dúran", "comprasTotales" : 15, "precioTotalCompras" : 1460 }
{ "_id" : "Juan Martín Parra", "comprasTotales" : 50, "precioTotalCompras" : 1176 }
{ "_id" : "Pedro LLanos Gómez", "comprasTotales" : 16, "precioTotalCompras" : 1036.5 }
{ "_id" : "Lucía Sánchez Pérez", "comprasTotales" : 8, "precioTotalCompras" : 774 }
{ "_id" : "Alberto Rojas Vargas", "comprasTotales" : 13, "precioTotalCompras" : 373.5 }
{ "_id" : "Noelia Cayetano Moruno", "comprasTotales" : 25, "precioTotalCompras" : 140 }
*/

/** Mejores vendedores*/
db.ventas.aggregate([
  { 
    $group:{
      _id:"$vendedor",
      importeTotalVenta: { $sum: { $multiply: [ "$precio.pUnidad","$qty" ] } },
      cantidadVentas: {$sum:"$qty"}
    }
  },
  {
    $sort: 
      {
        importeTotalVenta:-1
      }
  }
])

/** Resultado de la consulta 
{ "_id" : "Andrea Blanco Manzano", "importeTotalVenta" : 1648, "cantidadVentas" : 22 }
{ "_id" : "Paula García Muñoz", "importeTotalVenta" : 1610, "cantidadVentas" : 25 }
{ "_id" : "Marcos Linares Cuenda", "importeTotalVenta" : 985, "cantidadVentas" : 27 }
{ "_id" : "Enrique Higuero López", "importeTotalVenta" : 360, "cantidadVentas" : 23 }
{ "_id" : "Francisco Vera Laguna", "importeTotalVenta" : 357, "cantidadVentas" : 30 }
*/

/** Mejores articulos */
db.ventas.aggregate([
  {$match: 
    {
      $and: [
        {$expr: {$gt: [{$month: "$fecha_compra"},10]}},{$expr: {$eq: [{$year: "$fecha_compra"}, 2020]}}
      ]
    }
  },
  {$group:   
      {        
     _id:"$articulo",    
      importeTotalArtVendidos: {$sum:{ $multiply:["$precio.pUnidad", "$qty"]}},
      unidadesVendidas: {$sum: "$qty"}
      }
   },
     {
        $sort:
          {
            importeTotalArtVendidos: -1
          }      
     }
])
/** Resultado de la consulta 
{ "_id" : "Monitor", "importeTotalArtVendidos" : 1400, "unidadesVendidas" : 14 }
{ "_id" : "Ordenador sobremesa", "importeTotalArtVendidos" : 999, "unidadesVendidas" : 1 }
{ "_id" : "Tarjeta gráfica", "importeTotalArtVendidos" : 600, "unidadesVendidas" : 2 }
{ "_id" : "Ordenador portatil", "importeTotalArtVendidos" : 599, "unidadesVendidas" : 1 }
{ "_id" : "Altavoces", "importeTotalArtVendidos" : 270, "unidadesVendidas" : 18 }
{ "_id" : "Placa Base", "importeTotalArtVendidos" : 223.5, "unidadesVendidas" : 3 }
{ "_id" : "Router", "importeTotalArtVendidos" : 175, "unidadesVendidas" : 7 }
{ "_id" : "Ratón inalámbrico", "importeTotalArtVendidos" : 150, "unidadesVendidas" : 10 }
{ "_id" : "Tajeta de red", "importeTotalArtVendidos" : 150, "unidadesVendidas" : 10 }
{ "_id" : "Ratón USB", "importeTotalArtVendidos" : 96, "unidadesVendidas" : 12 }
{ "_id" : "Teclado USB", "importeTotalArtVendidos" : 90, "unidadesVendidas" : 5 }
{ "_id" : "Ventilador", "importeTotalArtVendidos" : 60, "unidadesVendidas" : 8 }
{ "_id" : "Memoria RAM", "importeTotalArtVendidos" : 60, "unidadesVendidas" : 1 }
{ "_id" : "Alfombrilla para ratón", "importeTotalArtVendidos" : 50, "unidadesVendidas" : 20 }
{ "_id" : "Cable de red", "importeTotalArtVendidos" : 37.5, "unidadesVendidas" : 15 }
*/

/** Mejores meses */

db.ventas.aggregate ([
  { 
    $match: 
      {
        $and: [
          {$expr: {$gt: [{$month: "$fecha_compra"},10]}},{$expr: {$eq: [{$year: "$fecha_compra"}, 2020]}}
        ]
      }
    },
    { 
      $group:{
        _id: {Mes: {$month: "$fecha_compra"}},
        importeTotalMes: { $sum: { $multiply: [ "$precio.pUnidad","$qty" ] } },
        totalArticulos: {$sum: "$qty"}
      }
    },
    {
      $sort:
      {
        importeTotalMes:-1
      }
    }
  ])
  
/** Resultado de la consulta 
{ "_id" : { "Mes" : 11 }, "importeTotalMes" : 2938.5, "totalArticulos" : 63 }
{ "_id" : { "Mes" : 12 }, "importeTotalMes" : 2021.5, "totalArticulos" : 64 }
*/

/**Promedio de ventas mensuales */
db.ventas.aggregate ([
    { 
      $group:{
        _id: {$month:"$fecha_compra"},
        importeTotalMes: { $sum: { $multiply: [ "$precio.pUnidad","$qty" ] } },
        promedioArticulos: {$avg: "$qty"},
        promedioGastos: {$avg:{ $multiply: [ "$precio.pUnidad","$qty" ] }},
        precioVentaMaximo: {$max: "$precio.pUnidad"}
      }
    },
    {
      $sort:
      {
        promedio:-1
      }
    }
  ])

/** Resultado de la consulta
{ "_id" : 11, "importeTotalMes" : 2938.5, "promedioArticulos" : 7.875, "promedioGastos" : 367.3125, "precioVentaMaximo" : 300 }
{ "_id" : 12, "importeTotalMes" : 2021.5, "promedioArticulos" : 9.142857142857142, "promedioGastos" : 288.7857142857143, "precioVentaMaximo" : 999 } 
*/