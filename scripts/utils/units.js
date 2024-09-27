/* Acceleration Unit Conversion */
const accelerationConversionRates = {
  ms2: 1, // base unit, 1 m/s² = 1 m/s²
  g: 9.80665, // 1 g = 9.80665 m/s²
  gal: 0.01, // 1 Gal = 0.01 m/s²
  fts2: 0.3048, // 1 ft/s² = 0.3048 m/s²
  kmh2: 7.71604938e-7, // 1 km/h² = 7.71604938e-7 m/s²
  mih2: 1.25160106e-6, // 1 mi/h² = 1.25160106e-6 m/s²
};

export function getAccelerationConversionRate(unit) {
  return accelerationConversionRates[unit];
}

export function convertAcceleration(
  value,
  fromUnit,
  toUnit,
  skipGConversion = false
) {
  if (skipGConversion && fromUnit === "g" && toUnit === "ms2") {
    return value; // Skip conversion, treat g as a base unit
  }

  const fromRate = getAccelerationConversionRate(fromUnit);
  const toRate = getAccelerationConversionRate(toUnit);

  if (fromRate === undefined || toRate === undefined) {
    console.error(
      `Invalid acceleration unit provided: fromUnit=${fromUnit}, toUnit=${toUnit}`
    );
    return NaN;
  }

  return (value * fromRate) / toRate;
}

/* Displacement Unit Conversion */
const displacementConversionRates = {
  m: 1, // base unit, 1 m = 1 m
  km: 1e-3, // 1 km = 1000 m
  cm: 1e2, // 1 cm = 0.01 m
  mm: 1e3, // 1 mm = 0.001 m
  in: 39.3701, // 1 in = 0.0254 m
  ft: 3.28084, // 1 ft = 0.3048 m
  yd: 1.09361, // 1 yd = 0.9144 m
  mi: 0.000621371, // 1 mi = 1609.34 m
  nmi: 0.000539957, // 1 nmi = 1852 m
};

export function convertDisplacement(value, fromUnit, toUnit) {
  const fromRate = displacementConversionRates[fromUnit];
  const toRate = displacementConversionRates[toUnit];
  return (value / fromRate) * toRate;
}

/* Force Unit Conversion */
const forceConversionRates = {
  N: 1, // base unit, 1 N = 1 N
  kN: 1e-3, // 1 kN = 1000 N
  mN: 1e3, // 1 mN = 0.001 N
  μN: 1e6, // 1 μN = 0.000001 N
  MN: 1e-6, // 1 MN = 1,000,000 N
  GN: 1e-9, // 1 GN = 1,000,000,000 N
  dyn: 1e5, // 1 dyn = 0.00001 N
  lbf: 4.44822, // 1 lbf = 4.44822 N
  kgf: 9.80665, // 1 kgf = 9.80665 N
  gf: 9.80665e-3, // 1 gf = 0.00980665 N
  tf: 9.80665e3, // 1 tf = 9,806.65 N (metric ton-force)
  kip: 4.44822e3, // 1 kip = 4448.22 N
  ozf: 0.278014, // 1 ozf = 0.278014 N
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
  e: 9.807,
  me: 3.7,
  ve: 8.87,
  ma: 3.71,
  ju: 24.79,
  sa: 10.44,
  ur: 8.69,
  ne: 11.15,
  pl: 0.62,
  mo: 1.625,
  su: 274,
  io: 1.796,
  eu: 1.314,
  ga: 1.428,
  ca: 1.235,
  ti: 1.352,
  tr: 0.779,
};

/* Other Gravitational Conversions */
const otherGravityConversions = {
  gal: (value) => value * 100, // 1 m/s² = 100 Gal
  fts2: (value) => value * 3.28084, // 1 m/s² = 3.28084 ft/s²
  kmh2: (value) => value * 12960, // 1 m/s² = 12960 km/h²
  mih2: (value) => value * 8053.71, // 1 m/s² = 8053.71 mi/h²
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
  kg: 1, // base unit, 1 kg = 1 kg
  g: 1000, // 1 kg = 1000 g
  mg: 1e6, // 1 kg = 1,000,000 mg
  μg: 1e9, // 1 kg = 1,000,000,000 μg
  lb: 2.20462, // 1 kg = 2.20462 lb
  oz: 35.274, // 1 kg = 35.274 oz
  t: 0.001, // 1 kg = 0.001 t (metric ton)
  st: 0.157473, // 1 kg = 0.157473 st (stones)
  cwt: 0.0196841, // 1 kg = 0.0196841 cwt (hundredweights)
  ton: 0.00110231, // 1 kg = 0.00110231 ton (US ton/short ton)
  long_ton: 0.000984207, // 1 kg = 0.000984207 long ton (imperial ton)
  gr: 15432.4, // 1 kg = 15432.4 gr (grains)
  dwt: 643.015, // 1 kg = 643.015 dwt (pennyweights)
  carat: 5000, // 1 kg = 5000 carat
  amu: 6.02214e26, // 1 kg = 6.02214 x 10^26 amu (atomic mass units)
  slug: 0.0685218, // 1 kg = 0.0685218 slug (slugs)
};

