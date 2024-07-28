window.onload = function () {
    console.log(123);
    test1();

}

function test1() {
    param = {
        'legend': ['计划', '已接收', '已完成'],
        'xdata': ['工序1', '工序2', '工序3', '工序4', '工序5', '工序6'],
        'ydata': [
            [10, 11, 12, 13, 14, 15],
            [9, 10, 11, 8, 9, 10],
            [8, 9, 10, 9, 7, 6]
        ]
    }
    setFormat1('daydata-echart', '日计划', param);



}


function setFormat1(id, title, param) {
    let format1 = echarts.init(document.querySelector(`#${id}`));
    let option = {
        // title: {
        //     text: title,
        //     x: 'center',
        //     y: 'top'
        // },
        dataZoom: [
            {
                xAxisIndex: 0, //这里是从X轴的0刻度开始
                show: false, //是否显示滑动条，不影响使用
                type: "inside", // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                startValue: 0, // 从头开始。
                endValue: 2, // 一次性展示几个。
            }
        ],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            show: true,
            top: '5vh',
            data: param.legend
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
        },
        xAxis: [
            {
                type: 'category',
                axisTick: { show: false },
                axisLabel: {
                    interval: 'auto', // 坐标轴间隔显示
                    color: '#123'
                },
                data: param.xdata
            }
        ],
        yAxis: {
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#556B2F']
                }
            },
            show: true,
            axisLabel: {
                show: true,
                color: '#123'
            },
            axisTick: {
                show: true,
            },
            axisLine: {
                show: true,
            },

        },
        series: [
            {
                name: param.legend[0],
                type: 'bar',
                barGap: 0,
                // barWidth: '15vw',
                label: {
                    show: true,
                    position: 'top',
                    color: '#123',
                    fontSize: 10,
                },
                emphasis: {
                    focus: 'series'
                },
                data: param.ydata[0]
            },
            {
                name: param.legend[1],
                type: 'bar',
                // barWidth: '15vw',
                label: {
                    show: true,
                    position: 'top',
                    color: '#123',
                    fontSize: 10,
                },
                // label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: param.ydata[1]
            },
            {
                name: param.legend[2],
                type: 'bar',
                // barWidth: '15vw',
                label: {
                    show: true,
                    position: 'top',
                    color: '#123',
                    fontSize: 10,
                },
                // label: labelOption,
                emphasis: {
                    focus: 'series'
                },
                data: param.ydata[2]
            }
        ],
        color: [
            '#EF7A6D',
            '#87CEEB',
            '#9394E7',
            '#C1FFC1',
            '#63E398',
            '#934b43',
            '#F1D77E',
            '#D76364',
            '#B1CE46',
            '#5F97D2',
            '#9DC3E7',
            '#DB7093',
            '#FFA07A',
            '#123',
            '#2f9',
            '#9370DB'
        ],
        // backgroundColor: '#FFF5EE',
        grid: {
            // show: false,
            top: '40vh',
            bottom: '30vh',
        }
    };

    format1.setOption(option);
    let x = param.xdata.length;
    this.timechartes = setInterval(function () {
        // 每次向后滚动一个，最后一个从头开始。
        if (option.dataZoom[0].endValue == x) {
            option.dataZoom[0].endValue = 2;
            option.dataZoom[0].startValue = 0;
        } else {
            option.dataZoom[0].endValue = option.dataZoom[0].endValue + 1;
            option.dataZoom[0].startValue = option.dataZoom[0].startValue + 1;
        }
        format1.setOption(option)
    }, 5000);


    return format1;
}




