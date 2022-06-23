## PROGRAMACIÓN III

### PARCIAL "CONCESIONARIA"

Se realizaron algunas mejoras al proyecto anterior de la "Concesionaria".

---

#### COMANDOS A EJECUTAR

- Listar

Devuelve por consola una lista de todos los autos de los que dispone la concesionaria.

      node app.js listar

- Buscar

Muestra en consola el auto al que corresponde la patente con todas sus características. En lugar de la palabra `patente` se escribe los caracteres de la patente del auto a buscar.

      node app.js buscar patente

- Vender

Para vender un auto se utiliza el siguiente código seguido de la `patente` a vender. Esto elimina el auto del `JSON`

      node app.js vender patente

- En Venta

Muestra por consola una lista de todos los autos disponibles para la venta.

      node app.js enVenta

- Nuevos

Muestra por consola una lista de todos los autos disponibles para la venta y que, a su vez, son 0 km.

      node app.js nuevos

- Lista Ventas

Muestra por consola una lista de todos los autos que han sido vendidos.

      node app.js listaVentas

- Total Ventas

Muestra por consola el total de dinero de todas las ventas que se hicieron.

      node app.js totalVentas

- Puede Comprar

Muestra por consola una lista de los autos que una persona puede comprar. Teniendo en cuenta dos parámetros. El primero es el dinero que dispone y el segundo el máximo dinero que está dispuesto a pagar por cuotas.

node app.js puedeComprar dineroQueDispone dineroAPagarPorCuotas
