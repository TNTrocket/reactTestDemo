import React, { Component } from 'react'
import Action from '../actions/main'
import { connect } from 'react-redux'
import { Table, Button } from 'antd'

class EditArticle extends Component {
  constructor(props) {
    super();
    this.articleColumns = [
      {
        title: '标号',
        dataIndex: 'a_id',
        key: 'a_id',
        width:80,
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
        width:80,
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
        width:50,
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
    this.rowSelection ={
      type : "radio",
      onChange: this.tableChange.bind(this)
      // onSelect: this.tableSelect.bind(this)
    }
  }
  tableChange(selectedRowKeys,selectedRows){
    console.log("selectedRowKeys",selectedRowKeys)
    console.log("selectedRows",selectedRows)
    this.editId = selectedRows[0].a_id
    this.setState({
      tableDisabled : false
    })
  }
  // tableSelect(record,selected,selectedRows){
  //  console.log("sss")
  // }
  componentWillMount() {
    console.log("componentWillMount");
    this.setState({
      tableDisabled : true
    })
  }
  componentDidMount(){
    console.log("componentDidMount");
    this.props.getEditArticle();
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps",nextProps)
    this.pagination = Object.assign({},
      this.pagination,
      {
        total : nextProps.total,
        showQuickJumper : true
      })
  }
  onPageChange(curPage){
    console.log(curPage);
    this.pagination.current = curPage;
    this.props.getEditArticle({
      page : curPage
    })
  }
  goEdit(){
    this.props.history.push('/edit?id='+this.editId);
  }
  deleteArticle(){
    alert("delete")
  }

  render() {
    console.log("this.props.allArticleList",this.props.editArticleList)

    let disabled = this.state.tableDisabled;
    return (
      <div>
        <Table
          dataSource = {this.props.editArticleList}
          columns = {this.articleColumns}
          pagination = {this.pagination}
          rowSelection = { this.rowSelection }
        />
        <Button disabled={ disabled } onClick={ this.goEdit.bind(this) }>
          修改
        </Button>
        <Button style={{marginLeft:30+'px'}} disabled={ disabled } onClick={ this.deleteArticle.bind(this) }>
          删除
        </Button>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log("state",state)
  const { editArticleReducer } = state;
  return {
    editArticleList : editArticleReducer.editArticleList,
    total : editArticleReducer.total
  };
};
function mapDispatchToProps() {
  return {
    getEditArticle : Action.creators.getEditArticle
  }
}
export default connect(mapStateToProps, mapDispatchToProps())(EditArticle);