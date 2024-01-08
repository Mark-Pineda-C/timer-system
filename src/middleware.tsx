import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from './utils/middleware';
 
export async function middleware (req: NextRequest){
  // const locale = await getLocale()
  const locale = req.cookies.get('NEXT_LOCALE') ? req.cookies.get('NEXT_LOCALE')?.value : 'es';
  try {
    const { supabase, response } = createClient(req);
    const {data, error } = await supabase.auth.getSession()
    if (error) throw new Error(error.message)
    const {session} = data
    console.log(session?.user.user_metadata)
    if (session && req.nextUrl.pathname === '/') {
      return NextResponse.redirect('/');
    }
    if(session === null && (!req.nextUrl.pathname.match(/\/(es|en)\/auth\/(login|recover)/))) {
      // return NextResponse.redirect(new URL(`/${locale}/auth/login`, req.nextUrl).toString());
      return NextResponse.redirect(new URL(`/${locale}/auth/login`, req.nextUrl).toString());
    }

    return response
  } catch (error) {
    const i18nMiddleware = createMiddleware({
      // A list of all locales that are supported
      locales: ["en", "es"],

      // Used when no locale matches
      defaultLocale: "es",
    });
    return i18nMiddleware(req)
  }
}
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|es)/:path*','/((?!_next/static|_next/image|favicon.ico).*)']
};