## Nodejs-Eventloop

- 事件环

		
		event loop是一个执行模型，在不同的地方有不同的实现。浏览器和nodejs基于不同的技术实现了各自的event loop
		
		nodejs的event是基于libuv，而浏览器的event loop则在html5的规范中明确定义
		
		libuv已经对event loop作出了实现，而html5规范中只是定义了浏览器中event loop的模型，具体实现留给了浏览器厂商
		
		
		1. timers：执行满足条件的setTimeout、setInterval回调
		
		2. I/O callbacks：是否有已完成的I/O操作的回调函数，来自上一轮的poll残留
		
		3. idle，prepare：可忽略
		
		4. poll：等待还没完成的I/O事件，会因timers和超时时间等结束等待
		
		5. check：执行setImmediate的回调
		
		6. close callbacks：关闭所有的closing handles，一些onclose事件。
		
		
		
	
- event loop的6个阶段（phase）


			
		nodejs的event loop分为6个阶段
		
		每个阶段的作用如下（process.nextTick()在6个阶段结束的时候都会执行
		
			1. timers：执行setTimeout() 和 setInterval()中到期的callback
		
			2. I/O callbacks：上一轮循环中有少数的I/Ocallback会被延迟到这一轮的这一阶段执行
		
			3. idle, prepare：仅内部使用
		
			4. poll：最为重要的阶段，执行I/O callback，在适当的条件下会阻塞在这个阶段
		
			5. check：执行setImmediate的callback
		
			6. close callbacks：执行close事件的callback，例如socket.on("close",func)	
			
			
			
		在timer阶段其实使用一个最小堆而不是队列来保存所有元素
		
		其实也可以理解，因为timeout的callback是按照超时时间的顺序来调用的，并不是先进先出的队列逻辑
		
		然后循环取出所有到期的callback执行	
			
		
		根据libuv的文档，一些应该在上轮循环poll阶段执行的callback，因为某些原因不能执行
		
		就会被延迟到这一轮的循环的I/O callbacks阶段执行。换句话说这个阶段执行的callbacks是上轮残留的。	
			
		
		
		poll阶段的任务就是阻塞等待监听的事件来临，然后执行对应的callback，其中阻塞是带有超时时间的，以下几种情况都会使得超时时间为0
		
		uv_run处于UV_RUN_NOWAIT模式下
		uv_stop()被调用
		没有活跃的handles和request
		有活跃的idle handles
		有等待关闭的handles
		如果上述都不符合，则超时时间为距离现在最近的timer；如果没有timer则poll阶段会一直阻塞下去	
			
	
- node安装配置 

		
		
		1. 下载源代码
		
			wget https://nodejs.org/dist/v8.9.4/node-v8.9.4.tar.gz
			
			curl -O https://nodejs.org/dist/v8.9.4/node-v8.9.4.tar.gz
			
		2. 编译源码 
		
			1) 对tar压缩包进行解压缩
			
				x extract 解包
				
				f file 要解包的是个文件
				
				z gzip 这个包是压缩过的，需要解压缩
				
				v verbose把解包过程告诉你
			
				tar zxvf node-v8.9.4.tar.gz
			
			
			2) 进入源代码目录
			
				cd node-v8.9.4
				
			3) 对其进行配置
			
				./configure
				
				./configure --prefix=/usr/local/test-nodejs // 指定安装目录 
				
			4) 编译
			
				make
				
		    5) 安装
			
				make install
				
				这些操作会安装到/user/local/bin/node目录下
				
			6) 执行以上指令如果遇到权限问题，可以以root用户权限执行
			
				sudo make install
		
		
		
		
	
