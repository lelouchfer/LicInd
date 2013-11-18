<!-- Iniciando con scripts ______________________________________-->		
	jQuery(window).load(function() {
		// init Cycle for slider
		
		$('#slides').after('<div id="circle-pager">').cycle({
			fx:      'fade', 
			speed:    300, 
			timeout:  8000,
			cleartype:  true,
			cleartypeNoBg: false,
			pager: '#circle-pager',
			next:  '#slider .next1', 
			prev:  '#slider .prev1',
			slideResize: true,
			fit: 1,
			width: '100%',
			before:  function(currSlideElement, nextSlideElement) { 
				// hide elements and put them in start position		
				$(this).find('.slide-image').css({
					'opacity': '0',
					'left': '-50px'
				});
				$(this).find('.slide-text').css({
					'opacity': '0',
					'top': '0'
				});
				$(this).find('.slide-text p').css({
					'opacity': '0',
					'left': '15px'
				});
			},
			after:  function(currSlideElement, nextSlideElement) { 			
				// fade in image
				$(this).find('.slide-image').animate({
					'opacity': '1',
					'left': '0'
				}, 500, 'linear');
				// bring the text box from top
				$(this).find('.slide-text').delay(500).animate({
					'opacity': '1',
					'top': '25%'
				}, 500, 'easeOutBack');
				// bring the paragraphs in
				$(this).find('.slide-text p:eq(0)').delay(500).animate({
					'opacity': '1',
					'left': '0'
				}, 500, 'easeOutBack');
				$(this).find('.slide-text p:eq(1)').delay(700).animate({
					'opacity': '1',
					'left': '0'
				}, 500, 'easeOutBack');
				$(this).find('.slide-text p:eq(2)').delay(900).animate({
					'opacity': '1',
					'left': '0'
				}, 500, 'easeOutBack');
				$(this).find('.slide-text p:eq(3)').delay(1100).animate({
					'opacity': '1',
					'left': '0'
				}, 500, 'easeOutBack');

			} 
		});

		// init Cycle for testimonials
		$('#quotes').cycle({
			fx:      'fade', 
			speed:    400, 
			timeout:  0,
			cleartype:  false,
			next:  '#quotes-nav .next2', 
			prev:  '#quotes-nav .prev2',
			slideResize: true,
			fit: 1,
			width: '100%'
		});
		
		// init jCarousel for portfolio projects
		$('.carousel4').jcarousel({
			'visible': 4,
			'wrap': 'both'
		});
		$('#latest-projects .prev1').click(function() {
			$('.carousel4').jcarousel('scroll', '-=1');
		});
		$('#latest-projects .next1').click(function() {
			$('.carousel4').jcarousel('scroll', '+=1');
		});

		// init jCarousel for recent news
		$('.carousel-vert4').jcarousel({
			'vertical': true,
			'visible': 4,
			'wrap': 'both'
		});
		$('#recent-news .prev2').click(function() {
			$('.carousel-vert4').jcarousel('scroll', '-=1');
		});
		$('#recent-news .next2').click(function() {
			$('.carousel-vert4').jcarousel('scroll', '+=1');
		});
		 
		// init jCarousel for client logos
		$('.carousel7').jcarousel({
			'wrap': 'circular'
		}).jcarouselAutoscroll({
			'interval': 2000,
			'autostart': true,
			'target': '+=1'
		});	
	});

	
	
		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-XXXXXXX-X']);
		  _gaq.push(['_trackPageview']);
		
		  (function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })(); 
	
