
var minutes = $( '#set-time1' ).val();

var target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
var time_limit = ((minutes * 60 ) * 1000);
//set actual timer
setTimeout(
  function() 
  {
   
  }, time_limit );

var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles1"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;
  
if ( seconds_left >= 0 ) {
  console.log(time_limit);
   if ( (seconds_left * 1000 ) < ( time_limit / 2 ) )  {
     $( '#tiles1' ).removeClass('color-full');
     $( '#tiles1' ).addClass('color-half');

		} 
    if ( (seconds_left * 1000 ) < ( time_limit / 4 ) )  {
    	$( '#tiles1' ).removeClass('color-half');
    	$( '#tiles1' ).addClass('color-empty');
    }
  
	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + hours + ":</span><span>" + minutes + ":</span><span>" + seconds + "</span>"; 
  

  
}
   
  
  
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}


/*2nd*/
var minutes = $( '#set-time' ).val();

var target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
var time_limit = ((minutes * 60 ) * 1000);
//set actual timer
setTimeout(
  function() 
  {
   
  }, time_limit );

var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles9"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;
  
if ( seconds_left >= 0 ) {
  console.log(time_limit);
   if ( (seconds_left * 1000 ) < ( time_limit / 2 ) )  {
     $( '#tiles9' ).removeClass('color-full');
     $( '#tiles9' ).addClass('color-half');

		} 
    if ( (seconds_left * 1000 ) < ( time_limit / 4 ) )  {
    	$( '#tiles9' ).removeClass('color-half');
    	$( '#tiles9' ).addClass('color-empty');
    }
  
	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + hours + ":</span><span>" + minutes + ":</span><span>" + seconds + "</span>"; 
  

  
}
   
  
  
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}

// counter
var minutes = $( '#set-time2' ).val();

var target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
var time_limit = ((minutes * 60 ) * 1000);
//set actual timer
setTimeout(
  function() 
  {
   
  }, time_limit );

var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles2"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;
  
if ( seconds_left >= 0 ) {
  console.log(time_limit);
   if ( (seconds_left * 1000 ) < ( time_limit / 2 ) )  {
     $( '#tiles2' ).removeClass('color-full');
     $( '#tiles2' ).addClass('color-half');

		} 
    if ( (seconds_left * 1000 ) < ( time_limit / 4 ) )  {
    	$( '#tiles2' ).removeClass('color-half');
    	$( '#tiles2' ).addClass('color-empty');
    }
  
	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + hours + ":</span><span>" + minutes + ":</span><span>" + seconds + "</span>"; 
  

  
}
   
  
  
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}

/*3rd*/

var minutes = $( '#set-time3' ).val();

var target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
var time_limit = ((minutes * 60 ) * 1000);
//set actual timer
setTimeout(
  function() 
  {
   
  }, time_limit );

var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles3"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;
  
if ( seconds_left >= 0 ) {
  console.log(time_limit);
   if ( (seconds_left * 1000 ) < ( time_limit / 2 ) )  {
     $( '#tiles3' ).removeClass('color-full');
     $( '#tiles3' ).addClass('color-half');

		} 
    if ( (seconds_left * 1000 ) < ( time_limit / 4 ) )  {
    	$( '#tiles3' ).removeClass('color-half');
    	$( '#tiles3' ).addClass('color-empty');
    }
  
	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + hours + ":</span><span>" + minutes + ":</span><span>" + seconds + "</span>"; 
  
}
   
  
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}

/*4th*/

var minutes = $( '#set-time4' ).val();

var target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
var time_limit = ((minutes * 60 ) * 1000);
//set actual timer
setTimeout(
  function() 
  {
    
  }, time_limit );

var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles4"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;
  
if ( seconds_left >= 0 ) {
  console.log(time_limit);
   if ( (seconds_left * 1000 ) < ( time_limit / 2 ) )  {
     $( '#tiles4' ).removeClass('color-full');
     $( '#tiles4' ).addClass('color-half');

		} 
    if ( (seconds_left * 1000 ) < ( time_limit / 4 ) )  {
    	$( '#tiles4' ).removeClass('color-half');
    	$( '#tiles4' ).addClass('color-empty');
    }
  
	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + hours + ":</span><span>" + minutes + ":</span><span>" + seconds + "</span>"; 
  

  
}
   
  
  
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}

/*4th*/

var minutes = $( '#set-time5' ).val();

var target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
var time_limit = ((minutes * 60 ) * 1000);
//set actual timer
setTimeout(
  function() 
  {
    
  }, time_limit );

var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles5"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;
  
if ( seconds_left >= 0 ) {
  console.log(time_limit);
   if ( (seconds_left * 1000 ) < ( time_limit / 2 ) )  {
     $( '#tiles5' ).removeClass('color-full');
     $( '#tiles5' ).addClass('color-half');

		} 
    if ( (seconds_left * 1000 ) < ( time_limit / 4 ) )  {
    	$( '#tiles5' ).removeClass('color-half');
    	$( '#tiles5' ).addClass('color-empty');
    }
  
	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + hours + ":</span><span>" + minutes + ":</span><span>" + seconds + "</span>"; 
  

  
}
   
  
  
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}

