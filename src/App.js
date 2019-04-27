import React, { Component } from 'react';
import {Interview} from './components/interview'
import {Select} from './components/select'
import {Main} from './components/styled'


class App extends Component {
  state = {
    select: null
  }
  updateLanguage=(lang)=>{
    console.log(lang)
    this.setState({select: lang})
  }
  changeLang=()=>{
    this.setState({select: null})
  }
  render() {
    return (
      <>
        <Main>
      
          { this.state.select===null ?
              <Select updateLanguage={this.updateLanguage}/>
              :
              <Interview language={this.state.select}
                         changeLang={this.changeLang}/>
          }
        </Main>
      </>
    );
  }
}

export default App;
