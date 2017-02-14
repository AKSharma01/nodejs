function myFunction(col, id_name) {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById(id_name);
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[col];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}



function toggleFunc(id) {
  console.log("id",id);
  if ($("#" + id +' td').css('display')=='none')
    $("#" + id+' td').css('display','table-cell');
  else
    $("#" + id+' td').css('display', 'none');
}

function api_call(response) {
  console.log(response['data']);
  // console.log(response['data'][0]);
  app.option = response.data.keys;
  
  for (var i = 0; i < app.option.length; i++) 
    app.keys.push(app.option[i]);
  
  app.tableDatas = [];
  for(var i =0 ;i<response.data.object.length;i++)
    app.tableDatas.push(response.data.object[i]);
  console.log(app.tableDatas);
}


// Vue.use(VueTables.client, {
//   compileTemplates: true,
//   //highlightMatches: true,
//   //pagination: {
//   // dropdown:true
//   // chunk:5
//   // },
//   filterByColumn: true,
  
//   // datepickerOptions: {
//   //   showDropdowns: true
//   // }
  
// });

var app = new Vue({
  el: "#people",
  ready: function() {
    // console.log(app.keys);
    $("#class_name").change(function(){
      var selected_option=$("#class_name").val();
      //alert(""+class_id);
      $.ajax({
        url : 'http://api3.dev/queues/'+selected_option+'/0',
        method : 'GET',
        headers: {
          'access-token' : '$2b$12$Z63ZvLoJSH/bFR3Rw2fnieY7Lk2vlC5sbya4x5b7gxeChhwjbHI.u'
        },
        success: function(response){
          api_call(response);

        }
      });
    });
    this.$on('vue-tables.row-click', function(row) {
      console.log(row);
    });
    $.ajax({
      url : 'http://api3.dev/queues/All/0',
      method : 'GET',
      headers: {
        'access-token' : '$2b$12$Z63ZvLoJSH/bFR3Rw2fnieY7Lk2vlC5sbya4x5b7gxeChhwjbHI.u'
      },
      success: function(response){
        api_call(response);
      }
    });
  },
  methods :{

  },

  data: {
    option : '',
    keys :['All'], 
    tableDatas : [],
  }
});

// Courtesy of Tomasz Nurkiewicz (http://stackoverflow.com/questions/9035627/elegant-method-to-generate-array-of-random-dates-within-two-dates)

function randomDate(start, end) {
  return moment(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function randomOption() {
  return Math.floor(Math.random() * 5);
}
 






















  // methods: {
  //   calcAge: function(birthDate) {
  //     return birthDate.fromNow('years')
  //   },
  //       deleteMe: function(id) {
  //     alert("Delete " + id);
  //   },
  //   alphabetFilter: function(letter) {
  //     this.selectedLetter = letter;
  //     this.$broadcast('vue-tables.filter::alphabet', letter);
  //   },
  // },



    // columns: ['title', 'status', 'CreatedAt'],
    // options: {
    //   dateColumns: ['CreatedAt'],
    //   headings: {
    //     title: 'Title',
    //     CreatedAt: 'CreatedAt',
    //     edit: 'Edit',
    //     delete: 'Delete'
    //   },
      // templates: {
        
      //   edit: function(row) {
      //     return `<a href='#!/${row.id}/edit'><i class='glyphicon glyphicon-edit'></i></a>`
      //   },
      //   delete: function(row) {
      //     return `<a href='javascript:void(0);' @click='$parent.deleteMe(${row.id})'><i class='glyphicon glyphicon-erase'></i></a>`

      //   }
      // },
      // listColumns: {
      //   status: []
      // },
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
    // },
    // letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    // selectedLetter: '',
    // averageAge: 0,
