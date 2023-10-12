const offerBtnDesktop = document.querySelector('.offer-show-list')
const offerBtnDesktopChangeColor = document.querySelector('.offer-color')
const dropdownDesktopItem = document.querySelector('.desktop-offer-menu')
const arrowIconDesktopMenu = document.querySelector('.nav__arrow-icon')
// const mediaBarFB = document.querySelector('.nav__fb-space')
// const mediaBarIG = document.querySelector('.nav__ig-space')
const nav = document.querySelector('.nav')
const logoDesktop = document.querySelector('.nav__logo')
const burgerBTN = document.querySelector('.nav__burger-btn')
const spanBTN1 = document.querySelector('.nav__burger-btn-span1')
const spanBTN2 = document.querySelector('.nav__burger-btn-span2')
const spanBTN3 = document.querySelector('.nav__burger-btn-span3')
const mobileMenu = document.querySelector('.nav__mobile-menu-container')
const showMobileMenuByOfferClick = document.querySelector('.mobile-menu-offer-item')
const showedMobileMenuByOfferClick = document.querySelector('.nav__mobile-menu-container-offer-submenu')
const submenuULitems1 = document.querySelector('.submenu-LI-link1')
const submenuULitems2 = document.querySelector('.submenu-LI-link2')
const submenuULitems3 = document.querySelector('.submenu-LI-link3')
const submenuULitems4 = document.querySelector('.submenu-LI-link4')
const submenuULitems5 = document.querySelector('.submenu-LI-link5')
const submenuULitems6 = document.querySelector('.submenu-LI-link6')
const submenuULitems7 = document.querySelector('.submenu-LI-link7')
const submenuULitems8 = document.querySelector('.submenu-LI-link8')
const submenuBackBtn = document.querySelector('.nav__mobile-menu-items-back-btn')
// const mediaBar = document.querySelector('.nav__media-bar')
const accordionAll = document.querySelectorAll('.aboutme__accordion')
const FaqAll = document.querySelectorAll('.faq__faq-box')
const footerYear = document.querySelector('.footer-year')
const cookieBox = document.querySelector('.cookies__cookie-box')
const cookieBtn = document.querySelector('.cookies__cookie-btn')
const navTransparentColorToWhite = document.querySelector('.nav')
const navWhiteMenuToBlack = document.querySelectorAll('.nav__desktop-menu-items')
const mobileNavBurgerBtn = document.querySelectorAll('.nav__burger-btn-items')




//dropdown menu for "offer" item (desktop):
const showDekstopOfferMenu = () => {
	offerBtnDesktopChangeColor.style.color = '#d768b2'
	dropdownDesktopItem.classList.add('active')
	arrowIconDesktopMenu.classList.add('rotate')
	arrowIconDesktopMenu.classList.remove('rotate-rev')
}

const hideDekstopOfferMenu = () => {
	offerBtnDesktopChangeColor.style.color = '#333333'
	dropdownDesktopItem.classList.remove('active')
	arrowIconDesktopMenu.classList.remove('rotate')
	arrowIconDesktopMenu.classList.add('rotate-rev')
}

// media bar icon - changing to color:
const changeMediaIconsFB = () => {
	mediaBarFB.removeAttribute('src')
	mediaBarFB.setAttribute('src', 'dist/img/icon/fb-color.png')
}

const changeMediaIconsIG = () => {
	mediaBarIG.removeAttribute('src')
	mediaBarIG.setAttribute('src', 'dist/img/icon/ig-color.png')
}

const changeMediaIconsFBLeave = () => {
	mediaBarFB.removeAttribute('src')
	mediaBarFB.setAttribute('src', 'dist/img/icon/fb.png')
}

const changeMediaIconsIGLeave = () => {
	mediaBarIG.removeAttribute('src')
	mediaBarIG.setAttribute('src', 'dist/img/icon/ig.png')
}

