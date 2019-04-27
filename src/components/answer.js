import React, {Component} from 'react'
import {A,Button,Link,Keywords,Keyword} from './styled'

class Answer extends Component {
    constructor(props){
        super(props)
        this.state={
            answered: false
        }
    }
    render(){
        return(
            <>
                <A>{this.props.answer}</A>
                <Keywords>
                {
                    this.props.keywords.map((el,i)=>{
                        return <Keyword key={i}>{el}</Keyword>
                    }
                )
            }
                </Keywords>
                <Button onClick={this.props.updateIndex}>Next</Button>
                <Link href={this.props.link}>Click here for more information</Link>
            </>
        )
    }

}
export default Answer