//Javascript main run

//form validation
document.getElementById('Form_').onsubmit = function() {
    var state = document.getElementById('Form__state');
    var enctype = document.getElementById('Form__enquiretype');
	var selectedValue = enctype.options[enctype.selectedIndex].value;
	var err = "";

	if(document.getElementById('Form__firstname').value == "") err += "Please enter your first name\n";
	if(document.getElementById('Form__surname').value == "") err += "Please enter your sirname\n";
	if(document.getElementById('Form__email').value == "") err += "Please enter your email\n";
	if(document.getElementById('Form__number').value == "") err += "Please enter your phone number\n";
	if(document.getElementById('Form__address').value == "") err += "Please enter your address\n";
	if(document.getElementById('Form__suburb').value == "") err += "Please enter your suburb\n";
	if(state.selectedIndex == 0) err += "Please select your state\n";
	if(document.getElementById('Form__postcode').value == "") err += "Product name must not be empty\n";
	if(enctype.selectedIndex == 0) err += "Please select your enquiry type\n";



	//Check that product name, product size, use-by date and batch code are not empty, if the enquiry type is "Product Complaint", 
	if(selectedValue == "Complaint"){
		//check that product name, product size, use-by date and batch code are not empty
		
		if(document.getElementById('Form__pname').value == "") err += "Product name must not be empty\n";
		if(document.getElementById('Form__psize').value == "") err += "Product size must not be empty\n";
		if(document.getElementById('Form__useby').value == "") err += "Use-by date must not be empty\n";
	}
	
	if(err != ""){
		alert(err);
		return false;
	} 
};
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

jQuery.noConflict();

(function($) {
	$(document).ready(function() {
		/* removes text from search form on focus and replaces it on unfocus - if text is entered then it does not get replaced with default on unfocus */
		$('#SearchForm_SearchForm_action_results').val('L');
		var searchField = $('#SearchForm_SearchForm_Search');
		var default_value = searchField.val();
		searchField.focus(function() {
			$(this).addClass('active');
			if(searchField.val() == default_value) {
				searchField.val('');
			}
		});
		searchField.blur(function() {
			  if(searchField.val() == '') {
					searchField.val(default_value);
			  }
		});

		if (!$.browser.msie || ($.browser.msie && (parseInt($.browser.version, 10) > 8))) {
			var searchBarButton = $("span.search-dropdown-icon");
			var searchBar = $('div.search-bar');
			var menuButton = $("span.nav-open-button");
			var menu = $('.header .primary ul');
			var mobile = false;
			var changed = false;

			$('body').append('<div id="media-query-trigger"></div>');

			function menuWidthCheck() {
				var header_w = $('header .inner').width();
				var elements_w = menu.width() + $('.brand').width();

				if ((header_w < elements_w) || ($(window).width() <= 768)) {
					$('body').addClass('tablet-nav');
				}
				else {
					$('body').removeClass('tablet-nav');
				}

				mobile_old = mobile;
				if ($('#media-query-trigger').css('visibility') == 'hidden') {
					mobile = false;
				}
				else {
					mobile = true;
				}

				if (mobile_old != mobile) {
					changed = true;
				}
				else {
					changed = false;
				}
			}

			menuWidthCheck();

			$(window).resize(function() {
				menuWidthCheck();

				if (!mobile) {
					menu.show();
					searchBar.show();
				}
				else {
					if (changed) {
						menu.hide();
						searchBar.hide();
					}
				}
			});

			/* toggle navigation and search in mobile view */
			searchBarButton.click(function() {
				menu.slideUp();
				searchBar.slideToggle(200);
			});

			menuButton.click(function() {
				searchBar.slideUp();
				menu.slideToggle(200);
			});
		}
	});
}(jQuery));
