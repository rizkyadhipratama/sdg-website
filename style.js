const thisprogram = document.querySelector('#thisprogram');
thisprogram.style.backgroundColor = '#ffffff';

thisprogram.addEventListener('mouseenter', function(){
    thisprogram.style.boxShadow = '0 8px 16px 0 #bdbdbd';
});

thisprogram.addEventListener('mouseleave', function(){
    thisprogram.style.boxShadow = '0 8px 16px 0 #ffffff';
});

const article1 = document.querySelector('#article1');
article1.style.backgroundColor = '#ffffff';

article1.addEventListener('mouseenter', function(){
    article1.style.boxShadow = '0 8px 16px 0 #bdbdbd';
});

article1.addEventListener('mouseleave', function(){
    article1.style.boxShadow = '0 8px 16px 0 #ffffff';
});

const goals = document.querySelectorAll('.goal');

for(let index = 0; index < goals.length; index++) {
    goals[index].addEventListener('mouseenter', function(){
        goals[index].style.boxShadow = '0 8px 16px 0 #656a51';
    });
    
};

for(let index = 0; index < goals.length; index++) {
    goals[index].addEventListener('mouseleave', function(){
        goals[index].style.boxShadow = '0 8px 16px 0 #ffffff';
    });
    
};

const un = document.querySelector('.un');

un.addEventListener('mouseenter', function(){
    un.style.backgroundColor = '#bdbdbd';
})

un.addEventListener('mouseleave', function(){
    un.style.backgroundColor = '#ffffff';
})

const ourgoals = document.querySelector('#ourgoals');
ourgoals.style.backgroundColor = '#ffffff';

ourgoals.addEventListener('mouseenter', function(){
    ourgoals.style.boxShadow = '0 8px 16px 0 #bdbdbd';
});

ourgoals.addEventListener('mouseleave', function(){
    ourgoals.style.boxShadow = '0 8px 16px 0 #ffffff';
});

const more = document.querySelector('#more');
more.style.backgroundColor = '#ffffff';

more.addEventListener('mouseenter', function(){
    more.style.boxShadow = '0 8px 16px 0 #bdbdbd';
});

more.addEventListener('mouseleave', function(){
    more.style.boxShadow = '0 8px 16px 0 #ffffff';
});

const aboutme = document.querySelector('#aboutme');
aboutme.style.backgroundColor = '#ffffff';

aboutme.addEventListener('mouseenter', function(){
    aboutme.style.boxShadow = '0 8px 16px 0 #bdbdbd';
});

aboutme.addEventListener('mouseleave', function(){
    aboutme.style.boxShadow = '0 8px 16px 0 #ffffff';
});


/* const card = document.querySelector('#card');

card.addEventListener('mouseenter', function(){
    ourgoals.style.boxShadow = '0 8px 16px 0 #bdbdbd';
});

card.addEventListener('mouseleave', function(){
    card.style.boxShadow = '0 8px 16px 0 #ffffff';
});

 */

 /* const video = document.getElementById('video');

 video.addEventListener('mouseenter', function(){
     video.autoplay = true;
     video.load();
 }); */

 /* const name = document.querySelector('#name');
 const comment = document.querySelector('#comment');
 const submit = document.querySelector('#submit');

 let data = null;
 const datajson = null;
 submit.addEventListener('click', function(){
    if(localStorage.getItem('name') === null && localStorage.getItem('comment') === null){
        alert('Data tidak boleh kosong');
    }else
    datajson = JSON.parse(localStorage.getItem(dataJSON));
    localStorage.setItem(data, JSON.stringify(data));
    
 }); */
 