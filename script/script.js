let cart = [];

function addToCart(name, price, image) {
  let item = {
    name: name,
    price: price,
    image: image,
    quantity: 1,
    liked: false,
  };
  cart.push(item);
  showCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  showCart();
}

function increButton(i) {
  cart[i].quantity += 1; // Increase quantity for the specific item
  showCart(); // Update cart display
}

function decreButton(i) {
  if (cart[i].quantity > 0) {
    cart[i].quantity -= 1; // Decrease quantity for the specific item if it's greater than 0
    showCart(); // Update cart display
  }
}

function toggleLike(i) {
  let likeButton = document.getElementById(`like-${i}`);
  cart[i].liked = !cart[i].liked;
  likeButton.style.color = cart[i].liked ? "red" : "white";
}

//Display item in cart section
function showCart() {
  let cartItems = document.getElementById("cart-item");
  cartItems.innerHTML = "";
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    let image = document.createElement("img");
    image.setAttribute("src", item.image);
    image.style.width = "200px";
    image.style.height = "200px";
    image.style.borderRadius = "20px 20px 0px 0px";
    let title = document.createElement("h4");
    title.innerHTML = item.name;
    let price = document.createElement("p");
    let totalPrice = (item.price * item.quantity).toFixed(2);
    price.innerHTML = `Price: -$ ${item.price.toFixed(2)}`;
    let card = document.createElement("div");
    card.style.border = "1px solid black";
    card.style.width = "200px";
    card.style.height = "360px";
    card.style.textAlign = "center";
    card.style.borderRadius = "20px";
    card.style.boxShadow = "2px 2px 4px rgba(0, 0, 0, 0.4)";
    card.style.margin = "20px";
    let button = document.createElement("button");
    button.setAttribute("onClick", `removeFromCart(${i})`);
    button.innerHTML = "Remove";
    button.style.borderRadius = "20px";
    button.style.border = "1px solid rgb(127, 83, 7)";
    button.style.color = "white";
    button.style.background = "rgb(211, 174, 111)";
    button.style.height = "30px";
    button.style.width = "100px";
    let span = document.createElement("span");
    span.style.display = "flex";
    span.style.marginTop = "20px";
    span.style.marginLeft = "65px";
    let increButton = document.createElement("button");
    increButton.setAttribute("onClick", `increButton(${i})`);
    increButton.innerHTML = "+";
    increButton.style.borderRadius = "20px";
    increButton.style.border = "1px solid brown";
    increButton.style.color = "white";
    increButton.style.background = "rgb(211, 174, 111)";
    increButton.style.width = "30px";
    increButton.style.height = "30px";
    let quantityElement = document.createElement("p");
    quantityElement.setAttribute("id", "quantity");
    quantityElement.innerHTML = item.quantity;
    let decreButton = document.createElement("button");
    decreButton.innerHTML = "-";
    decreButton.setAttribute("onClick", `decreButton(${i})`);
    decreButton.style.borderRadius = "20px";
    decreButton.style.border = "1px solid brown";
    decreButton.style.color = "white";
    decreButton.style.background = "rgb(211, 174, 111)";
    decreButton.style.width = "30px";
    decreButton.style.height = "30px";
    let likeButton = document.createElement("button");
    likeButton.setAttribute("id", `like-${i}`);
    likeButton.setAttribute("onclick", `toggleLike(${i})`);
    likeButton.style.border = "1px solid brown";
    likeButton.style.color = "white";
    likeButton.style.background = "rgb(211, 174, 111)";
    likeButton.style.borderRadius = "20px";
    likeButton.style.height = "30px";
    likeButton.style.width = "30px";
    let heartIcon = document.createElement("i");
    heartIcon.className = "fa-solid fa-heart";
    likeButton.appendChild(heartIcon);
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(button);
    card.appendChild(span);
    span.appendChild(increButton);
    span.appendChild(quantityElement);
    likeButton.appendChild(heartIcon);
    span.appendChild(decreButton);
    card.appendChild(likeButton);
    cartItems.appendChild(card);
    total += parseFloat(totalPrice);
  }
  let cartTotal = document.getElementById("cart-total");
  cartTotal.innerHTML = total;
}
