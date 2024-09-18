'use client';
import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import VariablePie from 'highcharts/modules/variable-pie';

// Initialize exporting module
Exporting(Highcharts);
VariablePie(Highcharts);

const ChartComp: React.FC = () => {
  useEffect(() => {
    Highcharts.chart('container', {
      chart: {
        type: 'variablepie'
      },
      title: {
        text: 'My total experience in 10+ year'
      },
      tooltip: {
        headerFormat: '',
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> <b>{point.name} {point.y} Year</b><br/>'
      },
      exporting: {
        // Disable the exporting buttons
        enabled: false
      },
      credits: {
        enabled: false // Hide the footer (Highcharts logo)
      },
      series: [
        {
          type: 'variablepie',
          minPointSize: 10,
          innerSize: '20%',
          zMin: 0,
          name: 'Countries',
          borderRadius: 5,
          data: [
            { name: 'Nodejs + Mongodb', y: 1, z: 1 },
            { name: 'Tailwind', y: 2, z: 2 },
            { name: 'Angular', y: 3, z: 3 },
            { name: 'Nextjs', y: 5, z: 5 },
            { name: 'Typescript', y: 5, z: 5 },
            { name: 'React', y: 7, z: 7 },
            { name: 'SAAS/LESS', y: 7, z: 7 },
            { name: 'JavaScript', y: 8, z: 8 },
            { name: 'Bootstrap', y: 9, z: 9 },
            { name: 'HTML', y: 10, z: 10 },
            { name: 'CSS', y: 10, z: 10 }
          ],
          colors: [
            '#4caefe',
            '#3dc3e8',
            '#2dd9db',
            '#1feeaf',
            '#0ff3a0',
            '#00e887',
            '#23e274'
          ]
        }
      ]
    });
  }, []);

  return <div id="container" className="m-auto max-w-md" />;
};

export default ChartComp;
