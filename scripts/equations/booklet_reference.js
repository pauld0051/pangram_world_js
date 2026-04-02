const referenceData = [
  {
    id: "areaTriangle",
    section: "maths",
    quantity: "Area of a triangle",
    note: "b is the base, h is the height",
    symbolLatex: "A",
    valueLatex: "A = \\frac{1}{2}bh",
    renderLatex: "A = \\frac{1}{2}bh",
    text: "A = ½bh",
    latex: "A = \\frac{1}{2}bh",
    tags: "area triangle geometry maths",
  },
  {
    id: "areaCircle",
    section: "maths",
    quantity: "Area of a circle",
    note: "r is the radius",
    symbolLatex: "A",
    valueLatex: "A = \\pi r^2",
    renderLatex: "A = \\pi r^2",
    text: "A = πr²",
    latex: "A = \\pi r^2",
    tags: "area circle geometry maths",
  },
  {
    id: "circumferenceCircle",
    section: "maths",
    quantity: "Circumference of a circle",
    note: "r is the radius",
    symbolLatex: "C",
    valueLatex: "C = 2\\pi r",
    renderLatex: "C = 2\\pi r",
    text: "C = 2πr",
    latex: "C = 2\\pi r",
    tags: "circumference circle geometry maths",
  },
  {
    id: "volumeCuboid",
    section: "maths",
    quantity: "Volume of a cuboid",
    note: "l is length, w is width, h is height",
    symbolLatex: "V",
    valueLatex: "V = lwh",
    renderLatex: "V = lwh",
    text: "V = lwh",
    latex: "V = lwh",
    tags: "volume cuboid geometry maths",
  },
  {
    id: "volumeCylinder",
    section: "maths",
    quantity: "Volume of a cylinder",
    note: "r is the radius, h is the height",
    symbolLatex: "V",
    valueLatex: "V = \\pi r^2 h",
    renderLatex: "V = \\pi r^2 h",
    text: "V = πr²h",
    latex: "V = \\pi r^2 h",
    tags: "volume cylinder geometry maths",
  },
  {
    id: "volumePrism",
    section: "maths",
    quantity: "Volume of a prism",
    note: "A is cross-sectional area, h is height",
    symbolLatex: "V",
    valueLatex: "V = Ah",
    renderLatex: "V = Ah",
    text: "V = Ah",
    latex: "V = Ah",
    tags: "volume prism geometry maths",
  },
  {
    id: "volumeSphere",
    section: "maths",
    quantity: "Volume of a sphere",
    note: "r is the radius",
    symbolLatex: "V",
    valueLatex: "V = \\frac{4}{3}\\pi r^3",
    renderLatex: "V = \\frac{4}{3}\\pi r^3",
    text: "V = ⁴⁄₃πr³",
    latex: "V = \\frac{4}{3}\\pi r^3",
    tags: "volume sphere geometry maths",
  },
  {
    id: "curvedCylinderArea",
    section: "maths",
    quantity: "Curved surface area of a cylinder",
    note: "r is the radius, h is the height",
    symbolLatex: "A",
    valueLatex: "A = 2\\pi rh",
    renderLatex: "A = 2\\pi rh",
    text: "A = 2πrh",
    latex: "A = 2\\pi rh",
    tags: "curved surface area cylinder geometry maths",
  },
  {
    id: "vectorHorizontal",
    section: "maths",
    quantity: "Vector horizontal component",
    note: "",
    symbolLatex: "A_H",
    valueLatex: "A_H = A\\cos\\theta",
    renderLatex: "A_H = A\\cos\\theta",
    text: "Aₕ = A cos θ",
    latex: "A_H = A\\cos\\theta",
    tags: "vectors horizontal component maths",
  },
  {
    id: "vectorVertical",
    section: "maths",
    quantity: "Vector vertical component",
    note: "",
    symbolLatex: "A_V",
    valueLatex: "A_V = A\\sin\\theta",
    renderLatex: "A_V = A\\sin\\theta",
    text: "Aᵥ = A sin θ",
    latex: "A_V = A\\sin\\theta",
    tags: "vectors vertical component maths",
  },
  {
    id: "trigTan",
    section: "maths",
    quantity: "Trigonometric relationship",
    note: "",
    symbolLatex: "\\tan\\theta",
    valueLatex: "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}",
    renderLatex: "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}",
    text: "tan θ = sin θ / cos θ",
    latex: "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}",
    tags: "trigonometry tan sin cos maths",
  },
  {
    id: "trigIdentity",
    section: "maths",
    quantity: "Trigonometric identity",
    note: "",
    symbolLatex: "1",
    valueLatex: "\\sin^2\\theta + \\cos^2\\theta = 1",
    renderLatex: "\\sin^2\\theta + \\cos^2\\theta = 1",
    text: "sin²θ + cos²θ = 1",
    latex: "\\sin^2\\theta + \\cos^2\\theta = 1",
    tags: "trigonometry identity sin cos maths",
  },
  {
    id: "uncAdd",
    section: "uncertainties",
    quantity: "Uncertainty for addition or subtraction",
    note: "If y = a ± b",
    symbolLatex: "\\Delta y",
    valueLatex: "\\Delta y = \\Delta a + \\Delta b",
    renderLatex: "\\Delta y = \\Delta a + \\Delta b",
    text: "Δy = Δa + Δb",
    latex: "\\Delta y = \\Delta a + \\Delta b",
    tags: "uncertainty addition subtraction",
  },
  {
    id: "uncMultiply",
    section: "uncertainties",
    quantity: "Relative uncertainty for multiplication or division",
    note: "If y = ab / c",
    symbolLatex: "\\frac{\\Delta y}{y}",
    valueLatex:
      "\\frac{\\Delta y}{y} = \\frac{\\Delta a}{a} + \\frac{\\Delta b}{b} + \\frac{\\Delta c}{c}",
    renderLatex:
      "\\frac{\\Delta y}{y} = \\frac{\\Delta a}{a} + \\frac{\\Delta b}{b} + \\frac{\\Delta c}{c}",
    text: "Δy/y = Δa/a + Δb/b + Δc/c",
    latex:
      "\\frac{\\Delta y}{y} = \\frac{\\Delta a}{a} + \\frac{\\Delta b}{b} + \\frac{\\Delta c}{c}",
    tags: "uncertainty multiplication division relative",
  },
  {
    id: "uncPower",
    section: "uncertainties",
    quantity: "Relative uncertainty for a power",
    note: "If y = aⁿ",
    symbolLatex: "\\frac{\\Delta y}{y}",
    valueLatex: "\\frac{\\Delta y}{y} = n\\frac{\\Delta a}{a}",
    renderLatex: "\\frac{\\Delta y}{y} = n\\frac{\\Delta a}{a}",
    text: "Δy/y = nΔa/a",
    latex: "\\frac{\\Delta y}{y} = n\\frac{\\Delta a}{a}",
    tags: "uncertainty power relative",
  },
  {
    id: "g",
    section: "constants",
    quantity: "Acceleration of free fall",
    note: "Earth's surface",
    symbolLatex: "g",
    valueLatex: "9.8\\ \\mathrm{m\\ s^{-2}}",
    renderLatex: "g = 9.8\\ \\mathrm{m\\ s^{-2}}",
    text: "g = 9.8 m s⁻²",
    latex: "g = 9.8\\ \\mathrm{m\\ s^{-2}}",
    tags: "gravity free fall constant",
  },
  {
    id: "G",
    section: "constants",
    quantity: "Gravitational constant",
    note: "",
    symbolLatex: "G",
    valueLatex: "6.67 \\times 10^{-11}\\ \\mathrm{N\\ m^2\\ kg^{-2}}",
    renderLatex: "G = 6.67 \\times 10^{-11}\\ \\mathrm{N\\ m^2\\ kg^{-2}}",
    text: "G = 6.67 × 10⁻¹¹ N m² kg⁻²",
    latex: "G = 6.67 \\times 10^{-11}\\ \\mathrm{N\\ m^2\\ kg^{-2}}",
    tags: "gravity gravitation constant",
  },
  {
    id: "NA",
    section: "constants",
    quantity: "Avogadro constant",
    note: "",
    symbolLatex: "N_A",
    valueLatex: "6.02 \\times 10^{23}\\ \\mathrm{mol^{-1}}",
    renderLatex: "N_A = 6.02 \\times 10^{23}\\ \\mathrm{mol^{-1}}",
    text: "Nₐ = 6.02 × 10²³ mol⁻¹",
    latex: "N_A = 6.02 \\times 10^{23}\\ \\mathrm{mol^{-1}}",
    tags: "avogadro mole constant",
  },
  {
    id: "R",
    section: "constants",
    quantity: "Gas constant",
    note: "",
    symbolLatex: "R",
    valueLatex: "8.31\\ \\mathrm{J\\ K^{-1}\\ mol^{-1}}",
    renderLatex: "R = 8.31\\ \\mathrm{J\\ K^{-1}\\ mol^{-1}}",
    text: "R = 8.31 J K⁻¹ mol⁻¹",
    latex: "R = 8.31\\ \\mathrm{J\\ K^{-1}\\ mol^{-1}}",
    tags: "gas constant",
  },
  {
    id: "kB",
    section: "constants",
    quantity: "Boltzmann constant",
    note: "",
    symbolLatex: "k_B",
    valueLatex: "1.38 \\times 10^{-23}\\ \\mathrm{J\\ K^{-1}}",
    renderLatex: "k_B = 1.38 \\times 10^{-23}\\ \\mathrm{J\\ K^{-1}}",
    text: "kᵦ = 1.38 × 10⁻²³ J K⁻¹",
    latex: "k_B = 1.38 \\times 10^{-23}\\ \\mathrm{J\\ K^{-1}}",
    tags: "boltzmann constant thermal",
  },
  {
    id: "sigma",
    section: "constants",
    quantity: "Stefan-Boltzmann constant",
    note: "",
    symbolLatex: "\\sigma",
    valueLatex: "5.67 \\times 10^{-8}\\ \\mathrm{W\\ m^{-2}\\ K^{-4}}",
    renderLatex:
      "\\sigma = 5.67 \\times 10^{-8}\\ \\mathrm{W\\ m^{-2}\\ K^{-4}}",
    text: "σ = 5.67 × 10⁻⁸ W m⁻² K⁻⁴",
    latex: "\\sigma = 5.67 \\times 10^{-8}\\ \\mathrm{W\\ m^{-2}\\ K^{-4}}",
    tags: "stefan boltzmann constant radiation",
  },
  {
    id: "coulombK",
    section: "constants",
    quantity: "Coulomb constant",
    note: "",
    symbolLatex: "k",
    valueLatex: "8.99 \\times 10^{9}\\ \\mathrm{N\\ m^2\\ C^{-2}}",
    renderLatex: "k = 8.99 \\times 10^{9}\\ \\mathrm{N\\ m^2\\ C^{-2}}",
    text: "k = 8.99 × 10⁹ N m² C⁻²",
    latex: "k = 8.99 \\times 10^{9}\\ \\mathrm{N\\ m^2\\ C^{-2}}",
    tags: "coulomb constant electric",
  },
  {
    id: "epsilon0",
    section: "constants",
    quantity: "Permittivity of free space",
    note: "",
    symbolLatex: "\\varepsilon_0",
    valueLatex: "8.85 \\times 10^{-12}\\ \\mathrm{C^2\\ N^{-1}\\ m^{-2}}",
    renderLatex:
      "\\varepsilon_0 = 8.85 \\times 10^{-12}\\ \\mathrm{C^2\\ N^{-1}\\ m^{-2}}",
    text: "ε₀ = 8.85 × 10⁻¹² C² N⁻¹ m⁻²",
    latex:
      "\\varepsilon_0 = 8.85 \\times 10^{-12}\\ \\mathrm{C^2\\ N^{-1}\\ m^{-2}}",
    tags: "permittivity free space vacuum",
  },
  {
    id: "mu0",
    section: "constants",
    quantity: "Permeability of free space",
    note: "",
    symbolLatex: "\\mu_0",
    valueLatex: "4\\pi \\times 10^{-7}\\ \\mathrm{T\\ m\\ A^{-1}}",
    renderLatex: "\\mu_0 = 4\\pi \\times 10^{-7}\\ \\mathrm{T\\ m\\ A^{-1}}",
    text: "μ₀ = 4π × 10⁻⁷ T m A⁻¹",
    latex: "\\mu_0 = 4\\pi \\times 10^{-7}\\ \\mathrm{T\\ m\\ A^{-1}}",
    tags: "permeability free space vacuum",
  },
  {
    id: "c",
    section: "constants",
    quantity: "Speed of light in vacuum",
    note: "",
    symbolLatex: "c",
    valueLatex: "3.00 \\times 10^{8}\\ \\mathrm{m\\ s^{-1}}",
    renderLatex: "c = 3.00 \\times 10^{8}\\ \\mathrm{m\\ s^{-1}}",
    text: "c = 3.00 × 10⁸ m s⁻¹",
    latex: "c = 3.00 \\times 10^{8}\\ \\mathrm{m\\ s^{-1}}",
    tags: "speed of light vacuum",
  },
  {
    id: "h",
    section: "constants",
    quantity: "Planck constant",
    note: "",
    symbolLatex: "h",
    valueLatex: "6.63 \\times 10^{-34}\\ \\mathrm{J\\ s}",
    renderLatex: "h = 6.63 \\times 10^{-34}\\ \\mathrm{J\\ s}",
    text: "h = 6.63 × 10⁻³⁴ J s",
    latex: "h = 6.63 \\times 10^{-34}\\ \\mathrm{J\\ s}",
    tags: "planck constant quantum",
  },
  {
    id: "e",
    section: "constants",
    quantity: "Elementary charge",
    note: "",
    symbolLatex: "e",
    valueLatex: "1.60 \\times 10^{-19}\\ \\mathrm{C}",
    renderLatex: "e = 1.60 \\times 10^{-19}\\ \\mathrm{C}",
    text: "e = 1.60 × 10⁻¹⁹ C",
    latex: "e = 1.60 \\times 10^{-19}\\ \\mathrm{C}",
    tags: "elementary charge",
  },
  {
    id: "me",
    section: "constants",
    quantity: "Electron rest mass",
    note: "",
    symbolLatex: "m_e",
    valueLatex:
      "9.110 \\times 10^{-31}\\ \\mathrm{kg} = 0.000549\\ \\mathrm{u} = 0.511\\ \\mathrm{MeV}\\ c^{-2}",
    renderLatex:
      "m_e = 9.110 \\times 10^{-31}\\ \\mathrm{kg} = 0.000549\\ \\mathrm{u} = 0.511\\ \\mathrm{MeV}\\ c^{-2}",
    text: "mₑ = 9.110 × 10⁻³¹ kg = 0.000549 u = 0.511 MeV c⁻²",
    latex:
      "m_e = 9.110 \\times 10^{-31}\\ \\mathrm{kg} = 0.000549\\ \\mathrm{u} = 0.511\\ \\mathrm{MeV}\\ c^{-2}",
    tags: "electron mass",
  },
  {
    id: "mp",
    section: "constants",
    quantity: "Proton rest mass",
    note: "",
    symbolLatex: "m_p",
    valueLatex:
      "1.673 \\times 10^{-27}\\ \\mathrm{kg} = 1.007276\\ \\mathrm{u} = 938.27\\ \\mathrm{MeV}\\ c^{-2}",
    renderLatex:
      "m_p = 1.673 \\times 10^{-27}\\ \\mathrm{kg} = 1.007276\\ \\mathrm{u} = 938.27\\ \\mathrm{MeV}\\ c^{-2}",
    text: "mₚ = 1.673 × 10⁻²⁷ kg = 1.007276 u = 938.27 MeV c⁻²",
    latex:
      "m_p = 1.673 \\times 10^{-27}\\ \\mathrm{kg} = 1.007276\\ \\mathrm{u} = 938.27\\ \\mathrm{MeV}\\ c^{-2}",
    tags: "proton mass",
  },
  {
    id: "mn",
    section: "constants",
    quantity: "Neutron rest mass",
    note: "",
    symbolLatex: "m_n",
    valueLatex:
      "1.675 \\times 10^{-27}\\ \\mathrm{kg} = 1.008665\\ \\mathrm{u} = 940.27\\ \\mathrm{MeV}\\ c^{-2}",
    renderLatex:
      "m_n = 1.675 \\times 10^{-27}\\ \\mathrm{kg} = 1.008665\\ \\mathrm{u} = 940.27\\ \\mathrm{MeV}\\ c^{-2}",
    text: "mₙ = 1.675 × 10⁻²⁷ kg = 1.008665 u = 940.27 MeV c⁻²",
    latex:
      "m_n = 1.675 \\times 10^{-27}\\ \\mathrm{kg} = 1.008665\\ \\mathrm{u} = 940.27\\ \\mathrm{MeV}\\ c^{-2}",
    tags: "neutron mass",
  },
  {
    id: "u",
    section: "constants",
    quantity: "Atomic mass unit",
    note: "",
    symbolLatex: "u",
    valueLatex:
      "1.661 \\times 10^{-27}\\ \\mathrm{kg} = 931.5\\ \\mathrm{MeV}\\ c^{-2}",
    renderLatex:
      "u = 1.661 \\times 10^{-27}\\ \\mathrm{kg} = 931.5\\ \\mathrm{MeV}\\ c^{-2}",
    text: "u = 1.661 × 10⁻²⁷ kg = 931.5 MeV c⁻²",
    latex:
      "u = 1.661 \\times 10^{-27}\\ \\mathrm{kg} = 931.5\\ \\mathrm{MeV}\\ c^{-2}",
    tags: "atomic mass unit",
  },
  {
    id: "S",
    section: "constants",
    quantity: "Solar constant",
    note: "",
    symbolLatex: "S",
    valueLatex: "1.36 \\times 10^{3}\\ \\mathrm{W\\ m^{-2}}",
    renderLatex: "S = 1.36 \\times 10^{3}\\ \\mathrm{W\\ m^{-2}}",
    text: "S = 1.36 × 10³ W m⁻²",
    latex: "S = 1.36 \\times 10^{3}\\ \\mathrm{W\\ m^{-2}}",
    tags: "solar constant",
  },
  {
    id: "R0",
    section: "constants",
    quantity: "Fermi radius",
    note: "",
    symbolLatex: "R_0",
    valueLatex: "1.20 \\times 10^{-15}\\ \\mathrm{m}",
    renderLatex: "R_0 = 1.20 \\times 10^{-15}\\ \\mathrm{m}",
    text: "R₀ = 1.20 × 10⁻¹⁵ m",
    latex: "R_0 = 1.20 \\times 10^{-15}\\ \\mathrm{m}",
    tags: "fermi radius",
  },
  {
    id: "peta",
    section: "multipliers",
    quantity: "Peta",
    note: "",
    symbolLatex: "P",
    valueLatex: "10^{15}",
    renderLatex: "P = 10^{15}",
    text: "peta (P) = 10¹⁵",
    latex: "P = 10^{15}",
    tags: "si multiplier peta prefix",
  },
  {
    id: "tera",
    section: "multipliers",
    quantity: "Tera",
    note: "",
    symbolLatex: "T",
    valueLatex: "10^{12}",
    renderLatex: "T = 10^{12}",
    text: "tera (T) = 10¹²",
    latex: "T = 10^{12}",
    tags: "si multiplier tera prefix",
  },
  {
    id: "giga",
    section: "multipliers",
    quantity: "Giga",
    note: "",
    symbolLatex: "G",
    valueLatex: "10^{9}",
    renderLatex: "G = 10^{9}",
    text: "giga (G) = 10⁹",
    latex: "G = 10^{9}",
    tags: "si multiplier giga prefix",
  },
  {
    id: "mega",
    section: "multipliers",
    quantity: "Mega",
    note: "",
    symbolLatex: "M",
    valueLatex: "10^{6}",
    renderLatex: "M = 10^{6}",
    text: "mega (M) = 10⁶",
    latex: "M = 10^{6}",
    tags: "si multiplier mega prefix",
  },
  {
    id: "kilo",
    section: "multipliers",
    quantity: "Kilo",
    note: "",
    symbolLatex: "k",
    valueLatex: "10^{3}",
    renderLatex: "k = 10^{3}",
    text: "kilo (k) = 10³",
    latex: "k = 10^{3}",
    tags: "si multiplier kilo prefix",
  },
  {
    id: "hecto",
    section: "multipliers",
    quantity: "Hecto",
    note: "",
    symbolLatex: "h",
    valueLatex: "10^{2}",
    renderLatex: "h = 10^{2}",
    text: "hecto (h) = 10²",
    latex: "h = 10^{2}",
    tags: "si multiplier hecto prefix",
  },
  {
    id: "deca",
    section: "multipliers",
    quantity: "Deca",
    note: "",
    symbolLatex: "da",
    valueLatex: "10^{1}",
    renderLatex: "da = 10^{1}",
    text: "deca (da) = 10¹",
    latex: "da = 10^{1}",
    tags: "si multiplier deca prefix",
  },
  {
    id: "deci",
    section: "multipliers",
    quantity: "Deci",
    note: "",
    symbolLatex: "d",
    valueLatex: "10^{-1}",
    renderLatex: "d = 10^{-1}",
    text: "deci (d) = 10⁻¹",
    latex: "d = 10^{-1}",
    tags: "si multiplier deci prefix",
  },
  {
    id: "centi",
    section: "multipliers",
    quantity: "Centi",
    note: "",
    symbolLatex: "c",
    valueLatex: "10^{-2}",
    renderLatex: "c = 10^{-2}",
    text: "centi (c) = 10⁻²",
    latex: "c = 10^{-2}",
    tags: "si multiplier centi prefix",
  },
  {
    id: "milli",
    section: "multipliers",
    quantity: "Milli",
    note: "",
    symbolLatex: "m",
    valueLatex: "10^{-3}",
    renderLatex: "m = 10^{-3}",
    text: "milli (m) = 10⁻³",
    latex: "m = 10^{-3}",
    tags: "si multiplier milli prefix",
  },
  {
    id: "micro",
    section: "multipliers",
    quantity: "Micro",
    note: "",
    symbolLatex: "\\mu",
    valueLatex: "10^{-6}",
    renderLatex: "\\mu = 10^{-6}",
    text: "micro (μ) = 10⁻⁶",
    latex: "\\mu = 10^{-6}",
    tags: "si multiplier micro prefix",
  },
  {
    id: "nano",
    section: "multipliers",
    quantity: "Nano",
    note: "",
    symbolLatex: "n",
    valueLatex: "10^{-9}",
    renderLatex: "n = 10^{-9}",
    text: "nano (n) = 10⁻⁹",
    latex: "n = 10^{-9}",
    tags: "si multiplier nano prefix",
  },
  {
    id: "pico",
    section: "multipliers",
    quantity: "Pico",
    note: "",
    symbolLatex: "p",
    valueLatex: "10^{-12}",
    renderLatex: "p = 10^{-12}",
    text: "pico (p) = 10⁻¹²",
    latex: "p = 10^{-12}",
    tags: "si multiplier pico prefix",
  },
  {
    id: "femto",
    section: "multipliers",
    quantity: "Femto",
    note: "",
    symbolLatex: "f",
    valueLatex: "10^{-15}",
    renderLatex: "f = 10^{-15}",
    text: "femto (f) = 10⁻¹⁵",
    latex: "f = 10^{-15}",
    tags: "si multiplier femto prefix",
  },
  {
    id: "radian",
    section: "conversions",
    quantity: "Radian to degree",
    note: "",
    symbolLatex: "\\mathrm{rad}",
    valueLatex: "1\\ \\mathrm{rad} = \\frac{180^\\circ}{\\pi}",
    renderLatex: "1\\ \\mathrm{rad} = \\frac{180^\\circ}{\\pi}",
    text: "1 rad = 180°/π",
    latex: "1\\ \\mathrm{rad} = \\frac{180^\\circ}{\\pi}",
    tags: "radian degree conversion",
  },
  {
    id: "temperature",
    section: "conversions",
    quantity: "Temperature conversion",
    note: "",
    symbolLatex: "T",
    valueLatex: "T(\\mathrm{K}) = t(^\\circ\\mathrm{C}) + 273",
    renderLatex: "T(\\mathrm{K}) = t(^\\circ\\mathrm{C}) + 273",
    text: "T(K) = t(°C) + 273",
    latex: "T(\\mathrm{K}) = t(^\\circ\\mathrm{C}) + 273",
    tags: "temperature kelvin celsius conversion",
  },
  {
    id: "lightYear",
    section: "conversions",
    quantity: "Light year",
    note: "",
    symbolLatex: "\\mathrm{ly}",
    valueLatex: "1\\ \\mathrm{ly} = 9.46 \\times 10^{15}\\ \\mathrm{m}",
    renderLatex: "1\\ \\mathrm{ly} = 9.46 \\times 10^{15}\\ \\mathrm{m}",
    text: "1 ly = 9.46 × 10¹⁵ m",
    latex: "1\\ \\mathrm{ly} = 9.46 \\times 10^{15}\\ \\mathrm{m}",
    tags: "light year astronomy conversion",
  },
  {
    id: "parsec",
    section: "conversions",
    quantity: "Parsec",
    note: "",
    symbolLatex: "\\mathrm{pc}",
    valueLatex: "1\\ \\mathrm{pc} = 3.26\\ \\mathrm{ly}",
    renderLatex: "1\\ \\mathrm{pc} = 3.26\\ \\mathrm{ly}",
    text: "1 pc = 3.26 ly",
    latex: "1\\ \\mathrm{pc} = 3.26\\ \\mathrm{ly}",
    tags: "parsec astronomy conversion",
  },
  {
    id: "au",
    section: "conversions",
    quantity: "Astronomical unit",
    note: "",
    symbolLatex: "\\mathrm{AU}",
    valueLatex: "1\\ \\mathrm{AU} = 1.50 \\times 10^{11}\\ \\mathrm{m}",
    renderLatex: "1\\ \\mathrm{AU} = 1.50 \\times 10^{11}\\ \\mathrm{m}",
    text: "1 AU = 1.50 × 10¹¹ m",
    latex: "1\\ \\mathrm{AU} = 1.50 \\times 10^{11}\\ \\mathrm{m}",
    tags: "astronomical unit conversion",
  },
  {
    id: "kwh",
    section: "conversions",
    quantity: "Kilowatt-hour",
    note: "",
    symbolLatex: "\\mathrm{kWh}",
    valueLatex: "1\\ \\mathrm{kWh} = 3.60 \\times 10^{6}\\ \\mathrm{J}",
    renderLatex: "1\\ \\mathrm{kWh} = 3.60 \\times 10^{6}\\ \\mathrm{J}",
    text: "1 kWh = 3.60 × 10⁶ J",
    latex: "1\\ \\mathrm{kWh} = 3.60 \\times 10^{6}\\ \\mathrm{J}",
    tags: "kilowatt hour joule conversion",
  },
  {
    id: "hc",
    section: "conversions",
    quantity: "Planck constant × speed of light",
    note: "",
    symbolLatex: "hc",
    valueLatex:
      "hc = 1.99 \\times 10^{-25}\\ \\mathrm{J\\ m} = 1.24 \\times 10^{-6}\\ \\mathrm{eV\\ m}",
    renderLatex:
      "hc = 1.99 \\times 10^{-25}\\ \\mathrm{J\\ m} = 1.24 \\times 10^{-6}\\ \\mathrm{eV\\ m}",
    text: "hc = 1.99 × 10⁻²⁵ J m = 1.24 × 10⁻⁶ eV m",
    latex:
      "hc = 1.99 \\times 10^{-25}\\ \\mathrm{J\\ m} = 1.24 \\times 10^{-6}\\ \\mathrm{eV\\ m}",
    tags: "planck constant speed of light conversion hc",
  },
];

