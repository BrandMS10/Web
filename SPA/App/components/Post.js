export function Post(props){
      let {title, content} = props;
      return `
      <section class="post-site">
      <aside>
      <h2>${title.rendered}</h2>
      </aside><hr>
      <article>
      ${content.rendered}
      </article>
      </section>`;
}

