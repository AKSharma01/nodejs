Vue.use(VueTables.client, {
  compileTemplates: true,
  //highlightMatches: true,
  //pagination: {
  // dropdown:true
  // chunk:5
  // },
  filterByColumn: true,
  texts: {
    filter: "Search:"
  },
  // datepickerOptions: {
  //   showDropdowns: true
  // }
  
});

var app = new Vue({
  el: "#people",
  ready: function() {
    console.log(this.options.listColumns.status);
    this.$on('vue-tables.row-click', function(row) {
      console.log(row);
    });
    $.ajax({
      url : 'http://api3.dev/queues/All',
      method : 'GET',
      headers: {
        'access-token' : '$2b$12$HIygWiqETjHpyZAVAIgi3eZK2jOJbWL6fBHbMPJXWrWwtPJhP3.Fu'
      },
      success: function(response){

        console.log(response['data'][0]);
        app.keys = response['data'][0];
        for (var i = 0; i < app.keys.length; i++) 
          app.options.listColumns.status.push({id: i, text: app.keys[i]});
                
      }
    });
  },
  methods: {
    calcAge: function(birthDate) {
      return birthDate.fromNow('years')
    },
        deleteMe: function(id) {
      alert("Delete " + id);
    },
    alphabetFilter: function(letter) {
      this.selectedLetter = letter;
      this.$broadcast('vue-tables.filter::alphabet', letter);
    },
  },
  data: {
    columns: ['name', 'status', 'CreatedAt'],
    keys :'', 
    options: {
      dateColumns: ['CreatedAt'],
      headings: {
        name: 'Name',
        CreatedAt: 'CreatedAt',
        age: 'Age',
        edit: 'Edit',
        delete: 'Delete'
      },
      templates: {
        age: function(row) {
          return this.calcAge(row.birth_date);
        },
        edit: function(row) {
          return `<a href='#!/${row.id}/edit'><i class='glyphicon glyphicon-edit'></i></a>`
        },
        delete: function(row) {
          return `<a href='javascript:void(0);' @click='$parent.deleteMe(${row.id})'><i class='glyphicon glyphicon-erase'></i></a>`

        }
      },
      listColumns: {
        status: []
      },
      // --------------- After Alphabet Change ------------------------
      // customFilters: [{
      //     name: 'alphabet',
      //     callback: function(row, query) {
      //       return row.name[0] == query;
      //     }
      //   }]
      // --------------------------------------------------------------
        //  orderBy: {
        //        column:'age',
        //        ascending:false
        //    }
    },
    // letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    // selectedLetter: '',
    averageAge: 0,
    tableData: [{
      id: "1",
      name: "Sidney Brakus",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))

    }, {
      id: "2",
      name: "Jovan Koepp",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))

    }, {
      id: "3",
      name: "Shanie McCullough PhD",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))

    }, {
      id: "4",
      name: "Miss Laury Farrell",
      pet: randomOption(),
      pet: randomOption(),
      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))


    }, {
      id: "5",
      name: "Adrien Von",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))

    }, {
      id: "6",
      name: "Vaughn Kertzmann",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "7",
      name: "Effie Gottlieb V",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "8",
      name: "Oswald Upton",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "9",
      name: "Dr. Jo Hahn DVM",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "10",
      name: "Luz Bartell",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "11",
      name: "Dr. Houston Berge",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "12",
      name: "Mr. Murray Hilll",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "13",
      name: "Hollie Kassulke V",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "14",
      name: "Verdie Boyer",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "15",
      name: "Randall Reynolds",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "16",
      name: "Carolina Fahey",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "17",
      name: "Augustine Haley Sr.",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "18",
      name: "Felix Fisher",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "19",
      name: "Dorothy O'Kon",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "20",
      name: "Janelle Wisoky",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "21",
      name: "Jaida Rohan",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "22",
      name: "Timmothy Hudson DVM",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "23",
      name: "Beth Haag",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "24",
      name: "Miller Kirlin",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "25",
      name: "Dr. Grant Rohan",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "26",
      name: "Marilyne Ledner II",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "27",
      name: "Jesse Fay",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "28",
      name: "Ms. Emily O'Connell III",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "29",
      name: "Jettie McClure",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "30",
      name: "Trystan Bayer",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "31",
      name: "Eli Witting",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "32",
      name: "Ms. Zola Murazik",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "33",
      name: "Dortha Murazik",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "34",
      name: "Mr. Montana Harber",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "35",
      name: "Prof. Alanis Gislason",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "36",
      name: "Dominique Goyette",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "37",
      name: "Rebecca Wilkinson",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "38",
      name: "Mr. Dane Dicki III",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "39",
      name: "Audra Treutel",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "40",
      name: "Ms. Elenor Ernser Jr.",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "41",
      name: "Pietro Metz",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "42",
      name: "Prof. Dustin Terry DVM",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "43",
      name: "Damian Mertz I",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "44",
      name: "Elouise Walter",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "45",
      name: "Kaylee Volkman",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "46",
      name: "Dr. Reyna Pfannerstill II",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "47",
      name: "Leslie Spencer Jr.",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "48",
      name: "Mrs. Rozella Willms IV",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "49",
      name: "Alverta Okuneva II",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "50",
      name: "Rae Simonis II",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "51",
      name: "Micaela Bergnaum",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "52",
      name: "Dr. Lamont Fadel DDS",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "53",
      name: "Dr. Anissa Turner MD",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "54",
      name: "Nia Veum",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "55",
      name: "Bridget Ernser",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "56",
      name: "Giovanna Emmerich",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "57",
      name: "Ruthe Kub",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "58",
      name: "Samson Jacobs",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "59",
      name: "Martina Pouros",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "60",
      name: "Malinda McGlynn V",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "61",
      name: "Mrs. Alivia Stehr",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "62",
      name: "Genevieve Huel",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "63",
      name: "Violette Reilly",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "64",
      name: "Furman DuBuque",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "65",
      name: "Mr. Justyn Wisozk Jr.",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "66",
      name: "Dr. Giovani Emard",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "67",
      name: "Walton Buckridge",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "68",
      name: "Citlalli Larson",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "69",
      name: "Prof. Kassandra Wiegand I",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "70",
      name: "Ralph Feil",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "71",
      name: "Dr. Lupe Little",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "72",
      name: "Edd Bechtelar",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "73",
      name: "Melissa McDermott Sr.",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "74",
      name: "Veda Abernathy",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "75",
      name: "Christine Cormier",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "76",
      name: "Dr. Minerva Ebert",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "77",
      name: "Rylee Leffler",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "78",
      name: "Mariane Hagenes",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "79",
      name: "Miss Jennyfer McLaughlin DVM",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "80",
      name: "Mikel Mohr",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "81",
      name: "Prof. Abraham Schultz II",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "82",
      name: "Greta Harber",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "83",
      name: "Dr. Tracy Hauck",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "84",
      name: "Brianne Mueller",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "85",
      name: "Otha Wilderman",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "86",
      name: "Rhoda Blick",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "87",
      name: "Opal Kuhlman",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "88",
      name: "Aiden McGlynn",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "89",
      name: "Prof. Adelbert Stroman",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "90",
      name: "Ms. Dejah Dickens IV",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "91",
      name: "Gavin Ondricka",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "92",
      name: "Sherwood Wehner",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "93",
      name: "Jarvis Kuvalis",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "94",
      name: "Selena Bradtke",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "95",
      name: "Alaina Swaniawski",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "96",
      name: "Dr. Roger Will",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "97",
      name: "Benjamin Purdy",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "98",
      name: "Prof. Lue Lehner",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "99",
      name: "Miss Leda Krajcik",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }, {
      id: "100",
      name: "Deshawn Hodkiewicz",
      pet: randomOption(),

      birth_date: randomDate(new Date(1925, 0, 1), new Date(2012, 0, 1))
    }],
  }
});

// Courtesy of Tomasz Nurkiewicz (http://stackoverflow.com/questions/9035627/elegant-method-to-generate-array-of-random-dates-within-two-dates)

function randomDate(start, end) {
  return moment(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function randomOption() {
  return Math.floor(Math.random() * 5);
}
