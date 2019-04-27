import React, {Component} from 'react'
import {Q} from './styled'

class Question extends Component {
    constructor(props){
        super(props)
        this.state ={
            
        }
    }
    render(){
        return(
            <>
                <Q>{this.props.number}. {this.props.question}</Q>
            </>
        )
    }

}

export default Question