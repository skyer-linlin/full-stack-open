# part 1

React 组件名称首字母必须大写

# part 2

```html

<form onSubmit={addNote}>
  <input />
  <button type="submit">save</button>
</form> 
```

```javascript
const addNote = (event) => {
  event.preventDefault()
  console.log('button clicked', event.target)
}
```

event 参数是触发对事件处理函数需要调用的event :

事件处理立即调用 event.preventDefault() 方法，它会阻止提交表单的默认操作。 因为默认操作会导致页面重新加载。

将event.target 中存储的事件的记录到控制台。

## 字符串模板

```javascript
`${newName} is already added to phonebook`
```

## 依赖

通过执行如下命令将json-server 安装为开发依赖项(仅在开发过程中使用

```bash
npm install json-server --save-dev
```

当 index.js 变化时， React 并不会自动感知，因此你必须刷新浏览器来看到变化！一个简单的方式来让React 自动感知到变化，是在项目的根目录创建一个 .env 文件，并加上
FAST_REFRESH=false。重启应用来让变化生效。

## css

```css
h1 {
    color: green;
}

/*CSS 规则由选择器 和声明 组成。 选择器定义规则应该应用于哪些元素。 上面的选择器是h1，它将匹配我们应用中的所有h1 头标记。声明将 color 属性设置为值green。*/
```

# part3

## 依赖管理

```json5
{
  "dependencies": {
    "express": "^4.17.2"
  }
}
//^4.17.1 前面的插入符号表示，当项目的依赖项更新时，安装的 express 版本至少为 4.17.1。 但是，所安装的 express 版本也可以具有较大的patch 号(最后一个数字)或较大的minor 号(中间的数字)的版本。 第一个major 号表示库的主版本必须相同。
```

## 特殊语法

```javascript
Math.max(...notes.map(n => n.id))
```

数组可以通过使用“ 三个点...”展开语法 转换为单独的数字。

## 部署,生产环境,开发环境

后端地址更改为了一个相对 URL:

```javascript
const baseUrl = '/api/notes'
```

因为在开发模式下，前端位于地址localhost: 3000，所以对后端的请求会发送到错误的地址localhost:3000/api/notes。 而后端位于localhost: 3001。

如果这个项目是用 create-react-app 创建的，那么这个问题很容易解决。 将如下声明添加到前端仓库的package.json 文件中就足够了。

```json5
{
  "dependencies": {
    // ... },
    "scripts": {
      // ... },
      "proxy": "http://localhost:3001"
    }
  }
}
```

在重新启动之后，React 开发环境将作为一个代理工作。 如果 React 代码对服务器地址http://localhost:3000发出了一个 HTTP 请求，而不是 React
应用本身管理的地址(即当请求不是为了获取应用的 CSS 或 JavaScript) ，那么该请求将被重定向到 HTTP://localhost:3001 的服务器。