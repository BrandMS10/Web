export function Menu(){
      const $Menu = document.createElement("nav");
      $Menu.classList.add("Menu");
      $Menu.innerHTML=`
      <a href="#/">Home</a>
      <span>-</span>
      <a href="#/search">Busqueda</a>
      <span>-</span>
      <a href="https://www.youtube.com/shorts/xjZPdXGo1AY" target="_blank" rel=noopener>Datos</a>
      `;
      return $Menu;
}
