// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
const numbers = [12, 21, 38, 5, 45, 37, 6];

function average (arra){
    let sum = 0;
    for (const element of arra){
      sum += element;
    }
    return console.log(sum / arra.length);
  }

average(numbers);