/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export enum AttributeType {
  NO_TYPE = 0,
  PHONE = 1,
  EMAIL = 2,
  ADDRESS = 3,
  COORDINATE = 4,
  SOCIAL = 5,
  CREDENTIAL = 6,
  URL = 7,
  TEXT = 8,
  UNRECOGNIZED = -1,
}

export function attributeTypeFromJSON(object: any): AttributeType {
  switch (object) {
    case 0:
    case "NO_TYPE":
      return AttributeType.NO_TYPE;
    case 1:
    case "PHONE":
      return AttributeType.PHONE;
    case 2:
    case "EMAIL":
      return AttributeType.EMAIL;
    case 3:
    case "ADDRESS":
      return AttributeType.ADDRESS;
    case 4:
    case "COORDINATE":
      return AttributeType.COORDINATE;
    case 5:
    case "SOCIAL":
      return AttributeType.SOCIAL;
    case 6:
    case "CREDENTIAL":
      return AttributeType.CREDENTIAL;
    case 7:
    case "URL":
      return AttributeType.URL;
    case 8:
    case "TEXT":
      return AttributeType.TEXT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AttributeType.UNRECOGNIZED;
  }
}

export function attributeTypeToJSON(object: AttributeType): string {
  switch (object) {
    case AttributeType.NO_TYPE:
      return "NO_TYPE";
    case AttributeType.PHONE:
      return "PHONE";
    case AttributeType.EMAIL:
      return "EMAIL";
    case AttributeType.ADDRESS:
      return "ADDRESS";
    case AttributeType.COORDINATE:
      return "COORDINATE";
    case AttributeType.SOCIAL:
      return "SOCIAL";
    case AttributeType.CREDENTIAL:
      return "CREDENTIAL";
    case AttributeType.URL:
      return "URL";
    case AttributeType.TEXT:
      return "TEXT";
    default:
      return "UNKNOWN";
  }
}

export enum SocialNetwork {
  NO_NETWORK = 0,
  CUSTOM_NETWORK = 1,
  WEBSITE = 2,
  FACEBOOK = 3,
  YOUTUBE = 4,
  WHATSAPP = 5,
  MESSENGER = 6,
  WECHAT = 7,
  INSTAGRAM = 8,
  TIKTOK = 9,
  QQ = 10,
  QZONE = 11,
  SINA_WEIBO = 12,
  PINTEREST = 13,
  TUMBLR = 14,
  REDDIT = 15,
  TWITTER = 16,
  LINKEDIN = 17,
  DOUBAN = 18,
  BAIDU_TIEBA = 19,
  SNAPCHAT = 20,
  VIBER = 21,
  DISCORD = 22,
  VIMEO = 23,
  TELEGRAM = 24,
  LINE = 25,
  TWITCH = 26,
  MEDIUM = 27,
  UNRECOGNIZED = -1,
}

export function socialNetworkFromJSON(object: any): SocialNetwork {
  switch (object) {
    case 0:
    case "NO_NETWORK":
      return SocialNetwork.NO_NETWORK;
    case 1:
    case "CUSTOM_NETWORK":
      return SocialNetwork.CUSTOM_NETWORK;
    case 2:
    case "WEBSITE":
      return SocialNetwork.WEBSITE;
    case 3:
    case "FACEBOOK":
      return SocialNetwork.FACEBOOK;
    case 4:
    case "YOUTUBE":
      return SocialNetwork.YOUTUBE;
    case 5:
    case "WHATSAPP":
      return SocialNetwork.WHATSAPP;
    case 6:
    case "MESSENGER":
      return SocialNetwork.MESSENGER;
    case 7:
    case "WECHAT":
      return SocialNetwork.WECHAT;
    case 8:
    case "INSTAGRAM":
      return SocialNetwork.INSTAGRAM;
    case 9:
    case "TIKTOK":
      return SocialNetwork.TIKTOK;
    case 10:
    case "QQ":
      return SocialNetwork.QQ;
    case 11:
    case "QZONE":
      return SocialNetwork.QZONE;
    case 12:
    case "SINA_WEIBO":
      return SocialNetwork.SINA_WEIBO;
    case 13:
    case "PINTEREST":
      return SocialNetwork.PINTEREST;
    case 14:
    case "TUMBLR":
      return SocialNetwork.TUMBLR;
    case 15:
    case "REDDIT":
      return SocialNetwork.REDDIT;
    case 16:
    case "TWITTER":
      return SocialNetwork.TWITTER;
    case 17:
    case "LINKEDIN":
      return SocialNetwork.LINKEDIN;
    case 18:
    case "DOUBAN":
      return SocialNetwork.DOUBAN;
    case 19:
    case "BAIDU_TIEBA":
      return SocialNetwork.BAIDU_TIEBA;
    case 20:
    case "SNAPCHAT":
      return SocialNetwork.SNAPCHAT;
    case 21:
    case "VIBER":
      return SocialNetwork.VIBER;
    case 22:
    case "DISCORD":
      return SocialNetwork.DISCORD;
    case 23:
    case "VIMEO":
      return SocialNetwork.VIMEO;
    case 24:
    case "TELEGRAM":
      return SocialNetwork.TELEGRAM;
    case 25:
    case "LINE":
      return SocialNetwork.LINE;
    case 26:
    case "TWITCH":
      return SocialNetwork.TWITCH;
    case 27:
    case "MEDIUM":
      return SocialNetwork.MEDIUM;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SocialNetwork.UNRECOGNIZED;
  }
}

