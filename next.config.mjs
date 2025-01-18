/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/Apps',
                destination: 'https://aapps.onrender.com/Apps',
            
            }
        ]
    }
};

export default nextConfig;
