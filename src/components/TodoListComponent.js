import React from 'react';
class TodoListComponent extends React.Component {

    render() {
        const items = this.props.items.map((item)=> (
            <li key={item.id} onClick={() => {this.props.onClick(item.id)}}>
                {item.text}
            </li>
        ));
        return (
            <ul>
                {items}
            </ul>
        )
    }    
}

export default TodoListComponent;