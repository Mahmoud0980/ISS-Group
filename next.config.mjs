import createNextIntlPlugin from "next-intl/plugin";

// الطريقة الموصى بها مع الإصدارات الحديثة من next-intl
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // إعداداتك الأخرى هنا
};

export default withNextIntl(nextConfig);
