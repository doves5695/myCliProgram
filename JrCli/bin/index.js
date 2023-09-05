#!/user/bin/env node
// 把该文件作为入口文件

// console.log('这里是逻辑');

// 引入命令设置
const program = require('commander');
// 引入炫酷字体
const figlet = require('figlet');
// 引入交互
const inquirer = require('inquirer');
// 引入使用本地文件的包
const fs = require('fs-extra');
const path = require('path');

// 对命令提示进行修改
program.name('jingrui-cli').usage('<command> [options]');

// 打印出版本号
program.version(`v${require('../package.json').version}`)

// 命令设置
program
    .command('create <Project-name> [description]')
    .description('Create a project')
    .action((name) => {
        // 逻辑全在action里面
        // console.log(name);
        // console.log(process.cwd());
        // console.log(111)
        // 判断是否有该文件
        if (fs.existsSync(path.join(process.cwd(), name))) {
            // 如果存在就和用户交互 
        } else {

        }
    })

// 给help底部添加提示信息
program.on('--help', function () {
    console.log(figlet.textSync('hello', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verricalLayout: 'default',
        width: 100,
        whitespaceBreak: true,
    }))
})

// 首先要解析
program.parse(process.argv);