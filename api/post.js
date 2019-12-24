import fetch from 'isomorphic-unfetch'

import { API_URL } from '../constants'

export const getPosts = () => fetch(`${API_URL}/posts`)
export const getPost = (id) => fetch(`${API_URL}/posts/${id}`)
