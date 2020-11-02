import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoList from '../todo-list'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import ItemAddForm from '../item-add-form'
import './app.css'
import ItemStatusFilter from '../item-status-filter/item-status-filter';


export default class App extends Component {

  maxID = 100;

  

  state = {
    todoData: [
        this.createTodoItem('Drink Coffee'),
        this.createTodoItem('Build App'),
    ] ,
    searchTerm : '',
    filter: 'all' //all-default,active,done
  }

  todoDataArray = [...this.state.todoData]
  
createTodoItem(label) {
    return {
        label,
        important: false,
        done: false,
        id: this.maxID++
    }
}

togglePropery(arr, id, propName) {
    
        const idx = arr.findIndex(el => el.id === id)
        const newItem = {...arr[idx], [propName]: !arr[idx][propName]}

        return [...arr.splice(0, idx), newItem, ...arr.splice(idx + 1) ]
           
}

onFilterChange = (name) => {
    this.setState({
        filter: name
    })
}


// dynamicSearch() {
    
//     this.setState(({todoData}) => {
//         let newArr = todoData.filter(item => item.label.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
//         return {
//             todoData: newArr
//         }
//     })
       
// }


deleteItem = (id) => {
    this.setState(({todoData}) => {
        let newArr = todoData.filter(el => el.id !== id)
        return {
            todoData: newArr
        }
    })

}

addItem = (text) => {
    const newItem = this.createTodoItem(text)
    
    this.setState(({todoData}) => {
        let newArr = [...todoData, newItem]
        return {
            todoData: newArr
        }
    })
}

onToggleDone = (id) => {
    this.setState(({todoData}) => {
        
        return {
            todoData: this.togglePropery(todoData, id, 'done')
        }
    })
}

onToggleImportant = (id) => {
    this.setState(({todoData}) => {
       

        return {
            todoData: this.togglePropery(todoData, id, 'important')
        }
    })
}

editSearchTerm = (e) => {
    
    this.setState(({searchTerm}) => {
       
        return { 
           searchTerm: e.target.value,
           

       }
    })
    
}

search(items, term) {
    if (term.length == 0) {
        return items;
    }

    return items.filter(item => {
       return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
}

filter(items, filter) {
    switch(filter){
        case 'all':
            return items;
        case 'active':
            return items.filter(item => item.done === false);
        case 'done':
            return items.filter(item => item.done === true);
        default:
            return items;
    }
}

render(){

    const {todoData, searchTerm, filter} = this.state; 
    const visibleItems = this.filter(this.search(todoData, searchTerm), filter);
    const doneCount = this.state.todoData.filter(el => el.done === true).length;
    const todoCount = this.state.todoData.length - doneCount;

    return (
        <div className='todo-app'>
          <AppHeader todo={todoCount} done={doneCount}/>
          <div className='top-panel d-flex'>
            <SearchPanel editSearchTerm={this.editSearchTerm}/>
            <ItemStatusFilter filter={this.filter} onFilterChange={this.onFilterChange} />
          </div>
          
          <TodoList todos={visibleItems} onDeleted={this.deleteItem} onToggleImportant={this.onToggleImportant} onToggleDone={this.onToggleDone}/>
          <ItemAddForm addItem={this.addItem}/>
      </div>
      )
}

  
}
  
