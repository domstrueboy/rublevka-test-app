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
          <h3>{this.props.list[0].id}</h3>
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