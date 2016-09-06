// 控制音乐播放
$(function() {
        $('.audio-img').on('click', function() {
                if ($('.audio-music').get(0).paused) {
                        $('.audio-music').get(0).play();
                        $(this).addClass('rotate');
                        $(this).removeClass('stop');
                        $('.audio-stop').removeClass('stop-show');
                        return;
                }
                $('.audio-music').get(0).pause();
                $(this).removeClass('rotate');
                $(this).addClass('stop');
                $('.audio-stop').addClass('stop-show');
                // $('.audio-music').get(0).pause(); //pause和play是原生的dom函数，必须使用get0,获取原声的dom元素
        });

        $('.audio-stop').on('click', function() {
                if ($('.audio-music').get(0).paused) {
                        $('.audio-music').get(0).play();
                        $('.audio-img').addClass('rotate');
                        $('.audio-img').removeClass('stop');
                        $('.audio-stop').removeClass('stop-show');
                        return;
                }
                $('.audio-music').get(0).pause();
                $('.audio-img').removeClass('rotate');
                $('.audio-img').addClass('stop');
                $('.audio-stop').addClass('stop-show');
                // $('.audio-music').get(0).pause(); //pause和play是原生的dom函数，必须使用get0,获取原声的dom元素
        });


});
//
//
//

// fullpage
$(function() {
        $('#fullpage').fullpage({
                anchors: ["page1", "page2", "page3", "page4", "page5", "page6", "page7"],
                afterLoad: function(anchorLink, index) {
                        if (index == 2) {
                                $(".star1").addClass("star-up");
                                $(".text-801").addClass("text-active");
                        }
                        if (index == 3) {
                                $(".star2").addClass("star-up");
                                $(".text-800").addClass("text-active");
                        }
                        if (index == 4) {
                                $(".star3").addClass("star-up");
                                $(".text-901").addClass("text-active");
                        }
                        if (index == 5) {
                                $(".star4").addClass("star-up");
                                $(".text-900").addClass("text-active");
                        }
                        if (index == 6) {
                                $(".star5").addClass("star-up");
                                $(".text-001").addClass("text-active");
                        }
                        if (index == 7) {
                                $(".star6").addClass("star-up");
                                $(".text-000").addClass("text-active");
                        }
                },
                onLeave: function(index, nextIndex, direction) {
                        if (index == 2) {
                                $(".star1").removeClass("star-up");
                                $(".text-801").removeClass("text-active");
                        }
                        if (index == 3) {
                                $(".star2").removeClass("star-up");
                                $(".text-800").removeClass("text-active");
                        }
                        if (index == 4) {
                                $(".star3").removeClass("star-up");
                                $(".text-901").removeClass("text-active");
                        }
                        if (index == 5) {
                                $(".star4").removeClass("star-up");
                                $(".text-900").removeClass("text-active");
                        }
                        if (index == 6) {
                                $(".star5").removeClass("star-up");
                                $(".text-001").removeClass("text-active");
                        }
                        if (index == 7) {
                                $(".star6").removeClass("star-up");
                                $(".text-000").removeClass("text-active");
                        }

                }

        });
});


