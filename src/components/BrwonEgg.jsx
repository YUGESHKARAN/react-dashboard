import React from 'react'
import { Bar, Doughnut, Pie, Line, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Title, Tooltip, Legend);

function BrownEgg({product4}) {
  const xValues = product4.map(item => item.productName);
  const yValues = product4.map(item => item.price);
  const data = {
    labels: xValues,
    datasets: [
      {
        label: 'Price',
        data: yValues,
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
            font: {
                size: 8, // Change font size of y-axis
                weight: 'bold', // Optionally set the font weight
              },
          color: 'black',
        },
      },
    },
  };

  return (
    <div className="col-span-2 h-fit " >
    <h1 className='mb-3  font-bold'>Country Egg Products</h1>

    <div className=' rounded-lg shadow-xl p-2' style={{ width: '100%', height: '', margin: '0 auto' }}> 
    <Pie data={data} options={options} />

    </div>
   </div>
  )
}

export default BrownEgg