$(document).ready(function () {
	//Prevent Page Reload on all # links
	$("body").on("click", "a[href='#']", function (e) {
		e.preventDefault();
	});

	//placeholder
	$("[placeholder]").each(function () {
		$(this).attr("data-placeholder", this.placeholder);
		$(this).bind("focus", function () {
			this.placeholder = '';
		});
		$(this).bind("blur", function () {
			this.placeholder = $(this).attr("data-placeholder");
		});
	});

	// On scroll Add Class
	$(window).scroll(function (e) {
		if ($(window).scrollTop() > 200) {
			$(".wrapper").addClass('page-scrolled');
		}
		else {
			$(".wrapper").removeClass('page-scrolled');
		}
	});

	// Add remove class when window resize finished
	var $resizeTimer;
	$(window).on("resize", function (e) {
		if (!$("body").hasClass("window-resizing")) {
			$("body").addClass("window-resizing");
		}
		clearTimeout($resizeTimer);
		$resizeTimer = setTimeout(function () {
			$("body").removeClass("window-resizing");
		}, 250);
	});

	// Add new js functions here -----------------------------------------------------------------

	// Toggle Sidebar
	$(".toggle-btn").click(function () {
		$('body').toggleClass("open-menu");
	});
	$(".overlay").click(function () {
		$("body").removeClass("open-menu");
	});


	//for removing class when user loses focus on control and also add value related class when there is value in control
	$("body").on("blur change", ".floating-label .form-control", function () {
		var field = $(this);
		var value = field.val();
		if (value) {
			value = value.trim();
		}
		if (value && value != "") {
			field.closest('.floating-label').removeClass('is-focused').addClass('has-value');
		} else {
			field.closest('.floating-label').removeClass('is-focused has-value');
		}
		field.val(value);
	});
	// check for values in controls initially
	$(".floating-label .form-control").each(function () {
		$(this).trigger("blur");
	});

	// Scroll Tab
	var $mainClass = $(".tab-heading");
	$mainClass.each(function () {
		var $tab = $(this);
		function ulWidth() {
			var navW = 0;
			$tab.find("> .nav-tabs > .nav-item > .nav-link").each(function () {
				navW = navW + $(this).outerWidth(true);
			});
			$tab.find("> .nav-tabs").css({ "width": navW + 2 });
		}
		ulWidth();
		$(window).resize(function () {
			ulWidth();
		});

		$tab.jScrollPane({
			showArrows: true
		});

		function scrollAdj() {
			$tab.data('jsp').reinitialise();
		};
		scrollAdj();
		$(window).resize(function () {
			scrollAdj();
		});

		$tab.find(".nav-tabs .nav-link").click(function (e) {
			var $this = $(this);
			e.preventDefault();
			if ($tab.attr('active-center') == "true") {
				$tab.data('jsp').scrollByX(parseInt(($this.offset().left - $tab.offset().left) + ($this.innerWidth() / 2)) - ($tab.innerWidth() / 2));
			}
			// $(window).resize();
		});
	});
	// Don't add anything below this --------------------------------------------------------------
	// Add Class on Window Load
	$("body").addClass("page-loaded");
});