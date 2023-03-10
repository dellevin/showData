import React from "react";
import axios from 'axios';
import { Input,Table } from 'antd';
import { async } from "@jiaminghi/data-view-react/lib/index-cd27b7f6";
const { Search } = Input;

class Axios extends React.Component {
  // 构造函数的初始化数据处理
  constructor(props) {
    super(props)
    //保存表格数据
    this.state = {
      date:1,
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
  componentDidMount () {
    setInterval(async()=>{
      console.log(this.state.date++)
    //ajax 数据获取
      var toUrl = "https://fakerapi.it/api/v1/addresses?_quantity=9";
      const res = await axios.get(toUrl);
      //console.log(res.data.data)
      this.setState({
        roleList:res.data.data 
      })
    },5000)



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
        <Table dataSource={this.state.roleList} columns={this.state.columns}></Table>
      </React.Fragment>
    )
  }
}


class table extends React.Component {
  //搜索
  onSearch =(value)=>{
    console.log(value)
    //搜索接口下面实现搜索
    //调用搜索接口关键${value}
    //重新给roleList赋值，也就是setState
  }
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

export default Axios;
