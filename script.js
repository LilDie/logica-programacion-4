// Función para validar si la entrada es un número
function validarNumero(entrada) {
    return !isNaN(entrada) && isFinite(entrada);
  }
  
  // Función para obtener la serie de Fibonacci
  function fibonacci(n) {
    let serie = [];
    for (let i = 0; i < n; i++) {
      if (i === 0) {
        serie.push(0);
      } else if (i === 1) {
        serie.push(1);
      } else {
        serie.push(serie[i - 1] + serie[i - 2]);
      }
    }
    return serie;
  }
  
  // Función para generar la serie y mostrarla en el DOM
  function generarSerie() {
    let numero = document.getElementById("numero").value;
  
    if (validarNumero(numero)) {
      numero = parseInt(numero);
      let resultado = fibonacci(numero);
      document.getElementById("resultado").innerHTML = "Resultado: " + resultado.join(", ");
      console.log(resultado);
    } else {
      alert("Por favor, ingrese un número válido.");
    }
  }
  
  document.getElementById("numero").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      generarSerie();
    }
  });
  
  
  
  
  // Asegurarse de que el script se ejecute después de que el DOM esté completamente cargado
  document.addEventListener("DOMContentLoaded", function() {
    // Código a ejecutar una vez que el DOM esté cargado
    // En este caso, simplemente llamamos a la función principal
    generarSerie();
  });
  