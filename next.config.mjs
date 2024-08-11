/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/Apps',
                destination: 'https://aapps.vercel.app/Apps',
            
            }
        ]
    }
};

export default nextConfig;
