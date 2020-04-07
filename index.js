const table = document.getElementsByTagName('table')[0]
var numRows = 3
var numCols = 3

const addRow = () => {
    const row = document.createElement('tr')
    for(i = 0; i < numCols; i++){
        console.log('td created')
        const col = document.createElement('td')
        const text = document.createTextNode('Pika')
        col.appendChild(text)
        row.appendChild(col)
    }
    table.appendChild(row)
}


