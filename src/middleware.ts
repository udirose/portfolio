import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  
  // Security headers
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=63072000; includeSubDomains; preload'
  );
  
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"
  );
  
  response.headers.set(
    'X-Frame-Options',
    'DENY'
  );
  
  response.headers.set(
    'Referrer-Policy',
    'strict-origin-when-cross-origin'
  );
  
  response.headers.set(
    'Permissions-Policy',
    'geolocation=(), microphone=(), camera=(), payment=(), usb=(), interest-cohort=()'
  );
  
  // Additional security headers
  response.headers.set(
    'X-Content-Type-Options',
    'nosniff'
  );
  
  response.headers.set(
    'X-XSS-Protection',
    '1; mode=block'
  );
  
  return response;
});
