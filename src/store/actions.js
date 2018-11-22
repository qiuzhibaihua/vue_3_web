import Vue from 'vue'

export const fetchPosts = ({ dispatch }) => {
  dispatch('FETCH_POSTS_REQUEST')
  // 重要！記得要 return ，data那裡才取得到 Promise
  return Vue.http.get('//jsonplaceholder.typicode.com/posts')
    .then(res => {
      dispatch('FETCH_POSTS_SUCCESS', res.json())
    })
    .catch(res => {
      dispatch('FETCH_POSTS_FAILURE', res)
      return Promise.reject() // 這邊必須手動 reject
    })
}