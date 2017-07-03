var echarts4 = echarts.init(document.getElementById("myEcharts4"));
echarts4.setOption({
	legend: {
		orient:'horizontal',
		y:"20",
        data:['订单量']
    },
	tooltip: {},
    xAxis: {
        data: ["基础","国土","通信","市政","公安","水利","防灾","地矿","气象","农林","自然资源","大赛专区","其他"]
    },
    yAxis: [{
            type: 'value',
            min: 0,
            max:500,
            interval: 100,
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
        data: [200, 300,300,300, 300,300,300, 300,300,300, 300,300,300],
        barWidth:"20",
        barGap:"17"
    }],
    itemStyle: {
        normal: {
            color: 'rgba(255, 204, 102, 1)',
        }
    }
})