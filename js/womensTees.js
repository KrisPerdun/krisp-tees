let http = new XMLHttpRequest();

http.open('get', 'json/womensTees.json', true);

http.send();


http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let products = JSON.parse(this.responseText);
      let output = "";

      for(let item of products){
         output += `
            <div class="product">
               <img src="${item.image}" alt="${item.image}">
               <p class ="title">${item.title}</p>
               <p class ="description">${item.description}</p>
               <p class ="price">
                  <span>$</span>
                  <span>${item.price}</span>
               </p>
               <p class ="rating">
                  <span>${item.rating} <i class='bx bxs-star'></i></span>
               </p>
               <select class="size">
                     <option value="size">Choose Size</option>
                     <option value="size">S</option>
                     <option value="size">M</option>
                     <option value="size">L</option>
                     <option value="size">XL</option>
                     <option value="size">2XL</option>
                     <option value="size">3XL</option>
                  </select>
               <p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
            </div>
         `;
      }
      document.querySelector(".products").innerHTML = output;
   }
}