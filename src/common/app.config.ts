/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'C0D3',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'C0D3',
  },
  Meta: {
    Description: '',
    SiteName: '',
    ThemeColor: '#32383E',
    TwitterSite: '@nandantrsn',
  },
  URIs: {
    Home: 'https://code.teamleetcoders.in',
    CardImage: 'https://code.teamleetcoders.in/icons/card-dark-1200.png',
    OpenRepo: 'https://github.com/L337C0D3R/big-AGI',
    OpenProject: '',
    SupportInvite: '',
    // Twitter: 'https://www.twitter.com/enricoros',
    PrivacyPolicy: '',
  },
} as const;
