import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
// import PropTypes from 'prop-types'

@inject('store')
@observer
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  componentDidMount() {
    // console.log(this.props.store.todoListState.todoList)
  }

  onChangeInput = e => {
    this.setState({ value: e.target.value })
  }

  addTodo = () => {
    // this.props
    this.props.store.todoListState.addTodo(this.state.value)
    this.setState({ value: '' })
  }

  render() {
    const obj = this.props.store.todoListState.obj
    const html = []
    for (const [k, v] of Object.entries(obj)) {
      html.push(
        <div key={k}>
          <span>
            {k}: {v}
          </span>
        </div>
      )
    }
    
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChangeInput}
        />
        <button onClick={this.addTodo}>添加一条数据</button>
        <div>
          <div>
            <span>总计 </span>
            <strong>{this.props.store.todoListState.todoListTotal}</strong>
          </div>
          <div>
            <span>completed </span>
            <strong>{this.props.store.todoListState.todoListCompleted}</strong>
          </div>
        </div>
        <ul>
          {this.props.store.todoListState.todoList.map(item => (
            <li
              key={item.id}
              style={{
                background: item.complete ? 'red' : ''
              }}
              onClick={() =>
                this.props.store.todoListState.toggleCompleted(item.id)
              }
            >
              {item.text}
            </li>
          ))}
        </ul>
        <div>{html}</div>
        <br />
        <br />
        <div>
          <strong>number: {this.props.store.numberState.number}</strong>
        </div>
      </div>
    )
  }
}

// TodoList.propTypes = {}

export default TodoList
