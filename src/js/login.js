window.onload = function () {
    $('.account').click(function () {
        $(this).addClass('active')
        $(this).siblings('.borderleft').removeClass('active')

        $(this)
            .parent()
            .siblings('.login_new_tabbody')
            .children('.login')
            .addClass('active2')

        $(this)
            .parent()
            .siblings('.login_new_tabbody')
            .children('.login2')
            .removeClass('active2')
    })
    $('.borderleft').click(function () {
        $(this).addClass('active')
        $(this).siblings('.account').removeClass('active')

        $(this)
            .parent()
            .siblings('.login_new_tabbody')
            .children('.login2')
            .addClass('active2')

        $(this)
            .parent()
            .siblings('.login_new_tabbody')
            .children('.login')
            .removeClass('active2')
    })
}