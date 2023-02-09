'use strict'


// 검색창 요소

const searchEl = document.querySelector('.search')
const searchInputEl = searchEl.querySelector('input')

// 검색창 요소를 클릭
searchEl.addEventListener('click', function () {
  searchInputEl.focus()
})

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})



// 페이지 스크롤
const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top')
// 스크롤 발생 조절 (부하를 줌)
window.addEventListener('scroll', _.throttle(function () {
  // 스크롤위치가 500을 넘으면 Badge 요소 숨김
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    gsap.to(toTopEl, .2, {
      x: 0
    })

    // 스크롤위치가 500이 넘지 않으면 상단으로 버튼 숨김

  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300))
// 스크롤 버튼을 클릭하면, 페이지 위치를 최상단으로
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  })
})


const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
})



new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직슬라이드
  autoplay: true, // 자동재생 
  loop: true // 반복재생
})
new Swiper('.promotion .swiper-container', {
  autoplay: {
    delay: 5000
  },
  loop: true, // 반복재생
  slidesPerView: 3, // 한번에 보이는 슬라이드 개수
  spaceBetween: 10, // 슬라이드 여백
  centeredSlides: true, // 
  pagination: { // 페이지번호
    el: '.promotion .swiper-pagination', // 번호 요소선택자
    clickable: true
  },
  navigation: { // 이전/다음 버튼 
    prevEl: '.promotion .swiper-prev', // 이전버튼
    nextEl: '.promotion .swiper-next' // 다음버튼
  }
})
new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동재생
  loop: true, // 반복재생
  spaceBetween: 30, // 슬라이드 여백
  slidesPerView: 5, // 슬라이드 개수
  navigation: { // 이전,다음 버튼
    prevEl: '.awards .swiper-prev', // 이전버튼
    nextEl: '.awards .swiper-next' // 다음버튼
  }
})


const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add('hide')
  } else {
    promotionEl.classList.remove('hide')
  }
})

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(
    selector,
    random(1.5, 2.5), {
      delay: random(0, delay), // 애니메이션 지연시간
      y: size, // 수직으로 움직이는 양
      repeat: -1, // 반복수 -1 = 무한
      yoyo: true, // 재생된 애니메이션 뒤로가서 반복
      ease: Power1.easeInOut
    }
  )
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)



const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면 추가
      triggerElement: spyEl, // 보여짐 여부 요소를 지정
      triggerHook: .8 // 80% 지점에서 보여지는지  감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 뜨면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면 할당(중요)
})



const thisYear = document.querySelector('.this-year') // 올해 년도 계산
thisYear.textContent = new Date().getFullYear()