/*4th*/

var minutes = $( '#set-time6' ).val();

var target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
var time_limit = ((minutes * 60 ) * 1000);
//set actual timer
setTimeout(
  function() 
  {
    
  }, time_limit );

var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles6"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;
  
if ( seconds_left >= 0 ) {
  console.log(time_limit);
   if ( (seconds_left * 1000 ) < ( time_limit / 2 ) )  {
     $( '#tiles6' ).removeClass('color-full');
     $( '#tiles6' ).addClass('color-half');

		} 
    if ( (seconds_left * 1000 ) < ( time_limit / 4 ) )  {
    	$( '#tiles6' ).removeClass('color-half');
    	$( '#tiles6' ).addClass('color-empty');
    }
  
	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + hours + ":</span><span>" + minutes + ":</span><span>" + seconds + "</span>"; 
  

  
}
   
  
  
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}



// var dropdowns = $(".dropdown");


// dropdowns.find("dt").click(function(){
// 	dropdowns.find("dd ul").hide();
// 	$(this).next().children().toggle();
// });


// dropdowns.find("dd ul li a").click(function(){
// 	var leSpan = $(this).parents(".dropdown").find("dt a span");
  

// 	$(this).parents(".dropdown").find('dd a').each(function(){
//     $(this).removeClass('selected');
//   });
  
// 	leSpan.html($(this).html());
  

// 	if($(this).hasClass('default')){
//     leSpan.removeClass('selected')
//   }
// 	else{
// 		leSpan.addClass('selected');
// 		$(this).addClass('selected');
// 	}
  

// 	$(this).parents("ul").hide();
// });


// $(document).bind('click', function(e){
// 	if (! $(e.target).parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
// });

var minutes = $( '#set-time11' ).val();

var target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
var time_limit = ((minutes * 60 ) * 1000);
//set actual timer
setTimeout(
  function() 
  {
   
  }, time_limit );

var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles11"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;
  
if ( seconds_left >= 0 ) {
  console.log(time_limit);
   if ( (seconds_left * 1000 ) < ( time_limit / 2 ) )  {
     $( '#tiles11' ).removeClass('color-full');
     $( '#tiles11' ).addClass('color-half');

		} 
    if ( (seconds_left * 1000 ) < ( time_limit / 4 ) )  {
    	$( '#tiles11' ).removeClass('color-half');
    	$( '#tiles11' ).addClass('color-empty');
    }
  
	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + hours + ":</span><span>" + minutes + ":</span><span>" + seconds + "</span>"; 
  

  
}
   
  
  
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}


/10th/



var minutes = $( '#set-time10' ).val();

var target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
var time_limit = ((minutes * 60 ) * 1000);
//set actual timer
setTimeout(
  function() 
  {
   
  }, time_limit );

var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles10"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;
  
if ( seconds_left >= 0 ) {
  console.log(time_limit);
   if ( (seconds_left * 1000 ) < ( time_limit / 2 ) )  {
     $( '#tiles10' ).removeClass('color-full');
     $( '#tiles10' ).addClass('color-half');

		} 
    if ( (seconds_left * 1000 ) < ( time_limit / 4 ) )  {
    	$( '#tiles10' ).removeClass('color-half');
    	$( '#tiles10' ).addClass('color-empty');
    }
  
	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + hours + ":</span><span>" + minutes + ":</span><span>" + seconds + "</span>"; 
  

  
}
   
  
  
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}

var minutes = $( '#set-time12' ).val();

var target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
var time_limit = ((minutes * 60 ) * 1000);
//set actual timer
setTimeout(
  function() 
  {
   
  }, time_limit );

var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles12"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;
  
if ( seconds_left >= 0 ) {
  console.log(time_limit);
   if ( (seconds_left * 1000 ) < ( time_limit / 2 ) )  {
     $( '#tiles12' ).removeClass('color-full');
     $( '#tiles12' ).addClass('color-half');

		} 
    if ( (seconds_left * 1000 ) < ( time_limit / 4 ) )  {
    	$( '#tiles12' ).removeClass('color-half');
    	$( '#tiles12' ).addClass('color-empty');
    }
  
	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + hours + ":</span><span>" + minutes + ":</span><span>" + seconds + "</span>"; 
  

  
}
   
  
  
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}

/13th/



var minutes = $( '#set-time13' ).val();

var target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
var time_limit = ((minutes * 60 ) * 1000);
//set actual timer
setTimeout(
  function() 
  {
   
  }, time_limit );

var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles13"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;
  
if ( seconds_left >= 0 ) {
  console.log(time_limit);
   if ( (seconds_left * 1000 ) < ( time_limit / 2 ) )  {
     $( '#tiles13' ).removeClass('color-full');
     $( '#tiles13' ).addClass('color-half');

		} 
    if ( (seconds_left * 1000 ) < ( time_limit / 4 ) )  {
    	$( '#tiles13' ).removeClass('color-half');
    	$( '#tiles13' ).addClass('color-empty');
    }
  
	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + hours + ":</span><span>" + minutes + ":</span><span>" + seconds + "</span>"; 
  

  
}
   
  
  
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}