$(document).ready(function() {
	/*
	 * Submenu functionality
	 */
	$("span.category").click(function() {
		$("span.category").siblings("ul").children().hide();

		//show child li's of clicked category		
		$(this).siblings("ul").children().show();	
	});
});
