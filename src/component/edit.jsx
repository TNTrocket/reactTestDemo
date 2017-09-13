import React, { Component } from 'react'
import Ueditor from './ueditor';


class Edit extends Component {

  componentWillMount() {
    this.state = { text: '' };
    this.ueditorId = 'content_'+Math.ceil(Math.random()*100)
    this.handleChange = this.handleChange.bind(this);
    // forceupdate
  }
  componentDidMount(){
    console.log("componentDidMount");
  }
  componentWillReceiveProps(nextProps) {

  }

  handleChange(value) {
    this.setState({ text: value })
  }

  render() {
    return (
      <div>
      <Ueditor id={this.ueditorId} height={400} />
      </div>
    )
  }
}


export default Edit