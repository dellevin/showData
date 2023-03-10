import React, { Component } from 'react'
import '../css/index.css'
// import '../css/App.css'
//import axios from 'axios';
import * as echarts from 'echarts';
//import { async } from '@jiaminghi/data-view-react/lib/index-cd27b7f6';

class LengJiJinChuShui extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props)
        this.state={
            titleText:'冷机进出水',
            //Legend控制显示设备的数据，也就是前端中的左边哪些东西
            LegendData: [
                '精密空调1制冷量', '精密空调2制冷量', '精密空调3制冷量', '精密空调4制冷量', '精密空调5制冷量', '精密空调6制冷量', '精密空调7制冷量', '精密空调系统总制冷量',
                '精密空调1电功率', '精密空调2电功率', '精密空调3电功率', '精密空调4电功率', '精密空调5电功率', '精密空调6电功率', '精密空调7电功率', '精密空调系统总电功率',
                '精密空调1COP', '精密空调2COP', '精密空调3COP', '精密空调4COP', '精密空调5COP', '精密空调6COP', '精密空调7COP', '精密空调系统总COP',
            ],
            //x坐标轴的时间显示
            xAxisData:['8:30:00', '8:30:05', '8:30:10', '8:30:15', '8:30:20', '8:30:25', '8:30:30']
        }
        
    }
    componentDidMount(){

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
                myChart.setOption({
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
        var id ='LengJiJinChuShui_Chart'
        var myChart;
        //使用echarts时，如果不存在DOM，就会报错，处理方法先检查是否DOM存在：
        if(document.getElementById(id) == null){
            return
        }
        echarts.dispose(document.getElementById(id))
        
        myChart = echarts.init(document.getElementById(id));
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
                confine:true,// tooltip 框限制在图表的区域内
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
                data: [
                    '精密空调1制冷量', '精密空调2制冷量', '精密空调3制冷量', '精密空调4制冷量', '精密空调5制冷量', '精密空调6制冷量', '精密空调7制冷量', '精密空调系统总制冷量',
                    '精密空调1电功率', '精密空调2电功率', '精密空调3电功率', '精密空调4电功率', '精密空调5电功率', '精密空调6电功率', '精密空调7电功率', '精密空调系统总电功率',
                    '精密空调1COP', '精密空调2COP', '精密空调3COP', '精密空调4COP', '精密空调5COP', '精密空调6COP', '精密空调7COP', '精密空调系统总COP',
                ]
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    mark: { show: true },
                    dataView: { show: false, readOnly: false },//数据穿透预览
                    magicType: { show: true, type: ['line', 'bar', 'stack'] },//柱状图和折线图的转换
                    restore: { show: true },//数据刷新
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
                    // x轴字体颜色
                    axisLabel: {
                        color: "white",
                    },
                    data: ['8:30:00', '8:30:05', '8:30:10', '8:30:15', '8:30:20', '8:30:25', '8:30:30']
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
                    barGap: 0,
                    //控制柱状图内的字体显示与否
                    //// label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [71, 71, 71, 71, 75, 76, 78]
                },
                {
                    name: '精密空调2制冷量',
                    type: 'bar',
                    //// label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [79, 79, 79, 79, 82, 82, 84]
                },
                {
                    name: '精密空调3制冷量',
                    type: 'bar',
                    //// label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [65, 65, 65, 65, 67, 70, 71]
                },
                {
                    name: '精密空调4制冷量',
                    type: 'bar',
                    //// label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [0, 0, 0, 0, 0, 0, 0]
                }
                ,
                {
                    name: '精密空调5制冷量',
                    type: 'bar',
                    // label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [65, 65, 65, 65, 67, 70, 71]
                },
                {
                    name: '精密空调6制冷量',
                    type: 'bar',
                    // label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: '精密空调7制冷量',
                    type: 'bar',
                    // label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: '精密空调系统总制冷量',
                    type: 'bar',
                    // label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [215, 215, 215, 215, 224, 228, 233]
                }, {
                    name: '精密空调1电功率',
                    type: 'bar',
                    barGap: 0,
                    // label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [71, 71, 71, 71, 75, 76, 78]
                },
                {
                    name: '精密空调2电功率',
                    type: 'bar',
                    // label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [79, 79, 79, 79, 82, 82, 84]
                },
                {
                    name: '精密空调3电功率',
                    type: 'bar',
                    // label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [65, 65, 65, 65, 67, 70, 71]
                },
                {
                    name: '精密空调4电功率',
                    type: 'bar',
                    // label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [0, 0, 0, 0, 0, 0, 0]
                }
                ,
                {
                    name: '精密空调5电功率',
                    type: 'bar',
                    // label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [65, 65, 65, 65, 67, 70, 71]
                },
                {
                    name: '精密空调6电功率',
                    type: 'bar',
                    // label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: '精密空调7电功率',
                    type: 'bar',
                    // label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: '精密空调系统总电功率',
                    type: 'bar',
                    // label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [215, 215, 215, 215, 224, 228, 233]
                },
                {
                    name: '精密空调1COP',
                    type: 'bar',
                    barGap: 0,
                    // label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [71, 71, 71, 71, 75, 76, 78]
                },
                {
                    name: '精密空调2COP',
                    type: 'bar',
                    // label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [79, 79, 79, 79, 82, 82, 84]
                },
                {
                    name: '精密空调3COP',
                    type: 'bar',
                    // label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [65, 65, 65, 65, 67, 70, 71]
                },
                {
                    name: '精密空调4COP',
                    type: 'bar',
                    // label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [0, 0, 0, 0, 0, 0, 0]
                }
                ,
                {
                    name: '精密空调5COP',
                    type: 'bar',
                    // label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [65, 65, 65, 65, 67, 70, 71]
                },
                {
                    name: '精密空调6COP',
                    type: 'bar',
                    // label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: '精密空调7COP',
                    type: 'bar',
                    // label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [0, 0, 0, 0, 0, 0, 0]
                },
                {
                    name: '精密空调系统总COP',
                    type: 'bar',
                    // label: labelOption,
                    emphasis: {
                        focus: 'series'
                    },
                    data: [215, 215, 215, 215, 224, 228, 233]
                },
            ]
        };
        myChart.setOption(option);
    }
    render() {
        return (
                <div id="LengJiJinChuShui_Chart"></div>
        );
    }
}
export default LengJiJinChuShui;