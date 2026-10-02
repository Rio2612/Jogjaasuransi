import { NextRequest, NextResponse } from "next/server";

/**
 * Hapus parameter "m" (sisa mobile-view platform lama bergaya Blogger, ?m=1)
 * lewat satu redirect 301 ke URL bersih. Parameter lain tetap dipertahankan.
 * Menggantikan redirect di next.config.ts yang menyebabkan loop (query ikut terbawa).
 */
export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  if (url.searchParams.has("m")) {
    url.searchParams.delete("m");
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
