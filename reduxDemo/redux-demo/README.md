## 这个主要是基于下面教程的一个代码笔记，主要是redux的部分
http://huziketang.mangojuice.top/books/react/lesson30

### 通过一个简单的例子逐渐的说明我们为何要引入redux。

> 1 利用store和context结合，使我们可以不用利用状态提升来解决问题，但是存在一个问题，就是有大量重复的代码

> 2 利用高阶组件来解决重复代码问题，因此引入了connect，把context放入到connect中，把原组件变为dumb组件，connect连接dumb和context

> 3 引入mapDispatchToProp， 原因在于connect里面需要修改的操作

> 4 引入Provider组件，将context从index.js里面割离

### 最终业务代码完全与context割离开来，这归功于我们引入了
> connect 

> Provider

### 而这就是redux的根基

### 后面还是用了官方的react-redux来重构代码

### 以及为了提高复用性，进一步根据dumb和smart将组件拆分到不同的文件夹中
