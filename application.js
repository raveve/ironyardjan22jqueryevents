jQuery(document).ready(function() {

// EVENT 1 - When mouse enters any div on the page the header text fades in

$("div").on("mouseenter", function(){
  $("h1").fadeIn(1000);
});

// EVENT 2 - When the mouse moves out of the 1st image (top left) body text slides in to their own divs
$("img").eq(0).on("mouseout", function(){
  $("p").slideDown(1000);
});

// EVENT 3 - Double clicking on the second image (top row) places a border around said image

$("img").eq(1).on("dblclick", function(){
  $(this).css("border", "5px solid #9FB4CC")
});

// EVENT 4 - Click on the first section of text (top row) changes the font color for said section

$("p").eq(0).on("click", function(){
  $(this).css("color", "#FFF8E3")
});

// EVENT 5 - Clicking on the second section of text (middle row, first text section), upon mouse up click font weight goes from normal to bold

$("p").eq(1).on("mouseup", function(){
  $(this).css("font-weight", "bold");
});

// EVENT 6 - When the browser window is resized the window width is logged to the console

$(window).on("resize", function(){
  console.log($(window).width());

});

// EVENT 7 - When mouse leaves the third image (first image, middle row) it animates to a width of 50% at a rate of 1000 ms

$("img").eq(2).on("mouseleave", function(){
  $(this).animate({ width: "50%" }, 1000);
});

// EVENT 8 - On mouse moving over footer text / link it animates at a rate of 1000 ms over the width of 100% of the footer to the center where it belongs

$("a").on("mouseover", function(){
  $(this).animate({ width: "100%" }, 1000);
  console.log(event.relatedTarget.nodeName);
});

// EVENT 9 - On mouse being pressed down on the third section of text (bottom row, center) the text has a line-through decoration and upon mouse being moved up the text decoration is removed

$("p").eq(2).on("mousedown", function(){
  $(this).css("text-decoration", "line-through");
  $(this).on("mouseup", function(){
  $(this).css("text-decoration", "none");
  });
});

// EVENT 10 - When the mouse goes over the last image (bottom row, far right) it fades out in 3500 ms to nothing (hidden)

$("img").eq(5).on("mouseover", function(){
  $(this).fadeOut(3500);
});


});
