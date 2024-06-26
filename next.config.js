const withNextra = require('nextra')({
	theme: 'nextra-theme-docs',
	themeConfig: './theme.config.tsx'
});

module.exports = withNextra({
	webpack: config => ({
		...config,
		module: {
			...config.module,
			rules: [
				...config.module.rules,
				{
					type: 'asset/source',
					resourceQuery: /type=raw/,
				},
				{
					type: 'asset/resource',
					resourceQuery: /type=url/,
				}
			],
		},
	})
});
