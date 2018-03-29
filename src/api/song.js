import {CommonParam} from './config'
import axios from 'axios'

export function getLyric(mid) {
  const url = 'api/lyric'

  const data = Object.assign({}, CommonParam, {
    songmid: mid,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    pcachetime: +new Date(),
    format: 'json',
    g_tk: 1195012304
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
