const h1 = document.getElementById('h1'),
      banner = document.getElementById('banner'),
      button = document.getElementById('button'),
      container = document.getElementById('container'),
      container2 = document.getElementById('container2');

      

const onScroll = (event) => {

    const scrollPosition = event.target.scrollingElement.scrollTop;

    if(scrollPosition > 150){
        banner.style.backgroundSize = '150%';
        h1.style.opacity = 0
        button.style.scale = '0.8';;
        h1.style.translate = '0 -80px';
        h1.style.scale = '0.1';
        button.style.opacity = 0;
        button.style.translate = '0 -60px';
        container.style.scale = 1;
        container.style.opacity = 1;
        container.style.transform = 'translateX(0)';
    }else {
        banner.style.backgroundSize = '180%';
        h1.style.opacity = 1;
        h1.style.translate = 0;
        h1.style.scale = 1;
        button.style.opacity = 1;
        button.style.translate = 0;
        button.style.scale = 1;
        container.style.opacity = 0;
        container.style.scale = '0.6';
        container.style.transform = 'translateX(-100px)'
    }
    if(scrollPosition > 330){
        container2.style.scale = 1;
        container2.style.opacity = 1;
        container2.style.transform = 'translateX(0)';
    }else {
        container2.style.scale = '0.6';
        container2.style.opacity = 0;
        container2.style.transform = 'translateX(100px)';
    }
    console.log(scrollPosition)
};

document.addEventListener('scroll', onScroll);