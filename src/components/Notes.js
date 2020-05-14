import React from 'react'
import '../assets/styles/notes.css'
import ListItem from './ListItem'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class Notes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
        completed: ''
      }
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.updateItem = this.updateItem.bind(this)
    this.completedTask = this.completedTask.bind(this)
  }

  handleAddItem (e) {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }

  handleInput (e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  deleteItem (key) {
    const filteredItems = this.state.items.filter(item => item.key !== key)
    this.setState({
      items: filteredItems
    })
  }

  updateItem (text, key) {
    const items = this.state.items
    const newItems = items.map(item => {
      if (item.key === key) {
        item.text = text
      }
      console.log(item)
      return item
    })
    this.setState({
      items: newItems
    })
  }

  completedTask (key) {
    const items = this.state.items
    const newItems = items.map(item => {
      if (item.key === key) {
        item.completed = !item.completed
      }
      return item
    })
    console.log(newItems)
    this.setState({
      items: newItems
    })
  }

  render () {
    return (
      <div className='app'>
        <header>
          <form id='to-do-form' onSubmit={this.handleAddItem}>
            <input
              type='text'
              placeholder='Enter task'
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
            <button type='submit'>Add</button>
          </form>
        </header>
        <ListItem
          items={this.state.items}
          deleteItem={this.deleteItem}
          updateItem={this.updateItem}
          completedTask={this.completedTask}
        />
      </div>
    )
  }
}
export default Notes

