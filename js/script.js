const gnb = document.querySelectorAll('.gnb a');
const main = document.querySelector('#container');
const burgur = document.querySelector('.btn-menu');
const mainmenu = document.querySelector('#main-menu');
const sns = document.querySelectorAll('.corsair i');
const init = () => {
    burgur.addEventListener('click',function(){
        userClick('none');
    });
    gnb.forEach(function(menu,idx){        
        menu.addEventListener('click', function(){
            userClick('block');
            const delObj = main.querySelector('article.on');
            burgur.style.display='block';
            delObj.classList.remove('on');
            main.children[idx].classList.add('on');
        });
    });

    const userClick = (strDisplay) => {

        main.classList.toggle('on');
        mainmenu.classList.toggle('on');
        burgur.style.display = strDisplay;
    }

    for(let obj of sns){
        obj.addEventListener('mouseover',function(e){
            e.target.style.transform='scale(1.5)';
            e.target.style.opacity='1';
            e.target.style.color='blue';
            
        });
        obj.addEventListener('mouseout',function(e){
            e.target.style.transform='scale(1)';
            e.target.style.opacity='0.5';
            e.target.style.color='white';

            
        });
    }
}

init();

