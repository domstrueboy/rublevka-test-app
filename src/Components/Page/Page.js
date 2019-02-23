import React, {Component} from 'react';
import './Page.css';

class Page extends Component {

  componentDidMount () {

  }

  render () {
    try {
      return (
        <div>
          <h3>{this.props.match.params.page}</h3>
          {this.props.pageData.map(card => {
            return (
              <p key={card.id}>
                <img src={card.exampleImages[0]} alt="myHouse"/>
              </p>
            );
            
          })}
        </div>
      );
    } catch (err) {
      return (
        <div>Blank Page</div>
      );
    }
    
  }
  
}

export default Page;