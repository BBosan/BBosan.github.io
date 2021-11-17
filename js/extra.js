//Hero Area Mobile Scroll Glitch FIX
$(document).ready(function(){
if (navigator.userAgent.indexOf("Firefox") > 0 || navigator.userAgent.match(/SAMSUNG|Samsung|SGH-[I|N|T]|GT-[I|N]|SM-[A|N|P|T|Z]|SHV-E|SCH-[I|J|R|S]|SPH-L/i)) {
			//https://stackoverflow.com/questions/42626139/mobile-scroll-fires-jquery-resize-event-it-only-fires-when-using-mobile-ok-i
				//https://stackoverflow.com/questions/23223157/how-to-fix-vhviewport-unit-css-in-mobile-safari
				$('#pageHeader').css("height", window.innerHeight + "px");

				/*Firefox Fix For Full Hero For Mobile*/
				var cachedWidth = $(window).width();
						$(window).resize(function(){
								var newWidth = $(window).width();
								if(newWidth !== cachedWidth){
									$('#pageHeader').css("height", window.innerHeight + "px");
										cachedWidth = newWidth;
								}
						});
		} else {
					$('#pageHeader').css("height", window.innerHeight + "px");
					$(window).resize(function(){
					$('#pageHeader').css("height", $(window).height()*1);
			});
		}
	});

	//del
	// if(navigator.userAgent.match(/SAMSUNG|Samsung|SGH-[I|N|T]|GT-[I|N]|SM-[A|N|P|T|Z]|SHV-E|SCH-[I|J|R|S]|SPH-L/i)) {
	//     alert("it's Samsung");
	// }
	//del


//hamburAnim
$(document).ready(function(){
	$('#mobileButton').click(function(){
		$(this).toggleClass('open');
	});
});

// mob
$(document).ready(
  function() {
    $('#mobileButton').click(function() {
      /* $('#mainMenu ul').slideToggle(); */
      $('#mainMenu ul').slideToggle(
        function() {
          $('#pageHeader ul,#pageHeader h1,#pageHeader h2').slideToggle(500, "linear");
        }
      );
    });
  });

// ekstra efekti
$(document).ready(function() {
  $("#graf").hover(function() {
    $(".test div:nth-child(4)").css("background-color", "#4984f2");
  }, function() {
    $(".test div:nth-child(4)").css("background-color", "rgba(51, 51, 51, 0.1)");
  });
  $("#res").hover(function() {
    $(".test div:nth-child(3)").css("background-color", "#4984f2");
  }, function() {
    $(".test div:nth-child(3)").css("background-color", "rgba(51, 51, 51, 0.1)");
  });
  $("#seo").hover(function() {
    $(".test div:nth-child(2)").css("background-color", "#4984f2");
  }, function() {
    $(".test div:nth-child(2)").css("background-color", "rgba(51, 51, 51, 0.1)");
  });
  $("#print").hover(function() {
    $(".test div:nth-child(1)").css("background-color", "#4984f2");
  }, function() {
    $(".test div:nth-child(1)").css("background-color", "rgba(51, 51, 51, 0.1)");
  });
});

//fade out menu
// (function($) {
//     $(document).ready(function(){
//         $(window).scroll(function(){
//             if ($(this).scrollTop() > 300) {
//                 $('#mainMenu').fadeOut(500);
//             } else {
//                 $('#mainMenu').fadeIn(500);
//             }
//         });
//     });
// })(jQuery);

//Scrolling START
$(document).ready(function(){
		$(window).scroll(function(){
				if ($(this).scrollTop() > 300) {
						$('#mainMenu').fadeOut(500);
				} else {
						$('#mainMenu').fadeIn(500);
				}
		});
});

$(document).scroll(function() {
	var y = $(this).scrollTop();
	if (y > 400) {
		$('.gotop').fadeIn();
	} else {
		$('.gotop').fadeOut();
	}
});

$(document).ready(function(){
	$(window).load(function(){
		$(".gotop").click(function() {
			$("html,body").animate({scrollTop: 0}, 1000);
			return false;
		});
	});
});
// $(document).ready(function(){
// 	$(".gotop").click(function() {
// 		$("html, body").animate({ scrollTop: 0 }, "slow");
// 		return false;
// 	});
// });
//Scrolling KRAJ

// var str = 'one:two;three';
// str.split(':').pop().split(';')[0]; // returns 'two'

//scroll from index to usluge
$(document).ready(function() {
	var speed_of_animation = 1200;
  var page_url = window.location.href;
  var page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
	var ime_trenutne_stranice = page_url.substring(page_url.lastIndexOf("/")+1, page_url.lastIndexOf("."));
	var top_set = 12;
	if (ime_trenutne_stranice == "cijenik") {
		top_set = 22;
	}
	// alert(ime_trenutne_stranice);
	if (page_id == "graf" || page_id == "res" || page_id == "seo" || page_id == "print") {
		setTimeout(function() {//chrome fix
		$('html, body').scrollTop(0).show(); //firefox fix
    $("html, body").animate({
      scrollTop: $(".scrollTo-" + page_id).offset().top - top_set
    }, speed_of_animation).promise().then(function() {//promise jer callback pozove dva puta
			//Start
						if (ime_trenutne_stranice == "cijenik") {
							$(".scroll_wrap #"+page_id).animate({
						  fontSize: '1.4em',
							letterSpacing: '0.2em',
						});
					} else {
						$(".scroll_wrap #"+page_id+ " .scroll_to_focus_h3").animate({
							fontSize: '1.3em',
							opacity: '0.6',
							letterSpacing: '0.1em',
						});
					};
			//End
		}, 0);
    });;
  // } else if (page_id == "res") {
  //   $("html, body").animate({
  //     scrollTop: $(".scrollTo-" + page_id).offset().top - 12
  //   }, 1200);
  // } else if (page_id == "seo") {
  //   $("html, body").animate({
  //     scrollTop: $(".scrollTo-" + page_id).offset().top - 12
  //   }, 1200);
  // } else if (page_id == "print") {
  //   $("html, body").animate({
  //     scrollTop: $(".scrollTo-" + page_id).offset().top - 12
  //   }, 1200);
  } else if (ime_trenutne_stranice == "usluge"){
    $("html, body").animate({
      scrollTop: $("#vrh").offset().top - top_set
    }, speed_of_animation);
  } else if (ime_trenutne_stranice == "kontakt" || ime_trenutne_stranice == "portfelj"){
    $("html, body").animate({
      scrollTop: $("#focus").offset().top - top_set
    }, speed_of_animation);
  }
});
