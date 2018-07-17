module.exports = {
	entry: "./entry.js",
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
		rules: [
			{ 
				test: /\.css$/,
				use:  ['style-loader', 'css-loader'] 
			},
			{ 
				test: /\.(js|jsx)$/, 
				exclude: /(node_modules|bower_components)/,
      	use: {
        	loader: 'babel-loader',
        	options: {					
        		presets: ['es2015', 'stage-0', 'react'],
						plugins: ['transform-runtime']
					} 
				}
			}
		]
	}
};