/**
 * 生成 docsify 侧边栏
 */
 const fs = require('fs')
 const path = require('path')
 
 async function generate_sidebar (directoryPath) {
    if (!fs.lstatSync(directoryPath).isDirectory()) return {}

    const files = await fs.readdirSync(directoryPath)
    let subFolders = []
    files.forEach(item => {
        let stat = fs.lstatSync(path.join(directoryPath, item))
        if (stat.isDirectory() === true) { 
            subFolders.push(item)
        }
    })

    const folderMap = {}
    await Promise.all(subFolders.map(async folder => {
        let catPath = `[${folder}](${directoryPath}/${folder}/_sidebar.md)`
        console.log(catPath, folder, '=====')
        folderMap[folder] = catPath
    
        const _path = path.join(directoryPath, folder)

        const files = await fs.readdirSync(_path)
        const markdownFiles = files.filter(file => path.extname(file) === '.md' && file !== '_sidebar.md')

        let content = ''
        const subFolderMap = await generate_sidebar(_path)
        Object.keys(subFolderMap).map(f => {
            content += `- ${subFolderMap[f]}\n`
        })

        await Promise.all(markdownFiles.map(async file => {
            let title = file.split('.md')[0]
            content += `- [${title}](${_path}/${file})\n`
        }))
        console.log('this is sub content', content)
        await fs.writeFileSync(path.join(_path, '_sidebar.md'), content)
     }))
 
    return folderMap
 }
 
 async function main () {
    let folderMap = await generate_sidebar('1.用例')
    let content = ''
    Object.keys(folderMap).map(f => {
        content += `- ${folderMap[f]}\n`
    })
    console.log('this is root', content)
    await fs.writeFileSync('_sidebar.md', content)
 }
 
 main()