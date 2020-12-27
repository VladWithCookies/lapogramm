import httpClient from 'lib/httpClient'

export const logIn = body => httpClient.post('/login', { body })
