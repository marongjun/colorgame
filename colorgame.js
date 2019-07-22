/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

class Game extends React.Component{
constructor(props){
super(props)
this.state={
  color:'pink',
  time:'',
  startsec:'',
  it: undefined
}
}

handleStart(event){ 
  let rtime= Math.random()*5000
  let starttime = Date.now()
  this.setState({
    startsec: rtime+starttime
  })
  console.log(rtime)
  this.setState({
    it: setInterval(()=>(
      this.setState({
      color:'red'
    } 
    ))
    ,rtime)
  }    
  ) 
 }

 handleStop(event){
   let stopsec = Date.now()
   console.log(stopsec,this.state.startsec)
   let resulttime = (stopsec - this.state.startsec)/1000
   console.log(resulttime)
   clearInterval(this.state.it)
   this.setState({
     time: resulttime,
     color: 'pink',
   })
   
 }


render(){
  const bgcolor = this.state.color
  let that = this
  return(
    <div>
      <button type="button" class="btn btn-primary" 
      style={{marginRight:'10%'}} onClick={this.handleStart.bind(this)}>Start</button>
      
      <button type="button" class="btn btn-warning" onClick={this.handleStop.bind(this)}>Stop</button>
      <span>   your time: {this.state.time}</span>
      <div style={{backgroundColor: that.state.color, width:'800px',height:'800px'}}>
      </div>
    </div>
  )
}
}

class Root extends React.Component {
  render () {
    return (
      <div >
        <div class="container mt-5">
          <Game />

        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)