import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend 
} from 'chart.js';

// Register chart.js components
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend
);

function CountryChickenGraph({ product2 }) {
  const xValues = product2.map(item => item.productName);
  const yValues = product2.map(item => item.price);

  // Common data structure for all charts
  const data = {
    labels: xValues,
    datasets: [
      {
        label: 'Price',
        data: yValues,
        backgroundColor: [
            '#273c75',
            '#8c7ae6',
            '#c23616',
            '#40739e',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'white',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',  // Set this to 'y' to make the bars horizontal
    plugins: {
      legend: {
        display: false, // Remove the legend for cleaner display
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          color: 'black',
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'black',
        },
      },
    },
  };

  return (
    <div className="col-span-5 h-fit " >
    <h1 className='mb-3  font-bold'>Country meat Products</h1>

      {/* Horizontal Bar Chart */}
      <div className='rounded-lg shadow-xl p-2 mt-5' style={{ width: '100%', height: '', margin: '0 auto' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default CountryChickenGraph;
