//setting variables to connect with my index.html
//game board
var col=3;
var row=3;
//Game Board will be represented as array of objects. like: [{0,0}=1; {0,1}=2;{0,2}=3.....]
let board=[];

//Set a variable to keep track of movements
var movecounts=0;

//Create JavaScript function to initialize the game and connect to html
function init()
{
    board=[ , , ,
            , , ,
            , , ]
}

function render(){
    board.forEach(function(mark,index){
        console.log(mark,index);
    })
}
init();


//Create a function to generate number 1-8 randomly, but for now, will use hard coded value.

//Write a function to record user input: Hints: JavaScript Key Code; Event Listener; if(Botton.Click=40 etc.)

//Write a function to locate the empty cell

//Write a function to swap empty cell


//Write a function to check winning condition
function checkforwinning()
{
    for(var i=0;i<board.length-1;i++)
    {
        if(board[i]!=i+1)
        {
            return false;
        }
        return true;
    }
}