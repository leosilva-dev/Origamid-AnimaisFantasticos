function initTabNav(){

    const tabMenu = document.querySelectorAll('.js-tabmenu li')
    const tabContent = document.querySelectorAll('.js-tabcontent section')

    if(tabMenu.length && tabContent.length){

    activeTab(0)
    
    function activeTab(index){
        Array.from(tabContent).map(item => item.classList.remove('ativo'))
        tabContent[index].classList.add('ativo')
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
