import React, { Component } from 'react';
import Subject from './Components/Subject';
import TOC from './Components/TOC';
import ReadContent from './Components/ReadContent';
import './App.css';
import Control from './Components/Control';
import CreateContent from './Components/CreateContent';

class App2 extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode : 'read',
      selected_id : 3,
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
    var _title, _desc = null, _article;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title = {_title} desc = { _desc } />
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
      _article = <ReadContent title = {_title} desc = { _desc } />
    }
    else if(this.state.mode === 'create') {
        _article = <CreateContent onSubmit = {function(_title, _desc) {
            this.max_content_id = this.max_content_id + 1;
            var _contents = this.state.contents.concat({
                id: this.max_content_id, title : _title, desc : _desc
            });
            this.setState({
                contents : _contents
            });
        }.bind(this)}/>
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
          <Control onChangeMode = {function(mode) {
              this.setState({
                  mode : mode
              })

          }.bind(this)} />
        <TOC onChangePage = {function(id){
          this.setState( { mode : 'read',
          selected_id : Number(id)
        } );
        }.bind(this)}
        data = {this.state.contents} />
        {_article}
         </div>
    )
    
  }
}

export default App2;
