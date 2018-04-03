import jsonp from 'common/js/jsonp'
import {CommonParam, options} from './config'

export function getTopList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'

  const data = Object.assign({}, CommonParam, {
    uin: 0,
    needNewCode: 1,
    platform: 'h5',
    g_tk: 1928093487
  })

  return jsonp(url, data, options)
}

export function getMusicList(topid) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'

  const data = Object.assign({}, CommonParam, {
    uin: 0,
    needNewCode: 1,
    platform: 'h5',
    g_tk: 5381,
    tpl: 3,
    page: 'detail',
    type: 'top',
    topid: topid
  })

  return jsonp(url, data, options)
}
