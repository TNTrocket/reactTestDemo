import React, { Component } from 'react'
import Action from '../actions/main'
import { connect } from 'react-redux'
import { Table } from 'antd'

class AllArticle extends Component {
  constructor(props) {
    super();
    this.articleColumns = [
      {
        title: '标号',
        dataIndex: 'a_id',
        key: 'a_id',
        width:100,
        className:'table-react',
      },{
        title: '文章标题',
        dataIndex: 'a_content_title',
        key: 'a_content_title',
        width:200,
        className:'table-react',
      },{
        title: '类目',
        dataIndex: 'type',
        key: 'type',
        width:100,
        className:'table-react',
      },{
        title: '发布时间',
        dataIndex: 'a_update_time',
        key: 'a_update_time',
        width:100,
        className:'table-react',
      },{
        title: '状态',
        dataIndex: 'a_edit_status',
        key: 'a_edit_status',
        width:100,
        className:'table-react',
        render:function (text, record, index) {
          if(record.a_edit_status == 0){
            return <span>未编辑</span>
          }else if(record.a_edit_status == 1){
            return <span>编辑中</span>
          }
          else if(record.a_edit_status == 2){
            return <span>已编辑</span>
          }
        }
      }];
    this.pagination = {
      defaultPageSize:10,
      pageSize:10,
      total:0,
      current:1,
      className:'fix-footer',
      onChange:this.onPageChange.bind(this),
    };
  }
  componentWillMount() {

  }
  componentDidMount(){
    this.props.getAllArticle();
  }

  componentWillReceiveProps(nextProps) {
    // console.log("nextProps",nextProps)
  }
  onPageChange(curPage){
    console.log(curPage);
    this.pagination.current = curPage;
    this.props.getAllArticle({
      page : curPage
    })
  }

  render() {
    console.log("this.props.allArticleList",this.props.allArticleList)
    this.articleList = this.props.allArticleList;
    this.pagination = Object.assign({},
      this.pagination,
      {
        total : this.props.total,
        showQuickJumper : true

      })
    return (
      <Table
        dataSource={this.articleList}
        columns={this.articleColumns}
        pagination={this.pagination}
      />
    )
  }
}


const mapStateToProps = (state) => {
  console.log("state",state)
  const { allArticleReducer } = state;
  return {
    allArticleList : allArticleReducer.allArticleList,
    total : allArticleReducer.total
  };
};
function mapDispatchToProps() {
  return {
    getAllArticle : Action.creators.getAllArticle
  }
}
export default connect(mapStateToProps, mapDispatchToProps())(AllArticle);