import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      name : '',
      surname : '',
      selected : null,
      data : [
        {id :1,name : 'mahmud1',status : 'java1'},
        {id :2,name : 'mahmud2',status : 'java2'},
        {id :3,name : 'mahmud3',status : 'java3'},
        {id :4,name : 'mahmud4',status : 'java4'},
        {id :5,name : 'mahmud5',status : 'java5'},
      ]
    }
  }
  render() {
    const button=(id)=>{
        console.log('delet',id);
        const newData = this.state.data.filter(value=>value.id !== id)
        this.setState({data : newData})
    }
    const add = ()=>{
      console.log(this.state.name,this.state.status);
      const newData = [...this.state.data,
        {id : this.state.data.length +1,
        name : this.state.name,
        status : this.state.status}
      ]
      this.setState({data : newData})
    }
    // const change1=(e)=>{
    //   this.setState(data : this.state.name)
    // }
    // const change2=(e)=>{
    //   this.setState({status : e.target.value})
    // }
    const edit=(id)=>{
      const newEdit = this.state.data.filter(value=>value.id == id )
      this.setState({data : newEdit})
  
    }
    return (
      <div>
      <h1>selected : {this.state.selected}</h1>
        <input type='text' placeholder='name'  />
        <input  type="text" placeholder='surname'  />
        <button onClick={add}>add</button>        
        <table border="1">
          <thead>
          <tr>
            <th>No</th>
            <th>name</th>
            <th>surname</th>
            <th>action</th>
          </tr>
          </thead>
          <tbody>
            {this.state.data.map(value=>{
              return(
                <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.status}</td>
                <td><button onClick={()=>button(value.id)}>deleted</button></td>
                {this.state.selected ?
                <td><button onClick={()=>this.setState({selected : value.name })}>save</button></td>
                : 
                 <td><button onClick={()=>this.setState({selected : value.id})}>edit</button></td>}, 
              </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
