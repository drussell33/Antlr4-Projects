grammar Product;

/* Parser Rules */

file        : hdr row+ EOF;

hdr         : '"code' SEP 'url' SEP 'creator' SEP 'created_t' SEP 'last_modified_t' SEP 'product_name' SEP 'generic_name' SEP 'quantity' SEP 'packaging' SEP 'packaging_tags' SEP 'packaging_text' SEP 'brands' SEP 'brands_tags' SEP 'categories' SEP 'categories_tags' SEP 'origins' SEP 'origins_tags' SEP 'manufacturing_places' SEP 'manufacturing_places_tags' SEP 'labels' SEP 'labels_tags' SEP 'emb_codes' SEP 'emb_codes_tags' SEP 'cities' SEP 'cities_tags' SEP 'purchase_places' SEP 'stores' SEP 'countries' SEP 'ingredients_text' SEP 'allergens' SEP 'allergens_tags' SEP 'traces' SEP 'traces_tags' SEP 'serving_size' SEP 'serving_quantity' SEP 'no_nutriments' SEP 'additives_n' SEP 'additives_tags' SEP 'ingredients_from_palm_oil_n' SEP 'ingredients_from_palm_oil' SEP 'ingredients_from_palm_oil_tags' SEP 'ingredients_that_may_be_from_palm_oil_n' SEP 'ingredients_that_may_be_from_palm_oil' SEP 'ingredients_that_may_be_from_palm_oil_tags' SEP 'nutriscore_score' SEP 'nutriscore_grade' SEP 'nova_group' SEP 'pnns_groups_1' SEP 'pnns_groups_2' SEP 'states' SEP 'brand_owner' SEP 'main_category' SEP 'image_url' SEP 'image_small_url' SEP 'image_front_url' SEP 'image_front_small_url' SEP 'image_ingredients_url' SEP 'image_ingredients_small_url' SEP 'image_nutrition_url'  SEP 'image_nutrition_small_url'  SEP 'energy_kj_100g'  SEP 'energy_kcal_100g'  SEP 'energy_100g'  SEP 'energy_from_fat_100g'  SEP 'fat_100g'  SEP 'saturated_fat_100g'  SEP '_butyric_acid_100g'  SEP '_caproic_acid_100g'  SEP '_caprylic_acid_100g'  SEP '_capric_acid_100g'  SEP '_lauric_acid_100g'  SEP '_myristic_acid_100g'  SEP '_palmitic_acid_100g'  SEP '_stearic_acid_100g'  SEP '_arachidic_acid_100g'  SEP '_behenic_acid_100g' SEP '_lignoceric_acid_100g' SEP '_cerotic_acid_100g' SEP '_montanic_acid_100g' SEP '_melissic_acid_100g' SEP 'monounsaturated_fat_100g' SEP 'polyunsaturated_fat_100g' SEP 'omega_3_fat_100g' SEP '_alpha_linolenic_acid_100g' SEP '_eicosapentaenoic_acid_100g' SEP '_docosahexaenoic_acid_100g' SEP 'omega_6_fat_100g' SEP '_linoleic_acid_100g' SEP '_arachidonic_acid_100g' SEP '_gamma_linolenic_acid_100g' SEP '_dihomo_gamma_linolenic_acid_100g' SEP 'omega_9_fat_100g' SEP '_oleic_acid_100g' SEP '_elaidic_acid_100g' SEP '_gondoic_acid_100g' SEP '_mead_acid_100g' SEP '_erucic_acid_100g' SEP '_nervonic_acid_100g' SEP 'trans_fat_100g' SEP 'cholesterol_100g' SEP 'carbohydrates_100g' SEP 'sugars_100g' SEP '_sucrose_100g' SEP '_glucose_100g' SEP '_fructose_100g' SEP '_lactose_100g' SEP '_maltose_100g' SEP '_maltodextrins_100g' SEP 'starch_100g'  SEP 'polyols_100g' SEP 'fiber_100g' SEP '_soluble_fiber_100g' SEP '_insoluble_fiber_100g' SEP 'proteins_100g' SEP 'casein_100g' SEP 'serum_proteins_100g' SEP 'nucleotides_100g' SEP 'salt_100g' SEP 'sodium_100g' SEP 'alcohol_100g' SEP 'vitamin_a_100g' SEP 'beta_carotene_100g' SEP 'vitamin_d_100g' SEP 'vitamin_e_100g' SEP 'vitamin_k_100g' SEP 'vitamin_c_100g' SEP 'vitamin_b1_100g' SEP 'vitamin_b2_100g' SEP 'vitamin_pp_100g' SEP 'vitamin_b6_100g' SEP 'vitamin_b9_100g' SEP 'folates_100g' SEP 'vitamin_b12_100g' SEP 'biotin_100g' SEP 'pantothenic_acid_100g' SEP 'silica_100g' SEP 'bicarbonate_100g' SEP 'potassium_100g' SEP 'chloride_100g' SEP 'calcium_100g' SEP 'phosphorus_100g' SEP 'iron_100g' SEP 'magnesium_100g' SEP 'zinc_100g' SEP 'copper_100g' SEP 'manganese_100g' SEP 'fluoride_100g' SEP 'selenium_100g' SEP 'chromium_100g' SEP 'molybdenum_100g'  SEP 'iodine_100g'  SEP 'caffeine_100g'  SEP 'taurine_100g'  SEP 'ph_100g'  SEP 'fruits_vegetables_nuts_100g'  SEP 'fruits_vegetables_nuts_dried_100g'  SEP 'fruits_vegetables_nuts_estimate_100g'  SEP 'collagen_meat_protein_ratio_100g'  SEP 'cocoa_100g'  SEP 'chlorophyl_100g'  SEP 'carbon_footprint_100g'  SEP 'carbon_footprint_from_meat_or_fish_100g'  SEP 'nutrition_score_fr_100g'  SEP 'nutrition_score_uk_100g'  SEP 'glycemic_index_100g'  SEP 'water_hardness_100g'  SEP 'choline_100g'  SEP 'phylloquinone_100g'  SEP 'beta_glucan_100g'  SEP 'inositol_100g' SEP 'carnitine_100g",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,' NEWLINE
            ;

