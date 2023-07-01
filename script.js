function toggleMode() {
const html = document.body
  html.classList.toggle("light")

//pegar a tag img
 const img = document.querySelector("#profile img") 
//substituira imagem
if(html.classList.contains('light')) { 
 // se tiver light mode, adicionar a imagem light
 img.setAttribute('scr', './assets/avatar-light.png')
 } else {
  // se tiver sem light mode, manter a imagem normal
  img.setAttribute('scr', './assets/avatar.png')
 }
}
 
