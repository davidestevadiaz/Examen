var num = [1,2,3,4,5];

function multiplicacion(f){
  return f<num.length ? num[f]*multiplicacion(f+1);
}

console.log(multiplicacion(0));