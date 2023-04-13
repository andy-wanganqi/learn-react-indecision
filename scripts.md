# Use live-server to run a web server
npm install -g live-server
live-server public

# Install babel 7
npm install -g babel-cli

# Add packages to project
npm install -g @babel/cli @babel/core
npm install --save-dev @babel/preset-env @babel/preset-react
babel src/app.jsx --out-file=public/scripts/app.js --watch