import React, { Component } from 'react';

class Subject extends Component {
    render() {
      const {
        titlevalue,
        subtitlevalue,
      } = this.props;
  
  
      return(
        <header>
        <h1>{titlevalue}</h1>
        {subtitlevalue}
        </header>
      );
    }
  }

  export default Subject;