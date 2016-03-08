var myRandom = Math.random();
//console.log(myRandom);//any number from 0 to 1 (non inclusive)
//console.log(myRandom*15);//any number between 0 and 15
//console.log(Math.floor(myRandom*15));//integer part of the number

var colB =[];//column B
var colI =[];//column I
var colN =[];//column N
var colG =[];//column G
var colO =[];//column O

function createBingo(columnCard,colNumber){
var myRandom;
for (var i=0; i<5; i++){

 do {
 myRandom = (Math.floor(Math.random()*15+1))+colNumber; }
 while (dupNumber(columnCard, myRandom));

 columnCard[i]=myRandom;
}
console.log(columnCard);
}


function dupNumber(column, number){

 var dup = false;
 var i=0;
 do {
 if (column[i]===number)
 dup = true;
 else
 i++;
 } while (!dup && i < column.length);
 return dup;
}

function addBingoCells(cellValue, divClass, col){
  //1. Create the div for the cell
  var newCell = document.createElement('div');
  //2, Add the CSS style to the cell (either a heading ot a number)
  newCell.classList.add(divClass);
  //3. Create a node for the cell value
  var newText = document.createTextNode(cellValue);
  //4. Attach the text node to the cell
  newCell.appendChild(newText);
  //5. Find on the HTML code the position where we want to add the new cell. The parameter col tells us which column we want to add the new cell to.
  var positionHTML = document.getElementsByClassName('col')[col];
  //6. Append the new cell to the position oon HTML
  positionHTML.appendChild(newCell);
}
//7. Gernerate the arrays with the bingo numbers
createBingo(colB,0);
createBingo(colI,15);
createBingo(colN,30);
createBingo(colG,45);
createBingo(colO,60);

//8. Create the interface
addBingoCells('B','title',0);
for(i=0;i<5;i++){
  addBingoCells(colB[i],'bingoCells',0);
}
addBingoCells('I','title',1);
for(i=0;i<5;i++){
  addBingoCells(colI[i],'bingoCells',1);
}
addBingoCells('N','title',2);
for(i=0;i<5;i++){
  addBingoCells(colN[i],'bingoCells',2);
}
addBingoCells('G','title',3);
for(i=0;i<5;i++){
  addBingoCells(colG[i],'bingoCells',3);
}
addBingoCells('O','title',4);
for(i=0;i<5;i++){
  addBingoCells(colO[i],'bingoCells',4);
}
