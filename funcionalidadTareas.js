let operacionesArchivo = require('./operacionesArchivos.js')

let concesionaria = {
  autos: operacionesArchivo.leerArchivoJson(),

  listar: function () {
    console.log(this.autos)
  },

  buscarAuto: function (patenteBuscada) {
    console.log('========================')
    console.log('Buscando el auto de patente ' + patenteBuscada)
    console.log('========================')
    autoBuscado = this.autos.filter(auto => auto.patente === patenteBuscada)[0]
    return autoBuscado != undefined ? autoBuscado : null
  },

  venderAuto: function (patenteBuscada) {
    let autoPorVender = this.buscarAuto(patenteBuscada)

    if (autoPorVender === null)
      return console.log(`Auto con patente ${patenteBuscada} Encontrado`)
    if (autoPorVender.vendido === true)
      return console.log(
        `El auto con patente ${patenteBuscada} ya ha sido vendido`
      )
    autoPorVender.vendido = true
    operacionesArchivo.grabarUnJson(JSON.stringify(this.autos))
    return console.log(
      `Felicitaciones, auto con patente ${patenteBuscada} vendido!`
    )
  },

  autosParaLaVenta: function () {
    console.log('========================')
    console.log('Estos autos estan en venta:')
    console.log('========================')
    return this.autos.filter(auto => auto.vendido == false)
  },

  autosNuevos: function () {
    console.log('Estos autos estan en venta y son 0km:')
    console.log('========================')
    let listaDeAutosNuevos = this.autosParaLaVenta().filter(
      auto => auto.km == 0
    )

    return listaDeAutosNuevos.length > 0
      ? listaDeAutosNuevos
      : 'No hay autos a la venta'
  },

  listaDeVentas: function () {
    //Devuelve un Array con los autos que están disponibles a la venta
    let autosVendidos = this.autos.filter(auto => auto.vendido == true)
    let ventas = []
    //Agrega al Array "ventas" un array con marca del auto, el modelo y el precio de cada auto.
    autosVendidos.forEach(auto =>
      ventas.push([auto.marca, auto.modelo, auto.precio])
    )
    //Retorna el mismo array con las características. Si el array está vacio devuelve "0"
    return ventas.length > 0 ? ventas : 0
  },

  totalDeVentas: function () {
    if (!this.listaDeVentas() > 0) return 'No hay autos Vendidos aún'
    //Crea un Array con los precios de todos los autos vendidos.
    let ventas = this.listaDeVentas().map(arr => {
      let total = 0
      total = total + arr[2]
      return total
    })
    //Retorna el total de todos los autos vendidos, si no hay autos vendidos devuelve "0"
    return ventas.length > 0 ? ventas.reduce((a, b) => a + b, 0) : 0
  },

  puedeComprar: function (auto, persona) {
    return (
      auto.precio <= persona.capacidadDePagoTotal &&
      auto.precio / auto.cuotas <= persona.capacidadDePagoEnCuotas
    )
  },

  autosQuePuedeComprar: function (persona) {
    // dada una persona este metodo trae todos los autos que esa persona puede pagar
    let autosALaVenta = this.autosParaLaVenta()
    let autosComprables = autosALaVenta.filter(auto => {
      return concesionaria.puedeComprar(auto, persona)
    })
    return autosComprables.length > 0
      ? autosComprables
      : 'No hay autos disponibles'
  },
}

module.exports = concesionaria
