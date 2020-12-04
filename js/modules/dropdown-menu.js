import outsideClick from './outsideclick.js'

export default function initDropDownMenu(){

    const dropdownMenus = document.querySelectorAll('[data-dropdown]')


    dropdownMenus.forEach(menu => menu.addEventListener('touchstart', handleClick))
    dropdownMenus.forEach(menu => menu.addEventListener('click', handleClick))


    function handleClick(event){
        event.preventDefault()
        this.classList.add('active')
        outsideClick(this, ['touchstart','click'], () => {
            this.classList.remove('active')
        })
    }
}



