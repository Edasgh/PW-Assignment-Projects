const numberChecker=(arr)=>{
 return isPresent=function(num){
   if(arr.includes(num)){
     return true;
   }else{
    return false;
   }
 }
 
}


const arr=[1,2,3,4,5]

const checknum=numberChecker(arr);
console.log(checknum(3));
console.log(checknum(6));
