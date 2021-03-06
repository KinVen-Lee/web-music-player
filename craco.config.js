const CracoLessPlugin = require("craco-less");
const {
  when,
  whenDev,
  whenProd,
  whenTest,
  ESLINT_MODES,
  POSTCSS_MODES,
} = require("@craco/craco");
const webpack = require("webpack");
const CracoAntDesignPlugin = require("craco-antd");
const CracoVtkPlugin = require("craco-vtk");
const WebpackBar = require("webpackbar");
const CircularDependencyPlugin = require("circular-dependency-plugin");
const FastRefreshCracoPlugin = require("craco-fast-refresh");
const TerserPlugin = require("terser-webpack-plugin");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");
const path = require("path");
const isBuildAnalyzer = process.env.BUILD_ANALYZER === "true";
const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);
module.exports = {
  webpack: {
    // 别名配置
    alias: {
      "@": pathResolve("src"),
      "@component": pathResolve("src/component"),
      "@views": pathResolve("src/views"),
      "@router": pathResolve("src/router"),
      "@utils": pathResolve("src/utils"),
      "@netWork": pathResolve("src/netWork"),
      "@assets": pathResolve("src/assets"),
    },
    plugins: [
      // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      // 查看打包的进度
      // new SimpleProgressWebpackPlugin(),
      // 时间转换工具采取day替换moment
      // new AntdDayjsWebpackPlugin(),
      // // 新增模块循环依赖检测插件
      ...whenDev(
        () => [
          // webpack构建进度条
          new WebpackBar({ profile: true }),
          new CircularDependencyPlugin({
            exclude: /node_modules/,
            include: /src/,
            failOnError: true,
            allowAsyncCycles: false,
            cwd: process.cwd(),
          }),
          // webpack-dev-server 强化插件
          new DashboardPlugin(),
          // new webpack.HotModuleReplacementPlugin(),
        ],
        []
      ),
      /**
       * 编译产物分析
       *  - https://www.npmjs.com/package/webpack-bundle-analyzer
       * 新增打包产物分析插件
       */
      ...when(
        isBuildAnalyzer,
        () => [
          new BundleAnalyzerPlugin({
            analyzerMode: "static", // html 文件方式输出编译分析
            openAnalyzer: false,
            reportFilename: path.resolve(__dirname, `analyzer/index.html`),
          }),
        ],
        []
      ),
      ...whenProd(
        () => [
          // new TerserPlugin({
          //   // sourceMap: true, // Must be set to true if using source-maps in production
          //   terserOptions: {
          //     ecma: undefined,
          //     parse: {},
          //     compress: {
          //       warnings: false,
          //       drop_console: true, // 生产环境下移除控制台所有的内容
          //       drop_debugger: true, // 移除断点
          //       pure_funcs: ['console.log'] // 生产环境下移除console
          //     }
          //   }
          // }),
          // 打压缩包
          new CompressionWebpackPlugin({
            algorithm: "gzip",
            test: new RegExp("\\.(" + ["js", "css"].join("|") + ")$"),
            threshold: 1024,
            minRatio: 0.8,
          }),
        ],
        []
      ),
    ],

    //抽离公用模块
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: "initial",
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
          },
          vendor: {
            test: /node_modules/,
            chunks: "initial",
            name: "vendor",
            priority: 10,
            enforce: true,
          },
        },
      },
    },
    /**
     * 重写 webpack 任意配置
     *  - configure 能够重写 webpack 相关的所有配置，但是，仍然推荐你优先阅读 craco 提供的快捷配置，把解决不了的配置放到 configure 里解决；
     *  - 这里选择配置为函数，与直接定义 configure 对象方式互斥；
     */
    configure: (webpackConfig, { env, paths }) => {
      // paths.appPath='public'
      paths.appBuild = "dist"; // 配合输出打包修改文件目录
      // webpackConfig中可以解构出你想要的参数比如mode、devtool、entry等等，更多信息请查看webpackConfig.json文件
      /**
       * 修改 output
       */
      webpackConfig.output = {
        ...webpackConfig.output,
        // ...{
        //   filename: whenDev(() => 'static/js/bundle.js', 'static/js/[name].js'),
        //   chunkFilename: 'static/js/[name].js'
        // },
        path: path.resolve(__dirname, "dist"), // 修改输出文件目录
        publicPath: "/",
      };
      /**
       * webpack split chunks
       */
      // webpackConfig.optimization.splitChunks = {
      //   ...webpackConfig.optimization.splitChunks,
      //   ...{
      //     chunks: 'all',
      //     name: true
      //   }
      // }
      // 返回重写后的新配置
      return webpackConfig;
    },
  },
  babel: {
    presets: [],
    plugins: [
      // AntDesign 按需加载
      // 配置 babel-plugin-import
      [
        "import",
        { libraryName: "antd", libraryDirectory: "es", style: true },
        "antd",
      ],
      // 配置解析器
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      ["babel-plugin-styled-components", { displayName: true }],
    ],
    loaderOptions: {},
    loaderOptions: (babelLoaderOptions, { env, paths }) => {
      return babelLoaderOptions;
    },
  },
  /**
   * 新增 craco 提供的 plugin
   */
  plugins: [
    // 热更新
    ...whenDev(
      () => [
        // {
        //   plugin: FastRefreshCracoPlugin,
        // },
        // {
        //   plugin: CracoVtkPlugin(),
        // },
        // {
        //   plugin: new AntdDayjsWebpackPlugin(),
        // },
      ],
      []
    ),

    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
        modifyLessRule: function () {
          return {
            test: /\.module\.less$/,
            exclude: /node_modules/,
            use: [
              { loader: "style-loader" },
              {
                loader: "css-loader",
                options: {
                  modules: {
                    localIdentName: "[local]_[hash:base64:6]",
                  },
                },
              },
              {
                loader: "less-loader",
                // options: {
                //   modules: {
                //     localIdentName: "[local]_[hash:base64:6]",
                //   },
                // },
              },
            ],
          };
        },
      },
    },
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(__dirname, "antd.customize.less"),
      },
    },
  ],
  devServer: {
    port: 8080,
    proxy: {
      "/": {
        target: "http://localhost:3000/",
        pathRewrite: { "^/": "" },
        changeOrigin: true,
        secure: false,
        xfwd: false,
      },
    },
  },
};
