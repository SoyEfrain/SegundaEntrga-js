// function postulantes(nombre, apellido, edad) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
// }

// let nombre = prompt("Ingrese su nombre");
// let apellido = prompt("Ingrese su apellido");
// let edad = prompt("Ingrese su edad");

// const postulante1 = new postulantes(nombre, apellido, edad);
// console.log(postulante1);


// // EJEMPLO 2 autos 


// class auto{
//     constructor(nombre, precio, año){
//         this.nombre = nombre;
//         this.precio = precio;
//         this.año = año;
//         this.vendidos =false;
//     }

//     vender(){
//         this.vendidos = true;
//     }
// }

// const auto1 = new auto ("Honda Civic 2.0",
// 18900, 
// 2017);

// const auto2 = new auto ("Chevrolet Camaro Coupe",
// 90200, 
// 2017);

// console.log(auto1);
// auto1.vender();
// console.log(auto1);





// // EJEMPLO 3 arreglos

// class vehiculo {
//     constructor(nombre, precio) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.vendido = false;
//     }

//     vender() {
//         this.vendido = true;
//     }
// }

// const vehiculos = [];

// vehiculos.push(new vehiculo("Audi", 27000));
// vehiculos.push(new vehiculo("Bmw", 35000));
// vehiculos.push(new vehiculo("Ferrari", 54000));

// console.log(vehiculos); 





// // EJEMPLO 4 arreglos 2

const productos = [
    {id: 1 , nombre: "Audi", precio: 27000},
    {id: 2 , nombre: "Bmw", precio: 35000},
    {id: 3 , nombre: "Ferrari", precio: 54000},
]

// productos.forEach(item => {
//     console.log(item)
// })


// EJEMPLO 5 arreglos 3 find

// const productos = [
//     {id: 1 , marca: "audi", precio: 27000},
//     {id: 2 , marca: "bmw", precio: 35000},
//     {id: 3 , marca: "ferrari", precio: 54000},
// ]

// let nombre = prompt("Ingrese la marca de auto que esta buscando")
// let producto = productos.find((item) => item.marca ===nombre)

// if (producto){
//     alert(`
//     Marca del auto: ${producto.marca}
//     El precio del auto es: ${producto.precio}`)
// }else{
//     alert("Marca de auto no encontrado")
// }



// EJEMPLO 6 arreglos 4 filter

// let precio = parseInt(prompt("Ingrese un monto a gastar"));
// let busqueda = productos.filter((item) => item.precio > precio)

// busqueda.forEach ((item) => {

//     alert(`
//         Marca: ${item.marca}
//         Precio: ${item.precio}
//     `)
// })