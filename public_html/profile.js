var audio = new Audio('DRIP1.WAV');

$( ".favourite" ).hide();
$( ".heart" ).click(function() { audio.play();
$( ".heart" ).hide();
$( ".favourite" ).show();
});
$( ".favourite" ).click(function() { audio.play();
$( ".favourite" ).hide();
$( ".heart" ).show();
});
