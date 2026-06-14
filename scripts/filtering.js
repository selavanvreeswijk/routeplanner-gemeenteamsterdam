// SELA: Deze functie telt per filtergroep (bijv. "rolstoel") hoeveel kenmerken van een locatie "Ja", "Nee" of "Onbekend" zijn.
// Zo kan de app later berekenen hoe toegankelijk een locatie is voor een bepaalde categorie.
export function countFilter(feature, filterGroups) {
  const properties = feature.properties;
  const count = {};

  // SELA: We lopen door alle filtergroepen heen (bijv. rolstoel, slechtziend, enz.)
  // Object.entries maakt er paren van: [naam, [lijst van JSON-velden]]
  for (const [filter, keys] of Object.entries(filterGroups)) {
    // maak van de filterGroups paren van de keys and values, dus bijv ["prikkels", ["Prikkelarme_ruimte", "Prikkelarme_uren"]]
    // SELA: We beginnen met een lege teller voor elke filtergroep
    count[filter] = { Ja: 0, Nee: 0, Onbekend: 0 };

    for (const key of keys) {
      // pak de values van elke key
      const filterValue = properties[key];

      // SELA: Als het veld bestaat in de JSON-data, kijken we of de waarde "Ja", "Nee" of "Onbekend" is
      // en tellen we die op bij de juiste teller
      if (filterValue !== undefined) {
        const value = filterValue.trim();

				if (value in count[filter]) {
					count[filter][value]++;
				}
			}
		}
	}
	// SELA: We sturen het count-object terug zodat het gebruikt kan worden om locaties te sorteren
	return count;
}
