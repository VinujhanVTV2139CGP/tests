function testFunction() {
    const container = document.getElementById("container")
    const eingabe = document.getElementById("userinput").value
    console.log(eingabe);

    container.innerHTML = ""

    for (let i = 0; i <= eingabe; i++) {
        const neuesElement = document.createElement("div")
        neuesElement.id = "box"
        neuesElement.innerHTML = i

        container.appendChild(neuesElement)
    }
}

function calc() {
    const zahl1 = parseFloat(document.getElementById("zahl1").value)
    const zahl2 = parseFloat(document.getElementById("zahl2").value)

    const result = zahl1 + zahl2
    
    document.getElementById("resultat").innerHTML = "Ergebnis: " + result
}


function create(){
    const width = parseFloat(document.getElementById("inputWidth").value)
    const height = parseFloat(document.getElementById("inputHeight").value)
    const Box = document.getElementById("Box")
    console.log(width)
    console.log(height)
    
    Box.style.width = width + "px"
    Box.style.height = height + "px"
}



function maker() {
    console.log("test");
    const box = document.getElementById("box")
    const höhe = document.getElementById("höhe").value
    const breite = document.getElementById("breite").value
    
    box.style.width = breite + "px"
    box.style.height = höhe + "px"
    wert.innerHTML = "Value: " + höhe
    wert2.innerHTML = "Value: " + breite

    const rgb = `rgb(${breite}, 100, 50)`
    console.log(rgb);
}

function color(){
    const box = document.getElementById("box")
    const rot = document.getElementById("Red").value
    const grün = document.getElementById("Green").value
    const blau = document.getElementById("Blue").value
    const rgb = `rgb(${rot},${grün},${blau})`

    box.style.backgroundColor = rgb
    console.log(rgb)
    rotwert.innerHTML = "Wert: " + rot
    grünwert.innerHTML = "Wert: " + grün
    blauwert.innerHTML = "Wert: " + blau
}

function Generieren(){
    const elementInput = document.getElementById("element").value
    const TextInput = document.getElementById("text").value
    const TextfarbeInput = document.getElementById("textColor").value
    const HintergrundInput = document.getElementById("backgroundColor").value
    const PropertyInput = document.getElementById("Property").value
    const WertInput = document.getElementById("Wert").value
    
    console.log(elementInput)
    console.log(TextInput)
    console.log(TextfarbeInput)
    console.log (HintergrundInput)
    console.log(PropertyInput)
    console.log(WertInput)

    const element = document.createElement(elementInput)

    element.innerHTML = TextInput
    element.style.color = TextfarbeInput
    element.style.backgroundColor = HintergrundInput

    
    const miniWebsite = document.getElementById("miniWebsite")
    miniWebsite.appendChild(element)
}

async function catAPI() {
    const catFacts = document.getElementById("catFacts")

    const response = await fetch("https://cat-fact.herokuapp.com/facts")
    const facts = await response.json()

    console.log(facts);

    facts.forEach(fact => {
       
        const text = document.createElement("p")
        text.innerHTML = fact.text
        

        catFacts.appendChild(text)
    })
}
// catAPI()

async function Wetter(){
    console.log('hakkjlkjfds')
    let response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Bern&appid=d785242fc085ccc3b1ac751dd9d18df1&lang=de")
    let data = await response.json()
    console.log(data.weather)
    const Wetter = document.getElementById("wetterdaten")
    wetterdaten.innerHTML= data.main.temp 
}

Wetter()
