## Commonjs

- JS模块化方面的不足

		
		JS没有模块系统，不支持封闭的作用域和依赖管理
		
		没有标准库，没有文件系统和IO流API
		
		也没有包管理系统
		
		现在提供了 但是浏览器没有实现
		
	
-  CommonJS规范

		
		封装功能
		
		封闭作用域
		
		可能解决依赖问题
		
		工作效率更高，重构方便
		
	
- Node中的CommonJS

		
		在node.js 里，模块划分所有的功能，每个JS都是一个模块
		
		实现require方法,NPM实现了模块的自动加载和安装依赖
		
		(function(exports,require,module,__filename,__dirname){
		  exports = module.exports={}
		  exports.name = 'zfpx';
		  exports = {name:'zfpx'};
		  return module.exports;
		})
		
		
		
		
	
- module 模块

		
		模块的分类
		
			原生模块 核心模块 fs http
		
			文件模块
			
			第三方模块  mz bluebird  需要先安装
		
		原生模块
			
			http path fs util events 编译成二进制,加载速度最快，原来模块通过名称来加载	
			
		文件模块
			
			在硬盘的某个位置，加载速度非常慢，文件模块通过名称或路径来加载 文件模块的后缀有三种
			
				1. 后缀名为.js的JavaScript脚本文件,需要先读入内存再运行
			
				2. 后缀名为.json的JSON文件,fs 读入内存 转化成JSON对象
			
				3. 后缀名为.node的经过编译后的二进制C/C++扩展模块文件,可以直接使用
			
					一般自己写的通过路径来加载,别人写的通过名称去当前目录或全局的node_modules下面去找
					
		第三方模块
			
			如果require函数只指定名称则视为从node_modules下面加载文件 这样的话你可以移动模块而不需要修改引用的模块路径
			
			第三方模块的查询路径包括module.paths和全局目录	
			
			
		全局目录
			
			window如果在环境变量中设置了NODE_PATH变量，并将变量设置为一个有效的磁盘目录
			
			require在本地找不到此模块时向在此目录下找这个模块
			
			UNIX操作系统中会从 $HOME/.node_modules 或 $HOME/.node_libraries目录下寻找	
		
		
		
		
		
		
	
	
![look module](./images/lookmodule.png "Look module")


- 第三方模块

		
		1. 默认会第三方模块会去当前的node_module目录下查找  会找名字相同的文件
		
		2. 如果1中不没找到 会node_module目录下查找 名字相同的文件夹下的 index.js文件
		
		3. 查看加载路径 console.log(module.paths)
		
		
		
	
- 如何初始包 module

		
		1. 进入包目录下 执行 npm init -y
		
		2. package.json文件
				
				name    // 包名字
				
				version  // 包版本
				
				main  	// 包的入口文件
				
				script  // 定义脚本命令
				
				keywords  // 包的关键字
				
				author    // 包的作者
				
				
				
				
				
			
			
			
			
			
			
	