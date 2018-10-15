function renderMap(){
    var clearSVG = d3.select("#map_election");
    clearSVG.selectAll("*").remove();
    var clearSVG1 = d3.select("#donut");
    clearSVG1.selectAll("*").remove();
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
        'greaterThan10Million': '#CC4731',
        'lessThan10Million': '#306596',
        'greaterThanBillion': '#EDDC4E',
         defaultFill: '#EAA9A8'
      },
      done: function(datamap) {
                datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
                    // alert(geography.properties.name);
                    renderLineGraph(geography.properties.name, geography.TotalDeposits);
    
                });
        },
      data:{
        "WA" :{
            "fillKey" : color(78839171),
            "TotalDeposits" : "78,839,171"
        }, 
        "OR" :{
            "fillKey" : color(32370825),
            "TotalDeposits" : "32,370,825"
        }, 
        "CA" :{
            "fillKey" : color(555465177),
            "TotalDeposits" : "555,465,177"
        },
        "NV" :{
            "fillKey" : color(11402782),
            "TotalDeposits" : "11,402,782"
        },
        "ID" :{
            "fillKey" : color(3254799),
            "TotalDeposits" : "3,254,799"
        },
        "UT" :{
            "fillKey" : color(49076376),
            "TotalDeposits" : "49,076,376"
        },  
        "AZ" :{
            "fillKey" : color(163638397),
            "TotalDeposits" : "163,638,397"
        },  
        "CO" :{
            "fillKey" : color(65697351),
            "TotalDeposits" : "65,697,351"
        }, 
        "OK" :{
            "fillKey" : color(13387552),
            "TotalDeposits" : "13,387,552"
        },
        "TX" :{
            "fillKey" : color(862349641),
            "TotalDeposits" : "862,349,641"
        },
        "LA" :{
            "fillKey" : color(110606320),
            "TotalDeposits" : "110,606,320"
        },
        "GA" :{
            "fillKey" : color(8275489),
            "TotalDeposits" : "8,275,489"
        },
        "FL" :{
            "fillKey" : color(106377172),
            "TotalDeposits" : "106,377,172"
        },
        "IL" :{
            "fillKey" : color(499096999),
            "TotalDeposits" : "499,096,999"
        },
        "WI" :{
            "fillKey" : color(54919224),
            "TotalDeposits" : "54,919,224"
        },
        "MI" :{
            "fillKey" : color(220998719),
            "TotalDeposits" : "220,998,719"
        },
        "IN" :{
            "fillKey" : color(103095052),
            "TotalDeposits" : "103,095,052"
        },
        "OH" :{
            "fillKey" : color(6540036750),
            "TotalDeposits" : "6,540,036,750"
        },
        "KY" :{
            "fillKey" : color(34651838),
            "TotalDeposits" : "34,651,838"
        },
        "WV" :{
            "fillKey" : color(11906346),
            "TotalDeposits" : "11,906,346"
        },
        "NY" :{
            "fillKey" : color(2911194993),
            "TotalDeposits" : "2,911,194,993"
        },
        "CT" :{
            "fillKey" : color(30942188),
            "TotalDeposits" : "30,942,188"
        },
        "NJ" :{
            "fillKey" : color(96664014),
            "TotalDeposits" : "96,664,014"
        }
      }
      
      });
      election.labels();
      var l = {
        defaultFillName: "None",
        labels: {
            lessThan10Million: "<10mill",
            greaterThan10Million: ">10mill",
            greaterThanBillion: ">100mill"
        },
      };
      election.legend(l);
} 
 renderMap();
  function color(deposits){
      if(deposits<1000000){
          return "lessThanMillion";
      }
      if(deposits>1000000 && deposits<10000000){
        return "lessThan10Million";
    }
    if(deposits>10000000 && deposits<1000000000){
        return "greaterThan10Million";
    }
    if(deposits>1000000000){
        return "greaterThanBillion";
    }
  }
