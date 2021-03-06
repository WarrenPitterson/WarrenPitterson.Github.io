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
        <span className="player-name">
            <button className = "remove-player" onClick={()=>props.removePlayer(props.id)}>X</button>
            {props.name}
        </span>
        <Counter score={props.score}/>  {/* calls the counter function, so is a function in a function (Composition)*/}
        </div>
        )
    }

class Counter extends React.Component {
    state = {
            score:0
        };
       
    incrementScore = () => {
        this.setState(prevState => ({ score: prevState.score + 1}));
    }


    decrementScore = () => {
        this.setState(prevState => ({ score: prevState.score - 1}));
    }

     render() {
       return(
            <div className="counter">
                <button className="counter-action decrement" onClick={()=>this.decrementScore()}> - </button>
                 <span className="counter-score">{ this.state.score }</span>
                 <button className="counter-action increment" onClick={()=>this.incrementScore()}> + </button>   
            </div>
        )   
}   }
// Method above uses arrow syntax so binding is not needed. 


    class App extends React.Component {
        state = {
            players: [
                {id: 1, name:"Warren", score:10},
                {id: 2, name:"Ste", score:20},
                {id: 3, name:"Bob", score:30},
                {id: 4, name:"Dave", score:40}
            ]
        };

        handleRemovePlayer = (id) => {
            this.setState(prevState =>({
                players:prevState.players.filter(p => p.id !==id)
            }))
        }

        render() {
            return(
            <div className="scoreboard">
            <Header title="scoreboard" totalPlayers={this.state.players.length}/>
            {/* Players list */}
            {this.state.players.map(player =>
                <Player 
                    name={player.name}
                    id={player.id}
                    key={player.id.toString()}
                    removePlayer={this.handleRemovePlayer}
                    />
            )}
            </div>
        )
    }

    };
    ReactDOM.render(
        <App/>,  //self enclosed tag used to call the function
        document.getElementById('root')
    );
    

//Prop is read only( or immutable), the parent component owns and controls the porperty value!!! IMPORTANT!!!!!
//Classes are used to change information rather than just store. 