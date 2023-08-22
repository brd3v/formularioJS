

var btn = document.getElementById('btn')





btn.addEventListener('click', function()
{
  
    var name = document.getElementById('name').value
    var tel = document.getElementById('tel').value
    var email = document.getElementById('email').value
  if(name !=='' && tel !== '' && email !==''){
console.log(name)
console.log(tel)
console.log(email)



    
} else{
    console.log('preencha os campos ')
}}
)