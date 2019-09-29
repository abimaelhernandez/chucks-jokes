import React,{Component} from 'react';
import axios from 'axios';

export default class App extends Component {
  constuctor(props){

    this.state = {

    }
  }

componentDidMount(){
  this.getCategories();
}


getCategories =() => {
  console.log("hola mundo");
}

  render(){
    return(
    <div className="App">
      <header>
        <div className="dropdown">
          <button onClick={console.log("hola mundo")} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" >
            Dropdown button
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
        <div>
          <button> Search </button>
        </div>
      </header>

      <div className="jokeImg">
        <div>
          the Jokes div
        </div>
        <div>
         The Image.
        </div>
      </div >
    </div>
    )
  }
}
