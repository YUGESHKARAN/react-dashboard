import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar,Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function CategoryAdmin({dataCategory}) {
    const xValues = dataCategory.map(item => item.category);
    const yValues = dataCategory.map(item => item.Count);
      // Define the data for the chart
  const data = {
    labels: xValues,
    datasets: [
      {
       
        data: yValues,
        backgroundColor: [
          '#192a56',
          '#079992',
          '#3c6382',
          'rgba(75, 192, 192, 0.2)',
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
  // Define the options for the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
          display: false, // Remove the legend
        },
        title: {
          display: false,
          text: 'Monthly Sales for 2024',
        },
      },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Remove the grid lines on the y-axis
        },
        ticks: {
          color: 'black', // Change the font color of the y-axis
        },
      },
      x: {
        grid: {
          display: false, // Remove the grid lines on the x-axis
        },
        ticks: {
            font: {
                size: 10, // Change font size of y-axis
                weight: 'bold', // Optionally set the font weight
              },
            color: 'black', // Change the font color of the y-axis
          },
      },
    },
  };
  console.log('chart data',dataCategory)
  return (
    <div className="lg:col-span-4 h-fit " >
        <h1 className='mb-5 font-bold'>Categories</h1>

        <div className=' rounded-lg shadow-xl p-2' style={{ width: '100%', height: '', margin: '0 auto' }}> 
        <Bar data={data} options={options} />

        </div>
    </div>
  )
}

export default CategoryAdmin