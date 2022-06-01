const panels = document.querySelectorAll('.present')

panels.forEach(present => {
    present.addEventListener('click', () => {
        //present.classList.toggle('active')
        removeActiveClasses()
        present.classList.add('soon')
    })
})

function removeActiveClasses() {
    panels.forEach(present => {
       present.classList.remove('soon')
    })
}