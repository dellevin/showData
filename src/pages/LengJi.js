import React from "react";
import axios from 'axios';
import { Input,Table } from 'antd';
const { Search } = Input;

class Axios extends React.Component {
  // 构造函数的初始化数据处理
  constructor(props) {
    super(props)
    //保存表格数据
    this.state = {
      columns:[
        {
          title:'id',
          dataIndex:'id',
          key:'id'
        },
        {
          title:'街道',
          dataIndex:'street',
          key:'street'
        },
        {
          title:'城市',
          dataIndex:'city',
          key:'city'
        },
        {
          title:'zipcode',
          dataIndex:'zipcode',
          key:'zipcode'
        },
        {
          title:'country',
          dataIndex:'country',
          key:'country'
        }
      ], 
      roleList: [] 
    }
  }
  componentDidMount = async () => {
    //ajax 数据获取
    var toUrl = "https://fakerapi.it/api/v1/addresses?_quantity=9";
    const res = await axios.get(toUrl);
    console.log(res.data.data)
    this.setState({
      roleList:res.data.data 
    })
    // axios.get(toUrl).then(function (result) {
    //   const data = result.data.data;
    //   console.log(data)
    //   if (data.length > 0) {
    //     this.setState(() => ({
    //       roleList: data
    //     }))
    //   }
    // }.bind(this), 'JSON');
  }

  render() {
    return (
      <React.Fragment>
        {/* <h2>获取api,控制台打印</h2>
        <button onClick={this.componentDidMount}>点击按钮</button> */}
        {/* <table border="1">
          <tr>
            <th>id</th>
            <th>street</th>
            <th>city</th>
            <th>zipcode</th>
            <th>country</th>
          </tr>
          {this.state.roleList.map((role) =>
            <tr key={role.id}>
              <td>{role.id}</td>
              <td>{role.street}</td>
              <td>{role.city}</td>
              <td>{role.zipcode}</td>
              <td>{role.country}</td>
            </tr>
          )}
        </table> */}
        
        <Table dataSource={this.state.roleList} columns={this.state.columns}></Table>
      
      </React.Fragment>
    )
  }
}


class table extends React.Component {

  render() {
    return (
      <div className="App">
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={this.onSearch}
            />
        <Axios />
      </div>
    )
  }
}

export default table;
