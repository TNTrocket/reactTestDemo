import React from 'react'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import routes from '../route/index'
import SideNav from './sideNav'
import { Row, Col } from 'antd'
import '../static/css/style.less'

const Main = () => (
  <Router>
    <Row gutter={16}>
      <Col span="5">
        <SideNav/>
      </Col>

      <Col span="18">
        <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        </Switch>
      </Col>
    </Row>
  </Router>
)

export default Main