var removeCartItemButtons = document.getElementsByClassName('cart-remove');
console.log(removeCartItemButtons);
for (var i = 0; i < removeCartItemButtons.length; i++) {
   var button = removeCartItemButtons[i]
   button.addEventListener('click', function(event){
      var buttonClicked = event.target
      buttonClicked.parentElement.parentElement.remove()
   })
}