alert("hello user")
var button = document.getElementById("addbtn")
var historydiv = document.getElementById("historydiv")
var input = document.getElementById("todo")

button.addEventListener("click",function () {
    if (input.value.trim() === "") {
        return alert("please add todo")
    }
var now = new Date()
var time = now.toLocaleTimeString()
// var li = `<li>${input.value.trim()} ${time} <button  id="delete" onclick="console.log("this.parentnode.remove())">delete</button></li>`


var li = `<li>${todo.value.trim()} ${time} <button  id="delete"  onclick = "console.log(this.parentNode.remove())">Del </button>  </li>`

historydiv.innerHTML += li

// historydiv.innerHTML += li 

todo.value = ''

})