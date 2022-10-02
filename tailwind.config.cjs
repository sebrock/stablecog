function withOpacityValue(variable) {
	return ({ opacityValue }) => {
		if (opacityValue === undefined) {
			return `rgb(var(${variable}))`;
		}
		return `rgb(var(${variable}) / ${opacityValue})`;
	};
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'c-bg': withOpacityValue('--c-bg'),
				'c-bg-secondary': withOpacityValue('--c-bg-secondary'),
				'c-bg-tertiary': withOpacityValue('--c-bg-tertiary'),
				'c-on-bg': withOpacityValue('--c-on-bg'),
				'c-primary': withOpacityValue('--c-primary'),
				'c-on-primary': withOpacityValue('--c-on-primary'),
				'c-secondary': withOpacityValue('--c-secondary'),
				'c-danger': withOpacityValue('--c-danger'),
				'c-success': withOpacityValue('--c-success'),
				'c-shadow': withOpacityValue('--c-shadow'),
				'c-barrier': withOpacityValue('--c-barrier')
			},
			transitionDuration: {
				DEFAULT: '200ms',
				400: '400ms'
			},
			spacing: {
				'2px': '2px',
				'3px': '3px',
				60: '15rem',
				68: '17rem',
				88: '22rem',
				128: '32rem'
			},
			opacity: {
				3: '0.03',
				4: '0.04',
				8: '0.08',
				15: '0.15'
			},
			borderWidth: {
				'3px': '3px',
				'4px': '4px'
			},
			rotate: {
				15: '15deg',
				360: '360deg',
				270: '270deg'
			},
			scale: {
				101: '1.01',
				102: '1.02',
				103: '1.03'
			},
			animation: {
				'pulse-custom': 'pulse-custom 1s cubic-bezier(0.5, 0, 0.5, 1) infinite',
				'pulse-scale': 'pulse-scale 0.8s cubic-bezier(0.5, 0, 0.5, 1) infinite'
			},
			keyframes: {
				'pulse-custom': {
					'0%, 100%': {
						opacity: '0.3'
					},
					'50%': {
						opacity: '0.2'
					}
				},
				'pulse-scale': {
					'0%, 100%': {
						opacity: '0.75',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.25',
						transform: 'scale(1.75)'
					}
				}
			}
		}
	},
	plugins: [require('tailwindcss-labeled-groups')(['1', '2', '3'])]
};
