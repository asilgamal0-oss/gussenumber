var gussnumber = document.getElementById('inputvalu')
var randomnumbervalue=Math.floor(Math.random() *100)
 var guessnumbervalue;
var resultTxt = document.getElementById('ruselttxt')
var scorenumber = document.getElementById('score')
var gussedItemList = document .getElementById('gussedItemList')
var score =0;
function nmberguss(){
 guessnumbervalue = gussnumber.value;

// condition

if( guessnumbervalue <= 0|| guessnumbervalue > 100|| guessnumbervalue == ''){
Swal.fire({
  title:' There Is No Number Gussed',
  text: "You Must Guess Number  From 1 to 100",
  icon: "error"
});
}
else  {
 var ruselt= comparingnumber();
 score +=1
 scorenumber.innerHTML=score;
 gussedItem(ruselt )
gussnumber.value= ''
}
}
function comparingnumber() {
if ( guessnumbervalue > randomnumbervalue ){
 resultTxt.innerHTML= 'your gussed is too high' 
return 'wrong'
}
else if ( guessnumbervalue < randomnumbervalue){
resultTxt .innerHTML= 'yur number is to low'
return 'wrong'
}
else if ( guessnumbervalue==randomnumbervalue){
 resultTxt.innerHTML='congratulation you win'
 setTimeout(function () {
        Swal.fire({
          title: "Try Again!",
          icon: "success",
          confirmButtonText: "Play again 🎮",
          allowOutsideClick: false,
        }).then( function(){
          location.reload();
        } );
      }, 3000);
 return 'correct'
}
}
function gussedItem(ruselt){
var item = document.createElement('li')
item.innerHTML=gussnumber.value
if (ruselt == 'wrong'){
  item.style.color = 'red'
}
else if(ruselt == 'correct'){
  item.style.color = 'green'
}
gussedItemList.appendChild(item)

}







