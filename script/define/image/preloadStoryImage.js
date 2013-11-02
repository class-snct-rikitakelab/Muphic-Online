var preloadStoryImage = function() {
	// 物語作成画面の画像のプリロード
	core.preload(STORY_BACKGROUND._path);
	core.preload(STORY_CHANGEMUSICBUTTON._path);
	core.preload(STORY_PREVIEWFRAME._path);
	core.preload(STORY_HUMAN_ILLUSTBUTTON_OFF._path);
	core.preload(STORY_ANIMAL_ILLUSTBUTTON_OFF._path);
	core.preload(STORY_ITEM_ILLUSTBUTTON_OFF._path);
	core.preload(STORY_BACKGROUND_ILLUSTBUTTON_OFF._path);
	core.preload(STORY_BACKGROUND_ILLUSTBUTTON_ON._path);
	core.preload(STORY_REMOVEBUTTON_OFF._path);
	core.preload(STORY_REMOVEBUTTON_ON._path);

	core.preload(STORY_BACKGROUND_DARK._path);
	core.preload(STORY_CHANGEMUSICBUTTON_DARK._path);
	core.preload(STORY_HUMAN_ILLUSTBUTTON_OFF_DARK._path);
	core.preload(STORY_ANIMAL_ILLUSTBUTTON_OFF_DARK._path);
	core.preload(STORY_ITEM_ILLUSTBUTTON_OFF_DARK._path);
	core.preload(STORY_BACKGROUND_ILLUSTBUTTON_OFF_DARK._path);
	core.preload(STORY_BACKGROUND_ILLUSTBUTTON_ON_DARK._path);
	core.preload(STORY_REMOVEBUTTON_OFF_DARK._path);
	core.preload(STORY_REMOVEBUTTON_ON_DARK._path);

	core.preload(STORY_PREVIEWBACKGROUND_EMPTY._path);
	core.preload(STORY_PREVIEWBACKGROUND_FOREST1._path);
	core.preload(STORY_PREVIEWBACKGROUND_FOREST2._path);
	core.preload(STORY_PREVIEWBACKGROUND_RIVER1._path);
	core.preload(STORY_PREVIEWBACKGROUND_RIVER2._path);
	core.preload(STORY_PREVIEWBACKGROUND_TOWN1._path);
	core.preload(STORY_PREVIEWBACKGROUND_TOWN2._path);
	core.preload(STORY_PREVIEWBACKGROUND_HOUSE1._path);
	core.preload(STORY_PREVIEWBACKGROUND_HOUSE2._path);

	core.preload(STORY_PREVIEWWEATHER_EMPTY._path);
	core.preload(STORY_PREVIEWWEATHER_SUN._path);
	core.preload(STORY_PREVIEWWEATHER_CLOUD._path);
	core.preload(STORY_PREVIEWWEATHER_MOON._path);

	core.preload(STORY_PREVIEWOBJECT_MAN_FRONT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_MAN_FRONT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_MAN_FRONT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_MAN_FRONT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_MAN_RIGHT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_MAN_RIGHT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_MAN_RIGHT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_MAN_RIGHT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_MAN_LEFT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_MAN_LEFT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_MAN_LEFT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_MAN_LEFT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_MAN_BACK._path);
	core.preload(STORY_PREVIEWOBJECT_MAN_FRONT_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_MAN_BACK_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_MAN_RIGHT_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_MAN_LEFT_REMOVEFOCUS._path);

	core.preload(STORY_PREVIEWOBJECT_LADY_FRONT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_LADY_FRONT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_LADY_FRONT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_LADY_FRONT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_LADY_RIGHT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_LADY_RIGHT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_LADY_RIGHT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_LADY_RIGHT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_LADY_LEFT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_LADY_LEFT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_LADY_LEFT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_LADY_LEFT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_LADY_BACK._path);
	core.preload(STORY_PREVIEWOBJECT_LADY_FRONT_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_LADY_BACK_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_LADY_RIGHT_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_LADY_LEFT_REMOVEFOCUS._path);

	core.preload(STORY_PREVIEWOBJECT_BOY_FRONT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_BOY_FRONT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_BOY_FRONT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_BOY_FRONT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_BOY_RIGHT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_BOY_RIGHT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_BOY_RIGHT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_BOY_RIGHT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_BOY_LEFT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_BOY_LEFT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_BOY_LEFT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_BOY_LEFT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_BOY_BACK._path);
	core.preload(STORY_PREVIEWOBJECT_BOY_FRONT_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_BOY_BACK_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_BOY_RIGHT_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_BOY_LEFT_REMOVEFOCUS._path);

	core.preload(STORY_PREVIEWOBJECT_GIRL_FRONT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_GIRL_FRONT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_GIRL_FRONT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_GIRL_FRONT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_GIRL_RIGHT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_GIRL_RIGHT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_GIRL_RIGHT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_GIRL_RIGHT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_GIRL_LEFT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_GIRL_LEFT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_GIRL_LEFT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_GIRL_LEFT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_GIRL_BACK._path);
	core.preload(STORY_PREVIEWOBJECT_GIRL_FRONT_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_GIRL_BACK_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_GIRL_RIGHT_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_GIRL_LEFT_REMOVEFOCUS._path);

	core.preload(STORY_PREVIEWOBJECT_DOG_FRONT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_DOG_FRONT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_DOG_FRONT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_DOG_FRONT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_DOG_RIGHT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_DOG_RIGHT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_DOG_RIGHT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_DOG_RIGHT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_DOG_LEFT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_DOG_LEFT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_DOG_LEFT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_DOG_LEFT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_DOG_BACK._path);
	core.preload(STORY_PREVIEWOBJECT_DOG_FRONT_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_DOG_BACK_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_DOG_RIGHT_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_DOG_LEFT_REMOVEFOCUS._path);

	core.preload(STORY_PREVIEWOBJECT_BIRD_FRONT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_BIRD_FRONT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_BIRD_FRONT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_BIRD_FRONT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_BIRD_RIGHT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_BIRD_RIGHT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_BIRD_RIGHT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_BIRD_RIGHT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_BIRD_LEFT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_BIRD_LEFT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_BIRD_LEFT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_BIRD_LEFT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_BIRD_BACK._path);
	core.preload(STORY_PREVIEWOBJECT_BIRD_FRONT_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_BIRD_BACK_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_BIRD_RIGHT_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_BIRD_LEFT_REMOVEFOCUS._path);

	core.preload(STORY_PREVIEWOBJECT_BEAR_FRONT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_BEAR_FRONT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_BEAR_FRONT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_BEAR_FRONT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_BEAR_RIGHT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_BEAR_RIGHT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_BEAR_RIGHT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_BEAR_RIGHT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_BEAR_LEFT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_BEAR_LEFT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_BEAR_LEFT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_BEAR_LEFT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_BEAR_BACK._path);
	core.preload(STORY_PREVIEWOBJECT_BEAR_FRONT_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_BEAR_BACK_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_BEAR_RIGHT_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_BEAR_LEFT_REMOVEFOCUS._path);

	core.preload(STORY_PREVIEWOBJECT_TURTLE_FRONT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_TURTLE_FRONT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_TURTLE_FRONT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_TURTLE_FRONT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_TURTLE_RIGHT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_TURTLE_RIGHT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_TURTLE_RIGHT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_TURTLE_RIGHT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_TURTLE_LEFT_GLAD._path);
	core.preload(STORY_PREVIEWOBJECT_TURTLE_LEFT_ANGRY._path);
	core.preload(STORY_PREVIEWOBJECT_TURTLE_LEFT_SAD._path);
	core.preload(STORY_PREVIEWOBJECT_TURTLE_LEFT_ENJOY._path);
	core.preload(STORY_PREVIEWOBJECT_TURTLE_BACK._path);
	core.preload(STORY_PREVIEWOBJECT_TURTLE_FRONT_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_TURTLE_BACK_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_TURTLE_RIGHT_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_TURTLE_LEFT_REMOVEFOCUS._path);

	core.preload(STORY_PREVIEWTHUMBNAIL_APPLE._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_DOGFOOD._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_COFFEE._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_FISH._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_NUT._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_ONIGIRI._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_PATTY._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_PUDDING._path);

	core.preload(STORY_PREVIEWTHUMBNAIL_BAGBLACK._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_BAGRED._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_CAPBLUE._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_CAPGREEN._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_CAPPINK._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_CAPSUMMER._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_CAPYELLOW._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_RIBBON._path);

	core.preload(STORY_PREVIEWTHUMBNAIL_BOOKSHELF._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_CHAIRLEFT._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_CHAIRRIGHT._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_TABLE._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_CHEST._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_CLOCK._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_DRESSER._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_TELEVISION._path);

	core.preload(STORY_PREVIEWTHUMBNAIL_BEETLE._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_RABBITDOLL._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_BUTTERFLYNET._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_INSECTCAGE._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_TRUMPET._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_CELLPHONE._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_SOCCERBALL._path);
	core.preload(STORY_PREVIEWTHUMBNAIL_CAR._path);

	core.preload(STORY_PREVIEWOBJECT_APPLE._path);
	core.preload(STORY_PREVIEWOBJECT_DOGFOOD._path);
	core.preload(STORY_PREVIEWOBJECT_COFFEE._path);
	core.preload(STORY_PREVIEWOBJECT_FISH._path);
	core.preload(STORY_PREVIEWOBJECT_NUT._path);
	core.preload(STORY_PREVIEWOBJECT_ONIGIRI._path);
	core.preload(STORY_PREVIEWOBJECT_PATTY._path);
	core.preload(STORY_PREVIEWOBJECT_PUDDING._path);
	core.preload(STORY_PREVIEWOBJECT_APPLE_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_DOGFOOD_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_COFFEE_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_FISH_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_NUT_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_ONIGIRI_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_PATTY_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_PUDDING_REMOVEFOCUS._path);

	core.preload(STORY_PREVIEWOBJECT_BAGBLACK._path);
	core.preload(STORY_PREVIEWOBJECT_BAGRED._path);
	core.preload(STORY_PREVIEWOBJECT_CAPBLUE._path);
	core.preload(STORY_PREVIEWOBJECT_CAPGREEN._path);
	core.preload(STORY_PREVIEWOBJECT_CAPPINK._path);
	core.preload(STORY_PREVIEWOBJECT_CAPSUMMER._path);
	core.preload(STORY_PREVIEWOBJECT_CAPYELLOW._path);
	core.preload(STORY_PREVIEWOBJECT_RIBBON._path);
	core.preload(STORY_PREVIEWOBJECT_BAGBLACK_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_BAGRED_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_CAPBLUE_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_CAPGREEN_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_CAPPINK_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_CAPSUMMER_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_CAPYELLOW_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_RIBBON_REMOVEFOCUS._path);

	core.preload(STORY_PREVIEWOBJECT_BOOKSHELF._path);
	core.preload(STORY_PREVIEWOBJECT_CHAIRLEFT._path);
	core.preload(STORY_PREVIEWOBJECT_CHAIRRIGHT._path);
	core.preload(STORY_PREVIEWOBJECT_TABLE._path);
	core.preload(STORY_PREVIEWOBJECT_CHEST._path);
	core.preload(STORY_PREVIEWOBJECT_CLOCK._path);
	core.preload(STORY_PREVIEWOBJECT_DRESSER._path);
	core.preload(STORY_PREVIEWOBJECT_TELEVISION._path);
	core.preload(STORY_PREVIEWOBJECT_BOOKSHELF_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_CHAIRLEFT_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_CHAIRRIGHT_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_TABLE_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_CHEST_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_CLOCK_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_DRESSER_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_TELEVISION_REMOVEFOCUS._path);

	core.preload(STORY_PREVIEWOBJECT_BEETLE._path);
	core.preload(STORY_PREVIEWOBJECT_RABBITDOLL._path);
	core.preload(STORY_PREVIEWOBJECT_BUTTERFLYNET._path);
	core.preload(STORY_PREVIEWOBJECT_INSECTCAGE._path);
	core.preload(STORY_PREVIEWOBJECT_TRUMPET._path);
	core.preload(STORY_PREVIEWOBJECT_CELLPHONE._path);
	core.preload(STORY_PREVIEWOBJECT_SOCCERBALL._path);
	core.preload(STORY_PREVIEWOBJECT_CAR._path);
	core.preload(STORY_PREVIEWOBJECT_BEETLE_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_RABBITDOLL_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_BUTTERFLYNET_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_INSECTCAGE_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_TRUMPET_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_CELLPHONE_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_SOCCERBALL_REMOVEFOCUS._path);
	core.preload(STORY_PREVIEWOBJECT_CAR_REMOVEFOCUS._path);

	core.preload(STORY_PALETTE_1._path);
	core.preload(STORY_PALETTE_2._path);
	core.preload(STORY_PALETTECLOSEBUTTON._path);
	core.preload(STORY_PALETTEPROPERTY_MAN_OFF._path);
	core.preload(STORY_PALETTEPROPERTY_MAN_ON._path);
	core.preload(STORY_PALETTEPROPERTY_LADY_OFF._path);
	core.preload(STORY_PALETTEPROPERTY_LADY_ON._path);
	core.preload(STORY_PALETTEPROPERTY_BOY_OFF._path);
	core.preload(STORY_PALETTEPROPERTY_BOY_ON._path);
	core.preload(STORY_PALETTEPROPERTY_GIRL_OFF._path);
	core.preload(STORY_PALETTEPROPERTY_GIRL_ON._path);
	core.preload(STORY_PALETTEPROPERTY_DOG_OFF._path);
	core.preload(STORY_PALETTEPROPERTY_DOG_ON._path);
	core.preload(STORY_PALETTEPROPERTY_BIRD_OFF._path);
	core.preload(STORY_PALETTEPROPERTY_BIRD_ON._path);
	core.preload(STORY_PALETTEPROPERTY_BEAR_OFF._path);
	core.preload(STORY_PALETTEPROPERTY_BEAR_ON._path);
	core.preload(STORY_PALETTEPROPERTY_TURTLE_OFF._path);
	core.preload(STORY_PALETTEPROPERTY_TURTLE_ON._path);
}