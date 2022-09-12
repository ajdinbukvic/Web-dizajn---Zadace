/************************************************
ZADACI ZA SAMOSTALNI RAD
************************************************/

const print = text => {
    console.log('%c' + text, 'color: black; background: orange; font-size: 20px');
}

/*1. Write a JavaScript function to clone an array.*/

const cloneArray = array => {
    return [...array];
}
const array = [1, 2, 3, 4];
const newArray = cloneArray(array);
print('Original array');
console.log(array);
print('Clone array');
console.log(newArray);

/*2. Write a JavaScript function to remove duplicate items from an array (5 and '5' are considered duplicates).*/

const removeDuplicate = array => {
    const tempArray = [];
    array.forEach(element => {
        if (!tempArray.includes(Number(element))) {
            tempArray.push(element);
        }
    });
    return tempArray;
}
const arrayWithDuplicates = [1, 2, 3, '2', 3, 2, '1', 3, '1', '3'];
print('Array with duplicates');
console.log(arrayWithDuplicates);
print('Array without duplicates');
console.log(removeDuplicate(arrayWithDuplicates));

/*3. Write a JavaScript function to merge two arrays and removes all duplicates elements.*/

const mergeAndRemoveDuplicate = (arrayOne, arrayTwo) => {
    const merged = [].concat(arrayOne, arrayTwo);
    print('Merged array with duplicates');
    console.log(merged);
    print('Merged array without duplicates');
    return removeDuplicate(merged);
}
const firstArray = [1, 2, 3, 4];
const secondArray = [3, 4, 5, 6];
print('First array');
console.log(firstArray);
print('Second array');
console.log(secondArray);
console.log(mergeAndRemoveDuplicate(firstArray, secondArray));

/*4. Write a JavaScript function to remove all odd numbers from array.*/

const removeOddNumbers = array => {
    const newArray = array.filter((element) => {
        return element % 2 === 0;
    });
    return newArray;
}
const arrayWithOddNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
print('Array with odd numbers');
console.log(arrayWithOddNumbers);
print('Array without odd numbers');
console.log(removeOddNumbers(arrayWithOddNumbers));

/*5. Write a JavaScript function to get a sum of a given array.*/

const sumOfArray = array => {
    let sum = 0;
    array.forEach(element => {
        sum += Number(element);
    });
    return sum;
}
const testArray = [1, 2, 3, 4, 5, 6];
print('Array');
console.log(testArray);
print('Sum of a given array');
console.log(sumOfArray(testArray));

/*6. Create a JavaScript objects array of Balkan countries with basic properties.*/

const countries = [
    {
        name: 'Bosnia and Herzegovina',
        capital: 'Sarajevo',
        population: 3249317,
        cities: ['Zenica', 'Tuzla', 'Mostar']
    },
    {
        name: 'Croatia',
        capital: 'Zagreb',
        population: 5059286,
        cities: ['Rijeka', 'Zadar', 'Split']
    },
    {
        name: 'Serbia',
        capital: 'Beograd',
        population: 8653016,
        cities: ['Novi sad', 'Leskovac', 'Zrenjanin']
    }
]

/*7. Create a JavaScript function that returns country with the most population (from task 6).*/

const mostPopulation = array => {
    return array.reduce((previousValue, currentValue) => {
        return (previousValue.population > currentValue.population) ? previousValue : currentValue;
    });
}
print('Country with the most population');
console.log(mostPopulation(countries));

/*8. Create a JavaScript function that returns counties that have population more than 5000000.*/

const populationMoreThan5M = array => {
    const max = 5000000;
    return array.filter((element) => {
        if (element.population > max) {
            return true;
        }
        return false;
    });
}
print('Countries with population more than 5M');
console.log(populationMoreThan5M(countries));

/*9. Create a JavaScript function that returns all city names. (from task 6).*/

const allCityNames = array => {
    return array.map((element) => {
        return element.cities;
    });
}
print('All city names');
console.log(allCityNames(countries));

/*10. Create a JavaScript function that returns all city names which begin with letter 'Z'. (from task 6).*/

const allNamesBeginWithZ = array => {
    const tempCities = [];
    array.filter((element) => {
        return element.cities.forEach(city => {
            if(city.startsWith('Z')) {
                tempCities.push(city);
            }
        });
    });
    return tempCities;
}
print('All city names which begin with letter Z');
console.log(allNamesBeginWithZ(countries));

/*---------------------------------------------------------------------------------------------
Pitanja, konsultacije i rješenja poslati na: amar.catovic2018@size.ba*/