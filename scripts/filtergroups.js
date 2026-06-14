// SELA: Hier definiëren we welke JSON-velden bij welke toegankelijkheidscategorie horen.
// Dit bestand is de "vertaalsleutel" tussen de ruwe JSON-data en de filterknoppen in de app.
// Elke categorie heeft een lijst van veldnamen uit de CBA-dataset van de gemeente Amsterdam.
export const filterGroups = {
	algemeen: [
		"Toegankelijk_gebouw",
		"Persoonlijke_assistent",
		"Mobiele_pin",
		"Rustplekken",
	],
	slechtterbeen: [
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
	hiddendisability: ["Herkenning_Sunflower_Keycord"],
};
