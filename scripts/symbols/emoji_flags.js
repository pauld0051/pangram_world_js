document.addEventListener("DOMContentLoaded", function () {
    // North America Flags
  const northAmericaFlags = [
  { letter: "🇨🇦", unicode: "\u1F1E8\u1F1E6", name: "Canada", id: "canada" },
  { letter: "🇺🇸", unicode: "\u1F1FA\u1F1F8", name: "United States", id: "united-states" },
  { letter: "🇲🇽", unicode: "\u1F1F2\u1F1FD", name: "Mexico", id: "mexico" },
  { letter: "🇬🇱", unicode: "\u1F1EC\u1F1F1", name: "Greenland", id: "greenland" },
  { letter: "🇧🇲", unicode: "\u1F1E7\u1F1F2", name: "Bermuda", id: "bermuda" },
  { letter: "🇵🇲", unicode: "\u1F1F5\u1F1F2", name: "Saint Pierre and Miquelon", id: "saint-pierre-and-miquelon" },
];

  // Central America Flags
  const centralAmericaFlags = [
    { letter: "🇧🇿", unicode: "🇧🇿", name: "Belize", id: "belize" },
    { letter: "🇨🇷", unicode: "🇨🇷", name: "Costa Rica", id: "costa-rica" },
    { letter: "🇸🇻", unicode: "🇸🇻", name: "El Salvador", id: "el-salvador" },
    { letter: "🇬🇹", unicode: "🇬🇹", name: "Guatemala", id: "guatemala" },
    { letter: "🇭🇳", unicode: "🇭🇳", name: "Honduras", id: "honduras" },
    { letter: "🇳🇮", unicode: "🇳🇮", name: "Nicaragua", id: "nicaragua" },
    { letter: "🇵🇦", unicode: "🇵🇦", name: "Panama", id: "panama" },
  ];

  // South America Flags
  const southAmericaFlags = [
    { letter: "🇦🇷", unicode: "🇦🇷", name: "Argentina", id: "argentina" },
    { letter: "🇧🇴", unicode: "🇧🇴", name: "Bolivia", id: "bolivia" },
    { letter: "🇧🇷", unicode: "🇧🇷", name: "Brazil", id: "brazil" },
    { letter: "🇨🇱", unicode: "🇨🇱", name: "Chile", id: "chile" },
    { letter: "🇨🇴", unicode: "🇨🇴", name: "Colombia", id: "colombia" },
    { letter: "🇪🇨", unicode: "🇪🇨", name: "Ecuador", id: "ecuador" },
    { letter: "🇬🇾", unicode: "🇬🇾", name: "Guyana", id: "guyana" },
    { letter: "🇵🇾", unicode: "🇵🇾", name: "Paraguay", id: "paraguay" },
    { letter: "🇵🇪", unicode: "🇵🇪", name: "Peru", id: "peru" },
    { letter: "🇸🇷", unicode: "🇸🇷", name: "Suriname", id: "suriname" },
    { letter: "🇺🇾", unicode: "🇺🇾", name: "Uruguay", id: "uruguay" },
    { letter: "🇻🇪", unicode: "🇻🇪", name: "Venezuela", id: "venezuela" },
        ];
        
    // Europe Flags
  const europeFlags = [
    { letter: "🇦🇱", unicode: "🇦🇱", name: "Albania", id: "albania" },
    { letter: "🇦🇩", unicode: "🇦🇩", name: "Andorra", id: "andorra" },
    { letter: "🇦🇹", unicode: "🇦🇹", name: "Austria", id: "austria" },
    { letter: "🇧🇾", unicode: "🇧🇾", name: "Belarus", id: "belarus" },
    { letter: "🇧🇪", unicode: "🇧🇪", name: "Belgium", id: "belgium" },
    {
      letter: "🇧🇦",
      unicode: "🇧🇦",
      name: "Bosnia and Herzegovina",
      id: "bosnia-herzegovina",
    },
    { letter: "🇧🇬", unicode: "🇧🇬", name: "Bulgaria", id: "bulgaria" },
    { letter: "🇭🇷", unicode: "🇭🇷", name: "Croatia", id: "croatia" },
    { letter: "🇨🇾", unicode: "🇨🇾", name: "Cyprus", id: "cyprus" },
    {
      letter: "🇨🇿",
      unicode: "🇨🇿",
      name: "Czech Republic",
      id: "czech-republic",
    },
    { letter: "🇩🇰", unicode: "🇩🇰", name: "Denmark", id: "denmark" },
    { letter: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", unicode: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name: "England", id: "england" },
    { letter: "🇪🇪", unicode: "🇪🇪", name: "Estonia", id: "estonia" },
    { letter: "🇫🇮", unicode: "🇫🇮", name: "Finland", id: "finland" },
    { letter: "🇫🇷", unicode: "🇫🇷", name: "France", id: "france" },
    { letter: "🇬🇪", unicode: "🇬🇪", name: "Georgia", id: "georgia" },
    { letter: "🇩🇪", unicode: "🇩🇪", name: "Germany", id: "germany" },
    { letter: "🇬🇷", unicode: "🇬🇷", name: "Greece", id: "greece" },
    { letter: "🇬🇱", unicode: "🇬🇱", name: "Greenland", id: "greenland" },
    { letter: "🇭🇺", unicode: "🇭🇺", name: "Hungary", id: "hungary" },
    { letter: "🇮🇸", unicode: "🇮🇸", name: "Iceland", id: "iceland" },
    { letter: "🇮🇪", unicode: "🇮🇪", name: "Ireland", id: "ireland" },
    { letter: "🇮🇹", unicode: "🇮🇹", name: "Italy", id: "italy" },
    { letter: "🇽🇰", unicode: "🇽🇰", name: "Kosovo", id: "kosovo" },
    { letter: "🇱🇻", unicode: "🇱🇻", name: "Latvia", id: "latvia" },
    { letter: "🇱🇮", unicode: "🇱🇮", name: "Liechtenstein", id: "liechtenstein" },
    { letter: "🇱🇹", unicode: "🇱🇹", name: "Lithuania", id: "lithuania" },
    { letter: "🇱🇺", unicode: "🇱🇺", name: "Luxembourg", id: "luxembourg" },
    {
      letter: "🇲🇰",
      unicode: "🇲🇰",
      name: "North Macedonia",
      id: "north-macedonia",
    },
    { letter: "🇲🇹", unicode: "🇲🇹", name: "Malta", id: "malta" },
    { letter: "🇲🇩", unicode: "🇲🇩", name: "Moldova", id: "moldova" },
    { letter: "🇲🇨", unicode: "🇲🇨", name: "Monaco", id: "monaco" },
    { letter: "🇲🇪", unicode: "🇲🇪", name: "Montenegro", id: "montenegro" },
    { letter: "🇳🇱", unicode: "🇳🇱", name: "Netherlands", id: "netherlands" },
    { letter: "🇳🇴", unicode: "🇳🇴", name: "Norway", id: "norway" },
    { letter: "🇵🇱", unicode: "🇵🇱", name: "Poland", id: "poland" },
    { letter: "🇵🇹", unicode: "🇵🇹", name: "Portugal", id: "portugal" },
    { letter: "🇷🇴", unicode: "🇷🇴", name: "Romania", id: "romania" },
    { letter: "🇷🇺", unicode: "🇷🇺", name: "Russia", id: "russia" },
    { letter: "🇸🇲", unicode: "🇸🇲", name: "San Marino", id: "san-marino" },
    { letter: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", unicode: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", name: "Scotland", id: "scotland" },
    { letter: "🇷🇸", unicode: "🇷🇸", name: "Serbia", id: "serbia" },
    { letter: "🇸🇰", unicode: "🇸🇰", name: "Slovakia", id: "slovakia" },
    { letter: "🇸🇮", unicode: "🇸🇮", name: "Slovenia", id: "slovenia" },
    { letter: "🇪🇸", unicode: "🇪🇸", name: "Spain", id: "spain" },
    { letter: "🇸🇪", unicode: "🇸🇪", name: "Sweden", id: "sweden" },
    { letter: "🇨🇭", unicode: "🇨🇭", name: "Switzerland", id: "switzerland" },
    {
      letter: "🇬🇧",
      unicode: "🇬🇧",
      name: "United Kingdom",
      id: "united-kingdom",
    },
    {
      letter: "🇺🇳",
      unicode: "🇺🇳",
      name: "United Nations",
      id: "united-nations",
    },
    { letter: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", unicode: "🏴󠁧󠁢󠁷󠁬󠁳󠁿", name: "Wales", id: "wales" },
  ];

    const africaFlags = [
      { letter: "🇩🇿", unicode: "🇩🇿", name: "Algeria", id: "algeria" },
      { letter: "🇦🇴", unicode: "🇦🇴", name: "Angola", id: "angola" },
      { letter: "🇧🇯", unicode: "🇧🇯", name: "Benin", id: "benin" },
      { letter: "🇧🇼", unicode: "🇧🇼", name: "Botswana", id: "botswana" },
      { letter: "🇧🇫", unicode: "🇧🇫", name: "Burkina Faso", id: "burkina-faso" },
      { letter: "🇧🇮", unicode: "🇧🇮", name: "Burundi", id: "burundi" },
      { letter: "🇨🇻", unicode: "🇨🇻", name: "Cabo Verde", id: "cabo-verde" },
      { letter: "🇨🇲", unicode: "🇨🇲", name: "Cameroon", id: "cameroon" },
      {
        letter: "🇨🇫",
        unicode: "🇨🇫",
        name: "Central African Republic",
        id: "central-african-republic",
      },
      { letter: "🇹🇩", unicode: "🇹🇩", name: "Chad", id: "chad" },
      { letter: "🇰🇲", unicode: "🇰🇲", name: "Comoros", id: "comoros" },
      {
        letter: "🇨🇩",
        unicode: "🇨🇩",
        name: "Democratic Republic of the Congo",
        id: "democratic-republic-congo",
      },
      { letter: "🇩🇯", unicode: "🇩🇯", name: "Djibouti", id: "djibouti" },
      { letter: "🇪🇬", unicode: "🇪🇬", name: "Egypt", id: "egypt" },
      {
        letter: "🇬🇶",
        unicode: "🇬🇶",
        name: "Equatorial Guinea",
        id: "equatorial-guinea",
      },
      { letter: "🇪🇷", unicode: "🇪🇷", name: "Eritrea", id: "eritrea" },
      { letter: "🇸🇿", unicode: "🇸🇿", name: "Eswatini", id: "eswatini" },
      { letter: "🇪🇹", unicode: "🇪🇹", name: "Ethiopia", id: "ethiopia" },
      { letter: "🇬🇦", unicode: "🇬🇦", name: "Gabon", id: "gabon" },
      { letter: "🇬🇲", unicode: "🇬🇲", name: "Gambia", id: "gambia" },
      { letter: "🇬🇭", unicode: "🇬🇭", name: "Ghana", id: "ghana" },
      { letter: "🇬🇳", unicode: "🇬🇳", name: "Guinea", id: "guinea" },
      {
        letter: "🇬🇼",
        unicode: "🇬🇼",
        name: "Guinea-Bissau",
        id: "guinea-bissau",
      },
      { letter: "🇨🇮", unicode: "🇨🇮", name: "Ivory Coast", id: "ivory-coast" },
      { letter: "🇰🇪", unicode: "🇰🇪", name: "Kenya", id: "kenya" },
      { letter: "🇱🇸", unicode: "🇱🇸", name: "Lesotho", id: "lesotho" },
      { letter: "🇱🇷", unicode: "🇱🇷", name: "Liberia", id: "liberia" },
      { letter: "🇱🇾", unicode: "🇱🇾", name: "Libya", id: "libya" },
      { letter: "🇲🇬", unicode: "🇲🇬", name: "Madagascar", id: "madagascar" },
      { letter: "🇲🇼", unicode: "🇲🇼", name: "Malawi", id: "malawi" },
      { letter: "🇲🇱", unicode: "🇲🇱", name: "Mali", id: "mali" },
      { letter: "🇲🇷", unicode: "🇲🇷", name: "Mauritania", id: "mauritania" },
      { letter: "🇲🇺", unicode: "🇲🇺", name: "Mauritius", id: "mauritius" },
      { letter: "🇲🇦", unicode: "🇲🇦", name: "Morocco", id: "morocco" },
      { letter: "🇲🇿", unicode: "🇲🇿", name: "Mozambique", id: "mozambique" },
      { letter: "🇳🇦", unicode: "🇳🇦", name: "Namibia", id: "namibia" },
      { letter: "🇳🇪", unicode: "🇳🇪", name: "Niger", id: "niger" },
      { letter: "🇳🇬", unicode: "🇳🇬", name: "Nigeria", id: "nigeria" },
      { letter: "🇷🇼", unicode: "🇷🇼", name: "Rwanda", id: "rwanda" },
      {
        letter: "🇸🇹",
        unicode: "🇸🇹",
        name: "Sao Tome and Principe",
        id: "sao-tome-and-principe",
      },
      { letter: "🇸🇳", unicode: "🇸🇳", name: "Senegal", id: "senegal" },
      { letter: "🇸🇨", unicode: "🇸🇨", name: "Seychelles", id: "seychelles" },
      { letter: "🇸🇱", unicode: "🇸🇱", name: "Sierra Leone", id: "sierra-leone" },
      { letter: "🇸🇴", unicode: "🇸🇴", name: "Somalia", id: "somalia" },
      { letter: "🇿🇦", unicode: "🇿🇦", name: "South Africa", id: "south-africa" },
      { letter: "🇸🇸", unicode: "🇸🇸", name: "South Sudan", id: "south-sudan" },
      { letter: "🇸🇩", unicode: "🇸🇩", name: "Sudan", id: "sudan" },
      { letter: "🇹🇿", unicode: "🇹🇿", name: "Tanzania", id: "tanzania" },
      { letter: "🇹🇬", unicode: "🇹🇬", name: "Togo", id: "togo" },
      { letter: "🇹🇳", unicode: "🇹🇳", name: "Tunisia", id: "tunisia" },
      { letter: "🇺🇬", unicode: "🇺🇬", name: "Uganda", id: "uganda" },
      { letter: "🇿🇲", unicode: "🇿🇲", name: "Zambia", id: "zambia" },
      { letter: "🇿🇼", unicode: "🇿🇼", name: "Zimbabwe", id: "zimbabwe" },
    ];

    const asiaFlags = [
      { letter: "🇦🇫", unicode: "🇦🇫", name: "Afghanistan", id: "afghanistan" },
      { letter: "🇦🇲", unicode: "🇦🇲", name: "Armenia", id: "armenia" },
      { letter: "🇦🇿", unicode: "🇦🇿", name: "Azerbaijan", id: "azerbaijan" },
      { letter: "🇧🇭", unicode: "🇧🇭", name: "Bahrain", id: "bahrain" },
      { letter: "🇧🇩", unicode: "🇧🇩", name: "Bangladesh", id: "bangladesh" },
      { letter: "🇧🇹", unicode: "🇧🇹", name: "Bhutan", id: "bhutan" },
      { letter: "🇧🇳", unicode: "🇧🇳", name: "Brunei", id: "brunei" },
      { letter: "🇰🇭", unicode: "🇰🇭", name: "Cambodia", id: "cambodia" },
      { letter: "🇨🇳", unicode: "🇨🇳", name: "China", id: "china" },
      { letter: "🇮🇳", unicode: "🇮🇳", name: "India", id: "india" },
      { letter: "🇮🇩", unicode: "🇮🇩", name: "Indonesia", id: "indonesia" },
      { letter: "🇮🇷", unicode: "🇮🇷", name: "Iran", id: "iran" },
      { letter: "🇮🇶", unicode: "🇮🇶", name: "Iraq", id: "iraq" },
      { letter: "🇮🇱", unicode: "🇮🇱", name: "Israel", id: "israel" },
      { letter: "🇯🇵", unicode: "🇯🇵", name: "Japan", id: "japan" },
      { letter: "🇯🇴", unicode: "🇯🇴", name: "Jordan", id: "jordan" },
      { letter: "🇰🇿", unicode: "🇰🇿", name: "Kazakhstan", id: "kazakhstan" },
      { letter: "🇰🇼", unicode: "🇰🇼", name: "Kuwait", id: "kuwait" },
      { letter: "🇰🇬", unicode: "🇰🇬", name: "Kyrgyzstan", id: "kyrgyzstan" },
      { letter: "🇱🇦", unicode: "🇱🇦", name: "Laos", id: "laos" },
      { letter: "🇱🇧", unicode: "🇱🇧", name: "Lebanon", id: "lebanon" },
      { letter: "🇲🇾", unicode: "🇲🇾", name: "Malaysia", id: "malaysia" },
      { letter: "🇲🇻", unicode: "🇲🇻", name: "Maldives", id: "maldives" },
      { letter: "🇲🇳", unicode: "🇲🇳", name: "Mongolia", id: "mongolia" },
      { letter: "🇲🇲", unicode: "🇲🇲", name: "Myanmar", id: "myanmar" },
      { letter: "🇳🇵", unicode: "🇳🇵", name: "Nepal", id: "nepal" },
      { letter: "🇰🇵", unicode: "🇰🇵", name: "North Korea", id: "north-korea" },
      { letter: "🇴🇲", unicode: "🇴🇲", name: "Oman", id: "oman" },
      { letter: "🇵🇰", unicode: "🇵🇰", name: "Pakistan", id: "pakistan" },
      { letter: "🇵🇸", unicode: "🇵🇸", name: "Palestine", id: "palestine" },
      { letter: "🇵🇭", unicode: "🇵🇭", name: "Philippines", id: "philippines" },
      { letter: "🇶🇦", unicode: "🇶🇦", name: "Qatar", id: "qatar" },
      { letter: "🇸🇦", unicode: "🇸🇦", name: "Saudi Arabia", id: "saudi-arabia" },
      { letter: "🇸🇬", unicode: "🇸🇬", name: "Singapore", id: "singapore" },
      { letter: "🇰🇷", unicode: "🇰🇷", name: "South Korea", id: "south-korea" },
      { letter: "🇱🇰", unicode: "🇱🇰", name: "Sri Lanka", id: "sri-lanka" },
      { letter: "🇸🇾", unicode: "🇸🇾", name: "Syria", id: "syria" },
      { letter: "🇹🇼", unicode: "🇹🇼", name: "Taiwan", id: "taiwan" },
      { letter: "🇹🇯", unicode: "🇹🇯", name: "Tajikistan", id: "tajikistan" },
      { letter: "🇹🇭", unicode: "🇹🇭", name: "Thailand", id: "thailand" },
      { letter: "🇹🇲", unicode: "🇹🇲", name: "Turkmenistan", id: "turkmenistan" },
      { letter: "🇦🇪", unicode: "🇦🇪", name: "United Arab Emirates", id: "uae" },
      { letter: "🇺🇿", unicode: "🇺🇿", name: "Uzbekistan", id: "uzbekistan" },
      { letter: "🇻🇳", unicode: "🇻🇳", name: "Vietnam", id: "vietnam" },
      { letter: "🇾🇪", unicode: "🇾🇪", name: "Yemen", id: "yemen" },
    ];

    const oceaniaFlags = [
      { letter: "🇦🇺", unicode: "🇦🇺", name: "Australia", id: "australia" },
      { letter: "🇨🇰", unicode: "🇨🇰", name: "Cook Islands", id: "cook-islands" },
      { letter: "🇫🇯", unicode: "🇫🇯", name: "Fiji", id: "fiji" },
      { letter: "🇫🇲", unicode: "🇫🇲", name: "Micronesia", id: "micronesia" },
      {
        letter: "🇫🇷",
        unicode: "🇵🇫",
        name: "French Polynesia",
        id: "french-polynesia",
      },
      { letter: "🇰🇮", unicode: "🇰🇮", name: "Kiribati", id: "kiribati" },
      {
        letter: "🇳🇨",
        unicode: "🇳🇨",
        name: "New Caledonia",
        id: "new-caledonia",
      },
      { letter: "🇳🇿", unicode: "🇳🇿", name: "New Zealand", id: "new-zealand" },
      { letter: "🇳🇷", unicode: "🇳🇷", name: "Nauru", id: "nauru" },
      {
        letter: "🇵🇬",
        unicode: "🇵🇬",
        name: "Papua New Guinea",
        id: "papua-new-guinea",
      },
      { letter: "🇵🇼", unicode: "🇵🇼", name: "Palau", id: "palau" },
      {
        letter: "🇸🇧",
        unicode: "🇸🇧",
        name: "Solomon Islands",
        id: "solomon-islands",
      },
      { letter: "🇹🇰", unicode: "🇹🇰", name: "Tokelau", id: "tokelau" },
      { letter: "🇹🇴", unicode: "🇹🇴", name: "Tonga", id: "tonga" },
      { letter: "🇹🇻", unicode: "🇹🇻", name: "Tuvalu", id: "tuvalu" },
      { letter: "🇻🇺", unicode: "🇻🇺", name: "Vanuatu", id: "vanuatu" },
      {
        letter: "🇼🇫",
        unicode: "🇼🇫",
        name: "Wallis and Futuna",
        id: "wallis-and-futuna",
      },
      { letter: "🇼🇸", unicode: "🇼🇸", name: "Samoa", id: "samoa" },
    ];

    const internationalFlags = [
      { letter: "🇦🇶", unicode: "🇦🇶", name: "Antarctica", id: "antarctica" },
      {
        letter: "🇺🇳",
        unicode: "🇺🇳",
        name: "United Nations",
        id: "united-nations",
      },
      {
        letter: "🇪🇺",
        unicode: "🇪🇺",
        name: "European Union",
        id: "european-union",
      },
      { letter: "🇦🇸", unicode: "🇦🇸", name: "ASEAN", id: "asean" },
      {
        letter: "🇯🇵",
        unicode: "🇯🇵",
        name: "International Red Cross",
        id: "red-cross",
      },
    ];

    const territoriesFlags = [
      { letter: "🇭🇰", unicode: "🇭🇰", name: "Hong Kong", id: "hong-kong" },
      { letter: "🇲🇴", unicode: "🇲🇴", name: "Macau", id: "macau" },
      { letter: "🇵🇷", unicode: "🇵🇷", name: "Puerto Rico", id: "puerto-rico" },
      { letter: "🇬🇮", unicode: "🇬🇮", name: "Gibraltar", id: "gibraltar" },
      {
        letter: "🇫🇴",
        unicode: "🇫🇴",
        name: "Faroe Islands",
        id: "faroe-islands",
      },
      {
        letter: "🇬🇫",
        unicode: "🇬🇫",
        name: "French Guiana",
        id: "french-guiana",
      },
      { letter: "🇬🇵", unicode: "🇬🇵", name: "Guadeloupe", id: "guadeloupe" },
      { letter: "🇧🇶", unicode: "🇧🇶", name: "Bonaire", id: "bonaire" },
      { letter: "🇨🇼", unicode: "🇨🇼", name: "Curaçao", id: "curacao" },
      { letter: "🇸🇽", unicode: "🇸🇽", name: "Sint Maarten", id: "sint-maarten" },
      { letter: "🇦🇼", unicode: "🇦🇼", name: "Aruba", id: "aruba" },
    ];

    const otherFlags = [
      {
        letter: "🏁",
        unicode: "🏁",
        name: "Chequered Flag",
        id: "chequered-flag",
      },
      { letter: "🏴‍☠️", unicode: "🏴‍☠️", name: "Pirate Flag", id: "pirate-flag" },
      { letter: "🏳️", unicode: "🏳️", name: "White Flag", id: "white-flag" },
      { letter: "🏴", unicode: "🏴", name: "Black Flag", id: "black-flag" },
      { letter: "🏳️‍🌈", unicode: "🏳️‍🌈", name: "Rainbow Flag", id: "rainbow-flag" },
      {
        letter: "🏳️‍⚧️",
        unicode: "🏳️‍⚧️",
        name: "Transgender Flag",
        id: "transgender-flag",
      },
    ];


    function createKeys(containerId, symbols) {
    const container = document.getElementById(containerId);
    symbols.forEach((item) => {
      const key = document.createElement("div");
      key.className = "alphabet-key";

      // Add the unique id if provided (for Acetate key)
      if (item.id) {
        key.id = item.id;
      }

      const letterSpan = document.createElement("span");
      letterSpan.className = "letter";
      letterSpan.innerText = item.letter;

      const nameSpan = document.createElement("span");
      nameSpan.className = "name";
      nameSpan.innerText = item.name;

      key.appendChild(letterSpan);
      key.appendChild(nameSpan);

      key.dataset.unicode = item.unicode;

      key.onclick = function (event) {
        copyToClipboard(item.unicode);
        showTooltip("Copied", event);
      };

      container.appendChild(key);
    });
  }

  // Function to copy to clipboard
  function copyToClipboard(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }

  // Function to show tooltip
  function showTooltip(message, event) {
    removeExistingTooltips();

    const tooltip = document.createElement("div");
    tooltip.className = "copy-tooltip";
    tooltip.innerText = message;
    tooltip.style.position = "absolute";
    tooltip.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    tooltip.style.color = "#fff";
    tooltip.style.padding = "5px 10px";
    tooltip.style.borderRadius = "5px";
    tooltip.style.zIndex = "1000";
    tooltip.style.fontSize = "14px";
    tooltip.style.pointerEvents = "none";

    document.body.appendChild(tooltip);

    const x = event.pageX;
    const y = event.pageY;
    tooltip.style.left = `${x - tooltip.offsetWidth / 2}px`; // Center horizontally
    tooltip.style.top = `${y - tooltip.offsetHeight - 10}px`; // Position above the click

    setTimeout(() => {
      if (tooltip.parentElement) {
        document.body.removeChild(tooltip);
      }
    }, 1500);
  }

  // Function to remove existing tooltips
  function removeExistingTooltips() {
    const tooltips = document.querySelectorAll(".copy-tooltip");
    tooltips.forEach((tooltip) => {
      if (tooltip.parentElement) {
        tooltip.parentElement.removeChild(tooltip);
      }
    });
  }

 // Create keys for North, Central, and South America flags
    createKeys("north-america-flags-container", northAmericaFlags);
    createKeys("central-america-flags-container", centralAmericaFlags);
    createKeys("south-america-flags-container", southAmericaFlags);
    createKeys("europe-flags-container", europeFlags);
    createKeys("africa-flags-container", africaFlags);
    createKeys("asia-flags-container", asiaFlags);
    createKeys("oceania-flags-container", oceaniaFlags);
    createKeys("international-flags-container", internationalFlags);
    createKeys("territories-flags-container", territoriesFlags);
    createKeys("other-flags-container", otherFlags);
});

