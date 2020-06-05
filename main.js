const ulElement = document.querySelector('ul');

const setColumn = column => {
  setTimeout(async () => {
    await ulElement.insertAdjacentHTML('afterbegin', `<li>${column}</li>`);
  }, Math.random() * 5000);
};

const columns = [
  'Columna SKT_ID',
  'Columna Amount',
  'Columna Getway',
  'Columna Date',
  'Columna Issuer',
  'Columna User_id',
];

function showColumns() {
  for (let col = 0; col < columns.length; col++) {
    setColumn(columns[col]);
  }
}

showColumns();
