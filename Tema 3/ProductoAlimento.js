function ProductoAlimento(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;

    this.imprimirDatos = function () {
        console.log("codigo: " + codigo);
        console.log("nombre: " + nombre);
        console.log("precio: " + precio);
    };

    let producto1 = new ProductoAlimenticio("A001", "Leche", 1.20);
    let producto2 = new ProductoAlimenticio("A002", "Pan", 0.95);
    let producto3 = new ProductoAlimenticio("A003", "Queso", 3.50);
    
    let productos = [producto1, producto2, producto3];

    for (let i = 0; i < productos.length; i++) {
        productos[i].imprimirDatos();
    }
}