var italic = document.getElementById("italic")
var bold = document.getElementById("bold")
var heading =document.getElementById("heading")
var select = document.getElementById("select")
var para = document.getElementById("para")
var under = document.getElementById("underline")
var sub = document.getElementById("subheading")
italic.addEventListener("click",function () {
      para.style.fontStyle="italic"
    para.style.border="1px solid red"
    
})
bold.addEventListener("click",function () {
    para.style.border ="1px solid yellow"
    para.style.fontWeight ="bold"
})
    under.addEventListener("click", function () {
        para.style.textDecoration ="underline"
    })
    heading.addEventListener('click',function () {
        // console.log('heading',heading);
                para.style.fontSize="35px"
            })
            sub.addEventListener("click", function () {
                para.style.fontSize = "20px"
            })


//     select.addEventListener("change",function () {
//         var selectedValue = select.value
//         console.log(selectedValue);
//         var options = select.getElementsByTagName("option")
//         for (let i = 0; i < options.length; i++) {
//             options[i].removeAttribute("selected")
//         }
// // applying styling
//  var selectedoption = select.options[select.selected.index]
//  selectedoption.setartibuted("selected", "selected")
//     })

    // function changeFunc() {
    //     var selectBox = document.getElementById("select");
    //     var selectedValue = selectBox.options[selectBox.selectedIndex].value;

      


