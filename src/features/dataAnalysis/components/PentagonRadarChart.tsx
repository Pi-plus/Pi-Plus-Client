import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, Filler, Legend, LineElement, PointElement, RadialLinearScale, Tooltip } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const PentagonRadarChart = ({ data }: { data: number[] }) => {
  const mathData = {
    labels: ['수와 연산', '도형', '측정', '규칙성', '자료와 가능성'],
    datasets: [
      {
        label: '수학 영역별 분석',
        data,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgba(0, 70, 116, 0.5)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return <Radar data={mathData} options={options} />;
};
export default PentagonRadarChart;
