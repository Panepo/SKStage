require! {
	'fs': fs
	'./data.ls': data
	'./bonus.ls': bonus
	'./char.ls': chars
}
# ===============================================================================
# PARSE STAGE DATA
# ===============================================================================
slotData = <[stage diff name point type exp X expM X gold X goldM X title]>
slotBonus = <[name 0 1 2 3 4 5 6]>

output = []
tempBonus = []

for dataValue, i in data
	output[i] = {}
	for slotValue, j in slotData
		if slotValue !== 'X'
			output[i][slotValue] = dataValue[j]

for bonusValue, i in bonus
	tempBonus[i] = {}
	for slotValue, j in slotBonus
		if slotValue !== 'X'
			tempBonus[i][slotValue] = bonusValue[j]

for data, i in output
	data['0'] = '0'
	data['1'] = '0'
	data['2'] = '0'
	data['3'] = '0'
	data['4'] = '0'
	data['5'] = '0'
	data['6'] = '0'
	for temp, j in tempBonus
		if data.name is temp.name
			data['0'] = temp['0']
			data['1'] = temp['1']
			data['2'] = temp['2']
			data['3'] = temp['3']
			data['4'] = temp['4']
			data['5'] = temp['5']
			data['6'] = temp['6']
			break

output = JSON.stringify output
console.log 'data.json arrange complete!'
fs.writeFileSync './raw/data.json', output

# ===============================================================================
# PARSE CHAR DATA
# ===============================================================================
#slotChar = <[name type rare day image ]>
slotChar = <[name type X day image ]>
outChar = []
for char, i in chars
	outChar[i] = {}
	for slotValue, j in slotChar
		if slotValue !== 'X'
			outChar[i][slotValue] = char[j]

outChar = JSON.stringify outChar
console.log 'char.json arrange complete!'
fs.writeFileSync './raw/char.json', outChar
