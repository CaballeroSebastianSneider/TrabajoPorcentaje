/* function digitarNotas(){
    let cantidadNotas = prompt("Ingresa la cantidad de notas: ");
    cantidadNotas = Number(parseInt(cantidadNotas))
    if (isNaN(cantidadNotas)){
        alert ("No esta ingresando un número")
    }else{
        return cantidadNotas;
    }
}

function calcularPromedio(cantidadNotas){
    let suma = 0;
    for (let i = 0; i < cantidadNotas; i++){        
        let nota = parseFloat(prompt("Ingresa la nota "+ (i+1)));
        if (isNaN(nota)){
            alert ("La nota: "+ i +"no es un número")
        }else{
            suma += nota
        }
    }
    return suma
}

function mostrarResultado(){
    let cantidadNotas = digitarNotas();
    let totalPromedio = calcularPromedio(cantidadNotas)
    let promedio = totalPromedio / cantidadNotas
    if (promedio > 6){
        alert("Usted paso con: "+ promedio)
    }else{
        alert("Usted perdio :c con: "+ promedio)
    }
    let resultado = promedio
} */




let calcularPromedio = () =>{
    let nombre = document.getElementById("name").value;
    let notas = [];
    let suma = 0;
    let numNotas = prompt("Ingresa la cantidad de notas del estudiante: "+ nombre);
    if (isNaN(numNotas)){
        alert ("tiene que ingresar un Número")
        
    }else{
        let numNotas1 = parseInt(numNotas); 
        for (let i = 0; i < numNotas1; i++){        
            let nota = parseFloat(prompt("Ingresa la nota " + ( i +1)));

            if(isNaN(nota)){
                alert ("tiene que ingresar un Número")
                break;
            }else{
                notas.push(nota);
                suma += nota;
                let promedio = suma/numNotas1;
                promedio = Math.floor(promedio)
        
                if (promedio >= 6){
                    resultado = nombre + " Aprobado con un promedio de " +promedio;
                }else{
                    resultado = nombre + " Reprobado con un promedio de " +promedio;
                }    
            }

        }

    }

}

function mostrarResultado(){
    alert(resultado);
}