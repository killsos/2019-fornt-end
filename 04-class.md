## class

- 核心概念

		
		1. constructor
		
		2. prototype
		
		3. __proto__
		
	
- 属性

		
		实例属性
		
			公有实例属性
			
				class C {
				  x = 'x';
				}
				
				return new C().x === 'x';
				
			私有实例属性
			
				class C {
				  #x;
				  constructor(x){
				    this.#x = x;
				  }
				  x(){
				    return this.#x;
				  }
				}
				return new C(42).x() === 42;
		
		静态属性
		
			公有静态属性
			
				class C {
					
					static x = 'X';
				
				}
				
				return C.x === 'X';
				
			
			私有静态属性
			
				class C {
				  static #x = 42;
				  x(){
				    return C.#x;
				  }
				}
				
				
				return new C().x() === 42;
		
		原型属性
		
			prototype...
		
		私有属性
		
		
		
		
		
	
- 类的装饰器

		
		class A {
		  @nonconf
		  get B() {}
		}
		
		function nonconf(target, name, descriptor) {
		  descriptor.configurable = false;
		  return descriptor;
		}
		
		return Object.getOwnPropertyDescriptor(A.prototype, "B").configurable === false;
		
		
		
	
- bind::运算符

			
		1 binary
			
			函数绑定this
			
			function foo() { 
				this.garply += "foo"; return this; 
			}
			
			var obj = { garply: "bar" };
			
			obj::foo().garply === "barfoo";  // obj::foo() === foo.call(obj)
		
		
		2 unary
		
			绑定对象中方法中this
		
				var obj = { garply: "bar", foo: function() { this.garply += "foo"; return this; } };
				
				let test = ::obj.foo;  // ::obj.foo === obj.foo.bind(obj);
				
				console.log(test().garply)
			
			
			
			
			
			
	
- Object.assign

		
		Object.assign(target, source)
		
		

- Object.create

		
		Object.create(proto, [propertiesObject])
		
		ES5方法 用来创建 原型对象
		
	
- class

		
		class Animal {
			
			static get(){ // 静态属性
			
			}
			
			constructor(name,age){
				
				this.name =name;  // 实例属性
				
				this.age = age;
			
			}
			
			drink(){  // 原型属性
			
				console.log("drink");
			}
		
		}
		
		继承 extends 
		
		class Cat extends Animal {
		
			constructor(name,age, weight){
				
				super(name,age) // 父类
				
				this.weight = weight;
			
			}
		
		}
		
		
		class Cat extends Animal {
			
			weight = 1; // 类的属性  当new cat时候就成为 实例属性
		
		}
		

- 类的修饰 decorators

			
		1. 修饰类
		
			function(target) { // target is class
			}
		
		2. 修饰类的属性
		
			function(target, key, descriptor) { // target是类的原型 key是属性名 value是属性描述
			}
			
			target: Cat {} 
			
			key: 'PI' 
			
			descriptor:
			{ configurable: true,
			  enumerable: true,
			  writable: true,
			  initializer: [Function: initializer] 
		   }
			
			
			
		3. 修饰类的方法
			
			function(target, key, descriptor) { // target是类的原型 key是属性名 value是属性描述
			}
			
			target: Cat {} 
			key: 'say' 
			descriptor:
				{ 
					value: [Function: say],
			 	   	writable: true,
			 	  	enumerable: false,
			 	 	configurable: true 
				}
			
			
			
	
- babel

		
		npm init
		
		npm install @babel/cli @babel/core @babel/preset-env
		
		@babel/cli // 命令行工具
		
		@babel/core  // babel核心 会配置转换规则
		
		@bable/preset-env // 
		
		@babel/plugin-proposal-class-properties // 类属性
		
		新建 .babelrc文件
		
			.babelrc中
			
				{
					"presets":[
					
						"@babel/preset-env"
					],
					"plugins":[
					
					
					
					
					]
				}
				
				
				babel/preset-env // 插件包
				
				plugins // 单独添加的插件
				
				
		npx babel source -o outfile
		
	