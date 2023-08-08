const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");


const expresiones = {
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const campos = {
      usr: false,
      pass: false
}
const validarForm = (e)=>{
      switch(e.target.name){
            case "email":   
                  validar(expresiones.correo, e.target, "usr");
            break;
            case "password":
                  validar(expresiones.password, e.target, "pass");
            break;
      }

}

const validar = (expresion, input, campo)=>{
      if (expresion.test(input.value)){
            document.getElementById(`group__${campo}`).classList.remove("form__div-incorrecto")
            document.getElementById(`group__${campo}`).classList.add("form__div-correcto")
            document.querySelector(`#group__${campo} .group__${campo}-error`).classList.remove(`group__${campo}-error-active`)
            document.querySelector(`#group__${campo} .group__${campo}-error`).classList.add(`group__${campo}-error`)
            campos[campo] = true;
      }else{
            document.getElementById(`group__${campo}`).classList.add("form__div-incorrecto")
            document.getElementById(`group__${campo}`).classList.remove("form__div-correcto")
            document.querySelector(`#group__${campo} .group__${campo}-error`).classList.add(`group__${campo}-error-active`)
            campos[campo] = false;
      }
}

inputs.forEach((input) => {
      input.addEventListener("keyup", validarForm);
      input.addEventListener("blur", validarForm);

});
formulario.addEventListener("submit", (e)=>{
      e.preventDefault();
      if (campos.usr & campos.pass) {
            formulario.reset();
            document.getElementById("form__message-g").classList.add("form__message-g-active");
            document.getElementById("form__message-b").classList.remove("form__message-b-active");
            setTimeout(() => {
                  document.getElementById("form__message-g").classList.remove("form__message-g-active");
                  location.reload();
            }, 5000);
      }else{
            document.getElementById("form__message-b").classList.add("form__message-b-active");
      }
})

function register() {
      console.log("registro");
      window.location.href = "registro.html";
}