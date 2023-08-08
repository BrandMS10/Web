const public = "pk_test_51MjRYHFRZAsRwJANybqA4UbXlC0ik2eHJawHuHCtQXCIMWL0r9hhQAjT88vXMcUshS35ezPsRxEnsX4djzeyNNvr00eGLiZxef",
      secret = "sk_test_51MjRYHFRZAsRwJANTTGYQ4Pc3PjEa7E9baLdC3ANsAKf5Zv6bOnbUNv9TGSjEiVLpGynuhsyYkUSB6SKIHaYmlyD006L9NQNkm",
      conos = document.getElementById("conos"),
      template = document.getElementById("conos-template").content,
      fragment = document.createDocumentFragment(),
      fetchOp = {
            headers: {
            Authorization: `Bearer ${secret}`
      }
      };
let prices, products;

const format_money = num =>`$${num.slice(0,-2)}.${num.slice(-2)}`;

Promise.all([
      fetch("https://api.stripe.com/v1/products",fetchOp),
      fetch("https://api.stripe.com/v1/prices",fetchOp),
]).then((responses) => Promise.all(responses.map((res) => res.json())))
.then(json => {
      
      products = json[0].data;
      prices = json[1].data;
      console.log(products,prices);

      prices.forEach((el) => {
            let productdata = products.filter((product) => product.id === el.product);
            template.querySelector(".cono").setAttribute("price",el.id);
            template.querySelector("img").src = productdata[0].images[0];
            template.querySelector("img").alt = productdata[0].name;
            template.querySelector("figcaption").innerHTML=`
            ${productdata[0].name}<br>
            ${format_money(el.unit_amount_decimal)} ${el.currency}
            `;
            let clone = document.importNode(template,true);
            fragment.appendChild(clone);
      });
      
      conos.appendChild(fragment);
})
.catch(err => {
      console.log(err);
      let message = err.statusText||"Ocurrio un error";
      conos.innerHTML = `<p>Error: ${err.status}: ${message}</p>`;
});

document.addEventListener("click", (e)=>{
      if(e.target.matches(".cono *")){
            let price = e.target.parentElement.getAttribute("price");
            console.log(price);
            Stripe(public)
            .redirectToCheckout({
                  lineItems:[{price, quantity:1}],
                  mode: "payment",
                  successUrl:"http://127.0.0.1:5501/assets/succes.html"
            })
            .then(res =>{
                  if(res.error){
                        console.log(res);
                        conos.insertAdjacentHTML("afterend", res.error.message);
                  }
            });
      }
});

