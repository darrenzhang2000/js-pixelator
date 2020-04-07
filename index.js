const table = document.getElementsByTagName("table")[0]
var numRows = 1
var numCols = 1
var colorDropdown = document.getElementById("colors")
var pickedColor = colorDropdown.options[colorDropdown.selectedIndex].value

colorDropdown.addEventListener('change', () => {
    var newColor = colorDropdown.options[colorDropdown.selectedIndex].value
    pickedColor = newColor
    console.log(newColor)
})


const addRow = () => {
    numRows++
    const row = document.createElement("tr")
    for (let i = 0; i < numCols; i++) {
        const col = document.createElement("td")
        col.addEventListener("click", () => {
            col.style.color = pickedColor
            console.log("clicked", pickedColor)
        })
        const text = document.createTextNode("Pika")
        col.appendChild(text)
        row.appendChild(col)
    }
    table.appendChild(row)
}

const addCol = () => {
    numCols++
    let rows = document.getElementsByTagName("tr")
    for (row of rows) {
        const col = document.createElement("td")
        col.addEventListener("click", () => {
            col.style.color = pickedColor
            console.log("clicked", pickedColor)

        })
        const text = document.createTextNode("Pika")
        col.appendChild(text)
        row.appendChild(col)
    }
}

const removeRow = () => {
    if (numRows > 1) {
        numRows--
        let rows = document.getElementsByTagName("tr")
        rows[rows.length - 1].remove()
    }
}

const removeCol = () => {
    if (numCols > 1) {
        numCols--
        let rows = document.getElementsByTagName("tr")
        for (row of rows) {
            row.removeChild(row.lastChild)
        }
    }
}
