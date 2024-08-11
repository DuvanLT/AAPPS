/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/Apps',
                destination: 'http://localhost:7000/Apps',
            
            }
        ]
    }
};

export default nextConfig;