const sectionInfo = {
  maths: {
    title: "Mathematical equations",
    description: "Geometry, vectors and trigonometry references.",
  },
  uncertainties: {
    title: "Uncertainties",
    description: "Quick uncertainty propagation rules.",
  },
  constants: {
    title: "Fundamental constants",
    description: "Everyday constants from the booklet reference section.",
  },
  multipliers: {
    title: "Metric (SI) multipliers",
    description: "Useful SI prefixes and powers of ten.",
  },
  conversions: {
    title: "Unit conversions",
    description: "The high-frequency conversions students actually need.",
  },
};

const state = {
  filter: "all",
  search: "",
  selectedId: "areaCircle",
};

const elements = {
  sections: document.getElementById("referenceSections"),
  searchInput: document.getElementById("searchReference"),
  resultsCount: document.getElementById("resultsCount"),
  selectedQuantity: document.getElementById("selectedQuantity"),
  selectedNote: document.getElementById("selectedNote"),
  selectedRender: document.getElementById("selectedRender"),
  selectedText: document.getElementById("selectedText"),
  selectedLatex: document.getElementById("selectedLatex"),
  selectedGroupTag: document.getElementById("selectedGroupTag"),
  copyToast: document.getElementById("copyToast"),
};

let toastTimer = null;

function getItemById(id) {
  return referenceData.find((item) => item.id === id) || referenceData[0];
}

