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

    //商品视图切换
    ImgLook()
    function ImgLook() {
        $('.Img_tbody_tr > td > a').mouseenter(function () {
            $('.Img_tbody_tr > td > a').children('span').css('display', 'none');
            $(this).children('span').css('display', 'block');

            //切换主视图图片
            $(this)
                .parent()//获取 a 标签的父元素 td
                .parent()//获取 td 标签的父元素 tr
                .parent()//获取 tr 标签的父元素 tbody
                .parent()//获取 tbody 标签的父元素 table
                .parent()//获取 table 标签的父元素 div
                .siblings('.pBigPic')//获取 div 的兄弟元素 p
                .children('span')//获取 p 的子元素 span
                .children('img')//获取 span 的子元素 img
                .attr('src', $(this).attr('rel'));//修改img的src值

            //切换放大镜投影图片
            $(this)
                .parent()
                .parent()
                .parent()
                .parent()
                .parent()
                .siblings('.big_box')
                .children('img')
                .attr('src', $(this).attr('rel'));
        })
    }

    //放大镜

    fdj()
    function fdj() {
        $(".mask").mouseover(function () {
            $(".float_layer").show()
            $(".big_box").show()
        })
        $(".mask").mouseout(function () {
            $(".float_layer").hide()
            $(".big_box").hide()
        })


        $(".mask").mousemove(function (e) {


            var l = e.pageX - $(".pBigPic").offset().left - ($(".float_layer").width() / 2)
            var t = e.pageY - $(".pBigPic").offset().top - ($(".float_layer").height() / 2)
            if (l < 0) {
                l = 0
            }
            if (l > $(this).width() - $(".float_layer").width()) {
                l = $(this).width() - $(".float_layer").width()
            }
            if (t < 0) {
                t = 0
            }
            if (t > $(this).height() - $(".float_layer").height()) {
                t = $(this).height() - $(".float_layer").height()
            }

            $(".float_layer").css({
                "left": l,
                "top": t
            })
            var pX = l / ($(".mask").width() - $(".float_layer").width())
            var pY = t / ($(".mask").height() - $(".float_layer").height())
            $(".big_box img").css({
                "left": -pX * ($(".big_box img").width() - $(".big_box").width()),
                "top": -pY * ($(".big_box img").height() - $(".big_box").height())
            })
        })
    }

    //接受列表页传来的数据，渲染
    Data_rendering();
    function Data_rendering() {

        //拿到localStorage的数据
        //解析
        const info = JSON.parse(localStorage.getItem('goodsInfo'));

        //判断数是否存在
        if (!info) {
            alert('数据不存在！');
            //跳转回列表页
            window.location.href = '../pages/list.html';
        }

        //渲染页面
        rendering();
        function rendering() {
            // 头部文字
            $('.headText1').text(info.headText1);
            $('.headText2').text(info.headText2);
            $('.headText3').text(info.headText3);
            $('.headText4').text(info.headText4);
            $('.headText5').text(info.headText5);

            // 商品主视图,投影图
            $('.MaxImg1').attr('src', info.mi[0].MaxImg);

            //商品主视图底部列表图
            if (info.mi.length <= 4) {
                //屏蔽多余的td
                $('.mi_IMG5').css('display', 'none');
                $('.mi_IMG6').css('display', 'none');
                $('.mi_IMG7').css('display', 'none');
                $('.mi_IMG8').css('display', 'none');
                $('.mi_IMG9').css('display', 'none');

                $('.mi_IMG1').attr('rel', info.mi[0].MaxImg);
                $('.mi_IMG1 > img').attr('src', info.mi[0].MaxImg);

                $('.mi_IMG2').attr('rel', info.mi[1].MaxImg);
                $('.mi_IMG2 > img').attr('src', info.mi[1].MaxImg);

                $('.mi_IMG3').attr('rel', info.mi[2].MaxImg);
                $('.mi_IMG3 > img').attr('src', info.mi[2].MaxImg);

                $('.mi_IMG4').attr('rel', info.mi[3].MaxImg);
                $('.mi_IMG4 > img').attr('src', info.mi[3].MaxImg);
            }
            if (info.mi.length > 4) {
                $('.mi_IMG5').css('display', 'block');
                $('.mi_IMG6').css('display', 'block');
                $('.mi_IMG7').css('display', 'block');
                $('.mi_IMG8').css('display', 'block');
                $('.mi_IMG9').css('display', 'block');

                $('.mi_IMG1').attr('rel', info.mi[0].MaxImg);
                $('.mi_IMG1 > img').attr('src', info.mi[0].MaxImg);

                $('.mi_IMG2').attr('rel', info.mi[1].MaxImg);
                $('.mi_IMG2 > img').attr('src', info.mi[1].MaxImg);

                $('.mi_IMG3').attr('rel', info.mi[2].MaxImg);
                $('.mi_IMG3 > img').attr('src', info.mi[2].MaxImg);

                $('.mi_IMG4').attr('rel', info.mi[3].MaxImg);
                $('.mi_IMG4 > img').attr('src', info.mi[3].MaxImg);

                $('.mi_IMG5').attr('rel', info.mi[4].MaxImg);
                $('.mi_IMG5 > img').attr('src', info.mi[4].MaxImg);

                $('.mi_IMG6').attr('rel', info.mi[5].MaxImg);
                $('.mi_IMG6 > img').attr('src', info.mi[5].MaxImg);

                $('.mi_IMG7').attr('rel', info.mi[6].MaxImg);
                $('.mi_IMG7 > img').attr('src', info.mi[6].MaxImg);

                $('.mi_IMG8').attr('rel', info.mi[7].MaxImg);
                $('.mi_IMG8 > img').attr('src', info.mi[7].MaxImg);

                $('.mi_IMG9').attr('rel', info.mi[8].MaxImg);
                $('.mi_IMG9 > img').attr('src', info.mi[8].MaxImg);
            }
        }

        // 商品名称
        $('.Title1').text(info.Title1);
        $('.sex').text(info.sex);
        $('.Title2').text(info.Title2);

        // 价格
        $('.Bmoney').text(info.Bmoney);
        $('.Smoney').text(info.Smoney);
        $('.zk').text(info.zk);

        // 商品选择
        $('.a_color > img').attr('src', info.mi[0].MaxImg);

        // 尺码
        $('.size1').text(info.size1);
        $('.size2').text(info.size2);
        $('.size3').text(info.size3);
        $('.size4').text(info.size4);
        $('.size5').text(info.size5);
        $('.size6').text(info.size6);
        $('.size7').text(info.size7);
        $('.size8').text(info.size8);


        //详细页与购物车页交互
        buy();
        function buy() {
            $('.prodCartBtn').click(function () {

                //先拿到数据，如果不存在数据，就用一个空数组代替
                const cartList = JSON.parse(localStorage.getItem('cartList')) || [];

                //判断数据是否存在
                let exits = cartList.some(item => {
                    return item.id == info.id
                })

                if (exits) {

                    let data = null;

                    for (let i = 0; i < cartList.length; i++) {
                        if (cartList[i].id == info.id) {
                            data = cartList[i];
                            break;
                        }
                    }
                    //商品存在，如果持续点击添加购物车，则改变number数据
                    data.number++;

                    data.Allmoney = data.number * data.Bmoney;//总价格
                }
                else {
                    //如果不存在，则为数据添加number,总价格等属性做记录
                    info.number = 1;
                    info.Allmoney = info.Bmoney;
                    info.isSelect = false//默认不选中
                    cartList.push(info);
                }

                localStorage.setItem('cartList',JSON.stringify(cartList));
            })
        }

    }
}