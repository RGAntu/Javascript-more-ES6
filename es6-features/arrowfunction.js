/**
 *  Arrow Functions (Shorter Syntax)

 1️⃣ Single Line, Multi-line, Single Parameter

 2️⃣ Function with Multiple Parameters & Function Body
 */


//  single line 
 const singleArrow = x => x * x;
 console.log(singleArrow(5))

 // multi-line 
 const multiArrow = x => {
      return x * x;
    
 }

 const multiResult = multiArrow(10);
 console.log(multiResult)

 // multi - parameter

 const multiPara = (x, y) => {
    const multi = x * y;
    return multi 
 }

 const multiParaRes = multiPara(8, 10);
 console.log(multiParaRes)


//  without parameter 

const showMessage = () => 20 * 20;
console.log(showMessage);