row         : possibleDQuote code SEP url SEP creator SEP created_t SEP last_modified_t SEP product_name SEP generic_name SEP uantity SEP packaging SEP packaging_tags SEP packaging_text SEP brands SEP brands_tags SEP categories SEP categories_tags SEP origins SEP origins_tags SEP manufacturing_places SEP manufacturing_places_tags SEP labels SEP labels_tags SEP emb_codes SEP emb_codes_tags SEP cities SEP cities_tags SEP purchase_places SEP stores SEP countries SEP ingredients_text SEP allergens SEP allergens_tags SEP traces SEP traces_tags SEP serving_size SEP serving_quantity SEP no_nutriments SEP additives_n SEP additives_tags SEP ingredients_from_palm_oil_n SEP ingredients_from_palm_oil SEP ingredients_from_palm_oil_tags SEP ingredients_that_may_be_from_palm_oil_n SEP ingredients_that_may_be_from_palm_oil SEP ingredients_that_may_be_from_palm_oil_tags SEP nutriscore_score SEP nutriscore_grade SEP nova_group SEP pnns_groups_1 SEP pnns_groups_2 SEP states SEP brand_owner SEP main_category SEP image_url SEP image_small_url SEP image_front_url SEP image_front_small_url SEP image_ingredients_url SEP image_ingredients_small_url SEP image_nutrition_url SEP image_nutrition_small_url SEP energy_kj_100g SEP energy_kcal_100g SEP energy_100g SEP energy_from_fat_100g SEP fat_100g SEP saturated_fat_100g SEP butyric_acid_100g SEP caproic_acid_100g SEP caprylic_acid_100g SEP capric_acid_100g SEP lauric_acid_100g SEP myristic_acid_100g SEP palmitic_acid_100g SEP stearic_acid_100g SEP arachidic_acid_100g SEP behenic_acid_100g SEP lignoceric_acid_100g SEP cerotic_acid_100g SEP montanic_acid_100g SEP melissic_acid_100g SEP monounsaturated_fat_100g SEP polyunsaturated_fat_100g SEP omega_3_fat_100g SEP alpha_linolenic_acid_100g SEP eicosapentaenoic_acid_100g SEP docosahexaenoic_acid_100g SEP omega_6_fat_100g SEP linoleic_acid_100g SEP arachidonic_acid_100g SEP gamma_linolenic_acid_100g SEP dihomo_gamma_linolenic_acid_100g SEP mega_9_fat_100g SEP oleic_acid_100g SEP elaidic_acid_100g SEP gondoic_acid_100g SEP mead_acid_100g SEP erucic_acid_100g SEP nervonic_acid_100g SEP trans_fat_100g SEP cholesterol_100g SEP carbohydrates_100g SEP ugars_100g SEP sucrose_100g SEP glucose_100g SEP fructose_100g SEP lactose_100g SEP maltose_100g SEP maltodextrins_100g SEP starch_100g SEP polyols_100g SEP fiber_100g SEP soluble_fiber_100g SEP insoluble_fiber_100g SEP proteins_100g SEP casein_100g SEP serum_proteins_100g SEP nucleotides_100g SEP salt_100g SEP sodium_100g SEP alcohol_100g SEP vitamin_a_100g SEP beta_carotene_100g SEP vitamin_d_100g SEP vitamin_e_100g SEP vitamin_k_100g SEP vitamin_c_100g SEP vitamin_b1_100g SEP vitamin_b2_100g SEP vitamin_pp_100g SEP vitamin_b6_100g SEP vitamin_b9_100g SEP folates_100g SEP vitamin_b12_100g SEP biotin_100g SEP pantothenic_acid_100g SEP silica_100g SEP bicarbonate_100g SEP potassium_100g SEP chloride_100g SEP calcium_100g SEP phosphorus_100g SEP iron_100g SEP magnesium_100g SEP zinc_100g SEP copper_100g SEP manganese_100g SEP fluoride_100g SEP selenium_100g SEP chromium_100g SEP molybdenum_100g SEP iodine_100g SEP caffeine_100g SEP taurine_100g SEP ph_100g SEP fruits_vegetables_nuts_100g SEP fruits_vegetables_nuts_dried_100g SEP fruits_vegetables_nuts_estimate_100g SEP collagen_meat_protein_ratio_100g SEP cocoa_100g SEP chlorophyl_100g SEP carbon_footprint_100g SEP carbon_footprint_from_meat_or_fish_100g SEP nutrition_score_fr_100g SEP nutrition_score_uk_100g SEP glycemic_index_100g SEP water_hardness_100g SEP choline_100g SEP phylloquinone_100g SEP beta_glucan_100g SEP inositol_100g SEP carnitine_100g NEWLINE
            ;

