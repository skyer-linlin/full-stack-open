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