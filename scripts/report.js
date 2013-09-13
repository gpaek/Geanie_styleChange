$(".responsiveImg").responsiveImg();

function insertSlideShow (tabPageId, idxNeighborhood) {
	// RJR: This is temporary.  Need to insert the slideshow
	$(tabPageId+">.slideShow>h3").append(" for " + csaData[idxNeighborhood].CSA2000);
	return true;
	};

function insertCrimeRate (tabPageId, idxNeighborhood) {
	var crimeRateItem = "Crime Rate:<br/>" + 
						csaData[idxNeighborhood].crime10 + 
						" incidents per<br/>1,000 people";
	$(tabPageId+">.crimeRate>p").html(crimeRateItem);
	return true;
	};

function insertHousePrice (tabPageId, idxNeighborhood) {
	divId = tabPageId+">.homevalues";
	var divWidth = $(divId).width();
	var divHeight = $(divId).height();
	
	// RJR: This is temporary.
	// Need to replace the html, with an SVG, and draw the graph within the SVG
	// Probably something like this in another file:
	// function chartHouseValues(divId, idxNeighborhood) {
    //		var width = $(divId).width() - margin.left - margin.right,
    //		var height = $(divId).height() - margin.top - margin.bottom;
	//		var svg = d3.select(divId).append("svg")
	//   	.attr("width", width + margin.left + margin.right)
    //		.attr("height", height + margin.top + margin.bottom)
    //		.append("g")
    //		.attr("transform", "translate(" + margin.left + "," + margin.top + ")"); 
    //
    //			ydaa yada yada...
    //
	//		}
	var housePriceItem = "Median House Price: $" + csaData[idxNeighborhood].salepr10 +
						"<br/> wxh: " + divWidth + " x " + divHeight;
	$(tabPageId+">.homevalues>p").html(housePriceItem);
	return true;
	}


function insertMap (tabPageId, idxNeighborhood) {
	//mapInitialize(tabPageId, idxNeighborhood);
}

function insertDescription (tabPageId, idxNeighborhood) {
	var desc = csaData[idxNeighborhood].description;
	if (desc == "") 
		desc = "No description available";
	$(tabPageId+">.description>p").html(desc);
	return true;
	}
	
var csaData = null;
	//Call to read the json data, and on success populate csaData as an actual javascript object of the data
function parseCache () {	
	console.log("Passed hash value: " + location.hash);
	var idx = location.hash.indexOf("#");
	var matchList = location.hash.slice(idx+1).split(",");
	for (i=0; i<matchList.length; i++) {
		if (csaData != null) {
			console.log("Neighborhood #: " + matchList[i]  + " is " + csaData[matchList[i]].CSA2000);
		}
		else {
			//  Howe get the JSON file to load before doing this... ?
			console.log("Neighborhood #: " + matchList[i] );
		}
		// Insert Neighberhood name into tab
		var tabId = "#tabHeader_"+(i+1);
		$(tabId).html(csaData[matchList[i]].CSA2000); 
		//Insert Neighbborhood name into tab content
		
		//AMM: Writes the neighborhood name into the title spot
		var pageId = "#tabpage_"+(i+1);
		$(pageId+">.name>h2").html(csaData[matchList[i]].CSA2000);
		
		// RJR: Moved all these to functions.  In hthis way, the HTMl for each is
		// localized, as well as the use of any data.
		//
		//AMM: Writes the crime rate into its corresponding slot on the tab
		insertCrimeRate (pageId, matchList[i]);
		
		//AMM: Writes the median house price into its corresponding slot on the tab
		insertHousePrice (pageId, matchList[i]);
		
		//RJR: Insert map into its corresponding slot on the tab
		insertMap (pageId, matchList[i]);
		
		//AMM: Writes neighborhood description into its corresponding slot on the tab
		insertDescription (pageId, matchList[i]);
		
		// RJR: Load the slideshow images into its corresponding slot on the tab
		insertSlideShow (pageId, matchList[i]);
		
	};
};
	
$.getJSON( "data/CSAdata_sales-crime.json", 
	function(data){
		csaData = data;
		console.log("CSA Data Loaded");
	
		// Sort csaData by sale price, ascending order, that way any returned matches will already be sorted
		csaData.sort(function(a, b) {
    		return a.salepr10 - b.salepr10;
			});
		//console.log(csaData[0], csaData[1], csaData[2]);
	
	})
	.fail(function() { console.log( "error loading CSA data" ); })
	.done(function() { parseCache();});


	

	
	