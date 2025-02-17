//profile dropdown scripts start
document.querySelector('.dropdown').addEventListener('click', function (){
    document.querySelector('.drop-menu').classList.toggle('active');
});
document.addEventListener('click', function(e){
    var dropdown= document.querySelector('.dropdown');
    var dropmenu=document.querySelector('.drop-menu')
    if(!dropmenu.contains(e.target) && !dropdown.contains(e.target)){
        dropmenu.classList.remove('active');
    }
});
//profile dropdown scripts end

//setting scrips start
document.querySelector('.setting').addEventListener('click',function ()
{
    document.querySelector('.setting').classList.add('active');  
    document.querySelector('.main').classList.add('active-1') 
    
});

document.addEventListener('click', function(s){
    var setdrop=document.querySelector('.setting');
    var setmenu=document.querySelector('.set-menu')
    var setbtn=document.querySelector('.set-close-btn')
    if(!setdrop.contains(s.target) && !setmenu.contains(s.target) || setbtn.contains(s.target)){
        document.querySelector('.setting').classList.remove('active');
        document.querySelector('.main').classList.remove('active-1') 
    }
});
//setting scripts end

//web loading start
const bardia=addEventListener('DOMContentLoaded',()=>{
    let load=document.querySelector('.loadpage');
    load.style.display="none";

})
//web loading end

//popup scripts start
window.addEventListener('load', function(){
    setTimeout(
        function open(event){
            document .querySelector('.popup').style.display="block";
            document.querySelector('.main').classList.add('active')
        },
        2500
    )
});
document.querySelector('#close-btn').addEventListener('click', function(){
    document.querySelector('.popup').style.display="none";
    document.querySelector('.main').classList.remove('active')
});
document.addEventListener('click', function(p){
    var pop=document.querySelector('.popup');
    if(!pop.contains(p.target)){
        pop.style.display="none";
        document.querySelector('.main').classList.remove('active')

    }
});
//popup scripts end

//bell dropdown scripts start
document.querySelector('.bell').addEventListener('click', function (){
    document.querySelector('.bell').classList.toggle('active');
});
document.addEventListener('click', function(b){
    var bell= document.querySelector('.bell');
    if(!bell.contains(b.target)){
        bell.classList.remove('active');
    }
});
//bell dropdown scripts end

//fullscreen scripts start
let full=document.documentElement;
let fullbtn=document.querySelector('.square');

fullbtn.addEventListener('click',()=>{
    full.requestFullscreen();
})
//fullscreen scripts end

//barcode dropdown scripts start
document.querySelector('.barcode').addEventListener('click', function (){
    document.querySelector('.barcode').classList.toggle('active');
});
document.addEventListener('click', function(a){
    var bar= document.querySelector('.barcode');
    if(!bar.contains(a.target)){
        bar.classList.remove('active');
    }
});
//barcode dropdown scripts end

//country dropdown scripts start
document.querySelector('.usa-parent').addEventListener('click', function (){
    document.querySelector('.usa-parent').classList.toggle('active');
});
document.addEventListener('click', function(u){
    var usa= document.querySelector('.usa-parent');
    if(!usa.contains(u.target)){
        usa.classList.remove('active');
    }
});
//country deopdown scripte end

//mobile search scripts start
document.querySelector('.mobile-search').addEventListener('click', function (){
    document.querySelector('.mobile-search').classList.toggle('active');
});
document.addEventListener('click', function(m){
    var search= document.querySelector('.mobile-search');
    if(!search.contains(m.target)){
        search.classList.remove('active');
    }
});
//mobile search scripts end

//mega menu dropdown scripts start
document.querySelector('.mega-menu').addEventListener('click', function (){
    document.querySelector('.mega-menu').classList.toggle('active');
});
document.addEventListener('click', function(g){
    var search= document.querySelector('.mega-menu');
    if(!search.contains(g.target)){
        search.classList.remove('active');
    }
});
//mega menu dropdown scripts end

//bar min and max scripts start
document.querySelector('.bar').addEventListener('click', function (){
    document.querySelector('.left-min').classList.toggle('active')
    document.querySelector('.left').classList.toggle('hide')
    document.querySelector('.right').classList.toggle('wide')
    document.querySelector('.nav').classList.toggle('wide')
});
// bar min and max scripts end

//bar mobile scripts start
document.querySelector('.bar-mobile').addEventListener('click', function (){
    document.querySelector('.left').classList.add('mobile')
});
document.addEventListener('click', function(g){
    var leftbtn= document.querySelector('.bar-mobile');
    var left= document.querySelector('.left')
    if(!leftbtn.contains(g.target) && !left.contains(g.target)){
        document.querySelector('.left').classList.remove('mobile');
    }
});
//bar mobile scripts end

