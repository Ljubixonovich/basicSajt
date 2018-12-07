
'use strict';

$(document).ready(function() {
	
	var result = lj.knowledge[1];
	console.log(result);

	lj.knowledge.push('Water');
	console.log(lj.knowledge);
	
	
    $("#p1").css("font-size", "50px");
	$("p").click(function() {
		$(this).hide();		
	});

	

});
