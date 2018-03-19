export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  console.log()
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function getData(el, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}

// dom操作css 的transform 等属性的时候不会像stylus那样自动加prefix在前面
// 所以要封装一个dom添加prefix的方法
let elementStyle = document.createElement('div').style

let vender = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTrasform',
    ms: 'msTransform',
    standard: 'transform'
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
    return false
  }
})()

export function prefixStyle(style) {
  if (vender === false) {
    return false
  }
  if (vender === 'standard') {
    return style
  }

  return vender + style.charAt(0).toUpperCase() + style.substr(1)
}
