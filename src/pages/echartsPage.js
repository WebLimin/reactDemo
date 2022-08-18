import React from "react";
import * as echarts from "echarts";
import { default as styles } from "./echartsPage.css";

export default class echartsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={styles.page}>
                <div className={styles.head}>
                    
                </div>
                <div className={styles.body}>
                    <div className={styles.echartsEl}></div>
                </div>
            </div>
        )
    }

    componentDidMount () {
        this.initEcharts();
    }

    componentDidCatch(error, errorInfo) {
        logErrorToMyService(error, errorInfo);
    }

    initEcharts() {
        let elem = document.querySelector(`.${styles.echartsEl}`);
        console.log(elem);
        let myChart = echarts.init(elem);
        let option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }
            ]
        };

        myChart.setOption(option);
    }
}
