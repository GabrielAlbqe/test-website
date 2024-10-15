const sctObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{

        }
    })
})

const elements = document.querySelectorAll('.Hidden');

elements.forEach((element) => sctObserver.observe(element))
