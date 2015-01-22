jQuery(document).ready(function() {

// EVENT 1

$("div").on("mouseenter", function(){
  console.log("change 1 working");
  $("h1").fadeIn(1000);
});

// EVENT 2
$("img").eq(0).on("mouseout", function(){
  console.log("change 2 working");
  $("p").slideDown(1000);
});

// EVENT 3

$("img").eq(1).on("dblclick", function(){
  console.log("change 3 working");
  $(this).css("border", "5px solid #9FB4CC")
});

// EVENT 4

$("p").on("click", function(){
  console.log("change 4 working");
  $(this).css("color", "#FFF8E3")
});

// EVENT 5

//$("ELEMENT/SELECTION").on("EVENT NAME", function(){

//});

// EVENT 6

//$("ELEMENT/SELECTION").on("EVENT NAME", function(){

//});

// EVENT 7

//$("ELEMENT/SELECTION").on("EVENT NAME", function(){

//});

// EVENT 8

//$("ELEMENT/SELECTION").on("EVENT NAME", function(){

//});

// EVENT 9

//$("ELEMENT/SELECTION").on("EVENT NAME", function(){

//});

// EVENT 10

$("img").eq(5).on("mouseover", function(){
  console.log("change 10 working");
  $(this).fadeOut(3500);
});


});
