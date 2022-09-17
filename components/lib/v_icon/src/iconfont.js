;(window._iconfont_svg_string_ =
  '<svg><symbol id="icon-quanbu" viewBox="0 0 1024 1024"><path d="M362.666667 234.666667A64 64 0 0 1 426.666667 298.666667v85.333333a64 64 0 0 1-64 64H256A64 64 0 0 1 192 384V298.666667A64 64 0 0 1 256 234.666667h106.666667zM256 170.666667a128 128 0 0 0-128 128v85.333333a128 128 0 0 0 128 128h106.666667a128 128 0 0 0 128-128V298.666667a128 128 0 0 0-128-128H256zM362.666667 618.666667A64 64 0 0 1 426.666667 682.666667v85.333333a64 64 0 0 1-64 64H256A64 64 0 0 1 192 768v-85.333333A64 64 0 0 1 256 618.666667h106.666667zM256 554.666667a128 128 0 0 0-128 128v85.333333a128 128 0 0 0 128 128h106.666667a128 128 0 0 0 128-128v-85.333333a128 128 0 0 0-128-128H256zM768 234.666667A64 64 0 0 1 832 298.666667v85.333333a64 64 0 0 1-64 64h-106.666667A64 64 0 0 1 597.333333 384V298.666667a64 64 0 0 1 64-64H768zM661.333333 170.666667a128 128 0 0 0-128 128v85.333333a128 128 0 0 0 128 128H768a128 128 0 0 0 128-128V298.666667a128 128 0 0 0-128-128h-106.666667zM640 725.333333a32 32 0 0 1 32-32h149.333333a32 32 0 0 1 0 64h-149.333333A32 32 0 0 1 640 725.333333zM554.666667 608a32 32 0 0 1 32-32h234.666666a32 32 0 0 1 0 64h-234.666666a32 32 0 0 1-32-32zM554.666667 842.666667a32 32 0 0 1 32-32h234.666666a32 32 0 0 1 0 64h-234.666666a32 32 0 0 1-32-32z" fill="#222222" ></path></symbol><symbol id="icon-seach" viewBox="0 0 1024 1024"><path d="M469.333333 704a234.666667 234.666667 0 1 1 0-469.333333 234.666667 234.666667 0 0 1 0 469.333333z m0 64a298.666667 298.666667 0 1 0 0-597.333333 298.666667 298.666667 0 0 0 0 597.333333z" fill="#222222" ></path><path d="M660.053333 660.053333a32 32 0 0 1 45.226667 0l96 96a32 32 0 1 1-45.226667 45.226667l-96-96a32 32 0 0 1 0-45.226667z" fill="#222222" ></path></symbol><symbol id="icon-share" viewBox="0 0 1024 1024"><path d="M170.666667 288A117.333333 117.333333 0 0 1 288 170.666667H384a32 32 0 0 1 0 64H288c-29.44 0-53.333333 23.893333-53.333333 53.333333v448c0 29.44 23.893333 53.333333 53.333333 53.333333h448c29.44 0 53.333333-23.893333 53.333333-53.333333V640a32 32 0 0 1 64 0v96A117.333333 117.333333 0 0 1 736 853.333333H288A117.333333 117.333333 0 0 1 170.666667 736V288zM853.333333 245.333333A74.666667 74.666667 0 0 0 778.666667 170.666667H597.333333a32 32 0 0 0 0 64h181.333334a10.666667 10.666667 0 0 1 10.666666 10.666666V426.666667a32 32 0 0 0 64 0V245.333333z" fill="#222222" ></path><path d="M790.613333 233.386667a32 32 0 0 1 0 45.226666l-298.666666 298.666667a32 32 0 1 1-45.226667-45.226667l298.666667-298.666666a32 32 0 0 1 45.226666 0z" fill="#222222" ></path></symbol></svg>'),
  (function (a) {
    var t = (t = document.getElementsByTagName('script'))[t.length - 1],
      e = t.getAttribute('data-injectcss'),
      t = t.getAttribute('data-disable-injectsvg')
    if (!t) {
      var n,
        i,
        o,
        l,
        d,
        c = function (t, e) {
          e.parentNode.insertBefore(t, e)
        }
      if (e && !a.__iconfont__svg__cssinject__) {
        a.__iconfont__svg__cssinject__ = !0
        try {
          document.write(
            '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
          )
        } catch (t) {
          console && console.log(t)
        }
      }
      ;(n = function () {
        var t,
          e = document.createElement('div')
        ;(e.innerHTML = a._iconfont_svg_string_),
          (e = e.getElementsByTagName('svg')[0]) &&
            (e.setAttribute('aria-hidden', 'true'),
            (e.style.position = 'absolute'),
            (e.style.width = 0),
            (e.style.height = 0),
            (e.style.overflow = 'hidden'),
            (e = e),
            (t = document.body).firstChild
              ? c(e, t.firstChild)
              : t.appendChild(e))
      }),
        document.addEventListener
          ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
            ? setTimeout(n, 0)
            : ((i = function () {
                document.removeEventListener('DOMContentLoaded', i, !1), n()
              }),
              document.addEventListener('DOMContentLoaded', i, !1))
          : document.attachEvent &&
            ((o = n),
            (l = a.document),
            (d = !1),
            h(),
            (l.onreadystatechange = function () {
              'complete' == l.readyState && ((l.onreadystatechange = null), s())
            }))
    }
    function s() {
      d || ((d = !0), o())
    }
    function h() {
      try {
        l.documentElement.doScroll('left')
      } catch (t) {
        return void setTimeout(h, 50)
      }
      s()
    }
  })(window)
