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
// 引入gitclone
const gitClone = require('git-clone');
// 引入加载
const ora = require('ora');


// 框架模版连接 
const Template = {
    'Vue3': '',
    'Vue2': '',
    'React': '',
    'Vue3&Ts': '',
    'React&Ts': '',
}


// 对命令提示进行修改
program.name('jingrui-cli').usage('<command> [options]');

// 打印出版本号
program.version(`v${require('../package.json').version}`)

// 命令设置
program
    .command('create <Project-name> [description]')
    .description('Create a project')
    .action(async (name) => {
        // 逻辑全在action里面
        // 1.判断是否有该文件
        // 定义一下文件名和路径
        const targetPath = path.join(process.cwd(), name);
        if (fs.existsSync(targetPath)) {
            // 如果存在就和用户交互 
            const answer = await inquirer.prompt([
                {
                    type: 'confirm',
                    message: '确定要覆盖该文件夹吗?',
                    name: 'Cover',
                    default: false
                }
            ]);
            console.log(answer);
            // 继续判断用户的选择
            if (answer.Cover) {
                // 如果走到这里说明为真, 说明用户选择了覆盖, 那么就删除原来的重名文件
                fs.remove(targetPath);
                console.log('覆盖成功');
            } else {
                // 如果没有那么就结束
                return;
            }
        } 

        // 2.新建文件夹等等
        // 继续与用户进行交互
        const res = await inquirer.prompt([
            {
                type: 'list',
                message: '请选择你要使用的框架',
                name: 'type',
                choices: [
                    {
                        name: 'Vue3',
                        value: 'Vue3'
                    },
                    {
                        name: 'Vue2',
                        value: 'Vue2'
                    },
                    {
                        name: 'React',
                        value: 'React'
                    }
                ]
            },
            {
                type: 'list',
                message: '请选择是否使用Ts',
                name: 'Ts',
                choices: [
                    {
                        name: '是',
                        value: true
                    },
                    {
                        name: '否',
                        value: false
                    }
                ]
            }
        ])
        console.log(res)
        // 拼接字符串来对应模版对象的属性名
        const key = '....'
        const spinner = ora('正在加载').start();
        // 有三个参数, 第一个是git地址, 第二个是文件名字, 第三个是git分支, 第四个是回调函数
        gitClone();
    });



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