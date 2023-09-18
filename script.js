function toggleMode()  {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

    if (html.classList.contains("Light")) {
    html.classList.remove("Light")
  
    img.setAttribute('src', '/assets/assets/avatar.png')

 } else{
    html.classList.add("Light")
    img.setAttribute('src', '/assets/assets/avatar-light.png')

  }
  }