export function getMassConversionRate(unit) {
  return massConversionRates[unit];
}

export function convertMass(value, fromUnit, toUnit) {
  const fromRate = getMassConversionRate(fromUnit);
  const toRate = getMassConversionRate(toUnit);
  return (value / fromRate) * toRate; // Convert from the initial unit to kilograms, then to the target unit
}

/* Momentum Unit Conversion */
const momentumConversionRates = {
  kg_m_s: 1, // base unit, 1 kg·m/s = 1 kg·m/s
  g_cm_s: 1e3, // 1 kg·m/s = 1000 g·cm/s
  mg_mm_s: 1e6, // 1 kg·m/s = 1,000,000 mg·mm/s
  N_s: 1, // 1 kg·m/s = 1 N·s (since 1 N·s = 1 kg·m/s)
  slug_ft_s: 1.35582, // 1 kg·m/s = 1.35582 slug·ft/s
  lb_ft_s: 0.138255, // 1 kg·m/s = 0.138255 lb·ft/s
  oz_in_s: 0.0086396, // 1 kg·m/s = 0.0086396 oz·in/s
  dyne_s: 1e5, // 1 kg·m/s = 100,000 dyne·s
  gf_cm_s: 98.0665, // 1 kg·m/s = 98.0665 gf·cm/s
};

export function getMomentumConversionRate(unit) {
  return momentumConversionRates[unit];
}

export function convertMomentum(value, fromUnit, toUnit) {
  const fromRate = getMomentumConversionRate(fromUnit);
  const toRate = getMomentumConversionRate(toUnit);
  return (value / fromRate) * toRate; // Convert from the initial unit to kg·m/s, then to the target unit
}

/* Time Unit Conversion */
const timeConversionRates = {
  s: 1, // base unit, 1 s = 1 s
  min: 1 / 60, // 1 min = 60 s
  hr: 1 / 3600, // 1 hr = 3600 s
  day: 1 / 86400, // 1 day = 86400 s
  yr: 1 / 31536000, // 1 yr = 31536000 s
  ms: 1e3, // 1 s = 1000 ms
  micros: 1e6, // 1 s = 1,000,000 µs
  ns: 1e9, // 1 s = 1,000,000,000 ns
};

export function getTimeConversionRate(unit) {
  return timeConversionRates[unit];
}

export function convertTime(value, fromUnit, toUnit) {
  const fromRate = getTimeConversionRate(fromUnit);
  const toRate = getTimeConversionRate(toUnit);
  return (value / fromRate) * toRate; // Convert from the initial unit to seconds, then to the target unit
}

// Velocity Unit Conversion
const velocityConversionRates = {
  ms: 1, // base unit, 1 m/s = 1 m/s
  kms: 1e-3, // 1 km/s = 1000 m/s
  kmph: 1 / 3.6, // 1 km/h = 0.27778 m/s
  mph: 0.44704, // 1 mph = 0.44704 m/s
  fts: 0.3048, // 1 ft/s = 0.3048 m/s
  ftm: 0.00508, // 1 ft/min = 0.00508 m/s
  mpm: 1 / 60, // 1 m/min = 0.01667 m/s
  mps: 1609.34, // 1 mile/s = 1609.34 m/s
  kn: 0.514444, // 1 knot = 0.514444 m/s
};

export function getVelocityConversionRate(unit) {
  return velocityConversionRates[unit];
}

export function convertVelocity(value, fromUnit, toUnit) {
  // Make sure this is exported

  // Get the conversion rates
  const fromRate = getVelocityConversionRate(fromUnit);
  const toRate = getVelocityConversionRate(toUnit);

  // Perform the conversion
  const result = (value * fromRate) / toRate;

  return result;
}
