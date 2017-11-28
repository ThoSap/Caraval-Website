var $target = $(".section_wrapper");

inView(".section").on("enter", function(el){
	var color = $(el).attr("section-background-color");
	$target.css("background-color", color);
});

// TODO when FAB enters/exits .section_wrapper viewport, enable/disable FAB
/*inView($target).on("enter", function(el){

});*/

var slideIndexCharacters = 1;
var slideIndexReviews = 1;
showDivs(slideIndexCharacters, "characters");
showDivs(slideIndexReviews, "reviews");

function plusDivs(n, type)
{
	switch(type)
	{
		case "characters":
			showDivs(slideIndexCharacters += n, type);
			break;
			
		case "reviews":
			showDivs(slideIndexReviews += n, type);
			break;
	}
}

function showDivs(n, type)
{
	var x;
	var slideIndex;
	
	switch(type)
	{
		case "characters":
			x = document.getElementsByClassName("characterSlides");
			slideIndex = slideIndexCharacters;
			break;
			
		case "reviews":
			x = document.getElementsByClassName("reviewSlides");
			slideIndex = slideIndexReviews;
			break;
	}
	
	var indexChanged = false;
	
	if (n > x.length)
	{
		slideIndex = 1
		indexChanged = true;
	}    
	if (n < 1)
	{
		slideIndex = x.length
		indexChanged = true;
	}
	
	for (var i = 0; i < x.length; i++)
	{
		x[i].style.display = "none";
	}
	
	x[slideIndex - 1].style.display = "block";
	
	if (indexChanged)
	{
		switch (type)
		{
			case "characters":
				slideIndexCharacters = slideIndex;
				break;

			case "reviews":
				slideIndexReviews = slideIndex;
				break;
		}
	}	
}