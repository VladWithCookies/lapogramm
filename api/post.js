import fetch from 'isomorphic-unfetch'

import { API_URL } from 'constants/api'

export const getPosts = () => fetch(`${API_URL}/posts`)
export const getPost = (id) => fetch(`${API_URL}/posts/${id}`)
export const createPost = (body) => fetch(`${API_URL}/posts`, { body, method: 'POST' })
