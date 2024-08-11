/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/Apps',
                destination: 'https://aapps.vercel.app/:7000/Apps',
            
            }
        ]
    }
};

export default nextConfig;
