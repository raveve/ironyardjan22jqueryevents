jQuery(document).ready(function() {

// EVENT 1

$("div").on("mouseenter", function(){
  console.log("event 1 working");
  $("h1").fadeIn(1000);
});

// EVENT 2
$("img").eq(0).on("mouseout", function(){
  console.log("event 2 working");
  $("p").slideDown(1000);
});

// EVENT 3

$("img").eq(1).on("dblclick", function(){
  console.log("event 3 working");
  $(this).css("border", "5px solid #9FB4CC")
});

// EVENT 4

$("p").eq(0).on("click", function(){
  console.log("event 4 working");
  $(this).css("color", "#FFF8E3")
});

// EVENT 5

$("p").eq(1).on("mouseup", function(){
  console.log("event 5 working");
  $(this).css("font-weight", "bold");
});

// EVENT 6

$(window).on("resize", function(){
  console.log("event 6 working");
  $("body").append("<div>" + $(window).width() + "</div>");

});

// EVENT 7

//$("ELEMENT/SELECTION").on("EVENT NAME", function(){
//});

// EVENT 8

//$("ELEMENT/SELECTION").on("EVENT NAME", function(){

//});

// EVENT 9

$("p").eq(2).on("mousedown", function(){
  console.log("event 9 working");
  $(this).css("text-decoration", "line-through");
  $(this).on("mouseup", function(){
    $(this).css("text-decoration", "none");
  });
});

// EVENT 10

$("img").eq(5).on("mouseover", function(){
  console.log("change 10 working");
  $(this).fadeOut(3500);
});


});
