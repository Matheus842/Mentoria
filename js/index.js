const checkbox = document.querySelector('#theme')
checkbox.addEventListener('change', function(){
    if(this.checked){
        document.documentElement.setAttribute('data-theme', 'light')
    } else {
        document.documentElement.setAttribute('data-theme', 'dark')
    }
})