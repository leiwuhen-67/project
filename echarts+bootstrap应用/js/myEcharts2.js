// 图表2
var echarts2 = echarts.init(document.getElementById("myEcharts2"));
echarts2.setOption({
    legend: {
        orient:'horizontal',
        y:"20",
        data:['订单量']
    },
	tooltip: {},
    xAxis: {
        data: ["桌面工具","WEB应用","移动应用","云产品","服务产品"],
    },
    yAxis: [{
            type: 'value',
            min: 0,
            max:1000,
            interval: 200,
            axisLabel: {
                formatter: '{value}'
            },
            splitLine:{ 
                show:false 
            },
        }],
    series: [{
        name: '订单量',
        type: 'bar',
        data: [600, 420, 300, 250, 390],
        barWidth:"20",
        barGap:"76"
    }],
    itemStyle: {
        normal: {
            color: 'rgba(255, 204, 102, 1)',
        }
    }
})