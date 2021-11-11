$(document).ready(function(){
    $('.faq_items').slick({
		autoplay: false,
		fade: false,
		dots: false,
		arrows: true,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
                variableWidth: true,
                infinite: true
			}
		},
		{
			breakpoint: 769,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
                variableWidth: true,
                infinite: true
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
                variableWidth: true,
                infinite: true
			}
		}
		]
	});
});