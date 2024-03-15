const adquirirDatos=()=>{
    let listaFormlulario=[];
    let valores=document.getElementsByTagName("input");
    console.log(valores);
    for(let i=0;i<valores.length;i++){
        let valoresNuevos=listaFormlulario.push(valores[i].value);
        console.log(valoresNuevos);
        return(listaFormlulario);
    }

}
let btn=document.getElementsByTagName("button");
console.log(btn);
let a1= document.getElementById("input1");
console.log(a1);
btn.addEventListenet=("click",adquirirDatos());
let resultado=adquirirDatos();
console.log(resultado);