function matchesSearch(item, query) {
  if (!query) {
    return true;
  }

  const haystack = [
    item.quantity,
    item.note || "",
    item.text,
    item.latex,
    item.tags || "",
    item.section,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query.toLowerCase());
}

function getFilteredItems() {
  return referenceData.filter((item) => {
    const matchesFilter =
      state.filter === "all" ? true : item.section === state.filter;
    return matchesFilter && matchesSearch(item, state.search);
  });
}

function ensureValidSelection(filteredItems) {
  const visibleIds = new Set(filteredItems.map((item) => item.id));
  if (!visibleIds.has(state.selectedId)) {
    state.selectedId = (filteredItems[0] || referenceData[0]).id;
  }
}

function renderMath(element, latex, displayMode = false) {
  if (!element) {
    return;
  }

  if (window.katex) {
    try {
      window.katex.render(latex, element, {
        throwOnError: false,
        displayMode,
      });
      return;
    } catch (error) {
      element.textContent = latex;
      return;
    }
  }

  element.textContent = latex;
}

function buildRow(item) {
  const row = document.createElement("tr");
  row.className = `constant-row${state.selectedId === item.id ? " is-selected" : ""}`;
  row.dataset.id = item.id;
  row.tabIndex = 0;
  row.setAttribute("role", "button");
  row.setAttribute("aria-label", `Select ${item.quantity}`);

  const quantityCell = document.createElement("td");
  const quantityName = document.createElement("div");
  quantityName.className = "quantity-name";
  quantityName.textContent = item.quantity;
  quantityCell.appendChild(quantityName);

  if (item.note) {
    const quantityNote = document.createElement("div");
    quantityNote.className = "quantity-note";
    quantityNote.textContent = item.note;
    quantityCell.appendChild(quantityNote);
  }

  const symbolCell = document.createElement("td");
  symbolCell.className = "symbol-cell";
  const symbolWrap = document.createElement("span");
  symbolWrap.className = "math-inline";
  symbolCell.appendChild(symbolWrap);
  renderMath(symbolWrap, item.symbolLatex, false);

  const valueCell = document.createElement("td");
  valueCell.className = "value-cell";
  const valueWrap = document.createElement("span");
  valueWrap.className = "math-inline";
  valueCell.appendChild(valueWrap);
  renderMath(valueWrap, item.valueLatex, false);

  const copyCell = document.createElement("td");
  copyCell.className = "copy-cell";

  const copyActions = document.createElement("div");
  copyActions.className = "copy-actions";

  [
    { label: "Text", type: "text" },
    { label: "LaTeX", type: "latex" },
  ].forEach((copyType) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "copy-chip";
    button.dataset.copyType = copyType.type;
    button.dataset.id = item.id;
    button.innerHTML = `<span class="material-symbols-outlined" aria-hidden="true">content_copy</span>${copyType.label}`;
    copyActions.appendChild(button);
  });

  copyCell.appendChild(copyActions);
  row.append(quantityCell, symbolCell, valueCell, copyCell);
  return row;
}

