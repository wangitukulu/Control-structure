// Control structures-if,else-if,and else

// Create a calculator to determine a user s water bill.

let letres_water = prompt("Please enter the amount of litres of water used");
let numberEl = Number(letres_water)
let kiloEl = numberEl/1000
let total = 0;



    if (kiloEl <= 6){
        total = kiloEl * 15.73; 
        console.log(total);
    }else if ( kiloEl > 6 && kiloEl <= 10.5){
        let firstCalculation = 6 * 15.73 ;
        let reduce = kiloEl - 6;
        let secondCalculation = reduce * 22.38;
        total = firstCalculation + secondCalculation;
        console.log(total)

    }else if (kiloEl > 10.5 && kiloEl <= 35){
        let firstCalculation = 6 * 15.73 ;
        let reduce = kiloEl - 6
        let secondCalculation = 4.5 * 22.38;
        let thirdCalculation = reduce - 4.5;
        let lastEl = thirdCalculation * 31.77
        total = firstCalculation + secondCalculation + lastEl;
        console.log(total);

    }else{
        let firstCalculation = 6 * 15.73 ;
        let reduce = kiloEl - 6;
        let secondCalculation = 4.5 * 22.38;
        let remainEl = reduce - 4.5;
        let thirdCalculation = reduce * 31.77; 
        let third = remainEl - 24.5;
        let fourthEl = third * 69.76;
        total = firstCalculation + secondCalculation + thirdCalculation + fourthEl;
        console.log(total);


        

    }