//desktop horizontal button script start
let horizontal=false;
document.querySelector('#horizontal').addEventListener('click', function (){
    document.querySelector('.left').classList.add('hide');
    document.querySelector('.left-min').classList.add('hide')
    document.querySelector('.header').classList.add('active')
    document.querySelector('.right').classList.add('full')
    document.querySelector('.main-parent').classList.add('width')
    document.querySelector('.nav-back').classList.add('active')
    document.querySelector('#horizontal').classList.add('active')
    document.querySelector('#vertical').classList.add('unactive')
    document.querySelector('.main').classList.add('width')
    document.querySelector('.setting').classList.add('horiz')
    document.querySelector('.horiz-icon').classList.add('active')
    document.querySelector('.bar').classList.add('hide')
    horizontal=true
    vertical=false

});
//desktop horizontal button scripts end

//desktop vertical button scripts start
let vertical=false;
document.querySelector('#vertical').addEventListener('click', ()=>{
    document.querySelector('.left').classList.remove('hide');
    document.querySelector('.left-min').classList.remove('hide')
    document.querySelector('.header').classList.remove('active')
    document.querySelector('.right').classList.remove('full')
    document.querySelector('.main-parent').classList.remove('width')
    document.querySelector('.nav-back').classList.remove('active')
    document.querySelector('#horizontal').classList.remove('active')
    document.querySelector('#vertical').classList.remove('unactive')
    document.querySelector('.main').classList.remove('width')
    document.querySelector('.setting').classList.remove('horiz')
    document.querySelector('.horiz-icon').classList.remove('active')
    document.querySelector('.bar').classList.remove('hide')
    vertical=true
    horizontal=false
})
//desktop vertical button scripts end


