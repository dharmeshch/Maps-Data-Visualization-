var election = new Datamap({
    scope: 'usa',
    element: document.getElementById('map_election'),
    geographyConfig: {
      highlightBorderColor: '#bada55',
     popupTemplate: function(geography, data) {
        return '<div class="hoverinfo">' + geography.properties.name + ' Total Deposits:' +  data.TotalDeposits + ' '
      },
      highlightBorderWidth: 3
    },
    
    fills: {
    // 'Republican': '#CC4731',
    // 'Democrat': '#306596',
    'Millions': '#306596',
    'Billions': '#CC4731',
    // 'Thousands': '#CA5E5B',
    //'Light Republican': '#EAA9A8',
    defaultFill: '#EDDC4E'
  },
  done: function(datamap) {
            datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
                // alert(geography.properties.name);
                renderLineGraph(geography.properties.name, geography.TotalDeposits);

            });
    },
  data:{
    "WA" :{
        "fillKey" : "Millions",
        "TotalDeposits" : "78,839,171"
    }, 
    "OR" :{
        "fillKey" : "Millions",
        "TotalDeposits" : "32,370,825"
    }, 
    "CA" :{
        "fillKey" : "Billions",
        "TotalDeposits" : "555,465,177"
    },
    "NV" :{
        "fillKey" : "Millions",
        "TotalDeposits" : "11,402,782"
    },
    "ID" :{
        "fillKey" : "Millions",
        "TotalDeposits" : "3,254,799"
    },
    "UT" :{
        "fillKey" : "Millions",
        "TotalDeposits" : "49,076,376"
    },  
    "AZ" :{
        "fillKey" : "Billions",
        "TotalDeposits" : "163,638,397"
    },  
    "CO" :{
        "fillKey" : "Millions",
        "TotalDeposits" : "65,697,351"
    }, 
    "OK" :{
        "TotalDeposits" : "13,387,552"
    },
    "TX" :{
        "fillKey" : "Billions",
        "TotalDeposits" : "862,349,641"
    },
    "LA" :{
        "fillKey" : "Billions",
        "TotalDeposits" : "110,606,320"
    },
    "GA" :{
        "fillKey" : "Millions",
        "TotalDeposits" : "8,275,489"
    },
    "FL" :{
        "fillKey" : "Billions",
        "TotalDeposits" : "106,377,172"
    },
    "IL" :{
        "fillKey" : "Billions",
        "TotalDeposits" : "499,096,999"
    },
    "WI" :{
        "fillKey" : "Millions",
        "TotalDeposits" : "54,919,224"
    },
    "MI" :{
        "fillKey" : "Billions",
        "TotalDeposits" : "220,998,719"
    },
    "IN" :{
        "fillKey" : "Billions",
        "TotalDeposits" : "103,095,052"
    },
    "OH" :{
        "fillKey" : "Billions",
        "TotalDeposits" : "6,540,036,750"
    },
    "KY" :{
        "fillKey" : "Millions",
        "TotalDeposits" : "34,651,838"
    },
    "WV" :{
        "fillKey" : "Millions",
        "TotalDeposits" : "11,906,346"
    },
    "NY" :{
        "fillKey" : "Billions",
        "TotalDeposits" : "2,911,194,993"
    },
    "CT" :{
        "fillKey" : "Millions",
        "TotalDeposits" : "30,942,188"
    },
    "NJ" :{
        "fillKey" : "Millions",
        "TotalDeposits" : "96,664,014"
    }
  }
  
  });
  election.labels();
  var l = {
    legendTitle: "Chase Bank deposits data map in United States",
    defaultFillName: "No Branches in this state",
    labels: {
       Millions: "States with deposits in Millions",
       Billions: "States with deposits in Billions",
    },
  };
  election.legend(l);
