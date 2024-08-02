/**
 * 生成用例统计文档
 * 命令: node .\9.脚本\genarate-season.js [迭代版本]
 */
const projectName = "1.PE";
const directoryPath = "1.用例/" + projectName + "用例库";
const targetPath = "2.迭代/" + projectName;
const fs = require("fs");
const path = require("path");
const noMode = [];

let args = process.argv[2] || 99;
if (isNaN(Number(args))) {
  console.error(`参数错误:【${args}】,请输入数字！`);
  return;
}

async function main() {
  let caseMap = {};
  const fp = path.join(targetPath, args + ".md");
  let isExists = await fs.existsSync(fp);
  if (isExists) {
    console.error(`创建失败: 文件【${fp}】 已存在！`);
    return;
  }

  const folders = await fs.readdirSync(directoryPath);
  await Promise.all(
    folders.map(async (folder) => {
      const fileStat = fs.statSync(path.join(directoryPath, folder));
      if (fileStat.isFile()) {
        console.log(fileStat.isFile(), "fileStat.isFile()");
        if (path.extname(folder) === ".md") noMode.push(folder);
      } else {
        const _path = path.join(directoryPath, folder);
        const files = await fs.readdirSync(_path);
        const markdownFiles = files.filter(
          (file) => path.extname(file) === ".md"
        );
        caseMap[folder] = markdownFiles;
      }
    })
  );

  let content = `[[0.视图/${projectName}/用例视图|用例视图]] | [[0.视图/${projectName}/迭代视图|迭代视图]]\n`;

  content += "\n ◻️未测    🚫跳过     ✅通过    ❌ 失败\n\n";
  if (noMode.length) {
    content += "\n## 未分组\n\n";
    noMode.map(
      (c) =>
        (content += `- [[${directoryPath}/${c}|${c.split(".md")[0]}]] ◻️\n`)
    );
  }

  Object.keys(caseMap)
    .sort((a, b) => a.localeCompare(b))
    .map((mode) => {
      content += `\n## ${mode}\n\n`;
      caseMap[mode]
        .sort((a, b) => a.localeCompare(b))
        .map(
          (c) => (content += `- [[${mode}/${c}|${c.split(".md")[0]}]] ◻️\n`)
        );
    });
  isExists = await fs.existsSync(fp);
  if (isExists) {
    console.error(`创建失败: 文件【${fp}】 已存在！`);
    return;
  }
  const isTargetExists = await fs.existsSync(targetPath);
  if (!isTargetExists) {
    await fs.mkdirSync(targetPath);
  }
  await fs.writeFileSync(fp, content);
}

main();
