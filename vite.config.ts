import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import replace from '@rollup/plugin-replace';

export default defineConfig({
  plugins: [
    react(),
    replace({
        preventAssignment: true,
      __REACT_APP_FIREBASE_API_KEY__: JSON.stringify(process.env.REACT_APP_FIREBASE_API_KEY),
      __REACT_APP_FIREBASE_AUTH_DOMAIN__: JSON.stringify(process.env.REACT_APP_FIREBASE_AUTH_DOMAIN),
      __REACT_APP_FIREBASE_PROJECT_ID__: JSON.stringify(process.env.REACT_APP_FIREBASE_PROJECT_ID),
      __REACT_APP_FIREBASE_STORAGE_BUCKET__: JSON.stringify(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET),
      __REACT_APP_FIREBASE_MESSAGING_SENDER_ID__: JSON.stringify(process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID),
      __REACT_APP_FIREBASE_APP_ID__: JSON.stringify(process.env.REACT_APP_FIREBASE_APP_ID),
    }),
  ],
});
