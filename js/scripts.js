jQuery(document).ready(function (e) {
  e('.navshow').click(function () {
    e('.sitenav').fadeIn(),
      e(this).hide(),
      e(this).next('.navhide').fadeIn(),
      e('body').addClass('disablescroll')
  }),
    e('.navhide').click(function () {
      e('.sitenav').fadeOut(),
        e(this).hide(),
        e(this).prev('.navshow').show(),
        e('body').removeClass('disablescroll')
    }),
    1200 > e(window).width() &&
      e('.headermenu a').click(function () {
        e('.sitenav').fadeOut(),
          e('.navhide').hide(),
          e('.navshow').show(),
          e('body').removeClass('disablescroll')
      }),
    e(window).scroll(function () {
      e(this).scrollTop() >= 100
        ? e('header').addClass('fixed')
        : e('header').removeClass('fixed')
    })
})
