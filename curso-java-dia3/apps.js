

const numero = parseInt(prompt('Ingrese un numero entre 1 y 20'));
const factorial = (num) => {
   if (num <= 1) return 1;
   return num * factorial (num -1)
}
const verificarNumero = (num) => {
   if (num > 0 && num < 21){
      for (let i=1; i<=num; i++){
        console.log(`${num} x ${i} = ${ num * i}`);
      }
      for(let i=1; i<=num; i++){
      console.log(`el factorial del numero ${i} es: ${factorial(i)} `);
      }
      
   }else{console.log('Fuera de Rango')
} 
      
      
    
}

verificarNumero(numero);



