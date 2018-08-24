//business logic
function Pizza(orderSize,orderSizePrice,orderToppings,toppingsPrice){
  this.size=orderSize;
  this.sizePrice=parseInt(orderSizePrice);
  this.toppings=orderToppings;
  this.toppingsPrice=toppingsPrice;
}
//user interface
$(document).ready(function() {
  $("#pizzaGate").submit(function(event) {
    event.preventDefault();
    var orderSize = $("input[type=radio][name=size]:checked").val();
    var orderSizePrice =$("input[type=radio][name=size]:checked").attr('sizePrice');
    var toppingsPrice=[];
    var orderToppings=[];
    var orderCheese = $("input[type=radio][name=cheese]:checked").val()
    var orderCheesePrice =$("input[type=radio][name=cheese]:checked").attr('toppingsPrice');
    orderToppings = $("#pizzaGate  input:checkbox:checked").map(function(){
      return $(this).val();
      }).get();
    toppingsPrice = $("#pizzaGate  input:checkbox:checked").map(function(){
      return parseInt($(this).attr('toppingsPrice'));
      }).get();
    orderToppings.push(orderCheese);
    var myPizza = new Pizza(orderSize,orderSizePrice,orderToppings,toppingsPrice);
    console.log(myPizza);
  })
})
