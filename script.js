function initTabNav(){

    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')

    if(tabMenu.length && tabContent.length){

    activeTab(0)
    
    function activeTab(index){
        Array.from(tabContent).map(item => item.classList.remove('ativo'))
        console.log()
        tabContent[index].classList.add('ativo',tabContent[index].dataset.anime)
    }
    
    Array.from(tabMenu).map((item, index) => item.addEventListener('click', () => activeTab(index)))

}

}

initTabNav()


function initAccordion(){
    const accordionList = document.querySelectorAll('.js-accordion dt')

    if(accordionList.length){
        accordionList[0].classList.add('ativo')
        accordionList[0].nextElementSibling.classList.add('ativo')

        function activeAccordion(){   
            this.classList.toggle('ativo')
            this.nextElementSibling.classList.toggle('ativo')
        }

        // Array.from(accordionList).map(item => item.addEventListener('click', () => activeAccordion))
        accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion)
    })
    }

    
}

initAccordion()

function initScrollSuave(){
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

    function scrollToSection(event){
        event.preventDefault()
        const href = event.currentTarget.getAttribute('href')
        const section = document.querySelector(href)

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })


        // Alternative way!
        // const topo = section.offsetTop

        // window.scrollTo({
        //     top: topo,
        //     behavior: 'smooth'
        // })
    }

    linksInternos.forEach(link => {
        link.addEventListener('click', scrollToSection)
    })
}

initScrollSuave()

function initAnimacaoScroll(){
    const sections = document.querySelectorAll('.js-scroll')

    if(sections.length){
        const windowMetade = window.innerHeight * 0.6

        function animaScroll(){
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top 
                const isSectionVisible = (sectionTop - windowMetade) < 0
                if(isSectionVisible){
                    section.classList.add('ativo')
                } else{
                    section.classList.remove('ativo')
                }
            })
        }

        animaScroll()

        window.addEventListener('scroll', animaScroll)
    }
}

initAnimacaoScroll()

