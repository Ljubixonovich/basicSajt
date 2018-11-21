
'use strict';

$(document).ready(function() {
	// alert(11);
	
	var persons = [
		{
			name: 'joca',
			age: 15,
			smart: false
		},
		{
			name: 'pera',
			age: 22,
			smart: true
		}
	];
	var p1 = { name: 'ljuba', age: 36, smart: true};
	var p2 = { name: 'milos', age: 46, smart: false};
	
	var p3 = {...p1, ...p2};
	
	
	var persons2 = [...persons, p3];
	
	
	
	
	
	
	for (let p of persons2) {		 
		console.log(p.name + ' has ' + p.age + ' and is ' + (p.smart === true ? 'smart' : 'stupid'));
	}
	
	
	
	
	
	
    $("#p1").css("font-size", "50px");
	$("p").click(function() {
		$(this).hide();		
	});
});




