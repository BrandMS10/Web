const formulario = document.getElementById('formu');
const formulariorfc = document.getElementById('formIn');
const inputs = document.querySelectorAll('#formu input');
const inputrfc = document.querySelectorAll('#formIn input');
const modal = document.querySelectorAll('.modalContainer');
const opn = document.querySelectorAll('.form__group-btn-rec')[0];
const cls = document.querySelectorAll('.close')[0];

const expresiones = {
	cliente: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
	porcentaje: /^[0-9][0-9]?$|^100$/, // porcentaje valido.
      rfc: /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))([A-Z\d]{3})?$/ //valida rfc correcto
}

const campos = {
      client: false,
      porcent: false,
      rfc: false
}

const validarForm = (e)=>{
      switch(e.target.name){
            case "client":   
                  validar(expresiones.cliente, e.target, "client");
            break;
            case "porcent":
                  validar(expresiones.porcentaje, e.target, "porcent");
            break;
            case "rfc":
                  validar(expresiones.rfc, e.target, "rfc");
            break;
      }

};

const validar = (expresion, input, campo)=>{
      if (expresion.test(input.value)){
            document.getElementById(`group__${campo}`).classList.remove(`group__${campo}-error`)
            document.querySelector(`#group__${campo} .group__${campo}-error`).classList.remove(`group__${campo}-error-active`)
            document.querySelector(`#group__${campo} .group__${campo}-error`).classList.add(`group__${campo}-error`)
            campos[campo] = true;
            campos[recu] = true;
      }else{
            document.querySelector(`#group__${campo} .group__${campo}-error`).classList.add(`group__${campo}-error-active`)
            campos[campo] = false;
      }
};

inputs.forEach((input) => {
      input.addEventListener("keyup", validarForm);
      input.addEventListener("blur", validarForm);

});
inputrfc.forEach((input) => {
      input.addEventListener("keyup", validarForm);
      input.addEventListener("blur", validarForm);

});

formulario.addEventListener("submit", (e)=>{
      e.preventDefault();
      if (campos.client & campos.porcent & campos.rfc) {
            formulario.reset();
            formulariorfc.reset();
            document.getElementById("form__message-g").classList.add("form__message-g-active");
            document.getElementById("form__message-b").classList.remove("form__message-b-active");
            setTimeout(() => {
                  document.getElementById("form__message-g").classList.remove("form__message-g-active");
                  location.reload();
            }, 3000);
      }else{
            document.getElementById("form__message-b").classList.add("form__message-b-active");
      }
});

opn.addEventListener("click", function (e) {
      document.getElementById("modalContainer").classList.remove("modal-close");
})

cls.addEventListener("click", function (e) {
      document.getElementById("modalContainer").classList.add("modal-close");
})
