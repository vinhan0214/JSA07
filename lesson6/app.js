let users = []
if(!localStorage.getItem('users')){
localStorage.setItem('users' , JSON.stringify([]))
users =[]
}
else {
    users = JSON.parse(localStorage.getItem('users'))
}
const button = document.querySelector("#btn");
const button2 = document.querySelector("#btn2");
const button3 = document.querySelector("#btn3");
const button4 = document.querySelector("#btn4");
const menu = document.querySelector('.menu')
const product = document.querySelector('.menu-p')
const product2 = document.querySelector('.menu-p-2')
const product3 = document.querySelector('.menu-p-3')
const product4 = document.querySelector('.menu-p-4')
const btnClear = document.querySelector('.btn-clear')
let count = 0;
let counter = 0;
let counter1 = 0;
let counter2 = 0;
console.log(product)

button.addEventListener('click', function(e){
    e.defaultPrevented
    let name= "Biti's Hunter X 2k19"
    users.push(name)
    localStorage.setItem("users",JSON.stringify(users));
    product.classList.add('product')
    btnClear.classList.add('clear')
    ++count
    product.innerText = count;
    if( count > 9){
        alert("Không Thể Mua Nữa Vì Mày Còn Gì Tiền")
        count = 9;
        product.innerText = count
    }
})

button2.addEventListener('click', function(e){
    e.defaultPrevented
    let name= "Kasawwi M15"
    users.push(name)
    localStorage.setItem("users",JSON.stringify(users));
    product2.classList.add('product2')
    btnClear.classList.add('clear')
    ++counter
    product2.innerText = counter;
    if( counter > 9){
        alert("Không Thể Mua Nữa Vì Mày Còn Gì Tiền")
        counter = 9;
        product2.innerText = counter
    }
})

button3.addEventListener('click', function(e){
    e.defaultPrevented
    let name= "PAGINI PA2288"
    users.push(name)
    localStorage.setItem("users",JSON.stringify(users));
    product3.classList.add('product3')
    btnClear.classList.add('clear')
    ++counter1
    product3.innerText = counter1
    if( counter1 > 9){
        alert("Không Thể Mua Nữa Vì Mày Còn Gì Tiền")
        counter1 = 9;
        product3.innerText = counter1
    }
})

button4.addEventListener('click', function(e){
    e.defaultPrevented
    let name= "APRO 366"
    users.push(name)
    localStorage.setItem("users",JSON.stringify(users));
    product4.classList.add('product4')
    btnClear.classList.add('clear')
    ++counter2
    product4.innerText = counter2;
    if( counter2 > 9){
        alert("Không Thể Mua Nữa Vì Mày Còn Gì Tiền")
        counter2 = 9;
        product4.innerText = counter2
    }
})

btnClear.addEventListener('click',function(e){
    e.defaultPrevented
    localStorage.removeItem('users')
    count = ""
    counter = ""
    counter1 = ""
    counter2=""
    product.innerText = count
    product2.innerText = counter
    product3.innerText = counter1
    product4.innerText = counter2
    product.classList.remove('product')
    product2.classList.remove('product2')
    product3.classList.remove('product3')
    product4.classList.remove('product4')
    btnClear.classList.remove('clear')
})