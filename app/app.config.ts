export default defineAppConfig({
	global: {
		picture: {
			dark: '/portrait.jpg',
			light: '/portrait.jpg',
			alt: 'Profile picture'
		},
		email: 'bojanic.lazar50@gmail.com',
		available: true
	},
	ui: {
		colors: {
			primary: 'blue',
			neutral: 'neutral'
		},
		pageHero: {
			slots: {
				container: 'py-12 sm:py-16 lg:py-20',
				title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
				description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
			}
		}
	},
	footer: {
		credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
		colorMode: false,
		links: [{
			'icon': 'i-simple-icons-github',
			'to': 'https://github.com/LazarBojanic',
			'target': '_blank',
			'aria-label': 'GitHub'
		}, {
			'icon': 'i-simple-icons-linkedin',
			'to': 'https://linkedin.com/in/lazarbojanic17082001',
			'target': '_blank',
			'aria-label': 'LinkedIn'
		}, {
			'icon': 'i-simple-icons-letterboxd',
			'to': 'https://letterboxd.com/dumbe01/',
			'target': '_blank',
			'aria-label': 'Letterboxd'
		}, {
			'icon': 'i-simple-icons-instagram',
			'to': 'https://www.instagram.com/lazar178',
			'target': '_blank',
			'aria-label': 'Instagram'
		}, {
			'icon': 'i-simple-icons-youtube',
			'to': 'https://www.youtube.com/@dumbe01',
			'target': '_blank',
			'aria-label': 'YouTube'
		}]
	}
})
