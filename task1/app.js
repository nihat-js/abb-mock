const tabs = [
  {
    name: 'Web Design',
    source: "./icon1.svg",
    text: " lorem10 asperiores vel accusantium nesciunt voluptates accusamus quidem sed? Nobis deserunt, accusamus doloremque quisquam reprehenderit expedita magnam, pariatur quod fugiat at porro quo maxime. Quasi saepe accusamus eligendi laborum odio architecto  ",
    active: true,

  },
  {
    name: "Graphic Design",
    source: "./icon2.svg",
    text: "This is a graphic design",
    active: false,

  },
  {
    name: "Online Support ",
    source: "./icon3.svg",
    text: "Online support",
    active: false,

  },
  {
    name: 'App design',
    source: "./icon4.svg",
    text: "App Design ",
    active: false,

  },
  {
    name: "Online marketing",
    source: "./icon5.svg",
    text: "Online marketing",
    active: false,

  },
  {
    name: "Seo Service",
    source: "./icon6.svg",
    text: "Seo Service",
    active: false,

  }

]

function renderServices() {

}

function changeActiveServiceTab(name) {
  console.log("bura gel");
  tabs.forEach(t => {
    if (t.name == name) {
      t.active = true
    } else {
      t.active = false
    }
  })
  renderActiveServicesBox()
  renderActiveServicesTab() /// for changin color
}


tabs.forEach(tab => {
  let p = document.createElement("p")
  p.innerText = tab.name

  p.onclick = () => { changeActiveServiceTab(tab.name) }

  renderActiveServicesBox()
  if (tab.active) {
    p.classList = "active"
  }
  document.querySelector(".tabs").append(p)

})

function renderActiveServicesTab() {
  let activeTab = tabs.filter(x => x.active === true)[0]
  let activeTabName = activeTab.name
  document.querySelectorAll(".services  .tabs p").forEach(x => {
    if (x.innerHTML == activeTabName) {
      x.classList.add("active")
    } else {
      x.classList.remove("active")
    }
  })
}

function renderActiveServicesBox() {
  let tab = tabs.filter(tab => tab.active == true)[0]
  document.querySelector(".services .box  img ").src = tab.source
  document.querySelector(".services .box p").innerText = tab.text

}

renderActiveServicesBox()