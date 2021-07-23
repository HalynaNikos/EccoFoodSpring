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
let showCartBtn = document.getElementById('show-cart');
showCartBtn.addEventListener('click', showCart);

function showCart(event) {
    let rows = '';
    for (let i = 0; i < basket.length; i++) {
        rows += `<tr>` +
                    `<td>${ basket[i].name }</td>` +
                    `<td>$${ basket[i].price }</td>` +
                    `<td><input id="${basket[i].id}" class="basket-amount" type="number" min="0" value="${ basket[i].amount }" /></td>` +
                    `<td>$<span id="priceByProduct-${basket[i].id}">${(basket[i].price * basket[i].amount).toFixed(2)}</span></td>` +
                `</tr>`;

    }

    let basketTbl = document.getElementById('basket');
    basketTbl.innerHTML = rows;

    let basketAmountInpt = document.getElementsByClassName('basket-amount');
    for (let i = 0; i < basketAmountInpt.length; i++) {
        basketAmountInpt[i].addEventListener('input', priceByProduct);

    }

    totalPrice();
}

function priceByProduct(event) {
    let newAmount = event.target.value;
    let productId = event.target.id;

    let product = basket.find(item => item.id === Number(productId));
    if (product)
    {
        product.amount = newAmount;

        let productSpan = document.getElementById(`priceByProduct-${ productId }`);
        productSpan.innerHTML = (product.amount * product.price).toFixed(2);
    }

    totalPrice();
}

function totalPrice()
{
    let res = 0;

    for (let i = 0; i < basket.length; i++) {
        res += basket[i].price * basket[i].amount;
    }

    let totalCart = document.getElementById('total-cart');
    totalCart.innerText = res.toFixed(2);
}