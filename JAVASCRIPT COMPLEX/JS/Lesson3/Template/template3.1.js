let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

document.write(`<div class="wrapper">`)
for (const product of products) {
    document.write(`<div class="product-card">`);
    document.write(`<h3 class="product-title">${product.title}. Price ${product.price} UAH`);
    document.write(`<img class="img" src="${product.image}" alt=""/>`)
    document.write(`</div>`)
}

document.write(`</div>`)

let wrapper = document.getElementsByClassName('wrapper')[0]
wrapper.style.display = 'flex'

let productCards = document.getElementsByClassName("product-card");
for (const productCard of productCards) {
    productCard.style.cssText = ('border:3px solid blue; border-radius: 5px; padding: 5px; margin:5px;' +
        ' text-align:center');
    border = '3px solid blue';
    productCard.firstChild.firstElementChild.style.cssText = (`width: 250px; height: 300px; margin-top: 20px`)
}
