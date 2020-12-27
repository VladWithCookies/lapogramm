import httpClient from 'lib/httpClient'

export const getPosts = () => httpClient.get('/posts')
export const getPost = id => httpClient.get(`/posts/${id}`)
export const createPost = body => httpClient.post('/posts', { body })
