import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryAdmin from '../Components/CategoryAdmin';
import SubcategoryAdmin from '../Components/SubcategoryAdmin';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import BroilerGraph from '../Components/BroilerGraph';
import CountryChickenGraph from '../Components/CountryChickenGraph';
import EggGraph from '../Components/EggGraph';
import BrownEgg from '../Components/BrwonEgg';
import LiquidGraph from '../Components/LiquidGraph';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Title, Tooltip, Legend);

function Dashboard() {

  const [products, setProducts] = useState([]);
  const [product1, setProduct1] = useState([]);
  const [product2, setProduct2] = useState([]);
  const [product3, setProduct3] = useState([]);
  const [product4, setProduct4] = useState([]);
  const [product5, setProduct5] = useState([]);
  const [category,setCategory] = useState([]);
  const [subcategory,setSubCategory] = useState([]);

  const getProductData = async () => {
    try {
      const response = await axios.get('https://flask-tan-zeta.vercel.app/product-analysis');
      console.log('flask response', response.data);
      setCategory( response.data.category_analysis.category);
      setSubCategory(response.data.category_analysis.subcategory);
      setProduct1(response.data.product_analysis.broiler);
      setProduct2(response.data.product_analysis.country);
      setProduct3(response.data.product_analysis.egg);
      setProduct4(response.data.product_analysis.country_egg);
      setProduct5(response.data.product_analysis.liquids);
    } catch (err) {
      console.log('error', err);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  console.log("sub category",subcategory)
    
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


  console.log('p name',product3)

  

  return (
    <div className="w-full p-0 m-0 grid lg:grid-cols-6 h-screen">
      <div className="col-span-1 lg:flex hidden bg-[#273c75] pt-10 flex-col h-screen ">
        <p className="w-full h-24 text-white transition-all duration-200 border-b hover:bg-[#487eb0] cursor-pointer p-3 flex items-center justify-center">
          Content 1
        </p>
        <p className="w-full h-24 text-white transition-all duration-200 border-b hover:bg-[#487eb0] cursor-pointer p-3 flex items-center justify-center">
          Content 2
        </p>
        <p className="w-full h-24 text-white transition-all duration-200 border-b hover:bg-[#487eb0] cursor-pointer p-3 flex items-center justify-center">
          Content 3
        </p>
        <p className="w-full h-24 text-white transition-all duration-200 border-b hover:bg-[#487eb0] cursor-pointer p-3 flex items-center justify-center">
          Content 4
        </p>
      </div>

      <div className="lg:col-span-5 h-screen overflow-y-auto px-5">
        <h1 className="text-left text-3xl font-semibold mb-2">Dashboard</h1>
        <div className="w-full  gap-5 flex flex-col lg:grid lg:grid-cols-10">
    
        <CategoryAdmin dataCategory={category}/>
  
        <div className='hidden lg:col-span-1'></div>
       
        <SubcategoryAdmin subcategory={subcategory}/>
        
        <BroilerGraph product1={product1}/>
          
        <EggGraph product3={product3}/>
        <BrownEgg product4={product4}/>
        <CountryChickenGraph product2={product2}/>
      
        <LiquidGraph product5={product5}/>
        </div>

        

      </div>
    </div>
  );
}

export default Dashboard;
