import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'books.google.com',
            },
            {
                hostname: 'wikibook.co.kr',
            },
        ],
    },
};

export default nextConfig;
