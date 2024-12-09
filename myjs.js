


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

document.querySelector('.mega-menu').addEventListener('click', function (){
    document.querySelector('.mega-menu').classList.add('active');
});
document.addEventListener('click', function(g){
    const search= document.querySelector('.mega-menu');
    if(!search.contains(g.target)){
        search.classList.remove('active');
    }
});

document.querySelector('.bar').addEventListener('click', function (){
    document.querySelector('.left').style.display="none";
    document.querySelector('.left-min').style.display="block";
    document.querySelector('.right').style.width="96%";
    document.querySelector('.nav').style.width="96%";
    document.querySelector('.setting').style.right="0";
});

document.querySelector('.bar-mobile').addEventListener('click', function (){
    document.querySelector('.left-mobile').style.display="block";
    document.querySelector('.left-min').style.display="none";
    document.querySelector('.left-mobile').style.width="70%";
    
});
document.addEventListener('click', function(g){
    const left= document.querySelector('.bar-mobile');
    if(!left.contains(g.target)){
        document.querySelector('.left-mobile').style.display="none";
    }
});

document.querySelector('#horizontal').addEventListener('click', function (){
    document.querySelector('.left').style.display="none";
    document.querySelector('.left-mobile').style.display="none";  
    document.querySelector('.left-min').style.display="none";
    document.querySelector('.header').style.display="block";
    document.querySelector('.right').style.width="100%";
    document.querySelector('.main-parent').style.width="85%";
    document.querySelector('.main-parent').style.margin="140px 0 0 0";
    document.querySelector('.nav-back').style.display="block";
    document.getElementById('horizontal').style.background="#556ee6";
    document.getElementById('horizontal').style.color="white";
    document.getElementById('vertical').style.background="#f1f1f1";
    document.getElementById('vertical').style.color="black";
    document.querySelector('.main').style.width="100%";
    document.querySelector('.setting').style.right="125px";
    // document.querySelector('.set-menu').style.right="-135px";
});
document.querySelector('.dash').addEventListener('click', function (){
    document.querySelector('.dash').classList.add('active');
});
document.addEventListener('click', function(u){
    const dash= document.querySelector('.dash');
    if(!dash.contains(u.target)){
        dash.classList.remove('active');
    }
});
document.querySelector('.el').addEventListener('click', function (){
    document.querySelector('.el').classList.add('active');
    document.querySelector('.el').style.color="#fff";
    document.querySelector('.el-txt').style.color="#fff";
    document.querySelector('.dash').style.color="#d5d5d5"
    document.querySelector('.dash-txt').style.color="#d5d5d5"
    document.querySelector('.app').style.color="#d5d5d5"
    document.querySelector('.app-txt').style.color="#d5d5d5"
    document.querySelector('.com').style.color="#d5d5d5"
    document.querySelector('.com-txt').style.color="#d5d5d5"
    document.querySelector('.ex').style.color="#d5d5d5"
    document.querySelector('.ex-txt').style.color="#d5d5d5"
});
document.addEventListener('click', function(u){
    const element= document.querySelector('.el');
    if(!element.contains(u.target)){
        element.classList.remove('active');
        document.querySelector('.el').style.color="#d5d5d5";
        document.querySelector('.el-txt').style.color="#d5d5d5";
        document.querySelector('.dash').style.color="#fff"
        document.querySelector('.dash-txt').style.color="#fff"
    }
});
document.querySelector('.app').addEventListener('click', function (){
    document.querySelector('.app').classList.add('active');
    document.querySelector('.el').style.color="#d5d5d5";
    document.querySelector('.el-txt').style.color="#d5d5d5";
    document.querySelector('.dash').style.color="#d5d5d5"
    document.querySelector('.dash-txt').style.color="#d5d5d5"
    document.querySelector('.app').style.color="#fff"
    document.querySelector('.app-txt').style.color="#fff"
    document.querySelector('.com').style.color="#d5d5d5"
    document.querySelector('.com-txt').style.color="#d5d5d5"
    document.querySelector('.ex').style.color="#d5d5d5"
    document.querySelector('.ex-txt').style.color="#d5d5d5"
});
document.addEventListener('click', function(u){
    const app= document.querySelector('.app');
    if(!app.contains(u.target)){
        app.classList.remove('active');
        document.querySelector('.app').style.color="#d5d5d5";
        document.querySelector('.app-txt').style.color="#d5d5d5";
        document.querySelector('.dash').style.color="#fff"
        document.querySelector('.dash-txt').style.color="#fff"
    }
});
document.querySelector('.com').addEventListener('click', function (){
    document.querySelector('.com').classList.add('active');
    document.querySelector('.el').style.color="#d5d5d5";
    document.querySelector('.el-txt').style.color="#d5d5d5";
    document.querySelector('.dash').style.color="#d5d5d5"
    document.querySelector('.dash-txt').style.color="#d5d5d5"
    document.querySelector('.app').style.color="d5d5d5"
    document.querySelector('.app-txt').style.color="#d5d5d5"
    document.querySelector('.com').style.color="#fff"
    document.querySelector('.com-txt').style.color="#fff"
    document.querySelector('.ex').style.color="#d5d5d5"
    document.querySelector('.ex-txt').style.color="#d5d5d5"
});
document.addEventListener('click', function(u){
    const com= document.querySelector('.com');
    if(!com.contains(u.target)){
        com.classList.remove('active');
        document.querySelector('.com').style.color="#d5d5d5";
        document.querySelector('.com-txt').style.color="#d5d5d5";
        document.querySelector('.dash').style.color="#fff"
        document.querySelector('.dash-txt').style.color="#fff"
    }
});
document.querySelector('.ex').addEventListener('click', function (){
    document.querySelector('.ex').classList.add('active');
    document.querySelector('.el').style.color="#d5d5d5";
    document.querySelector('.el-txt').style.color="#d5d5d5";
    document.querySelector('.dash').style.color="#d5d5d5"
    document.querySelector('.dash-txt').style.color="#d5d5d5"
    document.querySelector('.app').style.color="d5d5d5"
    document.querySelector('.app-txt').style.color="#d5d5d5"
    document.querySelector('.com').style.color="#d5d5d5"
    document.querySelector('.com-txt').style.color="#d5d5d5"
    document.querySelector('.ex').style.color="#fff"
    document.querySelector('.ex-txt').style.color="#fff"
});
document.addEventListener('click', function(u){
    const ex= document.querySelector('.ex');
    if(!ex.contains(u.target)){
        ex.classList.remove('active');
        document.querySelector('.ex').style.color="#d5d5d5";
        document.querySelector('.ex-txt').style.color="#d5d5d5";
        document.querySelector('.dash').style.color="#fff"
        document.querySelector('.dash-txt').style.color="#fff"
    }
});

