//changes colour of background on clik
$("#colour").click(function() {
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
  $("body").css("background", randomRGBA);

});

//displays image
var images = new Array ()
	images[0] = new Image()
  images[0].src = "http://i44.photobucket.com/albums/f7/hannahlspencer/pO9X7r1_zpskjjwkaey.png"
	images[1]= new Image()
  images[1].src = "http://i44.photobucket.com/albums/f7/hannahlspencer/AMV7nQR_zpsq1r7vfvz.png"
	images[2] = new Image()
  images[2].src = "http://i44.photobucket.com/albums/f7/hannahlspencer/Q9dyHyb_zpspjufr8nd.png"
  images[3] = new Image()
  images[3].src = "http://i44.photobucket.com/albums/f7/hannahlspencer/KbRKEMs_zps2rtskzmv.png"
  images[4] = new Image()
  images[4].src = "http://i44.photobucket.com/albums/f7/hannahlspencer/3nlblPd_zpsl1ir3xsv.jpg"
    images[5]= new Image()
  images[5].src = "http://i44.photobucket.com/albums/f7/hannahlspencer/loMxhjS_zpswrbuykfp.jpg"
  images[6] =new Image()
  images[6].src = "http://i44.photobucket.com/albums/f7/hannahlspencer/v3M7ZAb_zpsqdetqitg.jpg"
   ;

var currentPrompt = 0;

var nextPrompt = function() {
  if (currentPrompt < images.length) {
    $('#prompt').html(images[currentPrompt]);
	currentPrompt++;
}
else {
  $('#prompt').html(images[0]);
  currentPrompt = 1;
}
}

$('button').click(function() {
	nextPrompt();
});
nextPrompt();
