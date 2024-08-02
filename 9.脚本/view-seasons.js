/**
 * 迭代视图
 * todo. 热力图
 */
let caseResMap = {}
let seasons = []
let seasonLink = {}

const projectName = dv.current().file.folder.split('/')[1]
dv.pages(`"2.迭代/${projectName}"`).map(b => {
	b.file.lists.map(t => {
		let mode = t.link.toString().split('>')[1].split(']]')[0]
		const texts = t.text.trim().split(/\s+/)
		const status = texts[texts.length - 1]
		const caseName = t.outlinks.toString()
		let season = b.file.name
		caseResMap[mode] = caseResMap[mode] || {}
		caseResMap[mode][caseName] = caseResMap[mode][caseName] || {}
		caseResMap[mode][caseName][season] = `[[${season}#${mode} | ${status}]]`

		if (seasons.indexOf(season) == -1) seasons.push(season)
		seasonLink[season] = b.file.link
	})
})

seasons.sort((a, b) => b - a)
let table = []
Object.keys(caseResMap).sort((a, b) =>  a.localeCompare(b)).map(mode => {
	Object.keys(caseResMap[mode]).sort((a, b) =>  a.localeCompare(b)).map((c, i) => {
		let line = i == 0 ? [mode.indexOf('未分组') === -1 ? mode : undefined, c] : [' ', c]
		let item = caseResMap[mode][c]
			seasons.map(s => {
				line.push(item[s] || `[[${s}#${mode} | ➖]]`)
			})
			table.push(line)
	})
})

let preHeader = ['模块', '用例']
dv.table(preHeader.concat(seasons.map(s => `[[${s} | S${s}]]`)), table)


