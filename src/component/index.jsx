import React, { Component } from 'react'
import { Row, Col, Input } from 'antd'
import { connect } from 'react-redux'
import Action from '../actions/main'

class Index extends Component {

  componentWillMount() {
   // const { actions } = this.props;
    this.props.findUser();
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {

    return (
      <div>
       <Row>
        <Col>原SEO标题：</Col>
       </Row>

        <Row>
          <Col>原关键词：</Col>
        </Row>

        <Row>
          <Col>原描述：</Col>
        </Row>

        <Row>
          <Col>SEO标题：</Col>
          <Input/>
        </Row>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  const {user,city} = state;
  return {
    user: user ? user : null,
    city: city ? city : []
  };
};
function mapDispatchToProps() {
  return {
    findUser : Action.creators.findUser
  }
}
export default connect(mapStateToProps, mapDispatchToProps())(Index);