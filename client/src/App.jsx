import React,{Component} from 'react';
import axios from 'axios';
import CategoryDetials from './components/imageJoke.js';

export default class App extends Component {
  constructor(props){
        super(props);
    this.state = {
      category: 'Select Category',
      categories : [],
      jokeText:[]
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

getExactCatergory=(clickedCategory) => {
  console.log("que lo que seleccionaste", clickedCategory);
  this.setState({ category : clickedCategory})
}

getTheInfo =(category) => {
  console.log("this is Category :", category);
  axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then(res =>{
      console.log(res.data);
      this.setState({
        jokeText: res.data
      })
    })
    .catch(err =>{console.log(err);})
}

  render(){
     let categories = this.state.categories;
     let category = this.state.category;
    return(
    <div className="App">
      <header>
        <div className="btn-group hola">
          <form type="button" className="btn btn-secondary">{category}</form>
          <button type="button" className="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-reference="parent">
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuReference">
            {categories.map((clickedCategory, i ) => {
              return   <a key={i} className="dropdown-item" href="#" onClick={this.getExactCatergory.bind(this, clickedCategory)}>{clickedCategory}</a>
            })}
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Separated link</a>
          </div>
        </div>
        <div>
          <button onClick={this.getTheInfo.bind(this, category)}> Search </button>
        </div>
      </header>
      <div>
        <CategoryDetials text={this.state.jokeText}/>
      </div>
    </div>
    )
  }
}
