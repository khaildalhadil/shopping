let shop = document.getElementById('shop')

let basket = JSON.parse(localStorage.getItem('data')) || []
console.log(basket)

let generateShop = () => {
    return shop.innerHTML = shopItemsData.map((x) => {
        let {id, name, price, desc, img, tyeof, star, homManyPeopel} = x;
        let search = basket.find((x) => x.id == id ) || []
        return `
        <div class="item">
        <img src="${img}" alt="">
        <div class="text-item">
            <ul class="stars">
                <li> <i class=" color-star fa-solid fa-star"></i></li>
                <li> <i class=" color-star fa-solid fa-star"></i></li>
                <li> <i class=" color-star fa-solid fa-star"></i></li>
                <li> <i class=" color-star fa-solid fa-star"></i></li>
                <li> <i class=" color-star fa-solid fa-star-half"></i></li>
                <p class="float-right">people (${homManyPeopel})</p>
            </ul>
            <h3 class="name-project">${name}</h3>
            <p class="info-project">${desc}</p>
            <div class="price-quantity">
                <h3>${price}</h3>
                <div class="buttons">
                    <i onclick="decrement(${id})" id="minus" class="fa-solid fa-minus"></i>
                    <div id=${id} class="quantity">
                    ${search.item === undefined ? 0 : search.item}</div>
                    <i onclick="increment(${id})" id="plus" class="fa-solid fa-plus"></i>                    
                </div>
            </div>
        </div>
    </div>`
    }).join('');
}
generateShop()

const increment = (id) => {
    // check if id in basket to not add anthor id
    let search = basket.find((item) => item.id === id)
    
    if (search === undefined) {
        basket.push({
            id: id,
            item: 1,
        })
    } else search.item += 1;

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

    localStorage.setItem('data', JSON.stringify(basket))
};

const update = (id) => {
    let search = basket.find((x) => x.id === id)
    // console.log(search.item)
    document.getElementById(id).innerHTML = search.item
    calculation()
};

const calculation = () => {
    let cartAmount = document.getElementById('cartAmount');
    cartAmount.innerHTML = basket.map((x) => x.item).reduce((x, y)=> x + y,0)
}

calculation()