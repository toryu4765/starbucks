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

const thisYear = document.querySelector('.this-year') // 올해 년도 계산
thisYear.textContent = new Date().getFullYear()