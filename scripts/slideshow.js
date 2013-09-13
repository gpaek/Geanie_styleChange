//slideshow.js 
//creating a slide show for the background image using css animation

//the images to iterate through
$(document).ready(function() {
  $(function() {
    $(".slideshow").hide();
    $(".slideshow").fadeIn(1500);
    setInterval('cycleImages()', 5000); 
  });
});

var cycleImages = function() {
  var slides = ["Allendale-Irvington-SouthHilton/Allendale, Irvington, S.Hilton - 1.jpg",
                "Beechfield-TenHills-WestHills/Beechfield, TenHills, WestHills - 5.jpg",
                "Belair-Edison/Belair, Edison - 3.jpg",
                "Brooklyn-CurtisBay-HawkinsPoint/Brooklyn, CurtisBay, HawkinsPoint - 4.jpg",
                "Canton/Canton - 5.jpg",
                "Cedonia-Frankford/Cedonia, Frankford - 2.jpg",
                "CherryHill/Cherry Hill - 5.jpg",
                "ChinquapinPark-Belvedere/Chinquapin Park, Belvedere - 3.jpg",
                "Claremont-Armistead/Claremont, Armistead - 1.jpg",
                "Clifton-Berea/Clifton, Berea - 2.jpg",
                "Cross-Country-Cheswolde/Cross-Country, Cheswolde - 1.jpg",
                "Dickeyville-Franklintown/Dickeyville, Franklintown - 4.jpg",
                "Dorchester-Ashburton/Dorchester, Ashburton - 1.jpg",
                "Downtown-SetonHIll/Downtown, Seton Hill - 5.jpg",
                "EdmondsonVillage/Edmondson Village - 3.jpg",
                "FellsPoint/Fells Point - 2.jpg",
                "ForestPark-Walbrook/Forest Park, Walbrook - 2.jpg",
                "Glen-Falstaff/Glen, Fallstaff - 4.jpg",
                "GreaterCharlesVillage-Barclay/Greater Charles Village, Barclay - 4.jpg",
                "GreaterGovans/Greater Govans - 4.jpg",
                "GreaterMondawmin/Greater Mondawmin - 2.jpg",
                "GreaterRolandPark-PoplarHill/Greater Roland Park, Poplar Hill - 4.jpg",
                "GreaterRosemont/Greater Rosemont - 4.jpg",
                "GreenmountEast/Greenmount East - 2.jpg",
                "Hamilton/Hamilton - 3.jpg",
                "HarborEast-LittleItaly/Harbor East, Little Italy - 2.jpg",
                "Harford-Echodale/Harford, Echodale - 1.jpg",
                "Highlandtown/Highlandtown - 3.jpg",
                "HowardPark-WestArlington/Howard Park, West Arlington - 3.jpg",
                "InnerHarbor-FederalHill/Inner Harbor, Federal Hill - 1.jpg",
                "Lauraville/Lauraville - 4.jpg",
                "LochRaven/Loch Raven - 4.jpg",
                "Madison-EastEnd/Madison, East End - 2.jpg",
                "Medfield-Hampden-Woodberry-Remington/Medfield, Hampden, Woodberry, Remington - 1.jpg",
                "Midtown/Midtown - 4.jpg",
                "Midway-Coldstream/Midway, Coldstream - 2.jpg",
                "MorellPark-Violetville/Morrell Park, Violetville - 4.jpg",
                "MountWashington-Coldspring/Mount Washington, Coldspring - 1.jpg",
                "NorthBaltimore-Guilford-Homeland/North, Baltimore Guilford, Homeland - 1.jpg",
                "Northwood/Northwood - 3.jpg",
                "Oldtown-MiddleEast/Oldtown, Middle East - 2.jpg",
                "Orangeville-EastHighlandtown/Orangeville, East Highlandtown - 2.jpg",
                "ParkHeights/Park Heights - 1.jpg",
                "PattersonParkNorth&East/PPatterson Park North & East - 3.jpg",
                "PennNorth-ReservoirHill/Penn North, Reservoir Hill - 4.jpg",
                "Pimlico-Arlington-Hilltop/Pimlico, Arlington, Hilltop - 4.jpg",
                "Poppleton-TheTerraces-HollinsMark/Poppleton, The Terraces, Hollins Market - 4.jpg",
                "SandtownWinchester-HarlemPark/Sandtown-Winchester, Harlem Park - 3.jpg",
                "SouthBaltimore/South Baltimore - 2.jpg",
                "Southeastern/Southeastern - 4.jpg",
                "SouthernParkHeights/Southwest Baltimore - 3.jpg",
                "TheWaverlies/The Waverlies - 1.jpg",
                "Upton-DruidHeights/Upton, Druid Heights - 2.jpg",
                "WashingtonVillage-Pigtown/Washington Village, Pigtown - 1.jpg",
                "Westport-MountWinans-Lakeland/Westport, Mount Winans, Lakeland - 5.jpg"
               ];

  var slide = slides[Math.floor(Math.random() * slides.length)];
  var $active = $('#slideshow .active');
  var $next = ($('#slideshow .active').next().length > 0) ? $('#slideshow .active').next() : $('#slideshow img:first');
  $next.attr('src', 'images/' + slide);
  $next.css('z-index', 2);
  $active.fadeOut(1500, function(){
    $active.css('z-index', 1).show().removeClass('active');
    $next.css('z-index', 3).addClass('active');
  });
}
