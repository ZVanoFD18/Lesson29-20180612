'use strict';
window.onload = doSelect;

function doSelect() {
	let taskIndex = +prompt("Укажите № задачи для выполнения", 1);;
	let functionName = 'doTask' + taskIndex;
	if (eval("typeof " + functionName) === 'function') {
		eval(functionName + '()');
		setTimeout(doSelect, 100);
	} else {
		alert('Завершение работы.')
	}
}
/*Сделайте функцию, которая возвращает куб числа. Число передается параметром.*/
function doTask1() {
	alert('Task 1.');
	let num = +prompt('Введите число для возведения в куб');
	let res = cube(num);
	let resText = "Число " + num + " в кубе равно " + res;
	alert(resText);
	log2document(resText);

	function cube(val) {
		return val * val * val;
	}
}
/*Сделайте функцию, которая возвращает квадрат числа. Число передается параметром. */
function doTask2() {
	alert('Task 2.');
	let num = +prompt('Введите число для возведения в квадрат');
	let res = square(num);
	let resText = "Число " + num + " в квадрате равно " + res;
	alert(resText);
	log2document(resText);

	function square(val) {
		return val * val;
	}
}
/*Сделайте функцию, которая возвращает сумму двух чисел.*/
function doTask3() {
	alert('Task 3.');
	let vluesStr = prompt('Введите числа через пробел для получения их суммы:');
	let values = (vluesStr || '').split(' ');
	let sum = 0;
	values.forEach(function(val) {
		let valNum = +val;
		if (isNaN(valNum)) {
			alert('Значение "' + val + '" не является числом.');
			return;
		}
		sum += valNum;
	})
	let resText = '"Сумма чисел "' + vluesStr + '" равна "' + sum;
	alert(resText);
	log2document(resText);
}
/*Сделайте функцию, которая отнимает от первого числа второе и делит на третье.*/
function doTask4() {
	alert('Task 4.');
	let resText = 'Will be set later...';
	let vluesStr = prompt(
		'Введите 3 числа через пробел для вычисления (val1 - val2)/val3:');
	let values = (vluesStr || '').split(' ');
	if (values.length !== 3) {
		resText = 'Ошибка! Ожидаем 3 значения.'
	} else if ( //
		/*Вариант проверки 1. Перебираем все элементы */
		// (function isInvalidValues(refValues) {
		// 	let result = false;
		// 	refValues.forEach(function(val) {
		// 		let valNum = +val;
		// 		if (isNaN(valNum)) {
		// 			resText = 'Значение "' + val + '" не является числом.';
		// 			result = true;
		// 		}
		// 	});
		// 	return result;
		// }).call(this, values) //
		/*Вариант проверки 2. Перебираем элементы до тех пор, пока не встретим ошибочный.
		Преимущества :
		1. не делаем лишних итераций;
		2. можем обойтись без техники "вызов функции на месте", которая делает код менее читабельным;
		*/
		values.some(function(val) {
			let valNum = +val;
			if (isNaN(valNum)) {
				resText = 'Значение "' + val + '" не является числом.';
				return true;
			}
		}) //
	) {
		// skip.
	} else {
		let result = (values[0] - values[1]) / values[2];
		resText = 'Результат выражения над значениями "' + vluesStr + '" = ' + result;
	}
	alert(resText);
	log2document(resText);
}
/**
 * Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
 **/
function doTask5() {
	alert('Task 5.');
	let resText = 'Will be set later...';
	let valueStr = prompt('Введите число от 1 до 7:'),
		valueNum = +valueStr;
	if (isNaN(valueNum)) {
		resText = 'Указанное значение "' + valueStr + '" не является числом';
	} else if (valueNum < 1 || valueNum > 7) {
		resText = 'Указанное значение "' + valueNum +
			'" не вне допустимого диапазона 1..7';
	} else {
		resText = 'Значению"' + valueNum + '" соответствует ' //
			+ ['Понедельник', 'Вторник', 'Среда', 'Четверг' //
				, 'Пятница', 'Суббота', 'Воскресенье' //
			][valueNum - 1];
	}
	alert(resText);
	log2document(resText);
}
/**
 * Написать функцию, которая принимает на вход два аргумента.
 * Если аргументы больше нуля, возвращаем их сумму.
 * Если оба меньше - разность. Если знаки разные - возвращаем 0
 **/
function doTask6() {
	alert('Task 6.');
	let resText = 'Will be set later...';
	let valuesStr = prompt('Введите 2 числа через пробел:'); //
	let values = (valuesStr || '').split(' ');
	if (values.length < 2) {
		resText = 'Ошибка! Введено недостаточно аргументов.';
	} else {
		resText = 'Результат task6GetResult(' + values[0] + ', ' + values[1] + ') = ' +
			task6GetResult(+values[0], +values[1])
	}

	function task6GetResult(arg1, arg2) {
		if (arg1 > 0 && arg2 > 0) {
			return arg1 + arg2;
		} else if (arg1 < 0 && arg2 < 0) {
			return arg1 - arg2;
		}
		return 0;
	}
	alert(resText);
	log2document(resText);
}
/**
 * Написать функцию, которая принимает 3 аргумента - числа, найти среди них
 * два максимальных, вывести в консоль
 **/
function doTask7() {
	alert('Task 7.');
	let resText = 'Will be set later...';
	let valuesStr = prompt('Введите 3 числа через пробел:'); //
	let values = (valuesStr || '').split(' ');
	if (values.length < 3) {
		resText = 'Ошибка! Введено недостаточно аргументов.';
	} else {
		resText = 'Результат task7GetResult(' + values.join(', ') + ') = ' +
			task7GetResult.apply(this, values);
	}

	function task7GetResult() {
		let resText = 'Will be set later...';
		let max1, max2;
		let args = new Array;
		// псевдомассив arguments не имеет метода forEach, пожтому по старинке
		for (var i = 0; i < arguments.length; i++) {
			let val = arguments[i];
			if (max1 === undefined) {
				max1 = val;
			} else if (max2 === undefined) {
				max2 = val;
			} else if (max1 < val) {
				max2 = max1;
				max1 = val;
			} else if (max2 < val) {
				max2 = val
			}
		}
		return 'max1=' + max1 + ', max2=' + max2;
	}
	alert(resText);
	log2document(resText);
}
/**
 * Написать функцию, которая принимает 3 аргумента - числа, найти среди них
 * два максимальных, вывести в консоль
 **/
function doTask8() {
	alert('Task 8.');
	let resText = 'Will be set later...';
	let valuesStr = prompt('Введите 2 числа через пробел:'); //
	let values = (valuesStr || '').split(' ');
	if (values.length < 2) {
		resText = 'Ошибка! Введено недостаточно аргументов.';
	} else {
		resText = 'Результат min(' + values.join(', ') + ') = ' + min.apply(this,
			values);
	}

	function min(val1, val2) {
		return val1 < val2 ? val1 : val2;
	}
	alert(resText);
	log2document(resText);
}
/**Добавляет текст в начало документа
 * @param {String} str - текст для добавления
 **/
function log2document(str) {
	log2document.counter = log2document.counter || 0;
	++log2document.counter;
	var div = document.createElement('div');
	div.innerHTML = '[' + log2document.counter + '] ' + str;
	document.body.insertBefore(div, document.body.firstChild);
}
