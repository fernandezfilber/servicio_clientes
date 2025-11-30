

let edad = 0;
const calcularEdad = (year) => {

    edad = new  Date().getFullYear() - year;
    return edad;
}
const saludar =(mensaje)=>{

    let newMensaje = mensaje.toUpperCase();
    return newMensaje;

}

const calculasIMC = ( peso , talla)=>{
let imc = peso / (talla*talla);
return imc;

}

const suma= ( numero)=>{

    let sumaTotal=0;
    for(let i =0; i < numero.length; i++ ){
       sumaTotal+=numero[i];


    }

    return sumaTotal;
}

const validadEdad =( edad )=>{

    if (  edad >= 18 ){
        return {
           mensaje: " Es mayor de edad",
           esMAyor: true
        };

    }else {
         return {
           mensaje: " Es mayor de edad",
           esMAyor: false
        };
    }

}



module.exports = {
    calcularEdad,
    saludar,
    calculasIMC,
    suma, 
    validadEdad
};