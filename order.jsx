import React, { Component } from 'react'
import './fastfood.css'

export default class order extends Component {
    render() {
        return (
            <div className='order'>
                <h1 className='title'>Order</h1>
                {this.props.selected.map(value=>{
                    return(
                        <h3>
                            {value.title} {value.price }<button onClick={()=>this.props.onDelete(value.id)}>delete</button>
                        </h3>
                    ) 
                })}
                <h1 className='total'>Total : {this.props.total}</h1>
            </div>
        )
    }
}
