basket = JSON.parse(localStorage.getItem('data')) || []
let total = document.querySelector('.total')
let contentAll = document.querySelector('.content--all--items--btn')
let content = document.querySelector('.content')
let payCard = document.querySelector('.card--pay')
let items = document.querySelector('.items')

console.log(shopItemsData)


const calculation = () => {
    let cartAmount = document.getElementById('cartAmount');
    cartAmount.innerHTML = basket.map((x) => x.item).reduce((x, y)=> x + y,0)
}

calculation()

let generateCartItems = () => {
    if (basket.length !== 0) {
        return items.innerHTML = basket.map((x) => {
            let {id, item} = x;
            let search = shopItemsData.find((y) => y.id == id) || []
            // console.log(search)
            return `
            <div class="item--card">
                <img src="${search.img}" alt="">
                <div class="name--times">
                    <p class="time--name">${search.name}</p>
                    <div class="buttons">
                        <i onclick="decrement(${id})" id="minus" class="fa-solid fa-minus"></i>
                        <div id=${id} class="quantity"> ${item}</div>
                        <i onclick="increment(${id})" id="plus" class="fa-solid fa-plus"></i>                    
                    </div>
                </div>
                <div class="prise--each">
                    <p class="prise">${item * search.price}</p>
                    <p class="each">${search.price} each</p>
                    </div>
                    <i onclick='removeItem(${id})' class="bi bi-x-lg"></i>
                </div>
                    `
                    // <p class="times">${item}</p>
    }).join('')
    }
    else {

        contentAll.innerHTML = ``;

        total.innerHTML = `
        <div>
        <a href="index.html">
        <button class='back--to' >Back to</button>
        </a>
        <p class="total">Card is empty</p>
        </div>
        `
        payCard.innerHTML = ``;
    }
}
generateCartItems()

const increment = (id) => {
    // check if id in basket to not add anthor id
    let search = basket.find((item) => item.id === id)
    
    if (search === undefined) {
        basket.push({
            id: id,
            item: 1,
        })
    } else search.item += 1;
    
    generateCartItems()
    update(id)
    localStorage.setItem('data', JSON.stringify(basket))
};

const decrement = (id) => {
    // check if id in basket to not add anthor id
    let search = basket.find((item) => item.id === id)
    
    if (search === undefined) return

    else if (search.item == 0) return
    else search.item -= 1;
    
    // console.log(basket)
    update(id)
    basket = basket.filter((x) => x.item != 0 );
    generateCartItems()
    localStorage.setItem('data', JSON.stringify(basket))
};

const update = (id) => {
    let search = basket.find((x) => x.id === id)
    // console.log(search.item)
    document.getElementById(id).innerHTML = search.item
    calculation()
};

let removeItem = (id) => {
    let selectedItem = id
    console.log(selectedItem)
    basket = basket.filter((x) => x.id !== selectedItem)
    generateCartItems()
    localStorage.setItem('data', JSON.stringify(basket))
}

let totalAmount = () => {
    if (basket.length != 0) {
        
    }
}