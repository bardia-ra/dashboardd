


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
    document.querySelector('.dropdown').classList.add('active');
});
document.addEventListener('click', function(e){
    const dropdown= document.querySelector('.dropdown');
    if(!dropdown.contains(e.target)){
        dropdown.classList.remove('active');
    }
});

document.querySelector('.setting').addEventListener('click',function ()
{
    document.querySelector('.setting').classList.add('active');  
    var blur=document.getElementById('main-blur');
    blur.classList.add('active');
    // document.body.classList.add('opacity');
    // document.setdrop.classList.add('menu-opacity')
    
});
document.addEventListener('click', function(s){
    const setdrop=document.querySelector('.setting');
    if(!setdrop.contains(s.target)){
        setdrop.classList.remove('active');
        var blur=document.getElementById('main-blur');
        blur.classList.remove('active');
        // document.body.classList.remove('opacity');
        // document.setdrop.classList.remove('menu-opacity');
    }
});
    // document.getElementById('close-btnn').addEventListener('click', function(){
    //     document.querySelector('.set-menu').classList.remove('active');
    // })
document.querySelector('#close-btnn').addEventListener('click', function(){
    document.querySelector('.set-menu').classList.remove('active');
    // document.querySelector('.set-menu').add('active');
    // var blur=document.getElementById('main-blur');
    // blur.classList.remove('active');
    // blur.style.filter="none";
    // blur.style.opacity="1";
    // blur.style.filter="none";
    

});
// function btnn(){
//     let set=document.querySelector('.set-menu');
//     set.remove('active');
// }

window.addEventListener('load', function(){
    setTimeout(
        function open(event){
            document .querySelector('.popup').style.display="block";
            var blur=document.getElementById('main-blur');
            blur.classList.add('active');
            // document.main.style.overflow="none"; 
        },
        2500
    )
});
document.querySelector('#close-btn').addEventListener('click', function(){
    document.querySelector('.popup').style.display="none";
    // var blur=document.getElementById('main-blur');
    // blur.classList.remove('active');
    document.querySelector('#main-blur').style.filter="none";
    document.querySelector('#main-blur').style.opacity="1";;
});
document.addEventListener('click', function(p){
    const pop=document.querySelector('.popup');
    if(!pop.contains(p.target)){
        pop.style.display="none";
        // var blur=document.getElementById('main-blur');
        // blur.classList.remove('active');
    }
});
document.addEventListener('click', function(p){
    const pop=document.querySelector('.popup');
    if(pop.contains(p.target)){
        // pop.style.display="none";
        // var blur=document.getElementById('main-blur');
        // blur.classList.add('active');
        document.querySelector('#main-blur').classList.add('active');
    }
});

document.querySelector('.bell').addEventListener('click', function (){
    document.querySelector('.bell').classList.add('active');
});
document.addEventListener('click', function(b){
    const bell= document.querySelector('.bell');
    if(!bell.contains(b.target)){
        bell.classList.remove('active');
    }
});

let full=document.documentElement;
let fullbtn=document.querySelector('.square');

fullbtn.addEventListener('click',()=>{
    full.requestFullscreen();
})

document.querySelector('.barcode').addEventListener('click', function (){
    document.querySelector('.barcode').classList.add('active');
});
document.addEventListener('click', function(a){
    const bar= document.querySelector('.barcode');
    if(!bar.contains(a.target)){
        bar.classList.remove('active');
    }
});

document.querySelector('.usa-parent').addEventListener('click', function (){
    document.querySelector('.usa-parent').classList.add('active');
});
document.addEventListener('click', function(u){
    const usa= document.querySelector('.usa-parent');
    if(!usa.contains(u.target)){
        usa.classList.remove('active');
    }
});

document.querySelector('.mobile-search').addEventListener('click', function (){
    document.querySelector('.mobile-search').classList.add('active');
});
document.addEventListener('click', function(m){
    const search= document.querySelector('.mobile-search');
    if(!search.contains(m.target)){
        search.classList.remove('active');
    }
});



