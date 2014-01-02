## 事件处理

客户端javascript程序采用异步事件驱动编程模型，在web前端编程中，整天都是和事件打交道

####一些重要的定义：

**事件类型** -- 用来说明发生什么类型事件的字符串，如“mouseover”，“keydown”等

**事件目标** -- 发生的事件与之相关的对象，例如mouseover事件中的a元素

**事件处理程序** -- 处理或者响应事件的函数，应用程序通过指明事件类型和事件目标，在web浏览器中注册它们的事件处理程序

**事件对象** -- 与特定事件相关且包含有关该事件详细信息的对象，事件对象通过参数传递给事件处理程序函数（IE8以及之前版本，通过全局变量event来访问），所有的事件对象都有用来指定事件类型的type属性和指定事件目标的target属性。（IE8以及之前版本，用srcElement而非target）

**事件传播** -- 浏览器决定哪个对象触发其事件处理程序的过程，主要有冒泡和捕获（IE8以及之前版本不支持）

一些事件有与之相关的浏览器默认操作，如超链接上的clisk事件，默认操作是按照链接加载新页面

### 传统事件类型

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

### DOM事件

详情可查阅W3C文档：<http://www.w3.org/TR/2003/NOTE-DOM-Level-3-Events-20031107/events.html>

标准化冒泡的focusin和focusout事件来取代不冒泡的focus和blur事件，不冒泡的mouseenter和mouseleave事件取代冒泡的mouseover，mouseout事件