//_________________________________________________

code                                            : field ; 
url                                             : field ; 
creator                                         : field ; 
created_t                                       : field ; 
last_modified_t                                 : field ; 
product_name                                    : field ; 
generic_name                                    : field ; 
uantity                                         : field ; 
packaging                                       : field ; 
packaging_tags                                  : field ; 
packaging_text                                  : field ; 
brands                                          : field ; 
brands_tags                                     : field ; 
categories                                      : field ; 
categories_tags                                 : field ; 
origins                                         : field ; 
origins_tags                                    : field ; 
manufacturing_places                            : field ; 
manufacturing_places_tags                       : field ; 
labels                                          : field ; 
labels_tags                                     : field ; 
emb_codes                                       : field ; 
emb_codes_tags                                  : field ; 
cities                                          : field ; 
cities_tags                                     : field ;   
purchase_places                                 : field ; 
stores                                          : field ; 
countries                                       : field ; 
ingredients_text                                : field ; 
allergens                                       : field ; 
allergens_tags                                  : field ; 
traces                                          : field ; 
traces_tags                                     : field ; 
serving_size                                    : field ; 
serving_quantity                                : field ; 
no_nutriments                                   : field ; 
additives_n                                     : field ; 
additives_tags                                  : field ; 
ingredients_from_palm_oil_n                     : field ; 
ingredients_from_palm_oil                       : field ; 
ingredients_from_palm_oil_tags                  : field ; 
ingredients_that_may_be_from_palm_oil_n         : field ; 
ingredients_that_may_be_from_palm_oil           : field ; 
ingredients_that_may_be_from_palm_oil_tags      : field ; 
nutriscore_score                                : field ; 
nutriscore_grade                                : field ; 
nova_group                                      : field ; 
pnns_groups_1                                   : field ; 
pnns_groups_2                                   : field ; 
states                                          : field ; 
brand_owner                                     : field ; 
main_category                                   : field ; 
image_url                                       : field ; 
image_small_url                                 : field ; 
image_front_url                                 : field ; 
image_front_small_url                           : field ; 
image_ingredients_url                           : field ; 
image_ingredients_small_url                     : field ; 
image_nutrition_url                             : field ; 
image_nutrition_small_url                       : field ; 
energy_kj_100g                                  : field ; 
energy_kcal_100g                                : field ; 
energy_100g                                     : field ; 
energy_from_fat_100g                            : field ; 
fat_100g                                        : field ; 
saturated_fat_100g                              : field ; 
butyric_acid_100g                               : field ; 
caproic_acid_100g                               : field ; 
caprylic_acid_100g                              : field ; 
capric_acid_100g                                : field ; 
lauric_acid_100g                                : field ; 
myristic_acid_100g                              : field ; 
palmitic_acid_100g                              : field ; 
stearic_acid_100g                               : field ; 
arachidic_acid_100g                             : field ; 
behenic_acid_100g                               : field ; 
lignoceric_acid_100g                            : field ; 
cerotic_acid_100g                               : field ; 
montanic_acid_100g                              : field ; 
melissic_acid_100g                              : field ; 
monounsaturated_fat_100g                        : field ; 
polyunsaturated_fat_100g                        : field ; 
omega_3_fat_100g                                : field ; 
alpha_linolenic_acid_100g                       : field ; 
eicosapentaenoic_acid_100g                      : field ; 
docosahexaenoic_acid_100g                       : field ; 
omega_6_fat_100g                                : field ; 
linoleic_acid_100g                              : field ; 
arachidonic_acid_100g                           : field ; 
gamma_linolenic_acid_100g                       : field ; 
dihomo_gamma_linolenic_acid_100g                : field ; 
mega_9_fat_100g                                 : field ; 
oleic_acid_100g                                 : field ; 
elaidic_acid_100g                               : field ; 
gondoic_acid_100g                               : field ; 
mead_acid_100g                                  : field ; 
erucic_acid_100g                                : field ; 
nervonic_acid_100g                              : field ; 
trans_fat_100g                                  : field ; 
cholesterol_100g                                : field ; 
carbohydrates_100g                              : field ; 
ugars_100g                                      : field ; 
sucrose_100g                                    : field ; 
glucose_100g                                    : field ; 
fructose_100g                                   : field ; 
lactose_100g                                    : field ; 
maltose_100g                                    : field ; 
maltodextrins_100g                              : field ; 
starch_100g                                     : field ; 
polyols_100g                                    : field ; 
fiber_100g                                      : field ; 
soluble_fiber_100g                              : field ; 
insoluble_fiber_100g                            : field ; 
proteins_100g                                   : field ; 
casein_100g                                     : field ; 
serum_proteins_100g                             : field ; 
nucleotides_100g                                : field ; 
salt_100g                                       : field ; 
sodium_100g                                     : field ; 
alcohol_100g                                    : field ; 
vitamin_a_100g                                  : field ; 
beta_carotene_100g                              : field ; 
vitamin_d_100g                                  : field ; 
vitamin_e_100g                                  : field ; 
vitamin_k_100g                                  : field ; 
vitamin_c_100g                                  : field ; 
vitamin_b1_100g                                 : field ; 
vitamin_b2_100g                                 : field ; 
vitamin_pp_100g                                 : field ; 
vitamin_b6_100g                                 : field ; 
vitamin_b9_100g                                 : field ; 
folates_100g                                    : field ; 
vitamin_b12_100g                                : field ; 
biotin_100g                                     : field ; 
pantothenic_acid_100g                           : field ; 
silica_100g                                     : field ; 
bicarbonate_100g                                : field ; 
potassium_100g                                  : field ; 
chloride_100g                                   : field ; 
calcium_100g                                    : field ; 
phosphorus_100g                                 : field ; 
iron_100g                                       : field ; 
magnesium_100g                                  : field ; 
zinc_100g                                       : field ; 
copper_100g                                     : field ; 
manganese_100g                                  : field ; 
fluoride_100g                                   : field ; 
selenium_100g                                   : field ; 
chromium_100g                                   : field ; 
molybdenum_100g                                 : field ; 
iodine_100g                                     : field ; 
caffeine_100g                                   : field ; 
taurine_100g                                    : field ; 
ph_100g                                         : field ; 
fruits_vegetables_nuts_100g                     : field ; 
fruits_vegetables_nuts_dried_100g               : field ; 
fruits_vegetables_nuts_estimate_100g            : field ; 
collagen_meat_protein_ratio_100g                : field ; 
cocoa_100g                                      : field ; 
chlorophyl_100g                                 : field ; 
carbon_footprint_100g                           : field ; 
carbon_footprint_from_meat_or_fish_100g         : field ; 
nutrition_score_fr_100g                         : field ; 
nutrition_score_uk_100g                         : field ; 
glycemic_index_100g                             : field ; 
water_hardness_100g                             : field ; 
choline_100g                                    : field ; 
phylloquinone_100g                              : field ; 
beta_glucan_100g                                : field ; 
inositol_100g                                   : field ; 
carnitine_100g                                  : field ; 

//_________________________________________________

field       : TEXT
            |
            ;
lineEnding  : COMMA+ ;
number      : NUMBER ;
possibleDQuote : DQUOTE? ;

/* Lexer Rules */

SEP         : '\t' ;
NEWLINE     : '\r'? '\n' ;
NUMBER      : '-'? [0_9]+ ;
TEXT        : ~[\t\r\n|]+ ;   // whitespace will be included with the TEXT
COMMA       : ',';
DQUOTE      : '"';