function buildSectionCard(sectionKey, items) {
  const info = sectionInfo[sectionKey];
  const visibleItems = items.filter((item) => item.section === sectionKey);

  const wrapper = document.createElement("div");
  wrapper.className = "card shadow-sm border-0 mb-4 section-card";

  const body = document.createElement("div");
  body.className = "card-body p-0";

  const head = document.createElement("div");
  head.className = "section-head p-4";
  head.innerHTML = `
    <h2 class="h4 mb-1">${info.title}</h2>
    <p class="mb-0 text-muted">${info.description}</p>
  `;

  const tableWrap = document.createElement("div");
  tableWrap.className = "table-responsive constants-table-wrap";

  const table = document.createElement("table");
  table.className = "table constants-table mb-0";

  table.innerHTML = `
    <thead>
      <tr>
        <th scope="col">Item</th>
        <th scope="col">Symbol</th>
        <th scope="col">Value or formula</th>
        <th scope="col">Copy</th>
      </tr>
    </thead>
  `;

  const tbody = document.createElement("tbody");

  if (!visibleItems.length) {
    const emptyRow = document.createElement("tr");
    const emptyCell = document.createElement("td");
    emptyCell.colSpan = 4;
    emptyCell.className = "empty-state";
    emptyCell.textContent = "No items match the current filter.";
    emptyRow.appendChild(emptyCell);
    tbody.appendChild(emptyRow);
  } else {
    visibleItems.forEach((item) => {
      tbody.appendChild(buildRow(item));
    });
  }

  table.appendChild(tbody);
  tableWrap.appendChild(table);
  body.append(head, tableWrap);
  wrapper.appendChild(body);

  return wrapper;
}

