export function Loader(){
      const $loader = document.createElement("img");
      $loader.src = "App/assets/loader.svg";
      $loader.alt = "Cargando...";
      $loader.classList.add("Loader");
      return $loader;
}