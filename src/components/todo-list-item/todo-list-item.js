import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

 render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;
    

    let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done';
    }

    if (important) {
      classNames += ' important';
    }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={onToggleDone}>
          {label}
        </span>

        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right" onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  };
}



// import React from 'react';
// import './todo-list-item.css'
// import { IconName } from "react-icons/fa";

// class TodoListItem extends React.Component {

//   state = {
//     done: false
//   };

//   onLabelClick = ({done}) => {
//     this.setState({
//       done: !done
//     });
    
//   }  

//   render() {
//     const {label, important = false} = this.props;
//     const {done} = this.state;
//     const style = {
//       color: important ? 'steelblue' : 'black',
//       fontWeight: important ? 'bold' : 'normal'
//     };

//     const classNames = "todo-list-item";

//     if(done) {
//       classNames = 'todo-list-item done';
//     }

//   return (
//       <span className={classNames}>
//         <span
//           className="todo-list-item-label"
//           style={style} 
//           onClick={this.onLabelClick}>
//           {label}
//         </span>
  
//         <button type="button"
//                 className=" btn btn-outline-success btn-sm float-right">
//           <i className="fa fa-exclamation" />
//         </button>
  
//         <button type="button"
//                 className=" btn btn-outline-danger btn-sm float-right">
//           <i className="fa fa-trash-o" />
//         </button>
//       </span>
//     );

//   }
// }

// // const TodoListItem = ({label, important = false}) => {

// //     const style = {
// //         color: important ? 'steelblue' : 'black',
// //         fontWeight: important ? 'bold' : 'normal'
// //       };

// //     return (
// //         <span className="todo-list-item">
// //           <span
// //             className="todo-list-item-label"
// //             style={style}>
// //             {label}
// //           </span>
    
// //           <button type="button"
// //                   className=" btn btn-outline-success btn-sm float-right">
// //             <i className="fa fa-exclamation" />
// //           </button>
    
// //           <button type="button"
// //                   className=" btn btn-outline-danger btn-sm float-right">
// //             <i className="fa fa-trash-o" />
// //           </button>
// //         </span>
// //       );
    
// // }

// export default TodoListItem;