

/* Start Slider */


var images = document.querySelectorAll('.slider__img');

document.querySelector('.right').onclick = right;
document.querySelector('.left').onclick = left;

var counter = 0;
var li = document.querySelectorAll('.indecator');

function right() {
    images[counter].classList.remove('active')
    li[counter].classList.remove('active-li')
    counter++;

    if (images.length == counter) {
        counter = 0
    }

    images[counter].classList.add('active')
    li[counter].classList.add('active-li')
}

function left() {
    images[counter].classList.remove('active')
    li[counter].classList.remove('active-li')
    counter--;

    if (counter < 0) {
        counter = images.length - 1
    }

    images[counter].classList.add('active')
    li[counter].classList.add('active-li')
}

for (var i = 0; i < li.length; i++) {
    li[i].onclick = function () {

        for (var j = 0; j < li.length; j++) {
            li[j].classList.remove('active-li')
            images[j].classList.remove('active')
        }

        this.classList.add('active-li');
        var dataSlide = this.getAttribute('data-slide');
        images[dataSlide].classList.add('active');
        counter = dataSlide;


    }
}


/* End Slider */




/* Start Block */

let Btn = document.querySelectorAll('.section__content-btn');
let Block = document.querySelectorAll('.section__content-category_block');


for (let i = 0; i < Btn.length; i++) {
    Btn[i].addEventListener('click', function () {


        for (let k = 0; k < Btn.length; k++) {


            Btn[k].classList.remove('active-btn')
            Block[k].classList.remove('active-block')



        }

        Btn[i].classList.add('active-btn')
        Block[i].classList.add('active-block')

    })
}


/* End Block */




/* Start Product obyekt */


const product = {

    poolone: {
        size: '183 * 130 * 45',
        name: 'poolone',
        price: 330000,
        amount: 0,
        img: 'img/Card/737735_3779.jpg',
        get totalSumm() {
            return this.price * this.amount;
        },
    },

    pooltwo: {
        size: '150 * 110 * 35',
        name: 'pooltwo',
        price: 280000,
        amount: 0,
        img: 'img/Card/2.jpg',
        get totalSumm() {
            return this.price * this.amount;
        },
    },

    poolthree: {
        size: '160 * 160 * 60',
        name: 'poolthree',
        price: 450000,
        amount: 0,
        img: 'img/Card/3.jpg',
        get totalSumm() {
            return this.price * this.amount;
        },
    },

    poolfour: {
        size: '120 * 35',
        name: 'poolfour',
        price: 145000,
        amount: 0,
        img: 'img/Card/8003.970.jpg',
        get totalSumm() {
            return this.price * this.amount;
        },
    },

    poolfive: {
        size: '180 * 51',
        name: 'poolfive',
        price: 320000,
        amount: 0,
        img: 'img/Card/11.jpg',
        get totalSumm() {
            return this.price * this.amount;
        },
    },

    poolsix: {
        size: '244 * 61',
        name: 'poolsix',
        price: 470000,
        amount: 0,
        img: 'img/Card/22.jpg',
        get totalSumm() {
            return this.price * this.amount;
        },
    },

    poolseven: {
        size: '305 * 61',
        name: 'poolseven',
        price: 600000,
        amount: 0,
        img: 'img/Card/33.jpg',
        get totalSumm() {
            return this.price * this.amount;
        },
    },

    pooleight: {
        size: '300 * 200 * 75',
        name: 'pooleight',
        price: 1280000,
        amount: 0,
        img: 'img/Card/k1.jpg',
        get totalSumm() {
            return this.price * this.amount;
        },
    },

    poolnine: {
        size: '450 * 220 * 84',
        name: 'poolnine',
        price: 2280000,
        amount: 0,
        img: 'img/Card/k2.jpg',
        get totalSumm() {
            return this.price * this.amount;
        },
    },

    poolten: {
        size: '220 * 150 * 60',
        name: 'poolten',
        price: 970000,
        amount: 0,
        img: 'img/Card/k3.jpg',
        get totalSumm() {
            return this.price * this.amount;
        },
    },

    pooleleven: {
        size: '260 * 160 * 65',
        name: 'pooleleven',
        price: 1100000,
        amount: 0,
        img: 'img/Card/k4.jpg',
        get totalSumm() {
            return this.price * this.amount;
        },
    },
};

