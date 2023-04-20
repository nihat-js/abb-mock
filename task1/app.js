const tabs = [
  {
    name: 'Web Design',
    source: "",
    text: " lorem10 asperiores vel accusantium nesciunt voluptates accusamus quidem sed? Nobis deserunt, accusamus doloremque quisquam reprehenderit expedita magnam, pariatur quod fugiat at porro quo maxime. Quasi saepe accusamus eligendi laborum odio architecto  ",
    active: true,

  },
  {
    name: "Graphic Design",
    source: "",
    text: "This is a graphic design",
    active: false,

  },
  {
    name: "Online Support ",
    source: "",
    text: "Online support",
    active: false,

  },
  {
    name: 'App design',
    source: "",
    text: "App Design ",
    active: false,

  },
  {
    name: "Online marketing",
    source: "",
    text: "Online marketing",
    active: false,

  },
  {
    name: "Seo Service",
    source: '',
    text: "Seo Service",
    active: false,

  }

]

function renderServices() {

}

tabs.forEach(tab => {
  let p = document.createElement("p")
  p.innerText = tab.name

  p.onclick = () => {
    tabs.forEach(tab2 => {
      if (tab2.name == tab.name) {
          tab2.active = true
      }else{
        tab2.active = false
      }
    })
    renderActiveServicesBox()
  }
  if (tab.active) {
    p.classList = "active"
  }
  document.querySelector(".tabs").append(p)

})

function renderActiveServicesTab(){
  tabs.forEach( tab => {
    if (tab.active){
      document.querySelector
    }
  })
}

function renderActiveServicesBox() {
  let tab = tabs.filter(tab => tab.active == true)[0]
  document.querySelector(".services .box  img ").src = tab.source
  document.querySelector(".services .box p").innerText = tab.text

}

renderActiveServicesBox()