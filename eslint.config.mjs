// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
	rules: {
		'@typescript-eslint/no-explicit-any': 'off',
	},
	whitespace: ['error', 'tabs'],
	indent: ['error', 'tab'],
	'linebreak-style': ['error', 'unix'],
	'no-trailing-spaces': ['error', { skipBlankLines: false }],
	'eol-last': ['error', 'always'],
})
