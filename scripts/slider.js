// JavaScript Document

//Get Price Value//  
$(function() {
	$(".report").hide();	
    $( "#price-range" ).slider({
      range: true,
      min: 0,
      max: 500000,
	  step: 50000,
      values: [ 100000, 300000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
	
    $( "#amount" ).val( "$" + $( "#price-range" ).slider( "values", 0 ) + " - $" + $( "#price-range" ).slider( "values", 1 ) );
	  
				

//Get Crime Value//  						
//	var crimesteps = [];
//	crimesteps[ 0 ] = "People should watch out for me!";
//	crimesteps[ 1 ] = "I'm used to rough neighborhoods.";
//	crimesteps[ 2 ] = "I have some street skills.";
//	crimesteps[ 3 ] = "I don't mind a little character.";
//	crimesteps[ 4 ] = "I have six locks on my door!"
	
	// These correspond directly to the crimerate. A higher number corresponds to a higher crime rate.
	var crimesteps = [];
	crimesteps[ 0 ] = "I have six locks on my door!";
	crimesteps[ 25 ] = "I don't like to walk alone.";
	crimesteps[ 50 ] = "I don't mind a little character.";
	crimesteps[ 75 ] = "I have some street skills.";
	crimesteps[ 100 ] = "I'm used to rough neighborhoods.";
	crimesteps[ 125 ] = "People should watch out for me!";
				


	$( "#crime-range" ).slider({
	range: false,
	min: 0,
	max: 125,
	value: 1,
	step: 25,
	slide: function( event, ui ) {
		$( "#crime" ).val(crimesteps[ui.value]);
	}
	});
	
		$("#crime").val(crimesteps[$("#crime-range").slider("value")]);
		
	
	$("#findbuttonSamePage").click(function() {
		//var matches = new Array();
		var pricevalues = $( ".price" ).slider( "option", "values" );
		var crimevalues = $( ".crimerate" ).slider( "value" );
		matches = findNeighborhood(pricevalues, crimevalues);
		if (matches.matchString.length != "") {
			$(".form").hide();
			$(".report").show();
			console.log("Selected Price values: " + pricevalues);
	    	console.log("Selected Crime value: " + crimevalues);
			console.log("find button works, found " + matches.matchList.length );
			//var myURL = "report.html#" + matchList[0] + "," + matchList[1] + "," + matchList[2];
			//window.location.assign(myURL);
		}
	});	
	$("#findbuttonNewPage").click(function() {
		//var matches = new Array();
		var pricevalues = $( ".price" ).slider( "option", "values" );
		var crimevalues = $( ".crimerate" ).slider( "value" );
		matches = findNeighborhood(pricevalues, crimevalues);
		matchList = matches.matchList;
	    if (matches.matchList.length != 0) {
			console.log("Selected Price values: " + pricevalues);
	    	console.log("Selected Crime value: " + crimevalues);
			console.log("find button works, found " + matchList.length );
			var myURL = "report.html#" + matchList[0] + "," + matchList[1] + "," + matchList[2];
			window.location.assign(myURL);
		}
	});
});
 
