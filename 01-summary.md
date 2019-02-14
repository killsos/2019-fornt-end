## 1 高阶函数

- 高阶函数的定义

        两个要素
		
            1 如果函数的参数里面有一个是函数
			
            2 函数的返回值是函数
			
        满足上面要素中一个的函数就是高阶函数


## 2 异步发展过程

- callback 回调函数

- promise

- generator

- async + await

## 面向切面编程 AOP

- AOP

    	
		Aspect Oriented Programming
		
			代理
			
			装饰器
			

## 发布订阅

- 发布订阅场景

    	
		redux 
		
		vuejs
		

- 发布订阅 与 观察者模式 的区别

    	
		发布订阅 需要 一个中介
		
		
    	发布者 和 订阅者 没有 联系  是通过中介者来完成联系
		
		

## 观察者模式

- 观察者特点

		
		观察者模式基于发布订阅模式的
    	
		观察者放到被观察者中
    	
		当被观察者发送变化的时候 观察者做出反应
		

## promise

- 出现背景

    	1 同步多个异步的请求结果
		
		2 异步不支持try catch
		
		3 多个异步 如果有顺序关系 可能会导致 回调地狱
		
		4 异步也没有return
		

- 早期的解决方案

		
		angularjs  Q
		
		jquery     axios fetch
		

- ES6已经实现 Promise类

         
		有三个状态
		 
        	等待态    pending
		
        	成功态    fulfilled
		
        	失败态    rejected
			
    		创建一个promise默认是 等待态 pending
			

- 态势转换

    	
		只会发生两种转换
    	
		等待态   到     成功态
    	
		等待态   到     失败态
		

- 创建promise

    	
		在创建promise过程中需要执行器 executor
    	
		执行会立即执行
		
        let promise = new Promiose(executor);
		
        executor 是 一个函数
		
        函数有两个参数  resolve reject
		
        function(resolve, reject){
			
        }
		
        resolve reject 都是函数
		
        reslove 会将 等待态  转换到  成功态
		
        reject  会将 等待态  转换到  失败态
		
		

- then

        
		每一个promise对象都有then方法
		
        then方法对应两个方法 onfulfilled onrejected
		
        onfulfilled 是 转换到  成功态  时候 处理函数
		
        onrejected  是 转换到  失败态  时候 处理函数  是选填项
		
        onfulfilled 对应函数 有参数value  是成功时候 获得结果
		
        onrejected  对应函数 有参数reason 是失败时候 失败原因
		
		

### then 特点

- 总结

		
		0 一个promise实例可以then次
		
		1 如果 promise的then方法的成功回调onFulfilled 或者 失败回调 onRejected 执行后 如果返回是一个promise 
		  
		  就让这个返回的promsie执行 (promise的执行就是then方法)
		  
		2 只要成功或者失败的回调有返回值不管是什么(只要不是返回promise)都会走外层的then的成功
		
		3 如果返回的promise失败了 会走失败 或者 走catch
		
		4 在then方法中如果抛出异常 也会走失败 或者 走catch
		
		5 在promise的执行器中 如果抛出异常 也会走失败 或者 走catch (只要不是在异步回调函数throw就可以)
		
		6 catch后面还可以继续then
		
		


### then总结

- then 是异步的

		1. promise的执行
		
    	成功
		
        	一定走 外层的成功回调
		
    	失败
			
        	throw (throw如果是在异步回调 无效的)
		
        	reject
			
        都走外层的失败的回调  或者 catch回调
		
		
		2. then方法中的执行
		
    		只要返回值不是promise 无论是其他任何值
			
        	都会走外层的成功回调
			
    		出现 throw
			
        一定走 外层的失败回调  或者 catch回调
		
		
		3. catch方法中的执行
		
    		
			只要返回值不是promise 无论是其他任何值
			
        都会走外层的成功回调
		
    	出现 throw
		
        一定走 外层的失败回调  或者 catch回调

### promise 每次都返回的都必须是一个新的promise


### 测试promise是否满足规范

- 用法

		
		npm install promises-aplus-tests -g
		
        promises-aplus-tests 源文件
		

## mz库  nodejs+promise


## generator

- co库

