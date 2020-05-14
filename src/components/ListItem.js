import React from 'react'
import '../assets/styles/listItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move'

function ListItem (props) {
  const listItems = props.items.map(item => {
    return (
      <div className='list' key={item.key}>
        <div className='round'>
          <input
            type='checkbox'
            id={item.key}
            onClick={() => props.completedTask(item.key)}
            checked={item.completed}
          />
          <label htmlFor={item.key} />
        </div>
        <p>
          <input
            className={item.completed ? 'completed' : ''}
            type='text'
            id={item.key}
            value={item.text}
            onChange={(e) => props.updateItem(e.target.value, item.key)}
          />
          <span>
            <FontAwesomeIcon
              className='faicons'
              icon='trash'
              onClick={() => {
                props.deleteItem(item.key)
              }}
            />
          </span>
        </p>
      </div>
    )
  })
  return (
    <div>
      <FlipMove duration={400} easing='ease-in-out'>
        {listItems}
      </FlipMove>
    </div>
  )
}

export default ListItem
