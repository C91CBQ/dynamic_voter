var team1 = 0;
var team2 = 0;
var ctx1 = document.getElementById('myChart1').getContext('2d');
var chart1 = new Chart(ctx1, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ["正方", "反方"],
        datasets: [{
            label: "支持人数",
            backgroundColor: ['rgb(255, 99, 132)', 'rgb(69, 185, 235)'],
            data: [0, 0],
        }]
    },

    // Configuration options go here
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    fontSize: 15,
                    maxTicksLimit: 100,
                    stepSize: 5,
                    max: 80,
                },
                stacked: true
            }],
            yAxes: [{
                ticks: {
                    fontSize: 25,
                },
                stacked: true
            }]
        }
    }
});

function updateData(chart) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data = [Number(team1), Number(team2)];
    });
    chart.update();
}
var config = {
    apiKey: "AIzaSyD3OPzeOkSUAsNFLBAXiYEDWJnvYycV61c",
    authDomain: "dynamicvoter.firebaseapp.com",
    databaseURL: "https://dynamicvoter.firebaseio.com",
    projectId: "dynamicvoter",
    storageBucket: "dynamicvoter.appspot.com",
    messagingSenderId: "699923694587"
};
firebase.initializeApp(config);
var database = firebase.database();
var count = firebase.database().ref('users/');
count.on('value', function(snapshot) {
    team1 = 0;
    team2 = 0;
    var dataset = snapshot.val();
    for (var i in dataset) {
        if (dataset[i].team == "1") {
            team1 += 1;
        } else {
            team2 += 1
        }
    }
    updateData(chart1);
});




// var ctx2 = document.getElementById('myChart2').getContext('2d');
// var chart2 = new Chart(ctx2, {
//     // The type of chart we want to create
//     type: 'line',
//
//     // The data for our dataset
//     data: {
//         labels: ["03-12", "03-13", "03-14", "03-15", "03-16", "03-17", "03-18"],
//         datasets: [{
//             label: "Heart Rate and ",
//             fill: false,
//             // backgroundColor: 'rgb(0, 99, 132)',
//             borderColor: 'rgb(0, 99, 132)',
//             data: [67, 62, 55, 57, 67, 53, 70],
//         }]
//     },
//
//     // Configuration options go here
//     options: {
//         scales: {
//         yAxes: [{
//             ticks: {
//                 max: 150,
//                 beginAtZero: true
//             }
//         }]
//     }
//     }
// });
