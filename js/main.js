(function() {
	"use strict";

	var $food = $("#food");
	var $thing = $("#thing");
	var $generateButton = $("#generate-button");

	var foods = ["carrot", "apple", "spaghetti", "banana", "soy sauce", "tomato", "cookie", "broccoli", "dumpling", "vinegar", "pumpkin", "cashew", "cherry", "butter", "garlic", "celery", "granola", "pepper", "english muffin", "marshmallow", "chocolate", "coffee", "cucumber", "coconut", "hamburger", "spearmint", "raspberry", "oatmeal", "molasses", "vanilla", "cheddar", "horseradish", "turkey", "lima bean", "olive", "green bean", "cauliflower", "jelly bean", "parsley", "walnut", "cabbage", "sausage", "cream cheese", "arugula", "mushroom", "ketchup", "cilantro", "sushi", "macaroni", "bacon", "noodle", "cereal", "cheese", "yogurt", "candy", "muffin"];
	var things = ["speakers", "pillow", "computer", "glasses", "checkbook", "magnet", "piano", "sofa", "thermometer", "telephone", "lotion", "mirror", "zipper", "shovel", "bottle", "newspaper", "television", "toilet", "cinder block", "seat belt", "sailboat", "buckle", "wagon", "money", "refrigerator", "oven", "balloon", "sandal", "blanket", "hanger", "wallet", "tweezers", "closet", "candle", "pencil", "tissue", "encyclopedia", "sidewalk", "slipper", "button", "toothpick", "bathtub", "nozzle", "driveway", "camera", "carpet", "tricycle", "cabinet", "diaper", "light bulb", "radiator", "pharmacy", "library", "theater"];

	function getRandomInteger(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function getFood() {
		var i = getRandomInteger(0, foods.length - 1);
		return foods[i];
	}

	function getThing() {
		var i = getRandomInteger(0, things.length - 1);
		return things[i];
	}

	function generate() {
		$food.text(getFood());
		$thing.text(getThing());
	}

	$generateButton.click(function() {
		generate();
	});

	generate();
})();
