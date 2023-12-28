$(document).ready(function(){

  /* ↓↓↓ for backend ↓↓↓ */
  var d = new Date();
  var fullData = d.getFullYear() +
      "-" +
      d.getMonth() +
      1 +
      "-" +
      d.getDate() +
      " " +
      d.getHours() +
      ":" +
      d.getMinutes() +
      ":" +
      d.getSeconds();
  $('.DateTimeId').val(fullData);
  /* ↑↑↑ /for backend ↑↑↑ */


  /* ↓↓↓ country code autocomplete ↓↓↓ */
  var countries = {
    1 : {
        nameEn    : "Antigua and Barbuda",
        letter    : "AG",
        phoneCode : "+1"
      },
    2 : {
        nameEn    : "Anguilla",
        letter    : "AI",
        phoneCode : "+1"
      },
    3 : {
        nameEn    : "Barbados",
        letter    : "BB",
        phoneCode : "+1"
      },
    4 : {
        nameEn    : "Bermuda",
        letter    : "BM",
        phoneCode : "+1"
      },
    5 : {
        nameEn    : "Bahamas",
        letter    : "BS",
        phoneCode : "+1"
      },
    6 : {
        nameEn    : "Canada",
        letter    : "CA",
        phoneCode : "+1"
      },
    7 : {
        nameEn    : "Dominica",
        letter    : "DM",
        phoneCode : "+1"
      },
    8 : {
        nameEn    : "Dominican Republic",
        letter    : "DO",
        phoneCode : "+1"
      },
    9 : {
        nameEn    : "Grenada",
        letter    : "GD",
        phoneCode : "+1"
      },
    10 : {
        nameEn    : "Guam nnn",
        letter    : "GU",
        phoneCode : "+1"
      },
    11 : {
        nameEn    : "Jamaica",
        letter    : "JM",
        phoneCode : "+1"
      },
    12 : {
        nameEn    : "Saint Kitts and Nevis",
        letter    : "KN",
        phoneCode : "+1"
      },
    13 : {
        nameEn    : "Cayman Islands",
        letter    : "KY",
        phoneCode : "+1"
      },
    14 : {
        nameEn    : "Saint Lucia",
        letter    : "LC",
        phoneCode : "+1"
      },
    15 : {
        nameEn    : "Northern Mariana Islands",
        letter    : "MP",
        phoneCode : "+1"
      },
    16 : {
        nameEn    : "Montserrat",
        letter    : "MS",
        phoneCode : "+1"
      },
    17 : {
        nameEn    : "Puerto Rico",
        letter    : "PR",
        phoneCode : "+1"
      },
    18 : {
        nameEn    : "Turks and Caicos Islands",
        letter    : "TC",
        phoneCode : "+1"
      },
    19 : {
        nameEn    : "Trinidad and Tobago",
        letter    : "TT",
        phoneCode : "+1"
      },
    20 : {
        nameEn    : "Saint Vincent and the Grenadines",
        letter    : "VC",
        phoneCode : "+1"
      },
    21 : {
        nameEn    : "British Virgin Islands",
        letter    : "VG",
        phoneCode : "+1"
      },
    22 : {
        nameEn    : "US Virgin Islands",
        letter    : "VI",
        phoneCode : "+1"
      },
    23 : {
        nameEn    : "Afghanistan",
        letter    : "AF",
        phoneCode : "+93"
      },
    24 : {
        nameEn    : "Argentina",
        letter    : "AR",
        phoneCode : "+54"
      },
    25 : {
        nameEn    : "Austria",
        letter    : "AT",
        phoneCode : "+43"
      },
    26 : {
        nameEn    : "Australia",
        letter    : "AU",
        phoneCode : "+61"
      },
    27 : {
        nameEn    : "Brazil",
        letter    : "BR",
        phoneCode : "+55"
      },
    28 : {
        nameEn    : "Switzerland",
        letter    : "CH",
        phoneCode : "+41"
      },
    29 : {
        nameEn    : "Chile",
        letter    : "CL",
        phoneCode : "+56"
      },
    30 : {
        nameEn    : "China",
        letter    : "CN",
        phoneCode : "+86"
      },
    31 : {
        nameEn    : "Colombia",
        letter    : "CO",
        phoneCode : "+57"
      },
    32 : {
        nameEn    : "Cuba",
        letter    : "CU",
        phoneCode : "+53"
      },
    33 : {
        nameEn    : "Germany",
        letter    : "DE",
        phoneCode : "+49"
      },
    34 : {
        nameEn    : "Denmark",
        letter    : "DK",
        phoneCode : "+45"
      },
    35 : {
        nameEn    : "Egypt",
        letter    : "EG",
        phoneCode : "+20"
      },
    36 : {
        nameEn    : "Spain",
        letter    : "ES",
        phoneCode : "+34"
      },
    37 : {
        nameEn    : "United Kingdom",
        letter    : "GB",
        phoneCode : "+44"
      },
    38 : {
        nameEn    : "Greece",
        letter    : "GR",
        phoneCode : "+30"
      },
    39 : {
        nameEn    : "Hungary",
        letter    : "HU",
        phoneCode : "+36"
      },
    40 : {
        nameEn    : "Indonesia",
        letter    : "ID",
        phoneCode : "+62"
      },
    41 : {
        nameEn    : "India",
        letter    : "IN",
        phoneCode : "+91"
      },
    42 : {
        nameEn    : "Italy",
        letter    : "IT",
        phoneCode : "+39"
      },
    43 : {
        nameEn    : "Iran",
        letter    : "IR",
        phoneCode : "+98"
      },
    44 : {
        nameEn    : "South Korea",
        letter    : "KR",
        phoneCode : "+82"
      },
    45 : {
        nameEn    : "Japan",
        letter    : "JP",
        phoneCode : "+81"
      },
    46 : {
        nameEn    : "Sri Lanka",
        letter    : "LK",
        phoneCode : "+94"
      },
    47 : {
        nameEn    : "Myanmar",
        letter    : "MM",
        phoneCode : "+95"
      },
    48 : {
        nameEn    : "Mexico",
        letter    : "MX",
        phoneCode : "+52"
      },
    49 : {
        nameEn    : "Malaysia",
        letter    : "MY",
        phoneCode : "+60"
      },
    50 : {
        nameEn    : "Netherlands",
        letter    : "NL",
        phoneCode : "+31"
      },
    51 : {
        nameEn    : "Norway",
        letter    : "NO",
        phoneCode : "+47"
      },
    52 : {
        nameEn    : "New Zealand",
        letter    : "NZ",
        phoneCode : "+64"
      },
    53 : {
        nameEn    : "Peru",
        letter    : "PE",
        phoneCode : "+51"
      },
    54 : {
        nameEn    : "Philippines",
        letter    : "PH",
        phoneCode : "+63"
      },
    55 : {
        nameEn    : "Pakistan",
        letter    : "PK",
        phoneCode : "+92"
      },
    56 : {
        nameEn    : "Poland",
        letter    : "PL",
        phoneCode : "+48"
      },
    57 : {
        nameEn    : "Sweden",
        letter    : "SE",
        phoneCode : "+46"
      },
    58 : {
        nameEn    : "Singapore",
        letter    : "SG",
        phoneCode : "+65"
      },
    59 : {
        nameEn    : "Thailand",
        letter    : "TH",
        phoneCode : "+66"
      },
    60 : {
        nameEn    : "Turkey",
        letter    : "TR",
        phoneCode : "+90"
      },
    61 : {
        nameEn    : "Venezuela",
        letter    : "VE",
        phoneCode : "+58"
      },
    62 : {
        nameEn    : "Vietnam",
        letter    : "VN",
        phoneCode : "+84"
      },
    63 : {
        nameEn    : "South Africa",
        letter    : "ZA",
        phoneCode : "+27"
      },
    64 : {
        nameEn    : "Andorra",
        letter    : "AD",
        phoneCode : "+376"
      },
    65 : {
        nameEn    : "United Arab Emirates",
        letter    : "AE",
        phoneCode : "+971"
      },
    66 : {
        nameEn    : "Albania",
        letter    : "AL",
        phoneCode : "+355"
      },
    67 : {
        nameEn    : "Armenia",
        letter    : "AM",
        phoneCode : "+374"
      },
    68 : {
        nameEn    : "Netherlands Antilles",
        letter    : "AN",
        phoneCode : "+599"
      },
    69 : {
        nameEn    : "Angola",
        letter    : "AO",
        phoneCode : "+244"
      },
    70 : {
        nameEn    : "Antarctica",
        letter    : "AQ",
        phoneCode : "+672"
      },
    71 : {
        nameEn    : "American Samoa",
        letter    : "AS",
        phoneCode : "+684"
      },
    72 : {
        nameEn    : "Aruba",
        letter    : "AW",
        phoneCode : "+297"
      },
    73 : {
        nameEn    : "Azerbaijan",
        letter    : "AZ",
        phoneCode : "+994"
      },
    74 : {
        nameEn    : "Bosnia and Herzegovina",
        letter    : "BA",
        phoneCode : "+387"
      },
    75 : {
        nameEn    : "Bangladesh",
        letter    : "BD",
        phoneCode : "+880"
      },
    76 : {
        nameEn    : "Burkina Faso",
        letter    : "BF",
        phoneCode : "+226"
      },
    77 : {
        nameEn    : "Bulgaria",
        letter    : "BG",
        phoneCode : "+359"
      },
    78 : {
        nameEn    : "Bahrain",
        letter    : "BH",
        phoneCode : "+973"
      },
    79 : {
        nameEn    : "Burundi",
        letter    : "BI",
        phoneCode : "+257"
      },
    80 : {
        nameEn    : "Benin",
        letter    : "BJ",
        phoneCode : "+229"
      },
    81 : {
        nameEn    : "Brunei Darussalam",
        letter    : "BN",
        phoneCode : "+673"
      },
    82 : {
        nameEn    : "Bolivia",
        letter    : "BO",
        phoneCode : "+591"
      },
    83 : {
        nameEn    : "Bhutan",
        letter    : "BT",
        phoneCode : "+975"
      },
    84 : {
        nameEn    : "Botswana",
        letter    : "BW",
        phoneCode : "+267"
      },
    85 : {
        nameEn    : "Belarus",
        letter    : "BY",
        phoneCode : "+375"
      },
    86 : {
        nameEn    : "Belize",
        letter    : "BZ",
        phoneCode : "+501"
      },
    87 : {
        nameEn    : "Congo, The Democratic Republic of the (formerly Zaire)",
        letter    : "CD",
        phoneCode : "+243"
      },
    88 : {
        nameEn    : "Central African Republic",
        letter    : "CF",
        phoneCode : "+236"
      },
    89 : {
        nameEn    : "Congo, Republic Of",
        letter    : "CG",
        phoneCode : "+242"
      },
    90 : {
        nameEn    : "Ivory Coast",
        letter    : "CI",
        phoneCode : "+225"
      },
    91 : {
        nameEn    : "Cook Islands",
        letter    : "CK",
        phoneCode : "+682"
      },
    92 : {
        nameEn    : "Cameroon",
        letter    : "CM",
        phoneCode : "+237"
      },
    93 : {
        nameEn    : "Costa Rica",
        letter    : "CR",
        phoneCode : "+506"
      },
    94 : {
        nameEn    : "Cape Verde",
        letter    : "CV",
        phoneCode : "+238"
      },
    95 : {
        nameEn    : "Cyprus",
        letter    : "CY",
        phoneCode : "+357"
      },
    96 : {
        nameEn    : "Czech Republic",
        letter    : "CZ",
        phoneCode : "+420"
      },
    97 : {
        nameEn    : "Djibouti",
        letter    : "DJ",
        phoneCode : "+253"
      },
    98 : {
        nameEn    : "Algeria",
        letter    : "DZ",
        phoneCode : "+213"
      },
    99 : {
        nameEn    : "Ecuador",
        letter    : "EC",
        phoneCode : "+593"
      },
    100 : {
        nameEn    : "Estonia",
        letter    : "EE",
        phoneCode : "+372"
      },
    101 : {
        nameEn    : "Eritrea",
        letter    : "ER",
        phoneCode : "+291"
      },
    102 : {
        nameEn    : "Ethiopia",
        letter    : "ET",
        phoneCode : "+251"
      },
    103 : {
        nameEn    : "Finland",
        letter    : "FI",
        phoneCode : "+358"
      },
    104 : {
        nameEn    : "Fiji",
        letter    : "FJ",
        phoneCode : "+679"
      },
    105 : {
        nameEn    : "Falkland Islands",
        letter    : "FK",
        phoneCode : "+500"
      },
    106 : {
        nameEn    : "Micronesia",
        letter    : "FM",
        phoneCode : "+691"
      },
    107 : {
        nameEn    : "Faroe Islands",
        letter    : "FO",
        phoneCode : "+298"
      },
    108 : {
        nameEn    : "Gabon",
        letter    : "GA",
        phoneCode : "+241"
      },
    109 : {
        nameEn    : "Georgia",
        letter    : "GE",
        phoneCode : "+995"
      },
    110 : {
        nameEn    : "French Guiana",
        letter    : "GF",
        phoneCode : "+594"
      },
    111 : {
        nameEn    : "Ghana",
        letter    : "GH",
        phoneCode : "+233"
      },
    112 : {
        nameEn    : "Gibraltar",
        letter    : "GI",
        phoneCode : "+350"
      },
    113 : {
        nameEn    : "Greenland",
        letter    : "GL",
        phoneCode : "+299"
      },
    114 : {
        nameEn    : "Gambia",
        letter    : "GM",
        phoneCode : "+220"
      },
    115 : {
        nameEn    : "Guinea",
        letter    : "GN",
        phoneCode : "+224"
      },
    116 : {
        nameEn    : "Guadeloupe",
        letter    : "GP",
        phoneCode : "+590"
      },
    117 : {
        nameEn    : "Equatorial Guinea",
        letter    : "GQ",
        phoneCode : "+240"
      },
    118 : {
        nameEn    : "Guatemala",
        letter    : "GT",
        phoneCode : "+502"
      },
    119 : {
        nameEn    : "Guinea-bissau",
        letter    : "GW",
        phoneCode : "+245"
      },
    120 : {
        nameEn    : "Guyana",
        letter    : "GY",
        phoneCode : "+592"
      },
    121 : {
        nameEn    : "Hong Kong",
        letter    : "HK",
        phoneCode : "+852"
      },
    122 : {
        nameEn    : "Honduras",
        letter    : "HN",
        phoneCode : "+504"
      },
    123 : {
        nameEn    : "Croatia",
        letter    : "HR",
        phoneCode : "+385"
      },
    124 : {
        nameEn    : "Haiti",
        letter    : "HT",
        phoneCode : "+509"
      },
    125 : {
        nameEn    : "Ireland",
        letter    : "IE",
        phoneCode : "+353"
      },
    126 : {
        nameEn    : "British Indian Ocean Territory",
        letter    : "IO",
        phoneCode : "+246"
      },
    127 : {
        nameEn    : "Iraq",
        letter    : "IQ",
        phoneCode : "+964"
      },
    128 : {
        nameEn    : "Iceland",
        letter    : "IS",
        phoneCode : "+354"
      },
    129 : {
        nameEn    : "Jordan",
        letter    : "JO",
        phoneCode : "+962"
      },
    130 : {
        nameEn    : "Kenya",
        letter    : "KE",
        phoneCode : "+254"
      },
    131 : {
        nameEn    : "Kyrgyzstan",
        letter    : "KG",
        phoneCode : "+996"
      },
    132 : {
        nameEn    : "Cambodia",
        letter    : "KH",
        phoneCode : "+855"
      },
    133 : {
        nameEn    : "Kiribati",
        letter    : "KI",
        phoneCode : "+686"
      },
    134 : {
        nameEn    : "Comoros",
        letter    : "KM",
        phoneCode : "+269"
      },
    135 : {
        nameEn    : "Kuwait",
        letter    : "KW",
        phoneCode : "+965"
      },
    136 : {
        nameEn    : "Laos",
        letter    : "LA",
        phoneCode : "+856"
      },
    137 : {
        nameEn    : "Lebanon",
        letter    : "LB",
        phoneCode : "+961"
      },
    138 : {
        nameEn    : "Liechtenstein",
        letter    : "LI",
        phoneCode : "+423"
      },
    139 : {
        nameEn    : "Liberia",
        letter    : "LR",
        phoneCode : "+231"
      },
    140 : {
        nameEn    : "Lesotho",
        letter    : "LS",
        phoneCode : "+266"
      },
    141 : {
        nameEn    : "Lithuania",
        letter    : "LT",
        phoneCode : "+370"
      },
    142 : {
        nameEn    : "Luxembourg",
        letter    : "LU",
        phoneCode : "+352"
      },
    143 : {
        nameEn    : "Latvia",
        letter    : "LV",
        phoneCode : "+371"
      },
    144 : {
        nameEn    : "Libya",
        letter    : "LY",
        phoneCode : "+218"
      },
    145 : {
        nameEn    : "Morocco",
        letter    : "MA",
        phoneCode : "+212"
      },
    146 : {
        nameEn    : "Monaco",
        letter    : "MC",
        phoneCode : "+377"
      },
    147 : {
        nameEn    : "Moldova",
        letter    : "MD",
        phoneCode : "+373"
      },
    148 : {
        nameEn    : "Madagascar",
        letter    : "MG",
        phoneCode : "+261"
      },
    149 : {
        nameEn    : "Marshall Islands",
        letter    : "MH",
        phoneCode : "+692"
      },
    150 : {
        nameEn    : "Macedonia",
        letter    : "MK",
        phoneCode : "+389"
      },
    151 : {
        nameEn    : "Mali",
        letter    : "ML",
        phoneCode : "+223"
      },
    152 : {
        nameEn    : "Mongolia",
        letter    : "MN",
        phoneCode : "+976"
      },
    153 : {
        nameEn    : "Macau",
        letter    : "MO",
        phoneCode : "+853"
      },
    154 : {
        nameEn    : "Martinique",
        letter    : "MQ",
        phoneCode : "+596"
      },
    155 : {
        nameEn    : "Mauritania",
        letter    : "MR",
        phoneCode : "+222"
      },
    156 : {
        nameEn    : "Malta",
        letter    : "MT",
        phoneCode : "+356"
      },
    157 : {
        nameEn    : "Mauritius",
        letter    : "MU",
        phoneCode : "+230"
      },
    158 : {
        nameEn    : "Maldives",
        letter    : "MV",
        phoneCode : "+960"
      },
    159 : {
        nameEn    : "Malawi",
        letter    : "MW",
        phoneCode : "+265"
      },
    160 : {
        nameEn    : "Mozambique",
        letter    : "MZ",
        phoneCode : "+258"
      },
    161 : {
        nameEn    : "Namibia",
        letter    : "NA",
        phoneCode : "+264"
      },
    162 : {
        nameEn    : "New Caledonia",
        letter    : "NC",
        phoneCode : "+687"
      },
    163 : {
        nameEn    : "Niger",
        letter    : "NE",
        phoneCode : "+227"
      },
    164 : {
        nameEn    : "Nigeria",
        letter    : "NG",
        phoneCode : "+234"
      },
    165 : {
        nameEn    : "Nicaragua",
        letter    : "NI",
        phoneCode : "+505"
      },
    166 : {
        nameEn    : "Nepal",
        letter    : "NP",
        phoneCode : "+977"
      },
    167 : {
        nameEn    : "Nauru",
        letter    : "NR",
        phoneCode : "+674"
      },
    168 : {
        nameEn    : "Niue",
        letter    : "NU",
        phoneCode : "+683"
      },
    169 : {
        nameEn    : "Oman",
        letter    : "OM",
        phoneCode : "+968"
      },
    170 : {
        nameEn    : "Panama",
        letter    : "PA",
        phoneCode : "+507"
      },
    171 : {
        nameEn    : "French Polynesia",
        letter    : "PF",
        phoneCode : "+689"
      },
    172 : {
        nameEn    : "Papua New Guinea",
        letter    : "PG",
        phoneCode : "+675"
      },
    173 : {
        nameEn    : "St. Pierre and Miquelon",
        letter    : "PM",
        phoneCode : "+508"
      },
    174 : {
        nameEn    : "Palestinian Territories",
        letter    : "PS",
        phoneCode : "+970"
      },
    175 : {
        nameEn    : "Portugal",
        letter    : "PT",
        phoneCode : "+351"
      },
    176 : {
        nameEn    : "Palau",
        letter    : "PW",
        phoneCode : "+680"
      },
    177 : {
        nameEn    : "Paraguay",
        letter    : "PY",
        phoneCode : "+595"
      },
    178 : {
        nameEn    : "Qatar",
        letter    : "QA",
        phoneCode : "+974"
      },
    179 : {
        nameEn    : "Reunion",
        letter    : "RE",
        phoneCode : "+262"
      },
    180 : {
        nameEn    : "Serbia",
        letter    : "RS",
        phoneCode : "+381"
      },
    181 : {
        nameEn    : "Rwanda",
        letter    : "RW",
        phoneCode : "+250"
      },
    182 : {
        nameEn    : "Saudi Arabia",
        letter    : "SA",
        phoneCode : "+966"
      },
    183 : {
        nameEn    : "Solomon Islands",
        letter    : "SB",
        phoneCode : "+677"
      },
    184 : {
        nameEn    : "Seychelles",
        letter    : "SC",
        phoneCode : "+248"
      },
    185 : {
        nameEn    : "Sudan",
        letter    : "SD",
        phoneCode : "+249"
      },
    186 : {
        nameEn    : "St. Helena",
        letter    : "SH",
        phoneCode : "+290"
      },
    187 : {
        nameEn    : "Slovenia",
        letter    : "SI",
        phoneCode : "+386"
      },
    188 : {
        nameEn    : "Slovakia",
        letter    : "SK",
        phoneCode : "+421"
      },
    189 : {
        nameEn    : "Sierra Leone",
        letter    : "SL",
        phoneCode : "+232"
      },
    190 : {
        nameEn    : "San Marino",
        letter    : "SM",
        phoneCode : "+378"
      },
    191 : {
        nameEn    : "Senegal",
        letter    : "SN",
        phoneCode : "+221"
      },
    192 : {
        nameEn    : "Somalia",
        letter    : "SO",
        phoneCode : "+252"
      },
    193 : {
        nameEn    : "Suriname",
        letter    : "SR",
        phoneCode : "+597"
      },
    194 : {
        nameEn    : "Sao Tome and Principe",
        letter    : "ST",
        phoneCode : "+239"
      },
    195 : {
        nameEn    : "El Salvador",
        letter    : "SV",
        phoneCode : "+503"
      },
    196 : {
        nameEn    : "Syria",
        letter    : "SY",
        phoneCode : "+963"
      },
    197 : {
        nameEn    : "Swaziland",
        letter    : "SZ",
        phoneCode : "+268"
      },
    198 : {
        nameEn    : "Chad",
        letter    : "TD",
        phoneCode : "+235"
      },
    199 : {
        nameEn    : "Togo",
        letter    : "TG",
        phoneCode : "+228"
      },
    200 : {
        nameEn    : "Tajikistan",
        letter    : "TJ",
        phoneCode : "+992"
      },
    201 : {
        nameEn    : "Tokelau",
        letter    : "TK",
        phoneCode : "+690"
      },
    202 : {
        nameEn    : "East Timor",
        letter    : "TL",
        phoneCode : "+670"
      },
    203 : {
        nameEn    : "Turkmenistan",
        letter    : "TM",
        phoneCode : "+993"
      },
    204 : {
        nameEn    : "Tunisia",
        letter    : "TN",
        phoneCode : "+216"
      },
    205 : {
        nameEn    : "Tonga",
        letter    : "TO",
        phoneCode : "+676"
      },
    206 : {
        nameEn    : "Tuvalu",
        letter    : "TV",
        phoneCode : "+688"
      },
    207 : {
        nameEn    : "Taiwan",
        letter    : "TW",
        phoneCode : "+886"
      },
    208 : {
        nameEn    : "Tanzania",
        letter    : "TZ",
        phoneCode : "+255"
      },
    209 : {
        nameEn    : "Ukraine",
        letter    : "UA",
        phoneCode : "+380"
      },
    210 : {
        nameEn    : "Uganda",
        letter    : "UG",
        phoneCode : "+256"
      },
    211 : {
        nameEn    : "US Minor Outlying Islands",
        letter    : "UM",
        phoneCode : "+598"
      },
    212 : {
        nameEn    : "Uzbekistan",
        letter    : "UZ",
        phoneCode : "+998"
      },
    213 : {
        nameEn    : "Vatican City",
        letter    : "VA",
        phoneCode : "+379"
      },
    214 : {
        nameEn    : "Vanuatu",
        letter    : "VU",
        phoneCode : "+678"
      },
    215 : {
        nameEn    : "Wallis and Futuna Islands",
        letter    : "WF",
        phoneCode : "+681"
      },
    216 : {
        nameEn    : "Samoa",
        letter    : "WS",
        phoneCode : "+685"
      },
    217 : {
        nameEn    : "Yemen",
        letter    : "YE",
        phoneCode : "+967"
      },
    218 : {
        nameEn    : "Zambia",
        letter    : "ZM",
        phoneCode : "+260"
      },
    219 : {
        nameEn    : "Zimbabwe",
        letter    : "ZW",
        phoneCode : "+263"
      },
    220 : {
        nameEn    : "Kazakhstan",
        letter    : "KZ",
        phoneCode : "+7"
      },
    221 : {
        nameEn    : "Russian Federation",
        letter    : "RU",
        phoneCode : "+7"
      },
    22 : {
        nameEn    : "Romania",
        letter    : "RO",
        phoneCode : "+40"
      },
    223 : {
        nameEn    : "Heard and McDonald Islands",
        letter    : "HM",
        phoneCode : "+1"
      },
    224 : {
        nameEn    : "Norfolk Island",
        letter    : "NF",
        phoneCode : "+6723"
      },
    225 : {
        nameEn    : "Bouvet Island",
        letter    : "BV",
        phoneCode : "+47"
      },
    226 : {
        nameEn    : "Cocos",
        letter    : "CC",
        phoneCode : "+61"
      },
    227 : {
        nameEn    : "Christmas Island",
        letter    : "CX",
        phoneCode : "+61"
      },
    228 : {
        nameEn    : "S. Georgia and S. Sandwich Islands",
        letter    : "GS",
        phoneCode : "+44"
      },
    229 : {
        nameEn    : "Svalbard and Jan Mayen Islands",
        letter    : "SJ",
        phoneCode : "+79"
      },
    230 : {
        nameEn    : "French Southern Territories",
        letter    : "TF",
        phoneCode : "+33"
      },
    231 : {
        nameEn    : "Mayotte",
        letter    : "YT",
        phoneCode : "+269"
      },
    232 : {
        nameEn    : "Aland Islands",
        letter    : "AX",
        phoneCode : "+358"
      },
    233 : {
        nameEn    : "Western Sahara",
        letter    : "EH",
        phoneCode : "+212"
      },
    234 : {
        nameEn    : "Pitcairn",
        letter    : "PN",
        phoneCode : "+870"
      },
    235 : {
        nameEn    : "Uruguay",
        letter    : "UY",
        phoneCode : "+598"
      }
    }

  $('#select-country').change(function(){
    var temp = $(this).val();

    for (var key in countries) {
      if (temp == countries[key].letter) {
        var temp2 = countries[key].phoneCode;
        $('#input-country-code').val(temp2);
      }
    }

    if (temp != 0) {
      $('#select-info').css({'transition':'height .5s','height':'0px'});
    }
  });
  /* ↑↑↑ /country code autocomplete ↑↑↑ */

  /* ↓↓↓ phone inputs - only for numbers ↓↓↓ */
  $('#input-company-code, #input-phone').keypress(function(e){
    e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    var chr = getChar(e);
    if (chr == null) return;
    if (chr < '0' || chr > '9') {
      return false;
    }
    function getChar(event) {
      if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode) // IE
      }
      if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which) // остальные
      }
      return null; // специальная клавиша
    }
  });
  /* ↑↑↑ /phone inputs - only for numbers ↑↑↑ */

  /* ↓↓↓ form validation ↓↓↓ */
  $('button[type="submit"]').click(function(e){

    if ($('#select-country').val() == 0) {
      e.preventDefault();
      $('#select-info').css({'transition':'height .5s','height':'30px'});
    }


    if ($('#input-password').val() == 0) {
      e.preventDefault();
      $('#input-password-info').text('Введите пароль!').css({'transition':'height .5s','height':'30px'});
    }
    if ($('#input-password').val() !== $('#input-confirm-pass').val()) {
      e.preventDefault();
      $('#input-password-info').text('Пароли не совпадают!').css({'transition':'height .5s','height':'30px'});
    }


    if ($('#input-country-code').val() == 0) {
      e.preventDefault();
      $('#input-phone-info').css({'transition':'height .5s','height':'30px'});
    }
    if ($('#input-company-code').val() == 0) {
      e.preventDefault();
      $('#input-phone-info').css({'transition':'height .5s','height':'30px'});
    }
    if ($('#input-company-code').val() == 0 || $('#input-phone').val().length < 7) {
      e.preventDefault();
      $('#input-phone').css({'transition':'height .5s','height':'30px'});
    }


    var temp = $('#input-email').val();
    if (temp.indexOf('@') <= 0 || temp.indexOf('@') > temp.lastIndexOf('.')) {
      e.preventDefault();
      $('#input-email-info').css({'transition':'height .5s','height':'30px'});
    }


    if ($('#input-firstName').val() == 0) {
      e.preventDefault();
      $('#input-firstName-info').css({'transition':'height .5s','height':'30px'});
    }

    if ($('#input-lastName').val() == 0) {
      e.preventDefault();
      $('#input-lastName-info').css({'transition':'height .5s','height':'30px'});
    }

  });



  $('#input-password').change(function(){
    if ($(this).val() === $('#input-confirm-pass').val()) {
      $('#input-password-info').css({'transition':'height .5s','height':'0px'});
    }
  });
  $('#input-confirm-pass').change(function(){
    if ($(this).val() === $('#input-password').val()) {
      $('#input-password-info').css({'transition':'height .5s','height':'0px'});
    }
  });


  $('#input-country-code, #input-company-code, #input-phone').change(function(){
    if ($('#input-country-code').val() != 0 && $('#input-company-code').val() != 0 && $('#input-phone').val() != 0 && ($('#input-phone').val().length >= 7)) {
     $('#input-phone-info').css({'transition':'height .5s','height':'0px'});
    }
  });


  $('#input-email').change(function(e){
    var temp = $('#input-email').val();
    if (temp.indexOf('@') > 0 && temp.indexOf('@') < temp.lastIndexOf('.')) {
      e.preventDefault();
      $('#input-email-info').css({'transition':'height .5s','height':'0px'});
    }
  });


  $('#input-firstName').change(function(e){
    if ($('#input-firstName').val() != 0 ) {
      e.preventDefault();
      $('#input-firstName-info').css({'transition':'height .5s','height':'0px'});
    }
  });


  $('#input-lastName').change(function(e){
    if ($('#input-lastName').val() != 0 ) {
      e.preventDefault();
      $('#input-lastName-info').css({'transition':'height .5s','height':'0px'});
    }
  });


  /* ↑↑↑ /form validation ↑↑↑ */
});


