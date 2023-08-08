
const NAME = "Spotify",
      DOMAIN = "https://newsroom.spotify.com",
      SITE = `${DOMAIN}/wp-json`,
      API = `${SITE}/wp/v2`,
      POSTS = `${API}/posts?_embed`,
      POST = `${API}/posts`,
      SEARCH = `${API}/search?_embed&search=`,
      PAGES = `${API}/pages`;

export default{
      NAME, DOMAIN, SITE, API, POSTS, POST, SEARCH, PAGES
}