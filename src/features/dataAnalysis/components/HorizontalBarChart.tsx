import React from 'react';
import { Bar } from 'react-chartjs-2';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  indexAxis: 'y' as const, // y축을 기준으로 수평 막대 차트를 생성합니다.
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const, // 범례 위치를 오른쪽으로 설정합니다.
    },
  },
};

const labels = ['수와 연산', '도형', '측정', '규칙성', '자료와 가능성'];

export const data = {
  labels,
  datasets: [
    {
      label: '영역',
      data: [2, 3, 4, 5, 4, 7, 8],
      backgroundColor: 'rgba(53, 162, 235, 0.5)', // 막대 색상을 설정합니다.
    },
  ],
};

const HorizontalBarChart = () => {
  return <Bar options={options} data={data} />;
};

export default HorizontalBarChart;
