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
}