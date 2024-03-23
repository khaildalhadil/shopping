let basket = JSON.parse(localStorage.getItem('data')) || []

console.log(basket)

const calculation = () => {
    let cartAmount = document.getElementById('cartAmount');
    cartAmount.innerHTML = basket.map((x) => x.item).reduce((x, y)=> x + y,0)
}

calculation()