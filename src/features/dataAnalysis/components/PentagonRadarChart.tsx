import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, Filler, Legend, LineElement, PointElement, RadialLinearScale, Tooltip } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export const data = {
  labels: ['수와 연산', '도형', '측정', '규칙성', '자료와 가능성'],
  datasets: [
    {
      label: '수학 영역별 분석',
      data: [20, 9, 3, 5, 2],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      borderColor: 'rgba(0, 70, 116, 0.5)',
      borderWidth: 1,
    },
  ],
};

const PentagonRadarChart = () => {
  return <Radar data={data} />;
};
export default PentagonRadarChart;
