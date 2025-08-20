# SEO Components

Esta pasta contém todos os componentes relacionados ao SEO (Search Engine Optimization) do projeto RC Enfermagem Para Você.

## Estrutura de Pastas

```
seo/
├── README.md                    # Este arquivo
├── index.ts                     # Exportações centralizadas
├── SEOHead.tsx                  # Componente principal de SEO
├── StructuredData.tsx           # Dados estruturados Schema.org
├── analytics/                   # Componentes de Analytics
│   ├── GoogleAnalytics.tsx
│   ├── GoogleTagManager.tsx
│   ├── FacebookPixel.tsx
│   ├── LinkedInInsight.tsx
│   ├── Hotjar.tsx
│   ├── GoogleMyBusiness.tsx
│   ├── GoogleAds.tsx
│   ├── GoogleMerchantCenter.tsx
│   ├── GoogleOptimize.tsx
│   ├── GoogleDataStudio.tsx
│   ├── GoogleSearchConsole.tsx
│   ├── GooglePageSpeed.tsx
│   ├── GoogleCoreWebVitals.tsx
│   ├── GoogleMobileFriendly.tsx
│   ├── GoogleRichResults.tsx
│   ├── GoogleURLInspection.tsx
│   ├── GoogleLighthouse.tsx
│   ├── GooglePageSpeedAPI.tsx
│   └── GoogleSearchConsoleAPI.tsx
├── tracking/                    # Componentes de Tracking
│   ├── GoogleAnalyticsEnhancedEcommerce.tsx
│   ├── GoogleAnalyticsUserProperties.tsx
│   ├── GoogleAnalyticsCustomEvents.tsx
│   ├── GoogleAnalyticsConversionTracking.tsx
│   ├── GoogleAnalyticsRemarketing.tsx
│   ├── GoogleAnalyticsDemographics.tsx
│   ├── GoogleAnalyticsGoals.tsx
│   ├── GoogleAnalyticsFunnels.tsx
│   ├── GoogleAnalyticsEcommerce.tsx
│   ├── GoogleAnalyticsEnhancedLinkAttribution.tsx
│   ├── GoogleAnalyticsContentExperiments.tsx
│   ├── GoogleAnalyticsSocialInteractions.tsx
│   ├── GoogleAnalyticsExceptionTracking.tsx
│   ├── GoogleAnalyticsTiming.tsx
│   ├── GoogleAnalyticsUserTiming.tsx
│   ├── GoogleAnalyticsCustomDimensions.tsx
│   ├── GoogleAnalyticsCustomMetrics.tsx
│   ├── GoogleAnalyticsContentGrouping.tsx
│   ├── GoogleAnalyticsSiteSearch.tsx
│   ├── GoogleAnalyticsEventTracking.tsx
│   ├── GoogleAnalyticsPageTracking.tsx
│   ├── GoogleAnalyticsSessionTracking.tsx
│   ├── GoogleAnalyticsUserTracking.tsx
│   ├── GoogleAnalyticsCampaignTracking.tsx
│   ├── GoogleAnalyticsTrafficSources.tsx
│   ├── GoogleAnalyticsContentTracking.tsx
│   ├── GoogleAnalyticsFormTracking.tsx
│   ├── GoogleAnalyticsVideoTracking.tsx
│   ├── GoogleAnalyticsScrollTracking.tsx
│   ├── GoogleAnalyticsClickTracking.tsx
│   ├── GoogleAnalyticsEngagementTracking.tsx
│   ├── GoogleAnalyticsBounceRateTracking.tsx
│   ├── GoogleAnalyticsConversionRateTracking.tsx
│   ├── GoogleAnalyticsROITracking.tsx
│   ├── GoogleAnalyticsCostTracking.tsx
│   ├── GoogleAnalyticsRevenueTracking.tsx
│   ├── GoogleAnalyticsProfitTracking.tsx
│   ├── GoogleAnalyticsMarginTracking.tsx
│   ├── GoogleAnalyticsLifetimeValueTracking.tsx
│   ├── GoogleAnalyticsCACTracking.tsx
│   ├── GoogleAnalyticsCLVTracking.tsx
│   ├── GoogleAnalyticsChurnRateTracking.tsx
│   └── GoogleAnalyticsRetentionRateTracking.tsx
└── verification/                # Arquivos de verificação
    ├── google1234567890abcdef.html
    ├── BingSiteAuth.xml
    └── yandex_1234567890abcdef.html
```

## Como Usar

### Importação Simples

```typescript
import { SEOHead, GoogleAnalytics, FacebookPixel } from '@/app/components/seo'
```

### Importação Específica

```typescript
import { GoogleAnalytics } from '@/app/components/seo/analytics/GoogleAnalytics'
import { GoogleAnalyticsEventTracking } from '@/app/components/seo/tracking/GoogleAnalyticsEventTracking'
```

## Componentes Principais

### SEOHead
Componente principal que inclui todos os scripts de SEO necessários.

### StructuredData
Componente para dados estruturados Schema.org, incluindo:
- MedicalClinic
- MedicalService
- Person (profissionais)
- BreadcrumbList

## Analytics

### Google Analytics 4
- Configuração básica
- Enhanced Ecommerce
- Custom Events
- User Properties
- Conversion Tracking

### Outras Ferramentas
- Google Tag Manager
- Facebook Pixel
- LinkedIn Insight Tag
- Hotjar
- Google My Business

## Tracking

### Eventos Personalizados
- Page Tracking
- Session Tracking
- User Tracking
- Campaign Tracking
- Content Tracking
- Form Tracking
- Video Tracking
- Scroll Tracking
- Click Tracking

### Métricas de Negócio
- ROI Tracking
- Cost Tracking
- Revenue Tracking
- Profit Tracking
- Margin Tracking
- Lifetime Value Tracking
- Customer Acquisition Cost
- Churn Rate Tracking
- Retention Rate Tracking

## Verificação

Arquivos de verificação para:
- Google Search Console
- Bing Webmaster Tools
- Yandex Webmaster

## Configuração

1. Configure as variáveis de ambiente no arquivo `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=YOUR_PIXEL_ID
NEXT_PUBLIC_LINKEDIN_ID=YOUR_LINKEDIN_ID
NEXT_PUBLIC_HOTJAR_ID=YOUR_HOTJAR_ID
NEXT_PUBLIC_GOOGLE_OPTIMIZE_ID=OPT-XXXXXXXX
```

2. Adicione os componentes necessários no layout principal:
```typescript
import { SEOHead, GoogleAnalytics, FacebookPixel } from '@/app/components/seo'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <SEOHead />
        <GoogleAnalytics />
        <FacebookPixel />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## Manutenção

- Atualize os IDs das ferramentas conforme necessário
- Monitore o desempenho através do Google Analytics
- Verifique regularmente os dados estruturados
- Mantenha o sitemap.xml atualizado
- Monitore os Core Web Vitals
