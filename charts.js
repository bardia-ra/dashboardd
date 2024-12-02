var options = {
    series: [{
    name: 'Series A',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Series B',
    data: [46, 65, 81, 78, 67, 85, 71, 94, 74]
  }, {
    name: 'Series C',
    data: [65, 61, 56, 46, 65, 68, 72, 73, 61]
  }],
    chart: {
    type: 'bar',
    stacked: true,
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '15%',
      borderRadius: 0,
      borderRadiusApplication: 'end'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: ''
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "" + val + ""
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

  var options = {
    series: [67],
    chart: {
    height: 350,
    type: 'radialBar',
    offsetY: -10
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,
      dataLabels: {
        name: {
          fontSize: '12px',
          color: undefined,
          offsetY: 60
        },
        value: {
          offsetY: 26,
          fontSize: '16px',
          color: undefined,
          formatter: function (val) {
            return val + "%";
          }
        }
      }
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91]
    },
  },
  stroke: {
    dashArray: 4
  },
  labels: ['Series A'],
  };

  var chart = new ApexCharts(document.querySelector("#chartt"), options);
  chart.render();

  