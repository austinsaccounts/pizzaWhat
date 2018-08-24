//business logic
function Pizza(orderSize,orderSizePrice,orderToppings){
this.size=size;
this.sizePrice=parseInt(sizePrice);
this.toppings=toppings;
}


//user interface
$(document).ready(function() {
  $("#pizzaGate").submit(function(event) {
    event.preventDefault();
    var size = $("input[type=radio][name=size]:checked").val();
    console.log(size);
  })
})
