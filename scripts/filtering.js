// Telt per filtergroep hoeveel kenmerken van een locatie "Ja", "Nee" of "Onbekend" zijn
// Later gaat de app berekenen hoe toegankelijk de locatie is voor een bepaalde categorie
export function countFilter(feature, filterGroups) {
  const properties = feature.properties;
  const count = {};

  // Eerst door alle filtergroepen heenlopen
  // Object.entries maakt er paren van: [naam, [lijst van JSON-velden]]
  for (const [filter, keys] of Object.entries(filterGroups)) {
    // maak van de filterGroups paren van de keys and values
    count[filter] = { Ja: 0, Nee: 0, Onbekend: 0 };

    for (const key of keys) {
      const filterValue = properties[key];

      // Als het veld bestaat in de JSON-data, kijken we of de waarde "Ja", "Nee" of "Onbekend" is
      // en tellen we die op bij de juiste teller
      if (filterValue !== undefined) {
        const value = filterValue.trim();

				if (value in count[filter]) {
					count[filter][value]++;
				}
			}
		}
	}
  
	return count;
}
