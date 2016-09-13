var greekTable = document.createElement('table')
var greekHeader = document.createElement('tr')
greekTable.appendChild(greekHeader)

var greekHeaderArray = ["Letter","Name"]

var greekUpperCase = ["Α","Β","Γ","Δ","Ε","Ζ","Η","Θ","Ι","Κ","Λ","Μ","Ν","Ξ","Ο","Π","Ρ","Σ","Τ","Υ","Φ","Χ","Ψ","Ω"]
var greekLowerCase = ["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ","τ","υ","φ","χ","ψ","ω"]
var greekLetterName = ["alpha","beta","gamma","delta","epsilon","zeta","eta","theta","iota","kappa","lambda","mu","nu","xi","omicron","pi","rho","sigma","tau","upsilon","phi","chi","psi","omega"]

var col1 = document.createElement('td')
col1.innerHTML = greekHeaderArray[0]
col1.colSpan = 2
greekHeader.appendChild(col1)

var col2 = document.createElement('td')
col2.innerHTML = greekHeaderArray[1]
greekHeader.appendChild(col2)

function appendToGreekTable(index){
	var greekRow = document.createElement('tr')
	greekTable.appendChild(greekRow)
	
	var col1 = document.createElement('td')
	greekRow.appendChild(col1)
	col1.innerHTML = greekUpperCase[index]
	
	var col2 = document.createElement('td')
	greekRow.appendChild(col2)
	col2.innerHTML = greekLowerCase[index]
	
	var col3 = document.createElement('td')
	greekRow.appendChild(col3)
	col3.innerHTML = greekLetterName[index]
}

greekUpperCase.forEach(appendToGreekTable)

document.getElementById('characterTable').appendChild(greekTable)