// 表格
$(function() {
        $('#container1').highcharts({
                chart: {
                        type: 'bar',
                        style: {
                                color: '#FFFFFF',
                                fontFamily: "Microsoft yahei",
                                fontSize: '12px',
                                // fontWeight:'bold',
                        },
                        backgroundColor: '#0A0A0A',
                        borderWidth: 0

                },
                title: {
                        text: null,
                        style: {
                                color: '#FFFFFF'
                        },
                        margin: 50,
                },
                subtitle: {
                        // text: 'Source: Wikipedia.org'
                },
                xAxis: {
                        categories: ['孙红雷', '胡歌', '黄渤', '王力宏', '邓超', '高圆圆', '范冰冰', '周杰伦', '林志玲', 'Angelababy'],
                        title: {
                                text: null
                        },
                        labels: {
                                style: {
                                        color: '#FFFFFF'
                                }

                        },
                        tickWidth: 0,
                        lineColor: '#7F7F7F',
                        lineWidth: 1,
                },
                yAxis: {
                        min: 0,
                        title: {
                                // text: '明星',
                                align: 'high',
                                text: null,
                        },
                        labels: {
                                enabled: false
                                        // overflow: 'justify'
                        },
                        gridLineWidth: 0,


                },
                tooltip: {
                        valueSuffix: ' 分'
                },
                plotOptions: {
                        bar: {
                                dataLabels: {
                                        color: '#FFFFFF',
                                        enabled: true,
                                        style: {
                                                fontWeight: 'normal'
                                        }
                                },
                                borderWidth: 0

                        }
                },
                legend: {
                        layout: 'vertical',
                        align: 'center',
                        verticalAlign: 'bottom',
                        x: 0,
                        y: 0,
                        floating: false,
                        backgroundColor: null,
                        itemStyle: {
                                color: '#FFFFFF',
                                fontWeight: 'normal'
                        }
                        // borderWidth: 1,
                        // backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                        // shadow: true
                },
                credits: {
                        enabled: false
                },
                colors: ["#FF8000"], //柱形图颜色
                series: [{
                        name: '知名度*喜爱度*品质',
                        data: [22.4, 20.8, 20.4, 15.4, 15.2, 15.1, 12.8, 11.6, 10.5, 8.4],
                }]

        });
        // 8888888888888888888888888888888888888888888888888888888888888888888888
        $('#container2').highcharts({

                chart: {
                        type: 'bar',
                        style: {
                                color: '#FFFFFF',
                                fontFamily: "Microsoft yahei",
                                fontSize: '12px',
                                // fontWeight:'bold',
                        },
                        backgroundColor: '#0A0A0A',
                        borderWidth: 0

                },
                title: {
                        text: null,
                        style: {
                                color: '#FFFFFF'
                        },
                        margin: 50,
                },
                subtitle: {
                        // text: 'Source: Wikipedia.org'
                },
                xAxis: {
                        categories: ['胡歌', '霍建华', '高圆圆', '钟汉良', '范冰冰', '汤唯', '孙俪', '孙红雷', '宋仲基', '邓超'],
                        title: {
                                text: null
                        },
                        labels: {
                                style: {
                                        color: '#FFFFFF'
                                }

                        },
                        tickWidth: 0,
                        lineColor: '#7F7F7F',
                        lineWidth: 1,
                },
                yAxis: {
                        min: 0,
                        title: {
                                // text: '明星',
                                align: 'high',
                                text: null,
                        },
                        labels: {
                                enabled: false
                                        // overflow: 'justify'
                        },
                        gridLineWidth: 0,


                },
                tooltip: {
                        valueSuffix: ' 分'
                },
                plotOptions: {
                        bar: {
                                dataLabels: {
                                        color: '#FFFFFF',
                                        enabled: true,
                                        style: {
                                                fontWeight: 'normal'
                                        }
                                },
                                borderWidth: 0

                        }
                },
                legend: {
                        layout: 'vertical',
                        align: 'center',
                        verticalAlign: 'bottom',
                        x: 0,
                        y: 0,
                        floating: false,
                        backgroundColor: null,
                        itemStyle: {
                                color: '#FFFFFF',
                                fontWeight: 'normal'
                        }
                        // borderWidth: 1,
                        // backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                        // shadow: true
                },
                credits: {
                        enabled: false
                },
                colors: ["#FF8000"], //柱形图颜色
                series: [{
                        name: '知名度*喜爱度*品质',
                        data: [33.8, 27, 16.5, 15.4, 13.3, 12, 10.7, 10, 9.7, 8.8],
                }]

        });


        // 999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        $('#container3').highcharts({

                chart: {
                        type: 'bar',
                        style: {
                                color: '#FFFFFF',
                                fontFamily: "Microsoft yahei",
                                fontSize: '12px',
                                // fontWeight:'bold',
                        },
                        backgroundColor: '#0A0A0A',
                        borderWidth: 0

                },
                title: {
                        text: null,
                        style: {
                                color: '#FFFFFF'
                        },
                        margin: 50,
                },
                subtitle: {
                        // text: 'Source: Wikipedia.org'
                },
                xAxis: {
                        categories: ['胡歌', '周杰伦', '范冰冰', '邓超', 'Angelababy', '刘亦菲', '黄渤', '孙红雷', '霍建华', '王力宏'],
                        title: {
                                text: null
                        },
                        labels: {
                                style: {
                                        color: '#FFFFFF'
                                }

                        },
                        tickWidth: 0,
                        lineColor: '#7F7F7F',
                        lineWidth: 1,
                },
                yAxis: {
                        min: 0,
                        title: {
                                // text: '明星',
                                align: 'high',
                                text: null,
                        },
                        labels: {
                                enabled: false
                                        // overflow: 'justify'
                        },
                        gridLineWidth: 0,


                },
                tooltip: {
                        valueSuffix: ' 分'
                },
                plotOptions: {
                        bar: {
                                dataLabels: {
                                        color: '#FFFFFF',
                                        enabled: true,
                                        style: {
                                                fontWeight: 'normal'
                                        }
                                },
                                borderWidth: 0

                        }
                },
                legend: {
                        layout: 'vertical',
                        align: 'center',
                        verticalAlign: 'bottom',
                        x: 0,
                        y: 0,
                        floating: false,
                        backgroundColor: null,
                        itemStyle: {
                                color: '#FFFFFF',
                                fontWeight: 'normal'
                        }
                        // borderWidth: 1,
                        // backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                        // shadow: true
                },
                credits: {
                        enabled: false
                },
                colors: ["#B63253"], //柱形图颜色
                series: [{
                        name: '知名度*喜爱度*品质',
                        data: [29.4, 15, 12.4, 11.5, 8.2, 7.9, 7.7, 6.1, 5.8, 5.1],
                }]
        });
        // 999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        $('#container4').highcharts({

                chart: {
                        type: 'bar',
                        style: {
                                color: '#FFFFFF',
                                fontFamily: "Microsoft yahei",
                                fontSize: '12px',
                                // fontWeight:'bold',
                        },
                        backgroundColor: '#0A0A0A',
                        borderWidth: 0

                },
                title: {
                        text: null,
                        style: {
                                color: '#FFFFFF'
                        },
                        margin: 50,
                },
                subtitle: {
                        // text: 'Source: Wikipedia.org'
                },
                xAxis: {
                        categories: ['胡歌', '霍建华', '范冰冰', '高圆圆', '钟汉良', '李易峰', '宋仲基', '刘涛', '刘亦菲', '何炅'],
                        title: {
                                text: null
                        },
                        labels: {
                                style: {
                                        color: '#FFFFFF'
                                }

                        },
                        tickWidth: 0,
                        lineColor: '#7F7F7F',
                        lineWidth: 1,
                },
                yAxis: {
                        min: 0,
                        title: {
                                // text: '明星',
                                align: 'high',
                                text: null,
                        },
                        labels: {
                                enabled: false
                                        // overflow: 'justify'
                        },
                        gridLineWidth: 0,


                },
                tooltip: {
                        valueSuffix: ' 分'
                },
                plotOptions: {
                        bar: {
                                dataLabels: {
                                        color: '#FFFFFF',
                                        enabled: true,
                                        style: {
                                                fontWeight: 'normal'
                                        }
                                },
                                borderWidth: 0

                        }
                },
                legend: {
                        layout: 'vertical',
                        align: 'center',
                        verticalAlign: 'bottom',
                        x: 0,
                        y: 0,
                        floating: false,
                        backgroundColor: null,
                        itemStyle: {
                                color: '#FFFFFF',
                                fontWeight: 'normal'
                        }
                        // borderWidth: 1,
                        // backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                        // shadow: true
                },
                credits: {
                        enabled: false
                },
                colors: ["#B63253"], //柱形图颜色
                series: [{
                        name: '知名度*喜爱度*品质',
                        data: [38.3, 29.2, 15, 14, 10.3, 8.2, 8.1, 7.8, 7.5, 7.4],
                }]
        });

        // 00000000000000000 00000000000000000 00000000000000000 00000000000000000
        $('#container5').highcharts({

                chart: {
                        type: 'bar',
                        style: {
                                color: '#FFFFFF',
                                fontFamily: "Microsoft yahei",
                                fontSize: '12px',
                                // fontWeight:'bold',
                        },
                        backgroundColor: '#0A0A0A',
                        borderWidth: 0

                },
                title: {
                        text: null,
                        style: {
                                color: '#FFFFFF'
                        },
                        margin: 50,
                },
                subtitle: {
                        // text: 'Source: Wikipedia.org'
                },
                xAxis: {
                        categories: ['周杰伦', 'Angelababy', '胡歌', '鹿晗', '邓超', '杨幂', '李易峰', '刘亦菲', '范冰冰', '邓紫棋'],
                        title: {
                                text: null
                        },
                        labels: {
                                style: {
                                        color: '#FFFFFF'
                                }

                        },
                        tickWidth: 0,
                        lineColor: '#7F7F7F',
                        lineWidth: 1,
                },
                yAxis: {
                        min: 0,
                        title: {
                                // text: '明星',
                                align: 'high',
                                text: null,
                        },
                        labels: {
                                enabled: false
                                        // overflow: 'justify'
                        },
                        gridLineWidth: 0,


                },
                tooltip: {
                        valueSuffix: ' 分'
                },
                plotOptions: {
                        bar: {
                                dataLabels: {
                                        color: '#FFFFFF',
                                        enabled: true,
                                        style: {
                                                fontWeight: 'normal'
                                        }
                                },
                                borderWidth: 0

                        }
                },
                legend: {
                        layout: 'vertical',
                        align: 'center',
                        verticalAlign: 'bottom',
                        x: 0,
                        y: 0,
                        floating: false,
                        backgroundColor: null,
                        itemStyle: {
                                color: '#FFFFFF',
                                fontWeight: 'normal'
                        }
                        // borderWidth: 1,
                        // backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                        // shadow: true
                },
                credits: {
                        enabled: false
                },
                colors: ["#15D9AA"], //柱形图颜色
                series: [{
                        name: '知名度*喜爱度*品质',
                        data: [9.1, 6.8, 5, 4.3, 3.4, 2.8, 2.1, 1.8, 1.8, 1.7],
                }]
        });
        // 0000000000000000000000000000000000000000000000000000000000000000000000
        $('#container6').highcharts({

                chart: {
                        type: 'bar',
                        style: {
                                color: '#FFFFFF',
                                fontFamily: "Microsoft yahei",
                                fontSize: '12px',
                                // fontWeight:'bold',
                        },
                        backgroundColor: '#0A0A0A',
                        borderWidth: 0

                },
                title: {
                        text: null,
                        style: {
                                color: '#FFFFFF'
                        },
                        margin: 50,
                },
                subtitle: {
                        // text: 'Source: Wikipedia.org'
                },
                xAxis: {
                        categories: ['鹿晗', '吴亦凡', 'Angelababy', '张艺兴', '范冰冰', '李易峰', '谢娜', '赵丽颖', '邓超', '何炅'],
                        title: {
                                text: null
                        },
                        labels: {
                                style: {
                                        color: '#FFFFFF'
                                }

                        },
                        tickWidth: 0,
                        lineColor: '#7F7F7F',
                        lineWidth: 1,
                },
                yAxis: {
                        min: 0,
                        title: {
                                // text: '明星',
                                align: 'high',
                                text: null,
                        },
                        labels: {
                                enabled: false
                                        // overflow: 'justify'
                        },
                        gridLineWidth: 0,


                },
                tooltip: {
                        valueSuffix: ' 分'
                },
                plotOptions: {
                        bar: {
                                dataLabels: {
                                        color: '#FFFFFF',
                                        enabled: true,
                                        style: {
                                                fontWeight: 'normal'
                                        }
                                },
                                borderWidth: 0

                        }
                },
                legend: {
                        layout: 'vertical',
                        align: 'center',
                        verticalAlign: 'bottom',
                        x: 0,
                        y: 0,
                        floating: false,
                        backgroundColor: null,
                        itemStyle: {
                                color: '#FFFFFF',
                                fontWeight: 'normal'
                        }
                        // borderWidth: 1,
                        // backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                        // shadow: true
                },
                credits: {
                        enabled: false
                },
                colors: ["#15D9AA"], //柱形图颜色
                series: [{
                        name: '知名度*喜爱度*品质',
                        data: [48.2, 24.4, 19, 9.6, 9.5, 6.1, 5.2, 4.3, 3.8, 3.8],
                }]
        });
});


