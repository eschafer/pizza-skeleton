(function() {
	"use strict";

	var $food = $("#food");
	var $thing = $("#thing");
	var $generateButton = $("#generate-button");

	var foods = [
		{word: "carrot", syllables: 2},
		{word: "apple", syllables: 2},
		{word: "spaghetti", syllables: 3},
		{word: "banana", syllables: 3},
		{word: "soy sauce", syllables: 2},
		{word: "tomato", syllables: 3},
		{word: "cookie", syllables: 2},
		{word: "broccoli", syllables: 2},
		{word: "dumpling", syllables: 2},
		{word: "vinegar", syllables: 3},
		{word: "pumpkin", syllables: 2},
		{word: "cashew", syllables: 2},
		{word: "cherry", syllables: 2},
		{word: "butter", syllables: 2},
		{word: "garlic", syllables: 2},
		{word: "celery", syllables: 3},
		{word: "granola", syllables: 3},
		{word: "pepper", syllables: 2},
		{word: "english muffin", syllables: 4},
		{word: "marshmallow", syllables: 3},
		{word: "chocolate", syllables: 2},
		{word: "coffee", syllables: 2},
		{word: "cucumber", syllables: 3},
		{word: "coconut", syllables: 3},
		{word: "hamburger", syllables: 3},
		{word: "spearmint", syllables: 2},
		{word: "raspberry", syllables: 3},
		{word: "oatmeal", syllables: 2},
		{word: "molasses", syllables: 3},
		{word: "vanilla", syllables: 3},
		{word: "cheddar", syllables: 2},
		{word: "horseradish", syllables: 3},
		{word: "turkey", syllables: 2},
		{word: "lima bean", syllables: 3},
		{word: "olive", syllables: 2},
		{word: "green bean", syllables: 2},
		{word: "cauliflower", syllables: 4},
		{word: "jelly bean", syllables: 3},
		{word: "parsley", syllables: 2},
		{word: "walnut", syllables: 2},
		{word: "cabbage", syllables: 2},
		{word: "sausage", syllables: 2},
		{word: "cream cheese", syllables: 2},
		{word: "arugula", syllables: 4},
		{word: "mushroom", syllables: 2},
		{word: "ketchup", syllables: 2},
		{word: "cilantro", syllables: 3},
		{word: "sushi", syllables: 2},
		{word: "macaroni", syllables: 4},
		{word: "bacon", syllables: 2},
		{word: "noodle", syllables: 2},
		{word: "cereal", syllables: 3},
		{word: "yogurt", syllables: 2},
		{word: "candy", syllables: 2},
		{word: "muffin", syllables: 2},
		{word: "strawberry", syllables: 3},
		{word: "potato", syllables: 3},
		{word: "yam", syllables: 1}
	];

	var things = [
		{word: "speakers", syllables: 2},
		{word: "pillow", syllables: 2},
		{word: "computer", syllables: 3},
		{word: "glasses", syllables: 2},
		{word: "checkbook", syllables: 2},
		{word: "magnet", syllables: 2},
		{word: "piano", syllables: 3},
		{word: "sofa", syllables: 2},
		{word: "thermometer", syllables: 4},
		{word: "telephone", syllables: 3},
		{word: "lotion", syllables: 2},
		{word: "mirror", syllables: 2},
		{word: "zipper", syllables: 2},
		{word: "shovel", syllables: 2},
		{word: "bottle", syllables: 2},
		{word: "newspaper", syllables: 3},
		{word: "television", syllables: 4},
		{word: "toilet", syllables: 2},
		{word: "cinder block", syllables: 3},
		{word: "seat belt", syllables: 2},
		{word: "sailboat", syllables: 2},
		{word: "buckle", syllables: 2},
		{word: "wagon", syllables: 2},
		{word: "money", syllables: 2},
		{word: "refrigerator", syllables: 5},
		{word: "oven", syllables: 2},
		{word: "balloon", syllables: 2},
		{word: "sandal", syllables: 2},
		{word: "blanket", syllables: 2},
		{word: "hanger", syllables: 2},
		{word: "wallet", syllables: 2},
		{word: "tweezers", syllables: 2},
		{word: "closet", syllables: 2},
		{word: "candle", syllables: 2},
		{word: "pencil", syllables: 2},
		{word: "tissue", syllables: 2},
		{word: "encyclopedia", syllables: 6},
		{word: "sidewalk", syllables: 2},
		{word: "slipper", syllables: 2},
		{word: "button", syllables: 2},
		{word: "toothpick", syllables: 2},
		{word: "bathtub", syllables: 2},
		{word: "nozzle", syllables: 2},
		{word: "driveway", syllables: 2},
		{word: "camera", syllables: 2},
		{word: "carpet", syllables: 2},
		{word: "tricycle", syllables: 3},
		{word: "cabinet", syllables: 2},
		{word: "diaper", syllables: 2},
		{word: "light bulb", syllables: 2},
		{word: "radiator", syllables: 4},
		{word: "pharmacy", syllables: 3},
		{word: "library", syllables: 3},
		{word: "theater", syllables: 3},
		{word: "garbage", syllables: 2},
		{word: "steamchip", syllables: 2},
		{word: "wordbank", syllables: 2},
		{word: "lifesaver", syllables: 2},
		{word: "kangaroo", syllables: 3},
		{word: "president", syllables: 3},
		{word: "mouseketeer", syllables: 3},
		{word: "plutonium", syllables: 4},
		{word: "skyscraper", syllables: 3},
		{word: "recycling bin", syllables: 4},
		{word: "barnacle", syllables: 3},
		{word: "briefcase", syllables: 2},
		{word: "bone", syllables: 1}
	];

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

		while (food.syllables === thing.syllables) {
			thing = getThing();
		}

		$food.text(food.word);
		$thing.text(thing.word);
	}

	$generateButton.click(function() {
		generate();
	});

	generate();
})();
