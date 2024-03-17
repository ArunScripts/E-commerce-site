const imgs= document.querySelectorAll('.header-slider ul img');
const prev_btn= document.querySelector('.control-preview');
const nxt_btn= document.querySelector('.control-next');

let n=3;

function changeslider(){ 
    for (let i = 0; i<imgs.length; i++){
       imgs[i].style.display='none';
    }
    imgs[n].style.display='block'
}
changeslider()

prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }
    else{
        n=imgs.length-1;
    }
    changeslider()
})

nxt_btn.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;
    }
    else{
        n=0;
    }
    changeslider()

})

const scroolcontainer=document.querySelectorAll('.products');

for(const item of scroolcontainer){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft +=evt.deltaY;
    })
}