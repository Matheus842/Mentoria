const res = document.querySelector('#res')
const som = document.querySelector('#som')
const sub = document.querySelector('#sub')

som.addEventListener('click', ()=>{
    res.value = parseFloat(res.value) + 1
})

sub.addEventListener('click', ()=>{
    res.value = parseFloat(res.value) - 1
})