const Bamadash = {
    calc(operand1, operand2, operator) {
        if(typeof(operand1)=="number"&&typeof(operand2)=="number"){
            switch (operator){
                case "+":
                    return operand1+operand2;
                case "-":
                    return operand1-operand2;
                case "*":
                    return operand1*operand2;
                case "/":
                    return operand1/operand2;
                default:
                    throw new Error(NaN);   
            }
        }else throw new Error(NaN);
    },
    compact(array){
        const arr=[];
        array.forEach(function (value) {
            if(value!=false&&value!=null&&value!=0&&value!=""&&value!=undefined&&value!=NaN){
                arr.push(value);
            }
        });
        return arr;
    },
    intersection(array1,array2, isStrict=true){
        const arr=[];
        if(isStrict==false){
            array1.forEach(function (value1) {
                array2.forEach(function (value2) {
                    if(value1==value2){
                        arr.push(value1);
                    }
                });
            });
        }else{
            array1.forEach(function (value1) {
                array2.forEach(function (value2) {
                    if(value1==value2&&typeof(value1)==typeof(value2)){
                        arr.push(value1);
                    }
                });
            });
        }
        return arr;
    },
    filter(array) {
        throw new Error("Method not implimented.");
    },
    size(collection) { 
        
    },
    castArray(value) {
        throw new Error("Method not implimented.");
    }
}

module.exports = Bamadash;