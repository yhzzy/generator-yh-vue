/**
 * 此文件为Generator的核心入口。需要导出一个继承自Yeoman Generator的类型，Yeoman Generator在工作时会自动调用我们在此类型中定义的一些生命周期方法，我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能
 */

 const Generator = require('yeoman-generator')

 module.exports = class extends Generator {
   prompting () {
     // Yeoman自动在生成文件阶段调用此方法
 
     // 在此方法中可以调用父类的prompt()方法发出对用户的命令行询问
     return this.prompt([
       {
         type: 'input',
         name: 'project-name',
         message: 'Your project name',
         default: this.appname,
       }
     ])
     .then(answers => {
       this.answers = answers
     })
   }
  //  writing () {
  //    this.fs.write(
  //      this.destinationPath('temp.txt'),
  //      Math.random().toString(),
  //    )
  //  }
  //  writing () {
  //    const tmpl = this.templatePath('foo.txt')
  //    const output = this.destinationPath('foo.txt')
  //    const context = { title: 'Heloo yh', success: true }
  //    const context = this.answers
  //    this.fs.copyTpl(tmpl, output, context)
  //  }
   writing () {
     const templates = [
       'public/favicon.ico',
       'public/index.html',
       '.babelrc',
       '.eslintignore',
       '.eslintrc.js',
       '.gitignore',
       '.prettierrc.js',
       'package.json',
       'postcss.config.js',
       'README.en.md',
       'README.md',
       'server.js',
       'stylelint.config.js',
       'webpack.common.js',
       'webpack.dev.js',
       'webpack.prod.js',
       'webpack.test.js',
       'src/assets/css/common.less',
       'src/assets/css/commonColor.less',
       'src/assets/img/404.png',
       'src/router/index.js',
       'src/utils/loading.js',
       'src/utils/request.js',
       'src/utils/setBaseUrl.js',
       'src/view/common/Footer.vue',
       'src/view/common/Header.vue',
       'src/view/common/Layout.vue',
       'src/view/common/SliderBar.vue',
       'src/view/exOne/exOne.vue',
       'src/view/exTwo/exTwo.vue',
       'src/App.vue',
       'src/main.js',
     ]
     // 使用模板文件批量写入
     templates.forEach(item => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers,
      )
     })
   }
 }