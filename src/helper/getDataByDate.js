import generateRgb from './generateRgba';

const getDataByDate = data => {
  const datesData = {};
  const datesLabels = {};

  for (const key of data) {
    const dateKey = key.creation_date.replace(/\W/g, '_');
    if (!datesLabels[dateKey]) {
      datesLabels[dateKey] = 0;
    }
  }

  for (const key of data) {
    const dateKey = key.creation_date.replace(/\W/g, '_');

    if (datesData[key.status]) {
      datesData[key.status][dateKey] += 1;
    }

    if (!datesData[key.status]) {
      datesData[key.status] = {
        ...datesLabels,
      };
    }
  }
  const getDateKeys = () =>
    Object.keys(datesLabels).map(key => key.replace(/[_]/g, '/'));

  const onBuildChartData = () => {
    const BuiltData = Object.keys(datesData).map(key => {
      const color = generateRgb();
      return {
        label: key,
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: color,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: color,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: color,
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: Object.keys(datesData[key]).map(ntKey => datesData[key][ntKey]),
      };
    });

    return BuiltData;
  };
  onBuildChartData();
  const lineData = {
    labels: getDateKeys(),
    datasets: onBuildChartData(),
  };

  return lineData;
};

export default getDataByDate;
