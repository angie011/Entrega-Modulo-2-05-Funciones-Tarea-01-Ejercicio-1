let contPositivos = 0;
let contNegativos = 0;
let contNeutros = 0;
let TotalP =0;
let TotalNeg =0;
let TotalN = 0;
let numero = 0;

for(let i=1;i<=20;i++){
    numero = Number (prompt('Ingrese número ' + i));
    TotalP = contarPositivos(numero);
    TotalNeg = contarNegativos(numero);
    TotalN = contarNeutros(numero);
}

alert(`Total Positivos: ${TotalP}
       Total Negativos: ${TotalNeg}
       Total Neutros: ${TotalN}`);

function contarPositivos(num){
    if(num>0){
        contPositivos = contPositivos + 1;
    }
    return contPositivos;
}

function contarNegativos(num){
    if(num<0){
        contNegativos = contNegativos + 1;
    }
    return contNegativos;
}

function contarNeutros(num){
    if(num==0){
        contNeutros = contNeutros + 1;
    }
    return contNeutros;
}


