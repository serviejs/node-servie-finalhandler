import { Request, Response } from 'servie'

export async function finalhandler (req: Request): Promise<Response> {
  return new Response({
    status: 404,
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'Content-Security-Policy': "default-src 'self'",
      'Content-Type': 'text/html; charset=utf-8'
    },
    body: req.method === 'HEAD' ? undefined : `Cannot ${req.method} ${req.url}`
  })
}