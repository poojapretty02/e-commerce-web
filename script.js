let scrollContainer = document.querySelector(".full-info");
let scrollDownside = document.querySelector(".air-max");
let backbtn = document.querySelector("#backButton");
let nextbtn = document.querySelector("#rightButton");

// scrollContainer.addEventListener("wheel", (e) => {
//   if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
//     e.preventDefault();
//     scrollContainer.scrollLeft += e.deltaX;
//   }
// });
// nextbtn.addEventListener("click", () => {
//   scrollContainer.computedStyleMap.scrollBehavior = "smooth";
//   scrollContainer.scrollLeft += 900;
// });

// backbtn.addEventListener("click", () => {
//   scrollContainer.scrollLeft -= 900;
// });
const isMobile = window.innerWidth <= 480;

if (!isMobile) {
  scrollContainer.addEventListener("wheel", (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaX;
    }
  });
}

// Buttons to scroll horizontally only on larger screens
if (!isMobile) {
  nextbtn.addEventListener("click", () => {
    scrollContainer.computedStyleMap.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
  });

  backbtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 900;
  });
}

function display() {
  var img = document.getElementById("air-force");
  img.src = "/images/white air-force.png";
}
function change() {
  var img = document.getElementById("air-force");
  img.src = "/images/airforce-img.png";
}
function change1() {
  var img = document.getElementById("air-force");
  img.src = "/images/airforce-img.png";
}
function change2() {
  var img = document.getElementById("air-force");
  img.src = "/images/air-force1.png";
}
function change3() {
  var img = document.getElementById("air-force");
  img.src = "/images/air-force2.png";
}
function change4() {
  var img = document.getElementById("air-force");
  img.src = "/images/air-force3.png";
}

document.getElementById("card").style.display = "none";
document.getElementById("closeCardButton").style.display = "none";
function showCard() {
  document.getElementById("card").style.display = "block";
  document.querySelector(".airforce").style.display = "none";
  document.getElementById("showCardButton").style.display = "none";
  document.getElementById("closeCardButton").style.display = "block";
}

function hideCard() {
  document.getElementById("card").style.display = "none";

  if (window.innerWidth < 491) {
    document.querySelector(".airforce").style.display = "block";
  } else {
    document.querySelector(".airforce").style.display = "flex";
  }

  document.getElementById("showCardButton").style.display = "inline-block";
  document.getElementById("closeCardButton").style.display = "none";
}

const num = document.querySelector(".num");
plus = document.querySelector(".plus");
minus = document.querySelector(".minus");
let a = 1;

plus.addEventListener("click", function () {
  a++;
  num.innerText = a;
  console.log(a);
});

minus.addEventListener("click", function () {
  if (a > 1) {
    a--;
    num.innerText = a;
    console.log(a);
  }
});

let selectedSize = null;
let quantity = 1;
const cart = [];

function selectSize(size) {
  selectedSize = size;
  document.querySelectorAll(".size").forEach((s) => (s.style.color = ""));
  document.querySelector(`.size:nth-child(${size - 40})`).style.color = "red";
}

function updateQuantity(change) {
  quantity = Math.max(1, quantity + change);
  document.querySelector(".num").innerText = quantity;
}

function addToCart() {
  var productName = document.getElementById("productName").innerText;
  var productImage = document.getElementById("air-force").src;
  var productPrice = parseInt(
    document.getElementById("productPrice").innerText.replace("₹", "")
  );

  if (!selectedSize) {
    alert("Please select a size.");
    return;
  }

  const existingItem = cart.find(
    (item) => item.name === productName && item.size === selectedSize
  );

  if (existingItem) {
    existingItem.quantity += quantity;
    existingItem.totalPrice = existingItem.price * existingItem.quantity;
  } else {
    var cartItem = {
      name: productName,
      image: productImage,
      size: selectedSize,
      price: productPrice,
      quantity: quantity,
      totalPrice: productPrice * quantity,
    };
    cart.push(cartItem);
  }

  displayCart();
  updateCartCount();
}

