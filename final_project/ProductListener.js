// Generated from Product.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ProductParser.
function ProductListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ProductListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ProductListener.prototype.constructor = ProductListener;

// Enter a parse tree produced by ProductParser#file.
ProductListener.prototype.enterFile = function(ctx) {
};

// Exit a parse tree produced by ProductParser#file.
ProductListener.prototype.exitFile = function(ctx) {
};


// Enter a parse tree produced by ProductParser#hdr.
ProductListener.prototype.enterHdr = function(ctx) {
};

// Exit a parse tree produced by ProductParser#hdr.
ProductListener.prototype.exitHdr = function(ctx) {
};


// Enter a parse tree produced by ProductParser#row.
ProductListener.prototype.enterRow = function(ctx) {
};

// Exit a parse tree produced by ProductParser#row.
ProductListener.prototype.exitRow = function(ctx) {
};


// Enter a parse tree produced by ProductParser#code.
ProductListener.prototype.enterCode = function(ctx) {
};

// Exit a parse tree produced by ProductParser#code.
ProductListener.prototype.exitCode = function(ctx) {
};


// Enter a parse tree produced by ProductParser#url.
ProductListener.prototype.enterUrl = function(ctx) {
};

// Exit a parse tree produced by ProductParser#url.
ProductListener.prototype.exitUrl = function(ctx) {
};


// Enter a parse tree produced by ProductParser#creator.
ProductListener.prototype.enterCreator = function(ctx) {
};

// Exit a parse tree produced by ProductParser#creator.
ProductListener.prototype.exitCreator = function(ctx) {
};


// Enter a parse tree produced by ProductParser#created_t.
ProductListener.prototype.enterCreated_t = function(ctx) {
};

// Exit a parse tree produced by ProductParser#created_t.
ProductListener.prototype.exitCreated_t = function(ctx) {
};


// Enter a parse tree produced by ProductParser#last_modified_t.
ProductListener.prototype.enterLast_modified_t = function(ctx) {
};

// Exit a parse tree produced by ProductParser#last_modified_t.
ProductListener.prototype.exitLast_modified_t = function(ctx) {
};


// Enter a parse tree produced by ProductParser#product_name.
ProductListener.prototype.enterProduct_name = function(ctx) {
};

// Exit a parse tree produced by ProductParser#product_name.
ProductListener.prototype.exitProduct_name = function(ctx) {
};


// Enter a parse tree produced by ProductParser#generic_name.
ProductListener.prototype.enterGeneric_name = function(ctx) {
};

// Exit a parse tree produced by ProductParser#generic_name.
ProductListener.prototype.exitGeneric_name = function(ctx) {
};


// Enter a parse tree produced by ProductParser#uantity.
ProductListener.prototype.enterUantity = function(ctx) {
};

// Exit a parse tree produced by ProductParser#uantity.
ProductListener.prototype.exitUantity = function(ctx) {
};


// Enter a parse tree produced by ProductParser#packaging.
ProductListener.prototype.enterPackaging = function(ctx) {
};

// Exit a parse tree produced by ProductParser#packaging.
ProductListener.prototype.exitPackaging = function(ctx) {
};


// Enter a parse tree produced by ProductParser#packaging_tags.
ProductListener.prototype.enterPackaging_tags = function(ctx) {
};

// Exit a parse tree produced by ProductParser#packaging_tags.
ProductListener.prototype.exitPackaging_tags = function(ctx) {
};


// Enter a parse tree produced by ProductParser#packaging_text.
ProductListener.prototype.enterPackaging_text = function(ctx) {
};

// Exit a parse tree produced by ProductParser#packaging_text.
ProductListener.prototype.exitPackaging_text = function(ctx) {
};


// Enter a parse tree produced by ProductParser#brands.
ProductListener.prototype.enterBrands = function(ctx) {
};

// Exit a parse tree produced by ProductParser#brands.
ProductListener.prototype.exitBrands = function(ctx) {
};


// Enter a parse tree produced by ProductParser#brands_tags.
ProductListener.prototype.enterBrands_tags = function(ctx) {
};

// Exit a parse tree produced by ProductParser#brands_tags.
ProductListener.prototype.exitBrands_tags = function(ctx) {
};


// Enter a parse tree produced by ProductParser#categories.
ProductListener.prototype.enterCategories = function(ctx) {
};

// Exit a parse tree produced by ProductParser#categories.
ProductListener.prototype.exitCategories = function(ctx) {
};


// Enter a parse tree produced by ProductParser#categories_tags.
ProductListener.prototype.enterCategories_tags = function(ctx) {
};

