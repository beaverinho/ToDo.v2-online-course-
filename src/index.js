import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list'
import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'


const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false},
    { label: 'Build App', important: true},
    { label: 'Relax', important: false},
  ]

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData}/>
  </div>
  )
}
  


ReactDOM.render(<App/>, document.getElementById('root'));