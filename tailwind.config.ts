import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				regular: [
					'"Inter"',
					'"SF Pro Display"',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'"Roboto"',
					'"Oxygen"',
					'"Ubuntu"',
					'"Cantarell"',
					'"Open Sans"',
					'"Helvetica Neue"',
					'sans-serif'
				],
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},

				// Linear colours
				'linear-header-bg': 'var(--header-bg)',
				'linear-header-border': 'var(--header-border)',
				'linear-bg-primary': 'var(--color-bg-primary)',
				'linear-bg-secondary': 'var(--color-bg-secondary)',
				'linear-bg-tertiary': 'var(--color-bg-tertiary)',
				'linear-bg-quaternary': 'var(--color-bg-quaternary)',
				'linear-bg-marketing': 'var(--color-bg-marketing)',
				'linear-bg-translucent': 'var(--color-bg-translucent)',
				'linear-bg-quinary': 'var(--color-bg-quinary)',
				'linear-border-primary': 'var(--color-border-primary)',
				'linear-border-secondary': 'var(--color-border-secondary)',
				'linear-border-tertiary': 'var(--color-border-tertiary)',
				'linear-border-translucent': 'var(--color-border-translucent)',
				'linear-text-primary': 'var(--color-text-primary)',
				'linear-text-secondary': 'var(--color-text-secondary)',
				'linear-text-tertiary': 'var(--color-text-tertiary)',
				'linear-text-quaternary': 'var(--color-text-quaternary)',
				'linear-link-primary': 'var(--color-link-primary)',
				'linear-link-hover': 'var(--color-link-hover)',
				'linear-brand-bg': 'var(--color-brand-bg)',
				'linear-brand-text': 'var(--color-brand-text)',
				'linear-selection-bg': 'var(--color-selection-bg)',
				'linear-selection-text': 'var(--color-selection-text)',
				'linear-focus-ring': 'var(--focus-ring-color)',
				'linear-overlay-primary': 'var(--color-overlay-primary)',
				'linear-kbd-bg': 'var(--color-kbd-bg)',

				'linear-white': 'var(--color-white)',
				'linear-black': 'var(--color-black)',
				'linear-blue': 'var(--color-blue)',
				'linear-red': 'var(--color-red)',
				'linear-green': 'var(--color-green)',
				'linear-orange': 'var(--color-orange)',
				'linear-yellow': 'var(--color-yellow)',
				'linear-indigo': 'var(--color-indigo)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'linear-header-radius': 'var(--header-radius)',
				'linear-radius-4': 'var(--radius-4)',
				'linear-radius-6': 'var(--radius-6)',
				'linear-radius-8': 'var(--radius-8)',
				'linear-radius-12': 'var(--radius-12)',
				'linear-radius-16': 'var(--radius-16)',
				'linear-radius-24': 'var(--radius-24)',
				'linear-radius-32': 'var(--radius-32)',
				'linear-rounded-full': 'var(--rounded-full)',
			},
			boxShadow: {
				'linear-low': 'var(--shadow-low)',
				'linear-medium': 'var(--shadow-medium)',
				'linear-high': 'var(--shadow-high)',
				'linear-stack-low': 'var(--shadow-stack-low)',
			},
			fontWeight: {
				'linear-regular': 'var(--font-weight-regular)',
				'linear-medium': 'var(--font-weight-medium)',
				'linear-semibold': 'var(--font-weight-semibold)',
				'linear-bold': 'var(--font-weight-bold)',
			},
			fontSize: {
				'linear-micro': 'var(--font-size-micro)',
				'linear-micro-plus': 'var(--font-size-microPlus)',
				'linear-mini': 'var(--font-size-mini)',
				'linear-mini-plus': 'var(--font-size-miniPlus)',
				'linear-small': 'var(--font-size-small)',
				'linear-small-plus': 'var(--font-size-smallPlus)',
				'linear-regular': 'var(--font-size-regular)',
				'linear-regular-plus': 'var(--font-size-regularPlus)',
				'linear-large': 'var(--font-size-large)',
				'linear-large-plus': 'var(--font-size-largePlus)',
				'linear-title-1': 'var(--font-size-title1)',
				'linear-title-2': 'var(--font-size-title2)',
				'linear-title-3': 'var(--font-size-title3)',
			},
			spacing: {
				'linear-header-max-width': 'var(--header-max-width)',
				'linear-header-height': 'var(--header-height)',
				'linear-header-top': 'var(--header-top)',
				'linear-page-padding-default': 'var(--page-padding-default)',
				'linear-page-padding-left': 'var(--page-padding-left)',
				'linear-page-padding-right': 'var(--page-padding-right)',
				'linear-page-padding-y': 'var(--page-padding-y)',
			},
			zIndex: {
				'layer-max': 'var(--layer-max)',
				'layer-debug': 'var(--layer-debug)',
				'layer-skip-nav': 'var(--layer-skip-nav)',
				'layer-tooltip': 'var(--layer-tooltip)',
				'layer-toasts': 'var(--layer-toasts)',
				'layer-dialog': 'var(--layer-dialog)',
				'layer-dialog-overlay': 'var(--layer-dialog-overlay)',
				'layer-command-menu': 'var(--layer-command-menu)',
				'layer-popover': 'var(--layer-popover)',
				'layer-context-menu': 'var(--layer-context-menu)',
				'layer-overlay': 'var(--layer-overlay)',
				'layer-header': 'var(--layer-header)',
				'layer-scrollbar': 'var(--layer-scrollbar)',
				'layer-footer': 'var(--layer-footer)',
				'layer-3': 'var(--layer-3)',
				'layer-2': 'var(--layer-2)',
				'layer-1': 'var(--layer-1)',
			},

		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
