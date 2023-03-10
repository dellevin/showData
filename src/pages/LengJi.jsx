import React, { Component } from 'react'
import '../css/index.css'
import * as echarts from 'echarts';
import axios from 'axios'
import { async } from '@jiaminghi/data-view-react/lib/index-cd27b7f6';


class LengJi extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props)
        this.state = {
            titleText: '冷机',
            //Legend控制显示设备的数据，也就是前端中的左边哪些东西
            LegendData: [
                '精密空调1制冷量'
            ],
            //x坐标轴的时间显示
            xAxisData: ['8:30:00', '8:30:05', '8:30:10', '8:30:15', '8:30:20', '8:30:25', '8:30:30'],

            //测试数据
            randomList: [
                [6, 22, 32, 11, 36, 20],
                [12, 32, 8, 34, 18, 14],
                [22, 12, 32, 10, 10, 20],
                [18, 38, 16, 26, 14, 14],
                [16, 10, 10, 38, 10, 14],
                [28, 12, 32, 35, 17, 20]
            ]
        }
    }
    // eslint-disable-next-line
    componentDidMount = async () => {
        //ajax 数据获取
        // var toUrl = "https://fakerapi.it/api/v1/addresses?_quantity=9";
        // const res = await axios.get(toUrl);
        // console.log(res.data.data)
        // this.setState({
        //     roleList: res.data.data
        // })


        var app = {};
        const posList = [
            'left',
            'right',
            'top',
            'bottom',
            'inside',
            'insideTop',
            'insideLeft',
            'insideRight',
            'insideBottom',
            'insideTopLeft',
            'insideTopRight',
            'insideBottomLeft',
            'insideBottomRight'
        ];

        app.configParameters = {
            rotate: {
                min: -90,
                max: 90
            },
            align: {
                options: {
                    left: 'left',
                    center: 'center',
                    right: 'right'
                }
            },
            verticalAlign: {
                options: {
                    top: 'top',
                    middle: 'middle',
                    bottom: 'bottom'
                }
            },
            position: {
                options: posList.reduce(function (map, pos) {
                    map[pos] = pos;
                    return map;
                }, {})
            },
            distance: {
                min: 0,
                max: 100
            }
        };
        app.config = {
            rotate: 90,
            align: 'left',
            verticalAlign: 'middle',
            position: 'insideBottom',
            distance: 15,
            onChange: function () {
                const labelOption = {
                    rotate: app.config.rotate,
                    align: app.config.align,
                    verticalAlign: app.config.verticalAlign,
                    position: app.config.position,
                    distance: app.config.distance
                };
                LengJiChart.setOption({
                    series: [
                        {
                            label: labelOption
                        },
                        {
                            label: labelOption
                        },
                        {
                            label: labelOption
                        },
                        {
                            label: labelOption
                        }
                    ]
                });
            }
        };

        // const labelOption = {
        //     show: true,
        //     position: app.config.position,
        //     distance: app.config.distance,
        //     align: app.config.align,
        //     verticalAlign: app.config.verticalAlign,
        //     rotate: app.config.rotate,
        //     formatter: '{c}  {name|{a}}',
        //     fontSize: 16,
        //     rich: {
        //         name: {}
        //     }
        // };
        var id = 'LengJi_Chart'
        var LengJiChart;
        //使用echarts时，如果不存在DOM，就会报错，处理方法先检查是否DOM存在：
        if (document.getElementById(id) == null) {
            return
        }
        echarts.dispose(document.getElementById(id))
        LengJiChart = echarts.init(document.getElementById(id));
        var random = Math.ceil(Math.random() * 6 - 1);
        console.log("random:" + random)
        var option = {
            title: {
                text: this.state.titleText,
                left: 20,
                textStyle: {
                    lineHeight: 30,
                    color: 'white',
                },
            },
            grid: {
                x: 150,
                y: 20,
                x2: 30,
                y2: 70,
                borderWidth: 1
            },
            tooltip: {
                confine: true,// tooltip 框限制在图表的区域内
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            // 可根据需求筛选需要展示的数据
            legend: {
                type: 'scroll',
                orient: 'vertical',
                top: 30,
                left: 8,
                bottom: 10,
                textStyle: {
                    fontSize: 10,//字体大小
                    color: '#ffffff'//字体颜色
                },
                data: this.state.LegendData
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    mark: { show: true },
                    dataView: { show: false, readOnly: false },//数据穿透预览
                    magicType: { show: true, type: ['line', 'bar'] },//柱状图和折线图的转换
                    restore: { show: false },//数据刷新
                    saveAsImage: { show: false }//保存为图片
                }
            },
            // 下方的时间拖动条
            dataZoom: [
                {
                    type: 'inside',
                    start: 0,
                    end: 100
                },
                {
                    start: 0,
                    end: 100
                }
            ],
            xAxis: [
                {
                    type: 'category',
                    axisTick: { show: false },
                    boundaryGap: true,
                    // x轴字体颜色
                    axisLabel: {
                        color: "white",
                    },
                    // data: this.state.xAxisData
                    //横坐标轴数据时间变化
                    data: (function () {
                        let now = new Date()
                        let res = []
                        let len = 7;
                        while (len--) {
                            res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                            now = new Date(now - 5000);
                        }
                        console.log(res)
                        return res;
                    })()
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    //y轴字体颜色
                    axisLabel: {
                        color: "white"
                    },
                }
            ],
            series: [
                {
                    name: '精密空调1制冷量',
                    type: 'bar',
                    emphasis: {
                        focus: 'series'
                    },
                    //控制柱状图内的字体显示与否
                    //// label: labelOption,
                    data: [71, 71, 71, 71, 75, 76, 78]
                    //data: this.LengJi.state.randomList[random],
                }
            ]
        };
        LengJiChart.setOption(option);

    }

    render() {
        return (
            <div id="LengJi_Chart" ></div>
        );
    }
}
export default LengJi;