module.exports = {
  name: 'remote-react',
  exposes: {
    './Module': './src/remote-entry.tsx',
    './Button': './src/remote-components.tsx'
  }
};
