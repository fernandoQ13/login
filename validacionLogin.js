const username = document.getElementById("nombre");

const pass= document.getElementById("clave");

const boton= document.getElementById("boton");

boton.addEventListener('click', (e) =>{
    e.preventDefault()

    const date= {
        username:  username.value,
        pass:  pass.value

    }

    if (date.username=="fernando" && date.pass=="quintana"){
            location.href='https://pworkers-fq.herokuapp.com';
    }
    else if (date.username==""){
        alert("igrese usuario")
    }
    else if(date.pass=="" ){
        alert("ingrese contraseña")
    }
    else{
        alert("clave o usuario incorrecta")
    }
            
 
})
