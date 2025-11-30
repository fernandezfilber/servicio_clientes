const clientesService = require('../Services/ClientesServices');

// Obtener todos los clientes
const calcularEdad = (req, res )=>{
    const year = parseInt (req.params.year);

    const edad = clientesService.calcularEdad(year );
    res.json({edad});
}
const saludar = ( req, res)=>{
    const mensaje= req.params.mensaje;
    const newMensaje = clientesService.saludar(mensaje);
    res.json({newMensaje});
}

const calcularIMC = (req, res)=>{
    const peso = parseFloat(req.params.peso);
    const talla = parseFloat(req.params.talla);

    const imc = clientesService.calculasIMC(peso, talla)

    res.json({imc})
}

const suma = (req, res)=>{

    const sumaParam = ( req.body.numero);

    const total = clientesService.suma(sumaParam);
    res.json(total);
}

const validarEdad= ( req, res)=>{
    const edad = parseInt( req.params.edad);

    const esMayor = clientesService.validadEdad(edad)
    res.json(esMayor)
}
module.exports = {
    calcularEdad,
    saludar,
    calcularIMC,
    suma, validarEdad
};