 let form=document.querySelector("form");
 
 form.addEventListener("submit",checking);
 

   function checking(event){
      event.preventDefault();
      let inputTextValue=document.querySelector(".entryTxt");
      let getInputValue=inputTextValue.value;
      //alert(getInputValue);
       
       let splitInputTxt=getInputValue.split("");
            console.table(splitInputTxt);

        let reverseValue=splitInputTxt.reverse();
           console.table(reverseValue);

        let arrayToString=reverseValue.toString();
        console.log(arrayToString)
        let reg=/\,/g;
        let removeExtra=arrayToString.replace(reg,'');
        console.log(removeExtra);

        if(getInputValue==removeExtra){
            
            document.querySelector("p").innerHTML=`${getInputValue} is Palindrome`;
           
        }else{
            document.querySelector("p").innerHTML=`" ${getInputValue} " is not Plaindrome`;
         }
    }
  