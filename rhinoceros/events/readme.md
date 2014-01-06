## 事件处理

客户端javascript程序采用异步事件驱动编程模型，在web前端编程中，整天都是和事件打交道

####一些重要的定义：

**事件类型** -- 用来说明发生什么类型事件的字符串，如“mouseover”，“keydown”等

**事件目标** -- 发生的事件与之相关的对象，例如mouseover事件中的a元素

**事件处理程序** -- 处理或者响应事件的函数，应用程序通过指明事件类型和事件目标，在web浏览器中注册它们的事件处理程序

**事件对象** -- 与特定事件相关且包含有关该事件详细信息的对象，事件对象通过参数传递给事件处理程序函数（IE8以及之前版本，通过全局变量event来访问），所有的事件对象都有用来指定事件类型的type属性和指定事件目标的target属性。（IE8以及之前版本，用srcElement而非target）

**事件传播** -- 浏览器决定哪个对象触发其事件处理程序的过程，主要有冒泡和捕获（IE8以及之前版本不支持）

一些事件有与之相关的浏览器默认操作，如超链接上的clisk事件，默认操作是按照链接加载新页面

### 事件类型

#### 传统事件类型

1. 表单事件

	form的submit和reset，button的click，输入域的change，元素的blur和focus

	focus和blur事件不会冒泡，IE定义了focusin和focusout事件可以冒泡，jQuery为其他浏览器模拟了这两个事件

2. window事件

	指事件发生和浏览器窗口本身相关而非其他特定文档内容，如load，unload，beforeunload事件

	window的onerror属性有点像事件处理程序，但可以使用不同参数来调用

	window也有blur和focus事件，调整浏览器窗口大小或滚动时的resize和scroll事件

3. 鼠标事件

	鼠标事件会冒泡到文档最顶层，时间对象描述了当事件发生时鼠标的位置和案件状态，也指明当时是否有任何辅助键按下。

	mousemove，mousedown，mouseup，click，dbclick，mouseover，mouseout，mousewheel（firefox为DOMMouseScroll）

	在mousedown，mouseup之后触发clisk事件，短时间双击鼠标，在第二个click事件后触发dblclick事件

	mouseover，mouseout会冒泡，IE提供了不冒泡的mouseenter和mouseleave，jQuery为其他浏览器模拟这两个事件

4. 键盘事件

	当键盘聚焦到web浏览器时，用户每次按下或释放键盘上的按键时都会产生事件。

	键盘事件会冒泡到Document和Window对象。

	keyCode字段指明按下或释放的键是哪个

	keydown，keyup，当keydown事件产生可打印字符时，在keyup事件之前会触发keypress事件，当按下键重复产生字符时，在keyup事件之前可能产生很多keypress事件。

#### DOM事件

详情可查阅W3C文档：<http://www.w3.org/TR/2003/NOTE-DOM-Level-3-Events-20031107/events.html>

3级DOM事件规范标准化冒泡的focusin和focusout事件来取代不冒泡的focus和blur事件，不冒泡的mouseenter和mouseleave事件取代冒泡的mouseover，mouseout事件

通过wheel事件对二维鼠标滚轮提供支持

定义了keypress事件，不推荐使用它而是推荐使用textinput新事件，data为指定输入文本字符串，inputMethod为代表文本输入类型的常量

加入新的key和char属性来简化keydown，keyup，keypress事件，都为字符串。产生可打印字符的键盘事件，key和char即为生成文本内容，控制键，key为标识的“Enter”，“Delete”等，char将为null，而有字符编码的控制键，char即为产生字符串。

#### HTML5事件

&lt;audio&gt;和&lt;video&gt;元素的各种事件，拖放API的事件支持，历史管理机制中的事件支持，表单的invalid验证不通过事件，离线web应用支持的事件，跨文档通信API的message事件，XMLHttpRequest和File API规范的事件，本地存储相关事件，文档打印之前或之后的beforeprint和afterprint事件

#### 触摸屏和移动设备事件

