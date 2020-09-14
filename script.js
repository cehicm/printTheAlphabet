function printAlphabet(option){

    let result = document.getElementById("result");
       let  i = 65;
       let  j = 91;
    
       if (option == 'smalls'){
           i = 97;
           j = 123;
       }
    
       result.innerHTML = '';
    
       for (k = i; k < j; k++){
           let str = String.fromCharCode(k);
           result.insertAdjacentHTML('beforeend', str + " ");
       }
    
    }