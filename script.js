
const thumbs=document.querySelectorAll('.thumbimg');
const circle=document.querySelector('.circle');
const cofeeimage=document.querySelector('.coffee');

thumbs.forEach((thumb)=>{
        thumb.addEventListener('click',(e)=>{
                if(thumb.classList.contains("thumb1")){
                        // console.log('this is thumb 1');
                        circle.style.backgroundColor = "#027043";
                        cofeeimage.src=('src',`images/img${1}.png`);
                }
                else if(thumb.classList.contains("thumb2")){
                        // console.log('this is thumb 1');
                        circle.style.backgroundColor = "#D851B1";
                        cofeeimage.setAttribute('src',`images/img${2}.png`);
                }
                else if(thumb.classList.contains("thumb3")){
                        // console.log('this is thumb 1');
                        circle.style.backgroundColor = "#EC7397";
                        cofeeimage.setAttribute('src',`images/img${3}.png`);
                }
        })
})