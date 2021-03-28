  // Replace Math.random() with a pseudo-random number generator to get reproducible results in e2e tests
      // Based on https://gist.github.com/blixt/f17b47c62508be59987b
      var _seed = 42;
      Math.random = function() {
        _seed = _seed * 16807 % 2147483647;
        return (_seed - 1) / 2147483646;
      };

        var options = {
          series: [{
          name: 'Income',
          data: [10000, 34000, 44000, 23000, 40000, 83000,]
        }, {
          name: 'Expenses',
          data: [21000, 54000, 35000, 38000, 49000, 75000,]
        }],
          chart: {
          height: 250,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2020-10", "2020-11", "2020-12", "2021-01", "2021-02", "2021-03"]
        },
        tooltip: {
          x: {
            format: 'MM'
          },
        },
        };

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();