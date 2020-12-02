export default function initTabNav(){

    const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
    const tabContent = document.querySelectorAll('[data-tab="content"] section')

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


