import React, { Component } from 'react'
import {list} from './editstate.jsx'
export default class edit extends Component {
    constructor(props){
        super(props)
        this.state = {
            selected : null,
            surname : '',
            status : '',
            list : list
        }
    }
    render() {
        const onEdit =(value)=>{
            this.setState({selected : value.id,name : value.name,status: value.status })
        } 
        const onSave=()=>{
            this.setState({selected : null})
          const newList =  this.state.list.map(item=>item.id === this.state.selected?
             {...item, name : this.state.name,status : this.state.status}: item)
             this.setState({list : newList})
            }
        const onSearch=(e)=>{
            const newSearch = list.filter(value=>{
                let name = value.name.toLowerCase();
                return name.includes(e.target.value.toLowerCase())
            })
            this.setState({list : newSearch})
        }
        return (
            <div>
                <input type="text" onChange={onSearch} />
                <select name="" id="">
                    {
                        this.state.list.map((value)=>{
                            <option value="">{value.name}-</option>
                        })
                    }
                </select>
                <table border='1' style={{borderCollapse: 'collapse'}}>
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.list.map((value)=>(
                                <tr key={value.id}>
                                    <td>{value.id}</td>
                                    <td>
                                        {
                                            this.state.selected === value.id ?
                                            (<input type="text" value={this.state.name} 
                                            onChange={(e)=>this.setState({name: e.target.value})}
                                            />):(value.name)
                                        }  
                                    </td>
                                    <td>
                                        {
                                            this.state.selected === value.id ?
                                            (<input type="text" value={this.state.status} 
                                            onChange={(e)=>this.setState({status: e.target.value})}
                                            />):
                                            (value.status)
                                        }
                                    </td>
                                    {
                                        this.state.selected == value.id?
                                        (<td><button onClick={onSave}>Save</button></td>):
                                        (<td><button onClick={()=>onEdit(value)}>Edit</button></td>)
                                    }
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
