## Browser-EventLoop

- 浏览器模型

		
		用户界面-包括地址栏、前进/后退按钮、书签菜单等
		
		浏览器引擎-在用户界面和呈现引擎之间传送指令
		
		呈现引擎-又称渲染引擎，也被称为浏览器内核，在线程方面又称为UI线程
		
		网络-用于网络调用，比如 HTTP 请求
		
		用户界面后端-用于绘制基本的窗口小部件,UI线程和JS共用一个线程
		
		JavaScript解释器-用于解析和执行 JavaScript 代码
		
		数据存储-这是持久层。浏览器需要在硬盘上保存各种数据，例如 Cookie
		
		除JS线程和UI线程之外的其它线程
			
			浏览器事件触发线程
			
			定时触发器线程
			
			异步HTTP请求线程
		
		

![browser](./images/browser.jpg "browser")

- js特点

		
		1. js是单线程的  主线程是单线程的
		
			ajax setTimeout webworker 是 工作线程
			
			ajax 会单开一个线程 当完成之后再告诉主线程js
			
			setTimeout 会单开一个线程 当完成之后再告诉主线程js
			
			webworker 会单开一个线程 当完成之后再告诉主线程js 不支持DOM操作 
		
		2. 浏览器渲染的时候 有两个线程 js线程  和 ui线程
			
			这两个线程不能同时工作
		
		
		
		
	
- 事件环

		
		队列
		
			先进先出
			
			
			
		栈  调用栈
		
			先进后出
			
			
		主栈 就是 调用栈  call stack
		
		1. callback queue 宏任务队列   macrotask
			
				1. 一般在微任务之后运行
				
				2. setTimeout setInterval setImmedite(IE下才有)  I/O  UI rendering
		
		2. 微任务队列 microtask
			
				1. 在同步代码完成之后 就运行
				
				2. Promise MutationObserver  MessageChannel Object.observe  
				
				
		
		规范在Generic task sources中有提及：
		https://html.spec.whatwg.org/multipage/webappapis.html#generic-task-sources
		
		DOM操作任务源：
		此任务源被用来相应dom操作，例如一个元素以非阻塞的方式插入文档。
		
		用户交互任务源：
		此任务源用于对用户交互作出反应，例如键盘或鼠标输入。响应用户操作的事件（例如click）必须使用task队列。
		
		网络任务源：
		网络任务源被用来响应网络活动。
		
		history traversal任务源：
		当调用history.back()等类似的api时，将任务插进task队列。
		
		task任务源非常宽泛，比如ajax的onload，click事件，基本上我们经常绑定的各种事件都是task任务源，还有数据库操作（IndexedDB ）
		
		需要注意的是setTimeout、setInterval、setImmediate也是task任务源。总结来说task任务源：
		
		setTimeout
		setInterval
		setImmediate
		I/O
		UI rendering
		
		
			
		
		
		
		
		
	
	
- 同步与异步

		
		同步和异步关注的是 消息通知机制
		
		同步就是发出调用后，没有得到结果之前，该调用不返回，一旦调用返回，就得到返回值了。 
		
		简而言之就是调用者主动等待这个调用的结果
		
		而异步则相反，调用者在发出调用后这个调用就直接返回了，所以没有返回结果。换句话说当一个异步过程调用发出后，调用者不会立刻得到结果
		
		而是调用发出后，被调用者通过状态、通知或回调函数处理这个调用。
		

- 阻塞与非阻塞
	
		
		阻塞和非阻塞关注的是程序在等待调用结果（消息，返回值）时的状态
		
		阻塞调用是指调用结果返回之前，当前线程会被挂起。调用线程只有在得到结果之后才会返回。
		
		非阻塞调用指在不能立刻得到结果之前，该调用不会阻塞当前线程
		
		
	
- 组合
		
		同步异步取决于被调用者，阻塞非阻塞取决于调用者
		
			同步阻塞
			
			异步阻塞
		
			同步非阻塞
		
			异步非阻塞
		
	
	
