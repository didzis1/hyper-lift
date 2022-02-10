import 'dotenv/config';

export default {
  name: 'hyperlift',
  slug: 'hyperlift',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true
  },
  android: {
    package: 'com.didzis1.hyperlift',
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF'
    },
    softwareKeyboardLayoutMode: 'pan'
  },
  web: {
    favicon: './assets/favicon.png'
  },
  extra: {
    env: process.env.ENV
  }
};
