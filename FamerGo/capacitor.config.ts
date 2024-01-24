import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'farmerGo',
  webDir: 'dist/farmerGo',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      // launchShowDuration: 2000,
      // launchAutoHide: true,
      // androidSplashResourceName: "splash",
      // androidScaleType: "CENTER_CROP",
      // splashFullScreen: true,
      // layoutName: "launch_splash",

      launchShowDuration: 5000,
      launchAutoHide: true,
      androidScaleType: "CENTER_CROP",
      splashFullScreen: true,
      splashImmersive: false,
      backgroundColor: "#ffffff" // YOUR SPLASH SCREEN MAIN COLOR
    },
  }
};

export default config;
