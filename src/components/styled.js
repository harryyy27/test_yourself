import styled from 'styled-components'

const Heading = styled.h1`
    background: black
    color: yellow;
    width: 80vw;
    margin: auto;
    margin-bottom: 20vh;
    margin-top: 10vh
    min-height: 20vh;
    line-height: 20vh;
    text-align:center;
    border: 1px solid orange;
    border-radius: 0.5em;
    
`
const Keywords = styled.div`
    display: flex;
    margin-bottom: 1rem;

`

const Keyword = styled.span`
    padding: 0rem 1rem;
    margin: 0rem 1rem;
    color: yellow;
    background: black;
`
const Main = styled.main`

    width: 100%;
    border-radius: 1rem;
`
const Button_Wrapper=styled.div`
      display: flex;
      @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
      }
      @media (min-width: 481px) {
        justify-content: space-around;

      }
      
`
const Button = styled.button`

    background: orange;
    min-width: 100px;
    width: 10vw;
    display: inline-block;
    color: black
    
    
    
    
`
const Q = styled.p`
    background: black;
    color: yellow;
    width: 95vw;
    margin: auto;
    border-radius: 0.2em;
    margin-bottom: 1vh
    @media (max-width: 480px) {
        font-size: 16px
      }
      @media (min-width: 481px) {
        font-size: 12px

      }
       
`
const A = styled.p`
    background: black;
    color: yellow;
    width: 95vw;
    margin: auto;
    margin-bottom: 1rem;
    border-radius: 0.2em;
    @media (max-width: 480px) {
        font-size: 16px
    }
    @media (min-width: 481px) {
        font-size: 12px

    }
`
const Link = styled.a`
    display: block;
`
const Input = styled.input`
    display: block;
    width: 95vw;
    margin: auto;
    border-radius: 0.2em;
    margin-bottom: 1vh;
`
const Count = styled.h2`
    color:red
`
const Conclusion = styled.h2`
    color:red
`

export {Button, Button_Wrapper,Main,Keyword,Keywords,Heading, Q, A, Link, Input,Count,Conclusion}