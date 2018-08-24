//business logic
function Pizza(orderSize,orderSizePrice,orderToppings,toppingsPrice){
  this.size=orderSize;
  this.sizePrice=parseInt(orderSizePrice);
  this.toppings=orderToppings;
  this.toppingsPrice=toppingsPrice;
}
Pizza.prototype.assembler = function () {
  var assembledPizza = "a " +this.size+ " " +this.toppings.join(" ")+ " pizza";
  return assembledPizza;
};

//user interface
$(document).ready(function() {
  $("#pizzaGate").submit(function(event) {
    event.preventDefault();
    var orderSize = $("input[type=radio][name=size]:checked").val();
    var orderSizePrice =$("input[type=radio][name=size]:checked").attr('sizePrice');
    var orderToppings=[];
    var orderCheese = $("input[type=radio][name=cheese]:checked").val()
    var orderCheesePrice =$("input[type=radio][name=cheese]:checked").attr('toppingsPrice');
    orderToppings = $("#pizzaGate  input:checkbox:checked").map(function(){
      return $(this).val();
      }).get();
    var toppingsPrice = $("#pizzaGate  input:checkbox:checked").map(function(){
      return parseInt($(this).attr('toppingsPrice'));
      }).get();
    orderToppings.unshift(orderCheese);
    toppingsPrice.unshift(parseInt(orderCheesePrice));
    var myPizza = new Pizza(orderSize,orderSizePrice,orderToppings,toppingsPrice);
    $('#output').append('<p>'+myPizza.assembler()+'</p>');
  })
})
