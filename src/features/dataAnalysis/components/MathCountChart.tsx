import dynamic from 'next/dynamic';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

interface IMathCountChartProps {
  wrongCount: number;
  correctCount: number;
}

const MathCountChart = ({ wrongCount, correctCount }: IMathCountChartProps) => {
  const mathCountData = [
    { name: '맞은 문제 수', value: correctCount, fill: '#2D8CFF' },
    { name: '틀린 문제 수', value: wrongCount, fill: '#acd1ff' },
  ];

  return (
    <>
      <PieChart width={280} height={200}>
        <Pie data={mathCountData} dataKey="value" nameKey="name" innerRadius={60} outerRadius={80} cx={80} cy={100} />
        <Legend height={110} layout="vertical" verticalAlign="middle" align="right" iconSize={7} />
        <Tooltip />
      </PieChart>
    </>
  );
};

const DynamicMathCountChart = dynamic(() => Promise.resolve(MathCountChart), {
  ssr: false,
});

export default DynamicMathCountChart;