document.querySelector('.dash').addEventListener('click', function (){
    document.querySelector('.dash').classList.toggle('active');
});
document.addEventListener('click', function(u){
    var dash= document.querySelector('.dash');
    if(!dash.contains(u.target)){
        dash.classList.remove('active');
    }
});
document.querySelector('.el').addEventListener('click', function (){
    document.querySelector('.el').classList.toggle('active');
    document.querySelector('.el').classList.add('fucos');
    document.querySelector('.el-txt').classList.add('fucos');
    document.querySelector('.dash').classList.add('unfucos');
    document.querySelector('.dash-txt').classList.add('unfucos');
    document.querySelector('.app').classList.add('unfucos');
    document.querySelector('.app-txt').classList.add('unfucos');
    document.querySelector('.com').classList.add('unfucos');
    document.querySelector('.com-txt').classList.add('unfucos');
    document.querySelector('.ex').classList.add('unfucos');
    document.querySelector('.ex-txt').classList.add('unfucos');
});
document.addEventListener('click', function(u){
    var element= document.querySelector('.el');
    if(!element.contains(u.target)){
        element.classList.remove('active');
        document.querySelector('.el').classList.remove('fucos');
        document.querySelector('.el-txt').classList.remove('fucos');
        document.querySelector('.dash').classList.remove('unfucos');
        document.querySelector('.dash-txt').classList.remove('unfucos');
        document.querySelector('.app').classList.remove('unfucos');
        document.querySelector('.app-txt').classList.remove('unfucos');
        document.querySelector('.com').classList.remove('unfucos');
        document.querySelector('.com-txt').classList.remove('unfucos');
        document.querySelector('.ex').classList.remove('unfucos');
        document.querySelector('.ex-txt').classList.remove('unfucos');
    }
});
document.querySelector('.app').addEventListener('click', function (){
    document.querySelector(".app").classList.toggle('active')
    document.querySelector('.el').classList.add('unfucos');
    document.querySelector('.el-txt').classList.add('unfucos');
    document.querySelector('.dash').classList.add('unfucos');
    document.querySelector('.dash-txt').classList.add('unfucos');
    document.querySelector('.app').classList.add('fucos');
    document.querySelector('.app-txt').classList.add('fucos');
    document.querySelector('.com').classList.add('unfucos');
    document.querySelector('.com-txt').classList.add('unfucos');
    document.querySelector('.ex').classList.add('unfucos');
    document.querySelector('.ex-txt').classList.add('unfucos');
});
document.addEventListener('click', function(u){
    var app= document.querySelector('.app');
    if(!app.contains(u.target)){
        app.classList.remove('active');
        // document.querySelector('.el').classList.remove('active');
        document.querySelector('.el').classList.remove('unfucos');
        document.querySelector('.el-txt').classList.remove('unfucos');
        document.querySelector('.dash').classList.remove('unfucos');
        document.querySelector('.dash-txt').classList.remove('unfucos');
        document.querySelector('.app').classList.remove('fucos');
        document.querySelector('.app-txt').classList.remove('fucos');
        document.querySelector('.com').classList.remove('unfucos');
        document.querySelector('.com-txt').classList.remove('unfucos');
        document.querySelector('.ex').classList.remove('unfucos');
        document.querySelector('.ex-txt').classList.remove('unfucos');
    }
});
document.querySelector('.com').addEventListener('click', function (){
    document.querySelector('.com').classList.toggle('active');
    document.querySelector('.el').classList.add('unfucos');
    document.querySelector('.el-txt').classList.add('unfucos');
    document.querySelector('.dash').classList.add('unfucos');
    document.querySelector('.dash-txt').classList.add('unfucos');
    document.querySelector('.app').classList.add('unfucos');
    document.querySelector('.app-txt').classList.add('unfucos');
    document.querySelector('.com').classList.add('fucos');
    document.querySelector('.com-txt').classList.add('fucos');
    document.querySelector('.ex').classList.add('unfucos');
    document.querySelector('.ex-txt').classList.add('unfucos');
});
document.addEventListener('click', function(u){
    var com= document.querySelector('.com');
    if(!com.contains(u.target)){
        com.classList.remove('active');
        // document.querySelector('.el').classList.remove('unfucos');   
        document.querySelector('.el').classList.remove('unfucos');
        document.querySelector('.el-txt').classList.remove('unfucos');
        document.querySelector('.dash').classList.remove('unfucos');
        document.querySelector('.dash-txt').classList.remove('unfucos');
        document.querySelector('.app').classList.remove('unfucos');
        document.querySelector('.app-txt').classList.remove('unfucos');
        document.querySelector('.com').classList.remove('fucos');
        document.querySelector('.com-txt').classList.remove('fucos');
        document.querySelector('.ex').classList.remove('unfucos');
        document.querySelector('.ex-txt').classList.remove('unfucos');
    }
});
document.querySelector('.ex').addEventListener('click', function (){
    document.querySelector('.ex').classList.toggle('active');
    document.querySelector('.el').classList.add('unfucos');
    document.querySelector('.el-txt').classList.add('unfucos');
    document.querySelector('.dash').classList.add('unfucos');
    document.querySelector('.dash-txt').classList.add('unfucos');
    document.querySelector('.app').classList.add('unfucos');
    document.querySelector('.app-txt').classList.add('unfucos');
    document.querySelector('.com').classList.add('unfucos');
    document.querySelector('.com-txt').classList.add('unfucos');
    document.querySelector('.ex').classList.add('fucos');
    document.querySelector('.ex-txt').classList.add('fucos');
});
document.addEventListener('click', function(u){
    var ex= document.querySelector('.ex');
    if(!ex.contains(u.target)){
        ex.classList.remove('active');
        document.querySelector('.el').classList.remove('unfucos');
        document.querySelector('.el-txt').classList.remove('unfucos');
        document.querySelector('.dash').classList.remove('unfucos');
        document.querySelector('.dash-txt').classList.remove('unfucos');
        document.querySelector('.app').classList.remove('unfucos');
        document.querySelector('.app-txt').classList.remove('unfucos');
        document.querySelector('.com').classList.remove('unfucos');
        document.querySelector('.com-txt').classList.remove('unfucos');
        document.querySelector('.ex').classList.remove('fucos');
        document.querySelector('.ex-txt').classList.remove('fucos');
    }
});




document.querySelector('#horizontal-mobile').addEventListener('click', function (){
    document.getElementById('horizontal-mobile').classList.add('active');
    document.getElementById('horizontal-mobile').classList.add('active');
    document.getElementById('vertical-mobile').classList.add('unactive');
    document.getElementById('vertical-mobile').classList.add('unactive');
});

document.querySelector('#vertical-mobile').addEventListener('click', function (){
    document.getElementById('horizontal-mobile').classList.remove('active');
    document.getElementById('horizontal-mobile').classList.remove('active');
    document.getElementById('vertical-mobile').classList.remove('unactive');
    document.getElementById('vertical-mobile').classList.remove('unactive');
})


document.querySelector('#dark').addEventListener('click', function (){
    document.getElementById('dark').classList.add('active');
    document.getElementById('dark').classList.add('active');
    document.getElementById('light').classList.add('unactive');
    document.getElementById('light').classList.add('unactive');
});

document.querySelector('#light').addEventListener('click', function (){
    document.getElementById('dark').classList.remove('active');
    document.getElementById('dark').classList.remove('active');
    document.getElementById('light').classList.remove('unactive');
    document.getElementById('light').classList.remove('unactive');
})


document.querySelector('#dark-2').addEventListener('click', function (){
    document.getElementById('dark-2').classList.add('active');
    document.getElementById('dark-2').classList.add('active');
    document.getElementById('light-2').classList.add('unactive');
    document.getElementById('light-2').classList.add('unactive');
});

