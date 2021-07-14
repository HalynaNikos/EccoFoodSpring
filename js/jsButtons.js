let goBackButton = document.getElementById('jsGoBack');
if (goBackButton)
{
    goBackButton.addEventListener('click', goBack);
}

function goBack(event)
{
    window.history.back();
}

// ------- go to product ------------
let productsImg = document.getElementsByClassName('jsProductImg');
for (let i = 0; i < productsImg.length; i++) {
    productsImg[i].addEventListener('click', productDetails);
}

// productsImg.array.forEach(element => {
// });

// for (const iterator of object) {
// }

function productDetails(event)
{
    let product = event.target;
    window.location = 'product.html?productName=' + product.alt;
}