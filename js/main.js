alert("Bienvenido a la mejor tienda de teclados");

function ingreseNombre() {
  let nameEmpty = prompt("Ingresa tu nombre o apodo");
  if (nameEmpty === "") {
    ingreseNombre();
  }
  alert("El nombre que ingresaste es " + nameEmpty);
}

ingreseNombre();

const opcion1 = { nombre: "Teclado CannonKeys", tipo: "Mecanico", precio: 100, id: 1 };
const opcion2 = { nombre: "Teclado Hotswap", tipo: "Hotswap", precio: 200, id: 2 };
const opcion3 = { nombre: "Teclado Logitech", tipo: "Mecanico", precio: 50, id: 3 };

const articulos = [opcion1, opcion2, opcion3];

const arrayProductos = [];

function elegirTeclado() {
  let teclado;
  let nombreTeclado;
  do {
    teclado = parseInt(
      prompt(
        "Ingrese el teclado que deseas.\n\nEjemplo seleccione '1' para Cannonkeys.\n\n1- Cannonkeys\n2- Hotswap\n3- Logitech"
      )
    );
    if (teclado === 0) {
      break;
    }
  } while (teclado !== 1 && teclado !== 2 && teclado !== 3);
  switch (teclado) {
    case 1:
      nombreTeclado = opcion1.nombre;
      break;
    case 2:
      nombreTeclado = opcion2.nombre;
      break;
    case 3:
      nombreTeclado = opcion3.nombre;
      break;

    default:
      console.log("Solo puedes elegir un número entre 1 y 3");
      alert("Solo puedes elegir un número entre 1 y 3");
      break;
  }

  // Verificar si localStorage está disponible
  if (typeof localStorage !== "undefined") {
    // Almacenar el nombre del teclado elegido
    localStorage.setItem("tecladoElegido", nombreTeclado);
  } else {
    // Mostrar un mensaje de error al usuario
    alert("Tu navegador no soporta almacenamiento local");
  }
}

elegirTeclado();

// Recuperar el nombre del teclado elegido
let tecladoAlmacenado = localStorage.getItem("tecladoElegido");

alert("Elegiste el teclado " + tecladoAlmacenado);