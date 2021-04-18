module.exports = function() {
	return function ({ e, addUtilities, theme }) {
		const themeColors = theme('colors');

		const accentColors = Object.keys(themeColors)
			.reduce((acc, key) => {
				if (typeof themeColors[key] === 'string') {
					return {
						...acc,
						[`.accent-${e(key)}`]: {
							'accent-color': themeColors[key]
						},
					};
				}

				const variants = Object.keys(themeColors[key]);

				return {
					...acc,
					...variants.reduce((a, variant) => ({
						...a,
						[`.accent-${e(key)}-${variant}`]: {
							'accent-color': themeColors[key][variant]
						},
					}), {}),
				};

			}, {});

		addUtilities(accentColors);
	}
}
