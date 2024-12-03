//dropdown=admin
//admin-select=select//
// menu=drop-menu
//  


// const dropdown=document.querySelectorAll('.admin');

// dropdown.array.forEach(dropdown => {
//     const select=dropdown.querySelector('.admin-select');
//     const menu=dropdown.querySelector('.drop-menu');
//     const options=dropdown.querySelectorAll('.drop-menu li');
//     const selected=dropdown.querySelector('.selected')

//     select.addEventListener('click',() =>{
//         menu.classList.toggle('menu-open');
//         select.classList.toggle('select-clicked')
//     });
//     options.forEach(option =>{
//         option.addEventListener('click', () =>{
//             selected.innerText=option.innerText;
//             select.classList.remove('select-clicked');
//             menu.classList.remove('menu-open');
//             options.forEach(option =>{
//                 option.classList.remove('active');
//             });
//             option.classList.add('active');
//         });
//     });
// });

document.querySelector('.dropdown').addEventListener('click', function (){
    this.classList.toggle('active');
});
document.addEventListener('click', function(e){
    const dropdown= document.querySelector('.dropdown');
    if(!dropdown.contains(e.target)){
        dropdown.classList.remove('active');
    }
});
