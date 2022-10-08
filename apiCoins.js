
const fetchCoins = async () => {
  try {
    const url = 'https://api.coincap.io/v2/assets';
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const perfectResponse = jsonResponse.data.map((moeda) => `${moeda.name} ${moeda.symbol}: ${moeda.priceUsd}`)
    console.log(perfectResponse)
  }
  catch(error) {
    console.log('Algo deu errado', error)
  }
};

fetchCoins();