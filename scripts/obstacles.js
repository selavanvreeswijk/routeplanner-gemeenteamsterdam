import data from "../src/cbadataset.json" with { type: "json" };

const property = data.features[1].properties;

console.log(property);

const filterGroups = {
	algemeen: [
		"Toegankelijk_gebouw",
		"Persoonlijke_assistent",
		"Mobiele_pin",
		"Rustplekken",
	],
	slechtTerBeen: [
		"Gehandicaptenparkeerplaatsen_binnen_100_m_",
		"Voorrijden_toegestaan",
		"Trappen_met_leuning_entree",
		"Aantal_traptreden",
		"Toegankelijke_lift",
		"Toegang_zonder_drempels_en_treden_worden_overbrugd_door_een_hellend_vlak",
		"Toegankelijke_hotelkamers",
		"Toegankelijke_kleedkamer",
		"Toegankelijke_douche",
	],
	rolstoel: [
		// slechtterbeen zit hier ook tussen
		"Gehandicaptenparkeerplaatsen_binnen_100_m_",
		"Voorrijden_toegestaan",
		"Trappen_met_leuning_entree",
		"Aantal_traptreden",
		"Toegankelijke_lift",
		"Toegang_zonder_drempels_en_treden_worden_overbrugd_door_een_hellend_vlak",
		"Toegankelijke_hotelkamers",
		"Toegankelijke_kleedkamer",
		"Toegankelijke_douche",
		"Drempelloos_gebouw_en_doorgangen_zijn_voldoende_breed",
		"Rolstoelvriendelijk_toilet",
		"Speciale_toeschouwersplaatsen_rolstoelgebruikers",
		"Restaurant_tafels_onderrijdbaar",
	],
	slechtziend: [
		"Assistentiehond_toegestaan",
		"Toegankelijke_lift",
		"Geleidelijnen_en_vloermarkeringen",
		"Audiodescriptie_of_beeldbeschrijving",
		"Toegankelijke_afdruk",
		"Materiaal_in_braille",
		"Zintuigelijke_beleving",
	],
	slechthorend: [
		"Open_ondertiteling",
		"Gesloten_ondertiteling",
		"Tolk_gebarentaal",
		"Ringleiding_voor_slechthorenden",
	],
	prikkels: ["Prikkelarme_ruimte", "Prikkelarme_uren"],
	hiddenDisability: ["Herkenning_Sunflower_Keycord"],
};

function getNameCountLocation(name, data, filterGroups) {
    const feature = data.features.find( f => f.properties.Naam_locatie === name)
    if(!feature){
        console.log("geen locatie gevonden:", name)
        return null
    }

    return countFilter(feature, filterGroups)
}

function countFilter(feature, filterGroups) {
	const properties = feature.properties;
	const count = {};

	for (const [filter, keys] of Object.entries(filterGroups)) {
		// maak van de filterGroups paren van de keys and values, dus bijv ["prikkels", ["Prikkelarme_ruimte", "Prikkelarme_uren"]]
		counts[filter] = { Ja: 0, Nee: 0, Onbekend: 0 };

		for (const key of keys) {
            // pak de values van elke key
			const filterValue = properties[key];

			if (filterValue !== undefined) {
				const value = filterValue.trim();

				if (value in counts[filter]) {
					counts[filter][value]++;
				}
			}
		}
	}
	return counts;
}