function renderSections() {
  const filteredItems = getFilteredItems();
  ensureValidSelection(filteredItems.length ? filteredItems : referenceData);

  elements.sections.innerHTML = "";

  Object.keys(sectionInfo).forEach((sectionKey) => {
    if (state.filter !== "all" && state.filter !== sectionKey) {
      return;
    }

    const hasMatches = filteredItems.some(
      (item) => item.section === sectionKey,
    );
    if (!hasMatches && state.search) {
      return;
    }

    elements.sections.appendChild(buildSectionCard(sectionKey, filteredItems));
  });

  updateSelectedPanel();
  updateResultsCount(filteredItems);
}

function updateSelectedPanel() {
  const selected = getItemById(state.selectedId);
  const section = sectionInfo[selected.section];

  elements.selectedQuantity.textContent = selected.quantity;
  elements.selectedNote.textContent =
    selected.note || "Ready to copy in Unicode or LaTeX.";
  elements.selectedGroupTag.textContent = section.title;
  elements.selectedText.value = selected.text;
  elements.selectedLatex.value = selected.latex;
  renderMath(elements.selectedRender, selected.renderLatex, false);
}

function updateResultsCount(filteredItems) {
  const label = filteredItems.length === 1 ? "item" : "items";
  elements.resultsCount.textContent = `Showing ${filteredItems.length} ${label}`;
}

