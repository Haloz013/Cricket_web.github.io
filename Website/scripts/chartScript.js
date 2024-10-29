$(document).ready(function(){


const ctx = document.getElementById('myChart').getContext('2d');


var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        '2011', '2012',
        '2013', '2014',
        '2015', '2016',
        '2017', '2018',
        '2019', '2020',
        '2021', '2022',
        '2023', '2024'
      ],
      datasets: [{
        label: 'Virat Kohli',
        borderColor: 'white',
		    backgroundColor: '#142464',
        data: [1381, 1026, 1268, 1054, 623, 739, 1460, 1202, 1377, 431, 129, 302, 1377, 58],
        borderWidth: 1,
        
      }, {
         //labels: ['2011', '2012', '2013', '2014', '2015', '2016','2017','2018','2019','2020','2021', '2022', '2023', '2024'],
        label: 'Rohit Sharma',
        borderColor: 'white',
		    backgroundColor: '#3c2cfb',
        data: [611, 168, 1196, 578, 815, 564, 1293, 1030, 1490, 171, 90, 249, 1255, 157],
        borderWidth: 1,
      }, {
        label: 'Glen Maxwell',
        borderColor: 'white',
		    backgroundColor: '#f01c90',
        data: [0, 310, 154, 577, 324, 400, 299, 235, 389, 206, 109, 90, 684, 0], 
        borderWidth: 1,
      }, {
        label: 'Joe Root',
        borderColor: 'white',
		    backgroundColor: '#9419c4',
        data: [0, 0, 607, 963, 738, 796, 983, 946, 838, 107, 28, 241, 137, 0], 
        borderWidth: 1,
      }],
    },
    	options: {
        plugins: {
      
    },
        animations: {
            
        },
        //plugins: [plugin],
        responsive: true,
        maintainAspectRatio: false, //maintains ratio of 1
        aspectRatio: 1,
        elements: {
          bar: {
            hoverBorderRadius: 5
          }
        },
		layout: {
			padding: 10 //chart padding
		},
		
		scales: {
			 x: {
                ticks: {
                    color: 'white' // Change X-axis label color
                }
            },
            y: {
                ticks: {
                    color: 'white' // Change Y-axis label color
                }
            }
		}
	}
  });

})