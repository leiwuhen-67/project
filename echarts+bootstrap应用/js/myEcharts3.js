// 图表3
var echarts3 = echarts.init(document.getElementById("myEcharts3"));
echarts3.setOption({
	legend: {
		orient:'horizontal',
		y:"20",
        data:['销售额']
    },
	tooltip: {},
    xAxis: {
        data: ["桌面工具","WEB应用","移动应用","云产品","服务产品"]
    },
    yAxis: [{
            type: 'value',
            min: 0,
            max:10,
            interval: 2,
            axisLabel: {
                formatter: '{value}k'
            },
            splitLine:{ 
                show:false 
            },
        }],
    series: [{
        name: '销售额',
        type: 'bar',
        data: [9, 7, 5, 7.8,4],
        barWidth:"20",
        barGap:"76"
    }],
    itemStyle: {
        normal: {
            color: 'rgba(125, 200, 86, 1)',
        }
    }
})