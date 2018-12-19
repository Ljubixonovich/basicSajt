
'use strict';

$(document).ready(function() {
	
	var result = lj.knowledge[1];
	console.log(result);

	lj.knowledge.push('Water');
	console.log(lj.knowledge);
	
	var boje = lj.boje;
	console.log(boje);

	//filter array po stringu
	var filterItems = (x) => {
		return boje.filter((boja) => {
			return boja.name.toLowerCase().indexOf(x.toLowerCase()) > -1;
		})
	}
	console.log(filterItems('bl'));


	// filter array po id-u
	//boje = boje.filter(x => x.id == 1);
	console.log(boje);
	
    $("#p1").css("font-size", "50px");
	$("p").click(function() {
		$(this).hide();		
	});

	

});
