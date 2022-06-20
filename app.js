const btns = document.querySelectorAll('.btn')

btns.forEach(btn => {
  btn.addEventListener('click',() => {
    console.log("clicado"); 
  })
})