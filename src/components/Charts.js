import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { ChartContainer, ChartTitle } from './Charts.style';

const ChartJs = ({ type, data, title }) => (
  <ChartContainer>
    <ChartTitle>{title}</ChartTitle>
    {type === 'pie' && (
      <Pie
        data={data}
        width={100}
        height={200}
        options={{ maintainAspectRatio: false }}
      />
    )}
    {type === 'line' && (
      <Line
        data={data}
        width={100}
        height={200}
        options={{ maintainAspectRatio: false, fontSize: 25 }}
      />
    )}
    {type === 'bar' && (
      <Bar
        data={data}
        width={100}
        height={200}
        options={{ maintainAspectRatio: false }}
      />
    )}
  </ChartContainer>
);

ChartJs.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.object,
};
export default ChartJs;
