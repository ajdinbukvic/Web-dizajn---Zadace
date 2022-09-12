/************************************************
         ZADACI ZA SAMOSTALNI RAD
***********************************************

1. Write a JavaScript program to display the current day and time in the following format.
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38*/

const vrijeme = () => {
    let d = new Date();
    let dan = d.getDay();
    let dani = ['Pon', 'Uto', 'Sri', 'Cet', 'Pet', 'Sub', 'Ned'];
    let sat = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    console.log('Danas je: ', dani[dan-1])
    if(sat >= 12){
        console.log(`Vrijeme je: ${sat} PM : ${min} : ${sec}`)
    }
    else console.log(`Vrijeme je: ${sat+12} AM : ${min} : ${sec}`)
}
vrijeme();

/*2. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.*/

const povrsina = (a,b,c) => {
    let s = (a+b+c)/2;
    return Math.sqrt(s*(s-a)*(s-b)*(s-c));
}
console.log('Povrsina je?', povrsina(5,6,7));

/*3. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.*/

const prestupnaGodina = (godina) => {
    return (godina % 4 == 0) && (godina % 100 != 0 || godina % 400 == 0); 
}
console.log('Da li je 2000 prestupna?', prestupnaGodina(2000))
console.log('Da li je 2006 prestupna?', prestupnaGodina(2006))

/*4. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050*/

const januar = () => {
    const godine = [];
    for(let g = 2014; g < 2050; g++){
        let d = new Date(g,0,1);
        if(d.getDay() == 0)
            godine.push(g);
    }
    return godine;
}
console.log('Prvi januar je nedjelja godine?', januar())

/*5. Write a JavaScript program to calculate days left until next Christmas*/

const brojDana = () => {
    let d = new Date();
    let c = new Date(2022,11,25);
    return parseInt((c - d) / (1000 * 3600 * 24));
}
console.log(`Ostalo je jos ${brojDana()} dana.`)

/*6. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).*/

const izracunaj = () => {
    let a = prompt('Unesite prvi broj: '); 
    let b = prompt('Unesite drugi broj: '); 
    console.log('Proizvod je?', parseFloat(a*b))
    console.log('Kolicnik je?', parseFloat(a/b))
}
izracunaj();

/*7. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C*/

const CelUFar = (c) => {
    return c * 9 / 5 + 32;
}
const FarUCel = (f) => {
    return (f - 32) * 5 / 9;
}
console.log('60 Celzijusa u Farenhajte je?', CelUFar(60))
console.log('45 Farenhajta u Celzijuse je?', FarUCel(45))

/*8. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.*/

const suma = (a, b) => {
    if(a != b)
        console.log('Suma brojeva je?', (a+b))
    else console.log('Trostruka suma brojeva je?', 3*(a+b))
}
suma(13,17);
suma(8,8);

/*9. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19*/

const razlika = (x) => {
    if(x <= 19)
        console.log('Apsolutna razlika je?', Math.abs(19-x))
    else console.log('Trostruka apsolutna razlika je?', 3*Math.abs(19-x))
}
razlika(15);
razlika(26);

/*10. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.*/

const provjera = (a, b) => {
    return (a == 50 || b == 50) || (a + b == 50);
}
console.log('Da li je neki broj jednak 50 ili im je suma 50?', provjera(15,35))
console.log('Da li je neki broj jednak 50 ili im je suma 50?', provjera(30,50))
console.log('Da li je neki broj jednak 50 ili im je suma 50?', provjera(20,10))

/*---------------------------------------------------------------------------------------------
Pitanja, konsultacije i rješenja poslati na: amar.catovic2018@size.ba*/