// nav shadow and white color from transparent to navigation, and resize navigation menu and logo, changing arrow down color
function addShadow() {
	if (window.scrollY < 1) {
		nav.classList.remove('nav-bottom-shadow')
		logoDesktop.classList.remove('resize-desktop-logo')
		logoDesktop.classList.add('resize-desktop-logo-rev')
		navTransparentColorToWhite.style.backgroundColor = "transparent";
		navWhiteMenuToBlack.forEach(el => el.classList.remove('nav__desktop-menu-items-js'))
		navWhiteMenuToBlack.forEach(el => el.classList.add('nav__desktop-menu-items'))
		arrowIconDesktopMenu.removeAttribute('src')
		arrowIconDesktopMenu.setAttribute('src', 'dist/img/icon/arrow-icon-bottom-white.svg')
		mobileNavBurgerBtn.forEach(el => el.style.backgroundColor = '#ffffff')

		if (mobileMenu.classList.contains('mobile-menu-active')) {
			mobileNavBurgerBtn.forEach(el => el.style.backgroundColor = '#000000')
		}
	} else {
		nav.classList.add('nav-bottom-shadow')
		logoDesktop.classList.remove('resize-desktop-logo-rev')
		logoDesktop.classList.add('resize-desktop-logo')
		navTransparentColorToWhite.style.backgroundColor = "#ffffff";
		navWhiteMenuToBlack.forEach(el => el.classList.remove('nav__desktop-menu-items'))
		navWhiteMenuToBlack.forEach(el => el.classList.add('nav__desktop-menu-items-js'))
		arrowIconDesktopMenu.removeAttribute('src')
		arrowIconDesktopMenu.setAttribute('src', 'dist/img/icon/arrow-icon-bottom.svg')
		mobileNavBurgerBtn.forEach(el => el.style.backgroundColor = '#000000')
	}
	
	// media bar:

	// if (window.scrollY > 500) {
	// 	mediaBar.classList.remove('remove-media-bar-rev')
	// 	mediaBar.classList.add('remove-media-bar')
	// } else {
	// 	mediaBar.classList.remove('remove-media-bar')
	// 	mediaBar.classList.add('remove-media-bar-rev')
	// }

}

const closeMobileMenu = () => {
    mobileMenu.classList.remove('mobile-menu-active')
    burgerBTN.classList.remove('burger-btn-border')
    spanBTN1.classList.remove('burger-span1')
    spanBTN2.classList.remove('burger-span2')
    spanBTN3.classList.remove('burger-span3')
    showedMobileMenuByOfferClick.classList.remove('mobile-menu-active')
}

const closeMobileMenuByClickElements = () => {
    const mobileMenuLinks1 = document.querySelector('.mobile-nav-links1')
    const mobileMenuLinks2 = document.querySelector('.mobile-nav-links2')
    const mobileMenuLinks3 = document.querySelector('.mobile-nav-links3')
    const mobileMenuLinks4 = document.querySelector('.mobile-nav-links4')
    const mobileMenuLinks5 = document.querySelector('.mobile-nav-links5')
    const mobileMenuLinks6 = document.querySelector('.mobile-nav-links6')
    mobileMenuLinks1.addEventListener('click', showMobileMenu)
    mobileMenuLinks2.addEventListener('click', showMobileMenu)
    mobileMenuLinks3.addEventListener('click', showMobileMenu)
    mobileMenuLinks4.addEventListener('click', showMobileMenu)
    mobileMenuLinks5.addEventListener('click', showMobileMenu)
    mobileMenuLinks6.addEventListener('click', showMobileMenu)
}

const closeSubmenuOffer = () => {
    showedMobileMenuByOfferClick.classList.remove('mobile-menu-active')
}

const showOfferSubmenu = () => {
    if (!showedMobileMenuByOfferClick.classList.contains('mobile-menu-active')) {
        showedMobileMenuByOfferClick.classList.add('mobile-menu-active')
        submenuULitems1.addEventListener('click', showMobileMenu)
        submenuULitems2.addEventListener('click', showMobileMenu)
        submenuULitems3.addEventListener('click', showMobileMenu)
        submenuULitems4.addEventListener('click', showMobileMenu)
        submenuULitems5.addEventListener('click', showMobileMenu)
        submenuULitems6.addEventListener('click', showMobileMenu)
        submenuULitems7.addEventListener('click', showMobileMenu)
        submenuULitems8.addEventListener('click', showMobileMenu)
        submenuBackBtn.addEventListener('click', closeSubmenuOffer)
    } else if ( showedMobileMenuByOfferClick.classList.contains('mobile-menu-active')) {
        showedMobileMenuByOfferClick.classList.remove('mobile-menu-active')
    }

   
}

