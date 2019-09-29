import React,{Component} from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor(props){
        super();
    this.state = {
      example: 'select category stat',
      categories : []

    }
  }

componentDidMount(){
  axios.get("https://api.chucknorris.io/jokes/categories")
    .then(res =>{
      console.log("res :" , res.data);
      this.setState({ categories : res.data })
    })

    .catch(err => {
      console.log("the err :", err);
    })
}

getExactCatergory=(category) => {

  console.log("que lo que seleccionaste", category);

}

  render(){
     let categories = this.state.categories;
    return(
    <div className="App">
      <header>
        <div className="btn-group">
          <form type="button" className="btn btn-secondary">{this.state.example}</form>
          <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
            {categories.map((category, i ) => {
              return   <a key={i} className="dropdown-item" onClick={this.getExactCatergory.bind(this, category)}>{category}</a>
            })}
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Separated link</a>
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
