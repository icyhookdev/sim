import React from 'react';
import data from './data.json';
import ChartJs from './components/Charts';
import getDataByStatus from './helper/getDataByStatus';
import getDataByDate from './helper/getDataByDate';

const App = () => {
  const statusData = getDataByStatus(data);
  const datesData = getDataByDate(data);
  return (
    <>
      <ChartJs type="pie" title="Suma total por status" data={statusData} />
      <ChartJs type="line" title="Suma total de items" data={datesData} />
    </>
  );
};

export default App;
