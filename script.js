const container=document.getElementsByClassName('questionContainer');



for(let i=0;i<container.length;i++){
    container[i].addEventListener('click', ()=> {
        container[i].classList.toggle('active');
    })
}