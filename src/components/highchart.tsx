"use client";
import React, { useEffect } from "react";
import Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";
import VariablePie from "highcharts/modules/variable-pie";

// Initialize exporting module
Exporting(Highcharts);
VariablePie(Highcharts);

const ChartComp: React.FC = () => {
  useEffect(() => {
    Highcharts.chart("container", {
      chart: {
        type: "variablepie",
      },
      title: {
        text: "My total experience in 10+ year",
      },
      tooltip: {
        headerFormat: "",
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> <b>{point.name} {point.y} Year</b><br/>',
      },
      exporting: {
        // Disable the exporting buttons
        enabled: false,
      },
      credits: {
        enabled: false, // Hide the footer (Highcharts logo)
      },
      series: [
        {
          type: "variablepie",
          minPointSize: 10,
          innerSize: "20%",
          zMin: 0,
          name: "Countries",
          borderRadius: 5,
          data: [
            { name: "PostgreSQL (with Nextjs)", y: 1, z: 1 },
            { name: "Nodejs + Mongodb", y: 3, z: 3 },
            { name: "Tailwind", y: 6, z: 6 },
            { name: "Angular", y: 3, z: 3 },
            { name: "Nextjs", y: 7, z: 7 },
            { name: "Typescript", y: 7, z: 7 },
            { name: "React", y: 9, z: 9 },
            { name: "SAAS/LESS", y: 8, z: 8 },
            { name: "JavaScript", y: 9, z: 9 },
            { name: "Bootstrap", y: 9, z: 9 },
            { name: "HTML", y: 10, z: 10 },
            { name: "CSS", y: 10, z: 10 },
          ],
          colors: [
            "#315D8F",
            "#7CB602",
            "#37B7F0",
            "#D7022F",
            "#202020",
            "#3074BF",
            "#5ED3F3",
            "#C66593",
            "#EFD81D",
            "#780FF1",
            "#DC4A25",
            "#244BDD",
          ],
        },
      ],
    });
  }, []);

  return <div id="container" className="m-auto max-w-md" />;
};

export default ChartComp;