export function socialNetworkToJSON(object: SocialNetwork): string {
  switch (object) {
    case SocialNetwork.NO_NETWORK:
      return "NO_NETWORK";
    case SocialNetwork.CUSTOM_NETWORK:
      return "CUSTOM_NETWORK";
    case SocialNetwork.WEBSITE:
      return "WEBSITE";
    case SocialNetwork.FACEBOOK:
      return "FACEBOOK";
    case SocialNetwork.YOUTUBE:
      return "YOUTUBE";
    case SocialNetwork.WHATSAPP:
      return "WHATSAPP";
    case SocialNetwork.MESSENGER:
      return "MESSENGER";
    case SocialNetwork.WECHAT:
      return "WECHAT";
    case SocialNetwork.INSTAGRAM:
      return "INSTAGRAM";
    case SocialNetwork.TIKTOK:
      return "TIKTOK";
    case SocialNetwork.QQ:
      return "QQ";
    case SocialNetwork.QZONE:
      return "QZONE";
    case SocialNetwork.SINA_WEIBO:
      return "SINA_WEIBO";
    case SocialNetwork.PINTEREST:
      return "PINTEREST";
    case SocialNetwork.TUMBLR:
      return "TUMBLR";
    case SocialNetwork.REDDIT:
      return "REDDIT";
    case SocialNetwork.TWITTER:
      return "TWITTER";
    case SocialNetwork.LINKEDIN:
      return "LINKEDIN";
    case SocialNetwork.DOUBAN:
      return "DOUBAN";
    case SocialNetwork.BAIDU_TIEBA:
      return "BAIDU_TIEBA";
    case SocialNetwork.SNAPCHAT:
      return "SNAPCHAT";
    case SocialNetwork.VIBER:
      return "VIBER";
    case SocialNetwork.DISCORD:
      return "DISCORD";
    case SocialNetwork.VIMEO:
      return "VIMEO";
    case SocialNetwork.TELEGRAM:
      return "TELEGRAM";
    case SocialNetwork.LINE:
      return "LINE";
    case SocialNetwork.TWITCH:
      return "TWITCH";
    case SocialNetwork.MEDIUM:
      return "MEDIUM";
    default:
      return "UNKNOWN";
  }
}

export enum Country {
  NO_COUNTRY = 0,
  UNITED_STATES = 1,
  CANADA = 2,
  MEXICO = 3,
  CHINA = 4,
  INDIA = 5,
  INDONESIA = 6,
  PAKISTAN = 7,
  BRAZIL = 8,
  NIGERIA = 9,
  BANGLADESH = 10,
  RUSSIA = 11,
  JAPAN = 12,
  ETHIOPIA = 13,
  PHILIPPINES = 14,
  EGYPT = 15,
  VIETNAM = 16,
  DR_CONGO = 17,
  TURKEY = 18,
  IRAN = 19,
  GERMANY = 20,
  THAILAND = 21,
  UNITED_KINGDOM = 22,
  FRANCE = 23,
  ITALY = 24,
  TANZANIA = 25,
  SOUTH_AFRICA = 26,
  MYANMAR = 27,
  KENYA = 28,
  SOUTH_KOREA = 29,
  COLOMBIA = 30,
  SPAIN = 31,
  UGANDA = 32,
  ARGENTINA = 33,
  ALGERIA = 34,
  SUDAN = 35,
  UKRAINE = 36,
  IRAQ = 37,
  AFGHANISTAN = 38,
  POLAND = 39,
  MOROCCO = 40,
  SAUDI_ARABIA = 41,
  UZBEKISTAN = 42,
  PERU = 43,
  ANGOLA = 44,
  MALAYSIA = 45,
  MOZAMBIQUE = 46,
  GHANA = 47,
  YEMEN = 48,
  NEPAL = 49,
  VENEZUELA = 50,
  MADAGASCAR = 51,
  CAMEROON = 52,
  COTE_DIVOIRE = 53,
  NORTH_KOREA = 54,
  AUSTRALIA = 55,
  NIGER = 56,
  TAIWAN = 57,
  SRI_LANKA = 58,
  BURKINA_FASO = 59,
  MALI = 60,
  ROMANIA = 61,
  MALAWI = 62,
  CHILE = 63,
  KAZAKHSTAN = 64,
  ZAMBIA = 65,
  GUATEMALA = 66,
  ECUADOR = 67,
  SYRIA = 68,
  NETHERLANDS = 69,
  SENEGAL = 70,
  CAMBODIA = 71,
  CHAD = 72,
  SOMALIA = 73,
  ZIMBABWE = 74,
  GUINEA = 75,
  RWANDA = 76,
  BENIN = 77,
  BURUNDI = 78,
  TUNISIA = 79,
  BOLIVIA = 80,
  BELGIUM = 81,
  HAITI = 82,
  CUBA = 83,
  SOUTH_SUDAN = 84,
  DOMINICAN_REPUBLIC = 85,
  CZECH_REPUBLIC = 86,
  GREECE = 87,
  JORDAN = 88,
  PORTUGAL = 89,
  AZERBAIJAN = 90,
  SWEDEN = 91,
  HONDURAS = 92,
  UNITED_ARAB_EMIRATES = 93,
  HUNGARY = 94,
  TAJIKISTAN = 95,
  BELARUS = 96,
  AUSTRIA = 97,
  PAPUA_NEW_GUINEA = 98,
  SERBIA = 99,
  ISRAEL = 100,
  SWITZERLAND = 101,
  TOGO = 102,
  SIERRA_LEONE = 103,
  HONG_KONG = 104,
  LAOS = 105,
  PARAGUAY = 106,
  BULGARIA = 107,
  LIBYA = 108,
  LEBANON = 109,
  NICARAGUA = 110,
  KYRGYZSTAN = 111,
  EL_SALVADOR = 112,
  TURKMENISTAN = 113,
  SINGAPORE = 114,
  DENMARK = 115,
  FINLAND = 116,
  CONGO = 117,
  SLOVAKIA = 118,
  NORWAY = 119,
  OMAN = 120,
  STATE_OF_PALESTINE = 121,
  COSTA_RICA = 122,
  LIBERIA = 123,
  IRELAND = 124,
  CENTRAL_AFRICAN_REPUBLIC = 125,
  NEW_ZEALAND = 126,
  PUERTO_RICO = 127,
  MAURITANIA = 128,
  PANAMA = 129,
  KUWAIT = 130,
  CROATIA = 131,
  MOLDOVA = 132,
  GEORGIA = 133,
  ERITREA = 134,
  URUGUAY = 135,
  BOSNIA_AND_HERZEGOVINA = 136,
  MONGOLIA = 137,
  ARMENIA = 138,
  JAMAICA = 139,
  QATAR = 140,
  ALBANIA = 141,
  LITHUANIA = 142,
  NAMIBIA = 143,
  GAMBIA = 144,
  BOTSWANA = 145,
  GABON = 146,
  LESOTHO = 147,
  NORTH_MACEDONIA = 148,
  SLOVENIA = 149,
  GUINEA_BISSAU = 150,
  LATVIA = 151,
  BAHRAIN = 152,
  EQUATORIAL_GUINEA = 153,
  TRINIDAD_AND_TOBAGO = 154,
  ESTONIA = 155,
  TIMOR_LESTE = 156,
  MAURITIUS = 157,
  CYPRUS = 158,
  ESWATINI = 159,
  DJIBOUTI = 160,
  FIJI = 161,
  REUNION = 162,
  COMOROS = 163,
  GUYANA = 164,
  BHUTAN = 165,
  SOLOMON_ISLANDS = 166,
  MACAO = 167,
  MONTENEGRO = 168,
  LUXEMBOURG = 169,
  WESTERN_SAHARA = 170,
  SURINAME = 171,
  CABO_VERDE = 172,
  MICRONESIA = 173,
  MALDIVES = 174,
  MALTA = 175,
  BRUNEI = 176,
  GUADELOUPE = 177,
  BELIZE = 178,
  BAHAMAS = 179,
  MARTINIQUE = 180,
  ICELAND = 181,
  VANUATU = 182,
  FRENCH_GUIANA = 183,
  BARBADOS = 184,
  NEW_CALEDONIA = 185,
  FRENCH_POLYNESIA = 186,
  MAYOTTE = 187,
  SAO_TOME_PRINCIPE = 188,
  SAMOA = 189,
  SAINT_LUCIA = 190,
  CHANNEL_ISLANDS = 191,
  GUAM = 192,
  CURACAO = 193,
  KIRIBATI = 194,
  GRENADA = 195,
  ST_VINCENT_GRENADINES = 196,
  ARUBA = 197,
  TONGA = 198,
  US_VIRGIN_ISLANDS = 199,
  SEYCHELLES = 200,
  ANTIGUA_AND_BARBUDA = 201,
  ISLE_OF_MAN = 202,
  ANDORRA = 203,
  DOMINICA = 204,
  CAYMAN_ISLANDS = 205,
  BERMUDA = 206,
  MARSHALL_ISLANDS = 207,
  NORTHERN_MARIANA_ISLANDS = 208,
  GREENLAND = 209,
  AMERICAN_SAMOA = 210,
  SAINT_KITTS_NEVIS = 211,
  FAEROE_ISLANDS = 212,
  SINT_MAARTEN = 213,
  MONACO = 214,
  TURKS_AND_CAICOS = 215,
  SAINT_MARTIN = 216,
  LIECHTENSTEIN = 217,
  SAN_MARINO = 218,
  GIBRALTAR = 219,
  BRITISH_VIRGIN_ISLANDS = 220,
  CARIBBEAN_NETHERLANDS = 221,
  PALAU = 222,
  COOK_ISLANDS = 223,
  ANGUILLA = 224,
  TUVALU = 225,
  WALLIS_FUTUNA = 226,
  NAURU = 227,
  SAINT_BARTHELEMY = 228,
  SAINT_HELENA = 229,
  SAINT_PIERRE_MIQUELON = 230,
  MONTSERRAT = 231,
  FALKLAND_ISLANDS = 232,
  NIUE = 233,
  TOKELAU = 234,
  HOLY_SEE = 235,
  UNRECOGNIZED = -1,
}