function displayCart() {
  const cartItems = document.getElementById("cartItems");
  const totalPriceElem = document.getElementById("totalPrice");
  const buyNowButton = document.getElementById("buyNowButton");
  cartItems.innerHTML = "";

  let totalPrice = 0;

  if (cart.length === 0) {
    buyNowButton.style.display = "none";
    totalPriceElem.innerText = "Total: ₹0"; // Show 0 when cart is empty
  } else {
    buyNowButton.style.display = "block";
    cart.forEach((item, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <div class="cartitems">
          <img src="${item.image}" alt="${item.name}" width="70" style="vertical-align: middle;">
          <div class="cartdetails">
            <p>${item.name}</p>
            <p>Size: ${item.size}</p>
            <p>Qty: ${item.quantity}</p>
            <p>Price: ₹${item.totalPrice}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
          </div>
        </div>
      `;
      cartItems.appendChild(listItem);

      totalPrice += item.totalPrice;
    });
    totalPriceElem.innerText = `Total: ₹${totalPrice}`;
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  displayCart();
  updateCartCount();
}

function updateCartCount() {
  const cartCountElem = document.getElementById("cartCount");
  cartCountElem.innerText = cart.length;
}

function toggleCart() {
  const cartSection = document.getElementById("cartSection");
  cartSection.style.display =
    cartSection.style.display === "none" ? "block" : "none";
}

document.getElementById("payment-page").style.display = "none";
function handleBuyNow() {
  document.getElementById("payment-page").style.display = "block";
  document.getElementById("container").style.display = "none";
}

function closeModal() {
  document.getElementById("container").style.display = "block";
  document.getElementById("payment-page").style.display = "none";
}

document.getElementById("cartSection").style.display = "none";

function clicktohide() {
  document.getElementById("cartSection").style.display = "none";
}
document.getElementById("ordered-confirmed").style.display = "none";
function placeOrder() {
  document.getElementById("payment-page").style.display = "none";
  document.getElementById("ordered-confirmed").style.display = "block";
}

document.getElementById("card1").style.display = "none";
function showmaxCard() {
  document.getElementById("card1").style.display = "block";
  document.getElementById("air-max").style.display = "none";
  document.getElementById("showButton").style.display = "none";
  document.getElementById("closeButton").style.display = "block";
}

function hidemaxCard() {
  document.getElementById("card1").style.display = "none";
  document.getElementById("air-max").style.display = "flex";
  document.getElementById("showButton").style.display = "inline-block";
  document.getElementById("closeButton").style.display = "none";
}
const numb = document.querySelector(".numb");
plus = document.querySelector(".plus-sym");
minus = document.querySelector(".minus-sym");
let b = 1;

plus.addEventListener("click", function () {
  b++;
  numb.innerText = b;
  console.log(b);
});

minus.addEventListener("click", function () {
  if (b > 1) {
    b--;
    numb.innerText = b;
    console.log(b);
  }
});

function changed() {
  var img = document.getElementById("airmaxx");
  img.src = "/images/airmaxx.png";
}
function changed1() {
  var img = document.getElementById("airmaxx");
  img.src = "/images/air-maxgold1.png";
}
function changed2() {
  var img = document.getElementById("airmaxx");
  img.src = "/images/air-maxgold2.png";
}
function changed3() {
  var img = document.getElementById("airmaxx");
  img.src = "/images/air-maxgold3.png";
}
function changed4() {
  var img = document.getElementById("airmaxx");
  img.src = "/images/airmaxx.png";
}
function changed5() {
  var img = document.getElementById("airmaxx");
  img.src = "/images/air-maxgreen.png";
}

function addCart() {
  var productName1 = document.getElementById("productName1").innerText;
  var productImage1 = document.getElementById("airmaxx").src;
  var productPrice1 = parseInt(
    document.getElementById("productPrice1").innerText.replace("₹", "")
  );

  if (!selectedSize) {
    alert("Please select a size.");
    return;
  }

  var cartItem = {
    name: productName1,
    image: productImage1,
    size: selectedSize,
    price: productPrice1,
    quantity: quantity,
    totalPrice: productPrice1 * quantity,
  };

  cart.push(cartItem);
  displayCart();
  updateCartCount();
}

document.getElementById("card2").style.display = "none";
function showjordenCard() {
  document.getElementById("card2").style.display = "block";
  document.getElementById("air-max").style.display = "none";
  document.getElementById("showjordenButton").style.display = "none";
  document.getElementById("closejordenButton").style.display = "block";
}

function hidejordenCard() {
  document.getElementById("card2").style.display = "none";
  document.getElementById("air-max").style.display = "flex";
  document.getElementById("showjordenButton").style.display = "inline-block";
  document.getElementById("closejordenButton").style.display = "none";
}
const numb1 = document.querySelector(".numb1");
plus1 = document.querySelector(".plus-sym1");
minus1 = document.querySelector(".minus-sym1");
let c = 1;

plus1.addEventListener("click", function () {
  c++;
  numb1.innerText = c;
  console.log(c);
});

minus1.addEventListener("click", function () {
  if (c > 1) {
    c--;
    numb1.innerText = c;
    console.log(c);
  }
});

function changed11() {
  var img = document.getElementById("jorden");
  img.src = "/images/jordan.jpeg";
}
function changed12() {
  var img = document.getElementById("jorden");
  img.src = "/images/jordan1.png";
}
function changed13() {
  var img = document.getElementById("jorden");
  img.src = "/images/jordan2.png";
}
function changed14() {
  var img = document.getElementById("jorden");
  img.src = "/images/jordan3.png";
}
function changed15() {
  var img = document.getElementById("jorden");
  img.src = "/images/jordan.jpeg";
}

function addTheCart() {
  var productName2 = document.getElementById("productName2").innerText;
  var productImage2 = document.getElementById("jorden").src;
  var productPrice2 = parseInt(
    document.getElementById("productPrice2").innerText.replace("₹", "")
  );

  if (!selectedSize) {
    alert("Please select a size.");
    return;
  }

  var cartItem = {
    name: productName2,
    image: productImage2,
    size: selectedSize,
    price: productPrice2,
    quantity: quantity,
    totalPrice: productPrice2 * quantity,
  };

  cart.push(cartItem);
  displayCart();
  updateCartCount();
}

document.getElementById("card3").style.display = "none";
function showcraterCard() {
  document.getElementById("card3").style.display = "block";
  document.getElementById("air-max").style.display = "none";
  document.getElementById("showcraterButton").style.display = "none";
  document.getElementById("closecraterButton").style.display = "block";
}

function hidecraterCard() {
  document.getElementById("card3").style.display = "none";
  document.getElementById("air-max").style.display = "flex";
  document.getElementById("showcraterButton").style.display = "inline-block";
  document.getElementById("closecraterButton").style.display = "none";
}
const numb2 = document.querySelector(".numb2");
plus2 = document.querySelector(".plus-sym2");
minus2 = document.querySelector(".minus-sym2");
let d = 1;

plus2.addEventListener("click", function () {
  d++;
  numb2.innerText = d;
  console.log(d);
});

minus2.addEventListener("click", function () {
  if (d > 1) {
    d--;
    numb2.innerText = d;
    console.log(d);
  }
});

function changed16() {
  var img = document.getElementById("crater");
  img.src = "/images/crater.png";
}
function changed17() {
  var img = document.getElementById("crater");
  img.src = "/images/crater1.jpeg";
}
function changed18() {
  var img = document.getElementById("crater");
  img.src = "/images/crater2.png";
}
function changed19() {
  var img = document.getElementById("crater");
  img.src = "/images/crater3.png";
}
function changed20() {
  var img = document.getElementById("crater");
  img.src = "/images/crater.png";
}

function addTotheCart() {
  var productName3 = document.getElementById("productName3").innerText;
  var productImage3 = document.getElementById("crater").src;
  var productPrice3 = parseInt(
    document.getElementById("productPrice3").innerText.replace("₹", "")
  );

  if (!selectedSize) {
    alert("Please select a size.");
    return;
  }

  var cartItem = {
    name: productName3,
    image: productImage3,
    size: selectedSize,
    price: productPrice3,
    quantity: quantity,
    totalPrice: productPrice3 * quantity,
  };

  cart.push(cartItem);
  displayCart();
  updateCartCount();
}
