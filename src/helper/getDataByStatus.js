const getDataByStatus = data => {
  const status = {};

  for (const key of data) {
    if (status[key.status]) {
      status[key.status] += parseFloat(
        key.total_amount.replace(/[^0-9.]/g, '')
      );
    }
    if (!status[key.status]) {
      status[key.status] = parseFloat(key.total_amount.replace(/[^0-9.]/g, ''));
    }
  }

  const getKeyValues = () => {
    const keys = Object.keys(status);
    return keys.map(key =>
      new Intl.NumberFormat('de-DE').format(status[key].toFixed(0))
    );
  };

  const chartData = {
    labels: Object.keys(status),
    datasets: [
      {
        label: 'Status',
        data: getKeyValues(),
        backgroundColor: [
          'rgba(255, 206, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
        ],
      },
    ],
  };

  return chartData;
};

export default getDataByStatus;
