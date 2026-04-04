/* =========================================================
   UNIVERSAL UNIT CONVERSIONS
   Rule used throughout:
   Each rate is the value of 1 unit expressed in SI base units.
   Conversion formula:
   result = value * fromRate / toRate
   ========================================================= */

/* Acceleration Unit Conversion
   Base unit: m/s²
*/
const accelerationConversionRates = {
  ms2: 1,
  g: 9.80665,
  gal: 0.01,
  fts2: 0.3048,
  kmh2: 1000 / (3600 * 3600),
  mih2: 1609.344 / (3600 * 3600),
};

export function getAccelerationConversionRate(unit) {
  return accelerationConversionRates[unit];
}

export function convertAcceleration(
  value,
  fromUnit,
  toUnit,
  skipGConversion = false,
) {
  if (skipGConversion && fromUnit === "g" && toUnit === "ms2") {
    return value;
  }

  const fromRate = getAccelerationConversionRate(fromUnit);
  const toRate = getAccelerationConversionRate(toUnit);

  if (fromRate === undefined || toRate === undefined) {
    console.error(
      `Invalid acceleration unit provided: fromUnit=${fromUnit}, toUnit=${toUnit}`,
    );
    return NaN;
  }

  return (value * fromRate) / toRate;
}

/* Displacement Unit Conversion
   Base unit: m
*/
const displacementConversionRates = {
  m: 1,
  km: 1000,
  cm: 0.01,
  mm: 0.001,
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.344,
  nmi: 1852,
};

export function getDisplacementConversionRate(unit) {
  return displacementConversionRates[unit];
}

export function convertDisplacement(value, fromUnit, toUnit) {
  const fromRate = getDisplacementConversionRate(fromUnit);
  const toRate = getDisplacementConversionRate(toUnit);

  if (fromRate === undefined || toRate === undefined) {
    console.error(
      `Invalid displacement unit provided: fromUnit=${fromUnit}, toUnit=${toUnit}`,
    );
    return NaN;
  }

  return (value * fromRate) / toRate;
}

/* Force Unit Conversion
   Base unit: N
*/
const forceConversionRates = {
  N: 1,
  kN: 1000,
  mN: 0.001,
  μN: 0.000001,
  MN: 1000000,
  GN: 1000000000,
  dyn: 0.00001,
  lbf: 4.4482216152605,
  kgf: 9.80665,
  gf: 0.00980665,
  tf: 9806.65,
  kip: 4448.2216152605,
  ozf: 0.278013850953781,
};

export function getForceConversionRate(unit) {
  return forceConversionRates[unit];
}

export function convertForce(value, fromUnit, toUnit) {
  const fromRate = getForceConversionRate(fromUnit);
  const toRate = getForceConversionRate(toUnit);

  if (fromRate === undefined || toRate === undefined) {
    console.error(
      `Invalid force unit provided: fromUnit=${fromUnit}, toUnit=${toUnit}`,
    );
    return NaN;
  }

  return (value * fromRate) / toRate;
}

/* Gravitational Constants
   All values in m/s²
*/
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

export function getGravityConstant(key) {
  return gravityValues[key];
}

export function convertGravity(value, unit) {
  switch (unit) {
    case "ms2":
      return value;
    case "gal":
      return value / 0.01;
    case "fts2":
      return value / 0.3048;
    case "kmh2":
      return value / (1000 / (3600 * 3600));
    case "mih2":
      return value / (1609.344 / (3600 * 3600));
    case "g":
      return value / 9.80665;
    default:
      return value;
  }
}

/* Mass Unit Conversion
   Base unit: kg
*/
const massConversionRates = {
  kg: 1,
  g: 0.001,
  mg: 0.000001,
  μg: 0.000000001,
  lb: 0.45359237,
  oz: 0.028349523125,
  t: 1000,
  st: 6.35029318,
  cwt: 50.80234544,
  ton: 907.18474,
  long_ton: 1016.0469088,
  gr: 0.00006479891,
  dwt: 0.00155517384,
  carat: 0.0002,
  amu: 1.6605390666e-27,
  slug: 14.59390294,
};

export function getMassConversionRate(unit) {
  return massConversionRates[unit];
}

export function convertMass(value, fromUnit, toUnit) {
  const fromRate = getMassConversionRate(fromUnit);
  const toRate = getMassConversionRate(toUnit);

  if (fromRate === undefined || toRate === undefined) {
    console.error(
      `Invalid mass unit provided: fromUnit=${fromUnit}, toUnit=${toUnit}`,
    );
    return NaN;
  }

  return (value * fromRate) / toRate;
}

