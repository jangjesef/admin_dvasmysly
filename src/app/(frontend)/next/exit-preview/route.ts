import { cookies } from 'next/dist/client/components/headers'
import { redirect } from 'next/dist/client/components/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const redirectUrl = searchParams.get('redirect') || '/'

  cookies().delete('__prerender_bypass')
  cookies().delete('__next_preview_data')

  redirect(redirectUrl)
}
