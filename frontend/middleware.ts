// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("Authentication")?.value;

  const url = req.nextUrl.clone();

  // Если пытается зайти на /dashboard без токена — редирект на /
  if (url.pathname === "/dashboard" && !token) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Иначе пропускаем
  return NextResponse.next();
}

// Включаем middleware только для нужных маршрутов
export const config = {
  matcher: ["/dashboard"],
};
