const listaUl = document.getElementById('coins-list');

const adicionaLi = (valorMoeda) => {
  const CriaLi = document.createElement('li');
  CriaLi.innerText = valorMoeda;
  listaUl.appendChild(CriaLi);
  };

const fetchCoins = async () => {
  try {
    const url = 'https://api.coincap.io/v2/assets';
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const perfectResponse = jsonResponse.data.map((moeda) =>
    `${moeda.name} (${moeda.symbol}): ${Number(moeda.priceUsd).toFixed(2)}`);
    const justTenResponse = perfectResponse.slice(0, 10);
    justTenResponse.forEach((cryptomoeda) => adicionaLi(cryptomoeda));
    // console.log(perfectResponse)
  } catch (error) {
    console.log('Algo deu errado', error);
  }
};

fetchCoins();