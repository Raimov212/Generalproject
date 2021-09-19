import React, { Component } from 'react'
import Order from './order.jsx'
import './fastfood.css'
import {data} from './mock'
import food from './photo/fastfood.JPEG'

export default class fastfood extends Component {
    constructor(props){
        super(props)
        this.state = {
            selected : [],
            total : 0
        }
    }
    // {selectedID : this.state.selected.length,...value}
    render() {
        const onselect=(value)=>{
            const selected = [...this.state.selected,value];
            selected.forEach((value)=>
                this.setState({total : this.state.total+value.price})
            )
            this.setState({selected})
        }
        const onDelete=(id)=>{
            console.log(id);
            const filtered = this.state.selected.filter(value=>{
                value.id == id && this.setState({total : this.state.total - value.price});
                return value.id !== id
                // selectedID
            })
            this.setState({selected : filtered}) 
        }
        return (
            <div className='container'>
                <div className="menu">
                    {
                        data.map(value=>{
                            return (
                                <div>
                                    <h1>{value.title}</h1>
                                <div className='menu-item'>
                                    {
                                        value.lists.map(item=>{
                                            return(
                                                <div onClick={()=>onselect(item)} key={item.id} className='navmenu'>
                                                 <img src={item?.src} alt=''/>
                                                 <h3>{item.title}</h3>   
                                                 <h3>{item.price} so'm</h3>   
                                                </div>
                                            ) 
                                        })
                                    }
                                   
                                </div>
                            </div>                
                            )
                        })
                    }    
                </div>
                <Order onDelete={(id)=>onDelete(id)} total={this.state.total} selected={this.state.selected}/>
            </div>
        )
    }
}
