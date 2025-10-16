import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://googletagmanager.com https://tagmanager.google.com https://*.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com",
              "script-src-elem 'self' 'unsafe-inline' https://www.googletagmanager.com https://googletagmanager.com https://tagmanager.google.com https://*.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com",
              "style-src 'self' 'unsafe-inline' https://googletagmanager.com https://tagmanager.google.com https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: blob: https: https://www.googletagmanager.com https://googletagmanager.com https://*.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://www.google-analytics.com https://ssl.google-analytics.com https://www.google.com https://google.com https://googleads.g.doubleclick.net https://*.g.doubleclick.net https://www.gstatic.com https://ssl.gstatic.com",
              "connect-src 'self' https://*.googletagmanager.com https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://www.google-analytics.com https://ssl.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://*.g.doubleclick.net https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com https://google.com https://api.whatsapp.com",
              "frame-src 'self' https://www.googletagmanager.com https://www.google.com https://td.doubleclick.net https://bid.g.doubleclick.net",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://api.whatsapp.com",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
