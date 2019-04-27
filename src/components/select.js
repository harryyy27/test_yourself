import React, {Component} from 'react'
import {Button,Heading,Button_Wrapper} from './styled'
class Select extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <>
                <Heading>Select a language</Heading>
                <Button_Wrapper>
                    <Button onClick={()=>{
                                this.props.updateLanguage('Python')
                                }
                            }>Python</Button>
                    <Button onClick={()=>{
                                    this.props.updateLanguage('Javascript')
                                    }
                                }>JavaScript</Button>
                    <Button onClick={()=>{
                                    this.props.updateLanguage('Ecommerce')
                                    }
                                }>E-Commerce</Button>
                </Button_Wrapper>
            </>
        )
    }
}
export {Select}