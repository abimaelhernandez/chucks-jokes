import React,{Component} from 'react';
import axios from 'axios';
import CategoryDetials from './components/imageJoke.js';

export default class App extends Component {
  constructor(props){
        super(props);
    this.state = {
      category: 'Select Category',
      categories : [],
      jokeText:[],
      threeWords:""
    }
  }

componentDidMount(){
  axios.get("https://api.chucknorris.io/jokes/categories")
    .then(res =>{
      this.setState({ categories : res.data })
    })

    .catch(err => {
      console.log("the err :", err);
    })
}

getExactCatergory=(clickedCategory) => {
  this.setState({ category : clickedCategory})
}

getTheInfo =(category) => {
  axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then(res =>{
      console.log('reponce :', res.data);
      this.setState({
        jokeText: res.data
      })
      this.getTheWords();
    })
    .catch(err =>{console.log(err);})
}

getTheWords = () => {
  let str = this.state.jokeText.value;
  if( str === undefined ){
    console.log('your str is undefined');
  }else if (str != undefined ) {
    let test =  /[,.]/g;
    let string = str.replace(test,"")
    let arr = string.split(" ");
    let theThree = arr.slice(0,3);
    this.setState({ threeWords : theThree});
  }
}

  render(){
     let categories = this.state.categories;
     let category = this.state.category;
     let text = this.state.jokeText;
     let arr = this.state.threeWords;
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
          <div className="buttonContainer">
            <button onClick={this.getTheInfo.bind(this, category)}> Search </button>
          </div>
        </header>

        <div className="informationContainer">
          <div class="theText">
            {text.value}
          </div>

          <div class="theImg">
            <CategoryDetials arr={arr}/>
          </div>

        </div>
      </div>
    )
  }
}
