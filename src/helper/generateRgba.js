const generateRgb = () => {
  const num = () => Math.floor(Math.random() * 256);

  return `rgb(${num()}, ${num()}, ${num()})`;
};

export default generateRgb;
