import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { getUid } from './utils/cookie/manageCookie.server';

export const middleware = async (request: NextRequest) => {
  const uid = await getUid();

  if (!uid) {
    return NextResponse.redirect(new URL(`/login`, request.nextUrl));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/teacher/:path+', '/student/:path+'],
};
