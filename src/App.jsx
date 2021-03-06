import React, { Component } from 'react';
import Subject from './Components/Subject';
import TOC from './Components/TOC';
import Content from './Components/ReadContent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode : 'read',
      selected_id : 2,
      welcome : {title : 'WelCome', desc : 'Hello, React!!'},
      subject : {title : 'WEB', sub : 'World Wid Web!'},
      contents : [
        {id : 1, title : 'HTML', desc : 'HTML is for information'},
        {id : 2, title : 'CSS', desc : 'CSS is for design'},
        {id : 3, title : 'JavaScript', desc : 'JavaScript is for interactive'}
      ]

    }
  }


  render() {
    var _title, _desc = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }
    else if(this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className ="App">
        <Subject 
        title = {this.state.subject.title}
        sub = {this.state.subject.sub}
        onChangePage = {function() {
          this.setState( {mode : 'welcome'});
        }.bind(this)}
        />
        <TOC onChangePage = {function(id){
          this.setState( { mode : 'read',
          selected_id : Number(id)
        } );
        }.bind(this)}
        data = {this.state.contents} />
        <Content title = {_title} desc = {_desc} />
         </div>
    )
    
  }
}

export default App;
