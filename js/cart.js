
const product = [
    {
        id: 0,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrl2Fy5zFzL0UGQSzQTtohtifRKCRKpdBZ3n9pjij3K1an6CJ20KAeNsWbiBHio26xxfM&usqp=CAU',
        title: 'Shoes1',
        price: 120,
    },
    {
        id: 1,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e67fb2af-118a-4dd5-8283-2a630f50033e/air-max-dawn-womens-shoes-224mWf.png',
        title: 'Shoes2',
        price: 70,
    },
    {
        id: 2,
        image: 'https://cdna.lystit.com/520/650/n/photos/kickscrew/266d1c4f/nike-grey-Air-Max-Dawn-orange-Wolf-Grey.jpeg',
        title: 'Shoes3',
        price: 100,
    },
    {
        id: 2,
        image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fdded470-0ac5-4bd7-b41b-1bb63e161438/custom-nike-air-force-1-mid-by-you-shoes.png',
        title: 'Shoes4',
        price: 110,
    }
];
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src="${image}"></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div> 
        </div>`
    )
}).join('')

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();

}
function getCart() {
    return existingCart;
}

function delElement(a) {
    cart.splice(a, 1);
    displaycart();

}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    } else {
        document.getElementById('cartItem').innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return (
                `<div class="cart-item">
                <div class="row-img">
                    <img class="rowimg" src=${image}>
                </div>
                <p style="font-size: 12px;">${title}</p>
                <h2 style="font-size: 15px;">$ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }
}

// LocalStorage


// cart1.innerHTML = localStorage.getItem('body')

// const cart1 = document.querySelector('body')
// localStorage.setItem('body')

// function increaseClickCount() {
//     const countSpan = document.getElementById('count');

//     // let count = parseInt(countSpan.innerHTML);
//     // ++count;
//     // countSpan.innerHTML = count;

//     // Сохраняем счетчик в localStorage.
//     localStorage.setItem('clickCount', count);
// }

const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
    existingCart.push(product);
    localStorage.setItem('cart', JSON.stringify(existingCart));
}

function getCart() {
    return existingCart;
}

function removeFromCart(productId) {
    const updatedCart = existingCart.foreach(product => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
}
addToCart(product)

const cartItems = getCart();




