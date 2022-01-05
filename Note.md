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
