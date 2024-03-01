const btn = document.getElementById('A1');
console.log(btn);
btn.setAttribute('disabled',true);
btn.style.backgroundColor = "bg-black";

// let increase = 0;
// btn.addEventListener('click', function(){
//     increase++;
//     const totalAddText = document.getElementById('total-add').innerText;
//     const totalAddValue = parseInt(totalAddText);
//     document.getElementById('total-add').innerText = increase;
//     if(increase > 1){
//         const updated = document.getElementById('total-add').innerText
//         console.log("updated",updated);
//     }
// })

// let totalAdd = 0;
// let totalRev = 0;
// for(const btn of allBtn){
//     // console.log(btn);
//     btn.addEventListener('click', function(){
//         totalAdd = totalAdd+1;
//         // console.log(totalAdd);
//         const totalAddText = document.getElementById('total-add').innerText;
//         const totalAddValue = parseInt(totalAddText);
//         console.log(totalAddValue);
//         document.getElementById('total-add').innerText = totalAdd;
//         // console.log("This is add value", addFirst);
//         if(totalAdd > 1){
//             const addFirst = document.getElementById('total-add').innerText;
//             console.log('value',addFirst);
//             const newValue = addFirst - 1;
//             console.log('Ultimate',newValue);
//         }

//     })
// }

// function totalReverse(){
//     btn.addEventListener('click', function(){
//         const addRev = addFirst - 1;

//     })
// }