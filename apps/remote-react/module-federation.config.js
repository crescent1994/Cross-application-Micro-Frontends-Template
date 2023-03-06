module.exports = {
  name: 'remote-react',
  exposes: {
    './Module': './src/remote-entry.tsx',
    './Components': './src/remoteComponents/index.ts'
  }
};