document.querySelector('#vertical').addEventListener('click', function (){
    document.querySelector('.left').style.display="block";
    document.querySelector('.left-mobile').style.display="none";  
    document.querySelector('.left-min').style.display="none";
    document.querySelector('.header').style.display="none";
    document.querySelector('.right').style.width="85.5%";
    document.querySelector('.main-parent').style.width="97%";
    document.querySelector('.main-parent').style.margin="80px 0 0 0";
    document.querySelector('#left-img').style.height="21%";
    // document.querySelector('.nav-back').style.display="block";
    document.getElementById('horizontal').style.background="#f1f1f1";
    document.getElementById('horizontal').style.color="black";
    document.getElementById('vertical').style.background="#556ee6";
    document.getElementById('vertical').style.color="white";
    document.querySelector('.main').style.width="100%";
    document.querySelector('.nav').style.width="85.5%";
    document.querySelector('.setting').style.right="0px";
    // document.querySelector('.set-menu').style.right="0px";
});



document.querySelector('#horizontal-mobile').addEventListener('click', function (){
    document.getElementById('horizontal-mobile').style.background="#556ee6";
    document.getElementById('horizontal-mobile').style.color="white";
    document.getElementById('vertical-mobile').style.background="#f1f1f1";
    document.getElementById('vertical-mobile').style.color="black";
});

document.querySelector('#vertical-mobile').addEventListener('click', function (){
    document.getElementById('horizontal-mobile').style.background="#f1f1f1";
    document.getElementById('horizontal-mobile').style.color="black";
    document.getElementById('vertical-mobile').style.background="#556ee6";
    document.getElementById('vertical-mobile').style.color="white";
})

// document.querySelector('#boxed').addEventListener('click', function(){
//     document.querySelector('.main').style.width="80%";
//     document.querySelector('.nav').style.width="65%";
//     document.querySelector('.left').style.display="none";
//     document.querySelector('.left-mobile').style.display="none";
//     document.querySelector('.left-min').style.display="block";
//     document.querySelector('.left-min').style.left="180px";
//     document.querySelector('.min-icon').style.left="180px";
//     document.querySelector('.img-left').style.left="205px";
//     document.querySelector('.right').style.width="94%";
//     document.querySelector('.setting').style.right="260px";
//     document.querySelector('.set-menu').style.right="-260px";
//     document.querySelector('.bar').style.display="none";
//     document.querySelector('.bar-none').style.display="block";
//     document.querySelector('#boxed').style.background="#556ee6";
//     document.querySelector('#boxed').style.color="#fff";
//     document.querySelector('#fluid').style.background="#f1f1f1";
//     document.querySelector('#fluid').style.color="#828a9a";
//     document.querySelector('#scrollable').style.background="#f1f1f1";
//     document.querySelector('#scrollable').style.color="#828a9a";
//     document.querySelector('.header').style.display="none";
//     document.querySelector('.nav-back').style.display="none !important";   
//     document.querySelector('.nav').style.width="100%";
// });


// document.querySelector('#fluid').addEventListener('click', function (){
//     document.querySelector('.left').style.display="block";
//     document.querySelector('.left-mobile').style.display="none";  
//     document.querySelector('.left-min').style.display="none";
//     document.querySelector('.header').style.display="none";
//     document.querySelector('.right').style.width="85.5%";
//     document.querySelector('.main-parent').style.width="97%";
//     document.querySelector('.main-parent').style.margin="80px 0 0 0";
//     document.querySelector('#left-img').style.height="21%";
//     // document.querySelector('.nav-back').style.display="block";
//     document.querySelector('#fluid').style.background="#556ee6";
//     document.querySelector('#fluid').style.color="#fff";
//     document.querySelector('#boxed').style.background="#f1f1f1";
//     document.querySelector('#boxed').style.color="#828a9a";
//     document.querySelector('#scrollable').style.background="#f1f1f1";
//     document.querySelector('#scrollable').style.color="#828a9a";
//     document.querySelector('.main').style.width="100%";
//     document.querySelector('.nav').style.width="85.5%";
//     document.querySelector('.setting').style.right="0px";
//     document.querySelector('.set-menu').style.right="0px";
// });









