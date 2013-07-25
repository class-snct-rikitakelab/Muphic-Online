// 以下のハッシュテーブルはすべてグローバル変数として利用可能

var objectsInformation = new Array();

// こんだけ連想配列の中にキーとバリュー設定するぐらいならクラス化しちゃった方がいい気がした
var createStoryDataHash = function() {
	objectsInformation["manFrontGlad"]		= {image : MAN_FRONT_GLAD,		width : MAN_FRONT_WIDTH,	height : MAN_FRONT_HEIGHT, type : "human"};
	objectsInformation["manFrontAngry"]		= {image : MAN_FRONT_ANGRY,		width : MAN_FRONT_WIDTH,	height : MAN_FRONT_HEIGHT, type : "human"};
	objectsInformation["manFrontSad"]		= {image : MAN_FRONT_SAD,		width : MAN_FRONT_WIDTH,	height : MAN_FRONT_HEIGHT, type : "human"};
	objectsInformation["manFrontEnjoy"]		= {image : MAN_FRONT_ENJOY,		width : MAN_FRONT_WIDTH,	height : MAN_FRONT_HEIGHT, type : "human"};

	objectsInformation["manRightGlad"]		= {image : MAN_RIGHT_GLAD,		width : MAN_RIGHT_WIDTH,	height : MAN_RIGHT_HEIGHT, type : "human"};
	objectsInformation["manRightAngry"]		= {image : MAN_RIGHT_ANGRY,		width : MAN_RIGHT_WIDTH,	height : MAN_RIGHT_HEIGHT, type : "human"};
	objectsInformation["manRightSad"]		= {image : MAN_RIGHT_SAD,		width : MAN_RIGHT_WIDTH,	height : MAN_RIGHT_HEIGHT, type : "human"};
	objectsInformation["manRightEnjoy"]		= {image : MAN_RIGHT_ENJOY,		width : MAN_RIGHT_WIDTH,	height : MAN_RIGHT_HEIGHT, type : "human"};

	objectsInformation["manLeftGlad"]		= {image : MAN_LEFT_GLAD,		width : MAN_LEFT_WIDTH,	height : MAN_LEFT_HEIGHT, type : "human"};
	objectsInformation["manLeftAngry"]		= {image : MAN_LEFT_ANGRY,		width : MAN_LEFT_WIDTH,	height : MAN_LEFT_HEIGHT, type : "human"};
	objectsInformation["manLeftSad"]		= {image : MAN_LEFT_SAD,		width : MAN_LEFT_WIDTH,	height : MAN_LEFT_HEIGHT, type : "human"};
	objectsInformation["manLeftEnjoy"]		= {image : MAN_LEFT_ENJOY,		width : MAN_LEFT_WIDTH,	height : MAN_LEFT_HEIGHT, type : "human"};

	objectsInformation["manBack"]			= {image : MAN_BACK,			width : MAN_BACK_WIDTH,	height : MAN_BACK_HEIGHT, type : "human"};

	objectsInformation["ladyFrontGlad"]		= {image : LADY_FRONT_GLAD,		width : LADY_FRONT_WIDTH,	height : LADY_FRONT_HEIGHT, type : "human"};
	objectsInformation["ladyFrontAngry"]	= {image : LADY_FRONT_ANGRY,	width : LADY_FRONT_WIDTH,	height : LADY_FRONT_HEIGHT, type : "human"};
	objectsInformation["ladyFrontSad"]		= {image : LADY_FRONT_SAD,		width : LADY_FRONT_WIDTH,	height : LADY_FRONT_HEIGHT, type : "human"};
	objectsInformation["ladyFrontEnjoy"]	= {image : LADY_FRONT_ENJOY,	width : LADY_FRONT_WIDTH,	height : LADY_FRONT_HEIGHT, type : "human"};

	objectsInformation["ladyRightGlad"]		= {image : LADY_RIGHT_GLAD,		width : LADY_RIGHT_WIDTH,	height : LADY_RIGHT_HEIGHT, type : "human"};
	objectsInformation["ladyRightAngry"]	= {image : LADY_RIGHT_ANGRY,	width : LADY_RIGHT_WIDTH,	height : LADY_RIGHT_HEIGHT, type : "human"};
	objectsInformation["ladyRightSad"]		= {image : LADY_RIGHT_SAD,		width : LADY_RIGHT_WIDTH,	height : LADY_RIGHT_HEIGHT, type : "human"};
	objectsInformation["ladyRightEnjoy"]	= {image : LADY_RIGHT_ENJOY,	width : LADY_RIGHT_WIDTH,	height : LADY_RIGHT_HEIGHT, type : "human"};

	objectsInformation["ladyLeftGlad"]		= {image : LADY_LEFT_GLAD,		width : LADY_LEFT_WIDTH,	height : LADY_LEFT_HEIGHT, type : "human"};
	objectsInformation["ladyLeftAngry"]		= {image : LADY_LEFT_ANGRY,		width : LADY_LEFT_WIDTH,	height : LADY_LEFT_HEIGHT, type : "human"};
	objectsInformation["ladyLeftSad"]		= {image : LADY_LEFT_SAD,		width : LADY_LEFT_WIDTH,	height : LADY_LEFT_HEIGHT, type : "human"};
	objectsInformation["ladyLeftEnjoy"]		= {image : LADY_LEFT_ENJOY,		width : LADY_LEFT_WIDTH,	height : LADY_LEFT_HEIGHT, type : "human"};

	objectsInformation["ladyBack"]			= {image : LADY_BACK,			width : LADY_BACK_WIDTH,	height : LADY_BACK_HEIGHT, type : "human"};

	objectsInformation["boyFrontGlad"]		= {image : BOY_FRONT_GLAD,		width : BOY_FRONT_WIDTH,	height : BOY_FRONT_HEIGHT, type : "human"};
	objectsInformation["boyFrontAngry"]		= {image : BOY_FRONT_ANGRY,		width : BOY_FRONT_WIDTH,	height : BOY_FRONT_HEIGHT, type : "human"};
	objectsInformation["boyFrontSad"]		= {image : BOY_FRONT_SAD,		width : BOY_FRONT_WIDTH,	height : BOY_FRONT_HEIGHT, type : "human"};
	objectsInformation["boyFrontEnjoy"]		= {image : BOY_FRONT_ENJOY,		width : BOY_FRONT_WIDTH,	height : BOY_FRONT_HEIGHT, type : "human"};

	objectsInformation["boyRightGlad"]		= {image : BOY_RIGHT_GLAD,		width : BOY_RIGHT_WIDTH,	height : BOY_RIGHT_HEIGHT, type : "human"};
	objectsInformation["boyRightAngry"]		= {image : BOY_RIGHT_ANGRY,		width : BOY_RIGHT_WIDTH,	height : BOY_RIGHT_HEIGHT, type : "human"};
	objectsInformation["boyRightSad"]		= {image : BOY_RIGHT_SAD,		width : BOY_RIGHT_WIDTH,	height : BOY_RIGHT_HEIGHT, type : "human"};
	objectsInformation["boyRightEnjoy"]		= {image : BOY_RIGHT_ENJOY,		width : BOY_RIGHT_WIDTH,	height : BOY_RIGHT_HEIGHT, type : "human"};

	objectsInformation["boyLeftGlad"]		= {image : BOY_LEFT_GLAD,		width : BOY_LEFT_WIDTH,		height : BOY_LEFT_HEIGHT, type : "human"};
	objectsInformation["boyLeftAngry"]		= {image : BOY_LEFT_ANGRY,		width : BOY_LEFT_WIDTH,		height : BOY_LEFT_HEIGHT, type : "human"};
	objectsInformation["boyLeftSad"]		= {image : BOY_LEFT_SAD,		width : BOY_LEFT_WIDTH,		height : BOY_LEFT_HEIGHT, type : "human"};
	objectsInformation["boyLeftEnjoy"]		= {image : BOY_LEFT_ENJOY,		width : BOY_LEFT_WIDTH,		height : BOY_LEFT_HEIGHT, type : "human"};

	objectsInformation["boyBack"]			= {image : BOY_BACK,			width : BOY_BACK_WIDTH,		height : BOY_BACK_HEIGHT, type : "human"};

	objectsInformation["girlFrontGlad"]		= {image : GIRL_FRONT_GLAD,		width : GIRL_FRONT_WIDTH,	height : GIRL_FRONT_HEIGHT, type : "human"};
	objectsInformation["girlFrontAngry"]	= {image : GIRL_FRONT_ANGRY,	width : GIRL_FRONT_WIDTH,	height : GIRL_FRONT_HEIGHT, type : "human"};
	objectsInformation["girlFrontSad"]		= {image : GIRL_FRONT_SAD,		width : GIRL_FRONT_WIDTH,	height : GIRL_FRONT_HEIGHT, type : "human"};
	objectsInformation["girlFrontEnjoy"]	= {image : GIRL_FRONT_ENJOY,	width : GIRL_FRONT_WIDTH,	height : GIRL_FRONT_HEIGHT, type : "human"};

	objectsInformation["girlRightGlad"]		= {image : GIRL_RIGHT_GLAD,		width : GIRL_RIGHT_WIDTH,	height : GIRL_RIGHT_HEIGHT, type : "human"};
	objectsInformation["girlRightAngry"]	= {image : GIRL_RIGHT_ANGRY,	width : GIRL_RIGHT_WIDTH,	height : GIRL_RIGHT_HEIGHT, type : "human"};
	objectsInformation["girlRightSad"]		= {image : GIRL_RIGHT_SAD,		width : GIRL_RIGHT_WIDTH,	height : GIRL_RIGHT_HEIGHT, type : "human"};
	objectsInformation["girlRightEnjoy"]	= {image : GIRL_RIGHT_ENJOY,	width : GIRL_RIGHT_WIDTH,	height : GIRL_RIGHT_HEIGHT, type : "human"};

	objectsInformation["girlLeftGlad"]		= {image : GIRL_LEFT_GLAD,		width : GIRL_LEFT_WIDTH,	height : GIRL_LEFT_HEIGHT, type : "human"};
	objectsInformation["girlLeftAngry"]		= {image : GIRL_LEFT_ANGRY,		width : GIRL_LEFT_WIDTH,	height : GIRL_LEFT_HEIGHT, type : "human"};
	objectsInformation["girlLeftSad"]		= {image : GIRL_LEFT_SAD,		width : GIRL_LEFT_WIDTH,	height : GIRL_LEFT_HEIGHT, type : "human"};
	objectsInformation["girlLeftEnjoy"]		= {image : GIRL_LEFT_ENJOY,		width : GIRL_LEFT_WIDTH,	height : GIRL_LEFT_HEIGHT, type : "human"};

	objectsInformation["girlBack"]			= {image : GIRL_BACK,			width : GIRL_BACK_WIDTH,	height : GIRL_BACK_HEIGHT, type : "human"};

	objectsInformation["dogFrontGlad"]		= {image : DOG_FRONT_GLAD,		width : DOG_FRONT_WIDTH,	height : DOG_FRONT_HEIGHT, type : "animal"};
	objectsInformation["dogFrontAngry"]		= {image : DOG_FRONT_ANGRY,		width : DOG_FRONT_WIDTH,	height : DOG_FRONT_HEIGHT, type : "animal"};
	objectsInformation["dogFrontSad"]		= {image : DOG_FRONT_SAD,		width : DOG_FRONT_WIDTH,	height : DOG_FRONT_HEIGHT, type : "animal"};
	objectsInformation["dogFrontEnjoy"]		= {image : DOG_FRONT_ENJOY,		width : DOG_FRONT_WIDTH,	height : DOG_FRONT_HEIGHT, type : "animal"};

	objectsInformation["dogRightGlad"]		= {image : DOG_RIGHT_GLAD,		width : DOG_RIGHT_WIDTH,	height : DOG_RIGHT_HEIGHT, type : "animal"};
	objectsInformation["dogRightAngry"]		= {image : DOG_RIGHT_ANGRY,		width : DOG_RIGHT_WIDTH,	height : DOG_RIGHT_HEIGHT, type : "animal"};
	objectsInformation["dogRightSad"]		= {image : DOG_RIGHT_SAD,		width : DOG_RIGHT_WIDTH,	height : DOG_RIGHT_HEIGHT, type : "animal"};
	objectsInformation["dogRightEnjoy"]		= {image : DOG_RIGHT_ENJOY,		width : DOG_RIGHT_WIDTH,	height : DOG_RIGHT_HEIGHT, type : "animal"};

	objectsInformation["dogLeftGlad"]		= {image : DOG_LEFT_GLAD,		width : DOG_LEFT_WIDTH,		height : DOG_LEFT_HEIGHT, type : "animal"};
	objectsInformation["dogLeftAngry"]		= {image : DOG_LEFT_ANGRY,		width : DOG_LEFT_WIDTH,		height : DOG_LEFT_HEIGHT, type : "animal"};
	objectsInformation["dogLeftSad"]		= {image : DOG_LEFT_SAD,		width : DOG_LEFT_WIDTH,		height : DOG_LEFT_HEIGHT, type : "animal"};
	objectsInformation["dogLeftEnjoy"]		= {image : DOG_LEFT_ENJOY,		width : DOG_LEFT_WIDTH,		height : DOG_LEFT_HEIGHT, type : "animal"};

	objectsInformation["dogBack"]			= {image : DOG_BACK,			width : DOG_BACK_WIDTH,		height : DOG_BACK_HEIGHT, type : "animal"};

	objectsInformation["birdFrontGlad"]		= {image : BIRD_FRONT_GLAD,		width : BIRD_FRONT_WIDTH,	height : BIRD_FRONT_HEIGHT, type : "animal"};
	objectsInformation["birdFrontAngry"]	= {image : BIRD_FRONT_ANGRY,	width : BIRD_FRONT_WIDTH,	height : BIRD_FRONT_HEIGHT, type : "animal"};
	objectsInformation["birdFrontSad"]		= {image : BIRD_FRONT_SAD,		width : BIRD_FRONT_WIDTH,	height : BIRD_FRONT_HEIGHT, type : "animal"};
	objectsInformation["birdFrontEnjoy"]	= {image : BIRD_FRONT_ENJOY,	width : BIRD_FRONT_WIDTH,	height : BIRD_FRONT_HEIGHT, type : "animal"};

	objectsInformation["birdRightGlad"]		= {image : BIRD_RIGHT_GLAD,		width : BIRD_RIGHT_WIDTH,	height : BIRD_RIGHT_HEIGHT, type : "animal"};
	objectsInformation["birdRightAngry"]	= {image : BIRD_RIGHT_ANGRY,	width : BIRD_RIGHT_WIDTH,	height : BIRD_RIGHT_HEIGHT, type : "animal"};
	objectsInformation["birdRightSad"]		= {image : BIRD_RIGHT_SAD,		width : BIRD_RIGHT_WIDTH,	height : BIRD_RIGHT_HEIGHT, type : "animal"};
	objectsInformation["birdRightEnjoy"]	= {image : BIRD_RIGHT_ENJOY,	width : BIRD_RIGHT_WIDTH,	height : BIRD_RIGHT_HEIGHT, type : "animal"};

	objectsInformation["birdLeftGlad"]		= {image : BIRD_LEFT_GLAD,		width : BIRD_LEFT_WIDTH,	height : BIRD_LEFT_HEIGHT, type : "animal"};
	objectsInformation["birdLeftAngry"]		= {image : BIRD_LEFT_ANGRY,		width : BIRD_LEFT_WIDTH,	height : BIRD_LEFT_HEIGHT, type : "animal"};
	objectsInformation["birdLeftSad"]		= {image : BIRD_LEFT_SAD,		width : BIRD_LEFT_WIDTH,	height : BIRD_LEFT_HEIGHT, type : "animal"};
	objectsInformation["birdLeftEnjoy"]		= {image : BIRD_LEFT_ENJOY,		width : BIRD_LEFT_WIDTH,	height : BIRD_LEFT_HEIGHT, type : "animal"};

	objectsInformation["birdBack"]			= {image : BIRD_BACK,			width : BIRD_BACK_WIDTH,	height : BIRD_BACK_HEIGHT, type : "animal"};

	objectsInformation["bearFrontGlad"]		= {image : BEAR_FRONT_GLAD,		width : BEAR_FRONT_WIDTH,	height : BEAR_FRONT_HEIGHT, type : "animal"};
	objectsInformation["bearFrontAngry"]	= {image : BEAR_FRONT_ANGRY,	width : BEAR_FRONT_WIDTH,	height : BEAR_FRONT_HEIGHT, type : "animal"};
	objectsInformation["bearFrontSad"]		= {image : BEAR_FRONT_SAD,		width : BEAR_FRONT_WIDTH,	height : BEAR_FRONT_HEIGHT, type : "animal"};
	objectsInformation["bearFrontEnjoy"]	= {image : BEAR_FRONT_ENJOY,	width : BEAR_FRONT_WIDTH,	height : BEAR_FRONT_HEIGHT, type : "animal"};

	objectsInformation["bearRightGlad"]		= {image : BEAR_RIGHT_GLAD,		width : BEAR_RIGHT_WIDTH,	height : BEAR_RIGHT_HEIGHT, type : "animal"};
	objectsInformation["bearRightAngry"]	= {image : BEAR_RIGHT_ANGRY,	width : BEAR_RIGHT_WIDTH,	height : BEAR_RIGHT_HEIGHT, type : "animal"};
	objectsInformation["bearRightSad"]		= {image : BEAR_RIGHT_SAD,		width : BEAR_RIGHT_WIDTH,	height : BEAR_RIGHT_HEIGHT, type : "animal"};
	objectsInformation["bearRightEnjoy"]	= {image : BEAR_RIGHT_ENJOY,	width : BEAR_RIGHT_WIDTH,	height : BEAR_RIGHT_HEIGHT, type : "animal"};

	objectsInformation["bearLeftGlad"]		= {image : BEAR_LEFT_GLAD,		width : BEAR_LEFT_WIDTH,	height : BEAR_LEFT_HEIGHT, type : "animal"};
	objectsInformation["bearLeftAngry"]		= {image : BEAR_LEFT_ANGRY,		width : BEAR_LEFT_WIDTH,	height : BEAR_LEFT_HEIGHT, type : "animal"};
	objectsInformation["bearLeftSad"]		= {image : BEAR_LEFT_SAD,		width : BEAR_LEFT_WIDTH,	height : BEAR_LEFT_HEIGHT, type : "animal"};
	objectsInformation["bearLeftEnjoy"]		= {image : BEAR_LEFT_ENJOY,		width : BEAR_LEFT_WIDTH,	height : BEAR_LEFT_HEIGHT, type : "animal"};

	objectsInformation["bearBack"]			= {image : BEAR_BACK,			width : BEAR_BACK_WIDTH,	height : BEAR_BACK_HEIGHT, type : "animal"};

	objectsInformation["turtleFrontGlad"]	= {image : TURTLE_FRONT_GLAD,	width : TURTLE_FRONT_WIDTH,	height : TURTLE_FRONT_HEIGHT, type : "animal"};
	objectsInformation["turtleFrontAngry"]	= {image : TURTLE_FRONT_ANGRY,	width : TURTLE_FRONT_WIDTH,	height : TURTLE_FRONT_HEIGHT, type : "animal"};
	objectsInformation["turtleFrontSad"]	= {image : TURTLE_FRONT_SAD,	width : TURTLE_FRONT_WIDTH,	height : TURTLE_FRONT_HEIGHT, type : "animal"};
	objectsInformation["turtleFrontEnjoy"]	= {image : TURTLE_FRONT_ENJOY,	width : TURTLE_FRONT_WIDTH,	height : TURTLE_FRONT_HEIGHT, type : "animal"};

	objectsInformation["turtleRightGlad"]	= {image : TURTLE_RIGHT_GLAD,	width : TURTLE_RIGHT_WIDTH,	height : TURTLE_RIGHT_HEIGHT, type : "animal"};
	objectsInformation["turtleRightAngry"]	= {image : TURTLE_RIGHT_ANGRY,	width : TURTLE_RIGHT_WIDTH,	height : TURTLE_RIGHT_HEIGHT, type : "animal"};
	objectsInformation["turtleRightSad"]	= {image : TURTLE_RIGHT_SAD,	width : TURTLE_RIGHT_WIDTH,	height : TURTLE_RIGHT_HEIGHT, type : "animal"};
	objectsInformation["turtleRightEnjoy"]	= {image : TURTLE_RIGHT_ENJOY,	width : TURTLE_RIGHT_WIDTH,	height : TURTLE_RIGHT_HEIGHT, type : "animal"};

	objectsInformation["turtleLeftGlad"]	= {image : TURTLE_LEFT_GLAD,	width : TURTLE_LEFT_WIDTH,	height : TURTLE_LEFT_HEIGHT, type : "animal"};
	objectsInformation["turtleLeftAngry"]	= {image : TURTLE_LEFT_ANGRY,	width : TURTLE_LEFT_WIDTH,	height : TURTLE_LEFT_HEIGHT, type : "animal"};
	objectsInformation["turtleLeftSad"]		= {image : TURTLE_LEFT_SAD,		width : TURTLE_LEFT_WIDTH,	height : TURTLE_LEFT_HEIGHT, type : "animal"};
	objectsInformation["turtleLeftEnjoy"]	= {image : TURTLE_LEFT_ENJOY,	width : TURTLE_LEFT_WIDTH,	height : TURTLE_LEFT_HEIGHT, type : "animal"};

	objectsInformation["turtleBack"]		= {image : TURTLE_BACK,			width : TURTLE_BACK_WIDTH,	height : TURTLE_BACK_HEIGHT, type : "animal"};
}