import React from 'react';
import { Bar } from 'react-chartjs-2';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  indexAxis: 'y' as const,
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,
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
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const HorizontalBarChart = ({ data }: { data: number[] }) => {
  const mathData = {
    labels,
    datasets: [
      {
        label: '영역',
        data,
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Bar options={options} data={mathData} />;
};

export default HorizontalBarChart;
