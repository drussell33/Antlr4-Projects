// Generated from Product.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by ProductParser.

function ProductVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

ProductVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ProductVisitor.prototype.constructor = ProductVisitor;

// Visit a parse tree produced by ProductParser#file.
ProductVisitor.prototype.visitFile = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#hdr.
ProductVisitor.prototype.visitHdr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#row.
ProductVisitor.prototype.visitRow = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#code.
ProductVisitor.prototype.visitCode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#url.
ProductVisitor.prototype.visitUrl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#creator.
ProductVisitor.prototype.visitCreator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#created_t.
ProductVisitor.prototype.visitCreated_t = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#last_modified_t.
ProductVisitor.prototype.visitLast_modified_t = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#product_name.
ProductVisitor.prototype.visitProduct_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#generic_name.
ProductVisitor.prototype.visitGeneric_name = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#uantity.
ProductVisitor.prototype.visitUantity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#packaging.
ProductVisitor.prototype.visitPackaging = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#packaging_tags.
ProductVisitor.prototype.visitPackaging_tags = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#packaging_text.
ProductVisitor.prototype.visitPackaging_text = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#brands.
ProductVisitor.prototype.visitBrands = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#brands_tags.
ProductVisitor.prototype.visitBrands_tags = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#categories.
ProductVisitor.prototype.visitCategories = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#categories_tags.
ProductVisitor.prototype.visitCategories_tags = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#origins.
ProductVisitor.prototype.visitOrigins = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#origins_tags.
ProductVisitor.prototype.visitOrigins_tags = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#manufacturing_places.
ProductVisitor.prototype.visitManufacturing_places = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#manufacturing_places_tags.
ProductVisitor.prototype.visitManufacturing_places_tags = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#labels.
ProductVisitor.prototype.visitLabels = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#labels_tags.
ProductVisitor.prototype.visitLabels_tags = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#emb_codes.
ProductVisitor.prototype.visitEmb_codes = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#emb_codes_tags.
ProductVisitor.prototype.visitEmb_codes_tags = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#cities.
ProductVisitor.prototype.visitCities = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#cities_tags.
ProductVisitor.prototype.visitCities_tags = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#purchase_places.
ProductVisitor.prototype.visitPurchase_places = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#stores.
ProductVisitor.prototype.visitStores = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#countries.
ProductVisitor.prototype.visitCountries = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#ingredients_text.
ProductVisitor.prototype.visitIngredients_text = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#allergens.
ProductVisitor.prototype.visitAllergens = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#allergens_tags.
ProductVisitor.prototype.visitAllergens_tags = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#traces.
ProductVisitor.prototype.visitTraces = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#traces_tags.
ProductVisitor.prototype.visitTraces_tags = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#serving_size.
ProductVisitor.prototype.visitServing_size = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#serving_quantity.
ProductVisitor.prototype.visitServing_quantity = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#no_nutriments.
ProductVisitor.prototype.visitNo_nutriments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#additives_n.
ProductVisitor.prototype.visitAdditives_n = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#additives_tags.
ProductVisitor.prototype.visitAdditives_tags = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#ingredients_from_palm_oil_n.
ProductVisitor.prototype.visitIngredients_from_palm_oil_n = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#ingredients_from_palm_oil.
ProductVisitor.prototype.visitIngredients_from_palm_oil = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#ingredients_from_palm_oil_tags.
ProductVisitor.prototype.visitIngredients_from_palm_oil_tags = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#ingredients_that_may_be_from_palm_oil_n.
ProductVisitor.prototype.visitIngredients_that_may_be_from_palm_oil_n = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#ingredients_that_may_be_from_palm_oil.
ProductVisitor.prototype.visitIngredients_that_may_be_from_palm_oil = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#ingredients_that_may_be_from_palm_oil_tags.
ProductVisitor.prototype.visitIngredients_that_may_be_from_palm_oil_tags = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#nutriscore_score.
ProductVisitor.prototype.visitNutriscore_score = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#nutriscore_grade.
ProductVisitor.prototype.visitNutriscore_grade = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#nova_group.
ProductVisitor.prototype.visitNova_group = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#pnns_groups_1.
ProductVisitor.prototype.visitPnns_groups_1 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#pnns_groups_2.
ProductVisitor.prototype.visitPnns_groups_2 = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#states.
ProductVisitor.prototype.visitStates = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#brand_owner.
ProductVisitor.prototype.visitBrand_owner = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#main_category.
ProductVisitor.prototype.visitMain_category = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#image_url.
ProductVisitor.prototype.visitImage_url = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#image_small_url.
ProductVisitor.prototype.visitImage_small_url = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#image_front_url.
ProductVisitor.prototype.visitImage_front_url = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#image_front_small_url.
ProductVisitor.prototype.visitImage_front_small_url = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#image_ingredients_url.
ProductVisitor.prototype.visitImage_ingredients_url = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#image_ingredients_small_url.
ProductVisitor.prototype.visitImage_ingredients_small_url = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#image_nutrition_url.
ProductVisitor.prototype.visitImage_nutrition_url = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#image_nutrition_small_url.
ProductVisitor.prototype.visitImage_nutrition_small_url = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#energy_kj_100g.
ProductVisitor.prototype.visitEnergy_kj_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#energy_kcal_100g.
ProductVisitor.prototype.visitEnergy_kcal_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#energy_100g.
ProductVisitor.prototype.visitEnergy_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#energy_from_fat_100g.
ProductVisitor.prototype.visitEnergy_from_fat_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#fat_100g.
ProductVisitor.prototype.visitFat_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#saturated_fat_100g.
ProductVisitor.prototype.visitSaturated_fat_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#butyric_acid_100g.
ProductVisitor.prototype.visitButyric_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#caproic_acid_100g.
ProductVisitor.prototype.visitCaproic_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#caprylic_acid_100g.
ProductVisitor.prototype.visitCaprylic_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#capric_acid_100g.
ProductVisitor.prototype.visitCapric_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#lauric_acid_100g.
ProductVisitor.prototype.visitLauric_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#myristic_acid_100g.
ProductVisitor.prototype.visitMyristic_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#palmitic_acid_100g.
ProductVisitor.prototype.visitPalmitic_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#stearic_acid_100g.
ProductVisitor.prototype.visitStearic_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#arachidic_acid_100g.
ProductVisitor.prototype.visitArachidic_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#behenic_acid_100g.
ProductVisitor.prototype.visitBehenic_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#lignoceric_acid_100g.
ProductVisitor.prototype.visitLignoceric_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#cerotic_acid_100g.
ProductVisitor.prototype.visitCerotic_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#montanic_acid_100g.
ProductVisitor.prototype.visitMontanic_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#melissic_acid_100g.
ProductVisitor.prototype.visitMelissic_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#monounsaturated_fat_100g.
ProductVisitor.prototype.visitMonounsaturated_fat_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#polyunsaturated_fat_100g.
ProductVisitor.prototype.visitPolyunsaturated_fat_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#omega_3_fat_100g.
ProductVisitor.prototype.visitOmega_3_fat_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#alpha_linolenic_acid_100g.
ProductVisitor.prototype.visitAlpha_linolenic_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#eicosapentaenoic_acid_100g.
ProductVisitor.prototype.visitEicosapentaenoic_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#docosahexaenoic_acid_100g.
ProductVisitor.prototype.visitDocosahexaenoic_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#omega_6_fat_100g.
ProductVisitor.prototype.visitOmega_6_fat_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#linoleic_acid_100g.
ProductVisitor.prototype.visitLinoleic_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#arachidonic_acid_100g.
ProductVisitor.prototype.visitArachidonic_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#gamma_linolenic_acid_100g.
ProductVisitor.prototype.visitGamma_linolenic_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#dihomo_gamma_linolenic_acid_100g.
ProductVisitor.prototype.visitDihomo_gamma_linolenic_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#mega_9_fat_100g.
ProductVisitor.prototype.visitMega_9_fat_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#oleic_acid_100g.
ProductVisitor.prototype.visitOleic_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#elaidic_acid_100g.
ProductVisitor.prototype.visitElaidic_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#gondoic_acid_100g.
ProductVisitor.prototype.visitGondoic_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#mead_acid_100g.
ProductVisitor.prototype.visitMead_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#erucic_acid_100g.
ProductVisitor.prototype.visitErucic_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#nervonic_acid_100g.
ProductVisitor.prototype.visitNervonic_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#trans_fat_100g.
ProductVisitor.prototype.visitTrans_fat_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#cholesterol_100g.
ProductVisitor.prototype.visitCholesterol_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#carbohydrates_100g.
ProductVisitor.prototype.visitCarbohydrates_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#ugars_100g.
ProductVisitor.prototype.visitUgars_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#sucrose_100g.
ProductVisitor.prototype.visitSucrose_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#glucose_100g.
ProductVisitor.prototype.visitGlucose_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#fructose_100g.
ProductVisitor.prototype.visitFructose_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#lactose_100g.
ProductVisitor.prototype.visitLactose_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#maltose_100g.
ProductVisitor.prototype.visitMaltose_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#maltodextrins_100g.
ProductVisitor.prototype.visitMaltodextrins_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#starch_100g.
ProductVisitor.prototype.visitStarch_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#polyols_100g.
ProductVisitor.prototype.visitPolyols_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#fiber_100g.
ProductVisitor.prototype.visitFiber_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#soluble_fiber_100g.
ProductVisitor.prototype.visitSoluble_fiber_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#insoluble_fiber_100g.
ProductVisitor.prototype.visitInsoluble_fiber_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#proteins_100g.
ProductVisitor.prototype.visitProteins_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#casein_100g.
ProductVisitor.prototype.visitCasein_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#serum_proteins_100g.
ProductVisitor.prototype.visitSerum_proteins_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#nucleotides_100g.
ProductVisitor.prototype.visitNucleotides_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#salt_100g.
ProductVisitor.prototype.visitSalt_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#sodium_100g.
ProductVisitor.prototype.visitSodium_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#alcohol_100g.
ProductVisitor.prototype.visitAlcohol_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#vitamin_a_100g.
ProductVisitor.prototype.visitVitamin_a_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#beta_carotene_100g.
ProductVisitor.prototype.visitBeta_carotene_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#vitamin_d_100g.
ProductVisitor.prototype.visitVitamin_d_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#vitamin_e_100g.
ProductVisitor.prototype.visitVitamin_e_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#vitamin_k_100g.
ProductVisitor.prototype.visitVitamin_k_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#vitamin_c_100g.
ProductVisitor.prototype.visitVitamin_c_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#vitamin_b1_100g.
ProductVisitor.prototype.visitVitamin_b1_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#vitamin_b2_100g.
ProductVisitor.prototype.visitVitamin_b2_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#vitamin_pp_100g.
ProductVisitor.prototype.visitVitamin_pp_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#vitamin_b6_100g.
ProductVisitor.prototype.visitVitamin_b6_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#vitamin_b9_100g.
ProductVisitor.prototype.visitVitamin_b9_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#folates_100g.
ProductVisitor.prototype.visitFolates_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#vitamin_b12_100g.
ProductVisitor.prototype.visitVitamin_b12_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#biotin_100g.
ProductVisitor.prototype.visitBiotin_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#pantothenic_acid_100g.
ProductVisitor.prototype.visitPantothenic_acid_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#silica_100g.
ProductVisitor.prototype.visitSilica_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#bicarbonate_100g.
ProductVisitor.prototype.visitBicarbonate_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#potassium_100g.
ProductVisitor.prototype.visitPotassium_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#chloride_100g.
ProductVisitor.prototype.visitChloride_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#calcium_100g.
ProductVisitor.prototype.visitCalcium_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#phosphorus_100g.
ProductVisitor.prototype.visitPhosphorus_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#iron_100g.
ProductVisitor.prototype.visitIron_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#magnesium_100g.
ProductVisitor.prototype.visitMagnesium_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#zinc_100g.
ProductVisitor.prototype.visitZinc_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#copper_100g.
ProductVisitor.prototype.visitCopper_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#manganese_100g.
ProductVisitor.prototype.visitManganese_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#fluoride_100g.
ProductVisitor.prototype.visitFluoride_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#selenium_100g.
ProductVisitor.prototype.visitSelenium_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#chromium_100g.
ProductVisitor.prototype.visitChromium_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#molybdenum_100g.
ProductVisitor.prototype.visitMolybdenum_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#iodine_100g.
ProductVisitor.prototype.visitIodine_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#caffeine_100g.
ProductVisitor.prototype.visitCaffeine_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#taurine_100g.
ProductVisitor.prototype.visitTaurine_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#ph_100g.
ProductVisitor.prototype.visitPh_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#fruits_vegetables_nuts_100g.
ProductVisitor.prototype.visitFruits_vegetables_nuts_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#fruits_vegetables_nuts_dried_100g.
ProductVisitor.prototype.visitFruits_vegetables_nuts_dried_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#fruits_vegetables_nuts_estimate_100g.
ProductVisitor.prototype.visitFruits_vegetables_nuts_estimate_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#collagen_meat_protein_ratio_100g.
ProductVisitor.prototype.visitCollagen_meat_protein_ratio_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#cocoa_100g.
ProductVisitor.prototype.visitCocoa_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#chlorophyl_100g.
ProductVisitor.prototype.visitChlorophyl_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#carbon_footprint_100g.
ProductVisitor.prototype.visitCarbon_footprint_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#carbon_footprint_from_meat_or_fish_100g.
ProductVisitor.prototype.visitCarbon_footprint_from_meat_or_fish_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#nutrition_score_fr_100g.
ProductVisitor.prototype.visitNutrition_score_fr_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#nutrition_score_uk_100g.
ProductVisitor.prototype.visitNutrition_score_uk_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#glycemic_index_100g.
ProductVisitor.prototype.visitGlycemic_index_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#water_hardness_100g.
ProductVisitor.prototype.visitWater_hardness_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#choline_100g.
ProductVisitor.prototype.visitCholine_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#phylloquinone_100g.
ProductVisitor.prototype.visitPhylloquinone_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#beta_glucan_100g.
ProductVisitor.prototype.visitBeta_glucan_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#inositol_100g.
ProductVisitor.prototype.visitInositol_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#carnitine_100g.
ProductVisitor.prototype.visitCarnitine_100g = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#field.
ProductVisitor.prototype.visitField = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#lineEnding.
ProductVisitor.prototype.visitLineEnding = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#number.
ProductVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ProductParser#possibleDQuote.
ProductVisitor.prototype.visitPossibleDQuote = function(ctx) {
  return this.visitChildren(ctx);
};



exports.ProductVisitor = ProductVisitor;