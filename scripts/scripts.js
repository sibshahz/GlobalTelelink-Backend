$(document).ready(function(){
	
	$("#simple-calendar").datepicker();

	$(".nav-op").on("click",function(){
		$(".main-nav ul").toggle(300);
	});

	$(".jq-calendar").datepicker();

	//Spinner controller for single product page
	$(".control").on("click",function(){
			var spinner=$(".spinner");
			var plus=$(".control.plus");
			var minus=$(".control.minus");
			var preVal=spinner.val();
		
			if ($(this).hasClass("plus")) {
				increaseValue();
			}else{
				decreaseValue();
			}

			function increaseValue(){
				spinner.val(parseInt(preVal)+1);
			}

			function decreaseValue(){
				if (spinner.val()==1) {
					return;
				}
				spinner.val(parseInt(preVal)-1);
			}

	});

	var headerHeight=$("header").outerHeight();
	var footerHeight=$("footer").outerHeight();
	var screenHeight=$(window).height();
	var minHeight=screenHeight-(parseInt(headerHeight)+parseInt(footerHeight));	
	if(screenHeight>620){
		$(".content-main").css("min-height",minHeight);
		$("#log-cont-con").css("min-height",minHeight-90);
	}

	$(".list-selector").on("click",function(){
		$(this).find(".select-list").toggle(200);
	});
});

