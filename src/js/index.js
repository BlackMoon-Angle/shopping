window.onload = function () {
    //公告二级菜单渲染
    $.ajax({
        url: '/headerInfo',
        data: {},
        cache: false,
        dataType: 'json',
        success: function (res) {
            $('#head_nav_div_ajax').html(res.notice.notice_list);
        }
    })

    //第一商品列表渲染
    $.ajax({
        url: '/shopList',
        data: { cid: '3' },
        cache: false,
        dataType: 'json',
        success: function (res2) {

            function shopTime() {
                let str = '';
                res2.res.forEach(item => {

                    var et = new Date(item.endtime);
                    var nt = new Date();
                    var ct = parseInt((et.getTime() - nt.getTime()) / 1000);//时间差
                    var day = parseInt(ct / (60 * 60 * 24));//天
                    var hour = parseInt(ct / (60 * 60) % 24);//时
                    var min = parseInt(ct / 60 % 60);//分
                    var s = parseInt(ct % 60);//秒

                    str += `
                   <li>
                        <a href="${item.link}" target="_blank">
                            <img src="${item.img}" alt="">
                            <span class="tit1">${item.title}</span>
                            <span class="tit2">${item.slogan}</span>
                            <span class="tit3">${item.discount}</span>
                            <span class="time" id="timetwo0">
                                <span class="day"><i>${day}</i>天</span>
                                <span class="hour"><i>${hour}</i>时</span>
                                <span class="minute"><i>${min}</i>分</span>
                                <span class="second"><i>${s}</i>秒</span>
                            </span>        
                        </a>
                    </li>
                   `
                })
                $('#list2in_ul').html(str);
            }
            shopTime();
            setInterval(shopTime, 1000);
        }
    })

    //第二列商品渲染
    $.ajax({
        url: '/shopList2',
        data: { cid: '4' },
        cache: false,
        dataType: 'json',
        success: function (res3) {
            
            function shopTime2(){
                let str = '';

                res3.res.forEach(item => {

                    var et = new Date(item.endtime);
                    var nt = new Date();
                    var ct = parseInt((et.getTime() - nt.getTime()) / 1000);//时间差
                    var day = parseInt(ct / (60 * 60 * 24));//天
                    var hour = parseInt(ct / (60 * 60) % 24);//时
                    var min = parseInt(ct / 60 % 60);//分
                    var s = parseInt(ct % 60);//秒
                    str += `
                    <li>
                        <a href="${item.link}" target="_blank">
                            <img src="${item.img}">
                            <p class="list3tit1">${item.title}
                                <span>${item.discount}</span>
                            </p>
                            <span class="time2" id="timethree0">
                                <span class="day">
                                    <i>${day}</i>天
                                </span>
                                <span class="hour">
                                    <i>${hour}</i>时
                                </span>
                                <span class="minute">
                                    <i>${min}</i>分
                                </span>
                                <span class="second">
                                    <i>${s}</i>秒
                                </span>
                            </span>
                        </a>
                    </li>
                   `
                })
                $('#list3in_ul').html(str);
            }
            shopTime2();
            setInterval(shopTime2, 1000);
        }
    })
}

//定时器倒计时
// function shopTime(times) {
//     var et = new Date(times);
//     var nt = new Date();
//     var ct = parseInt((et.getTime() - nt.getTime()) / 1000);//时间差
//     var day = parseInt(ct / (60 * 60 * 24));//天
//     var hour = parseInt(ct / (60 * 60) % 24);//时
//     var min = parseInt(ct / 60 % 60);//分
//     var s = parseInt(ct % 60);//秒
// }