Apple的触摸事件规范 <http://developer.apple.com>

手势开始gesturestart，手势结束gestureend，两个事件之间是跟踪手势过程的gesturechange事件队列

低级触摸事件，手指触摸屏幕时触发touchstart事件，手指移动时触发touchmove事件，离开屏幕时触发touchend事件

**注：HTML5事件，触摸屏和移动设备事件会在以后的学习中再详细了解**

### 注册事件处理程序

注册事件处理程序的两种方式：

1. 给事件目标对象或文档元素设置属性

	事件处理程序属性的名字由“on”后边跟着事件名组成，如onclick，onchange，onload等，所有字母都为小写。

	一般情况，所有广泛实现的Web API定义的事件都允许通过设置事件处理程序属性来注册处理程序。缺点是每个事件目标对于每种事件类型最多只有一个处理程序，重复设置会覆盖原本的。

	在html中直接设置HTML标签的属性也可以设置事件处理程序，属性值应该是javascript代码字符串。

	某些事件类型通常在浏览器而非任何特定文档元素上触发，这些事件在Window上注册，但是在HTML中，是放在body标签上，如onload，onresize等。
	
2. 将事件处理程序传递给对象或元素的一个方法

	addEventListener() 和 attachEvent() （IE9之前版本使用）

	addEventListener(type, func, useCapture) 参数：事件类型（不包括on前缀），事件调用函数，是否为捕获事件（默认为冒泡），在部分浏览器，忽略第三个参数会出错

	如果同时使用1，2两种方式来注册处理程序，两者不会互相影响，addEventListener注册的事件，当对象触发时，会依照注册的顺序调用，使用相同参数在同一对象调用addEventListener多次注册是没用的，依旧只生效一次。
	对于移除事件注册的方法：removeEventListener(type, funx, useCapture) 移除时参数应该和注册时一致，func应该是同一函数（意味着匿名函数注册的话无法移除，如需移除需要保留函数引用变量）

	attachEvent() 和addEventListener类似，由于IE9以下不支持捕获，所以只有两个参数，第一个参数，即事件类型为带on前缀的，如onclick等。

### 事件处理程序的调用

一旦注册了事件处理程序，浏览器就会在指定对象上发生指定类型事件时自动调用它。

通常调用事件处理程序时把事件对象作为它的一个参数，在IE8及以前版本，调用事件处理程序时并未传递事件对象，而是通过Window.event来获取事件对象

在事件处理程序内，this指向调用它的事件目标，对于attachEvent来说，this指向Window，可以使用兼容方法处理

#### 事件程序返回值

直接设置对象属性html来注册事件处理程序，其返回值，通常为false即阻止浏览器执行相关默认事件，而Window的onbeforeunload的返回值如果为字符串，即会询问用户对话框中显示

而使用addEventListener和attachEvent()必须调用preventDefault或者设置事件对象的returnValue属性

#### 调用顺序

* 设置对象属性或HTML属性注册的优先调用

* 使用addEventListener()注册的按照它们注册顺序调用

* attachEvent()的无序，代码不应该依赖调用顺序

#### 事件传播

即事件捕获，事件触发，事件冒泡，详细可见：<http://www.w3.org/TR/2003/NOTE-DOM-Level-3-Events-20031107/events.html#Events-flows>

#### 事件取消

在支持addEventListener()的浏览器中，通过调用事件对象的preventDefault()方法取消事件的默认操作，使用stopPropagation()方法来阻止事件继续传播

IE8及以前版本，通过设置事件对象的returnValue属性为false来取消事件默认操作，IE事件对象有一个cancelBubble属性，设置该属性为true来阻止事件传播

阻止事件传播只是阻止其他事件目标上的事件处理程序的触发，在同一对象上定义多个事件处理程序，触发时无法取消，DOM事件规范定义了stopImmediatePropagation()方法，阻止事件传播以及同个对象上其它事件处理程序的调用，某些浏览器不支持，而YUI，jQuery等工具库定义了跨平台的stopImmediateProgapation方法。




	
