


// this is the  kilometerToMeter function part.

function kilometerToMeter(n) {
    var meter = 0;
        meter = n * 1000;
            return meter;
}

var kiloToMeter = kilometerToMeter(20); 
console.log(kiloToMeter);  // by using console.log () function has been checked.


// this is the budgetCalculator  function part.

// w = w means wathch number,
// p = p means phone number,
// l = l means laptop number;

function budgetCalculator(w, p, l) {    
    var watchPrice  = 50;
        var phonePrice = 100;
            var laptopPrice = 500;

            var multiplicationWithAdd = (watchPrice * w)  + (phonePrice * p) + (laptopPrice * l);
        
            return multiplicationWithAdd;
                
}

var totalBudgetCost = budgetCalculator(15, 25, 20);
console.log(totalBudgetCost);           // by using console.log () function has been checked.




// this is the hotelCost part.

function hotelCost(stayingDays) {
    var stayingCost = 0;
        if( stayingDays <= 10) {
            stayingCost = stayingDays * 100;

    }else if(stayingDays <=20){
        var firstTermDays = 10 *100;
            var remainingDays = stayingDays -10;
                var secondTermDays = remainingDays * 80;
                    stayingCost = firstTermDays + secondTermDays;

    }
    else{
        var firstTermDays = 10 * 100;
            var secondTermDays = 10 * 80;
                var remainingDays = stayingDays - 20;
                    var thirdTermDays = remainingDays * 50;
                        stayingCost = firstTermDays + secondTermDays + thirdTermDays; 
                    }

        return stayingCost;

}
var totalStayingCost = hotelCost(40);
console.log(totalStayingCost);       // by using console.log () function has been checked.




// this is the megaFriend function part.

function megaFriend (arr){
    var largestName = arr[0];
        for(var i = 0; i < arr.length; i++){
            var element = arr[i];
                if (largestName.length < element.length){
                    largestName = element;
            
                }
       
        }
        return largestName;
}
var names = ["Salam",  "Barkat", "jabbar", "Abdul Matin"," Abul kalam azad", "Rafiq", "Jamir ali", "Nesar uddin" ];
var biggerName = megaFriend(names);
console.log(biggerName);    // by using console.log () function has been checked.