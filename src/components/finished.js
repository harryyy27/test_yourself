import React, {Component} from 'react'
import {Conclusion, Button} from './styled'

class Finished extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <>
                <Conclusion>You scored {this.props.score}. You might want to call it a day</Conclusion>
                <Button onClick={this.props.restart}>Try again</Button>
                <Button onClick={this.props.diffLang}>Different Language</Button>
            </>
        )
    }
}
export default Finished