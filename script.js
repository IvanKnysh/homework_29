class Hamburger {
	constructor(size, staffing) {
		this.size = size;
		this.staffing = staffing;
		this.toppings = [];
	}

	static SIZE_SMALL = {
		price: 50,
		calories: 20,
	};

	static SIZE_BIG = {
		price: 100,
		calories: 40,
	};

	static STUFFING_CHEESE = {
		price: 10,
		calories: 20,
	};

	static STUFFING_SALAD = {
		price: 20,
		calories: 5,
	};

	static STUFFING_POTATO = {
		price: 15,
		calories: 10,
	};

	static TOPPING_MAYO = {
		price: 20,
		calories: 5,
	};

	static TOPPING_SAUGE = {
		price: 15,
		calories: 0,
	};

	addTopping(topping) {
		this.toppings.push(topping);
	}

	calculateCalories() {
		let calories = this.size.calories + this.staffing.calories;
		this.toppings.forEach((item) => (calories += item.calories));
		return calories;
	}

	calculatePrice() {
		let price = this.size.price + this.staffing.price;
		this.toppings.forEach((item) => (price += item.price));
		return price;
	}
}

const hamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_CHEESE);

document.write(
	'Користувач замовив гамбургер "SIZE_BIG" з додаванням "STUFFING_CHEESE". <br>'
);
document.write(
	"На цьому етапі гамбургер коштує - " +
		hamburger.calculatePrice() +
		" гривень. І містить " +
		hamburger.calculateCalories() +
		" калорій<br>"
);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

document.write(
	'Потім користувач додав "TOPPING_MAYO", і сума гамбургеру зросла до ' +
		hamburger.calculatePrice() +
		" гривень, а кількість калорій становила " +
		hamburger.calculateCalories() +
		". <br>"
);

hamburger.addTopping(Hamburger.TOPPING_SAUGE);

document.write(
	'Потім користувач додав "TOPPING_SAUGE", і сума гамбургеру зросла до ' +
		hamburger.calculatePrice() +
		" гривень. Кількість калорій не змінилась. <br>"
);

hamburger.addTopping(Hamburger.STUFFING_POTATO);

document.write(
	'Потім користувач додав "STUFFING_POTATO", і сума гамбургеру зросла до ' +
		hamburger.calculatePrice() +
		" гривень, а кількість калорій становила " +
		hamburger.calculateCalories() +
		". <br>"
);
