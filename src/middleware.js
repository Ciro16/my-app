import { dashboardMiddleware } from "./app/dashboard/dashboardMiddleware"
import { apiMiddleware } from "./app/api/apiMiddleware"

export function middleware(request) {
  const pathName = request.nextUrl.pathname

  if (pathName.startsWith('/dashboard')) {
    dashboardMiddleware(request)
  }

  if (pathName.startsWith('/api') && !pathName.startsWith('/api/v1/auth')) {
    apiMiddleware(request)
  }
}

export const config = {
  matcher: ['/', '/dashboard(.*)', '/api(.*)'],
}