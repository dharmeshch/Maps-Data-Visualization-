function renderMap2(){
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
            return '<div class="hoverinfo">' + geography.properties.name + ' Average Deposits per Branch:' +  data.TotalDeposits + ' '
          },
          highlightBorderWidth: 3
        },
        
        fills: {
        'lessThan100k': '#EDDC4E',
        'lessThan500k': '#CC4731',
        'lessThan1Million': '#306596',
        'greaterThan1Million': '#ff8c00',
        // 'Thousands': '#CA5E5B',
        //'Light Republican': '#EAA9A8',
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
            "fillKey" : color1(386466.52),
            "TotalDeposits" : "386,466.52"
        }, 
        "OR" :{
            "fillKey" : color1(286467.48),
            "TotalDeposits" : "286,467.48"
        }, 
        "CA" :{
            "fillKey" : color1(553803.76),
            "TotalDeposits" : "553,803.76"
        },
        "NV" :{
            "fillKey" : color1(237557.95),
            "TotalDeposits" : "237,557.95"
        },
        "ID" :{
            "fillKey" : color1(162739.95),
            "TotalDeposits" : "162,739.95"
        },
        "UT" :{
            "fillKey" : color1(908821.77),
            "TotalDeposits" : "908,821.77"
        },  
        "AZ" :{
            "fillKey" : color1(639212.48),
            "TotalDeposits" : "639,212.48"
        },  
        "CO" :{
            "fillKey" : color1(576292.55),
            "TotalDeposits" : "576,292.55"
        }, 
        "OK" :{
            "fillKey" : color1(418361),
            "TotalDeposits" : "418,361"
        },
        "TX" :{
            "fillKey" : color1(1306590.36),
            "TotalDeposits" : "1,306,590.36"
        },
        "LA" :{
            "fillKey" : color1(718222.857),
            "TotalDeposits" : "718,222.857"
        },
        "GA" :{
            "fillKey" : color1(99704.686),
            "TotalDeposits" : "99,704.686"
        },
        "FL" :{
            "fillKey" : color1(268629.22),
            "TotalDeposits" : "268,629.22"
        },
        "IL" :{
            "fillKey" : color1(1345274.929),
            "TotalDeposits" : "1,345,274.929"
        },
        "WI" :{
            "fillKey" : color1(742151.67),
            "TotalDeposits" : "742,151.67"
        },
        "MI" :{
            "fillKey" : color1(898368.77),
            "TotalDeposits" : "898,368.77"
        },
        "IN" :{
            "fillKey" : color1(582457.92),
            "TotalDeposits" : "582,457.92"
        },
        "OH" :{
            "fillKey" : color1(8947497.36),
            "TotalDeposits" : "8,947,497.36"
        },
        "KY" :{
            "fillKey" : color1(558900.61),
            "TotalDeposits" : "558,900.61"
        },
        "WV" :{
            "fillKey" : color1(457936.38),
            "TotalDeposits" : "457,936.38"
        },
        "NY" :{
            "fillKey" : color1(3810464.65),
            "TotalDeposits" : "3,810,464.65"
        },
        "CT" :{
            "fillKey" : color1(618843.76),
            "TotalDeposits" : "618,843.76"
        },
        "NJ" :{
            "fillKey" : color1(443412.91),
            "TotalDeposits" : "443,412.91"
        }
      }
      
      });
      election.labels();
      var l = {
        defaultFillName: "None",
        labels: {
            lessThan100k: "<100k", 
            lessThan500k : "<500k",
            lessThan1Million: "<1mill",
            greaterThan1Million: ">1mill"
        },
      };
      election.legend(l);
}
//   renderMap2();
  function color1(deposits){
      if(deposits<100000){
          return "lessThan100k";
      }
      if(deposits>100000 && deposits<500000){
        return "lessThan500k";
    }
    if(deposits>500000 && deposits<1000000){
        return "lessThan1Million";
    }
    if(deposits>1000000){
        return "greaterThan1Million";
    }
  }
  
