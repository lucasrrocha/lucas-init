// //console.log(test);
// var test = document.querySelectorAll('li');
// console.log(test);

// (function(){
//     console.log(test);
//     for(var i = 0; i < test.length; i++){
//         console.log(test[i]);
//     }
// })();


document.addEventListener('DOMContentLoaded', function(event){
    let test = document.querySelectorAll('.link');
    test.forEach(item => {
        console.log(item.textContent);
        //item.style.color = 'blue';
        item.textContent += ' Valor';
    })
    
});