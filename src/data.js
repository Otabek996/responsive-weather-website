const link =
  "http://api.weatherapi.com/v1/forecast.json?key=8b684208e7b74e8592c102618231904&q=Tashkent&days=1&aqi=yes&alerts=no";

const fetchData = async () => {
  const result = await fetch(`${link}`);
  const data = await result.json();

  console.log(data);
};

export default fetchData;
