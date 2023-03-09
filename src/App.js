import React, { Component } from 'react'
import './css/index.css'
import './css/App.css'
import {
    FullScreenContainer,
    BorderBox13,
    Decoration5, Decoration11,
} from '@jiaminghi/data-view-react'

import LengJi from './pages/LengJi'
import LengQueBeng from './pages/LengQueBeng'
import LengTa from './pages/LengTa'
import ZhiLengDanYuan from './pages/ZhiLengDanYuan'
import LengDongBeng from './pages/LengDongBeng'
import XuLengGuan from './pages/XuLengGuan'
import BanHuan from './pages/BanHuan'
import LengJiJinChuShui from './pages/LengJiJinChuShui'


const bBox11title = "网宿冷站监控平台"
// 待测试api接口后测试
class App extends React.Component {
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
                        <div style={{ height: '20px' }}></div>
                        {/* 上部分的div */}
                        <div className="topDiv">
                            {/* 冷机设备的chart */}
                            <LengJi />
                            <LengTa />
                            <ZhiLengDanYuan />
                        </div>

                        <div className="bottomDiv">
                            {/* 下半部分左侧div */}
                            <div className="LeftBottomDiv">
                                <LengDongBeng />
                                <LengQueBeng />
                            </div>
                            {/* 下半部分中间div */}
                            <div className='CenterBottomDiv'>
                                <XuLengGuan/>
                            </div>

                            {/* 下半部分右侧div */}
                            <div className="RightBottomDiv">
                                <BanHuan/>
                                <LengJiJinChuShui />
                            </div>

                        </div>
                    </BorderBox13>
                </FullScreenContainer>
            </div>
        );
    }
}
export default App;