const players = [
    {id: 1, name:"Warren", score:10},
    {id: 2, name:"Ste", score:20},
    {id: 3, name:"Bob", score:30},
    {id: 4, name:"Dave", score:40}
]

const Header=(props)=>{
    return(
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players:{ props.totalPlayers }</span>
        </header>
        )
    }      

const Player=(props)=>{
    return(
        <div className="player">
        <span className="player-name">{ props.name }</span>
        <Counter/>  {/* calls the counter function, so is a function in a function (Composition)*/}
        </div>
        )
    }

class Counter extends React.Component {
    state = {
            score:0
        };
        incrementScore() {
            this.setState({
                score: this.state.score +1
            })
            console.log(this.state.score);
        }
     render() {
       return(
            <div className="counter">
                <button className="counter-action"> - </button>
                 <span className="counter-score">{ this.state.score }</span>
                 <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
            </div>
        )   
}   }

    const App=(props)=>{
        return(
            <div className="scoreboard">
            <Header title="scoreboard" totalPlayers={props.initialPlayers.length}/>
            {/* Players list */}
            {props.initialPlayers.map(player =>
                <Player 
                    name={player.name}
                    key={player.id.toString()}
                    />
            )}
            </div>
        )
    }


    ReactDOM.render(
        <App initialPlayers={players}/>,  //self enclosed tag used to call the function
        document.getElementById('root')
    );
    

//Prop is read only( or immutable), the parent component owns and controls the porperty value!!! IMPORTANT!!!!!