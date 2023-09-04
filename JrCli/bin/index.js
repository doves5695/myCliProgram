#!/user/bin/env node
// 把该文件作为入口文件

// 引入commander
const { program } = require('commander');
// 引入chalk
const chalk = require('chalk');
// 引入互动的东西
const inquirer = require('inquirer');
// 引入加载的东西
const ora = require('ora');
// 引入炫酷字体
const figlet = require('figlet');


// ============================== 以下是figlet ====================================

// figlet("Hello World!!", function (err, data) {
//     // if (err) {
//     //   console.log("Something went wrong...");
//     //   console.dir(err);
//     //   return;
//     // }
//     console.log(data);
//   });



// // ============================== 以下是ora ====================================
// const spinner = ora('下载中...').start();

// setTimeout(() => {
//     spinner.text= '努力加载中, 请稍后...';
//     spinner.color = 'red';
// }, 2000);

// setTimeout(() => {
//     // spinner.succeed('加载完成');
//     spinner.fail('加载失败');
// }, 4000);



// // ============================== 以下是inquirer ====================================
// inquirer
//     .prompt([
//         /* Pass your questions in here */
//         // 放入你的问题
//         {
//             // 默认就是input
//             type: 'input',
//             name: '吃',
//             message: '你吃什么',
//             default: '汉堡'
//         }, {
//             type: 'confirm',
//             name: '辣',
//             message: '吃辣吗?',
//             default: false
//         }
//     ])
//     .then((answers) => {
//         // Use user feedback for... whatever!!
//         console.log(answers);
//     })
//     .catch((error) => {
//         if (error.isTtyError) {
//             // Prompt couldn't be rendered in the current environment
//         } else {
//             // Something else went wrong
//         }
//     });




// ============================== 以下是chalk =======================================
// console.log(chalk.red.bold.bgBlue('荆瑞爱前端'));




// ============================== 以下是commander ===================================
// 对提示进行修改
// <>当中的是必填项, 不填会报错的
// program.name('jingrui-cli').usage('<command> [options]');
// // 对options进行修改
// program
//     .option('-V, --version', '查看版本')
//     .option('-J, --jing', '荆瑞')
//     // .option('-p, --pizza-type <type>', 'flavor of pizza')

// // 命令
// program
//   .command('clone <source> [destination]')
//   .description('克隆一个资源类似于gitclone, 后面必须要写入资源地址')
//   .action((source, destination) => {
//     console.log(source, destination);
//   });


// // 解析: 所有东西需要在解析之后再进行
// program.parse(process.argv);

// const options = program.opts();
// console.log(options)
// console.log(666)