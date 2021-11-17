const sumAll = function(num1, num2) {
    if(num1 >0 && num2 >0){
     if(num1 !== NaN && num2 !== NaN){
          let i = num1;
            let a = 0;
             while(i < num2 +1){
                a += i;
                  i++;
              } return a
        } return "ERROR"
    }return "ERROR"
};


// Do not edit below this line
module.exports = sumAll;
