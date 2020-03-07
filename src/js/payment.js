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

    //购物车渲染
    buy_pay();
    function buy_pay() {

        //获取数据
        const cartList = JSON.parse(localStorage.getItem('cartList'));

        //判断是否存在数据
        if (!cartList) {
            alert('购物车为空！')
        }
        else {
            binHtml()
            bindEvent()
        }

        function binHtml() {//整体渲染

            let selectAll = cartList.every(item => {

                return item.isSelect === true;
            })

            let str = '';
            let str2 = '';
            let str3 = '';

            str3 = `<label><input type="checkbox" id="check-goods-all" ${selectAll ? 'checked' : ''} /><span id="checkAll">全选</span></label>`

            $('.col_all').html(str3);

            cartList.forEach(item => {
                str += `
                <div class="shop_box">
                    <label class="shop_all"><input data-id=${ item.id} type="checkbox" id="check-goods-alone"  ${item.isSelect ? 'checked' : ''} /></label>
                    <div class="shop_img">
                        <img src="${item.mi[0].MaxImg}" alt="" width="100%" height="100%">
                    </div>
                    <div class="shop_name">
                        <p style="font-size: 15px;">${item.Title2}</p>
                    </div>
                    <div class="shop_money">
                        <p>¥<span class="money_span">${item.Bmoney}</span></p>
                    </div>
                    <div class="shop_num">
                        <input class="shop_num_add" type="button" value="+" data-id=${ item.id}>
                        <input class="shop_num_number" type="text" name="" id="" value="${item.number}" disabled="value">
                        <input class="shop_num_reduce" type="button" value="-" data-id=${ item.id}>
                    </div>
                    <div class="shop_money2">
                        <p>¥<span class="money_span2">${item.Allmoney}</span></p>
                    </div>
                    <div class="shop_delect">
                        <input class="shop_delect_d" type="button" value="删除" data-id=${ item.id}>
                    </div>
                </div>
                `
            })
            $('#shop_wrap').html(str);

            let selectArr = cartList.filter(item => item.isSelect)

            let selectNumber = 0;//选中商品数量计算
            let selectPrice = 0;//总价格

            selectArr.forEach(item => {
                selectNumber += item.number
                selectPrice += item.Allmoney * 1
            })

            str2 += `
            <div class="shop_choose">
                <p>商品数量：<span class="shop_choose_num">${selectNumber}</span></p>
            </div>
            <div class="shop_Allmoney">
                <p>总价格：¥<span class="shop_Allmoney_num">${selectPrice}</span></p>
            </div>
            <div class="shop_empty">
                <input class="delect_all" type="button" value="清空购物车">
            </div>
            <div class="shop_pay">
                <input type="button" value="支付" ${ selectArr.length ? '' : 'disabled'}>
            </div>
            `
            $('.main_box3').html(str2);
        }

        //按钮事件

        function bindEvent() {
            
            //全选按钮的事件
            $('body').on('change', '#check-goods-all', function () {
                //当全选按钮被选上时
                //其他的选择按钮也被选中
                cartList.forEach(item => {
                    item.isSelect = this.checked;
                })
                //重新渲染页面
                binHtml();

                //重新储存数据，防止页面刷新的时候，重置按钮
                localStorage.setItem('cartList', JSON.stringify(cartList));
            })

            //单选按钮的事件
            $('body').on('change', '#check-goods-alone', function () {

                //获取自己身上的id
                const id = $(this).data('id');

                //从数据中，匹配到id相同的数据，修改isSelect的值
                cartList.forEach(item => {
                    if (item.id == id) {
                        item.isSelect = !item.isSelect
                    }
                })

                // //重新渲染页面
                binHtml();

                // //重新储存数据，防止页面刷新的时候，重置按钮
                localStorage.setItem('cartList', JSON.stringify(cartList));
            })

            //减少按钮
            $('body').on('click', '.shop_num_reduce', function () {

                //获取自己身上的id
                const id = $(this).data('id');

                //从数据中，匹配到id相同的数据，修改number和Allmoney的值
                cartList.forEach(item => {
                    if (item.id == id) {
                        //当number为1的时候，就停止继续减少
                        item.number > 1 ? item.number-- : '';
                        item.Allmoney = item.Bmoney * item.number;
                    }
                })
                // //重新渲染页面
                binHtml();

                // //重新储存数据，防止页面刷新的时候，重置按钮
                localStorage.setItem('cartList', JSON.stringify(cartList));
            })
            //增加按钮
            $('body').on('click', '.shop_num_add', function () {

                //获取自己身上的id
                const id = $(this).data('id');

                //从数据中，匹配到id相同的数据，修改number和Allmoney的值
                cartList.forEach(item => {
                    if (item.id == id) {
                        item.number++;
                        item.Allmoney = item.Bmoney * item.number;
                    }
                })
                // //重新渲染页面
                binHtml();

                // //重新储存数据，防止页面刷新的时候，重置按钮
                localStorage.setItem('cartList', JSON.stringify(cartList));
            })

            //删除按钮
            $('body').on('click', '.shop_delect_d', function () {
                //获取自己身上的id
                const id = $(this).data('id');

                //从数据中，匹配到id相同的数据，进行删除
                cartList.forEach(item => {
                    if (item.id == id) {
                        cartList.splice(item.index,1)
                    }
                })

                //重新渲染页面
                binHtml();

                //重新储存数据，防止页面刷新的时候，重置按钮
                localStorage.setItem('cartList', JSON.stringify(cartList));
            })

            //清空按钮
            $('body').on('click', '.delect_all', function () {
                console.log('1')
                var ls_list = JSON.parse(localStorage.getItem('cartList'));//获取数组
                ls_list.splice(0);


                // //重新渲染页面
                binHtml();
                // //重新储存数据，防止页面刷新的时候，重置按钮
                localStorage.setItem('cartList', JSON.stringify(ls_list));

                buy_pay();
            })
        }
    }
}