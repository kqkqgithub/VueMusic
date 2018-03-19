import jsonp from 'common/js/jsonp'
import {CommonParam, options} from './config'

export function getSingerList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, CommonParam, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    g_tk: 159514264
  })

  return jsonp(url, data, options)
}

export function getSingerDetail(singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

  const data = Object.assign({}, CommonParam, {
    singermid: singerId,
    needNewCode: 0,
    order: 'listen',
    platform: 'yqq',
    begin: 0,
    num: 100,
    songstatus: 1,
    hostUin: 0,
    g_tk: 159514264
  })

  return jsonp(url, data, options)
}
