// Bài 1============================================
let data = [{ten:"Phước", tuoi: 28},{ten:"Thành"}]

localStorage.setItem("data", data)
localStorage.setItem("oldName", data[0].ten)
localStorage.setItem("newName", data[0].ten = "Hà" )
localStorage.removeItem("oldName")
localStorage.removeItem("data")

console.log(data)



// Bài 2=================================================
const text1 = document.getElementById("text1")
const text2 = document.getElementById("text2")
const text3 = document.getElementById("text3")
const text4 = document.getElementById("text4")
const text5 = document.getElementById("text5")

console.log(text1)
setTimeout(function(){
    text1.innerText = "教えて 教えてよ"
}, 2000)

console.log(text2)
setTimeout(function(){
    text2.innerText = "その仕組みを"
}, 3000)

console.log(text3)
setTimeout(function(){
    text3.innerText = "僕の中に誰がいるの？"
}, 4000)

console.log(text4)
setTimeout(function(){
    text4.innerText = "壊れた 壊れたよ"
}, 5000)

console.log(text5)
setTimeout(function(){
    text5.innerText = "この世界で"
}, 6000)