import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ScriptableContext,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment'
import { IAreaChartProps } from '../../../common/types/assets';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const TestGraph = (props:IAreaChartProps ) => {
  const { data } = props;
  const options = {
    responsive: true,
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },

      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const values = {
    labels:data.map((element:number[])=> moment(element[0]).format('DD.MM.YY')),
    datasets: [
      {
        fill: 'start',
        label: 'Цена',
        data: data.map((element: number[]): number => {
          return element[1] as number;
        }),
        backgroundColor: (context: ScriptableContext<'line'>) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 180);
          gradient.addColorStop(0, '#C1EF00');
          gradient.addColorStop(1, '#232323');
          return gradient;
        },
      },
    ],
  };
  return <Line options={options} data={values} width={300} height={100} />;
};

export default TestGraph;
