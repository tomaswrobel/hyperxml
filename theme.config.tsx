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
		link: 'https://github.com/tomaswrobel/hyperxml',
	},
	chat: {
		link: 'https://discordapp.com/users/tomaswrobel',
	},
	docsRepositoryBase: 'https://github.com/tomaswrobel/hyperxml',
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
				&copy; 2024 <a href="https://tomaswrobel.dev">Tomáš Wróbel</a>. Under the&nbsp;<a href="https://opensource.org/licenses/MIT">MIT License</a>. hyperxml@tomaswrobel.dev
			</>
		)
	}
};

export default config;
