require! {
	"fs": fs
	"./data.ls": data
	"./bonus.ls": bonus
}
slotData = <[name point type exp exp12 expM exp12M gold gold12 goldM gold12M]>
slotBonus = <[name sun mon tue wed thu fri sat]>

output = []
tempBonus = []

for dataValue, i in data
	output[i] = {}
	for slotValue, j in slotData
		output[i][slotValue] = data[i][j]

for bonusValue, i in bonus
	tempBonus[i] = {}
	for slotValue, j in slotBonus
		tempBonus[i][slotValue] = bonus[i][j]

for data, i in output
	data.sun = 0
	data.mon = 0
	data.tue = 0
	data.wed = 0
	data.thu = 0
	data.fri = 0
	data.sat = 0
	for temp, j in tempBonus
		if data.name is temp.name
			data.sun = temp.sun
			data.mon = temp.mon
			data.tue = temp.tue
			data.wed = temp.wed
			data.thu = temp.thu
			data.fri = temp.fri
			data.sat = temp.sat
			break

output = JSON.stringify output
console.log "data.json arrange complete!"
fs.writeFileSync "./src/raw/data.json", output