import React from 'react';
import Grid from '@mui/material/Grid';
import Chart from 'react-apexcharts';

const ChartCards = () => {

  var chart = {
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
                strokeColor: '#775DD0'
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
                strokeColor: '#775DD0'
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
                strokeColor: '#775DD0'
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
                strokeColor: '#775DD0'
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
                strokeColor: '#775DD0'
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
                strokeColor: '#775DD0'
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
                strokeColor: '#775DD0'
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
                strokeColor: '#775DD0'
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
      colors: ['#00E396'],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false,
        showForSingleSeries: true,
        customLegendItems: ['Actual', 'Expected'],
        markers: {
          fillColors: ['#00E396', '#775DD0']
        }
      }
    },
  };

  const cards = [
    {
      title: 'Responses',
      subtitle: '4.24M',
    },
    {
      title: 'Responses',
      subtitle: '4.24M',
    },
    {
      title: 'Responses',
      subtitle: '4.24M',
    },
    {
      title: 'Responses',
    }
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
                <Chart options={chart.options} series={chart.series} type="bar" height={290} />
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
};

export default ChartCards;