/* End Product obyekt */



const

    productBtns = document.querySelectorAll('.category_block-btn'),
    basketBtn = document.querySelector('.header__content-basket_btn'),
    basketIndecator = document.querySelector('.header__content-icon_indecator'),
    basketModal = document.querySelector('.wrapper__top-basket'),
    closeBasketModal = document.querySelector('.basket__top-btnClose'),
    basketCheklist = document.querySelector('.basket__checklist'),
    basketTotalPrice = document.querySelector('.basket__bottom-totalPrice'),
    basketPrint = document.querySelector('.basket__bottom'),
    printChecklist = document.querySelector('.print__body'),
    printTotalSumm = document.querySelector('.print__footer');




    



    productBtns.forEach((btn) => {
        btn.addEventListener('click', function () {
            plusOrMinus(this);
        })
    })



function plusOrMinus(knopka) {

    let parent = knopka.closest('.category_block-card');

    let parentId = parent.getAttribute('id');

    product[parentId].amount++;

    basket();
}


function basket() {
    const productArray = [];
    let totalCount = 0;



    for (const key in product) {
        const po = product[key];

        const productCard = document.querySelector(`#${po.name.toLowerCase()}`);

        const productCardInd = productCard.querySelector('.category_block-count');

        if (po.amount) {
            productArray.push(po);
            basketIndecator.classList.add('active');
            totalCount += po.amount;

            productCardInd.classList.add('active');
            productCardInd.innerHTML = po.amount;
        } else {
            productCardInd.classList.remove('active');
            productCardInd.innerHTML = 0
        }
        basketIndecator.innerHTML = totalCount;
    }

    basketCheklist.innerHTML = ' ';

    for (let i = 0; i < productArray.length; i++) {

        basketCheklist.innerHTML += cardItemBurger(productArray[i])
    }

    basketTotalPrice.innerHTML = totalSummProduct()

}

function cardItemBurger(dataBurger) {

    const { name, size, totalSumm: price, amount, img } = dataBurger;

    return `
    
    <div class="basket__checklist-product">
    <div class="basket__checklist-info">

        <img src="${img}" alt="">

        <div class="basket__cheklist-sub">
            <p class="basket__cheklist-size">${size}</p>
            <p class="basket__cheklist-name">${name}</p>
            <p class="basket__cheklist-price"><span>${price}</span>so'm</p>
        </div>

    </div>

    <div class="basket__checklist-counter" id="${name.toLowerCase()}__card">
        <button class="basket__checklist-symbol" data-symbol="-">-</button>
        <output class="basket__cheklist-output">${amount}</output>
        <button class="basket__checklist-symbol" data-symbol="+">+</button>
    </div>
</div>


</div>
    
    `
}


window.addEventListener('click', function (event) {

    const btn = event.target;

    if (btn.classList.contains('basket__checklist-symbol')) {
        const attr = btn.getAttribute('data-symbol');
        const parent = btn.closest('.basket__checklist-counter')
        if (parent) {
            const idProduct = parent.getAttribute('id').split("__")[0];
            if (attr == '+') {
                product[idProduct].amount++
            } else if (attr == '-') {
                product[idProduct].amount--
            }
            basket()
        }
    }
})


function totalSummProduct() {
    let total = 0;

    for (const key in product) {
        total += product[key].totalSumm
    }

    return total.toLocaleString()
}



basketBtn.addEventListener('click', () => basketModal.classList.add('active'))
closeBasketModal.addEventListener('click', () => basketModal.classList.remove('active'))



/* End Product obyekt */




