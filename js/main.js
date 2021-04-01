// // window.onscroll = function() {
// //     var curPos = window.pageYOffset;
// //     if (curPos > 0) {
// //       document.getElementsByClassName("menu").style.opacity = 1;
// //     } else {
// //       document.getElementsByClassName("menu").style.opacity = 0;
// //     }
// //   }
// window.addEventListener('scroll', function() {
//     document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
//   });



/* Truncate Card Title */
window.addEventListener("load",function(){
    truncateCardTitle();
});

function truncateCardTitle(){
    var cardList = document.getElementsByClassName("card-text");
    console.log(cardList);
    for(var i = 0; i < cardList.length; i++){
        var text = cardList[i].innerHTML;
        var newText = truncateString(text,45);
        cardList[i].innerHTML = newText;
    }
}

function truncateString(str,num){
    if(str.length > num){
        return str.slice(0,num) + "...";
    } else{
        return str;
    }
}