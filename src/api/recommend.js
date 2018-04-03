import jsonp from 'common/js/jsonp'
import {CommonParam, options} from './config'
import axios from 'axios'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, CommonParam, {
    uin: '469615866',
    needNewCode: 1,
    platform: 'h5'
  })

  return jsonp(url, data, options)
}

export function getDistList() {
  const url = 'api/getDiscList'

  const data = Object.assign({}, CommonParam, {
    hostUin: 0,
    platform: 'yqq',
    sortId: 5,
    sin: 0,
    ein: 29,
    needNewCode: 0,
    rnd: Math.random(),
    categoryId: 10000000,
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSongList(disstid) {
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'

  const data = Object.assign({}, CommonParam, {
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    g_tk: 1412124953
  })

  return jsonp(url, data, options)
}
