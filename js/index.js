document.addEventListener("DOMContentLoaded", function () {

	const countryData = {
		"+380": {
			flag: "./resources/icons/Flag.svg",
			value: "+380",
			triangle: "./resources/icons/inverted-triangle.svg"
		},
		"+1": {
			flag: " ./resources/icons/usa-icons.png",
			value: "+1",
			triangle: "./resources/icons/inverted-triangle.svg"
		}
	};

	const dropdown = document.getElementById("countryDropdown");
	const selectedOption = dropdown.querySelector(".modal-selected-option");
	const optionsList = dropdown.querySelector(".modal-options-list");
	const listItems = optionsList.querySelectorAll("li");


	selectedOption.addEventListener("click", function () {
		optionsList.style.display = optionsList.style.display === "block" ? "none" : "block";
	});

	listItems.forEach(function (li) {
		li.addEventListener("click", function (e) {
			let selectedCode = li.getAttribute("data-value");
			let selectedData = countryData[selectedCode];
			let selectedValue = document.createElement("img");
			selectedValue.src = selectedData.flag;
			selectedValue.alt = "Country Flag";
			selectedValue.classList.add("modal-selected-option-img");
			let selectedFlag = document.createElement("div");
			selectedFlag.textContent = selectedData.value;
			selectedFlag.classList.add("modal-selected-option-number");
			let selectedTriangle = document.createElement("img");
			selectedTriangle.src = selectedData.triangle;
			selectedTriangle.alt = "Triangle";
			selectedTriangle.classList.add("modal-selected-triangle");
			
			selectedOption.innerHTML = "";
			selectedOption.appendChild(selectedValue);
			selectedOption.appendChild(selectedFlag);
			selectedOption.appendChild(selectedTriangle);
			optionsList.style.display = "none";
			updatePhoneNumber(selectedData.value);
		});
	});


	function updatePhoneNumber(value) {
		console.log("The country code is selected:" + value);
	}

	document.addEventListener("click", function (e) {
		if (!dropdown.contains(e.target)) {
			optionsList.style.display = "none";
		}
	});

	const promoBtn = document.querySelector('.promo-btn');
	const layer = document.querySelector('.layer');
	const btnExit = document.querySelector('.modal-button-exit');
	const body = document.body;

	promoBtn.addEventListener('click', function () {
		openModal();
	});

	btnExit.addEventListener('click', function () {
		closeModal();
	});

	function openModal() {
		layer.classList.add('layer-open');
		body.style.overflow = 'hidden';
	}

	function closeModal() {
		layer.classList.remove('layer-open');
		body.style.overflow = '';
	}

	setTimeout(function () {
		openModal();
	}, 7000);

	const form = document.querySelector("form[name='contact-form']");
	const nameInput = document.querySelector("input[name='name']");
	const phoneInput = document.querySelector("input[name='phone']");
	const phoneBox = document.querySelector(".modal-tel-box");
	const checkbox = document.querySelector("input[name='checkbox']");
	const privacy = document.querySelector(".modal-container-privacy");
	const containerItem = document.querySelector(".modal-container-item");
	const error = document.querySelector(".error-checkbox");


	nameInput.isValid = () => !!nameInput.value;
	phoneInput.isValid = () => isValidPhone(phoneInput.value);
	checkbox.isValid = () => checkbox.checked;

	const inputFields = [nameInput, phoneInput, checkbox];

	const isValidPhone = (phone) => {
		const re = /[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
		return re.test(String(phone).toLowerCase());
	};

	let shouldValidate = false;
	let isFormValid = false;

	const validateInputs = () => {
		console.log("we are here");
		if (!shouldValidate) return;

		isFormValid = true;
		inputFields.forEach((input) => {
			input.classList.remove("invalid");
			input.nextElementSibling.classList.add("hide");

			if (!input.isValid()) {
				input.classList.add("invalid");
				isFormValid = false;
				input.nextElementSibling.classList.remove("hide");
			}
		});

		if (!phoneInput.isValid()) {
			phoneBox.classList.add("invalid");
		} else {
			phoneBox.classList.remove("invalid");
		}

		if (!checkbox.isValid()) {
			privacy.classList.add("invalid-checkbox");
			error.classList.remove("hide");
		} else {
			privacy.classList.remove("invalid-checkbox");
			containerItem.classList.remove("hide");
			error.classList.add("hide");

		}
	};

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		shouldValidate = true;
		validateInputs();
		if (isFormValid) {
			console.log("happy");
			form.reset();
			alert("Thank you!");
			// TODO: DO AJAX REQUEST
		}
	});

	inputFields.forEach((input) => input.addEventListener("input", validateInputs));
});

$(document).ready(function () {
	$('.reasons-inner-carousel').slick({
		infinite: false,
		slidesToShow: 4.2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					arrows: true,
					slidesToScroll: 1,
					slidesToShow: 4

				}
			},
			{
				breakpoint: 1120,
				settings: {
					dots: true
				}
			},
			{
				breakpoint: 1060,
				settings: {
					slidesToScroll: 1,
					slidesToShow: 3.5,
					dots: true
				}
			},

			{
				breakpoint: 849,
				settings: {
					slidesToScroll: 1,
					slidesToShow: 3,
					dots: true
				}
			},
			{
				breakpoint: 701,
				settings: {
					slidesToScroll: 1,
					slidesToShow: 2,
					dots: true
				}
			},
			{
				breakpoint: 504,
				settings: {
					slidesToScroll: 1,
					slidesToShow: 1.4,
					dots: true
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToScroll: 1,
					slidesToShow: 1,
					dots: true
				}
			}
		]
	});
});

