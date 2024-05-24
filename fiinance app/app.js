

// var inputdate = document.getElementById("date")
// var inputamount = document.getElementById("amount")
// var btn1 = document.getElementById("addincome")
// var btn2 = document.getElementById("addexpanse")
// var inputdescription = document.getElementById("description")
// var datatable = document.getElementById("table")
// var underdata = document.getElementsByClassName("thead")
// var submit = document.getElementById("submit")

// submit.addEventListener("click",function (){
//    console.log(table);
//    var datatable = ` <th>


//   console.log(underdata);
// })
var inputdate = document.getElementById("date");
var inputamount = document.getElementById("amount");
var btn1 = document.getElementById("addincome");
var btn2 = document.getElementById("addexpanse");
var inputdescription = document.getElementById("description");
var datatable = document.getElementById("table");
var underdata = document.getElementsByClassName("thead");
var submit = document.getElementById("submit");

submit.addEventListener("click", function () {
   // Create a new row


//    `<tr><td>${btn1.value}<td>
// //    <td>${btn2.value}<td>
// //    <td>${inputdescription.value}<td>
// //    <td>${btn1.value - btn2.value}<td>
// //    <tr> `
// //    datatable.innerhtml += underdata.innerhtml

   var newRow = document.createElement("tr");

   // Create table data cells
   var incomeCell = document.createElement("td");
   incomeCell.innerHTML = btn1.value;

   var expenseCell = document.createElement("td");
   expenseCell.innerHTML = btn2.value;

   var descriptionCell = document.createElement("td");
   descriptionCell.innerHTML = inputdescription.value;

   var differenceCell = document.createElement("td");
   differenceCell.innerHTML = btn1.value - btn2.value;

   // Append cells to the new row
   newRow.appendChild(incomeCell);
   newRow.appendChild(expenseCell);
   newRow.appendChild(descriptionCell);
   newRow.appendChild(differenceCell);

   // Append the new row to the table
   datatable.appendChild(newRow);
});
// submit.addEventListener("click", function () {
//     console.log(datatable); // Corrected the variable name to "datatable"
//     var newRow = document.createElement("tr"); // Create a new table row
 
//     // Create table data cells for each input
//     var incomeCell = document.createElement("td");
//     incomeCell.textContent = btn1.value;
 
//     var expenseCell = document.createElement("td");
//     expenseCell.textContent = btn2.value;
 
//     var descriptionCell = document.createElement("td");
//     descriptionCell.textContent = inputdescription.value;
 
//     var differenceCell = document.createElement("td");
//     differenceCell.textContent = btn1.value - btn2.value;
 
//     // Append cells to the new row
//     newRow.appendChild(incomeCell);
//     newRow.appendChild(expenseCell);
//     newRow.appendChild(descriptionCell);
//     newRow.appendChild(differenceCell);
 
//     // Append the new row to the table
//     datatable.appendChild(newRow);
//  });
 