// 80女
// categories: ['胡歌','霍建华','高圆圆','钟汉良','范冰冰','汤唯','孙俪','孙红雷','宋仲基','邓超'],
// data: [33.8,27,16.5,15.4,13.3,12,10.7,10,9.7,8.8],

// 90男
// categories: [胡歌','周杰伦','范冰冰','邓超','Angelababy','刘亦菲','黄渤','孙红雷','霍建华','王力宏'],
// data: [29.4,15,12.4,11.5,8.2,7.9,7.7,6.1,5.8,5.1],
// 90女
// categories: ['胡歌','霍建华','范冰冰','高圆圆','钟汉良','李易峰','宋仲基','刘涛','刘亦菲','何炅'],
// data: [38.3,29.2,15,14,10.3,8.2,8.1,7.8,7.5,7.4],


// 00男
// categories: ['周杰伦','Angelababy','胡歌','鹿晗','邓超','杨幂','李易峰','刘亦菲','范冰冰','邓紫棋'],
// data: [9.1,6.8,5,4.3,3.4,2.8,2.1,1.8,1.8,1.7],
// 00女
// categories: ['鹿晗','吴亦凡','Angelababy','张艺兴','范冰冰','李易峰','谢娜','赵丽颖','邓超','何炅'],
// data: [48.2,24.4,19,9.6,9.5,6.1,5.2,4.3,3.8,3.8],
