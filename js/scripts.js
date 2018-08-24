//business logic
function Pizza(orderSize,orderSizePrice,orderToppings,orderToppingsPrice){
this.size=orderSize;
this.sizePrice=parseInt(orderSizePrice);
this.toppings=orderToppings;
this.toppingsPrice=orderToppingsPrice;
}


//user interface
$(document).ready(function() {
  $("#pizzaGate").submit(function(event) {
    event.preventDefault();
    var orderSize = $("input[type=radio][name=size]:checked").val();
    var orderSizePrice =$("input[type=radio][name=size]:checked").attr('sizePrice');
    var orderToppings=[];
    var orderCheese = $("input[type=radio][name=cheese]:checked").val()
    var orderCheesePrice =$("input[type=radio][name=cheese]:checked").attr('toppingsPrice');
    orderToppings.push(orderCheese);
    console.log(orderToppings);

  })
})
