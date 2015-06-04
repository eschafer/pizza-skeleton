(function() {
	"use strict";

	var $food = $("#food");
	var $thing = $("#thing");
	var $generateButton = $("#generate-button");
	var lastFood;
	var lastThing;

	var foods = ["carrot", "apple", "spaghetti", "banana", "soy sauce", "tomato", "cookie", "broccoli", "dumpling", "vinegar", "pumpkin", "cashew", "cherry", "butter", "garlic", "celery", "granola", "pepper", "english muffin", "marshmallow", "chocolate", "coffee", "cucumber", "coconut", "hamburger", "spearmint", "raspberry", "oatmeal", "molasses", "vanilla", "cheddar", "horseradish", "turkey", "lima bean", "olive", "green bean", "cauliflower", "jelly bean", "parsley", "walnut", "cabbage", "sausage", "cream cheese", "arugula", "mushroom", "ketchup", "cilantro", "sushi", "macaroni", "bacon", "noodle", "cereal", "yogurt", "candy", "muffin", "strawberry", "potato", "yam", "peanut", "raisin", "avocado"];
	var things = ["speakers", "pillow", "computer", "glasses", "checkbook", "magnet", "piano", "sofa", "thermometer", "telephone", "lotion", "mirror", "zipper", "shovel", "bottle", "newspaper", "television", "toilet", "cinder block", "seat belt", "sailboat", "buckle", "wagon", "money", "refrigerator", "oven", "balloon", "sandal", "blanket", "hanger", "wallet", "tweezers", "closet", "candle", "pencil", "tissue", "encyclopedia", "sidewalk", "slipper", "button", "toothpick", "bathtub", "nozzle", "driveway", "camera", "carpet", "tricycle", "cabinet", "diaper", "light bulb", "radiator", "pharmacy", "library", "theater", "garbage", "steamchip", "wordbank", "lifesaver", "kangaroo", "president", "plutonium", "skyscraper", "recycling bin", "barnacle", "briefcase", "bone", "police officer", "octopus", "doorknob", "asterisk", "mountain", "teakettle", "sand dollar", "telescope"];

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
		var food = getFood();
		var thing = getThing();

		while (food === lastFood) {
			console.log("food", food);
			food = getFood();
		}
		while (thing === lastThing) {
			console.log("thing", thing);
			thing = getThing();
		}

		$food.text(food);
		$thing.text(thing);
	}

	$generateButton.click(function() {
		generate();
	});

	generate();
})();
