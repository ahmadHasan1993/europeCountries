var next = document.getElementById('next'),
	back = document.getElementById('back'),
	screenBox = document.getElementById('screen-content-box'),
	transNum = 0;

next.onclick = function() {
	if (transNum < 1000) {
		transNum = transNum + 500;
		screenBox.style.transform = 'translateX(-' + transNum + 'px)';
	}
};

back.onclick = function() {
	if (transNum > 0) {
		transNum = transNum - 500;
		screenBox.style.transform = 'translateX(-' + transNum + 'px)';
	}
};

///////////////////////////////////////////////////////

var myArray = [
	[ 'Albania', 'Tirana' ],
	[ 'Andorra', 'Andorra la Vella' ],
	[ 'Armenia', 'Yerevan' ],
	[ 'Austria', 'Vienna' ],
	[ 'Azerbaijan', 'Baku' ],
	[ 'Belarus', 'Minsk' ],
	[ 'Belgium', 'Brussels' ],
	[ 'Bosnia', 'Sarajevo' ],
	[ 'Bulgaria', 'Sofia' ],
	[ 'Croatia', 'Zagreb' ],
	[ 'Cyprus', 'Nicosia' ],
	[ 'Czechia', 'Prague' ],
	[ 'Denmark', 'Copenhagen' ],
	[ 'Estonia', 'Tallinn' ],
	[ 'Finland', 'Helsinki' ],
	[ 'France', 'Paris' ],
	[ 'Georgia', 'Tbilisi' ],
	[ 'Germany', 'Berlin' ],
	[ 'Greece', 'Athens' ],
	[ 'Hungary', 'Budapest' ],
	[ 'Iceland', 'Reykjavik' ],
	[ 'Ireland', 'Dublin' ],
	[ 'Italy', 'Rome' ],
	[ 'Kazakhstan', 'Pristina' ],
	[ 'Latvia', 'Riga' ],
	[ 'Lithuania', 'Vilnius' ],
	[ 'Luxembourg', 'Luxembourg' ],
	[ 'Malta', 'Valletta' ],
	[ 'Moldova', 'Chisinau' ],
	[ 'Monaco', 'Monaco' ],
	[ 'Montenegro', 'Podgorica' ],
	[ 'Netherlands', 'Amsterdam' ],
	[ 'Norway', 'Oslo' ],
	[ 'Poland', 'Warsaw' ],
	[ 'Portugal', 'Lisbon' ],
	[ 'Romania', 'Bucharest' ],
	[ 'Russia', 'Moscow' ],
	[ 'San Marino', 'San Marino' ],
	[ 'Serbia', 'Belgrade' ],
	[ 'Slovakia', 'Bratislava' ],
	[ 'Slovenia', 'Ljubljana' ],
	[ 'Spain', 'Madrid' ],
	[ 'Sweden', 'Stockholm' ],
	[ 'Switzerland', 'Bern' ],
	[ 'Ukraine', 'Kyiv' ],
	[ 'Uni-Kingdom', 'London' ]
];
console.log(myArray.length);

var dataShow = document.getElementById('dataShow'),
	dataCancel = document.getElementById('dataCancel'),
	screenContent1 = document.getElementById('screen-content1'),
	screenContent2 = document.getElementById('screen-content2'),
	screenContent3 = document.getElementById('screen-content3'),
	container1 = document.getElementById('container1'),
	dataShowCountry = document.getElementById('dataShow-country'),
	dataShowCapital = document.getElementById('dataShow-capital');

let blocks1 = Array.from(screenContent1.children);
let range1 = Array.from(Array(blocks1, length).keys());

blocks1.forEach((block, index) => {
	block.addEventListener('click', function() {
		dataShow.classList.add('dataShow');
		dataShow.classList.remove('datahide');

		dataCancel.classList.add('dataCancel');
		var time = setInterval(function() {
			dataCancel.classList.remove('dataCancelNon');
			dataShowCountry.classList.remove('dataCancelNon');
			dataShowCapital.classList.remove('dataCancelNon');
			clearInterval(time);
		}, 700);

		dataShowCountry.innerHTML = myArray[index][0];
		dataShowCapital.innerHTML = myArray[index][1];
	});
});

let blocks2 = Array.from(screenContent2.children);
let range2 = Array.from(Array(blocks2, length).keys());

blocks2.forEach((block, index) => {
	block.addEventListener('click', function() {
		dataShow.classList.add('dataShow');
		dataShow.classList.remove('datahide');

		dataCancel.classList.add('dataCancel');
		var time = setInterval(function() {
			dataCancel.classList.remove('dataCancelNon');
			dataShowCountry.classList.remove('dataCancelNon');
			dataShowCapital.classList.remove('dataCancelNon');
			clearInterval(time);
		}, 700);

		dataShowCountry.innerHTML = myArray[index + 16][0];
		dataShowCapital.innerHTML = myArray[index + 16][1];
	});
});

let blocks3 = Array.from(screenContent3.children);
let range4 = Array.from(Array(blocks3, length).keys());

blocks3.forEach((block, index) => {
	block.addEventListener('click', function() {
		dataShow.classList.add('dataShow');
		dataShow.classList.remove('datahide');

		dataCancel.classList.add('dataCancel');
		var time = setInterval(function() {
			dataCancel.classList.remove('dataCancelNon');
			dataShowCountry.classList.remove('dataCancelNon');
			dataShowCapital.classList.remove('dataCancelNon');
			clearInterval(time);
		}, 700);

		dataShowCountry.innerHTML = myArray[index + 32][0];
		dataShowCapital.innerHTML = myArray[index + 32][1];
	});
});

