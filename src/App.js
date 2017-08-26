import React from 'react';
import './App.css';

class Todo extends React.Component {
  constructor(){
    super();
    this.updateList = this.updateList.bind(this);
    this.addTask = this.addTask.bind(this);
    this.state = {
      Names: [{name:'Atif'}, {name:'Kashif'}, {name:'Youn'}],
      currentTask: ''
    };
  }

  updateList(newValue){
    this.setState({
      currentTask: newValue.target.value
    })
  }
  addTask(evt){
    evt.preventDefault();
    let Name = this.state.Names;
    let curentTask = this.state.currentTask;
    if(curentTask){Name.push({
      name: curentTask,
    })
    this.setState({
      Names: Name,
      currentTask: ''
    })}
    else{
      alert('Please enter Todo first!!!')
    }
  }

  render() {
    return (
      <div>
        <h1 className='heading'>Todo list with React!</h1>
        <ul className='list-group-item list-group-item-action'>
        <Dynamic 
        updateList={this.updateList}
        addTask={this.addTask}
        currentTask={this.state.currentTask}
         />
        <br/>          
          {
            this.state.Names.map((name, index) => {
              return <TodoComponent title={name.name} index={index} key={index}/>
              console.log({name})
            })
          }
        </ul>
      </div>
    );
  }
}

class TodoComponent extends React.Component{
  render(){
    return(
      <div>
        <li className='listItem'>{this.props.title}</li>
      </div>
      )
  }
} 

class Dynamic extends React.Component{
  render(){
    return(
      <div>
        <form onSubmit={this.props.addTask}>
        <input type='text' className='form-control form-control inputBtn' placeholder='Enter Todo Item...' value={this.props.currentTask} onChange={this.props.updateList}/>
        <input type='submit' value='Submit' className='btn btn-success inputBtn2' />
        </form>
      </div>
    );
  }
}

export default Todo;
