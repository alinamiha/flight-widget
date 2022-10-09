const tableBody = document.getElementById('table-body')

let flights = [{
        time: '09:22',
        distination: 'ODESA',
        flight: 'OX 203',
        gate: 'A 01',
        remarks: 'ON TIME'
    },
    {
        time: '09:22',
        distination: 'KYIV',
        flight: 'OX 203',
        gate: 'A 01',
        remarks: 'DELAYED'
    },
    {
        time: '09:22',
        distination: 'KHERSON',
        flight: 'OX 203',
        gate: 'A 01',
        remarks: 'CANCELLED'
    }
]

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement('tr')

        for (const flightDetail in flight) {
            const tableCell = document.createElement('td')
            const word = [...flight[flightDetail]]

            for (const [index, letter] of word.entries()) {
                const letterElement = document.createElement('div')

                setTimeout(() => {
                    letterElement.className = 'flip'
                    letterElement.textContent = letter
                    tableCell.appendChild(letterElement)
                }, 100 * index)
            }

            tableRow.appendChild(tableCell)
        }
        tableBody.appendChild(tableRow)
    }


}
populateTable()