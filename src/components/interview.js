import React, {Component} from 'react'
import {Heading} from './styled'
import Interface from './interface'
import Finished from './finished'



class Interview extends Component {
    constructor(props){
        super(props)
        this.interface=React.createRef()
        this.state = {            
            list: [],
            finished: false,
            final_score: 0
        }
    }
    componentDidMount=()=>{
        
        if(this.state.finished===false){
            import(`./${this.props.language}`)
                .then((data)=> {
                    const arr = [...data.default]
                    console.log(arr)
                    const shuff = this.shuffle(arr)
                    return this.setState({list: shuff})
                }
                )
                .catch((err)=>console.log(err))
            }
    }
    checkStatus =(index, score) =>{
        if(this.state.list.length===index+1){
            this.setState((prevState)=>{
                return({finished: !prevState.finished,final_score: score})
            })
        }
    }
    restart =()=>{
        this.setState((prevState)=>{
            return({finished: !prevState.finished, final_score: 0})
        })
    }
    shuffle=(a)=> {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    
    render(){
        return(
            <>
                <Heading>{this.props.language}</Heading>
                {this.state.finished ===false && this.state.list.length>0 ?
                    <Interface ref={this.interface}
                               data={this.state.list}
                               check={this.checkStatus} />
                    :
                    <Finished score={this.state.final_score}
                              restart={this.state.restart}
                              diffLang={this.props.changeLang}
                              />
            }
                
            </>
        )
    }
}

export {Interview}