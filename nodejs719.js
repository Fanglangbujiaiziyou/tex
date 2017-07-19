var fs = require("fs");

fs.readFile('te.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

var readline = require('readline');
const  rl = readline.createInterface(process.stdin, process.stdout);
rl.on('line', function(line) {
    switch(line.trim()) {
        case '1':
            addStudentAchievement();
            break;
        case '2':
            buildReport();
            break;
        case '3':
            rl.close();
            break;
    }
});
rl.on('close', function() {
    console.log('退出');
    process.exit(0);
});


function addStudentAchievement(answer){
    var str='请输入学生信息（格式：姓名 学号 民族 班级 学科 成绩）按回车提交。';
    var readline = require('readline');
    var  ach = readline.createInterface(process.stdin, process.stdout);
    ach.question(str,function(answer){
      var regex=/^[\u4e00-\u9fa5]+\s\d+\s[\u4e00-\u9fa5]+\s\d+(\s[\u4e00-\u9fa5]+\s\d+)+$/;
        if(regex.test(answer)){
            console.log('学生成绩已添加');
            fs.readFile('te.txt', function (err, data) {
                if (err) return console.error(err);
                console.log(data.toString());
                const arr=answer.split(' ');

            });
        }
        else{
            console.log('请按正确的格式输入（格式：姓名 学号 民族 班级 学科 成绩）按回车提交。');
            ach.question(answer);
        }
        ach.close();

        });
}
module.exports=addStudentAchievement;

function buildReport(){
    console.log( `
  成绩单
 姓名：${arr[0]}
 学号：${arr[1]}
 民族：${arr[2]}
 班级：${arr[3]}
 英语：${arr[4]}
 成绩：${arr[5]}
 数学：${arr[6]}
 成绩：${arr[7]}
 语文：${arr[8]}
 成绩：${arr[9]}
 `);
}
module.exports=buildReport;