const showMobileMenu = () => {
	if (!mobileMenu.classList.contains('mobile-menu-active')) {
        closeMobileMenuByClickElements()
		logoDesktop.addEventListener('click', closeMobileMenu)
        showMobileMenuByOfferClick.addEventListener('click', showOfferSubmenu)
		mobileMenu.classList.add('mobile-menu-active')
		burgerBTN.classList.add('burger-btn-border')
		spanBTN1.classList.add('burger-span1')
		spanBTN2.classList.add('burger-span2')
		spanBTN3.classList.add('burger-span3')

		if (window.scrollY < 1) {
			mobileNavBurgerBtn.forEach(el => el.style.backgroundColor = '#000000')
		}
	} else if (mobileMenu.classList.contains('mobile-menu-active')) {
		mobileMenu.classList.remove('mobile-menu-active')
		burgerBTN.classList.remove('burger-btn-border')
		spanBTN1.classList.remove('burger-span1')
		spanBTN2.classList.remove('burger-span2')
		spanBTN3.classList.remove('burger-span3')
        showedMobileMenuByOfferClick.classList.remove('mobile-menu-active')

		if (window.scrollY < 1) {
			mobileNavBurgerBtn.forEach(el => el.style.backgroundColor = '#ffffff')
		}
	}
}

// dropdown "offer" menu:
offerBtnDesktop.addEventListener('mouseover', showDekstopOfferMenu)
dropdownDesktopItem.addEventListener('mouseover', showDekstopOfferMenu)
offerBtnDesktop.addEventListener('mouseleave', hideDekstopOfferMenu)
dropdownDesktopItem.addEventListener('mouseleave', hideDekstopOfferMenu)

// media bar icon - changing to color:
// mediaBarFB.addEventListener('mouseover', changeMediaIconsFB)
// mediaBarIG.addEventListener('mouseover', changeMediaIconsIG)
// mediaBarFB.addEventListener('mouseleave', changeMediaIconsFBLeave)
// mediaBarIG.addEventListener('mouseleave', changeMediaIconsIGLeave)

// nav shadow & media bar:
window.addEventListener('scroll', addShadow)

// burger btn:
burgerBTN.addEventListener('click', showMobileMenu)

// aboutme / education:
const showAndHideFAQeducation = (e) => {
	if (!e.target.nextElementSibling.classList.contains('show-panel')) {
		e.target.querySelector('.aboutme__h3-education-svg-icon').classList.remove('rotate-rev-icon-aboutme')
		e.target.nextElementSibling.classList.remove('hide-panel')
		e.target.nextElementSibling.classList.add('show-panel')
		e.target.querySelector('.aboutme__h3-education-svg-icon').classList.add('rotate-icon-aboutme')
		e.target.classList.add('aboutme-bg-accordion')
	} else if (e.target.nextElementSibling.classList.contains('show-panel')) {
		e.target.classList.remove('aboutme-bg-accordion')
		e.target.nextElementSibling.classList.add('hide-panel')
		e.target.nextElementSibling.classList.remove('show-panel')
		e.target.querySelector('.aboutme__h3-education-svg-icon').classList.remove('rotate-icon-aboutme')
		e.target.querySelector('.aboutme__h3-education-svg-icon').classList.add('rotate-rev-icon-aboutme')
	}
	e.target.classList.toggle('accordion-bgc')
}

accordionAll.forEach(listen => listen.addEventListener('click', showAndHideFAQeducation))

// offer section:




// FAQ

const showFaqInfo = (e) => {
	if (!e.target.nextElementSibling.classList.contains('show-panel-faq')) {
		e.target.querySelector('.faq__h3-faq-svg-icon').classList.remove('rotate-rev-icon-faq')
		e.target.nextElementSibling.classList.remove('hide-panel-faq')
		e.target.nextElementSibling.classList.add('show-panel-faq')
		e.target.querySelector('.faq__h3-faq-svg-icon').classList.add('rotate-icon-faq')
		e.target.classList.add('faq-box-color')
	} else if (e.target.nextElementSibling.classList.contains('show-panel-faq')) {
		e.target.classList.remove('faq-box-color')
		e.target.nextElementSibling.classList.add('hide-panel-faq')
		e.target.nextElementSibling.classList.remove('show-panel-faq')
		e.target.querySelector('.faq__h3-faq-svg-icon').classList.remove('rotate-icon-faq')
		e.target.querySelector('.faq__h3-faq-svg-icon').classList.add('rotate-rev-icon-faq')
	}
	e.target.classList.toggle('accordion-bgc')
}

FaqAll.forEach(listen => listen.addEventListener('click', showFaqInfo))



// Footer - year
const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}
handleCurrentYear();


// HANDLE COOKIES:

const showCookie = () => {
	const cookieEaten = localStorage.getItem('cookie')
	
	if (cookieEaten) {
		cookieBox.classList.add('hide-cookies')
	}
}

const handleCookieBox = () => {
	localStorage.setItem('cookie', 'true')
	cookieBox.classList.add('hide-cookies')
}

cookieBtn.addEventListener('click', handleCookieBox)
showCookie()


