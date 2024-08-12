/* Force Unit Conversion */
const forceConversionRates = {
    'N': 1,               // base unit, 1 N = 1 N
    'kN': 1e-3,           // 1 kN = 1000 N
    'mN': 1e3,            // 1 mN = 0.001 N
    'μN': 1e6,            // 1 μN = 0.000001 N
    'MN': 1e-6,           // 1 MN = 1,000,000 N
    'GN': 1e-9,           // 1 GN = 1,000,000,000 N
    'dyn': 1e5,           // 1 dyn = 0.00001 N
    'lbf': 4.44822,       // 1 lbf = 4.44822 N
    'kgf': 9.80665,       // 1 kgf = 9.80665 N
    'gf': 9.80665e-3,     // 1 gf = 0.00980665 N
    'tf': 9.80665e3,      // 1 tf = 9,806.65 N (metric ton-force)
    'kip': 4.44822e3,     // 1 kip = 4448.22 N
    'ozf': 0.278014,      // 1 ozf = 0.278014 N
};

export function getForceConversionRate(unit) {
    return forceConversionRates[unit];
}

export function convertForce(value, fromUnit, toUnit) {
    const fromRate = getForceConversionRate(fromUnit);
    const toRate = getForceConversionRate(toUnit);
    return (value / fromRate) * toRate; // Convert from the initial unit to Newtons, then to the target unit
}

/* Gravitational Constants */ 
const gravityValues = {
    'e': 9.807,
    'me': 3.70,
    've': 8.87,
    'ma': 3.71,
    'ju': 24.79,
    'sa': 10.44,
    'ur': 8.69,
    'ne': 11.15,
    'pl': 0.620,
    'mo': 1.625,
    'su': 274,
    'io': 1.796,
    'eu': 1.314,
    'ga': 1.428,
    'ca': 1.235,
    'ti': 1.352,
    'tr': 0.779
};

/* Other Gravitational Conversions */
const otherGravityConversions = {
    'gal': value => value * 100, // 1 m/s² = 100 Gal
    'fts2': value => value * 3.28084, // 1 m/s² = 3.28084 ft/s²
    'kmh2': value => value * 12960, // 1 m/s² = 12960 km/h²
    'mih2': value => value * 8053.71, // 1 m/s² = 8053.71 mi/h²
};

export function getGravityConstant(key) {
    return gravityValues[key];
}

export function convertGravity(value, unit) {
    const conversion = otherGravityConversions[unit];
    return conversion ? conversion(value) : value; // If no conversion found, return the original value
}

/* Mass Unit Conversion */
const massConversionRates = {
    'kg': 1,                // base unit, 1 kg = 1 kg
    'g': 1000,              // 1 kg = 1000 g
    'mg': 1e6,              // 1 kg = 1,000,000 mg
    'μg': 1e9,              // 1 kg = 1,000,000,000 μg
    'lb': 2.20462,          // 1 kg = 2.20462 lb
    'oz': 35.274,           // 1 kg = 35.274 oz
    't': 0.001,             // 1 kg = 0.001 t (metric ton)
    'st': 0.157473,         // 1 kg = 0.157473 st (stones)
    'cwt': 0.0196841,       // 1 kg = 0.0196841 cwt (hundredweights)
    'ton': 0.00110231,      // 1 kg = 0.00110231 ton (US ton/short ton)
    'long_ton': 0.000984207,// 1 kg = 0.000984207 long ton (imperial ton)
    'gr': 15432.4,          // 1 kg = 15432.4 gr (grains)
    'dwt': 643.015,         // 1 kg = 643.015 dwt (pennyweights)
    'carat': 5000,          // 1 kg = 5000 carat
    'amu': 6.02214e26,      // 1 kg = 6.02214 x 10^26 amu (atomic mass units)
    'slug': 0.0685218,      // 1 kg = 0.0685218 slug (slugs)
};

export function getMassConversionRate(unit) {
    return massConversionRates[unit];
}

export function convertMass(value, fromUnit, toUnit) {
    const fromRate = getMassConversionRate(fromUnit);
    const toRate = getMassConversionRate(toUnit);
    return (value / fromRate) * toRate; // Convert from the initial unit to kilograms, then to the target unit
}

