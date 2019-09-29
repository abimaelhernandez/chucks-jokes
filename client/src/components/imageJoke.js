import React,{Component} from 'react';

export default class CategoryDetials extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    console.log("inside of getExactCatergory :", this.props.text);
    let text = this.props.text;

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
