import { Loader } from "./components/loader.js";
import { Header } from "./components/header.js";
import { Router } from "./components/router.js";
import { Main } from "./components/Main.js";

export function App(){
   const $root = document.getElementById("root");
   $root.innerHTML = null;
   $root.appendChild(Header());
   $root.appendChild(Main());
   $root.appendChild(Loader());
   Router();

}