- global

		
		console.log(global)
		
		console.log(global,{showHidden: true})
		
		全局作用域(global)可以定义一些不需要通过任何模块的加载即可使用的变量、函数或类
		定义全局变量时变量会成为global的属性。
		永远不要不使用var关键字定义变量，以免污染全局作用域
		
		setTimeout 	   clearTimeout
		setInterval    clearInterval
		setImmediate   clearImmediate
		
		unref和ref
		
		
		setTimeout和setInterval都返回一个定时器对象，这个对象提供了两个增加定时器行为的方法ref()和unref()
		
		如果一个定时器对象调用unref()方法时
		
		那么这将改变定时器的行为，不会再执行定时器代码，定时器对象将不会保持进程存活，等待执行
		
		相似的，通过调用ref()就能移除unref()带来的行为，确保定时器继续执行
		
	
	
- console

		
		在Node.js中，使用console对象代表控制台(在操作系统中表现为一个操作系统指定的字符界面，比如 Window中的命令提示窗口)。
		
		console.log
		console.info
		console.error 重定向到文件
		console.warn
		console.dir
		
		console.time
		console.timeEnd
		
		console.trace
		
		console.assert
		
		
		
		
		
	
- process

			
		process 对象代表node.js应用程序的 进程
		
		可以获取应用程序进程的  用户 运行环境等各种信息
		
		process.argv.forEach(function(item){
		  console.log(item);
		});
		
		process.on('exit',function(){
		  console.log('clear');
		});
		
		process.on('uncaughtException',function(err){
		  console.log(err);
		})
		
		console.log(process.memoryUsage());
		console.log(process.cwd());
		console.log(__dirname);
		process.chdir('..');
		console.log(process.cwd());
		console.log(__dirname);
		
		function err(){
		 throw new Error('报错了');
		}
		err();	
			
			
			
	
- process.nextTick & setImmediate 

		
		process.nextTick()方法将 callback 添加到"next tick 队列"
		
		一旦当前事件轮询队列的任务全部完成，在next tick队列中的所有callbacks会被依次调用。
		
		setImmediate预定立即执行的 callback，它是在 I/O 事件的回调之后被触发
		
		
		
	
	
- EventEmitter

		
		在Node.js的用于实现各种事件处理的event模块中，定义了EventEmitter类
		
		所以可能触发事件的对象都是一个继承自EventEmitter类的子类实例对象
		
		方法名和参数								描述
		
		addListener(event,listener)				对指定事件绑定事件处理函数
		
		on(event,listener)						对指定事件绑定事件处理函数
		
		once(event,listener)					对指定事件指定只执行一次的事件处理函数
		
		removeListener(event,listener)			对指定事件解除事件处理函数
		
		removeAllListeners([event])				对指定事件解除所有的事件处理函数
		
		setMaxListeners(n)						指定事件处理函数的最大数量.n为整数值，代表最大的可指定事件处理函数的数量
		
		listeners(event)						获取指定事件的所有事件处理函数
		
		emit(event,[arg1],[arg2],[...])			手工触发指定事件
		
		
		
		
	
	
- util

		
		工具箱
		
		var util = require('util');
		
		//util.inherit();
		
		console.log(util.inspect({name:'zfpx'}));
		console.log(util.isArray([]));
		console.log(util.isRegExp(/\d/));
		console.log(util.isDate(new Date()));
		console.log(util.isError(new Error));
		
		
		
	
- node断点调试

		
		V8 提供了一个强大的调试器，可以通过 TCP 协议从外部访问
		
		Nodejs提供了一个内建调试器来帮助开发者调试应用程序
		
		想要开启调试器我们需要在代码中加入debugger标签
		
		当Nodejs执行到debugger标签时会自动暂停（debugger标签相当于在代码中开启一个断点）
		
		
		node inspect nodejs-file  // 启动调试
		
		
		命令				用途
		
		c							继续执行到下一个断点处
		
		next,n						单步执行
		
		step,s						单步进入函数
		
		out,o						退出当前函数
		
		setBreakpoint(10)/ sb(10)	在第10行设置断点
		
		repl						打开求值环境，ctrl_c退回debug模式
		
		watch(exp)					把表达式添加监视列表
		
		watchers					显示所有表达式的值
		
		
		
		
		
		
	