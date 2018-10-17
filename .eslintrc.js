module.exports = {
	env: {
		browser: true,
		node: true
	},
	extends: [ 'plugin:vue/recommended' ],
	parserOptions: {
		parser: 'babel-eslint'
	},
	plugins: [ 'vue' ],
	root: true,
	rules: {
		'array-bracket-newline': [
			'error', {
				minItems: 4,
				multiline: true
			}
		],
		'array-bracket-spacing': [
			'error', 'always', {
				arraysInArrays: false,
				objectsInArrays: false
			}
		],
		'array-in-arrays': [
			'always', {
				arraysInArrays: false
			}
		],
		'arrays-in-objects': 'always',
		'comma-dangle': [ 'error', 'never' ],
		'computed-property-spacing': [ 'error', 'always' ],
		'indent': [ 'error', 'tab' ],
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-extra-semi': 'error',
		'no-useless-concat': 'error',
		'no-tabs': [
			'error', {
				allowIndentationTabs: true
			}
		],
		'object-curly-spacing': [
			'error', 'always', {
				arraysInObjects: true,
				objectsInObjects: false
			}
		],
		'objects-in-arrays': 'always',
		'prefer-template': 'error',
		'quote-props': [ 'error','consistent-as-needed' ],
		'quotes': [ 'error', 'single' ],
		'semi': [ 'error', 'always' ],
		'space-in-parens': [ 'error', 'always', { exceptions: [ 'empty' ] }],
		'template-curly-spacing': [ 'error', 'always' ],
		'template-tag-spacing': [ 'error', 'always' ],
		'vue/html-closing-bracket-newline': [
			'error', {
				multiline: 'never',
				singleline: 'never'
			}
		],
		'vue/html-closing-bracket-spacing': [
			'error', {
				endTag: 'never',
				selfClosingTag: 'always',
				startTag: 'never'
			}
		],
		'vue/html-indent': [
			'error', 'tab', {
				alignAttributesVertically: false,
				attribute: 1,
				closeBracket: 0,
				ignores: []
			}
		],
		'vue/max-attributes-per-line': [
			'error', {
				multiline: {
					allowFirstLine: false,
					max: 1
				},
				singleline: 6
			}
		],
		'vue/script-indent': [ 'error', 'tab' ],
		'vue/html-self-closing': [
			'error', {
				html: {
					component: 'always',
					normal: 'always',
					void: 'always'
				},
				math: 'always',
				svg: 'always'
			}
		]
	}
};
