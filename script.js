const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')

if(tabMenu.length && tabContent.length){

    activeTab(0)
    
    function activeTab(index){
        Array.from(tabContent).map(item => item.classList.remove('ativo'))
        tabContent[index].classList.add('ativo')
    }
    
    Array.from(tabMenu)
        .map((item, index) => 
            item.addEventListener('click', () => 
                activeTab(index))
            )

}
