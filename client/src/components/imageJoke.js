import React,{Component} from 'react';
import axios from 'axios';

export default class CategoryDetials extends Component {
  constructor(props){
    super(props);
    this.state = {
      key : "pNvHp3y61cRD75UjuLHUBJ9xQn8urqRh",
      word1:"Chuck",
      word2:"Norris",
      word3:"valient"
    }
  }

  render() {
    console.log("inside of getExactCatergory :", this.props.text);
    let text = this.props.text;
     axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.word1}+${this.state.word2}+${this.state.word3}&api_key=${this.state.key}`)
     .then(res => {
       console.log('nahhh :', res );
     })
     .catch(err => {
       console.log(err);
     })
    return(
      <section className="informationContainer">
        <div>
          {text.value}
        </div>
        <div>
          <img src="../../../chuckSubtitute.jpeg" alt="Paris"/>
        </div>

      </section>
    )
  }
}