// Exit a parse tree produced by ProductParser#categories_tags.
ProductListener.prototype.exitCategories_tags = function(ctx) {
};


// Enter a parse tree produced by ProductParser#origins.
ProductListener.prototype.enterOrigins = function(ctx) {
};

// Exit a parse tree produced by ProductParser#origins.
ProductListener.prototype.exitOrigins = function(ctx) {
};


// Enter a parse tree produced by ProductParser#origins_tags.
ProductListener.prototype.enterOrigins_tags = function(ctx) {
};

// Exit a parse tree produced by ProductParser#origins_tags.
ProductListener.prototype.exitOrigins_tags = function(ctx) {
};


// Enter a parse tree produced by ProductParser#manufacturing_places.
ProductListener.prototype.enterManufacturing_places = function(ctx) {
};

// Exit a parse tree produced by ProductParser#manufacturing_places.
ProductListener.prototype.exitManufacturing_places = function(ctx) {
};


// Enter a parse tree produced by ProductParser#manufacturing_places_tags.
ProductListener.prototype.enterManufacturing_places_tags = function(ctx) {
};

// Exit a parse tree produced by ProductParser#manufacturing_places_tags.
ProductListener.prototype.exitManufacturing_places_tags = function(ctx) {
};


// Enter a parse tree produced by ProductParser#labels.
ProductListener.prototype.enterLabels = function(ctx) {
};

// Exit a parse tree produced by ProductParser#labels.
ProductListener.prototype.exitLabels = function(ctx) {
};


// Enter a parse tree produced by ProductParser#labels_tags.
ProductListener.prototype.enterLabels_tags = function(ctx) {
};

// Exit a parse tree produced by ProductParser#labels_tags.
ProductListener.prototype.exitLabels_tags = function(ctx) {
};


// Enter a parse tree produced by ProductParser#emb_codes.
ProductListener.prototype.enterEmb_codes = function(ctx) {
};

// Exit a parse tree produced by ProductParser#emb_codes.
ProductListener.prototype.exitEmb_codes = function(ctx) {
};


// Enter a parse tree produced by ProductParser#emb_codes_tags.
ProductListener.prototype.enterEmb_codes_tags = function(ctx) {
};

// Exit a parse tree produced by ProductParser#emb_codes_tags.
ProductListener.prototype.exitEmb_codes_tags = function(ctx) {
};


// Enter a parse tree produced by ProductParser#cities.
ProductListener.prototype.enterCities = function(ctx) {
};

// Exit a parse tree produced by ProductParser#cities.
ProductListener.prototype.exitCities = function(ctx) {
};


// Enter a parse tree produced by ProductParser#cities_tags.
ProductListener.prototype.enterCities_tags = function(ctx) {
};

// Exit a parse tree produced by ProductParser#cities_tags.
ProductListener.prototype.exitCities_tags = function(ctx) {
};


// Enter a parse tree produced by ProductParser#purchase_places.
ProductListener.prototype.enterPurchase_places = function(ctx) {
};

// Exit a parse tree produced by ProductParser#purchase_places.
ProductListener.prototype.exitPurchase_places = function(ctx) {
};


// Enter a parse tree produced by ProductParser#stores.
ProductListener.prototype.enterStores = function(ctx) {
};

// Exit a parse tree produced by ProductParser#stores.
ProductListener.prototype.exitStores = function(ctx) {
};


// Enter a parse tree produced by ProductParser#countries.
ProductListener.prototype.enterCountries = function(ctx) {
};

// Exit a parse tree produced by ProductParser#countries.
ProductListener.prototype.exitCountries = function(ctx) {
};


// Enter a parse tree produced by ProductParser#ingredients_text.
ProductListener.prototype.enterIngredients_text = function(ctx) {
};

// Exit a parse tree produced by ProductParser#ingredients_text.
ProductListener.prototype.exitIngredients_text = function(ctx) {
};


// Enter a parse tree produced by ProductParser#allergens.
ProductListener.prototype.enterAllergens = function(ctx) {
};

// Exit a parse tree produced by ProductParser#allergens.
ProductListener.prototype.exitAllergens = function(ctx) {
};


// Enter a parse tree produced by ProductParser#allergens_tags.
ProductListener.prototype.enterAllergens_tags = function(ctx) {
};

// Exit a parse tree produced by ProductParser#allergens_tags.
ProductListener.prototype.exitAllergens_tags = function(ctx) {
};


// Enter a parse tree produced by ProductParser#traces.
ProductListener.prototype.enterTraces = function(ctx) {
};

