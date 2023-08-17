//funcion para agregar borde
addRemoveBorder = () =>{
    //Declaro variables y guardo 
    let borderImg = document.querySelector('img');
    let refAdd = document.querySelector('span');
    
    if(borderImg.style.border == "0px" || borderImg.style.border == ""){
        borderImg.style.border = "2px solid white"; 
        refAdd.innerHTML = "On";
        refAdd.style.color = "green";
    }else{
        borderImg.style.border = "0px";
        refAdd.innerHTML = "Off";
        refAdd.style.color = "red";
    }
}
//funcion para validar stickers
checkSticker = () =>{
    let stickers1 = document.getElementById('iNumber1');
    let stickers2 = document.getElementById('iNumber2');
    let stickers3 = document.getElementById('iNumber3');
    let selectionElement = document.getElementById('rebutton');

    
    let suma = Number(stickers1.value) + Number(stickers2.value) +Number(stickers3.value);
    if(suma == 0){
        selectionElement.innerHTML = `<h3>Selecciona un stickers</h3>`;
    }else if(suma <= 10){
        selectionElement.innerHTML = `<h3>Llevas <b style="color:blueviolet"> ${suma} </b> stickers</h3>`;
    } else{
        selectionElement.innerHTML = `<h3>Llevas demasiados stickers</h3>`;
    }
    
}
//funcion de acceso con contraseñas
ingresar = () =>{
    let pass1 = document.getElementById('iPass1');
    let pass2 =  document.getElementById('iPass2');
    let pass3 =  document.getElementById('iPass3');
    let infoPass = document.getElementById('informationPass')
    
    console.log(infoPass);
    console.log(pass1);
    console.log(pass2);
    console.log(pass3);

    if(Number(pass1.value) === 9 && Number(pass2.value) === 1 && Number(pass3.value) === 1){
        infoPass.innerHTML = `<h2><span style="background-color:rgba(255, 255, 255, 0.623)">password 1 <b style="color:rgb(0, 255, 47)">correct</b></span></h2>`
    }else if(Number(pass1.value) === 7 && Number(pass2.value) === 1 && Number(pass3.value) === 4){
        infoPass.innerHTML = `<h2><span style="background-color:rgba(255, 255, 255, 0.623)">password 2 <b style="color:rgb(0, 255, 47)">correct</b></span></h2>`
    }else{
        infoPass.innerHTML = `<h2><span style="background-color:rgba(255, 255, 255, 0.623)"><b style="color:red">Incorrect</b> password</span></h2>`
    }
}