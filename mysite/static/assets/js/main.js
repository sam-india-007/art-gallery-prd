/*
	Tessellate by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:    [ '1281px',  '1680px' ],
			normal:  [ '1001px',  '1280px' ],
			narrow:  [ '737px',   '1000px' ],
			mobile:  [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

	// //some weird stuff
	// 	$('#post-form').on('submit', function(event){
	// 		event.preventDefault();
	// 		console.log("form submitted!")  // sanity check
	// 		create_post();
	// 	});

})(jQuery);

// //some weird stuff
// $('#post-form').on('submit', function(event){
// 	event.preventDefault();
// 	console.log("form submitted!")  // sanity check
// 	create_post();
// });

// // AJAX for posting
// function create_post() {
//     console.log("create post is working!") // sanity check
//     console.log($('#post-text').val())
// };


var form = document.getElementById('post-form');

function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());

    console.log({ value });
}

form.addEventListener('submit', handleSubmit);