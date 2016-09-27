# SidebarToolbar - RequireJS

## 使用Sass更好的书写CSS
## 使用RequireJS进行模块化开发，编写出方便复用的代码
## 使用CSS3实现简单的动画效果

### Sass基础知识
#### 嵌套语法
#### 变量定义 $
#### 函数式定义 @mixin
#### 引入函数 @include
#### 引入其他sass文件 @import
#### 继承 @extend

## RequireJS
#### 1.有效的防止命名冲突
#### 2.声明不同的js文件之间的依赖
#### 3.代码以模块化的方式组织

### RequireJS常用方法
#### 1.requirejs.config 为模块指定别名，方便模块引入
#### 2.requirejs 将写好的模块引入，根据引入的模块编写主代码
#### 3.define 用来编写模块，在相应的地方引入

### index.html
#### data-main 项目入口文件，即requirejs加载完毕之后立即调用的文件

## 项目原理分析
### CSS精灵——优点 缺点和兼容性
#### 0.使用背景位置 background-position
#### 1.HTML结构简单
#### 2.兼容性良好，可以兼容到IE6
#### 3.使用大量图片，对性能有一定的的影响，并且不利于修改

### 使用图标字体
### 利用before和after伪类方式

## jQuery函数
### jQuery.extend()函数
#####  extend(dest,src1,src2,src3...) 它的含义是将src1,src2,src3...合并到dest中,返回值为合并后的dest,该方法合并后，是修改了dest的结构的。
### jQuery.proxy()函数
#### jQuery.proxy(),接受一个函数，然后返回一个新函数，并且这个新函数始终保持了特定的上下文(context )语境。
#### jQuery.proxy( function, context )
##### function将要改变上下文语境的函数。
##### context函数的上下文语境('this')会被设置成这个 object 对象。
#### jQuery.proxy( context, name)
##### context函数的上下文语境会被设置成这个 object 对象。
##### name将要改变上下文语境的函数名(这个函数必须是前一个参数 ‘context’ 对象的属性)