/* Momentum Unit Conversion
   Base unit: kg·m/s
*/
const momentumConversionRates = {
  kg_m_s: 1,
  g_cm_s: 0.00001,
  mg_mm_s: 0.000000001,
  N_s: 1,
  slug_ft_s: 14.59390294 * 0.3048,
  lb_ft_s: 0.45359237 * 0.3048,
  oz_in_s: 0.028349523125 * 0.0254,
  dyne_s: 0.00001,
  gf_cm_s: 0.00980665 * 0.01,
};

export function getMomentumConversionRate(unit) {
  return momentumConversionRates[unit];
}

export function convertMomentum(value, fromUnit, toUnit) {
  const fromRate = getMomentumConversionRate(fromUnit);
  const toRate = getMomentumConversionRate(toUnit);

  if (fromRate === undefined || toRate === undefined) {
    console.error(
      `Invalid momentum unit provided: fromUnit=${fromUnit}, toUnit=${toUnit}`,
    );
    return NaN;
  }

  return (value * fromRate) / toRate;
}

/* Time Unit Conversion
   Base unit: s
*/
const timeConversionRates = {
  s: 1,
  min: 60,
  hr: 3600,
  day: 86400,
  yr: 31536000,
  ms: 0.001,
  micros: 0.000001,
  ns: 0.000000001,
};

export function getTimeConversionRate(unit) {
  return timeConversionRates[unit];
}

export function convertTime(value, fromUnit, toUnit) {
  const fromRate = getTimeConversionRate(fromUnit);
  const toRate = getTimeConversionRate(toUnit);

  if (fromRate === undefined || toRate === undefined) {
    console.error(
      `Invalid time unit provided: fromUnit=${fromUnit}, toUnit=${toUnit}`,
    );
    return NaN;
  }

  return (value * fromRate) / toRate;
}

/* Velocity Unit Conversion
   Base unit: m/s
*/
const velocityConversionRates = {
  ms: 1,
  kms: 1000,
  kmph: 1000 / 3600,
  mph: 1609.344 / 3600,
  fts: 0.3048,
  ftm: 0.3048 / 60,
  mpm: 1 / 60,
  mps: 1609.344,
  kn: 1852 / 3600,
};

export function getVelocityConversionRate(unit) {
  return velocityConversionRates[unit];
}

export function convertVelocity(value, fromUnit, toUnit) {
  const fromRate = getVelocityConversionRate(fromUnit);
  const toRate = getVelocityConversionRate(toUnit);

  if (fromRate === undefined || toRate === undefined) {
    console.error(
      `Invalid velocity unit provided: fromUnit=${fromUnit}, toUnit=${toUnit}`,
    );
    return NaN;
  }

  return (value * fromRate) / toRate;
}

/* Energy Unit Conversion
   Base unit: J
*/
const energyConversionRates = {
  mJ: 0.001,
  J: 1,
  kJ: 1000,
  MJ: 1000000,
};

export function getEnergyConversionRate(unit) {
  return energyConversionRates[unit];
}

export function convertEnergy(value, fromUnit, toUnit) {
  const fromRate = getEnergyConversionRate(fromUnit);
  const toRate = getEnergyConversionRate(toUnit);

  if (fromRate === undefined || toRate === undefined) {
    console.error(
      `Invalid energy unit provided: fromUnit=${fromUnit}, toUnit=${toUnit}`,
    );
    return NaN;
  }

  return (value * fromRate) / toRate;
}

/* Spring Constant Unit Conversion
   Base unit: N/m
*/
const springConstantConversionRates = {
  Nmm: 1000,
  Ncm: 100,
  Nm: 1,
  kNm: 1000,
};

export function getSpringConstantConversionRate(unit) {
  return springConstantConversionRates[unit];
}

export function convertSpringConstant(value, fromUnit, toUnit) {
  const fromRate = getSpringConstantConversionRate(fromUnit);
  const toRate = getSpringConstantConversionRate(toUnit);

  if (fromRate === undefined || toRate === undefined) {
    console.error(
      `Invalid spring constant unit provided: fromUnit=${fromUnit}, toUnit=${toUnit}`,
    );
    return NaN;
  }

  return (value * fromRate) / toRate;
}
