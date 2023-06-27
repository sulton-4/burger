const products = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        kcall: 400,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        },
    },
    freshBurger: {
        name: 'GAMBURGER FRESH',
        price: 20500,
        kcall: 600,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        },
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 900,
        amount: 0,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        },
    },
}

const btnPlusOrMinus = document.querySelectorAll('.main__product-btn '),
    addCart = document.querySelector('.addCart'),
    receipt__windowOut = document.querySelector('.receipt__window-out'),
    receipt__window = document.querySelector('.receipt__window'),
    receipt = document.querySelector('.receipt'),
    receipt__windowBtn = document.querySelector('.receipt__window-btn');

btnPlusOrMinus.forEach((el) => {
    el.addEventListener('click', function () {
        plusOrMinus(this)
    })
})
function plusOrMinus(btn) {
    const parent = btn.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        outPut = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price span'),
        kcall = parent.querySelector('.main__product-kcall span'),
        elementData = btn.getAttribute('data-symbol')

    if (elementData == '+' && products[parentId].amount < 10) {
        products[parentId].amount++
    } else if (elementData == '-' && products[parentId].amount > 0) {
        products[parentId].amount--
    }
    outPut.innerHTML = products[parentId].amount
    price.innerHTML = products[parentId].Summ
    kcall.innerHTML = products[parentId].Kcall
}




const timer = document.querySelector('.header__timer-extra')

function time() {
    if (timer.innerHTML <= 69) {
        timer.innerHTML++;
        setTimeout(() => {
            time()
        }, 10);
    } else if (timer.innerHTML <= 99) {
        timer.innerHTML++;
        setTimeout(() => {
            time()
        }, 70)
    }
}
time()

const Prod = document.querySelectorAll('.main__product-info')

Prod.forEach(ele => {
    ele.addEventListener('dblclick', function () {
        Product(this)
    });
});


function Product(Info) {
    const parents = Info.closest('.main__product'),
        img = parents.querySelector('.main__product-info img'),
        imgSrc = img.getAttribute('src'),
        view = document.querySelector('.view')
    viewImg = view.querySelector('.view img')
    view.classList.add('active')
    viewImg = setAttribute('src', imgSrc)
}

let view = document.querySelector(".view")
viewBtn = view.querySelector(".view__close");
viewBtn.onclick = function () {
    view.classList.remove('active')
}

let arrauProduct = [],
    totalName = '',
    totalPrice = 0,
    totalKcall = 0;
addCart.addEventListener('click', function () {
    arrayProduct = []
    for (const key in products) {
        const po = products[key]
        if (po.amount > 0){
            arrayProduct.push(po)
        }
    }
    arrayProduct.forEach((el, i) => {
        totalPrice += el.Summ
        totalKcall += el.Kcall
        totalName += `\n ${el.name} \n`
    })
    receipt__windowOut.innerHTML = `Sizni buyurtmangiz: \n${totalName} \nKaloriya: ${totalKcall} \nUmmumiy summa: ${totalPrice} sum`
    receipt.style.display = 'flex'
  setTimeout(() => {
    receipt.style.opacity = '1'
    receipt__window.style.top = '15%'
  }, 10);
  document.body.style.overflow = 'hidden'
})

receipt__windowBtn.addEventListener('click', function (e) {
    e.preventDefault()
    window.location.reload()
})
    