export function countFilter(feature, filterGroups) {
  const properties = feature.properties;
  const count = {};

  for (const [filter, keys] of Object.entries(filterGroups)) {
    // maak van de filterGroups paren van de keys and values, dus bijv ["prikkels", ["Prikkelarme_ruimte", "Prikkelarme_uren"]]
    count[filter] = { Ja: 0, Nee: 0, Onbekend: 0 };

    for (const key of keys) {
      // pak de values van elke key
      const filterValue = properties[key];

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
