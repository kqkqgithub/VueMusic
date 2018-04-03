import jsonp from 'common/js/jsonp'
import {CommonParam, options} from './config'

export function getHotKey() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, CommonParam, {
    uin: 0,
    needNewCode: 1,
    platform: 'h5',
    g_tk: 425600463
  })

  return jsonp(url, data, options)
}

export function searchKey(query) {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'

  const data = Object.assign({}, CommonParam, {
    uin: 0,
    needNewCode: 1,
    platform: 'h5',
    g_tk: 425600463
  })

  return jsonp(url, data, options)
}
