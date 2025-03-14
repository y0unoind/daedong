document.addEventListener('DOMContentLoaded', () => {
    // 햄버거 메뉴 토글
    const burger = document.querySelector('.menu-trigger');
    const nav = document.querySelector('.nav');

    if (burger && nav) {
        burger.addEventListener('click', (e) => {
            e.preventDefault();
            burger.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // 버튼 기반 슬라이드 기능
    const buttons = document.querySelectorAll('.slide-button');
    const slideWrapper = document.querySelector('.slide-wrapper');

    if (buttons.length > 0 && slideWrapper) {
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const step = parseInt(button.getAttribute('data-step'));

                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const translateX = (step - 1) * -33.333;
                slideWrapper.style.transform = `translateX(${translateX}%)`;
            });
        });

        buttons[0].classList.add('active');
        slideWrapper.style.transform = 'translateX(0%)';
    }

    // Swiper 초기화
    const swiper = new Swiper('.visual_swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 0,
    });

            // 롤링 배너 복제본 생성
            let roller = document.querySelector('.rolling-list');
            roller.id = 'roller1'; // 아이디 부여
    
            let clone = roller.cloneNode(true)
            // cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용
            clone.id = 'roller2';
            document.querySelector('.wrap').appendChild(clone); // wrap 하위 자식으로 부착
    
            document.querySelector('#roller1').style.left = '0px';
            document.querySelector('#roller2').style.left = document.querySelector('.rolling-list ul').offsetWidth + 'px';
            // offsetWidth : 요소의 크기 확인(margin을 제외한 padding값, border값까지 계산한 값)
    
            roller.classList.add('original');
            clone.classList.add('clone');
});