const URL = 'https://api.adviceslip.com/advice';

const cardTitleElement = document.getElementById('card-title');
const cardTextElement = document.getElementById('card-text');
const buttonElement = document.getElementById('button');

const fetchData = async () => {
	const response = await fetch(URL);
	const data = await response.json();
	return data;
};
const printData = async () => {
	const data = await fetchData();
	cardTitleElement.textContent = `Advice #${data.slip.id}`;
	cardTextElement.textContent = data.slip.advice;
};

printData();

buttonElement.addEventListener('click', printData);

/* const thenFunction = number => {
	console.log(number);
};

const printDoubleNumber = number => {
	console.log(number * 2);
};
const catchAndPrint = err => console.log(err);

const request = url => fetch(url);

/// ASYNC AWAIT

const fetchData = async () => {
	const response = await request(' ../data/data.txt');
	const data = await response.json();
	console.log(data);
};

fetchData();
*/
/* request(' ../data/data.txt')
        .then(response => response.json())
        .then(data => printDoubleNumber(data))
        .catch(err => catchAndPrint(err));
        */