export function countryFromJSON(object: any): Country {
  switch (object) {
    case 0:
    case "NO_COUNTRY":
      return Country.NO_COUNTRY;
    case 1:
    case "UNITED_STATES":
      return Country.UNITED_STATES;
    case 2:
    case "CANADA":
      return Country.CANADA;
    case 3:
    case "MEXICO":
      return Country.MEXICO;
    case 4:
    case "CHINA":
      return Country.CHINA;
    case 5:
    case "INDIA":
      return Country.INDIA;
    case 6:
    case "INDONESIA":
      return Country.INDONESIA;
    case 7:
    case "PAKISTAN":
      return Country.PAKISTAN;
    case 8:
    case "BRAZIL":
      return Country.BRAZIL;
    case 9:
    case "NIGERIA":
      return Country.NIGERIA;
    case 10:
    case "BANGLADESH":
      return Country.BANGLADESH;
    case 11:
    case "RUSSIA":
      return Country.RUSSIA;
    case 12:
    case "JAPAN":
      return Country.JAPAN;
    case 13:
    case "ETHIOPIA":
      return Country.ETHIOPIA;
    case 14:
    case "PHILIPPINES":
      return Country.PHILIPPINES;
    case 15:
    case "EGYPT":
      return Country.EGYPT;
    case 16:
    case "VIETNAM":
      return Country.VIETNAM;
    case 17:
    case "DR_CONGO":
      return Country.DR_CONGO;
    case 18:
    case "TURKEY":
      return Country.TURKEY;
    case 19:
    case "IRAN":
      return Country.IRAN;
    case 20:
    case "GERMANY":
      return Country.GERMANY;
    case 21:
    case "THAILAND":
      return Country.THAILAND;
    case 22:
    case "UNITED_KINGDOM":
      return Country.UNITED_KINGDOM;
    case 23:
    case "FRANCE":
      return Country.FRANCE;
    case 24:
    case "ITALY":
      return Country.ITALY;
    case 25:
    case "TANZANIA":
      return Country.TANZANIA;
    case 26:
    case "SOUTH_AFRICA":
      return Country.SOUTH_AFRICA;
    case 27:
    case "MYANMAR":
      return Country.MYANMAR;
    case 28:
    case "KENYA":
      return Country.KENYA;
    case 29:
    case "SOUTH_KOREA":
      return Country.SOUTH_KOREA;
    case 30:
    case "COLOMBIA":
      return Country.COLOMBIA;
    case 31:
    case "SPAIN":
      return Country.SPAIN;
    case 32:
    case "UGANDA":
      return Country.UGANDA;
    case 33:
    case "ARGENTINA":
      return Country.ARGENTINA;
    case 34:
    case "ALGERIA":
      return Country.ALGERIA;
    case 35:
    case "SUDAN":
      return Country.SUDAN;
    case 36:
    case "UKRAINE":
      return Country.UKRAINE;
    case 37:
    case "IRAQ":
      return Country.IRAQ;
    case 38:
    case "AFGHANISTAN":
      return Country.AFGHANISTAN;
    case 39:
    case "POLAND":
      return Country.POLAND;
    case 40:
    case "MOROCCO":
      return Country.MOROCCO;
    case 41:
    case "SAUDI_ARABIA":
      return Country.SAUDI_ARABIA;
    case 42:
    case "UZBEKISTAN":
      return Country.UZBEKISTAN;
    case 43:
    case "PERU":
      return Country.PERU;
    case 44:
    case "ANGOLA":
      return Country.ANGOLA;
    case 45:
    case "MALAYSIA":
      return Country.MALAYSIA;
    case 46:
    case "MOZAMBIQUE":
      return Country.MOZAMBIQUE;
    case 47:
    case "GHANA":
      return Country.GHANA;
    case 48:
    case "YEMEN":
      return Country.YEMEN;
    case 49:
    case "NEPAL":
      return Country.NEPAL;
    case 50:
    case "VENEZUELA":
      return Country.VENEZUELA;
    case 51:
    case "MADAGASCAR":
      return Country.MADAGASCAR;
    case 52:
    case "CAMEROON":
      return Country.CAMEROON;
    case 53:
    case "COTE_DIVOIRE":
      return Country.COTE_DIVOIRE;
    case 54:
    case "NORTH_KOREA":
      return Country.NORTH_KOREA;
    case 55:
    case "AUSTRALIA":
      return Country.AUSTRALIA;
    case 56:
    case "NIGER":
      return Country.NIGER;
    case 57:
    case "TAIWAN":
      return Country.TAIWAN;
    case 58:
    case "SRI_LANKA":
      return Country.SRI_LANKA;
    case 59:
    case "BURKINA_FASO":
      return Country.BURKINA_FASO;
    case 60:
    case "MALI":
      return Country.MALI;
    case 61:
    case "ROMANIA":
      return Country.ROMANIA;
    case 62:
    case "MALAWI":
      return Country.MALAWI;
    case 63:
    case "CHILE":
      return Country.CHILE;
    case 64:
    case "KAZAKHSTAN":
      return Country.KAZAKHSTAN;
    case 65:
    case "ZAMBIA":
      return Country.ZAMBIA;
    case 66:
    case "GUATEMALA":
      return Country.GUATEMALA;
    case 67:
    case "ECUADOR":
      return Country.ECUADOR;
    case 68:
    case "SYRIA":
      return Country.SYRIA;
    case 69:
    case "NETHERLANDS":
      return Country.NETHERLANDS;
    case 70:
    case "SENEGAL":
      return Country.SENEGAL;
    case 71:
    case "CAMBODIA":
      return Country.CAMBODIA;
    case 72:
    case "CHAD":
      return Country.CHAD;
    case 73:
    case "SOMALIA":
      return Country.SOMALIA;
    case 74:
    case "ZIMBABWE":
      return Country.ZIMBABWE;
    case 75:
    case "GUINEA":
      return Country.GUINEA;
    case 76:
    case "RWANDA":
      return Country.RWANDA;
    case 77:
    case "BENIN":
      return Country.BENIN;
    case 78:
    case "BURUNDI":
      return Country.BURUNDI;
    case 79:
    case "TUNISIA":
      return Country.TUNISIA;
    case 80:
    case "BOLIVIA":
      return Country.BOLIVIA;
    case 81:
    case "BELGIUM":
      return Country.BELGIUM;
    case 82:
    case "HAITI":
      return Country.HAITI;
    case 83:
    case "CUBA":
      return Country.CUBA;
    case 84:
    case "SOUTH_SUDAN":
      return Country.SOUTH_SUDAN;
    case 85:
    case "DOMINICAN_REPUBLIC":
      return Country.DOMINICAN_REPUBLIC;
    case 86:
    case "CZECH_REPUBLIC":
      return Country.CZECH_REPUBLIC;
    case 87:
    case "GREECE":
      return Country.GREECE;
    case 88:
    case "JORDAN":
      return Country.JORDAN;
    case 89:
    case "PORTUGAL":
      return Country.PORTUGAL;
    case 90:
    case "AZERBAIJAN":
      return Country.AZERBAIJAN;
    case 91:
    case "SWEDEN":
      return Country.SWEDEN;
    case 92:
    case "HONDURAS":
      return Country.HONDURAS;
    case 93:
    case "UNITED_ARAB_EMIRATES":
      return Country.UNITED_ARAB_EMIRATES;
    case 94:
    case "HUNGARY":
      return Country.HUNGARY;
    case 95:
    case "TAJIKISTAN":
      return Country.TAJIKISTAN;
    case 96:
    case "BELARUS":
      return Country.BELARUS;
    case 97:
    case "AUSTRIA":
      return Country.AUSTRIA;
    case 98:
    case "PAPUA_NEW_GUINEA":
      return Country.PAPUA_NEW_GUINEA;
    case 99:
    case "SERBIA":
      return Country.SERBIA;
    case 100:
    case "ISRAEL":
      return Country.ISRAEL;
    case 101:
    case "SWITZERLAND":
      return Country.SWITZERLAND;
    case 102:
    case "TOGO":
      return Country.TOGO;
    case 103:
    case "SIERRA_LEONE":
      return Country.SIERRA_LEONE;
    case 104:
    case "HONG_KONG":
      return Country.HONG_KONG;
    case 105:
    case "LAOS":
      return Country.LAOS;
    case 106:
    case "PARAGUAY":
      return Country.PARAGUAY;
    case 107:
    case "BULGARIA":
      return Country.BULGARIA;
    case 108:
    case "LIBYA":
      return Country.LIBYA;
    case 109:
    case "LEBANON":
      return Country.LEBANON;
    case 110:
    case "NICARAGUA":
      return Country.NICARAGUA;
    case 111:
    case "KYRGYZSTAN":
      return Country.KYRGYZSTAN;
    case 112:
    case "EL_SALVADOR":
      return Country.EL_SALVADOR;
    case 113:
    case "TURKMENISTAN":
      return Country.TURKMENISTAN;
    case 114:
    case "SINGAPORE":
      return Country.SINGAPORE;
    case 115:
    case "DENMARK":
      return Country.DENMARK;
    case 116:
    case "FINLAND":
      return Country.FINLAND;
    case 117:
    case "CONGO":
      return Country.CONGO;
    case 118:
    case "SLOVAKIA":
      return Country.SLOVAKIA;
    case 119:
    case "NORWAY":
      return Country.NORWAY;
    case 120:
    case "OMAN":
      return Country.OMAN;
    case 121:
    case "STATE_OF_PALESTINE":
      return Country.STATE_OF_PALESTINE;
    case 122:
    case "COSTA_RICA":
      return Country.COSTA_RICA;
    case 123:
    case "LIBERIA":
      return Country.LIBERIA;
    case 124:
    case "IRELAND":
      return Country.IRELAND;
    case 125:
    case "CENTRAL_AFRICAN_REPUBLIC":
      return Country.CENTRAL_AFRICAN_REPUBLIC;
    case 126:
    case "NEW_ZEALAND":
      return Country.NEW_ZEALAND;
    case 127:
    case "PUERTO_RICO":
      return Country.PUERTO_RICO;
    case 128:
    case "MAURITANIA":
      return Country.MAURITANIA;
    case 129:
    case "PANAMA":
      return Country.PANAMA;
    case 130:
    case "KUWAIT":
      return Country.KUWAIT;
    case 131:
    case "CROATIA":
      return Country.CROATIA;
    case 132:
    case "MOLDOVA":
      return Country.MOLDOVA;
    case 133:
    case "GEORGIA":
      return Country.GEORGIA;
    case 134:
    case "ERITREA":
      return Country.ERITREA;
    case 135:
    case "URUGUAY":
      return Country.URUGUAY;
    case 136:
    case "BOSNIA_AND_HERZEGOVINA":
      return Country.BOSNIA_AND_HERZEGOVINA;
    case 137:
    case "MONGOLIA":
      return Country.MONGOLIA;
    case 138:
    case "ARMENIA":
      return Country.ARMENIA;
    case 139:
    case "JAMAICA":
      return Country.JAMAICA;
    case 140:
    case "QATAR":
      return Country.QATAR;
    case 141:
    case "ALBANIA":
      return Country.ALBANIA;
    case 142:
    case "LITHUANIA":
      return Country.LITHUANIA;
    case 143:
    case "NAMIBIA":
      return Country.NAMIBIA;
    case 144:
    case "GAMBIA":
      return Country.GAMBIA;
    case 145:
    case "BOTSWANA":
      return Country.BOTSWANA;
    case 146:
    case "GABON":
      return Country.GABON;
    case 147:
    case "LESOTHO":
      return Country.LESOTHO;
    case 148:
    case "NORTH_MACEDONIA":
      return Country.NORTH_MACEDONIA;
    case 149:
    case "SLOVENIA":
      return Country.SLOVENIA;
    case 150:
    case "GUINEA_BISSAU":
      return Country.GUINEA_BISSAU;
    case 151:
    case "LATVIA":
      return Country.LATVIA;
    case 152:
    case "BAHRAIN":
      return Country.BAHRAIN;
    case 153:
    case "EQUATORIAL_GUINEA":
      return Country.EQUATORIAL_GUINEA;
    case 154:
    case "TRINIDAD_AND_TOBAGO":
      return Country.TRINIDAD_AND_TOBAGO;
    case 155:
    case "ESTONIA":
      return Country.ESTONIA;
    case 156:
    case "TIMOR_LESTE":
      return Country.TIMOR_LESTE;
    case 157:
    case "MAURITIUS":
      return Country.MAURITIUS;
    case 158:
    case "CYPRUS":
      return Country.CYPRUS;
    case 159:
    case "ESWATINI":
      return Country.ESWATINI;
    case 160:
    case "DJIBOUTI":
      return Country.DJIBOUTI;
    case 161:
    case "FIJI":
      return Country.FIJI;
    case 162:
    case "REUNION":
      return Country.REUNION;
    case 163:
    case "COMOROS":
      return Country.COMOROS;
    case 164:
    case "GUYANA":
      return Country.GUYANA;
    case 165:
    case "BHUTAN":
      return Country.BHUTAN;
    case 166:
    case "SOLOMON_ISLANDS":
      return Country.SOLOMON_ISLANDS;
    case 167:
    case "MACAO":
      return Country.MACAO;
    case 168:
    case "MONTENEGRO":
      return Country.MONTENEGRO;
    case 169:
    case "LUXEMBOURG":
      return Country.LUXEMBOURG;
    case 170:
    case "WESTERN_SAHARA":
      return Country.WESTERN_SAHARA;
    case 171:
    case "SURINAME":
      return Country.SURINAME;
    case 172:
    case "CABO_VERDE":
      return Country.CABO_VERDE;
    case 173:
    case "MICRONESIA":
      return Country.MICRONESIA;
    case 174:
    case "MALDIVES":
      return Country.MALDIVES;
    case 175:
    case "MALTA":
      return Country.MALTA;
    case 176:
    case "BRUNEI":
      return Country.BRUNEI;
    case 177:
    case "GUADELOUPE":
      return Country.GUADELOUPE;
    case 178:
    case "BELIZE":
      return Country.BELIZE;
    case 179:
    case "BAHAMAS":
      return Country.BAHAMAS;
    case 180:
    case "MARTINIQUE":
      return Country.MARTINIQUE;
    case 181:
    case "ICELAND":
      return Country.ICELAND;
    case 182:
    case "VANUATU":
      return Country.VANUATU;
    case 183:
    case "FRENCH_GUIANA":
      return Country.FRENCH_GUIANA;
    case 184:
    case "BARBADOS":
      return Country.BARBADOS;
    case 185:
    case "NEW_CALEDONIA":
      return Country.NEW_CALEDONIA;
    case 186:
    case "FRENCH_POLYNESIA":
      return Country.FRENCH_POLYNESIA;
    case 187:
    case "MAYOTTE":
      return Country.MAYOTTE;
    case 188:
    case "SAO_TOME_PRINCIPE":
      return Country.SAO_TOME_PRINCIPE;
    case 189:
    case "SAMOA":
      return Country.SAMOA;
    case 190:
    case "SAINT_LUCIA":
      return Country.SAINT_LUCIA;
    case 191:
    case "CHANNEL_ISLANDS":
      return Country.CHANNEL_ISLANDS;
    case 192:
    case "GUAM":
      return Country.GUAM;
    case 193:
    case "CURACAO":
      return Country.CURACAO;
    case 194:
    case "KIRIBATI":
      return Country.KIRIBATI;
    case 195:
    case "GRENADA":
      return Country.GRENADA;
    case 196:
    case "ST_VINCENT_GRENADINES":
      return Country.ST_VINCENT_GRENADINES;
    case 197:
    case "ARUBA":
      return Country.ARUBA;
    case 198:
    case "TONGA":
      return Country.TONGA;
    case 199:
    case "US_VIRGIN_ISLANDS":
      return Country.US_VIRGIN_ISLANDS;
    case 200:
    case "SEYCHELLES":
      return Country.SEYCHELLES;
    case 201:
    case "ANTIGUA_AND_BARBUDA":
      return Country.ANTIGUA_AND_BARBUDA;
    case 202:
    case "ISLE_OF_MAN":
      return Country.ISLE_OF_MAN;
    case 203:
    case "ANDORRA":
      return Country.ANDORRA;
    case 204:
    case "DOMINICA":
      return Country.DOMINICA;
    case 205:
    case "CAYMAN_ISLANDS":
      return Country.CAYMAN_ISLANDS;
    case 206:
    case "BERMUDA":
      return Country.BERMUDA;
    case 207:
    case "MARSHALL_ISLANDS":
      return Country.MARSHALL_ISLANDS;
    case 208:
    case "NORTHERN_MARIANA_ISLANDS":
      return Country.NORTHERN_MARIANA_ISLANDS;
    case 209:
    case "GREENLAND":
      return Country.GREENLAND;
    case 210:
    case "AMERICAN_SAMOA":
      return Country.AMERICAN_SAMOA;
    case 211:
    case "SAINT_KITTS_NEVIS":
      return Country.SAINT_KITTS_NEVIS;
    case 212:
    case "FAEROE_ISLANDS":
      return Country.FAEROE_ISLANDS;
    case 213:
    case "SINT_MAARTEN":
      return Country.SINT_MAARTEN;
    case 214:
    case "MONACO":
      return Country.MONACO;
    case 215:
    case "TURKS_AND_CAICOS":
      return Country.TURKS_AND_CAICOS;
    case 216:
    case "SAINT_MARTIN":
      return Country.SAINT_MARTIN;
    case 217:
    case "LIECHTENSTEIN":
      return Country.LIECHTENSTEIN;
    case 218:
    case "SAN_MARINO":
      return Country.SAN_MARINO;
    case 219:
    case "GIBRALTAR":
      return Country.GIBRALTAR;
    case 220:
    case "BRITISH_VIRGIN_ISLANDS":
      return Country.BRITISH_VIRGIN_ISLANDS;
    case 221:
    case "CARIBBEAN_NETHERLANDS":
      return Country.CARIBBEAN_NETHERLANDS;
    case 222:
    case "PALAU":
      return Country.PALAU;
    case 223:
    case "COOK_ISLANDS":
      return Country.COOK_ISLANDS;
    case 224:
    case "ANGUILLA":
      return Country.ANGUILLA;
    case 225:
    case "TUVALU":
      return Country.TUVALU;
    case 226:
    case "WALLIS_FUTUNA":
      return Country.WALLIS_FUTUNA;
    case 227:
    case "NAURU":
      return Country.NAURU;
    case 228:
    case "SAINT_BARTHELEMY":
      return Country.SAINT_BARTHELEMY;
    case 229:
    case "SAINT_HELENA":
      return Country.SAINT_HELENA;
    case 230:
    case "SAINT_PIERRE_MIQUELON":
      return Country.SAINT_PIERRE_MIQUELON;
    case 231:
    case "MONTSERRAT":
      return Country.MONTSERRAT;
    case 232:
    case "FALKLAND_ISLANDS":
      return Country.FALKLAND_ISLANDS;
    case 233:
    case "NIUE":
      return Country.NIUE;
    case 234:
    case "TOKELAU":
      return Country.TOKELAU;
    case 235:
    case "HOLY_SEE":
      return Country.HOLY_SEE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Country.UNRECOGNIZED;
  }
}

