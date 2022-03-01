function basketTotal(productArray) {
    let totalPrice = 0;

    for (let i = 0; i < productArray.length; i++) {
        totalPrice += productArray[i].price;
    }

    return totalPrice;
}

const item1 = {
    name: 'Bag of chips',
    price: 2.50
}

const item2 = {
    name: 'Bag of crisps',
    price: 1.50
}

const item3 = {
    name: 'Bag of sweets',
    price: 0.75
}

basketTotal([item1, item2, item3]);

console.log(basketTotal([item1, item2, item3]));