// Exit a parse tree produced by ProductParser#traces.
ProductListener.prototype.exitTraces = function(ctx) {
};


// Enter a parse tree produced by ProductParser#traces_tags.
ProductListener.prototype.enterTraces_tags = function(ctx) {
};

// Exit a parse tree produced by ProductParser#traces_tags.
ProductListener.prototype.exitTraces_tags = function(ctx) {
};


// Enter a parse tree produced by ProductParser#serving_size.
ProductListener.prototype.enterServing_size = function(ctx) {
};

// Exit a parse tree produced by ProductParser#serving_size.
ProductListener.prototype.exitServing_size = function(ctx) {
};


// Enter a parse tree produced by ProductParser#serving_quantity.
ProductListener.prototype.enterServing_quantity = function(ctx) {
};

// Exit a parse tree produced by ProductParser#serving_quantity.
ProductListener.prototype.exitServing_quantity = function(ctx) {
};


// Enter a parse tree produced by ProductParser#no_nutriments.
ProductListener.prototype.enterNo_nutriments = function(ctx) {
};

// Exit a parse tree produced by ProductParser#no_nutriments.
ProductListener.prototype.exitNo_nutriments = function(ctx) {
};


// Enter a parse tree produced by ProductParser#additives_n.
ProductListener.prototype.enterAdditives_n = function(ctx) {
};

// Exit a parse tree produced by ProductParser#additives_n.
ProductListener.prototype.exitAdditives_n = function(ctx) {
};


// Enter a parse tree produced by ProductParser#additives_tags.
ProductListener.prototype.enterAdditives_tags = function(ctx) {
};

// Exit a parse tree produced by ProductParser#additives_tags.
ProductListener.prototype.exitAdditives_tags = function(ctx) {
};


// Enter a parse tree produced by ProductParser#ingredients_from_palm_oil_n.
ProductListener.prototype.enterIngredients_from_palm_oil_n = function(ctx) {
};

// Exit a parse tree produced by ProductParser#ingredients_from_palm_oil_n.
ProductListener.prototype.exitIngredients_from_palm_oil_n = function(ctx) {
};


// Enter a parse tree produced by ProductParser#ingredients_from_palm_oil.
ProductListener.prototype.enterIngredients_from_palm_oil = function(ctx) {
};

// Exit a parse tree produced by ProductParser#ingredients_from_palm_oil.
ProductListener.prototype.exitIngredients_from_palm_oil = function(ctx) {
};


// Enter a parse tree produced by ProductParser#ingredients_from_palm_oil_tags.
ProductListener.prototype.enterIngredients_from_palm_oil_tags = function(ctx) {
};

// Exit a parse tree produced by ProductParser#ingredients_from_palm_oil_tags.
ProductListener.prototype.exitIngredients_from_palm_oil_tags = function(ctx) {
};


// Enter a parse tree produced by ProductParser#ingredients_that_may_be_from_palm_oil_n.
ProductListener.prototype.enterIngredients_that_may_be_from_palm_oil_n = function(ctx) {
};

// Exit a parse tree produced by ProductParser#ingredients_that_may_be_from_palm_oil_n.
ProductListener.prototype.exitIngredients_that_may_be_from_palm_oil_n = function(ctx) {
};


// Enter a parse tree produced by ProductParser#ingredients_that_may_be_from_palm_oil.
ProductListener.prototype.enterIngredients_that_may_be_from_palm_oil = function(ctx) {
};

// Exit a parse tree produced by ProductParser#ingredients_that_may_be_from_palm_oil.
ProductListener.prototype.exitIngredients_that_may_be_from_palm_oil = function(ctx) {
};


// Enter a parse tree produced by ProductParser#ingredients_that_may_be_from_palm_oil_tags.
ProductListener.prototype.enterIngredients_that_may_be_from_palm_oil_tags = function(ctx) {
};

// Exit a parse tree produced by ProductParser#ingredients_that_may_be_from_palm_oil_tags.
ProductListener.prototype.exitIngredients_that_may_be_from_palm_oil_tags = function(ctx) {
};


// Enter a parse tree produced by ProductParser#nutriscore_score.
ProductListener.prototype.enterNutriscore_score = function(ctx) {
};

// Exit a parse tree produced by ProductParser#nutriscore_score.
ProductListener.prototype.exitNutriscore_score = function(ctx) {
};


// Enter a parse tree produced by ProductParser#nutriscore_grade.
ProductListener.prototype.enterNutriscore_grade = function(ctx) {
};

