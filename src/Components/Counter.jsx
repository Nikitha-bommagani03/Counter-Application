import {Component} from "react"
export default class Incre extends Component{
        constructor(props){
            super()
            this.state={
                count:0
            }
        }
    
        x=()=>{
            this.setState({
                count : this.state.count+1
    
            })
           }
    
           y=()=>{
            this.setState({
                count:this.state.count-1
            })
           }
    
           z=()=>{
            this.setState({
                count:0
            })
           }
        render(){
            return(
                <div id="main">
                <h1>Counter Application</h1>
                <div id="container">
                <div id="value">{this.state.count}</div>
                <button onClick={this.x}>+</button>
                <button onClick={this.y}>-</button>
                <button onClick={this.z}>reset</button>
            </div>
                </div>
    )    }
    }