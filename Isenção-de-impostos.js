const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

const pessoa1 = 5000000;

if (aposentada) {
        console.log("ISENTA"); 
    } else if (portadoraDeDoenca) {
        console.log("ISENTA");
} else if(pessoa1 <= totalDeRendimentos) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
} else if(pessoa1 >= 3000000) {
    console.log("PEGA LEAO");
}