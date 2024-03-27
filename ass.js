//Write a JavaScript program to find the sum of squares of the elements of an array.

function sumofsquares(array) 
 {
    var sum = 0, 
        i = array.length;
    while (i--) 
     sum += Math.pow(array[i], 2);
    return sum;
  }
   
  console.log(sumofsquares([0,1,2,3,4]));



  //Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.


  for (let index=0; index<=15;index++)
{
   if(index ===0)
   {
      console.log(index +"is even number")
   }
else if(index % 2===0)
  {
      console.log(index +"is even number")
  }
else
  {
     console.log(index + "is odd numdber")
  }

}





//Write a JavaScript program to find the most frequent item of an array

var num=[1,2,3,4,4,4,3,5,]
var m=1
var f=0
var a 
for(var i=0;i<num.length;i++)
{
  for(j=i;j<num.length;j++)
  {
    if(num[i]==num[j])
    f++
  if(m<f)
  {
    m=f
    a=num[i]
  }
  }
  f=0
}
console.log("most freuent element is" + a)







//Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 


var arr=[2,1,2,3,4,5]

function prime(n ) {

  
  if (n== 1) {
    return false;
  }
  
  else if (n==2) {
    return true;
  } else {
    
    for (var h = 2; h < n; h++) {
      
      if (arr[0] % h== 0) {
        return false;
      }
    }
    
    return true;  
  }
}
console.log(prime(arr[0]));

