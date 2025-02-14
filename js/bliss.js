var lastId,
  topMenu = $(menuid),
  topMenuHeight = topMenu.outerHeight() + 135,
  menuItems = topMenu.find('a'),
  scrollItems = menuItems.map(function () {
    var t = $($(this).attr('href'))
    if (t.length) return t
  })
menuItems.click(function (t) {
  var e = $(this).attr('href'),
    n = '#' === e ? 0 : $(e).offset().top - 90
  $('html, body').stop().animate({ scrollTop: n }, scrollspeed),
    t.preventDefault()
}),
  $(window).scroll(function () {
    var t = $(this).scrollTop() + topMenuHeight,
      e = scrollItems.map(function () {
        if ($(this).offset().top < t) return this
      }),
      n = (e = e[e.length - 1]) && e.length ? e[0].id : ''
    lastId !== n &&
      ((lastId = n),
      menuItems
        .parent()
        .removeClass(menu_active_class)
        .end()
        .filter("[href='#" + n + "']")
        .parent()
        .addClass(menu_active_class))
  })
