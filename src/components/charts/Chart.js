import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";

const Charts = () => {

  const [values, setValues] = useState([[]]);
  const [names, setNames] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const url = 'http://localhost:8000/test';
      try {
        const response = await fetch(url);
        const data = await response.json();
        setValues(data.map((item) => console.log(item.values)));
        //console.log(data);
        setNames(data.map((item) => item.name));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  
  const series = [];

  for(let i = 0; i < values.length; i++){
    var obj = {};
    obj["name"] = names[i];
    obj["data"] = values[i];
    series.push(obj);
  }  
  const categories = [1, 2, 3, 4];

  const options = {
    chart: {
      type: 'bar',
      stacked: true,
      stackType: '100%'
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    title: {
      text: 'Статистика'
    },
    xaxis: {
      categories: categories,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40
    }
  }


  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="bar"
        height = "220"
        width="1050"
      />
    </div>
  );

}


export default Charts;