// Exit a parse tree produced by ProductParser#nutriscore_grade.
ProductListener.prototype.exitNutriscore_grade = function(ctx) {
};


// Enter a parse tree produced by ProductParser#nova_group.
ProductListener.prototype.enterNova_group = function(ctx) {
};

// Exit a parse tree produced by ProductParser#nova_group.
ProductListener.prototype.exitNova_group = function(ctx) {
};


// Enter a parse tree produced by ProductParser#pnns_groups_1.
ProductListener.prototype.enterPnns_groups_1 = function(ctx) {
};

// Exit a parse tree produced by ProductParser#pnns_groups_1.
ProductListener.prototype.exitPnns_groups_1 = function(ctx) {
};


// Enter a parse tree produced by ProductParser#pnns_groups_2.
ProductListener.prototype.enterPnns_groups_2 = function(ctx) {
};

// Exit a parse tree produced by ProductParser#pnns_groups_2.
ProductListener.prototype.exitPnns_groups_2 = function(ctx) {
};


// Enter a parse tree produced by ProductParser#states.
ProductListener.prototype.enterStates = function(ctx) {
};

// Exit a parse tree produced by ProductParser#states.
ProductListener.prototype.exitStates = function(ctx) {
};


// Enter a parse tree produced by ProductParser#brand_owner.
ProductListener.prototype.enterBrand_owner = function(ctx) {
};

// Exit a parse tree produced by ProductParser#brand_owner.
ProductListener.prototype.exitBrand_owner = function(ctx) {
};


// Enter a parse tree produced by ProductParser#main_category.
ProductListener.prototype.enterMain_category = function(ctx) {
};

// Exit a parse tree produced by ProductParser#main_category.
ProductListener.prototype.exitMain_category = function(ctx) {
};


// Enter a parse tree produced by ProductParser#image_url.
ProductListener.prototype.enterImage_url = function(ctx) {
};

// Exit a parse tree produced by ProductParser#image_url.
ProductListener.prototype.exitImage_url = function(ctx) {
};


// Enter a parse tree produced by ProductParser#image_small_url.
ProductListener.prototype.enterImage_small_url = function(ctx) {
};

// Exit a parse tree produced by ProductParser#image_small_url.
ProductListener.prototype.exitImage_small_url = function(ctx) {
};


// Enter a parse tree produced by ProductParser#image_front_url.
ProductListener.prototype.enterImage_front_url = function(ctx) {
};

// Exit a parse tree produced by ProductParser#image_front_url.
ProductListener.prototype.exitImage_front_url = function(ctx) {
};


// Enter a parse tree produced by ProductParser#image_front_small_url.
ProductListener.prototype.enterImage_front_small_url = function(ctx) {
};

// Exit a parse tree produced by ProductParser#image_front_small_url.
ProductListener.prototype.exitImage_front_small_url = function(ctx) {
};


// Enter a parse tree produced by ProductParser#image_ingredients_url.
ProductListener.prototype.enterImage_ingredients_url = function(ctx) {
};

// Exit a parse tree produced by ProductParser#image_ingredients_url.
ProductListener.prototype.exitImage_ingredients_url = function(ctx) {
};


// Enter a parse tree produced by ProductParser#image_ingredients_small_url.
ProductListener.prototype.enterImage_ingredients_small_url = function(ctx) {
};

// Exit a parse tree produced by ProductParser#image_ingredients_small_url.
ProductListener.prototype.exitImage_ingredients_small_url = function(ctx) {
};


// Enter a parse tree produced by ProductParser#image_nutrition_url.
ProductListener.prototype.enterImage_nutrition_url = function(ctx) {
};

// Exit a parse tree produced by ProductParser#image_nutrition_url.
ProductListener.prototype.exitImage_nutrition_url = function(ctx) {
};


// Enter a parse tree produced by ProductParser#image_nutrition_small_url.
ProductListener.prototype.enterImage_nutrition_small_url = function(ctx) {
};

// Exit a parse tree produced by ProductParser#image_nutrition_small_url.
ProductListener.prototype.exitImage_nutrition_small_url = function(ctx) {
};


