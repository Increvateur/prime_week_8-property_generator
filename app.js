$(document).ready(function(){
  $(".generator").on("click", createProperties);
  $(".container").on("click", ".remove", makeMagic);
});


function appendDom(propertyId, area, priceSqFt){
  $(".container").append("<ul class='property'></ul>");
    // $(".container").append("<div class='property'></div>");
    var $el = $(".container").children().last();

    $el.append("<li class='property-id'>Property ID: " + propertyId + "</li>");
    $el.append("<li class='area'> " + area + " sq ft.</li>");
    $el.append("<li class='price-sqft'>$" + priceSqFt + " per sq ft</li>");
    $el.append("<button class='remove'>Remove</button>");
    $el.hide().fadeToggle();
}

function createProperties(){
  var propertyId = randomNumber(1, 10000);
  var area = randomNumber(1500, 10000);
  var priceSqFt = randomNumber(1, 30);
  appendDom(propertyId, area, priceSqFt);
}

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}

function makeMagic(){
  $(this).parent().delay(500).slideUp(function(){
    $(this).remove();
  });
}
