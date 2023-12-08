// criando a função onclick="toggleMode()"
function toggleMode() {
  // alert(`oi`)
  //  o documet representa o nosso documento visita .acesso
  // funcionalidade e propriedades  é objeto. eu acesso o html através .documentElement
  const html = document.documentElement
  // ou simplifico se tiver light ele tira. se não ele coloca.
  html.classList.toggle("light")

  // // em html na lista de classe contém light ?
  // if(html.classList.contains('light')){
  //   // se sim, remove-se a class light e adiciona dark
  //   html.classList.remove('light')

  // }else{
  //   // se não, add a class light e remove dark
  //   html.classList.add('light')
  // }

  // trocando a imagem no light. faço um busca nos seletores do avatar
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")){
    img.setAttribute(
      "src",
      "./assets/MobileAvatares/avatarcawboy.png",
      "alt",
      "Foto de Alexoab de costas em uma fazenda com chapéu. Com o fundo de uma terra na época da seca."
    )
  }else{
    img.setAttribute( "src","assets/MobileAvatares/avatarAlexdev-light.png")
  }
}
