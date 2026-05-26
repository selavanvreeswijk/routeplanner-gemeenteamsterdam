import data from "../src/cbadataset.json" with { type: "json" };

const property = data.features[1].properties

console.log(property)
