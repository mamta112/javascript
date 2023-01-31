 
const cart=["shoes","perfume","shirt"];

createCart(cart)
.then(function(orderId){
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);

   return showOrderSummary(paymentInfo);
})
.then(function(summary){
     console.log(summary);
})
.catch(function(err){
    console.log(err.message);
})
.then(function(paymentInfo){
     console.log("this part of code will definately run ");
})

function createCart(cart){
     const pr=new Promise(function(resolve,reject)
     {
           //create Order
           //validate order
           //orderId
           if(!validateCart(cart))
           {
              const err=new Error("cart is not valid");
              reject(err);
           }
           const orderId="12345";
           if(orderId){
            setTimeout(function() {
                resolve(orderId);
            }, 5000);
               
            }      
     });
     return pr;
}

function validateCart(cart)
{
    return false;
}

function proceedToPayment(orderId){
    /*const pr=new Promise(function(resolve,reject){
        resolve("payment successful");
    })
    return pr;*/

    return new Promise(function(resolve,reject){
        resolve("payment successful");
    })
}

function showOrderSummary(paymentInfo){
    
      return new Promises(function(resolve,reject){
        const err=new Error("error occured in showOrderSummary");
         reject(err);
      })
} 