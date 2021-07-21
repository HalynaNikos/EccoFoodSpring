let basket = [];

// ----------------------- add to cart --------------------------------
let addToCartBtns = document.getElementsByClassName('js-add-to-cart');

for (let i = 0; i < addToCartBtns.length; i++) {
    addToCartBtns[i].addEventListener('click', addToCart);
}

function addToCart(event)
{
    let count = document.getElementById('count'); // 0
    ++count.innerText;

    let id = event.target.parentNode.id;
    let name = event.target.parentNode.getElementsByTagName('h3')[0].innerText;
    let price = event.target.parentNode.getElementsByTagName('p')[0].innerText;
    price = price.split('$')[1];

    let existProduct = basket.find(item => item.id === Number(id));
    if (existProduct)
    {
        ++existProduct.amount;
    } else
    {
        let product = {
            id: Number(id),
            name: name,
            price: price,
            amount: 1
        };
        basket.push(product);
    }
}

// ----------------------- clear cart --------------------------------
let clearCartBtn = document.getElementById('clear-cart');

clearCartBtn.addEventListener('click', clearCart);

function clearCart(event)
{
    let count = document.getElementById('count'); // -> 0
    count.innerText = 0;

    basket = [];
}

// ----------------------- show cart --------------------------------