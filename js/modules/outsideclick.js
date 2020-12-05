export default function outsideClick(element, events, callback){
    const html = document.documentElement
    const outside = 'data-outside'

    if(!element.hasAttribute(outside)){
        events.forEach(e => {
            setTimeout(()=>{
                html.addEventListener(e, handleOutsideClick)
            })
            
        })

        element.setAttribute(outside, '')
    }

    function handleOutsideClick(event){
        if(!element.contains(event.target)){
            callback()
            element.removeAttribute(outside)
            events.forEach(e => {
                html.removeEventListener(e, handleOutsideClick)
            })
        }
    }
}