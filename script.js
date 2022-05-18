$(".yes-button").dblclick(function() {
	$(".Yes-start").fadeIn();
	$(".start").fadeOut();
    $(".h1").text("bad choice");
});

$(".continue-button-yes").click(function() {
    $(".Footstep-choice").fadeIn();
    $(".Yes-start").fadeOut();
});

$(".no-button2").click(function() {
    $(".Footstep-choice-no").fadeIn();
    $(".Footstep-choice").fadeOut();
});

$(".continue-button-walk").click(function() {
   	$(".Footstep-choice-no2").fadeIn();
    $(".Footstep-choice-no").fadeOut();
});

$(".continue-button-scared").click(function() {
   	$(".Footstep-choice-no3").fadeIn(); 
    $(".Footstep-choice-no2").fadeOut();
});

$(".continue-button-bruh").click(function() {
   $(".Good-ending").fadeIn();
    $(".Footstep-choice-no3").fadeOut();
});

$(".yes-button2").click(function() {
    $(".Footstep-choice-yes2").fadeIn();
    $(".Footstep-choice").fadeOut();
});

$(".continue-button-run").click(function() {
   	$(".Worst-ending").fadeIn();
    $(".Footstep-choice-yes2").fadeOut();
});

$(".no-button").dblclick(function() {
	$(".No-start").fadeIn();
	$(".start").fadeOut();
});

$(".continue-button-smart").click(function() {
   	$(".Best-ending").fadeIn();
    $(".No-start").fadeOut();
});

$(".restart").click(function() {
   	$(".start-hide").fadeOut();
    $(".start").fadeIn();
});


