/**
 * 用例视图
 * 1. 元数据支持模块
 * 2. 支持模块级别查看用例
 * 3. 支持模版
 * 4. 支持切换查看模式
 * 5. 支持返回首页
 * 6. 每个测试计划一个文件，用以维护测试状态
 */
let modes = {};
const projectName = dv.current().file.folder.split('/')[1]
let caseMap = {};
dv.pages(`"1.用例/${projectName}用例库"`).map((b) => {
  let mode = b.file.folder.split("1.用例/1.PE用例库/")[1];
  let item = {
    mode: modes[mode] ? "" : mode,
    conditions: [],
    steps: [],
    data: [],
  };

  modes[mode] = 1;
  let params = {};
  let paramHeaders = [];
  b.file.lists.map((l) => {
    if (!l.parent) {
      if (l.text != "") {
        if (l.link.toString().indexOf("前置条件") > 0) {
          item.conditions.push(l.text);
        } else if (l.link.toString().indexOf("步骤") > 0) {
          item.steps.push(l.text);
        } else if (l.link.toString().indexOf("测试数据") > 0) {
          item.data.push(l.text);
          l.children.map((c) => {
            const [h, value] = c.text.split(":");
            if (paramHeaders.indexOf(h) == -1) paramHeaders.push(h);
            params[l.text] = params[l.text] || {};
            params[l.text][h] = value;
          });
        }
      }
    }
  });
  let conBody;
  if (item.conditions.length) {
    conBody = "";
    item.conditions.map((s) => {
      conBody += `- ${s}\n`;
    });
  }
  let stepBody;
  if (item.steps.length) {
    stepBody = "| | | |\n|---|---|---|\n";
    let stepNum = 0;
    item.steps.map((s) => {
      stepNum++;
      let ss = s.split(":");
      stepBody += `| ${stepNum} | ${ss[0]} | ${ss[1] || ''} |\n`;
    });
  }

  let dataBody;
  if (paramHeaders.length) {
    dataBody = "| 说明 | ";
    paramHeaders.map((d) => (dataBody += ` ${d} |`));
    dataBody += `\n|---|`;
    paramHeaders.map((d) => (dataBody += `---|`));
    Object.keys(params).map((k) => {
      dataBody += `\n| ${k} |`;
      paramHeaders.map((d) => {
        dataBody += ` ${params[k][d] || "-"} |`;
      });
    });
  }
  caseMap[mode] = caseMap[mode] || [];

  caseMap[mode].push({
    mode: mode,
    link: dv.sectionLink(b.file.path, b.file.name, false, b.file.name),
    conditions: conBody,
    steps: stepBody,
    params: dataBody,
    remark: "",
  });
});

let list = [];
Object.keys(caseMap)
  .sort((a, b) => a.localeCompare(b))
  .map((m) => {
    caseMap[m]
      .sort((a, b) => a.link.toString().localeCompare(b.link.toString()))
      .map((c) => {
        list.push([c.mode, c.link, c.conditions, c.steps, c.params, c.remark]);
      });
  });

dv.table(["模块", "用例", "前置条件", "步骤", "测试数据", "备注"], list);
