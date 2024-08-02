let resMap = {}
let seasons = []
let seasonLink = {}
const reg = /[^a-zA-Z\u4E00-\u9FA5]+/

const folder = dv.current().file.folder
const folders = folder.split('/')
const projectName = folders[1].replace('用例库', '')

dv.pages(`"2.迭代/${projectName}"`).map(b => {
	b.file.lists.map(t => {
		let season = b.file.name
		let curMode = folders[folders.length - 1]
		const [caseName, status] = t.text.split(/\s+/)
		const caseMode = t.section.toString().split('> ')[1].split(']]')[0]
		if ((folders.length == 2 && caseMode == '未分组') || (curMode.replace(reg, '') === caseMode.replace(reg, ''))) {
			if (t.text.toString().split('|')[1].split(']]')[0] == dv.current().file.name) resMap[season] = status || '◻️'
		}

		if (seasons.indexOf(season) == -1) seasons.push(season)
		seasonLink[season] = b.file.link
	})
})

seasons.sort((a, b) => b - a)
dv.table(seasons.map(s => `[[2.迭代/${projectName}/${s} | S${s}]]`), [seasons.map(s => resMap[s] || '➖')])


