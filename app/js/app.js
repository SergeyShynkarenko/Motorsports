import $ from 'jquery';
import popper from '@popperjs/core';
import bootstrap from 'bootstrap';


document.addEventListener('DOMContentLoaded', () => {

	// Hamburger

	document.querySelector('.hamburger').addEventListener('click', function () {
		document.querySelector('.hamburger--slider').classList.toggle('is-active');
		document.querySelector('.top__inner').classList.toggle('top__inner--active');
		document.querySelector('body').classList.toggle('hidden__body');
	});

	//Select

	// Полифилл для метода forEach для NodeList
	if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (let i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
	}

	document.querySelectorAll('.select__dropdown').forEach(function (dropDownWrapper) {

		const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
		const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
		const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
		const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
		

		// Клик по кнопке. Открыть/Закрыть select
		dropDownBtn.addEventListener('click', function () {
			dropDownList.classList.toggle('dropdown__list--visible');
			this.classList.toggle('dropdown__button--active');
		})

		// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
		dropDownListItems.forEach(function(listItem) {
			listItem.addEventListener('click', function (e) {
				e.stopPropagation();
				dropDownBtn.innerText = this.innerText;
				dropDownBtn.focus();
				dropDownBtn.classList.add('dropdown__button--selected');
				dropDownInput.value = this.dataset.value;
				dropDownList.classList.remove('dropdown__list--visible');
				dropDownBtn.classList.remove('dropdown__button--active');
			})
		})

		// Клик снаружи дропдауна. Закрыть дропдаун
		document.addEventListener('click', function (e) {
			if (e.target !== dropDownBtn) {
				dropDownBtn.classList.remove('dropdown__button--active')
				dropDownList.classList.remove('dropdown__list--visible');
			}
		})

		// Нажатие на Tab или Escape. Закрыть дропдаун
		document.addEventListener('keydown', function (e) {
			if (e.key === 'Tab' || e.key === 'Escape') {
				dropDownBtn.classList.remove('dropdown__button--active');
				dropDownList.classList.remove('dropdown__list--visible');
			}
		})
	});

	// Cards

	const cars = [
		{
			year: '2019',
			model: 'Volkswagen Tiguan',
			mileage: '19,855 km',
			type: 'Automatic',
			fuel: 'Diesel',
			price: '$34,888',
			img: '../images/dist/volkswagen-car.png',
			new: false,
			sold: false,
		},

		{
			year: '2014',
			model: 'Toyota Highlander XLE',
			mileage: '69,000 km',
			type: 'Automatic',
			fuel: 'Gas',
			price: '$27,875',
			img: '../images/dist/toyota-car.png',
			new: true,
			sold: false,
		},

		{
			year: '2017',
			model: 'Lexus RX 350 LUXURY',
			mileage: '39,850 km',
			type: 'Automatic',
			fuel: 'Gas',
			price: '$38,775',
			img: '../images/dist/lexus-car.png',
			new: false,
			sold: false,
		},

		{
			year: '2016',
			model: 'Toyota Highlander LE A...',
			mileage: '104,000 km',
			type: 'Automatic',
			fuel: 'Gas',
			price: '$23,728',
			img: '../images/dist/toyotaLe-car.png',
			new: false,
			sold: false,
		},

		{
			year: '2017',
			model: 'Hyundai Elantra',
			mileage: '95,000  km',
			type: 'Automatic',
			fuel: 'Gas',
			price: '$11,788',
			img: '../images/dist/hyundai-car.png',
			new: false,
			sold: false,
		},

		{
			year: '2016',
			model: 'Mercedes-Benz GLE-Cl...',
			mileage: '59,800 km',
			type: 'Automatic',
			fuel: 'Diesel',
			price: '$38,878',
			img: '../images/dist/mercedes-car.png',
			new: false,
			sold: false,
		},

		{
			year: '2015',
			model: 'Toyota Venza AWD XLE...',
			mileage: '99,000 km',
			type: 'Automatic',
			fuel: 'Gas',
			price: '$18,620',
			img: '../images/dist/toyotaVenzaSold-car.png',
			new: false,
			sold: true,
		},

		{
			year: '2016',
			model: 'Lexus RX 350 F-SPORT',
			mileage: '86,000 km',
			type: 'Automatic',
			fuel: 'Gas',
			price: '$34,888',
			img: '../images/dist/lexusSport-car.png',
			new: true,
			sold: false,
		},

		{
			year: '2019',
			model: 'Volkswagen Tiguan',
			mileage: '19,855 km',
			type: 'Automatic',
			fuel: 'Diesel',
			price: '$34,888',
			img: '../images/dist/volkswagen-car.png',
			new: false,
			sold: false,
		},

		{
			year: '2014',
			model: 'Toyota Highlander XLE',
			mileage: '69,000 km',
			type: 'Automatic',
			fuel: 'Gas',
			price: '$27,875',
			img: '../images/dist/toyota-car.png',
			new: false,
			sold: false,
		},

		{
			year: '2017',
			model: 'Lexus RX 350 LUXURY',
			mileage: '39,850 km',
			type: 'Automatic',
			fuel: 'Gas',
			price: '$38,775',
			img: '../images/dist/lexus-car.png',
			new: false,
			sold: false,
		},

		{
			year: '2016',
			model: 'Toyota Highlander LE A...',
			mileage: '104,000 km',
			type: 'Automatic',
			fuel: 'Gas',
			price: '$23,728',
			img: '../images/dist/toyotaLe-car.png',
			new: false,
			sold: false,
		},

		{
			year: '2019',
			model: 'Volkswagen Tiguan',
			mileage: '19,855 km',
			type: 'Automatic',
			fuel: 'Gas',
			price: '$34,888',
			img: '../images/dist/volkswagen-car.png',
			new: true,
			sold: false,
		},

		{
			year: '2014',
			model: 'Toyota Highlander XLE',
			mileage: '69,000 km',
			type: 'Automatic',
			fuel: 'Gas',
			price: '$27,875',
			img: '../images/dist/toyota-car.png',
			new: false,
			sold: false,
		},

		{
			year: '2017',
			model: 'Lexus RX 350 LUXURY',
			mileage: '39,850 km',
			type: 'Automatic',
			fuel: 'Gas',
			price: '$38,775',
			img: '../images/dist/lexus-car.png',
			new: false,
			sold: false,
		},

		{
			year: '2016',
			model: 'Toyota Highlander LE A...',
			mileage: '104,000 km',
			type: 'Automatic',
			fuel: 'Gas',
			price: '$23,728',
			img: '../images/dist/toyotaLe-car.png',
			new: false,
			sold: false,
		},

		{
			year: '2017',
			model: 'Hyundai Elantra',
			mileage: '95,000  km',
			type: 'Automatic',
			fuel: 'Gas',
			price: '$11,788',
			img: '../images/dist/hyundai-car.png',
			new: false,
			sold: false,
		},

		{
			year: '2016',
			model: 'Mercedes-Benz GLE-Cl...',
			mileage: '59,800 km',
			type: 'Automatic',
			fuel: 'Diesel',
			price: '$38,878',
			img: '../images/dist/mercedes-car.png',
			new: false,
			sold: false,
		},

		{
			year: '2015',
			model: 'Toyota Venza AWD XLE...',
			mileage: '99,000 km',
			type: 'Automatic',
			fuel: 'Gas',
			price: '$18,620',
			img: '../images/dist/toyotaVenza-car.png',
			new: false,
			sold: false,
		},

		{
			year: '2016',
			model: 'Lexus RX 350 F-SPORT',
			mileage: '86,000 km',
			type: 'Automatic',
			fuel: 'Gas',
			price: '$34,888',
			img: '../images/dist/lexusSport-car.png',
			new: true,
			sold: false,
		},

		{
			year: '2019',
			model: 'Volkswagen Tiguan',
			mileage: '19,855 km',
			type: 'Automatic',
			fuel: 'Diesel',
			price: '$34,888',
			img: '../images/dist/volkswagen-car.png',
			new: false,
			sold: false,
		},

		{
			year: '2014',
			model: 'Toyota Highlander XLE',
			mileage: '69,000 km',
			type: 'Automatic',
			fuel: 'Gas',
			price: '$27,875',
			img: '../images/dist/toyota-car.png',
			new: false,
			sold: false,
		}

	]

	document.querySelector('.cards__cars').innerHTML = cars.map(car => {
		const isSoldClass = car.sold ? 'sold' : ''

		return (
			`<div class="col-sm-6 col-md-4 col-xl-3">
				<div class="car__item ${isSoldClass}">	

					<div class="item__top">
						<img class="top__img"src="${car.img}" alt="Car">
						${car.new ? '<div class="top__new">New</div>' : ""}
						${car.sold ? '<div class="top__sold">Sold</div>' : ""}
					</div>
			

					<div class="item__info">
						<div class="info__top">
							<span class="top__year">${car.year}</span>
							<h6 class="top__model">${car.model}</h6>
						</div>
						<div class="info__content">
							<span>${car.mileage}</span>
							<span>${car.type}</span>
							<span>${car.fuel}</span>
						</div>
						<h5 class="info__price">${car.price}</h5>
					</div>
				</div>
			</div>
		`)}

	).join('')

})
