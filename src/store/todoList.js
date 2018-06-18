import { observable, computed, action, autorun } from 'mobx'
// import numberState from './number'

class TodoListStore {
  constructor() {
    this.test()
  }
  id = 1
  @observable obj = {
    a: 1,
    b: 2
  }
  @observable todoList = []
  @computed get todoListTotal() {
    return this.todoList.length
  }
  @computed get todoListCompleted() {
    return this.todoList.filter((item) => {
      return item.complete
    }).length
  }

  /* 
  * 不要把 computed 和 autorun 搞混。它们都是响应式调用的表达式，但是，如果你想响应式的产生一个可以被其它 observer 使用的值，请使用 @computed，如果你不想产生一个新值，而想要达到一个效果，请使用 autorun。 举例来说，效果是像打印日志、发起网络请求等这样命令式的副作用。
  * 
  */
  test = () => {
    autorun(() => {
      console.log(this.obj.a)
    })
  }

  @action addTodo(text) {
    this.todoList.push({
      id: this.id++,
      complete: false,
      text
    })
    this.obj.a = Math.random()
  }
  @action toggleCompleted(id) {
    const todo = this.todoList.find((item) => {
      return item.id === id
    })
    todo.complete = !todo.complete
    this.obj.b = Math.random()
  }
 }

const todoListState = new TodoListStore()

// autorun(() => {
//   console.log(todoListState.obj.a)
// })

export default todoListState
