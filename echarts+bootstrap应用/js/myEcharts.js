var echarts1 = echarts.init(document.getElementById("myEcharts1"));
echarts1.setOption({
	tooltip: {
		trigger: 'axis'
	},
    legend: {
    	orient: 'horizontal',                             
        x: '560px',               
        y: '20px',
        data:['订单量','销售额']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        },
    ],
    yAxis: [
        {
            type: 'value',
            min: 0,
            max: 60,
            interval: 15,
            splitLine:{ 
                show:false 
            },
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            min: 0,
            max: 10,
            interval: 2,
            splitLine:{ 
                show:false 
            },
            axisLabel: {
                formatter: '{value} k'
            }
        }
    ],
    series: [
        {
            name:'订单量',
            type:'line',
          	itemStyle : {  
                normal : {  
                    lineStyle:{  
                        color:'#41bdf5'  
                    }  
                }  
            },  
            data:[30, 31, 18, 40, 36, 60, 30, 29, 8, 15, 9, 18]
        },
        {
            name:'销售额',
            type:'line',
            yAxisIndex: 1,
            itemStyle : {  
                normal : {  
                    lineStyle:{  
                        color:'#808bc6'  
                    }  
                }  
            },  
            data:[0.1, 0.6, 1, 3, 3, 5, 2.8, 2.5, 2, 8, 4.2, 4]
        }
    ]
})

