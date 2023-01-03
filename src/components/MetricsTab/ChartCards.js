import React from 'react';
import Grid from '@mui/material/Grid';
import Chart from 'react-apexcharts';

const ChartCards = () => {

  var barChart = {
    series: [
      {
        name: 'Actual',
        data: [
          {
            x: '2011',
            y: 1292,
            goals: [
              {
                name: 'Expected',
                value: 1400,
                strokeHeight: 5,
                strokeColor: '#A3A6ED'
              }
            ]
          },
          {
            x: '2012',
            y: 4432,
            goals: [
              {
                name: 'Expected',
                value: 5400,
                strokeHeight: 5,
                strokeColor: '#A3A6ED'
              }
            ]
          },
          {
            x: '2013',
            y: 5423,
            goals: [
              {
                name: 'Expected',
                value: 5200,
                strokeHeight: 5,
                strokeColor: '#A3A6ED'
              }
            ]
          },
          {
            x: '2014',
            y: 6653,
            goals: [
              {
                name: 'Expected',
                value: 6500,
                strokeHeight: 5,
                strokeColor: '#A3A6ED'
              }
            ]
          },
          {
            x: '2015',
            y: 8133,
            goals: [
              {
                name: 'Expected',
                value: 6600,
                strokeHeight: 13,
                strokeWidth: 0,
                strokeLineCap: 'round',
                strokeColor: '#A3A6ED'
              }
            ]
          },
          {
            x: '2016',
            y: 7132,
            goals: [
              {
                name: 'Expected',
                value: 7500,
                strokeHeight: 5,
                strokeColor: '#A3A6ED'
              }
            ]
          },
          {
            x: '2017',
            y: 7332,
            goals: [
              {
                name: 'Expected',
                value: 8700,
                strokeHeight: 5,
                strokeColor: '#A3A6ED'
              }
            ]
          },
          {
            x: '2018',
            y: 6553,
            goals: [
              {
                name: 'Expected',
                value: 7300,
                strokeHeight: 2,
                strokeDashArray: 2,
                strokeColor: '#A3A6ED'
              }
            ]
          }
        ]
      }
    ],
    options: {
      chart: {
        height: 290,
        type: 'bar',
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '60%'
        }
      },
      colors: ['#343AC8'],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false,
        showForSingleSeries: true,
        customLegendItems: ['Actual', 'Expected'],
        markers: {
          fillColors: ['#343AC8', '#A3A6ED']
        }
      }
    },
  };

  var lineChart = {
    series: [{
      name: "Optimism Mainnet",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    options: {
      chart: {
        height: 290,
        type: 'line',
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#343AC8'],
      stroke: {
        curve: 'straight'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    },
  };

  var rangeAreaChart = {
    series: [
      {
        name: 'Binance Mainnet',
        data: [
          {
            x: 'Jan',
            y: [-2, 4]
          },
          {
            x: 'Feb',
            y: [-1, 6]
          },
          {
            x: 'Mar',
            y: [3, 10]
          },
          {
            x: 'Apr',
            y: [8, 16]
          },
          {
            x: 'May',
            y: [13, 22]
          },
          {
            x: 'Jun',
            y: [18, 26]
          },
          {
            x: 'Jul',
            y: [21, 29]
          },
          {
            x: 'Aug',
            y: [21, 28]
          },
          {
            x: 'Sep',
            y: [17, 24]
          },
          {
            x: 'Oct',
            y: [11, 18]
          },
          {
            x: 'Nov',
            y: [6, 12]
          },
          {
            x: 'Dec',
            y: [1, 7]
          }
        ]
      }
    ],
    options: {
      chart: {
        height: 290,
        type: 'rangeArea',
        toolbar: {
          show: false
        },
      },
      stroke: {
        curve: 'straight'
      },
      colors:['#343AC8'],
      markers: {
        hover: {
          sizeOffset: 5
        }
      },
      dataLabels: {
        enabled: false
      },
    },
  };

  var barChart1 = {
    series: [{
      name: 'Data',
      data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
    }],
    options: {
      chart: {
        height: 290,
        type: 'bar',
        toolbar: {
          show: false
        },
      },
      colors:['#343AC8'],
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: '50%',
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2
      },
      
      grid: {
        row: {
          colors: ['#fff', '#f2f2f2']
        }
      },
      xaxis: {
        labels: {
          rotate: -45
        },
        categories: ['Polygon Mainnet (1)', 'Binance Mainnet (2)', 'Optimism Mainnet', 'Avalanche Mainnet (1)', 'Ethereum Mainnet (1)',
        'Polygon Mainnet (1)', 'Binance Mainnet (2)', 'Optimism Mainnet', 'Avalanche Mainnet (1)', 'Ethereum Mainnet (1)',
        'Polygon Mainnet (1)', 'Binance Mainnet (2)',
       ],
        tickPlacement: 'on'
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100]
        },
      }
    },
  };

  var areaChart = {
    series: [{
      name: 'Data',
      data: [31, 40, 28, 51, 42, 109, 100]
    }],
    options: {
      chart: {
        height: 290,
        type: 'area',
        toolbar: {
          show: false
        },
      },
      colors:['#343AC8'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },
  };

  var barchart2 = {
    series: [
      {
        name: 'Actual',
        data: [
          {
            x: '2011',
            y: 12,
            goals: [
              {
                name: 'Expected',
                value: 14,
                strokeWidth: 2,
                strokeDashArray: 2,
                strokeColor: '#A3A6ED'
              }
            ]
          },
          {
            x: '2012',
            y: 44,
            goals: [
              {
                name: 'Expected',
                value: 54,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: '#A3A6ED'
              }
            ]
          },
          {
            x: '2013',
            y: 54,
            goals: [
              {
                name: 'Expected',
                value: 52,
                strokeWidth: 10,
                strokeHeight: 0,
                strokeLineCap: 'round',
                strokeColor: '#A3A6ED'
              }
            ]
          },
          {
            x: '2014',
            y: 66,
            goals: [
              {
                name: 'Expected',
                value: 61,
                strokeWidth: 10,
                strokeHeight: 0,
                strokeLineCap: 'round',
                strokeColor: '#A3A6ED'
              }
            ]
          },
          {
            x: '2015',
            y: 81,
            goals: [
              {
                name: 'Expected',
                value: 66,
                strokeWidth: 10,
                strokeHeight: 0,
                strokeLineCap: 'round',
                strokeColor: '#A3A6ED'
              }
            ]
          },
          {
            x: '2016',
            y: 67,
            goals: [
              {
                name: 'Expected',
                value: 70,
                strokeWidth: 5,
                strokeHeight: 10,
                strokeColor: '#A3A6ED'
              }
            ]
          }
        ]
      }
    ],
    options: {
      chart: {
        height: 290,
        type: 'bar',
        toolbar: {
          show: false
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
        }
      },
      colors: ['#343AC8'],
      dataLabels: {
        formatter: function(val, opt) {
          const goals =
            opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex]
              .goals
      
          if (goals && goals.length) {
            return `${val} / ${goals[0].value}`
          }
          return val
        }
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        customLegendItems: ['Actual', 'Expected'],
        markers: {
          fillColors: ['#343AC8', '#A3A6ED']
        }
      }
    },
  };

  var pieChart = {
    series: [25, 15, 44, 55, 41, 17],
    options: {
      chart: {
        width: '100%',
        type: 'pie',
      },
      labels: ["Metis", "Harmony", "Moonbeam", "HECO", "Moonriver", "Optimism"],
      plotOptions: {
        pie: {
          dataLabels: {
            offset: -5
          }
        }
      },
      theme: {
        mode: 'light', 
        palette: 'palette1', 
        monochrome: {
          enabled: false,
          color: '#255aee',
          shadeTo: 'light',
          shadeIntensity: 0.65
        },
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 1,
        dashArray: 0,      
      },
      colors: '#343AC8',
      fill: {
        colors: ['#343AC8', "#A3A6ED", "#595ED5", "#FA989F", "#343AC8", "#7F5EB9"]
      },
      legend: {
        show: true,
        position: 'left',
        markers: {
          fillColors: ['#343AC8', "#A3A6ED", "#595ED5", "#FA989F", "#343AC8", "#7F5EB9"]
        }
      }
    },
  };

  var radialBar = {
    series: [76, 67, 61, 90],
    options: {
      chart: {
        height: 290,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            }
          }
        }
      },
      colors: ['#343AC8', "#A3A6ED", "#595ED5", "#FA989F", "#343AC8", "#7F5EB9"],
      labels: ["Metis", "Harmony", "HECO", "Moonriver"],
      legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'left',
        offsetX: 160,
        offsetY: 15,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0
        },
        formatter: function(seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
        },
        itemMargin: {
          vertical: 3
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
              show: false
          }
        }
      }]
    },
  };

  const cards = [
    {
      title: 'Responses',
      subtitle: '4.24M',
      chart: barChart,
      chartType: 'bar',
    },
    {
      title: 'Responses',
      subtitle: '4.24M',
      chart: lineChart,
      chartType: 'line',
    },
    {
      title: 'Responses',
      subtitle: '4.24M',
      chart: rangeAreaChart,
      chartType: 'rangeArea',
    },
    {
      title: 'Responses',
      chart: barChart1,
      chartType: 'bar',
    },
    {
      title: 'Responses',
      subtitle: '4.24M',
      chart: areaChart,
      chartType: 'area',
    },
    {
      title: 'Responses',
      subtitle: '4.24M',
      chart: barchart2,
      chartType: 'bar',
    },
    {
      title: 'Responses',
      subtitle: '4.24M',
      chart: pieChart,
      chartType: 'pie',
    },
    {
      title: 'Responses',
      subtitle: '4.24M',
      chart: radialBar,
      chartType: 'radialBar',
      height: 315
    },
  ];

  return (
    <div className="cards-wrap">
      <Grid container spacing={3}>
        {cards.map((item, i) => (
          <Grid item xs={12} lg={6} key={i}>
            <div className="card">
              <div className="card-head">
                <p className="title">{item.title}</p>
                {item.subtitle && <strong className="subtitle">{item.subtitle}</strong>}
              </div>
              <div className="graph-h">
                <Chart options={item.chart.options} series={item.chart.series} type={item.chartType} height={item.height ? item.height : 290} />
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
};

export default ChartCards;
