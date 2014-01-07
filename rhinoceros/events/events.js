// 这里简单编写一个兼容浏览器的事件绑定工具

!function(window){

    // 事件队列
    var EventQueue = function(){
	var _events = [];

	return {
	    push: function(event){
		_events.push(event);
	    },
	    emit: function(elem){
		var e = _events, len = e.length, i = 0, args = Array.prototype.slice.call(arguments, 1);
		
		for(i; i < len; i++){
		    if(_events[i].apply(elem, args) === false){
			return ;
		    }
		}	
	    }
	};
    };

    var eventsList = [], uid = 1;
    
    // 使用设置元素事件属性的方法来绑定
    var eventOn = function(elem, type, callback){
	var id;
	    
	elem.__id__ || (elem.__id__ = uid++);

	id = elem.__id__ + ':' + type;
	eventsList[id] || (eventsList[id] = EventQueue());
	eventsList[id].push(callback);
	
	elem['on' + type] || (elem['on' + type] = function(event){
	    var event = event || window.event;
	    eventsList[id]['emit'](elem, event);
	});
	
    };

    // 使用addEventListener方法来绑定
    var eventBind = function(){
	
    };

    // 兼容处理event对象
    function eventWrap(event){
	
    }
    
    window.eventOn = eventOn;
    window.eventBind = eventBind;
    
}(window);
