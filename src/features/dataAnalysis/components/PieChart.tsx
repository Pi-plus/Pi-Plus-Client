import React from 'react';
import { Pie } from 'react-chartjs-2';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface IPieChartProps {
  activeCount: number;
  disableCount: number;
}
const PieChart = ({ activeCount, disableCount }: IPieChartProps) => {
  const data = {
    labels: ['남은 문제', '푼 문제'],
    datasets: [
      {
        label: '의 수',
        data: [disableCount, activeCount],
        backgroundColor: ['rgba(185, 185, 185, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['#5a5a5a', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };
  return <Pie data={data} />;
};
export default PieChart;
