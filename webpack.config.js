const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // Entry points for the application
  entry: {
    visualise: "./src/visualise.ts", // Entry point for the SadoGame

    // Add more entry points if you have other games or main app files
  },
  // Output configuration
  output: {
    filename: "[name].bundle.js", // Output as [name].bundle.js
    path: path.resolve(__dirname, "dist"), // Output directory
    clean: true, // Clean the dist folder before every build
  },
  // Resolve .ts and .js extensions
  resolve: {
    extensions: [".ts", ".js"],
  },
  // Module rules for different file types
  module: {
    rules: [
      {
        test: /\.ts$/, // Process .ts files using ts-loader
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/, // Handle image assets
        type: "asset/resource",
      },
      {
        test: /\.mp3$/, // Handle audio assets
        type: "asset/resource",
      },
      {
        test: /\.css$/, // Process CSS files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // Plugins configuration
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/index.html", to: "index.html" }, // Copy the main HTML file
      ],
    }),
  ],
  // Development server configuration
  devServer: {
    static: path.join(__dirname, "dist"), // Serve files from dist directory
    compress: true, // Enable gzip compression for everything served
    port: 9000, // Serve on port 9000
    open: true, // Automatically open the browser on server start
  },
  // Mode configuration
  mode: "development", // Set to 'development' for now; change to 'production' for production builds
};