// Enter a parse tree produced by ProductParser#energy_kj_100g.
ProductListener.prototype.enterEnergy_kj_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#energy_kj_100g.
ProductListener.prototype.exitEnergy_kj_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#energy_kcal_100g.
ProductListener.prototype.enterEnergy_kcal_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#energy_kcal_100g.
ProductListener.prototype.exitEnergy_kcal_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#energy_100g.
ProductListener.prototype.enterEnergy_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#energy_100g.
ProductListener.prototype.exitEnergy_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#energy_from_fat_100g.
ProductListener.prototype.enterEnergy_from_fat_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#energy_from_fat_100g.
ProductListener.prototype.exitEnergy_from_fat_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#fat_100g.
ProductListener.prototype.enterFat_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#fat_100g.
ProductListener.prototype.exitFat_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#saturated_fat_100g.
ProductListener.prototype.enterSaturated_fat_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#saturated_fat_100g.
ProductListener.prototype.exitSaturated_fat_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#butyric_acid_100g.
ProductListener.prototype.enterButyric_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#butyric_acid_100g.
ProductListener.prototype.exitButyric_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#caproic_acid_100g.
ProductListener.prototype.enterCaproic_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#caproic_acid_100g.
ProductListener.prototype.exitCaproic_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#caprylic_acid_100g.
ProductListener.prototype.enterCaprylic_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#caprylic_acid_100g.
ProductListener.prototype.exitCaprylic_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#capric_acid_100g.
ProductListener.prototype.enterCapric_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#capric_acid_100g.
ProductListener.prototype.exitCapric_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#lauric_acid_100g.
ProductListener.prototype.enterLauric_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#lauric_acid_100g.
ProductListener.prototype.exitLauric_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#myristic_acid_100g.
ProductListener.prototype.enterMyristic_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#myristic_acid_100g.
ProductListener.prototype.exitMyristic_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#palmitic_acid_100g.
ProductListener.prototype.enterPalmitic_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#palmitic_acid_100g.
ProductListener.prototype.exitPalmitic_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#stearic_acid_100g.
ProductListener.prototype.enterStearic_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#stearic_acid_100g.
ProductListener.prototype.exitStearic_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#arachidic_acid_100g.
ProductListener.prototype.enterArachidic_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#arachidic_acid_100g.
ProductListener.prototype.exitArachidic_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#behenic_acid_100g.
ProductListener.prototype.enterBehenic_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#behenic_acid_100g.
ProductListener.prototype.exitBehenic_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#lignoceric_acid_100g.
ProductListener.prototype.enterLignoceric_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#lignoceric_acid_100g.
ProductListener.prototype.exitLignoceric_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#cerotic_acid_100g.
ProductListener.prototype.enterCerotic_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#cerotic_acid_100g.
ProductListener.prototype.exitCerotic_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#montanic_acid_100g.
ProductListener.prototype.enterMontanic_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#montanic_acid_100g.
ProductListener.prototype.exitMontanic_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#melissic_acid_100g.
ProductListener.prototype.enterMelissic_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#melissic_acid_100g.
ProductListener.prototype.exitMelissic_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#monounsaturated_fat_100g.
ProductListener.prototype.enterMonounsaturated_fat_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#monounsaturated_fat_100g.
ProductListener.prototype.exitMonounsaturated_fat_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#polyunsaturated_fat_100g.
ProductListener.prototype.enterPolyunsaturated_fat_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#polyunsaturated_fat_100g.
ProductListener.prototype.exitPolyunsaturated_fat_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#omega_3_fat_100g.
ProductListener.prototype.enterOmega_3_fat_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#omega_3_fat_100g.
ProductListener.prototype.exitOmega_3_fat_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#alpha_linolenic_acid_100g.
ProductListener.prototype.enterAlpha_linolenic_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#alpha_linolenic_acid_100g.
ProductListener.prototype.exitAlpha_linolenic_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#eicosapentaenoic_acid_100g.
ProductListener.prototype.enterEicosapentaenoic_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#eicosapentaenoic_acid_100g.
ProductListener.prototype.exitEicosapentaenoic_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#docosahexaenoic_acid_100g.
ProductListener.prototype.enterDocosahexaenoic_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#docosahexaenoic_acid_100g.
ProductListener.prototype.exitDocosahexaenoic_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#omega_6_fat_100g.
ProductListener.prototype.enterOmega_6_fat_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#omega_6_fat_100g.
ProductListener.prototype.exitOmega_6_fat_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#linoleic_acid_100g.
ProductListener.prototype.enterLinoleic_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#linoleic_acid_100g.
ProductListener.prototype.exitLinoleic_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#arachidonic_acid_100g.
ProductListener.prototype.enterArachidonic_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#arachidonic_acid_100g.
ProductListener.prototype.exitArachidonic_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#gamma_linolenic_acid_100g.
ProductListener.prototype.enterGamma_linolenic_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#gamma_linolenic_acid_100g.
ProductListener.prototype.exitGamma_linolenic_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#dihomo_gamma_linolenic_acid_100g.
ProductListener.prototype.enterDihomo_gamma_linolenic_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#dihomo_gamma_linolenic_acid_100g.
ProductListener.prototype.exitDihomo_gamma_linolenic_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#mega_9_fat_100g.
ProductListener.prototype.enterMega_9_fat_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#mega_9_fat_100g.
ProductListener.prototype.exitMega_9_fat_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#oleic_acid_100g.
ProductListener.prototype.enterOleic_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#oleic_acid_100g.
ProductListener.prototype.exitOleic_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#elaidic_acid_100g.
ProductListener.prototype.enterElaidic_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#elaidic_acid_100g.
ProductListener.prototype.exitElaidic_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#gondoic_acid_100g.
ProductListener.prototype.enterGondoic_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#gondoic_acid_100g.
ProductListener.prototype.exitGondoic_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#mead_acid_100g.
ProductListener.prototype.enterMead_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#mead_acid_100g.
ProductListener.prototype.exitMead_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#erucic_acid_100g.
ProductListener.prototype.enterErucic_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#erucic_acid_100g.
ProductListener.prototype.exitErucic_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#nervonic_acid_100g.
ProductListener.prototype.enterNervonic_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#nervonic_acid_100g.
ProductListener.prototype.exitNervonic_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#trans_fat_100g.
ProductListener.prototype.enterTrans_fat_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#trans_fat_100g.
ProductListener.prototype.exitTrans_fat_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#cholesterol_100g.
ProductListener.prototype.enterCholesterol_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#cholesterol_100g.
ProductListener.prototype.exitCholesterol_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#carbohydrates_100g.
ProductListener.prototype.enterCarbohydrates_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#carbohydrates_100g.
ProductListener.prototype.exitCarbohydrates_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#ugars_100g.
ProductListener.prototype.enterUgars_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#ugars_100g.
ProductListener.prototype.exitUgars_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#sucrose_100g.
ProductListener.prototype.enterSucrose_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#sucrose_100g.
ProductListener.prototype.exitSucrose_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#glucose_100g.
ProductListener.prototype.enterGlucose_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#glucose_100g.
ProductListener.prototype.exitGlucose_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#fructose_100g.
ProductListener.prototype.enterFructose_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#fructose_100g.
ProductListener.prototype.exitFructose_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#lactose_100g.
ProductListener.prototype.enterLactose_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#lactose_100g.
ProductListener.prototype.exitLactose_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#maltose_100g.
ProductListener.prototype.enterMaltose_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#maltose_100g.
ProductListener.prototype.exitMaltose_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#maltodextrins_100g.
ProductListener.prototype.enterMaltodextrins_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#maltodextrins_100g.
ProductListener.prototype.exitMaltodextrins_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#starch_100g.
ProductListener.prototype.enterStarch_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#starch_100g.
ProductListener.prototype.exitStarch_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#polyols_100g.
ProductListener.prototype.enterPolyols_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#polyols_100g.
ProductListener.prototype.exitPolyols_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#fiber_100g.
ProductListener.prototype.enterFiber_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#fiber_100g.
ProductListener.prototype.exitFiber_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#soluble_fiber_100g.
ProductListener.prototype.enterSoluble_fiber_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#soluble_fiber_100g.
ProductListener.prototype.exitSoluble_fiber_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#insoluble_fiber_100g.
ProductListener.prototype.enterInsoluble_fiber_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#insoluble_fiber_100g.
ProductListener.prototype.exitInsoluble_fiber_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#proteins_100g.
ProductListener.prototype.enterProteins_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#proteins_100g.
ProductListener.prototype.exitProteins_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#casein_100g.
ProductListener.prototype.enterCasein_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#casein_100g.
ProductListener.prototype.exitCasein_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#serum_proteins_100g.
ProductListener.prototype.enterSerum_proteins_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#serum_proteins_100g.
ProductListener.prototype.exitSerum_proteins_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#nucleotides_100g.
ProductListener.prototype.enterNucleotides_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#nucleotides_100g.
ProductListener.prototype.exitNucleotides_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#salt_100g.
ProductListener.prototype.enterSalt_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#salt_100g.
ProductListener.prototype.exitSalt_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#sodium_100g.
ProductListener.prototype.enterSodium_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#sodium_100g.
ProductListener.prototype.exitSodium_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#alcohol_100g.
ProductListener.prototype.enterAlcohol_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#alcohol_100g.
ProductListener.prototype.exitAlcohol_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#vitamin_a_100g.
ProductListener.prototype.enterVitamin_a_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#vitamin_a_100g.
ProductListener.prototype.exitVitamin_a_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#beta_carotene_100g.
ProductListener.prototype.enterBeta_carotene_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#beta_carotene_100g.
ProductListener.prototype.exitBeta_carotene_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#vitamin_d_100g.
ProductListener.prototype.enterVitamin_d_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#vitamin_d_100g.
ProductListener.prototype.exitVitamin_d_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#vitamin_e_100g.
ProductListener.prototype.enterVitamin_e_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#vitamin_e_100g.
ProductListener.prototype.exitVitamin_e_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#vitamin_k_100g.
ProductListener.prototype.enterVitamin_k_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#vitamin_k_100g.
ProductListener.prototype.exitVitamin_k_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#vitamin_c_100g.
ProductListener.prototype.enterVitamin_c_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#vitamin_c_100g.
ProductListener.prototype.exitVitamin_c_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#vitamin_b1_100g.
ProductListener.prototype.enterVitamin_b1_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#vitamin_b1_100g.
ProductListener.prototype.exitVitamin_b1_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#vitamin_b2_100g.
ProductListener.prototype.enterVitamin_b2_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#vitamin_b2_100g.
ProductListener.prototype.exitVitamin_b2_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#vitamin_pp_100g.
ProductListener.prototype.enterVitamin_pp_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#vitamin_pp_100g.
ProductListener.prototype.exitVitamin_pp_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#vitamin_b6_100g.
ProductListener.prototype.enterVitamin_b6_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#vitamin_b6_100g.
ProductListener.prototype.exitVitamin_b6_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#vitamin_b9_100g.
ProductListener.prototype.enterVitamin_b9_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#vitamin_b9_100g.
ProductListener.prototype.exitVitamin_b9_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#folates_100g.
ProductListener.prototype.enterFolates_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#folates_100g.
ProductListener.prototype.exitFolates_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#vitamin_b12_100g.
ProductListener.prototype.enterVitamin_b12_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#vitamin_b12_100g.
ProductListener.prototype.exitVitamin_b12_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#biotin_100g.
ProductListener.prototype.enterBiotin_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#biotin_100g.
ProductListener.prototype.exitBiotin_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#pantothenic_acid_100g.
ProductListener.prototype.enterPantothenic_acid_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#pantothenic_acid_100g.
ProductListener.prototype.exitPantothenic_acid_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#silica_100g.
ProductListener.prototype.enterSilica_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#silica_100g.
ProductListener.prototype.exitSilica_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#bicarbonate_100g.
ProductListener.prototype.enterBicarbonate_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#bicarbonate_100g.
ProductListener.prototype.exitBicarbonate_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#potassium_100g.
ProductListener.prototype.enterPotassium_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#potassium_100g.
ProductListener.prototype.exitPotassium_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#chloride_100g.
ProductListener.prototype.enterChloride_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#chloride_100g.
ProductListener.prototype.exitChloride_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#calcium_100g.
ProductListener.prototype.enterCalcium_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#calcium_100g.
ProductListener.prototype.exitCalcium_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#phosphorus_100g.
ProductListener.prototype.enterPhosphorus_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#phosphorus_100g.
ProductListener.prototype.exitPhosphorus_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#iron_100g.
ProductListener.prototype.enterIron_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#iron_100g.
ProductListener.prototype.exitIron_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#magnesium_100g.
ProductListener.prototype.enterMagnesium_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#magnesium_100g.
ProductListener.prototype.exitMagnesium_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#zinc_100g.
ProductListener.prototype.enterZinc_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#zinc_100g.
ProductListener.prototype.exitZinc_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#copper_100g.
ProductListener.prototype.enterCopper_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#copper_100g.
ProductListener.prototype.exitCopper_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#manganese_100g.
ProductListener.prototype.enterManganese_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#manganese_100g.
ProductListener.prototype.exitManganese_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#fluoride_100g.
ProductListener.prototype.enterFluoride_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#fluoride_100g.
ProductListener.prototype.exitFluoride_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#selenium_100g.
ProductListener.prototype.enterSelenium_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#selenium_100g.
ProductListener.prototype.exitSelenium_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#chromium_100g.
ProductListener.prototype.enterChromium_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#chromium_100g.
ProductListener.prototype.exitChromium_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#molybdenum_100g.
ProductListener.prototype.enterMolybdenum_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#molybdenum_100g.
ProductListener.prototype.exitMolybdenum_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#iodine_100g.
ProductListener.prototype.enterIodine_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#iodine_100g.
ProductListener.prototype.exitIodine_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#caffeine_100g.
ProductListener.prototype.enterCaffeine_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#caffeine_100g.
ProductListener.prototype.exitCaffeine_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#taurine_100g.
ProductListener.prototype.enterTaurine_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#taurine_100g.
ProductListener.prototype.exitTaurine_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#ph_100g.
ProductListener.prototype.enterPh_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#ph_100g.
ProductListener.prototype.exitPh_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#fruits_vegetables_nuts_100g.
ProductListener.prototype.enterFruits_vegetables_nuts_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#fruits_vegetables_nuts_100g.
ProductListener.prototype.exitFruits_vegetables_nuts_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#fruits_vegetables_nuts_dried_100g.
ProductListener.prototype.enterFruits_vegetables_nuts_dried_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#fruits_vegetables_nuts_dried_100g.
ProductListener.prototype.exitFruits_vegetables_nuts_dried_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#fruits_vegetables_nuts_estimate_100g.
ProductListener.prototype.enterFruits_vegetables_nuts_estimate_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#fruits_vegetables_nuts_estimate_100g.
ProductListener.prototype.exitFruits_vegetables_nuts_estimate_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#collagen_meat_protein_ratio_100g.
ProductListener.prototype.enterCollagen_meat_protein_ratio_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#collagen_meat_protein_ratio_100g.
ProductListener.prototype.exitCollagen_meat_protein_ratio_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#cocoa_100g.
ProductListener.prototype.enterCocoa_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#cocoa_100g.
ProductListener.prototype.exitCocoa_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#chlorophyl_100g.
ProductListener.prototype.enterChlorophyl_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#chlorophyl_100g.
ProductListener.prototype.exitChlorophyl_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#carbon_footprint_100g.
ProductListener.prototype.enterCarbon_footprint_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#carbon_footprint_100g.
ProductListener.prototype.exitCarbon_footprint_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#carbon_footprint_from_meat_or_fish_100g.
ProductListener.prototype.enterCarbon_footprint_from_meat_or_fish_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#carbon_footprint_from_meat_or_fish_100g.
ProductListener.prototype.exitCarbon_footprint_from_meat_or_fish_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#nutrition_score_fr_100g.
ProductListener.prototype.enterNutrition_score_fr_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#nutrition_score_fr_100g.
ProductListener.prototype.exitNutrition_score_fr_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#nutrition_score_uk_100g.
ProductListener.prototype.enterNutrition_score_uk_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#nutrition_score_uk_100g.
ProductListener.prototype.exitNutrition_score_uk_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#glycemic_index_100g.
ProductListener.prototype.enterGlycemic_index_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#glycemic_index_100g.
ProductListener.prototype.exitGlycemic_index_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#water_hardness_100g.
ProductListener.prototype.enterWater_hardness_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#water_hardness_100g.
ProductListener.prototype.exitWater_hardness_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#choline_100g.
ProductListener.prototype.enterCholine_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#choline_100g.
ProductListener.prototype.exitCholine_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#phylloquinone_100g.
ProductListener.prototype.enterPhylloquinone_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#phylloquinone_100g.
ProductListener.prototype.exitPhylloquinone_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#beta_glucan_100g.
ProductListener.prototype.enterBeta_glucan_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#beta_glucan_100g.
ProductListener.prototype.exitBeta_glucan_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#inositol_100g.
ProductListener.prototype.enterInositol_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#inositol_100g.
ProductListener.prototype.exitInositol_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#carnitine_100g.
ProductListener.prototype.enterCarnitine_100g = function(ctx) {
};

// Exit a parse tree produced by ProductParser#carnitine_100g.
ProductListener.prototype.exitCarnitine_100g = function(ctx) {
};


// Enter a parse tree produced by ProductParser#field.
ProductListener.prototype.enterField = function(ctx) {
};

// Exit a parse tree produced by ProductParser#field.
ProductListener.prototype.exitField = function(ctx) {
};


// Enter a parse tree produced by ProductParser#lineEnding.
ProductListener.prototype.enterLineEnding = function(ctx) {
};

// Exit a parse tree produced by ProductParser#lineEnding.
ProductListener.prototype.exitLineEnding = function(ctx) {
};


// Enter a parse tree produced by ProductParser#number.
ProductListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by ProductParser#number.
ProductListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by ProductParser#possibleDQuote.
ProductListener.prototype.enterPossibleDQuote = function(ctx) {
};

// Exit a parse tree produced by ProductParser#possibleDQuote.
ProductListener.prototype.exitPossibleDQuote = function(ctx) {
};



exports.ProductListener = ProductListener;