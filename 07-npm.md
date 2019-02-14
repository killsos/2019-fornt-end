## NPM

- 1 简介

		
		npm有两层含义
		
			一层含义是Node的开放式模块登记和管理系统，网址为npmjs.org。
		
			另一层含义是Node默认的模块管理器，是一个命令行下的软件，用来安装和管理Node模块。
		
		npm不需要单独安装。在安装Node的时候，会连带一起安装npm。
		
		但是，Node附带的npm可能不是最新版本，最好用下面的命令，更新到最新版本。
		
			
			$ npm install npm@latest -g
		
		
		上面的命令中，@latest表示最新版本，-g表示全局安装。所以，命令的主干是npm install npm
		
		也就是使用npm安装自己。之所以可以这样，是因为npm本身与Node的其他模块没有区别。
		
		
			
		# 查看 npm 命令列表
		$ npm help
		
		# 查看各个命令的简单用法
		$ npm -l
		
		# 查看 npm 的版本
		$ npm -v
		
		# 查看 npm 的配置
		$ npm config list -l	
			
			
			
			
			
	
- 2 npm init

		
		
		npm init用来初始化生成一个新的package.json文件。它会向用户提问一系列问题，如果你觉得不用修改默认配置，一路回车就可以了。
		
		如果使用了-f（代表force）、-y（代表yes），则跳过提问阶段，直接生成一个新的package.json文件。
		
		$ npm init -y
		
		
		
	
- 3 npm set

		
		npm set用来设置环境变量。
		
		$ npm set init-author-name 'Your name'
		
		$ npm set init-author-email 'Your email'
		
		$ npm set init-author-url 'http://yourdomain.com'
		
		$ npm set init-license 'MIT'
		
		上面命令等于为npm init设置了默认值，以后执行npm init的时候，package.json的作者姓名、邮件、主页、许可证字段就会自动写入预设的值。
		
		这些信息会存放在用户主目录的 ~/.npmrc文件，使得用户不用每个项目都输入。如果某个项目有不同的设置，可以针对该项目运行npm config。
		
		$ npm set save-exact true
		上面命令设置加入模块时，package.json将记录模块的确切版本，而不是一个可选的版本范围。
		
	
- 4 npm config


		
		npm config set prefix $dir
		
		上面的命令将指定的$dir目录，设为模块的全局安装目录。
		
		如果当前有这个目录的写权限，那么运行npm install的时候，就不再需要sudo命令授权了。
		
		$ npm config set save-prefix ~
		
		上面的命令使得npm install --save和npm install --save-dev安装新模块时
		
		允许的版本范围从克拉符号（^）改成波浪号（~），即从允许小版本升级，变成只允许补丁包的升级。
		
		$ npm config set init.author.name $name
		
		$ npm config set init.author.email $email
		
		上面命令指定使用npm init时，生成的package.json文件的字段默认值。
		
		
		
	
- 5 npm info

		
		npm info命令可以查看每个模块的具体信息
		
		比如，查看underscore模块的信息
		
			$ npm info underscore
			
			$ npm info underscore description
				
				JavaScript's functional programming helper library.
			
			$ npm info underscore homepage
				
				http://underscorejs.org
				
			$ npm info underscore version
				
				1.5.2
		
		
		
	
- 6 npm search

		
		npm search命令用于搜索npm仓库，它后面可以跟字符串，也可以跟正则表达式
		
		$ npm search <搜索词>
		
		
		
		
	
- 7 npm list

		
		npm list命令以树型结构列出当前项目安装的所有模块，以及它们依赖的模块
		
		$ npm list
			
		加上global参数，会列出全局安装的模块。
		
		$ npm list -global
		
		npm list命令也可以列出单个模块。
		
		$ npm list underscore
		
		
	
- 8 npm install

- 8.1 基本用法

		
		Node模块采用npm install命令安装。
		
		每个模块可以“全局安装”，也可以“本地安装”。
		
		“全局安装”指的是将一个模块安装到系统目录中，各个项目都可以调用。
		
			一般来说，全局安装只适用于工具模块，比如eslint和gulp。
			
		
		“本地安装”指的是将一个模块下载到当前项目的node_modules子目录，然后只有在项目目录之中，才能调用这个模块。	
			
		# 本地安装
			
			$ npm install <package name>
				
			$ npm install <package name> -S  // 依赖
				
			$ npm install <package name> -D  // 开发
			
		# 全局安装
		
			$ sudo npm install -global <package name>
			
			
			$ sudo npm install -g <package name>
				
		npm install也支持直接输入Github代码库地址。
		
				$ npm install git://github.com/package/path.git
		
		安装之前，npm install会先检查，node_modules目录之中是否已经存在指定模块。
		
		如果存在，就不再重新安装了，即使远程仓库已经有了一个新版本，也是如此。
		
		如果你希望，一个模块不管是否安装过，npm 都要强制重新安装，可以使用-f或--force参数。
		
			$ npm install <packageName> --force
		
		如果你希望，所有模块都要强制重新安装，那就删除node_modules目录，重新执行npm install。
		
		$ rm -rf node_modules
		$ npm install	
			
	
- 8.2 安装不同版本

		
		install命令总是安装模块的最新版本，如果要安装模块的特定版本，可以在模块名后面加上@和版本号。
		
			$ npm install sax@latest
			
			
			$ npm install sax@0.1.1
			
			
			$ npm install sax@">=0.1.0 <0.2.0"
		
		如果使用--save-exact参数，会在package.json文件指定安装模块的确切版本。
		
			
			$ npm install readable-stream --save --save-exact
		
		install命令可以使用不同参数，指定所安装的模块属于哪一种性质的依赖关系，即出现在packages.json文件的哪一项中。
		
			–save：模块名将被添加到dependencies，可以简化为参数-S
			
			–save-dev: 模块名将被添加到devDependencies，可以简化为参数-D
			
			$ npm install sax --save
			
			$ npm install node-tap --save-dev
			
			# 或者
			
			$ npm install sax -S
			
			$ npm install node-tap -D
			
			
		如果要安装beta版本的模块，需要使用下面的命令。
		
		# 安装最新的beta版
		
			$ npm install <module-name>@beta (latest beta)
			
		# 安装指定的beta版
			
			$ npm install <module-name>@1.3.1-beta.3
		
	
