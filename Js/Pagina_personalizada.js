btn_menu = document.getElementById("btn_menu");


function saludo(){
      alert("Bienvenido!");
}
function Preview(){
      console.log("Preview");
      window.location.href = "Preview.html";
}
// Panel lateral contacto
btn_menu.addEventListener("click", ()=>{
      document.getElementById("panel").classList.toggle("panel-active");
      document.getElementById("btn_menu").classList.toggle("is-active");
})