import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	experimental: {
		authInterrupts: true
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ik.imagekit.io',
				port: ''
			},
			{
				protocol: 'https',
				hostname: 'randomuser.me',
				port: ''
			},
			{
				protocol: 'https',
				hostname: '*.supabase.co',
				port: ''
			}
		]
	}
	// eslint: {
	// 	ignoreDuringBuilds: true
	// }
};

export default nextConfig;
