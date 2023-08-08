export function Search(){
      const $Form = document.createElement("form"),
      $input = document.createElement("input");
      $Form.classList.add("Search-form");
      $input.name = "search";
      $input.type = "search";
      $input.placeholder = "Buscar...";
      $Form.appendChild($input);
      if (location.hash.includes("#/search")) {
            $input.value = localStorage.getItem("WPsearch"); 
      }
      document.addEventListener("search", e=>{
            if(!e.target.matches("input[type=`search`]"))return false;
            if (e.target.value) localStorage.removeItem("WPsearch");
      })
      document.addEventListener("submit", e=>{
            if(!e.target.matches(".Search-form"))return false;
            e.preventDefault();
            localStorage.setItem("WPsearch", e.target.search.value);
            location.hash = `#/search?search=${e.target.search.value}`;
      })
      return $Form;
}