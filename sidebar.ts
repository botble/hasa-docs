import { DefaultTheme } from 'vitepress'

export default [
    { text: 'Introduction', link: '/hasa/' },
    {
        text: 'Prologue',
        items: [
            { text: 'Release Notes', link: '/hasa/releases' },
            { text: 'Upgrade Guide', link: '/hasa/upgrade' },
        ],
    },
    {
        text: 'Getting Started',
        items: [
            { text: 'Installation', link: '/hasa/installation' },
            { text: 'SSL', link: '/hasa/ssl' },
            { text: 'License', link: '/hasa/license' },
        ],
    },
    {
        text: 'Available plugins',
        items: [
            { text: 'Backup', link: '/hasa/plugin-backup' },
        ],
    },
    {
        text: 'Usage',
        items: [
            { text: 'Setup email', link: '/hasa/usage-email' },
            { text: 'Media - Setup Amazon S3', link: '/hasa/usage-media-s3' },
            { text: 'Media - Setup BunnyCDN', link: '/hasa/usage-media-bunnycdn' },
            { text: 'Media - Setup Wasabi', link: '/hasa/usage-media-wasabi' },
            { text: 'Setup social login', link: '/hasa/usage-social-login' },
            { text: 'Analytics', link: '/hasa/usage-analytics' },
            { text: 'Rename theme', link: '/hasa/theme-rename' },
            { text: 'Location', link: '/hasa/usage-location' },
            { text: 'Invoice template', link: '/hasa/invoice-template' },
        ],
    },
] satisfies DefaultTheme.SidebarItem[];
