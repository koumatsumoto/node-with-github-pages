const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development",
  target: "node",
  externals: [
    nodeExternals({
      modulesFromFile: {
        exclude: ["devDependencies"],
        include: ["dependencies"],
      },
    }),
  ],
  entry: {
    main: path.resolve(__dirname, "./src/main.ts"),
  },
  output: {
    filename: "[name]/bin.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    modules: ["node_modules"],
  },
};
