window.onload = function () {

    //验证码
    var code;
    createCode()
    function createCode() {  //函数体
        code = "";
        var codeLength = 4; //验证码的长度
        var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
        for (var i = 0; i < codeLength; i++) {
            var charNum = Math.floor(Math.random() * 52);//设置随机产生
            code += codeChars[charNum];
        }
        if (code) {
            $('.num').attr('value', code)
        }
    }

    //重生验证码
    $('.again').click(function () {
        createCode();
    })

    //改变密码输入框type值
    type_t_p()
    function type_t_p() {

        $('.show').mouseenter(function () {
            $(this).siblings('#password').attr('type', 'text');
        })
        $('.show').mouseleave(function () {
            $(this).siblings('#password').attr('type', 'password');
        })
    }

}
