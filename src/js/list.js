window.onload = function () {

    //导航菜单，二级菜单
    twoList()
    twoList_list()
    function twoList() {
        $('.hassub')
            .on({
                mouseenter: function () {
                    $(".head_section3_nav_div").eq($(this).index() - 1).css("display", "block")
                },
                mouseleave: function () {
                    $('.head_section3_nav_div').css("display", "none")
                }
            })
    }
    function twoList_list() {
        $('.head_section3_nav_div')
            .on({
                mouseover: function () { $(this).css("display", "block") },
                mouseout: function () { $(this).css("display", "none") }
            })
    }

    //列表商品请求
    shopList();
    function shopList() {
        $.ajax({
            url: '../lib/list.json',
            dataType: 'json',
            success: function (res) {

                //渲染分页器
                $('.M-box3').pagination({
                    pageCount: Math.ceil(res.length / 8),//总页数
                    current: 1,//当前页
                    jump: true,
                    coping: true,
                    homePage: '首页',
                    endPage: '末页',
                    prevContent: '上页',
                    nextContent: '下页',
                    callback: function (api) {

                        let curr = api.getCurrent();//获取，当前是第几页

                        var list = res.slice((curr - 1) * 8, curr * 8)//切割数据,slice(start, end),不包括尾部

                        HtmlList(list);//使用分页器时，渲染

                    }
                });

                //优先降第一页的数据渲染
                HtmlList(res.slice(0, 8));
            }
        })
    }

    //渲染
    function HtmlList(list) {
        let str = '';
        list.forEach(item => {
            str += `
            <div data-id="${item.id}" class="zt_25_list" style="margin-bottom: 36px;margin-left: 24px;">
                                    <a  title="" target="_blank">
                                        <img src="${item.img}"
                                            alt="" class="zt_25_img">
                                    </a>
                                    <span class="zt_25_logobg">
                                        <span class="BLB">
                                            <img
                                                src="http://0.image.al.okbuycdn.com//nbn/l72_50_detect/static/14ff119a643db529a889fd00d59b8776.jpg">
                                        </span>
                                    </span>
                                    <a  class="zt_25_link zt_25_link_a" title=""
                                        target="_blank">${item.title}</a>
                                    <span class="zt_25_link">¥
                                        <span  class="zt_25_pr">${item.money}</span>
                                        <i>
                                            <span>${item.zt_25_link2}</span>
                                        </i>
                                    </span>
                                </div>
            `
            $('.shopList').html(str);
        });

        // 详细页跳转
        // $('.shopList > div').click(function () {
        //     console.log(this)
        // })

    }
}