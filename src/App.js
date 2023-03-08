import React, { Component } from 'react'
import './css/index.css'
import './css/App.css'
import {
  FullScreenContainer,
  BorderBox13,
  Decoration5, Decoration11,
} from '@jiaminghi/data-view-react'
import * as echarts from 'echarts';

const bBox11title = "网宿冷站监控平台"
// 待测试api接口后测试
class Api extends React.Component{

}

class App extends Component {
  // eslint-disable-next-line
  constructor(props) { 
    super(props) 
  }
  componentDidMount() {

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

    var myChart = echarts.init(document.getElementById('LengJi_Chart'));
    var option = {
        title: {
            text: '精密空调',
            left: 20,
            textStyle: {
                lineHeight: 30,
                color: 'white',
            },
        },
        grid:{
          x:150,
          y:20,
          x2:30,
          y2:70,
          borderWidth:1
      },
        tooltip: {
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
            bottom:10,
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
            },           {
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
      <div className="rootData">
        {/* 全屏容器 */}
        <FullScreenContainer>
          <div>
            <Decoration11 style={{ width: '400px', height: '60px', color: 'white', fontWeight: 'bold', fontSize: '30px', top: '50%', left: '43%' }} >{bBox11title}</Decoration11>
            <Decoration5 style={{ width: "100%", height: '40px' }} />
          </div>
          <BorderBox13>
            {/* 占位div */}
            <div style={{ height:'20px'}}></div>
            {/* 上部分的div */}
            <div className="topDiv">
                {/* 冷机设备的chart */}
                <div id="LengJi_Chart"></div>
                {/* 冷塔设备的chart */}
                <div id="LengTa_Chart"></div>
                {/* 制冷单元的chart */}
                <div id="ZhiLengDanYuan_Chart"></div>
            </div>

            <div className="bottomDiv">
              {/* 下半部分左侧div */}
              <div className="LeftBottomDiv">
                 <div id="LengDongBeng_Chart"></div>
                 <div id="LengQueBeng_Chart"></div> 
              </div>
              {/* 下半部分中间div */}
              <div className='CenterBottomDiv'>
                <div id='XuLengGuan'></div>
              </div>

              {/* 下半部分右侧div */}
              <div className="RightBottomDiv">
                 <div id="BanHuan_Chart"></div>
                 <div id="LengJiJinChuShui_Chart"></div> 
              </div>

            </div>
          </BorderBox13>
        </FullScreenContainer>
      </div>
    );
  }
}

export default App;