const devConfig = {
    apiUrl: 'http://localhost:9000',
  };
  
  const prodConfig = {
    apiUrl: 'https://api.example.com',
  };
  
  const config = process.env.NODE_ENV === 'development' ? devConfig : prodConfig;
  
  export default config;
  