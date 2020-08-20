var array = [1, 2, 3, 4, 5, 6, 7, 8, 0];
console.log(array.indexOf(0));
console.log(array.indexOf(8));
//Create JavaScript function to initialize the game and connect to html

//Create a function to generate number 1-8 randomly, but for now, will use hard coded value.

//Write a function to record user input: Hints: JavaScript Key Code; Event Listener; if(Botton.Click=40 etc.)
//Add eventlistener
document.addEventListener("click", function (event) {
  //var temp=console.log(event.target.innerHTML);
  console.log(event.target.innerHTML);
  var result = clickcell(event.target.innerHTML);
  if (result == true) {
    swapcell(event.target.innerHTML, 0);
    //console.log(array.indexOf(0));
    //console.log(array[7]);
    //console.log(array[8]);
    //console.log(array.length);
    //console.log(array.indexOf(8));


    checkforwinning();
  }
});
//Imagine that initially tile9 is always empty
//Because one tile can only change its position with empty tile next to it!!!
//return true if the cell is validaresultte to be swaped
function clickcell(number) {
  const index = array.indexOf(0);
  switch (index) {
    //case 0 means at array position 0
    case 0:
      if (number == array[1] || number == array[4]) {
        return true;
      }
      return false;
    case 1:
      if (number == array[0] || number == array[2] || number == array[4]) {
        return true;
      }
      return false;
    case 2:
      if (number == array[1] || number == array[5]) {
        return true;
      }
      return false;
    case 3:
      if (number == array[0] || number == array[4] || number == array[6]) {
        return true;
      }
      return false;
    case 4:
      if (
        number == array[1] ||
        number == array[3] ||
        number == array[5] ||
        number == array[7]
      ) {
        return true;
      }
      return false;
    case 5:
      if (number == array[2] || number == array[4] || number == array[8]) {
        return true;
      }
      return false;
    case 6:
      if (number == array[3] || number == array[7]) {
        return true;
      }
      return false;
    case 7:
      if (number == array[4] || number == array[6] || number == array[8]) {
        return true;
      }
      return false;
    case 8:
      if (number == array[5] || number == array[7]) {
        return true;
      }
      return false;
  }
}

//console.log(checkforwinning());
//console.log(checkforwinning());
//function clickcell(row, colomn) {
// var cellclicked=document.getElementById(row+colomn);
//var tile=cellclicked.className;
//if(tile!=tile9)
//if empty cell is clicked, don't do anything.
//{
//if the
//}
//}
//Write a function to locate the empty cell

//Write a function to swap empty cell
function swapcell(celltobeswaped, cellvalue0) {
  //change cell value
  var tobeswapedpos = array.indexOf(celltobeswaped);
  console.log(celltobeswaped);
  console.log(array.indexOf(8));
  console.log(tobeswapedpos);
  array[array.indexOf(cellvalue0)] = celltobeswaped;
  array[7] = 0;
  //I also need to change the corresponding selectors in HTML
  var old = document.getElementById(celltobeswaped);
  old.innerHTML = "[]";
  var newnum = document.querySelector("#blank");
  newnum.innerHTML = celltobeswaped;
  old.id = "9";
  newnum.id = celltobeswaped.toString();
  checkforwinning();
}
//Write a function to check winning condition
function checkforwinning() {
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] != i + 1) {
      return false;
    }
    return true;
  }
}
