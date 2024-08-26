import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	breakpoints: {
		base: '0em', // 0px
		sm: '30em', // ~480px. em is a relative unit and is dependant on the font size.
		md: '48em', // ~768px
		lg: '62em', // ~992px
		xl: '80em', // ~1280px
		'2xl': '92em', // ~1536px
		'3xl': '108em', // ~1536px
		'4xl': '160rem',
	},
});