document.querySelector('#light-2').addEventListener('click', function (){
    document.getElementById('dark-2').classList.remove('active');
    document.getElementById('dark-2').classList.remove('active');
    document.getElementById('light-2').classList.remove('unactive');
    document.getElementById('light-2').classList.remove('unactive');
})


document.querySelector('#boxed').addEventListener('click', function (){
    document.getElementById('boxed').classList.add('active');
    document.getElementById('boxed').classList.add('active');
    document.getElementById('fluid').classList.add('unactive');
    document.getElementById('fluid').classList.add('unactive');
    document.getElementById('scrollable').classList.add('unactive');
    document.getElementById('scrollable').classList.add('unactive');
    document.getElementById('scrollable').classList.remove('active');
    document.getElementById('scrollable').classList.remove('active');
    document.getElementById('boxed').classList.remove('unactive');
    document.getElementById('boxed').classList.remove('unactive');
    document.getElementById('fluid').classList.remove('active');
    document.getElementById('fluid').classList.remove('active');
    
    
});
document.querySelector('#scrollable').addEventListener('click', function (){
    document.getElementById('scrollable').classList.add('active');
    document.getElementById('scrollable').classList.add('active');
    document.getElementById('fluid').classList.add('unactive');
    document.getElementById('fluid').classList.add('unactive');
    document.getElementById('boxed').classList.add('unactive');
    document.getElementById('boxed').classList.add('unactive');
    document.getElementById('boxed').classList.remove('active');
    document.getElementById('boxed').classList.remove('active');
    document.getElementById('fluid').classList.remove('active');
    document.getElementById('fluid').classList.remove('active');
    document.getElementById('scrollable').classList.remove('unactive');
    document.getElementById('scrollable').classList.remove('unactive');
})
document.querySelector('#fluid').addEventListener('click', function (){
    document.getElementById('fluid').classList.add('active');
    document.getElementById('fluid').classList.add('active');
    document.getElementById('boxed').classList.add('unactive');
    document.getElementById('boxed').classList.add('unactive');
    document.getElementById('scrollable').classList.add('unactive');
    document.getElementById('scrollable').classList.add('unactive');
    document.getElementById('boxed').classList.remove('active');
    document.getElementById('boxed').classList.remove('active');
    document.getElementById('fluid').classList.remove('unactive');
    document.getElementById('fluid').classList.remove('unactive');
    document.getElementById('scrollable').classList.remove('active');
    document.getElementById('scrollable').classList.remove('active');
});


document.querySelector('#icon-btn').addEventListener('click', function (){
    document.getElementById('icon-btn').classList.add('active');
    document.getElementById('icon-btn').classList.add('active');
    document.getElementById('def').classList.add('unactive');
    document.getElementById('def').classList.add('unactive');
    document.getElementById('compact').classList.add('unactive');
    document.getElementById('compact').classList.add('unactive');
    document.getElementById('compact').classList.remove('active');
    document.getElementById('compact').classList.remove('active');
    document.getElementById('icon-btn').classList.remove('unactive');
    document.getElementById('icon-btn').classList.remove('unactive');
    document.getElementById('def').classList.remove('active');
    document.getElementById('def').classList.remove('active');
    
});
document.querySelector('#compact').addEventListener('click', function (){
    document.getElementById('compact').classList.add('active');
    document.getElementById('compact').classList.add('active');
    document.getElementById('def').classList.add('unactive');
    document.getElementById('def').classList.add('unactive');
    document.getElementById('icon-btn').classList.add('unactive');
    document.getElementById('icon-btn').classList.add('unactive');
    document.getElementById('icon-btn').classList.remove('active');
    document.getElementById('icon-btn').classList.remove('active');
    document.getElementById('def').classList.remove('active');
    document.getElementById('def').classList.remove('active');
    document.getElementById('compact').classList.remove('unactive');
    document.getElementById('compact').classList.remove('unactive');
})
document.querySelector('#def').addEventListener('click', function (){
    document.getElementById('def').classList.add('active');
    document.getElementById('def').classList.add('active');
    document.getElementById('icon-btn').classList.add('unactive');
    document.getElementById('icon-btn').classList.add('unactive');
    document.getElementById('compact').classList.add('unactive');
    document.getElementById('compact').classList.add('unactive');
    document.getElementById('icon-btn').classList.remove('active');
    document.getElementById('icon-btn').classList.remove('active');
    document.getElementById('def').classList.remove('unactive');
    document.getElementById('def').classList.remove('unactive');
    document.getElementById('compact').classList.remove('active');
    document.getElementById('compact').classList.remove('active');
});


