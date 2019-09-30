import React,{Component} from 'react';
import axios from 'axios';

export default class CategoryDetials extends Component {
  constructor(props){
    super(props);
    this.state = {
      key : "pNvHp3y61cRD75UjuLHUBJ9xQn8urqRh",
      word1:"",
      word2:"",
      word3:"",
      imgUrl:''
    }
  }



tappingGiphy = ( ) => {
    if(this.props.arr === ""){
      console.log('tapping giphy props render', this.props.arr.images);

    }else if(this.props.arr != ""){
      let theThree = this.props.arr;
      // this.setState({word1: theThree[0],word2: theThree[1],word3: theThree[2]})
      let  word1 = theThree[0] ;
      let  word2 = theThree[1] ;
      let  word3 = theThree[2] ;
      axios.get(`http://api.giphy.com/v1/gifs/search?q=${word1}+${word2}+${word3}&api_key=${this.state.key}&limit=1`)
      .then(res => {
        console.log('giphy endpoint responce gif :', res.data);
        this.setState({ imgUrl : res.data.data[0].images.downsized.url})
      })
      .catch(err => {
        console.log('error at giphy endpoint :', err);
      })
   }
}

  render() {
    this.tappingGiphy()
    return(
      <section >
          <img  src={this.state.imgUrl} alt=""/>
      </section>
    )
  }
}
