var num = [1,4,7];

function multiplicacion(f){
  return f<num.length ? num[f]*multiplicacion(f+1) : 1;
}

console.log(multiplicacion(0));