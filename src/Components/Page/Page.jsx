import React, {Component} from 'react';
import './Page.css';

import Card from '../Card/Card.jsx';

class Page extends Component {

  componentDidMount () {

  }

  render () {
    try {
      return (
        <div className="page">
          {this.props.pageData.map(card => {
            return (
              <Card card={card} key={card.id} />
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