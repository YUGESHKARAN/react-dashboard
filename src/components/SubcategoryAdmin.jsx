import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart.js components
ChartJS.register(ArcElement, Title, Tooltip, Legend);

function SubcategoryAdmin({ subcategory }) {
  const xValues = subcategory.map(item => item.subCategory);
  const yValues = subcategory.map(item => item.Count);

  // Define the data for the chart
  const data = {
    labels: xValues,
    datasets: [
      {
        data: yValues,
        backgroundColor: [
          '#273c75',
          '#8c7ae6',
          '#c23616',
          '#40739e',
          '#718093',
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
        display: true, // Remove the legend
      },
      title: {
        display: false,
        text: 'Sub Category',
      },
    },
  };

  return (
    <div className="lg:col-span-4 col-span-1  h-fit">
      <h1 className='mb-5 font-bold'>Sub Categories</h1>
      <div className='rounded-lg  shadow-xl p-2' style={{ width: '100%', margin: '0 auto' }}> 
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}

export default SubcategoryAdmin;
