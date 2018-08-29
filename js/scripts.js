// * * * * * * * * * started editing//
//business logic
function getSum(total, num) {
    return total + num;
}
function Pizza(orderSize,orderSizePrice,orderToppings,toppingsPrice){
  this.size=orderSize;
  this.sizePrice=parseInt(orderSizePrice);
  this.toppings=orderToppings;
  this.toppingsPrice=toppingsPrice;
}
Pizza.prototype.assembler = function () {
  var assembledPizza = "a " + this.size + " " + this.toppings.join(", ") + " pizza";
  return assembledPizza;
}
Pizza.prototype.charge = function () {
  var totalCharges = this.toppingsPrice.reduce(getSum);
  totalCharges += this.sizePrice;
  console.log(totalCharges);
  return totalCharges;
}
//user interface
$(document).ready(function() {
  $("input[type=radio][name=size]").click(function(){
    $(".base").removeClass("hidden");
  });
  $("input[type=checkbox][name=toppings]").click(function(){
    var pizzapic = $(this).val();
     $('.'+pizzapic).toggleClass("hidden");
  });
  $("input[type=radio][name=size]").click(function(){
    $(".base").removeClass("hidden");
  });
  $("#pizzaGate").submit(function(event) {
    event.preventDefault();
    var orderSize = $("input[type=radio][name=size]:checked").val();
    var orderSizePrice =$("input[type=radio][name=size]:checked").attr('sizePrice');
    var orderToppings = [];
    var orderCheese = $("input[type=radio][name=cheese]:checked").val()
    var orderCheesePrice =  $("input[type=radio][name=cheese]:checked").attr('toppingsPrice');
    orderToppings = $("#pizzaGate  input:checkbox:checked").map(function(){
      return $(this).val();
    }).get();
    var toppingsPrice = $("#pizzaGate  input:checkbox:checked").map(function(){
      return parseInt($(this).attr('toppingsPrice'));
      }).get();
    orderToppings.unshift(orderCheese);
    toppingsPrice.unshift(parseInt(orderCheesePrice));
    var myPizza = new Pizza(orderSize,orderSizePrice,orderToppings,toppingsPrice);
    var custPizza = myPizza.assembler();
    var custPrice = myPizza.charge();
    $('#pizzaGate').toggle();
    $('#output').append('<p> You ordered  ' + custPizza + '</p> <p> Your total cost is $' + custPrice + " and don't forget to tip your driver</p>");
  });
});