dataCancel.onclick = function() {
	dataShow.classList.add('datahide');
	dataShow.classList.remove('dataShow');

	dataCancel.classList.add('dataCancelNon');
	dataShowCountry.classList.add('dataCancelNon');
	dataShowCapital.classList.add('dataCancelNon');
	dataCancel.classList.remove('dataCancel');

	dataShow.style.zIndex = '1';
};

//////////////////////////////
////////// play /////////////////

var playArray = [];

/// select capital //////
var capitalArray = [],
	selectedCapital1,
	selectedCapital2;

function getSeletCapitals(trueCapital) {
	capitalArray.splice(0);
	for (var y = 0; y < myArray.length; y++) {
		capitalArray[y] = y;
	}

	capitalArray.splice(trueCapital, 1);

	var a = Math.floor(Math.random() * capitalArray.length);
	selectedCapital1 = capitalArray[a];
	capitalArray.splice(a, 1);
	var b = Math.floor(Math.random() * capitalArray.length);
	selectedCapital2 = capitalArray[b];
}

function getFullArray() {
	for (var x = 0; x < myArray.length; x++) {
		playArray[x] = x;
	}
}

function getPLay() {
	if (playArray.length != 0) {
		var i = Math.floor(Math.random() * playArray.length);
		var x = playArray[i];
		container2ShowCountry.textContent = myArray[x][0];

		getSeletCapitals(x);

		//////////// get shuffle
		var shuffleArray = [ myArray[x][1], myArray[selectedCapital1][1], myArray[selectedCapital2][1] ];

		var selectItem1 = Math.floor(Math.random() * shuffleArray.length);
		capital1.textContent = shuffleArray[selectItem1];
		shuffleArray.splice(selectItem1, 1);

		var selectItem2 = Math.floor(Math.random() * shuffleArray.length);
		capital2.textContent = shuffleArray[selectItem2];
		shuffleArray.splice(selectItem2, 1);

		var selectItem3 = Math.floor(Math.random() * shuffleArray.length);
		capital3.textContent = shuffleArray[selectItem3];
		shuffleArray.splice(selectItem3, 1);

		///////// if correct //////////////
		let ifCorrect = Array.from(sectionCapitals.children);
		let ifCorrectRange = Array.from(Array(ifCorrect, length).keys());

		ifCorrect.forEach((shoosed, index) => {
			shoosed.addEventListener('click', function() {
				var gg = shoosed.textContent;
				var gg2 = myArray[x][1];

				if (shoosed.textContent == myArray[x][1]) {
					shoosed.style.backgroundColor = '#7f7';
					shoosed.style.boxShadow = '0 0 10px #5f5, 0 0 40px #0f0';
				} else {
					shoosed.style.backgroundColor = '#f00';
					shoosed.style.boxShadow = '0 0 10px #f00, 0 0 40px #f00';
				}
			});
		});

		playArray.splice(i, 1);
	} else {
		result.classList.add('container2-result');
		result.textContent = 'finished';
	}
}

/* console.log(Math.floor(Math.random() * playArray.length)); */

var container2 = document.getElementById('container2'),
	play = document.getElementById('play'),
	container2ShowCountry = document.getElementById('container2-show-country'),
	capital1 = document.getElementById('container2-show-capital1'),
	capital2 = document.getElementById('container2-show-capital2'),
	capital3 = document.getElementById('container2-show-capital3'),
	next = document.getElementById('container2-show-next'),
	windowClose = document.getElementById('window-close'),
	result = document.getElementById('result'),
	sectionCapitals = document.getElementById('section-capitals');

play.onclick = function() {
	getFullArray();
	getPLay();

	container2.classList.add('container2-show');
	container2.classList.remove('container2-hide');

	var time2 = setInterval(function() {
		container2ShowCountry.classList.remove('dataCancelNon');
		capital1.classList.remove('dataCancelNon');
		capital2.classList.remove('dataCancelNon');
		capital3.classList.remove('dataCancelNon');
		next.classList.remove('dataCancelNon');
		windowClose.classList.remove('dataCancelNon');

		clearInterval(time2);
	}, 800);
};

windowClose.onclick = function() {
	container2.classList.add('container2-hide');
	container2.classList.remove('container2-show');

	container2ShowCountry.classList.add('dataCancelNon');
	capital1.classList.add('dataCancelNon');
	capital2.classList.add('dataCancelNon');
	capital3.classList.add('dataCancelNon');
	next.classList.add('dataCancelNon');
	windowClose.classList.add('dataCancelNon');
	result.classList.remove('container2-result');
	result.textContent = '';

	capital1.style.backgroundColor = '#111';
	capital1.style.boxShadow = 'none';
	capital2.style.backgroundColor = '#111';
	capital2.style.boxShadow = 'none';
	capital3.style.backgroundColor = '#111';
	capital3.style.boxShadow = 'none';
};

next.onclick = function() {
	getPLay();
	capital1.style.backgroundColor = '#111';
	capital1.style.boxShadow = 'none';
	capital2.style.backgroundColor = '#111';
	capital2.style.boxShadow = 'none';
	capital3.style.backgroundColor = '#111';
	capital3.style.boxShadow = 'none';
};

////////// give informations
for (var x = 0; x < 16; x++) {
	blocks1[x].children[1].textContent = myArray[x][0];
}

for (var x = 0; x < 16; x++) {
	blocks2[x].children[1].textContent = myArray[x + 16][0];
}

for (var x = 0; x < 14; x++) {
	blocks3[x].children[1].textContent = myArray[x + 32][0];
}
