module.exports =
{
    getCountryData
}

const countries = [
    {
        id: 1,
        CountryName: "Afghanistan",
        CountryCode: 93,
        IsoCode: "AF/AFG",
        Population: "29,121,286",
        AreaKmSq: "647,500",
        GDPUSD: "20650000000"
    },
    {
        id: 2,
        CountryName: "Albania",
        CountryCode: 355,
        IsoCode: "AL/ALB",
        Population: "2,986,952",
        AreaKmSq: "28,748",
        GDPUSD: "12800000000"
    },
    {
        id: 3,
        CountryName: "Algeria",
        CountryCode: 213,
        IsoCode: "DZ/DZA",
        Population: "34,586,184",
        AreaKmSq: "2,381,740",
        GDPUSD: "215700000000"
    },
    {
        id: 5,
        CountryName: "American Samoa",
        CountryCode: "1-684",
        IsoCode: "AS/ASM",
        Population: "57,881",
        AreaKmSq: "199",
        GDPUSD: "462200000"
    },
    {
        id: 6,
        CountryName: "Andorra",
        CountryCode: 376,
        IsoCode: "AD/AND",
        Population: "84,000",
        AreaKmSq: "468",
        GDPUSD: "4800000000"
    },
    {
        id: 7,
        CountryName: "Angola",
        CountryCode: 244,
        IsoCode: "AO/AGO",
        Population: "13,068,161",
        AreaKmSq: "1,246,700",
        GDPUSD: "124000000000"
    },
    {
        id: 8,
        CountryName: "Anguilla",
        CountryCode: "1-264",
        IsoCode: "AI/AIA",
        Population: "13,254",
        AreaKmSq: "102",
        GDPUSD: "175400000"
    },
    {
        id: 9,
        CountryName: "Antarctica",
        CountryCode: 672,
        IsoCode: "AQ/ATA",
        Population: "0",
        AreaKmSq: "14,000,000",
        GDPUSD: ""
    },
    {
        id: 10,
        CountryName: "Antigua and Barbuda",
        CountryCode: "1-268",
        IsoCode: "AG/ATG",
        Population: "86,754",
        AreaKmSq: "443",
        GDPUSD: "1220000000"
    },
    {
        id: 11,
        CountryName: "Argentina",
        CountryCode: 54,
        IsoCode: "AR/ARG",
        Population: "41,343,201",
        AreaKmSq: "2,766,890",
        GDPUSD: "484600000000"
    },
    {
        id: 12,
        CountryName: "Armenia",
        CountryCode: 374,
        IsoCode: "AM/ARM",
        Population: "2,968,000",
        AreaKmSq: "29,800",
        GDPUSD: "10440000000"
    },
    {
        id: 13,
        CountryName: "Aruba",
        CountryCode: 297,
        IsoCode: "AW/ABW",
        Population: "71,566",
        AreaKmSq: "193",
        GDPUSD: "2516000000"
    },
    {
        id: 14,
        CountryName: "Australia",
        CountryCode: 61,
        IsoCode: "AU/AUS",
        Population: "21,515,754",
        AreaKmSq: "7,686,850",
        GDPUSD: "1488000000000"
    },
    {
        id: 15,
        CountryName: "Austria",
        CountryCode: 43,
        IsoCode: "AT/AUT",
        Population: "8,205,000",
        AreaKmSq: "83,858",
        GDPUSD: "417900000000"
    },
    {
        id: 16,
        CountryName: "Azerbaijan",
        CountryCode: 994,
        IsoCode: "AZ/AZE",
        Population: "8,303,512",
        AreaKmSq: "86,600",
        GDPUSD: "76010000000"
    },
    {
        id: 17,
        CountryName: "Bahamas",
        CountryCode: "1-242",
        IsoCode: "BS/BHS",
        Population: "301,790",
        AreaKmSq: "13,940",
        GDPUSD: "8373000000"
    },
    {
        id: 18,
        CountryName: "Bahrain",
        CountryCode: 973,
        IsoCode: "BH/BHR",
        Population: "738,004",
        AreaKmSq: "665",
        GDPUSD: "28360000000"
    },
    {
        id: 19,
        CountryName: "Bangladesh",
        CountryCode: 880,
        IsoCode: "BD/BGD",
        Population: "156,118,464",
        AreaKmSq: "144,000",
        GDPUSD: "140200000000"
    },
    {
        id: 20,
        CountryName: "Barbados",
        CountryCode: "1-246",
        IsoCode: "BB/BRB",
        Population: "285,653",
        AreaKmSq: "431",
        GDPUSD: "4262000000"
    },
    {
        id: 21,
        CountryName: "Belarus",
        CountryCode: 375,
        IsoCode: "BY/BLR",
        Population: "9,685,000",
        AreaKmSq: "207,600",
        GDPUSD: "69240000000"
    },
    {
        id: 22,
        CountryName: "Belgium",
        CountryCode: 32,
        IsoCode: "BE/BEL",
        Population: "10,403,000",
        AreaKmSq: "30,510",
        GDPUSD: "507400000000"
    },
    {
        id: 23,
        CountryName: "Belize",
        CountryCode: 501,
        IsoCode: "BZ/BLZ",
        Population: "314,522",
        AreaKmSq: "22,966",
        GDPUSD: "1637000000"
    },
    {
        id: 24,
        CountryName: "Benin",
        CountryCode: 229,
        IsoCode: "BJ/BEN",
        Population: "9,056,010",
        AreaKmSq: "112,620",
        GDPUSD: "8359000000"
    },
    {
        id: 25,
        CountryName: "Bermuda",
        CountryCode: "1-441",
        IsoCode: "BM/BMU",
        Population: "65,365",
        AreaKmSq: "53",
        GDPUSD: "5600000000"
    },
    {
        id: 26,
        CountryName: "Bhutan",
        CountryCode: 975,
        IsoCode: "BT/BTN",
        Population: "699,847",
        AreaKmSq: "47,000",
        GDPUSD: "2133000000"
    },
    {
        id: 27,
        CountryName: "Bolivia",
        CountryCode: 591,
        IsoCode: "BO/BOL",
        Population: "9,947,418",
        AreaKmSq: "1,098,580",
        GDPUSD: "30790000000"
    },
    {
        id: 28,
        CountryName: "Bosnia and Herzegovina",
        CountryCode: 387,
        IsoCode: "BA/BIH",
        Population: "4,590,000",
        AreaKmSq: "51,129",
        GDPUSD: "18870000000"
    },
    {
        id: 29,
        CountryName: "Botswana",
        CountryCode: 267,
        IsoCode: "BW/BWA",
        Population: "2,029,307",
        AreaKmSq: "600,370",
        GDPUSD: "15530000000"
    },
    {
        id: 30,
        CountryName: "Brazil",
        CountryCode: 55,
        IsoCode: "BR/BRA",
        Population: "201,103,330",
        AreaKmSq: "8,511,965",
        GDPUSD: "2190000000000"
    },
    {
        id: 31,
        CountryName: "British Indian Ocean Territory",
        CountryCode: 246,
        IsoCode: "IO/IOT",
        Population: "4,000",
        AreaKmSq: "60",
        GDPUSD: ""
    },
    {
        id: 32,
        CountryName: "British Virgin Islands",
        CountryCode: "1-284",
        IsoCode: "VG/VGB",
        Population: "21,730",
        AreaKmSq: "153",
        GDPUSD: "1095000000"
    },
    {
        id: 33,
        CountryName: "Brunei",
        CountryCode: 673,
        IsoCode: "BN/BRN",
        Population: "395,027",
        AreaKmSq: "5,770",
        GDPUSD: "16560000000"
    },
    {
        id: 34,
        CountryName: "Bulgaria",
        CountryCode: 359,
        IsoCode: "BG/BGR",
        Population: "7,148,785",
        AreaKmSq: "110,910",
        GDPUSD: "53700000000"
    },
    {
        id: 35,
        CountryName: "Burkina Faso",
        CountryCode: 226,
        IsoCode: "BF/BFA",
        Population: "16,241,811",
        AreaKmSq: "274,200",
        GDPUSD: "12130000000"
    },
    {
        id: 36,
        CountryName: "Burundi",
        CountryCode: 257,
        IsoCode: "BI/BDI",
        Population: "9,863,117",
        AreaKmSq: "27,830",
        GDPUSD: "2676000000"
    },
    {
        id: 37,
        CountryName: "Cambodia",
        CountryCode: 855,
        IsoCode: "KH/KHM",
        Population: "14,453,680",
        AreaKmSq: "181,040",
        GDPUSD: "15640000000"
    },
    {
        id: 38,
        CountryName: "Cameroon",
        CountryCode: 237,
        IsoCode: "CM/CMR",
        Population: "19,294,149",
        AreaKmSq: "475,440",
        GDPUSD: "27880000000"
    },
    {
        id: 39,
        CountryName: "Canada",
        CountryCode: 1,
        IsoCode: "CA/CAN",
        Population: "33,679,000",
        AreaKmSq: "9,984,670",
        GDPUSD: "1825000000000"
    },
    {
        id: 40,
        CountryName: "Cape Verde",
        CountryCode: 238,
        IsoCode: "CV/CPV",
        Population: "508,659",
        AreaKmSq: "4,033",
        GDPUSD: "1955000000"
    },
    {
        id: 41,
        CountryName: "Cayman Islands",
        CountryCode: "1-345",
        IsoCode: "KY/CYM",
        Population: "44,270",
        AreaKmSq: "262",
        GDPUSD: "2250000000"
    },
    {
        id: 42,
        CountryName: "Central African Republic",
        CountryCode: 236,
        IsoCode: "CF/CAF",
        Population: "4,844,927",
        AreaKmSq: "622,984",
        GDPUSD: "2050000000"
    },
    {
        id: 43,
        CountryName: "Chad",
        CountryCode: 235,
        IsoCode: "TD/TCD",
        Population: "10,543,464",
        AreaKmSq: "1,284,000",
        GDPUSD: "13590000000"
    },
    {
        id: 44,
        CountryName: "Chile",
        CountryCode: 56,
        IsoCode: "CL/CHL",
        Population: "16,746,491",
        AreaKmSq: "756,950",
        GDPUSD: "281700000000"
    },
    {
        id: 45,
        CountryName: "China",
        CountryCode: 86,
        IsoCode: "CN/CHN",
        Population: "1,411,778,724",
        AreaKmSq: "9,596,960",
        GDPUSD: "9330000000000"
    },
    {
        id: 46,
        CountryName: "Christmas Island",
        CountryCode: 61,
        IsoCode: "CX/CXR",
        Population: "1,500",
        AreaKmSq: "135",
        GDPUSD: ""
    },
    {
        id: 47,
        CountryName: "Cocos Islands",
        CountryCode: 61,
        IsoCode: "CC/CCK",
        Population: "628",
        AreaKmSq: "14",
        GDPUSD: ""
    },
    {
        id: 48,
        CountryName: "Colombia",
        CountryCode: 57,
        IsoCode: "CO/COL",
        Population: "47,790,000",
        AreaKmSq: "1,138,910",
        GDPUSD: "369200000000"
    },
    {
        id: 49,
        CountryName: "Comoros",
        CountryCode: 269,
        IsoCode: "KM/COM",
        Population: "773,407",
        AreaKmSq: "2,170",
        GDPUSD: "658000000"
    },
    {
        id: 50,
        CountryName: "Cook Islands",
        CountryCode: 682,
        IsoCode: "CK/COK",
        Population: "21,388",
        AreaKmSq: "240",
        GDPUSD: "183200000"
    },
    {
        id: 51,
        CountryName: "Costa Rica",
        CountryCode: 506,
        IsoCode: "CR/CRI",
        Population: "4,516,220",
        AreaKmSq: "51,100",
        GDPUSD: "48510000000"
    },
    {
        id: 52,
        CountryName: "Croatia",
        CountryCode: 385,
        IsoCode: "HR/HRV",
        Population: "4,491,000",
        AreaKmSq: "56,542",
        GDPUSD: "59140000000"
    },
    {
        id: 53,
        CountryName: "Cuba",
        CountryCode: 53,
        IsoCode: "CU/CUB",
        Population: "11,423,000",
        AreaKmSq: "110,860",
        GDPUSD: "72300000000"
    },
    {
        id: 54,
        CountryName: "Curacao",
        CountryCode: 599,
        IsoCode: "CW/CUW",
        Population: "141,766",
        AreaKmSq: "444",
        GDPUSD: "5600000000"
    },
    {
        id: 55,
        CountryName: "Cyprus",
        CountryCode: 357,
        IsoCode: "CY/CYP",
        Population: "1,102,677",
        AreaKmSq: "9,250",
        GDPUSD: "21780000000"
    },
    {
        id: 56,
        CountryName: "Czech Republic",
        CountryCode: 420,
        IsoCode: "CZ/CZE",
        Population: "10,476,000",
        AreaKmSq: "78,866",
        GDPUSD: "194800000000"
    },
    {
        id: 57,
        CountryName: "Democratic Republic of the Congo",
        CountryCode: 243,
        IsoCode: "CD/COD",
        Population: "70,916,439",
        AreaKmSq: "2,345,410",
        GDPUSD: "18560000000"
    },
    {
        id: 58,
        CountryName: "Denmark",
        CountryCode: 45,
        IsoCode: "DK/DNK",
        Population: "5,484,000",
        AreaKmSq: "43,094",
        GDPUSD: "324300000000"
    },
    {
        id: 59,
        CountryName: "Djibouti",
        CountryCode: 253,
        IsoCode: "DJ/DJI",
        Population: "740,528",
        AreaKmSq: "23,000",
        GDPUSD: "1459000000"
    },
    {
        id: 60,
        CountryName: "Dominica",
        CountryCode: "1-767",
        IsoCode: "DM/DMA",
        Population: "72,813",
        AreaKmSq: "754",
        GDPUSD: "495000000"
    },
    {
        id: 61,
        CountryName: "Dominican Republic",
        CountryCode: "1-809",
        IsoCode: "DO/DOM",
        Population: "9,823,821",
        AreaKmSq: "48,730",
        GDPUSD: "59270000000"
    },
    {
        id: 62,
        CountryName: "East Timor",
        CountryCode: 670,
        IsoCode: "TL/TLS",
        Population: "1,154,625",
        AreaKmSq: "15,007",
        GDPUSD: "6129000000"
    },
    {
        id: 63,
        CountryName: "Ecuador",
        CountryCode: 593,
        IsoCode: "EC/ECU",
        Population: "14,790,608",
        AreaKmSq: "283,560",
        GDPUSD: "91410000000"
    },
    {
        id: 64,
        CountryName: "Egypt",
        CountryCode: 20,
        IsoCode: "EG/EGY",
        Population: "80,471,869",
        AreaKmSq: "1,001,450",
        GDPUSD: "262000000000"
    },
    {
        id: 65,
        CountryName: "El Salvador",
        CountryCode: 503,
        IsoCode: "SV/SLV",
        Population: "6,052,064",
        AreaKmSq: "21,040",
        GDPUSD: "24670000000"
    },
    {
        id: 66,
        CountryName: "Equatorial Guinea",
        CountryCode: 240,
        IsoCode: "GQ/GNQ",
        Population: "1,014,999",
        AreaKmSq: "28,051",
        GDPUSD: "17080000000"
    },
    {
        id: 67,
        CountryName: "Eritrea",
        CountryCode: 291,
        IsoCode: "ER/ERI",
        Population: "5,792,984",
        AreaKmSq: "121,320",
        GDPUSD: "3438000000"
    },
    {
        id: 68,
        CountryName: "Estonia",
        CountryCode: 372,
        IsoCode: "EE/EST",
        Population: "1,291,170",
        AreaKmSq: "45,226",
        GDPUSD: "24280000000"
    },
    {
        id: 69,
        CountryName: "Ethiopia",
        CountryCode: 251,
        IsoCode: "ET/ETH",
        Population: "88,013,491",
        AreaKmSq: "1,127,127",
        GDPUSD: "47340000000"
    },
    {
        id: 70,
        CountryName: "Falkland Islands",
        CountryCode: 500,
        IsoCode: "FK/FLK",
        Population: "2,638",
        AreaKmSq: "12,173",
        GDPUSD: "164500000"
    },
    {
        id: 71,
        CountryName: "Faroe Islands",
        CountryCode: 298,
        IsoCode: "FO/FRO",
        Population: "48,228",
        AreaKmSq: "1,399",
        GDPUSD: "2320000000"
    },
    {
        id: 72,
        CountryName: "Fiji",
        CountryCode: 679,
        IsoCode: "FJ/FJI",
        Population: "875,983",
        AreaKmSq: "18,270",
        GDPUSD: "4218000000"
    },
    {
        id: 73,
        CountryName: "Finland",
        CountryCode: 358,
        IsoCode: "FI/FIN",
        Population: "5,244,000",
        AreaKmSq: "337,030",
        GDPUSD: "259600000000"
    },
    {
        id: 74,
        CountryName: "France",
        CountryCode: 33,
        IsoCode: "FR/FRA",
        Population: "64,768,389",
        AreaKmSq: "547,030",
        GDPUSD: "2739000000000"
    },
    {
        id: 75,
        CountryName: "French Polynesia",
        CountryCode: 689,
        IsoCode: "PF/PYF",
        Population: "270,485",
        AreaKmSq: "4,167",
        GDPUSD: "5650000000"
    },
    {
        id: 76,
        CountryName: "Gabon",
        CountryCode: 241,
        IsoCode: "GA/GAB",
        Population: "1,545,255",
        AreaKmSq: "267,667",
        GDPUSD: "19970000000"
    },
    {
        id: 77,
        CountryName: "Gambia",
        CountryCode: 220,
        IsoCode: "GM/GMB",
        Population: "1,593,256",
        AreaKmSq: "11,300",
        GDPUSD: "896000000"
    },
    {
        id: 78,
        CountryName: "Georgia",
        CountryCode: 995,
        IsoCode: "GE/GEO",
        Population: "4,630,000",
        AreaKmSq: "69,700",
        GDPUSD: "15950000000"
    },
    {
        id: 79,
        CountryName: "Germany",
        CountryCode: 49,
        IsoCode: "DE/DEU",
        Population: "81,802,257",
        AreaKmSq: "357,021",
        GDPUSD: "3593000000000"
    },
    {
        id: 80,
        CountryName: "Ghana",
        CountryCode: 233,
        IsoCode: "GH/GHA",
        Population: "24,339,838",
        AreaKmSq: "239,460",
        GDPUSD: "45550000000"
    },
    {
        id: 81,
        CountryName: "Gibraltar",
        CountryCode: 350,
        IsoCode: "GI/GIB",
        Population: "27,884",
        AreaKmSq: "7",
        GDPUSD: "1106000000"
    },
    {
        id: 82,
        CountryName: "Greece",
        CountryCode: 30,
        IsoCode: "GR/GRC",
        Population: "11,000,000",
        AreaKmSq: "131,940",
        GDPUSD: "243300000000"
    },
    {
        id: 83,
        CountryName: "Greenland",
        CountryCode: 299,
        IsoCode: "GL/GRL",
        Population: "56,375",
        AreaKmSq: "2,166,086",
        GDPUSD: "2160000000"
    },
    {
        id: 84,
        CountryName: "Grenada",
        CountryCode: "1-473",
        IsoCode: "GD/GRD",
        Population: "107,818",
        AreaKmSq: "344",
        GDPUSD: "811000000"
    },
    {
        id: 85,
        CountryName: "Guam",
        CountryCode: "1-671",
        IsoCode: "GU/GUM",
        Population: "159,358",
        AreaKmSq: "549",
        GDPUSD: "4600000000"
    },
    {
        id: 86,
        CountryName: "Guatemala",
        CountryCode: 502,
        IsoCode: "GT/GTM",
        Population: "13,550,440",
        AreaKmSq: "108,890",
        GDPUSD: "53900000000"
    },
    {
        id: 87,
        CountryName: "Guernsey",
        CountryCode: "44-1481",
        IsoCode: "GG/GGY",
        Population: "65,228",
        AreaKmSq: "78",
        GDPUSD: "2742000000"
    },
    {
        id: 88,
        CountryName: "Guinea",
        CountryCode: 224,
        IsoCode: "GN/GIN",
        Population: "10,324,025",
        AreaKmSq: "245,857",
        GDPUSD: "6544000000"
    },
    {
        id: 89,
        CountryName: "Guinea-Bissau",
        CountryCode: 245,
        IsoCode: "GW/GNB",
        Population: "1,565,126",
        AreaKmSq: "36,120",
        GDPUSD: "880000000"
    },
    {
        id: 90,
        CountryName: "Guyana",
        CountryCode: 592,
        IsoCode: "GY/GUY",
        Population: "748,486",
        AreaKmSq: "214,970",
        GDPUSD: "3020000000"
    },
    {
        id: 91,
        CountryName: "Haiti",
        CountryCode: 509,
        IsoCode: "HT/HTI",
        Population: "9,648,924",
        AreaKmSq: "27,750",
        GDPUSD: "8287000000"
    },
    {
        id: 92,
        CountryName: "Honduras",
        CountryCode: 504,
        IsoCode: "HN/HND",
        Population: "7,989,415",
        AreaKmSq: "112,090",
        GDPUSD: "18880000000"
    },
    {
        id: 93,
        CountryName: "Hong Kong",
        CountryCode: 852,
        IsoCode: "HK/HKG",
        Population: "6,898,686",
        AreaKmSq: "1,092",
        GDPUSD: "272100000000"
    },
    {
        id: 94,
        CountryName: "Hungary",
        CountryCode: 36,
        IsoCode: "HU/HUN",
        Population: "9,982,000",
        AreaKmSq: "93,030",
        GDPUSD: "130600000000"
    },
    {
        id: 95,
        CountryName: "Iceland",
        CountryCode: 354,
        IsoCode: "IS/ISL",
        Population: "308,910",
        AreaKmSq: "103,000",
        GDPUSD: "14590000000"
    },
    {
        id: 96,
        CountryName: "India",
        CountryCode: 91,
        IsoCode: "IN/IND",
        Population: "1,173,108,018",
        AreaKmSq: "3,287,590",
        GDPUSD: "1670000000000"
    },
    {
        id: 97,
        CountryName: "Indonesia",
        CountryCode: 62,
        IsoCode: "ID/IDN",
        Population: "242,968,342",
        AreaKmSq: "1,919,440",
        GDPUSD: "867500000000"
    },
    {
        id: 98,
        CountryName: "Iran",
        CountryCode: 98,
        IsoCode: "IR/IRN",
        Population: "76,923,300",
        AreaKmSq: "1,648,000",
        GDPUSD: "411900000000"
    },
    {
        id: 99,
        CountryName: "Iraq",
        CountryCode: 964,
        IsoCode: "IQ/IRQ",
        Population: "29,671,605",
        AreaKmSq: "437,072",
        GDPUSD: "221800000000"
    },
    {
        id: 100,
        CountryName: "Ireland",
        CountryCode: 353,
        IsoCode: "IE/IRL",
        Population: "4,622,917",
        AreaKmSq: "70,280",
        GDPUSD: "220900000000"
    },
    {
        id: 101,
        CountryName: "Isle of Man",
        CountryCode: "44-1624",
        IsoCode: "IM/IMN",
        Population: "75,049",
        AreaKmSq: "572",
        GDPUSD: "4076000000"
    },
    {
        id: 102,
        CountryName: "Israel",
        CountryCode: 972,
        IsoCode: "IL/ISR",
        Population: "7,353,985",
        AreaKmSq: "20,770",
        GDPUSD: "272700000000"
    },
    {
        id: 103,
        CountryName: "Italy",
        CountryCode: 39,
        IsoCode: "IT/ITA",
        Population: "60,340,328",
        AreaKmSq: "301,230",
        GDPUSD: "2068000000000"
    },
    {
        id: 104,
        CountryName: "Ivory Coast",
        CountryCode: 225,
        IsoCode: "CI/CIV",
        Population: "21,058,798",
        AreaKmSq: "322,460",
        GDPUSD: "28280000000"
    },
    {
        id: 105,
        CountryName: "Jamaica",
        CountryCode: "1-876",
        IsoCode: "JM/JAM",
        Population: "2,847,232",
        AreaKmSq: "10,991",
        GDPUSD: "14390000000"
    },
    {
        id: 106,
        CountryName: "Japan",
        CountryCode: 81,
        IsoCode: "JP/JPN",
        Population: "127,288,000",
        AreaKmSq: "377,835",
        GDPUSD: "5007000000000"
    },
    {
        id: 107,
        CountryName: "Jersey",
        CountryCode: "44-1534",
        IsoCode: "JE/JEY",
        Population: "90,812",
        AreaKmSq: "116",
        GDPUSD: "5100000000"
    },
    {
        id: 108,
        CountryName: "Jordan",
        CountryCode: 962,
        IsoCode: "JO/JOR",
        Population: "6,407,085",
        AreaKmSq: "92,300",
        GDPUSD: "34080000000"
    },
    {
        id: 109,
        CountryName: "Kazakhstan",
        CountryCode: 7,
        IsoCode: "KZ/KAZ",
        Population: "15,340,000",
        AreaKmSq: "2,717,300",
        GDPUSD: "224900000000"
    },
    {
        id: 110,
        CountryName: "Kenya",
        CountryCode: 254,
        IsoCode: "KE/KEN",
        Population: "40,046,566",
        AreaKmSq: "582,650",
        GDPUSD: "45310000000"
    },
    {
        id: 111,
        CountryName: "Kiribati",
        CountryCode: 686,
        IsoCode: "KI/KIR",
        Population: "92,533",
        AreaKmSq: "811",
        GDPUSD: "173000000"
    },
    {
        id: 112,
        CountryName: "Kosovo",
        CountryCode: 383,
        IsoCode: "XK/XKX",
        Population: "1,800,000",
        AreaKmSq: "10,887",
        GDPUSD: "7150000000"
    },
    {
        id: 113,
        CountryName: "Kuwait",
        CountryCode: 965,
        IsoCode: "KW/KWT",
        Population: "2,789,132",
        AreaKmSq: "17,820",
        GDPUSD: "179500000000"
    },
    {
        id: 114,
        CountryName: "Kyrgyzstan",
        CountryCode: 996,
        IsoCode: "KG/KGZ",
        Population: "5,508,626",
        AreaKmSq: "198,500",
        GDPUSD: "7234000000"
    },
    {
        id: 115,
        CountryName: "Laos",
        CountryCode: 856,
        IsoCode: "LA/LAO",
        Population: "6,368,162",
        AreaKmSq: "236,800",
        GDPUSD: "10100000000"
    },
    {
        id: 116,
        CountryName: "Latvia",
        CountryCode: 371,
        IsoCode: "LV/LVA",
        Population: "2,217,969",
        AreaKmSq: "64,589",
        GDPUSD: "30380000000"
    },
    {
        id: 117,
        CountryName: "Lebanon",
        CountryCode: 961,
        IsoCode: "LB/LBN",
        Population: "4,125,247",
        AreaKmSq: "10,400",
        GDPUSD: "43490000000"
    },
    {
        id: 118,
        CountryName: "Lesotho",
        CountryCode: 266,
        IsoCode: "LS/LSO",
        Population: "1,919,552",
        AreaKmSq: "30,355",
        GDPUSD: "2457000000"
    },
    {
        id: 119,
        CountryName: "Liberia",
        CountryCode: 231,
        IsoCode: "LR/LBR",
        Population: "3,685,076",
        AreaKmSq: "111,370",
        GDPUSD: "1977000000"
    },
    {
        id: 120,
        CountryName: "Libya",
        CountryCode: 218,
        IsoCode: "LY/LBY",
        Population: "6,461,454",
        AreaKmSq: "1,759,540",
        GDPUSD: "70920000000"
    },
    {
        id: 121,
        CountryName: "Liechtenstein",
        CountryCode: 423,
        IsoCode: "LI/LIE",
        Population: "35,000",
        AreaKmSq: "160",
        GDPUSD: "5113000000"
    },
    {
        id: 122,
        CountryName: "Lithuania",
        CountryCode: 370,
        IsoCode: "LT/LTU",
        Population: "2,944,459",
        AreaKmSq: "65,200",
        GDPUSD: "46710000000"
    },
    {
        id: 123,
        CountryName: "Luxembourg",
        CountryCode: 352,
        IsoCode: "LU/LUX",
        Population: "497,538",
        AreaKmSq: "2,586",
        GDPUSD: "60540000000"
    },
    {
        id: 124,
        CountryName: "Macau",
        CountryCode: 853,
        IsoCode: "MO/MAC",
        Population: "449,198",
        AreaKmSq: "254",
        GDPUSD: "51680000000"
    },
    {
        id: 125,
        CountryName: "Macedonia",
        CountryCode: 389,
        IsoCode: "MK/MKD",
        Population: "2,062,294",
        AreaKmSq: "25,333",
        GDPUSD: "10650000000"
    },
    {
        id: 126,
        CountryName: "Madagascar",
        CountryCode: 261,
        IsoCode: "MG/MDG",
        Population: "21,281,844",
        AreaKmSq: "587,040",
        GDPUSD: "10530000000"
    },
    {
        id: 127,
        CountryName: "Malawi",
        CountryCode: 265,
        IsoCode: "MW/MWI",
        Population: "15,447,500",
        AreaKmSq: "118,480",
        GDPUSD: "3683000000"
    },
    {
        id: 128,
        CountryName: "Malaysia",
        CountryCode: 60,
        IsoCode: "MY/MYS",
        Population: "28,274,729",
        AreaKmSq: "329,750",
        GDPUSD: "312400000000"
    },
    {
        id: 129,
        CountryName: "Maldives",
        CountryCode: 960,
        IsoCode: "MV/MDV",
        Population: "395,650",
        AreaKmSq: "300",
        GDPUSD: "2270000000"
    },
    {
        id: 130,
        CountryName: "Mali",
        CountryCode: 223,
        IsoCode: "ML/MLI",
        Population: "13,796,354",
        AreaKmSq: "1,240,000",
        GDPUSD: "11370000000"
    },
    {
        id: 131,
        CountryName: "Malta",
        CountryCode: 356,
        IsoCode: "MT/MLT",
        Population: "403,000",
        AreaKmSq: "316",
        GDPUSD: "9541000000"
    },
    {
        id: 132,
        CountryName: "Marshall Islands",
        CountryCode: 692,
        IsoCode: "MH/MHL",
        Population: "65,859",
        AreaKmSq: "181",
        GDPUSD: "193000000"
    },
    {
        id: 133,
        CountryName: "Mauritania",
        CountryCode: 222,
        IsoCode: "MR/MRT",
        Population: "3,205,060",
        AreaKmSq: "1,030,700",
        GDPUSD: "4183000000"
    },
    {
        id: 134,
        CountryName: "Mauritius",
        CountryCode: 230,
        IsoCode: "MU/MUS",
        Population: "1,294,104",
        AreaKmSq: "2,040",
        GDPUSD: "11900000000"
    },
    {
        id: 135,
        CountryName: "Mayotte",
        CountryCode: 262,
        IsoCode: "YT/MYT",
        Population: "159,042",
        AreaKmSq: "374",
        GDPUSD: ""
    },
    {
        id: 136,
        CountryName: "Mexico",
        CountryCode: 52,
        IsoCode: "MX/MEX",
        Population: "112,468,855",
        AreaKmSq: "1,972,550",
        GDPUSD: "1327000000000"
    },
    {
        id: 137,
        CountryName: "Micronesia",
        CountryCode: 691,
        IsoCode: "FM/FSM",
        Population: "107,708",
        AreaKmSq: "702",
        GDPUSD: "339000000"
    },
    {
        id: 138,
        CountryName: "Moldova",
        CountryCode: 373,
        IsoCode: "MD/MDA",
        Population: "4,324,000",
        AreaKmSq: "33,843",
        GDPUSD: "7932000000"
    },
    {
        id: 139,
        CountryName: "Monaco",
        CountryCode: 377,
        IsoCode: "MC/MCO",
        Population: "32,965",
        AreaKmSq: "2",
        GDPUSD: "5748000000"
    },
    {
        id: 140,
        CountryName: "Mongolia",
        CountryCode: 976,
        IsoCode: "MN/MNG",
        Population: "3,086,918",
        AreaKmSq: "1,565,000",
        GDPUSD: "11140000000"
    },
    {
        id: 141,
        CountryName: "Montenegro",
        CountryCode: 382,
        IsoCode: "ME/MNE",
        Population: "666,730",
        AreaKmSq: "14,026",
        GDPUSD: "4518000000"
    },
    {
        id: 142,
        CountryName: "Montserrat",
        CountryCode: "1-664",
        IsoCode: "MS/MSR",
        Population: "9,341",
        AreaKmSq: "102",
        GDPUSD: ""
    },
    {
        id: 143,
        CountryName: "Morocco",
        CountryCode: 212,
        IsoCode: "MA/MAR",
        Population: "31,627,428",
        AreaKmSq: "446,550",
        GDPUSD: "104800000000"
    },
    {
        id: 144,
        CountryName: "Mozambique",
        CountryCode: 258,
        IsoCode: "MZ/MOZ",
        Population: "22,061,451",
        AreaKmSq: "801,590",
        GDPUSD: "14670000000"
    },
    {
        id: 145,
        CountryName: "Myanmar",
        CountryCode: 95,
        IsoCode: "MM/MMR",
        Population: "53,414,374",
        AreaKmSq: "678,500",
        GDPUSD: "59430000000"
    },
    {
        id: 146,
        CountryName: "Namibia",
        CountryCode: 264,
        IsoCode: "NA/NAM",
        Population: "2,128,471",
        AreaKmSq: "825,418",
        GDPUSD: "12300000000"
    },
    {
        id: 147,
        CountryName: "Nauru",
        CountryCode: 674,
        IsoCode: "NR/NRU",
        Population: "10,065",
        AreaKmSq: "21",
        GDPUSD: ""
    },
    {
        id: 148,
        CountryName: "Nepal",
        CountryCode: 977,
        IsoCode: "NP/NPL",
        Population: "28,951,852",
        AreaKmSq: "140,800",
        GDPUSD: "19340000000"
    },
    {
        id: 149,
        CountryName: "Netherlands",
        CountryCode: 31,
        IsoCode: "NL/NLD",
        Population: "16,645,000",
        AreaKmSq: "41,526",
        GDPUSD: "722300000000"
    },
    {
        id: 150,
        CountryName: "Netherlands Antilles",
        CountryCode: 599,
        IsoCode: "AN/ANT",
        Population: "136,197",
        AreaKmSq: "960",
        GDPUSD: ""
    },
    {
        id: 151,
        CountryName: "New Caledonia",
        CountryCode: 687,
        IsoCode: "NC/NCL",
        Population: "216,494",
        AreaKmSq: "19,060",
        GDPUSD: "9280000000"
    },
    {
        id: 152,
        CountryName: "New Zealand",
        CountryCode: 64,
        IsoCode: "NZ/NZL",
        Population: "4,252,277",
        AreaKmSq: "268,680",
        GDPUSD: "181100000000"
    },
    {
        id: 153,
        CountryName: "Nicaragua",
        CountryCode: 505,
        IsoCode: "NI/NIC",
        Population: "5,995,928",
        AreaKmSq: "129,494",
        GDPUSD: "11260000000"
    },
    {
        id: 154,
        CountryName: "Niger",
        CountryCode: 227,
        IsoCode: "NE/NER",
        Population: "15,878,271",
        AreaKmSq: "1,267,000",
        GDPUSD: "7304000000"
    },
    {
        id: 155,
        CountryName: "Nigeria",
        CountryCode: 234,
        IsoCode: "NG/NGA",
        Population: "154,000,000",
        AreaKmSq: "923,768",
        GDPUSD: "502000000000"
    },
    {
        id: 156,
        CountryName: "Niue",
        CountryCode: 683,
        IsoCode: "NU/NIU",
        Population: "2,166",
        AreaKmSq: "260",
        GDPUSD: "10010000"
    },
    {
        id: 157,
        CountryName: "North Korea",
        CountryCode: 850,
        IsoCode: "KP/PRK",
        Population: "22,912,177",
        AreaKmSq: "120,540",
        GDPUSD: "28000000000"
    },
    {
        id: 158,
        CountryName: "Northern Mariana Islands",
        CountryCode: "1-670",
        IsoCode: "MP/MNP",
        Population: "53,883",
        AreaKmSq: "477",
        GDPUSD: "733000000"
    },
    {
        id: 159,
        CountryName: "Norway",
        CountryCode: 47,
        IsoCode: "NO/NOR",
        Population: "5,009,150",
        AreaKmSq: "324,220",
        GDPUSD: "515800000000"
    },
    {
        id: 160,
        CountryName: "Oman",
        CountryCode: 968,
        IsoCode: "OM/OMN",
        Population: "2,967,717",
        AreaKmSq: "212,460",
        GDPUSD: "81950000000"
    },
    {
        id: 161,
        CountryName: "Pakistan",
        CountryCode: 92,
        IsoCode: "PK/PAK",
        Population: "184,404,791",
        AreaKmSq: "803,940",
        GDPUSD: "236500000000"
    },
    {
        id: 162,
        CountryName: "Palau",
        CountryCode: 680,
        IsoCode: "PW/PLW",
        Population: "19,907",
        AreaKmSq: "458",
        GDPUSD: "221000000"
    },
    {
        id: 163,
        CountryName: "Palestine",
        CountryCode: 970,
        IsoCode: "PS/PSE",
        Population: "3,800,000",
        AreaKmSq: "5,970",
        GDPUSD: "6641000000"
    },
    {
        id: 164,
        CountryName: "Panama",
        CountryCode: 507,
        IsoCode: "PA/PAN",
        Population: "3,410,676",
        AreaKmSq: "78,200",
        GDPUSD: "40620000000"
    },
    {
        id: 165,
        CountryName: "Papua New Guinea",
        CountryCode: 675,
        IsoCode: "PG/PNG",
        Population: "6,064,515",
        AreaKmSq: "462,840",
        GDPUSD: "16100000000"
    },
    {
        id: 166,
        CountryName: "Paraguay",
        CountryCode: 595,
        IsoCode: "PY/PRY",
        Population: "6,375,830",
        AreaKmSq: "406,750",
        GDPUSD: "30560000000"
    },
    {
        id: 167,
        CountryName: "Peru",
        CountryCode: 51,
        IsoCode: "PE/PER",
        Population: "29,907,003",
        AreaKmSq: "1,285,220",
        GDPUSD: "210300000000"
    },
    {
        id: 168,
        CountryName: "Philippines",
        CountryCode: 63,
        IsoCode: "PH/PHL",
        Population: "99,900,177",
        AreaKmSq: "300,000",
        GDPUSD: "272200000000"
    },
    {
        id: 169,
        CountryName: "Pitcairn",
        CountryCode: 64,
        IsoCode: "PN/PCN",
        Population: "46",
        AreaKmSq: "47",
        GDPUSD: ""
    },
    {
        id: 170,
        CountryName: "Poland",
        CountryCode: 48,
        IsoCode: "PL/POL",
        Population: "38,500,000",
        AreaKmSq: "312,685",
        GDPUSD: "513900000000"
    },
    {
        id: 171,
        CountryName: "Portugal",
        CountryCode: 351,
        IsoCode: "PT/PRT",
        Population: "10,676,000",
        AreaKmSq: "92,391",
        GDPUSD: "219300000000"
    },
    {
        id: 172,
        CountryName: "Puerto Rico",
        CountryCode: "1-787",
        IsoCode: "PR/PRI",
        Population: "3,916,632",
        AreaKmSq: "9,104",
        GDPUSD: "93520000000"
    },
    {
        id: 173,
        CountryName: "Qatar",
        CountryCode: 974,
        IsoCode: "QA/QAT",
        Population: "840,926",
        AreaKmSq: "11,437",
        GDPUSD: "213100000000"
    },
    {
        id: 174,
        CountryName: "Republic of the Congo",
        CountryCode: 242,
        IsoCode: "CG/COG",
        Population: "3,039,126",
        AreaKmSq: "342,000",
        GDPUSD: "14250000000"
    },
    {
        id: 175,
        CountryName: "Reunion",
        CountryCode: 262,
        IsoCode: "RE/REU",
        Population: "776,948",
        AreaKmSq: "2,517",
        GDPUSD: ""
    },
    {
        id: 176,
        CountryName: "Romania",
        CountryCode: 40,
        IsoCode: "RO/ROU",
        Population: "21,959,278",
        AreaKmSq: "237,500",
        GDPUSD: "188900000000"
    },
    {
        id: 177,
        CountryName: "Russia",
        CountryCode: 7,
        IsoCode: "RU/RUS",
        Population: "140,702,000",
        AreaKmSq: "17,100,000",
        GDPUSD: "2113000000000"
    },
    {
        id: 178,
        CountryName: "Rwanda",
        CountryCode: 250,
        IsoCode: "RW/RWA",
        Population: "11,055,976",
        AreaKmSq: "26,338",
        GDPUSD: "7700000000"
    },
    {
        id: 179,
        CountryName: "Saint Barthelemy",
        CountryCode: 590,
        IsoCode: "BL/BLM",
        Population: "8,450",
        AreaKmSq: "21",
        GDPUSD: ""
    },
    {
        id: 180,
        CountryName: "Saint Helena",
        CountryCode: 290,
        IsoCode: "SH/SHN",
        Population: "7,460",
        AreaKmSq: "410",
        GDPUSD: ""
    },
    {
        id: 181,
        CountryName: "Saint Kitts and Nevis",
        CountryCode: "1-869",
        IsoCode: "KN/KNA",
        Population: "51,134",
        AreaKmSq: "261",
        GDPUSD: "767000000"
    },
    {
        id: 182,
        CountryName: "Saint Lucia",
        CountryCode: "1-758",
        IsoCode: "LC/LCA",
        Population: "160,922",
        AreaKmSq: "616",
        GDPUSD: "1377000000"
    },
    {
        id: 183,
        CountryName: "Saint Martin",
        CountryCode: 590,
        IsoCode: "MF/MAF",
        Population: "35,925",
        AreaKmSq: "53",
        GDPUSD: "561500000"
    },
    {
        id: 184,
        CountryName: "Saint Pierre and Miquelon",
        CountryCode: 508,
        IsoCode: "PM/SPM",
        Population: "7,012",
        AreaKmSq: "242",
        GDPUSD: "215300000"
    },
    {
        id: 185,
        CountryName: "Saint Vincent and the Grenadines",
        CountryCode: "1-784",
        IsoCode: "VC/VCT",
        Population: "104,217",
        AreaKmSq: 389,
        GDPUSD: "742000000"
    },
    {
        id: 186,
        CountryName: "Samoa",
        CountryCode: 685,
        IsoCode: "WS/WSM",
        Population: "192,001",
        AreaKmSq: "2,944",
        GDPUSD: "705000000"
    },
    {
        id: 187,
        CountryName: "San Marino",
        CountryCode: 378,
        IsoCode: "SM/SMR",
        Population: "31,477",
        AreaKmSq: "61",
        GDPUSD: "1866000000"
    },
    {
        id: 188,
        CountryName: "Sao Tome and Principe",
        CountryCode: 239,
        IsoCode: "ST/STP",
        Population: "175,808",
        AreaKmSq: "1,001",
        GDPUSD: "311000000"
    },
    {
        id: 189,
        CountryName: "Saudi Arabia",
        CountryCode: 966,
        IsoCode: "SA/SAU",
        Population: "25,731,776",
        AreaKmSq: "1,960,582",
        GDPUSD: "718500000000"
    },
    {
        id: 190,
        CountryName: "Senegal",
        CountryCode: 221,
        IsoCode: "SN/SEN",
        Population: "12,323,252",
        AreaKmSq: "196,190",
        GDPUSD: "15360000000"
    },
    {
        id: 191,
        CountryName: "Serbia",
        CountryCode: 381,
        IsoCode: "RS/SRB",
        Population: "7,344,847",
        AreaKmSq: "88,361",
        GDPUSD: "43680000000"
    },
    {
        id: 192,
        CountryName: "Seychelles",
        CountryCode: 248,
        IsoCode: "SC/SYC",
        Population: "88,340",
        AreaKmSq: "455",
        GDPUSD: "1271000000"
    },
    {
        id: 193,
        CountryName: "Sierra Leone",
        CountryCode: 232,
        IsoCode: "SL/SLE",
        Population: "5,245,695",
        AreaKmSq: "71,740",
        GDPUSD: "4607000000"
    },
    {
        id: 194,
        CountryName: "Singapore",
        CountryCode: 65,
        IsoCode: "SG/SGP",
        Population: "4,701,069",
        AreaKmSq: "693",
        GDPUSD: "295700000000"
    },
    {
        id: 195,
        CountryName: "Sint Maarten",
        CountryCode: "1-721",
        IsoCode: "SX/SXM",
        Population: "37,429",
        AreaKmSq: "34",
        GDPUSD: "1185000000"
    },
    {
        id: 196,
        CountryName: "Slovakia",
        CountryCode: 421,
        IsoCode: "SK/SVK",
        Population: "5,455,000",
        AreaKmSq: "48,845",
        GDPUSD: "96960000000"
    },
    {
        id: 197,
        CountryName: "Slovenia",
        CountryCode: 386,
        IsoCode: "SI/SVN",
        Population: "2,007,000",
        AreaKmSq: "20,273",
        GDPUSD: "46820000000"
    },
    {
        id: 198,
        CountryName: "Solomon Islands",
        CountryCode: 677,
        IsoCode: "SB/SLB",
        Population: "559,198",
        AreaKmSq: "28,450",
        GDPUSD: "1099000000"
    },
    {
        id: 199,
        CountryName: "Somalia",
        CountryCode: 252,
        IsoCode: "SO/SOM",
        Population: "10,112,453",
        AreaKmSq: "637,657",
        GDPUSD: "2372000000"
    },
    {
        id: 200,
        CountryName: "South Africa",
        CountryCode: 27,
        IsoCode: "ZA/ZAF",
        Population: "49,000,000",
        AreaKmSq: "1,219,912",
        GDPUSD: "353900000000"
    },
    {
        id: 201,
        CountryName: "South Korea",
        CountryCode: 82,
        IsoCode: "KR/KOR",
        Population: "48,422,644",
        AreaKmSq: "98,480",
        GDPUSD: "1198000000000"
    },
    {
        id: 202,
        CountryName: "South Sudan",
        CountryCode: 211,
        IsoCode: "SS/SSD",
        Population: "8,260,490",
        AreaKmSq: "644,329",
        GDPUSD: "11770000000"
    },
    {
        id: 203,
        CountryName: "Spain",
        CountryCode: 34,
        IsoCode: "ES/ESP",
        Population: "46,505,963",
        AreaKmSq: "504,782",
        GDPUSD: "1356000000000"
    },
    {
        id: 204,
        CountryName: "Sri Lanka",
        CountryCode: 94,
        IsoCode: "LK/LKA",
        Population: "21,513,990",
        AreaKmSq: "65,610",
        GDPUSD: "65120000000"
    },
    {
        id: 205,
        CountryName: "Sudan",
        CountryCode: 249,
        IsoCode: "SD/SDN",
        Population: "35,000,000",
        AreaKmSq: "1,861,484",
        GDPUSD: "52500000000"
    },
    {
        id: 206,
        CountryName: "Suriname",
        CountryCode: 597,
        IsoCode: "SR/SUR",
        Population: "492,829",
        AreaKmSq: "163,270",
        GDPUSD: "5009000000"
    },
    {
        id: 207,
        CountryName: "Svalbard and Jan Mayen",
        CountryCode: 47,
        IsoCode: "SJ/SJM",
        Population: "2,550",
        AreaKmSq: "62,049",
        GDPUSD: ""
    },
    {
        id: 208,
        CountryName: "Swaziland",
        CountryCode: 268,
        IsoCode: "SZ/SWZ",
        Population: "1,354,051",
        AreaKmSq: "17,363",
        GDPUSD: "3807000000"
    },
    {
        id: 209,
        CountryName: "Sweden",
        CountryCode: 46,
        IsoCode: "SE/SWE",
        Population: "9,555,893",
        AreaKmSq: "449,964",
        GDPUSD: "552000000000"
    },
    {
        id: 210,
        CountryName: "Switzerland",
        CountryCode: 41,
        IsoCode: "CH/CHE",
        Population: "7,581,000",
        AreaKmSq: "41,290",
        GDPUSD: "646200000000"
    },
    {
        id: 211,
        CountryName: "Syria",
        CountryCode: 963,
        IsoCode: "SY/SYR",
        Population: "22,198,110",
        AreaKmSq: "185,180",
        GDPUSD: "64700000000"
    },
    {
        id: 212,
        CountryName: "Taiwan",
        CountryCode: 886,
        IsoCode: "TW/TWN",
        Population: "22,894,384",
        AreaKmSq: "35,980",
        GDPUSD: "484700000000"
    },
    {
        id: 213,
        CountryName: "Tajikistan",
        CountryCode: 992,
        IsoCode: "TJ/TJK",
        Population: "7,487,489",
        AreaKmSq: "143,100",
        GDPUSD: "8513000000"
    },
    {
        id: 214,
        CountryName: "Tanzania",
        CountryCode: 255,
        IsoCode: "TZ/TZA",
        Population: "41,892,895",
        AreaKmSq: "945,087",
        GDPUSD: "31940000000"
    },
    {
        id: 215,
        CountryName: "Thailand",
        CountryCode: 66,
        IsoCode: "TH/THA",
        Population: "67,089,500",
        AreaKmSq: "514,000",
        GDPUSD: "400900000000"
    },
    {
        id: 216,
        CountryName: "Togo",
        CountryCode: 228,
        IsoCode: "TG/TGO",
        Population: "6,587,239",
        AreaKmSq: "56,785",
        GDPUSD: "4299000000"
    },
    {
        id: 217,
        CountryName: "Tokelau",
        CountryCode: 690,
        IsoCode: "TK/TKL",
        Population: "1,466",
        AreaKmSq: "10",
        GDPUSD: ""
    },
    {
        id: 218,
        CountryName: "Tonga",
        CountryCode: 676,
        IsoCode: "TO/TON",
        Population: "122,580",
        AreaKmSq: "748",
        GDPUSD: "477000000"
    },
    {
        id: 219,
        CountryName: "Trinidad and Tobago",
        CountryCode: "1-868",
        IsoCode: "TT/TTO",
        Population: "1,228,691",
        AreaKmSq: "5,128",
        GDPUSD: "27130000000"
    },
    {
        id: 220,
        CountryName: "Tunisia",
        CountryCode: 216,
        IsoCode: "TN/TUN",
        Population: "10,589,025",
        AreaKmSq: "163,610",
        GDPUSD: "43380000000"
    },
    {
        id: 221,
        CountryName: "Turkey",
        CountryCode: 90,
        IsoCode: "TR/TUR",
        Population: "77,804,122",
        AreaKmSq: "780,580",
        GDPUSD: "821800000000"
    },
    {
        id: 222,
        CountryName: "Turkmenistan",
        CountryCode: 993,
        IsoCode: "TM/TKM",
        Population: "4,940,916",
        AreaKmSq: "488,100",
        GDPUSD: "40560000000"
    },
    {
        id: 223,
        CountryName: "Turks and Caicos Islands",
        CountryCode: "1-649",
        IsoCode: "TC/TCA",
        Population: "20,556",
        AreaKmSq: "430",
        GDPUSD: ""
    },
    {
        id: 224,
        CountryName: "Tuvalu",
        CountryCode: 688,
        IsoCode: "TV/TUV",
        Population: "10,472",
        AreaKmSq: "26",
        GDPUSD: "38000000"
    },
    {
        id: 225,
        CountryName: "U.S. Virgin Islands",
        CountryCode: "1-340",
        IsoCode: "VI/VIR",
        Population: "108,708",
        AreaKmSq: "352",
        GDPUSD: ""
    },
    {
        id: 226,
        CountryName: "Uganda",
        CountryCode: 256,
        IsoCode: "UG/UGA",
        Population: "33,398,682",
        AreaKmSq: "236,040",
        GDPUSD: "22600000000"
    },
    {
        id: 227,
        CountryName: "Ukraine",
        CountryCode: 380,
        IsoCode: "UA/UKR",
        Population: "45,415,596",
        AreaKmSq: "603,700",
        GDPUSD: "175500000000"
    },
    {
        id: 228,
        CountryName: "United Arab Emirates",
        CountryCode: 971,
        IsoCode: "AE/ARE",
        Population: "4,975,593",
        AreaKmSq: "82,880",
        GDPUSD: "390000000000"
    },
    {
        id: 229,
        CountryName: "United Kingdom",
        CountryCode: 44,
        IsoCode: "GB/GBR",
        Population: "62,348,447",
        AreaKmSq: "244,820",
        GDPUSD: "2490000000000"
    },
    {
        id: 230,
        CountryName: "United States",
        CountryCode: 1,
        IsoCode: "US/USA",
        Population: "310,232,863",
        AreaKmSq: "9,629,091",
        GDPUSD: "16720000000000"
    },
    {
        id: 231,
        CountryName: "Uruguay",
        CountryCode: 598,
        IsoCode: "UY/URY",
        Population: "3,477,000",
        AreaKmSq: "176,220",
        GDPUSD: "57110000000"
    },
    {
        id: 232,
        CountryName: "Uzbekistan",
        CountryCode: 998,
        IsoCode: "UZ/UZB",
        Population: "27,865,738",
        AreaKmSq: "447,400",
        GDPUSD: "55480000000"
    },
    {
        id: 233,
        CountryName: "Vanuatu",
        CountryCode: 678,
        IsoCode: "VU/VUT",
        Population: "221,552",
        AreaKmSq: "12,200",
        GDPUSD: "828000000"
    },
    {
        id: 234,
        CountryName: "Vatican",
        CountryCode: 379,
        IsoCode: "VA/VAT",
        Population: "921",
        AreaKmSq: "0",
        GDPUSD: ""
    },
    {
        id: 235,
        CountryName: "Venezuela",
        CountryCode: 58,
        IsoCode: "VE/VEN",
        Population: "27,223,228",
        AreaKmSq: "912,050",
        GDPUSD: "367500000000"
    },
    {
        id: 236,
        CountryName: "Vietnam",
        CountryCode: 84,
        IsoCode: "VN/VNM",
        Population: "89,571,130",
        AreaKmSq: "329,560",
        GDPUSD: "1700000000"
    },
    {
        id: 237,
        CountryName: "Wallis and Futuna",
        CountryCode: 681,
        IsoCode: "WF/WLF",
        Population: "16,025",
        AreaKmSq: "274",
        GDPUSD: ""
    },
    {
        id: 238,
        CountryName: "Western Sahara",
        CountryCode: 212,
        IsoCode: "EH/ESH",
        Population: "273,008",
        AreaKmSq: "266,000",
        GDPUSD: ""
    },
    {
        id: 239,
        CountryName: "Yemen",
        CountryCode: 967,
        IsoCode: "YE/YEM",
        Population: "23,495,361",
        AreaKmSq: "527,970",
        GDPUSD: "43890000000"
    },
    {
        id: 240,
        CountryName: "Zambia",
        CountryCode: 260,
        IsoCode: "ZM/ZMB",
        Population: "13,460,305",
        AreaKmSq: "752,614",
        GDPUSD: "22240000000"
    },
    {
        id: 241,
        CountryName: "Zimbabwe",
        CountryCode: 263,
        IsoCode: "ZW/ZWE",
        Population: "11,651,858",
        AreaKmSq: "390,580",
        GDPUSD: "10480000000"
    },
    {
        id: 242,
        CountryName: "Puerto Rico",
        CountryCode: "1-939",
        IsoCode: "PR/PRI",
        Population: "3,916,632",
        AreaKmSq: "9,104",
        GDPUSD: "93520000000"
    },
    {
        id: 243,
        CountryName: "Dominican Republic",
        CountryCode: "1-829",
        IsoCode: "DO/DOM",
        Population: "9,823,821",
        AreaKmSq: "48,730",
        GDPUSD: "59270000000"
    },
    {
        id: 244,
        CountryName: "Dominican Republic",
        CountryCode: "1-849",
        IsoCode: "DO/DOM",
        Population: "9,823,821",
        AreaKmSq: "48,730",
        GDPUSD: "59270000000"
    }
]

function getCountryData() {
    return countries
}