import React, {Component} from 'react'
import {Button, Input, Count} from './styled'
import Question from './question'
import Answer from './answer'
class Interface extends Component {
    constructor(props){
        super(props)
        this.state={
            score:0,
            q:0,
            answered: false
        }
    }
    updateIndex = ()=>{
        this.props.check(this.state.q, this.state.score)
        const input = document.getElementById('input')
        this.setState((prevState)=>{
            return({q: prevState.q+=1, answered: !prevState.answered})
        })
        input.value = ''
    }
    questionAnswered=()=>{
        const input = document.getElementById('input')
        // console.log(input.value)
        // console.log(this.props.data.keywords)
        if(this.props.data[this.state.q].keywords.every((el)=>{
            return input.value.toLowerCase().indexOf(el)!==-1
        }
        )===true){
            this.setState((prevState)=>{
                return({answered: !prevState.answered, score: prevState.score+=1})
            })
        }
        else {
            this.setState((prevState)=>{
                return({answered: !prevState.answered})
            })
        }
    }
    render(){
        return(
            <>
            
                <Question question={this.props.data[this.state.q].question}
                        number={this.state.q+1}/>
        
                <Input id="input"></Input>
                {
                    this.state.answered === false ?
                        <Button   onClick={this.questionAnswered}
                            >Submit</Button>
                        :
                        null
                }
                {
                    this.state.answered === true ?
                        <Answer answer={this.props.data[this.state.q].answer}
                                keywords={this.props.data[this.state.q].keywords}
                                link={this.props.data[this.state.q].link}
                                updateIndex={this.updateIndex}/>
                        :
                        null
                    }
                <Count>Your score is {this.state.score}/{this.state.q}</Count>
                
            
            </>
        )
    }   
}

export default Interface