export function countryToJSON(object: Country): string {
  switch (object) {
    case Country.NO_COUNTRY:
      return "NO_COUNTRY";
    case Country.UNITED_STATES:
      return "UNITED_STATES";
    case Country.CANADA:
      return "CANADA";
    case Country.MEXICO:
      return "MEXICO";
    case Country.CHINA:
      return "CHINA";
    case Country.INDIA:
      return "INDIA";
    case Country.INDONESIA:
      return "INDONESIA";
    case Country.PAKISTAN:
      return "PAKISTAN";
    case Country.BRAZIL:
      return "BRAZIL";
    case Country.NIGERIA:
      return "NIGERIA";
    case Country.BANGLADESH:
      return "BANGLADESH";
    case Country.RUSSIA:
      return "RUSSIA";
    case Country.JAPAN:
      return "JAPAN";
    case Country.ETHIOPIA:
      return "ETHIOPIA";
    case Country.PHILIPPINES:
      return "PHILIPPINES";
    case Country.EGYPT:
      return "EGYPT";
    case Country.VIETNAM:
      return "VIETNAM";
    case Country.DR_CONGO:
      return "DR_CONGO";
    case Country.TURKEY:
      return "TURKEY";
    case Country.IRAN:
      return "IRAN";
    case Country.GERMANY:
      return "GERMANY";
    case Country.THAILAND:
      return "THAILAND";
    case Country.UNITED_KINGDOM:
      return "UNITED_KINGDOM";
    case Country.FRANCE:
      return "FRANCE";
    case Country.ITALY:
      return "ITALY";
    case Country.TANZANIA:
      return "TANZANIA";
    case Country.SOUTH_AFRICA:
      return "SOUTH_AFRICA";
    case Country.MYANMAR:
      return "MYANMAR";
    case Country.KENYA:
      return "KENYA";
    case Country.SOUTH_KOREA:
      return "SOUTH_KOREA";
    case Country.COLOMBIA:
      return "COLOMBIA";
    case Country.SPAIN:
      return "SPAIN";
    case Country.UGANDA:
      return "UGANDA";
    case Country.ARGENTINA:
      return "ARGENTINA";
    case Country.ALGERIA:
      return "ALGERIA";
    case Country.SUDAN:
      return "SUDAN";
    case Country.UKRAINE:
      return "UKRAINE";
    case Country.IRAQ:
      return "IRAQ";
    case Country.AFGHANISTAN:
      return "AFGHANISTAN";
    case Country.POLAND:
      return "POLAND";
    case Country.MOROCCO:
      return "MOROCCO";
    case Country.SAUDI_ARABIA:
      return "SAUDI_ARABIA";
    case Country.UZBEKISTAN:
      return "UZBEKISTAN";
    case Country.PERU:
      return "PERU";
    case Country.ANGOLA:
      return "ANGOLA";
    case Country.MALAYSIA:
      return "MALAYSIA";
    case Country.MOZAMBIQUE:
      return "MOZAMBIQUE";
    case Country.GHANA:
      return "GHANA";
    case Country.YEMEN:
      return "YEMEN";
    case Country.NEPAL:
      return "NEPAL";
    case Country.VENEZUELA:
      return "VENEZUELA";
    case Country.MADAGASCAR:
      return "MADAGASCAR";
    case Country.CAMEROON:
      return "CAMEROON";
    case Country.COTE_DIVOIRE:
      return "COTE_DIVOIRE";
    case Country.NORTH_KOREA:
      return "NORTH_KOREA";
    case Country.AUSTRALIA:
      return "AUSTRALIA";
    case Country.NIGER:
      return "NIGER";
    case Country.TAIWAN:
      return "TAIWAN";
    case Country.SRI_LANKA:
      return "SRI_LANKA";
    case Country.BURKINA_FASO:
      return "BURKINA_FASO";
    case Country.MALI:
      return "MALI";
    case Country.ROMANIA:
      return "ROMANIA";
    case Country.MALAWI:
      return "MALAWI";
    case Country.CHILE:
      return "CHILE";
    case Country.KAZAKHSTAN:
      return "KAZAKHSTAN";
    case Country.ZAMBIA:
      return "ZAMBIA";
    case Country.GUATEMALA:
      return "GUATEMALA";
    case Country.ECUADOR:
      return "ECUADOR";
    case Country.SYRIA:
      return "SYRIA";
    case Country.NETHERLANDS:
      return "NETHERLANDS";
    case Country.SENEGAL:
      return "SENEGAL";
    case Country.CAMBODIA:
      return "CAMBODIA";
    case Country.CHAD:
      return "CHAD";
    case Country.SOMALIA:
      return "SOMALIA";
    case Country.ZIMBABWE:
      return "ZIMBABWE";
    case Country.GUINEA:
      return "GUINEA";
    case Country.RWANDA:
      return "RWANDA";
    case Country.BENIN:
      return "BENIN";
    case Country.BURUNDI:
      return "BURUNDI";
    case Country.TUNISIA:
      return "TUNISIA";
    case Country.BOLIVIA:
      return "BOLIVIA";
    case Country.BELGIUM:
      return "BELGIUM";
    case Country.HAITI:
      return "HAITI";
    case Country.CUBA:
      return "CUBA";
    case Country.SOUTH_SUDAN:
      return "SOUTH_SUDAN";
    case Country.DOMINICAN_REPUBLIC:
      return "DOMINICAN_REPUBLIC";
    case Country.CZECH_REPUBLIC:
      return "CZECH_REPUBLIC";
    case Country.GREECE:
      return "GREECE";
    case Country.JORDAN:
      return "JORDAN";
    case Country.PORTUGAL:
      return "PORTUGAL";
    case Country.AZERBAIJAN:
      return "AZERBAIJAN";
    case Country.SWEDEN:
      return "SWEDEN";
    case Country.HONDURAS:
      return "HONDURAS";
    case Country.UNITED_ARAB_EMIRATES:
      return "UNITED_ARAB_EMIRATES";
    case Country.HUNGARY:
      return "HUNGARY";
    case Country.TAJIKISTAN:
      return "TAJIKISTAN";
    case Country.BELARUS:
      return "BELARUS";
    case Country.AUSTRIA:
      return "AUSTRIA";
    case Country.PAPUA_NEW_GUINEA:
      return "PAPUA_NEW_GUINEA";
    case Country.SERBIA:
      return "SERBIA";
    case Country.ISRAEL:
      return "ISRAEL";
    case Country.SWITZERLAND:
      return "SWITZERLAND";
    case Country.TOGO:
      return "TOGO";
    case Country.SIERRA_LEONE:
      return "SIERRA_LEONE";
    case Country.HONG_KONG:
      return "HONG_KONG";
    case Country.LAOS:
      return "LAOS";
    case Country.PARAGUAY:
      return "PARAGUAY";
    case Country.BULGARIA:
      return "BULGARIA";
    case Country.LIBYA:
      return "LIBYA";
    case Country.LEBANON:
      return "LEBANON";
    case Country.NICARAGUA:
      return "NICARAGUA";
    case Country.KYRGYZSTAN:
      return "KYRGYZSTAN";
    case Country.EL_SALVADOR:
      return "EL_SALVADOR";
    case Country.TURKMENISTAN:
      return "TURKMENISTAN";
    case Country.SINGAPORE:
      return "SINGAPORE";
    case Country.DENMARK:
      return "DENMARK";
    case Country.FINLAND:
      return "FINLAND";
    case Country.CONGO:
      return "CONGO";
    case Country.SLOVAKIA:
      return "SLOVAKIA";
    case Country.NORWAY:
      return "NORWAY";
    case Country.OMAN:
      return "OMAN";
    case Country.STATE_OF_PALESTINE:
      return "STATE_OF_PALESTINE";
    case Country.COSTA_RICA:
      return "COSTA_RICA";
    case Country.LIBERIA:
      return "LIBERIA";
    case Country.IRELAND:
      return "IRELAND";
    case Country.CENTRAL_AFRICAN_REPUBLIC:
      return "CENTRAL_AFRICAN_REPUBLIC";
    case Country.NEW_ZEALAND:
      return "NEW_ZEALAND";
    case Country.PUERTO_RICO:
      return "PUERTO_RICO";
    case Country.MAURITANIA:
      return "MAURITANIA";
    case Country.PANAMA:
      return "PANAMA";
    case Country.KUWAIT:
      return "KUWAIT";
    case Country.CROATIA:
      return "CROATIA";
    case Country.MOLDOVA:
      return "MOLDOVA";
    case Country.GEORGIA:
      return "GEORGIA";
    case Country.ERITREA:
      return "ERITREA";
    case Country.URUGUAY:
      return "URUGUAY";
    case Country.BOSNIA_AND_HERZEGOVINA:
      return "BOSNIA_AND_HERZEGOVINA";
    case Country.MONGOLIA:
      return "MONGOLIA";
    case Country.ARMENIA:
      return "ARMENIA";
    case Country.JAMAICA:
      return "JAMAICA";
    case Country.QATAR:
      return "QATAR";
    case Country.ALBANIA:
      return "ALBANIA";
    case Country.LITHUANIA:
      return "LITHUANIA";
    case Country.NAMIBIA:
      return "NAMIBIA";
    case Country.GAMBIA:
      return "GAMBIA";
    case Country.BOTSWANA:
      return "BOTSWANA";
    case Country.GABON:
      return "GABON";
    case Country.LESOTHO:
      return "LESOTHO";
    case Country.NORTH_MACEDONIA:
      return "NORTH_MACEDONIA";
    case Country.SLOVENIA:
      return "SLOVENIA";
    case Country.GUINEA_BISSAU:
      return "GUINEA_BISSAU";
    case Country.LATVIA:
      return "LATVIA";
    case Country.BAHRAIN:
      return "BAHRAIN";
    case Country.EQUATORIAL_GUINEA:
      return "EQUATORIAL_GUINEA";
    case Country.TRINIDAD_AND_TOBAGO:
      return "TRINIDAD_AND_TOBAGO";
    case Country.ESTONIA:
      return "ESTONIA";
    case Country.TIMOR_LESTE:
      return "TIMOR_LESTE";
    case Country.MAURITIUS:
      return "MAURITIUS";
    case Country.CYPRUS:
      return "CYPRUS";
    case Country.ESWATINI:
      return "ESWATINI";
    case Country.DJIBOUTI:
      return "DJIBOUTI";
    case Country.FIJI:
      return "FIJI";
    case Country.REUNION:
      return "REUNION";
    case Country.COMOROS:
      return "COMOROS";
    case Country.GUYANA:
      return "GUYANA";
    case Country.BHUTAN:
      return "BHUTAN";
    case Country.SOLOMON_ISLANDS:
      return "SOLOMON_ISLANDS";
    case Country.MACAO:
      return "MACAO";
    case Country.MONTENEGRO:
      return "MONTENEGRO";
    case Country.LUXEMBOURG:
      return "LUXEMBOURG";
    case Country.WESTERN_SAHARA:
      return "WESTERN_SAHARA";
    case Country.SURINAME:
      return "SURINAME";
    case Country.CABO_VERDE:
      return "CABO_VERDE";
    case Country.MICRONESIA:
      return "MICRONESIA";
    case Country.MALDIVES:
      return "MALDIVES";
    case Country.MALTA:
      return "MALTA";
    case Country.BRUNEI:
      return "BRUNEI";
    case Country.GUADELOUPE:
      return "GUADELOUPE";
    case Country.BELIZE:
      return "BELIZE";
    case Country.BAHAMAS:
      return "BAHAMAS";
    case Country.MARTINIQUE:
      return "MARTINIQUE";
    case Country.ICELAND:
      return "ICELAND";
    case Country.VANUATU:
      return "VANUATU";
    case Country.FRENCH_GUIANA:
      return "FRENCH_GUIANA";
    case Country.BARBADOS:
      return "BARBADOS";
    case Country.NEW_CALEDONIA:
      return "NEW_CALEDONIA";
    case Country.FRENCH_POLYNESIA:
      return "FRENCH_POLYNESIA";
    case Country.MAYOTTE:
      return "MAYOTTE";
    case Country.SAO_TOME_PRINCIPE:
      return "SAO_TOME_PRINCIPE";
    case Country.SAMOA:
      return "SAMOA";
    case Country.SAINT_LUCIA:
      return "SAINT_LUCIA";
    case Country.CHANNEL_ISLANDS:
      return "CHANNEL_ISLANDS";
    case Country.GUAM:
      return "GUAM";
    case Country.CURACAO:
      return "CURACAO";
    case Country.KIRIBATI:
      return "KIRIBATI";
    case Country.GRENADA:
      return "GRENADA";
    case Country.ST_VINCENT_GRENADINES:
      return "ST_VINCENT_GRENADINES";
    case Country.ARUBA:
      return "ARUBA";
    case Country.TONGA:
      return "TONGA";
    case Country.US_VIRGIN_ISLANDS:
      return "US_VIRGIN_ISLANDS";
    case Country.SEYCHELLES:
      return "SEYCHELLES";
    case Country.ANTIGUA_AND_BARBUDA:
      return "ANTIGUA_AND_BARBUDA";
    case Country.ISLE_OF_MAN:
      return "ISLE_OF_MAN";
    case Country.ANDORRA:
      return "ANDORRA";
    case Country.DOMINICA:
      return "DOMINICA";
    case Country.CAYMAN_ISLANDS:
      return "CAYMAN_ISLANDS";
    case Country.BERMUDA:
      return "BERMUDA";
    case Country.MARSHALL_ISLANDS:
      return "MARSHALL_ISLANDS";
    case Country.NORTHERN_MARIANA_ISLANDS:
      return "NORTHERN_MARIANA_ISLANDS";
    case Country.GREENLAND:
      return "GREENLAND";
    case Country.AMERICAN_SAMOA:
      return "AMERICAN_SAMOA";
    case Country.SAINT_KITTS_NEVIS:
      return "SAINT_KITTS_NEVIS";
    case Country.FAEROE_ISLANDS:
      return "FAEROE_ISLANDS";
    case Country.SINT_MAARTEN:
      return "SINT_MAARTEN";
    case Country.MONACO:
      return "MONACO";
    case Country.TURKS_AND_CAICOS:
      return "TURKS_AND_CAICOS";
    case Country.SAINT_MARTIN:
      return "SAINT_MARTIN";
    case Country.LIECHTENSTEIN:
      return "LIECHTENSTEIN";
    case Country.SAN_MARINO:
      return "SAN_MARINO";
    case Country.GIBRALTAR:
      return "GIBRALTAR";
    case Country.BRITISH_VIRGIN_ISLANDS:
      return "BRITISH_VIRGIN_ISLANDS";
    case Country.CARIBBEAN_NETHERLANDS:
      return "CARIBBEAN_NETHERLANDS";
    case Country.PALAU:
      return "PALAU";
    case Country.COOK_ISLANDS:
      return "COOK_ISLANDS";
    case Country.ANGUILLA:
      return "ANGUILLA";
    case Country.TUVALU:
      return "TUVALU";
    case Country.WALLIS_FUTUNA:
      return "WALLIS_FUTUNA";
    case Country.NAURU:
      return "NAURU";
    case Country.SAINT_BARTHELEMY:
      return "SAINT_BARTHELEMY";
    case Country.SAINT_HELENA:
      return "SAINT_HELENA";
    case Country.SAINT_PIERRE_MIQUELON:
      return "SAINT_PIERRE_MIQUELON";
    case Country.MONTSERRAT:
      return "MONTSERRAT";
    case Country.FALKLAND_ISLANDS:
      return "FALKLAND_ISLANDS";
    case Country.NIUE:
      return "NIUE";
    case Country.TOKELAU:
      return "TOKELAU";
    case Country.HOLY_SEE:
      return "HOLY_SEE";
    default:
      return "UNKNOWN";
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
