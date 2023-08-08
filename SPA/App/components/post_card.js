export function Post_Card(props){
      let {title, id, date, slug, _embedded} = props;
      let dateformat = new Date(date).toLocaleDateString(),
            urldefault = _embedded["wp:featuredmedia"]? _embedded["wp:featuredmedia"][0].source_url: "App/assets/loader.svg"
      document.addEventListener("click", (e)=>{
            if(!e.target.matches(".Post_Card a"))return false;
            localStorage.setItem("WpPostID",e.target.dataset.id);
      });
      return `
      <article class="Post_Card">
      <img src="${urldefault}" alt="">    
      <h2>${title.rendered}</h2>
      <p>
            <time datetime="${date}">Fecha:${dateformat} </time>
            <a href="#/${slug}" data-id="${id}">Ver post</a>
      </p>
      </article> 
      `;

}
