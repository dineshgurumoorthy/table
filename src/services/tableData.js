const tableData = [
  {
    id: 1,
    name: {
      firstName: "Rikki",
      lastName: "Mothersole"
    },
    companyName: "McDermott-Lebsack"
  },
  {
    id: 2,
    name: {
      firstName: "Shelby",
      lastName: "Clewett"
    },
    companyName: "Mitchell-Medhurst"
  },
  {
    id: 3,
    name: {
      firstName: "Barnabe",
      lastName: "Fullun"
    },
    companyName: "Powlowski, Mitchell and Lehner"
  },
  {
    id: 4,
    name: {
      firstName: "Tailor",
      lastName: "Empringham"
    },
    companyName: "Kiehn Inc"
  },
  {
    id: 5,
    name: {
      firstName: "Shanna",
      lastName: "Jezard"
    },
    companyName: "Stiedemann, Dibbert and Hirthe"
  },
  {
    id: 6,
    name: {
      firstName: "Gayleen",
      lastName: "Lillywhite"
    },
    companyName: "O'Kon Group"
  },
  {
    id: 7,
    name: {
      firstName: "Benjamin",
      lastName: "Rodge"
    },
    companyName: "Schulist-Runolfsson"
  },
  {
    id: 8,
    name: {
      firstName: "Lodovico",
      lastName: "Rohlfing"
    },
    companyName: "Gerhold-Schowalter"
  },
  {
    id: 9,
    name: {
      firstName: "Nichol",
      lastName: "MacRonald"
    },
    companyName: "Bashirian, Hudson and Steuber"
  },
  {
    id: 10,
    name: {
      firstName: "Alana",
      lastName: "McRobbie"
    },
    companyName: "Wintheiser-Parisian"
  },
  {
    id: 11,
    name: {
      firstName: "Granny",
      lastName: "Faulder"
    },
    companyName: "Davis-Langworth"
  },
  {
    id: 12,
    name: {
      firstName: "Bary",
      lastName: "Dyble"
    },
    companyName: "Schroeder, Brown and Muller"
  },
  {
    id: 13,
    name: {
      firstName: "Alvie",
      lastName: "Leibold"
    },
    companyName: "Thiel Group"
  },
  {
    id: 14,
    name: {
      firstName: "Mirelle",
      lastName: "Edwicker"
    },
    companyName: "Mante and Sons"
  },
  {
    id: 15,
    name: {
      firstName: "Marleah",
      lastName: "Stamp"
    },
    companyName: "Hyatt Inc"
  },
  {
    id: 16,
    name: {
      firstName: "Easter",
      lastName: "Beavington"
    },
    companyName: "Legros and Sons"
  },
  {
    id: 17,
    name: {
      firstName: "Mel",
      lastName: "Toderbrugge"
    },
    companyName: "Kohler-Blanda"
  },
  {
    id: 18,
    name: {
      firstName: "Eldin",
      lastName: "Gresser"
    },
    companyName: "Swift and Sons"
  },
  {
    id: 19,
    name: {
      firstName: "Carlie",
      lastName: "Creasey"
    },
    companyName: "Gutmann, Klocko and Walter"
  },
  {
    id: 20,
    name: {
      firstName: "Deidre",
      lastName: "Howorth"
    },
    companyName: "O'Connell-Purdy"
  },
  {
    id: 21,
    name: {
      firstName: "Clemmie",
      lastName: "McShea"
    },
    companyName: "Hoeger-Feeney"
  },
  {
    id: 22,
    name: {
      firstName: "Maryellen",
      lastName: "Deal"
    },
    companyName: "Terry-Beier"
  },
  {
    id: 23,
    name: {
      firstName: "Karde",
      lastName: "Lymbourne"
    },
    companyName: "Connelly, Maggio and Nader"
  },
  {
    id: 24,
    name: {
      firstName: "Bobbee",
      lastName: "Glave"
    },
    companyName: "Powlowski, Maggio and Senger"
  },
  {
    id: 25,
    name: {
      firstName: "Armin",
      lastName: "Oldland"
    },
    companyName: "Hamill Inc"
  },
  {
    id: 26,
    name: {
      firstName: "Arabelle",
      lastName: "Lithcow"
    },
    companyName: "Gulgowski-Lind"
  },
  {
    id: 27,
    name: {
      firstName: "Nester",
      lastName: "Pol"
    },
    companyName: "Jones Group"
  },
  {
    id: 28,
    name: {
      firstName: "Valma",
      lastName: "Kaliszewski"
    },
    companyName: "Hamill, Marks and Zieme"
  },
  {
    id: 29,
    name: {
      firstName: "Liva",
      lastName: "Reace"
    },
    companyName: "Sawayn-Altenwerth"
  },
  {
    id: 30,
    name: {
      firstName: "Petra",
      lastName: "Tremblett"
    },
    companyName: "Breitenberg-Schimmel"
  },
  {
    id: 31,
    name: {
      firstName: "Avivah",
      lastName: "Lindenfeld"
    },
    companyName: "Lemke and Sons"
  },
  {
    id: 32,
    name: {
      firstName: "Cathie",
      lastName: "Dodds"
    },
    companyName: "Beahan, Lowe and Ankunding"
  },
  {
    id: 33,
    name: {
      firstName: "Berne",
      lastName: "Marchent"
    },
    companyName: "Cummings and Sons"
  },
  {
    id: 34,
    name: {
      firstName: "Erinna",
      lastName: "O'Kennedy"
    },
    companyName: "Veum-Marquardt"
  },
  {
    id: 35,
    name: {
      firstName: "Marybelle",
      lastName: "Heining"
    },
    companyName: "Beier, Kihn and Kshlerin"
  },
  {
    id: 36,
    name: {
      firstName: "Leonore",
      lastName: "Bechley"
    },
    companyName: "Jerde-Bechtelar"
  },
  {
    id: 37,
    name: {
      firstName: "Jeromy",
      lastName: "Shotbolt"
    },
    companyName: "Lakin-Kuhn"
  },
  {
    id: 38,
    name: {
      firstName: "Artur",
      lastName: "Lumsden"
    },
    companyName: "Wolff, Turner and Torphy"
  },
  {
    id: 39,
    name: {
      firstName: "Audrye",
      lastName: "Battany"
    },
    companyName: "Funk Inc"
  },
  {
    id: 40,
    name: {
      firstName: "Agata",
      lastName: "MacAvddy"
    },
    companyName: "Paucek-Treutel"
  },
  {
    id: 41,
    name: {
      firstName: "Henrieta",
      lastName: "Stannus"
    },
    companyName: "Ledner LLC"
  },
  {
    id: 42,
    name: {
      firstName: "Aland",
      lastName: "Rhubottom"
    },
    companyName: "Rempel, Langworth and Wuckert"
  },
  {
    id: 43,
    name: {
      firstName: "Rosemary",
      lastName: "Slocom"
    },
    companyName: "Jacobi Group"
  },
  {
    id: 44,
    name: {
      firstName: "Kassie",
      lastName: "Bromfield"
    },
    companyName: "Marquardt and Sons"
  },
  {
    id: 45,
    name: {
      firstName: "Verile",
      lastName: "Hughson"
    },
    companyName: "Krajcik-Kuphal"
  },
  {
    id: 46,
    name: {
      firstName: "Erhard",
      lastName: "Holyard"
    },
    companyName: "Brakus Group"
  }
];
const headersConfig = {
  id: "No",
  name: "Name",
  companyName: "Company Name"
};

export function getData() {
  return tableData;
}
export function getHeader() {
  return headersConfig;
}
