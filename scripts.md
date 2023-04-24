# Use live-server to run a web server
npm install -D live-server
live-server public

# Install babel 7
npm install -D babel-cli

# Add packages to project
npm install -D @babel/cli @babel/core @babel/preset-env @babel/preset-react
babel src/app.jsx --out-file=public/scripts/app.js --watch

# Install webpack
npm install -D webpack webpack-cli