import { theme } from 'antd';

export const customTheme = {
    algorithm: theme.defaultAlgorithm, // or theme.darkAlgorithm for dark mode
    token: {
        // Typography
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        fontFamilyCode: "'JetBrains Mono', 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace",

        // Primary colors
        colorPrimary: '#6366f1', // Indigo to match the gradient
        colorSuccess: '#10b981', // Emerald green
        colorWarning: '#f59e0b', // Amber
        colorError: '#ef4444',   // Red
        colorInfo: '#3b82f6',    // Blue

        // Background colors
        colorBgContainer: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white
        colorBgElevated: 'rgba(255, 255, 255, 0.9)',  // Slightly more opaque for elevated elements
        colorBgLayout: 'transparent', // Make layout background transparent

        // Border and text
        colorBorder: 'rgba(229, 231, 235, 0.8)', // Semi-transparent borders
        colorText: '#374151', // Dark gray text for good contrast
        colorTextSecondary: '#6b7280',

        // Typography sizes
        fontSize: 14,
        fontSizeLG: 16,
        fontSizeXL: 20,
        fontSizeHeading1: 38,
        fontSizeHeading2: 30,
        fontSizeHeading3: 24,
        fontSizeHeading4: 20,
        fontSizeHeading5: 16,

        // Radius and spacing
        borderRadius: 8,
        borderRadiusLG: 12,
        borderRadiusSM: 6,
    },
    components: {
        Layout: {
            bodyBg: 'transparent',
            headerBg: 'rgba(255, 255, 255, 0.8)',
            footerBg: 'rgba(255, 255, 255, 0.8)',
            siderBg: 'rgba(255, 255, 255, 0.9)',
        },
        Card: {
            colorBgContainer: 'rgba(255, 255, 255, 0.6)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
        Menu: {
            colorBgContainer: 'rgba(255, 255, 255, 0.8)',
            colorItemBgSelected: 'rgba(99, 102, 241, 0.1)',
            colorItemTextSelected: '#6366f1',
        },
        Table: {
            colorBgContainer: 'rgba(255, 255, 255, 0.9)',
            headerBg: 'rgba(249, 250, 251, 0.9)',
        },
        Modal: {
            contentBg: 'rgba(255, 255, 255, 0.95)',
        },
        Drawer: {
            colorBgElevated: 'rgba(255, 255, 255, 0.95)',
        },
        Typography: {
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            titleMarginTop: '1.2em',
            titleMarginBottom: '0.5em',
        },
        Button: {
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
        }
    }
};