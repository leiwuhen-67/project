var echarts5 = echarts.init(document.getElementById("myEcharts5"));
echarts5.setOption({
	legend: {
		orient:'horizontal',
		y:"20",
        data:['销售额']
    },
	tooltip: {},
    xAxis: {
        data: ["基础","国土","通信","市政","公安","水利","防灾","地矿","气象","农林","自然资源","大赛专区","其他"]
    },
    yAxis: [{
            type: 'value',
            min: 0,
            max:10,
            interval:2,
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
        data: [6.8, 9,9,9, 9,9,9, 9,9,9, 9,9,9],
        barWidth:"20",
        barGap:"17"
    }],
    itemStyle: {
        normal: {
            color: 'rgba(125, 200, 86, 1)',
        }
    }
})