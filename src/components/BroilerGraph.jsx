import React from 'react'
import { Bar, Doughnut, Pie, Line, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Title, Tooltip, Legend);

function BroilerGraph({product1}) {
  const xValues = product1.map(item => item.productName);
  const yValues = product1.map(item => item.price);
  const data = {
    labels: xValues,
    datasets: [
      {
        label: 'Price',
        data: [30,40,20,50,20,10,50],
        backgroundColor: [
         '#192a56',
          '#079992',
          '#3c6382',
        '#c23616',
          '#40739e',
          '#718093',
          
        ],
        borderColor: [
          'white',],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Remove the legend for cleaner display
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          color: 'black',
        },
      },
      x: {
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
    <div className="col-span-3 h-fit " >
    <h1 className='mb-3  font-bold'>Broiler meat Products</h1>

    <div className=' rounded-lg shadow-xl p-2' style={{ width: '100%', height: '', margin: '0 auto' }}> 
    <Pie data={data} options={options} />

    </div>
   </div>
  )
}

export default BroilerGraph