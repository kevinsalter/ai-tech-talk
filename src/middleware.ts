import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Redirect root path to first slide
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/slide/1', request.url));
  }
  
  // Redirect /slides/* to /slide/*
  if (request.nextUrl.pathname.startsWith('/slides/')) {
    const slideNumber = request.nextUrl.pathname.replace('/slides/', '');
    return NextResponse.redirect(new URL(`/slide/${slideNumber}`, request.url));
  }
}

export const config = {
  matcher: ['/', '/slides/:path*'],
};