async function copyText(value, successMessage) {
  try {
    await navigator.clipboard.writeText(value);
    showToast(successMessage);
  } catch (error) {
    fallbackCopy(value, successMessage);
  }
}

function fallbackCopy(value, successMessage) {
  const helper = document.createElement("textarea");
  helper.value = value;
  helper.setAttribute("readonly", "");
  helper.style.position = "absolute";
  helper.style.left = "-9999px";
  document.body.appendChild(helper);
  helper.select();
  document.execCommand("copy");
  document.body.removeChild(helper);
  showToast(successMessage);
}

function showToast(message) {
  elements.copyToast.textContent = message;
  elements.copyToast.classList.add("show");

  if (toastTimer) {
    clearTimeout(toastTimer);
  }

  toastTimer = window.setTimeout(() => {
    elements.copyToast.classList.remove("show");
  }, 1800);
}

function buildBulkText(items, type) {
  return items.map((item) => `${item.quantity}: ${item[type]}`).join("\n");
}

function handleDocumentClick(event) {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  const copyRowButton = target.closest("[data-copy-type]");
  if (copyRowButton) {
    const item = getItemById(copyRowButton.dataset.id);
    const type = copyRowButton.dataset.copyType;
    const labelMap = {
      text: "Unicode text copied",
      latex: "LaTeX copied",
    };
    copyText(item[type], labelMap[type]);
    state.selectedId = item.id;
    renderSections();
    return;
  }

  const bulkButton = target.closest("[data-bulk-copy]");
  if (bulkButton) {
    const type = bulkButton.dataset.bulkCopy;
    const visibleItems = getFilteredItems();

    if (!visibleItems.length) {
      showToast("Nothing to copy right now");
      return;
    }

    const bulkText = buildBulkText(visibleItems, type);
    const labelMap = {
      text: "Visible Unicode list copied",
      latex: "Visible LaTeX list copied",
    };
    copyText(bulkText, labelMap[type]);
    return;
  }

  const fieldCopyButton = target.closest("[data-copy-source]");
  if (fieldCopyButton) {
    const sourceId = fieldCopyButton.dataset.copySource;
    const sourceField = document.getElementById(sourceId);

    if (sourceField) {
      copyText(sourceField.value, "Copied");
      sourceField.focus();
      sourceField.select?.();
    }
    return;
  }

  const directCopyField = target.closest("[data-direct-copy]");
  if (
    directCopyField instanceof HTMLInputElement ||
    directCopyField instanceof HTMLTextAreaElement
  ) {
    copyText(directCopyField.value, "Copied");
    directCopyField.focus();
    directCopyField.select?.();
    return;
  }

  const filterButton = target.closest("[data-filter]");
  if (filterButton) {
    state.filter = filterButton.dataset.filter;

    document.querySelectorAll("[data-filter]").forEach((button) => {
      button.classList.toggle("active", button.dataset.filter === state.filter);
    });

    renderSections();
    return;
  }

  const row = target.closest(".constant-row");
  if (row) {
    state.selectedId = row.dataset.id;
    renderSections();
  }
}

function handleKeyboardSelection(event) {
  const target = event.target;

  if (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement
  ) {
    if (
      target.hasAttribute("data-direct-copy") &&
      (event.key === "Enter" || event.key === " ")
    ) {
      event.preventDefault();
      copyText(target.value, "Copied");
      target.select?.();
    }
    return;
  }

  if (
    !(target instanceof HTMLElement) ||
    !target.classList.contains("constant-row")
  ) {
    return;
  }

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    state.selectedId = target.dataset.id;
    renderSections();
  }
}

function initialiseSearch() {
  elements.searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim();
    renderSections();
  });
}

function initialiseDirectCopyFields() {
  [elements.selectedText, elements.selectedLatex].forEach((field) => {
    field.setAttribute("readonly", "readonly");
    field.setAttribute("data-direct-copy", "true");
    field.title = "Click to copy";
    field.addEventListener("focus", () => field.select());
  });
}

function init() {
  initialiseSearch();
  initialiseDirectCopyFields();
  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("keydown", handleKeyboardSelection);
  renderSections();
}

document.addEventListener("DOMContentLoaded", init);
