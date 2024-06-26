import React from 'react';
import {DocsThemeConfig} from 'nextra-theme-docs';

const config: DocsThemeConfig = {
	logo: (
		<div style={{display: "flex", alignItems: "center", gap: "0.75em"}}>
			<img src="/logo.svg" alt="HyperXML Logo" style={{height: 32}} />
			<span>HyperXML</span>
		</div>
	),
	project: {
		link: 'https://github.com/tomas-wrobel/hyperxml',
	},
	chat: {
		link: 'https://discord.com',
	},
	docsRepositoryBase: 'https://github.com/tomas-wrobel/hyperxml',
	useNextSeoProps: () => ({
		titleTemplate: '%s | HyperXML',
		defaultTitle: 'HyperXML',
		description: 'HyperXML is a new way to write HTML documents.',
	}),
	head: (
		<>
			<link rel="icon" type="image/svg+xml" href="/logo.svg" />
		</>
	),
	footer: {
		text: (
			<>
				&copy; 2024 Tomáš Wróbel. Under the <a href="https://opensource.org/licenses/MIT">MIT License</a>.
			</>
		)
	}
};

export default config;
