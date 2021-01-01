import url from 'url'
import Cookies from 'cookies'
import httpProxy from 'http-proxy'

import { API_URL } from 'constants/api'

const proxy = httpProxy.createProxyServer()

export const config = {
  api: {
    bodyParser: false
  }
}

export default (req, res) => new Promise((resolve, reject) => {
  const { pathname } = url.parse(req.url)
  const isLoginRequest = pathname === '/api/login'
  const cookies = new Cookies(req, res)
  const token = cookies.get('token')

  req.headers.cookie = ''
  req.url = req.url.replace(/^\/api/, '')

  if (token) {
    req.headers['Authorization'] = `Bearer ${token}`
  }

  if (isLoginRequest) {
    proxy.once('proxyRes', (proxyRes, req, res) => {
      let apiResponseBody = ''

      proxyRes.on('data', (chunk) => {
        apiResponseBody += chunk
      })

      proxyRes.on('end', () => {
        if (apiResponseBody === 'Unauthorized') {
          res.status(401).end()
          resolve()
        }

        try {

          const { token } = JSON.parse(apiResponseBody)
          const cookies = new Cookies(req, res)

          cookies.set('token', token, {
            httpOnly: true,
            sameSite: true,
          })

          res.status(200).end()
          resolve()
        } catch (error) {
          reject(error)
        }
      })
    })
  }

  proxy.once('error', reject)

  proxy.web(req, res, {
    target: API_URL,
    autoRewrite: false,
    selfHandleResponse: isLoginRequest
  })
})
