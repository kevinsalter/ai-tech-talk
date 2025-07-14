import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Redirect root path to first slide
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/slide/1', request.url));
  }
}

export const config = {
  matcher: '/',
};