describe("eventOn 使用设置元素属性来绑定事件", function(){

    var wrap = null;
    
    beforeEach(function(){
	$('body').append('<div id="test-content"></div>');
	wrap = $('#test-content');
    });

    afterEach(function(){
	wrap.remove();
    });
    
    it("click单事件", function(){
	
	var el = $('<button>click</button>'),
	    mark = false;
	
	wrap.append(el);
	
	eventOn(el.get(0), 'click', function(){
	    mark = true;
	});
	
	el.trigger('click');
	expect(mark).toBe(true);
	
	el.remove();
    });

    it("click多事件", function(){
	var re = [],
	    el = $('<button></button>');

	wrap.append(el);
	
	eventOn(el.get(0), 'click', function(){
	    re.push(0);
	});
	eventOn(el.get(0), 'click', function(){
	    re.push(1);
	});
	eventOn(el.get(0), 'click', function(){
	    re.push(2);
	});

	el.trigger('click');

	expect(re[0]).toBe(0);
	expect(re[1]).toBe(1);
	expect(re[2]).toBe(2);

	el.remove();
    });

    it("多事件阻止", function(){
	var re = 0,
	    el = $('<a href="#click"></a>');

	wrap.append(el);

	eventOn(el.get(0), 'click', function(){
	    re += 1;
	    return false;
	});
	eventOn(el.get(0), 'click', function(){
	    re += 1;
	});

	el.trigger('click');

	expect(re).toBe(1);

	el.remove();
    });

    it("事件冒泡", function(){ // 按钮 -> div -> body -> document
	var mark = [],
	    el = $('<button></button>');

	wrap.append(el);

	eventOn($(document).get(0), 'click', function(){
	    mark.push(0);
	});
	eventOn($('body').get(0), 'click', function(){
	    mark.push(1);
	});
	eventOn($('#test-content').get(0), 'click', function(){
	    mark.push(2);
	});

	el.trigger('click');

	expect(mark[0]).toBe(2);
	expect(mark[1]).toBe(1);
	expect(mark[2]).toBe(0);

	el.remove();
    });

    it("阻止事件冒泡", function(){
	
    });

    it("阻止默认事件", function(){
	
    });

    it("事件目标", function(){
	var el = $('<a href="#aa"></a>'),
	    mark = null;

	wrap.append(el);
	
	eventOn(el.get(0), 'click', function(event){
	    mark = event.target;
	});

	el.trigger('click');

	expect(mark).toBe(el.get(0));
    });

    it("focusin, focusout 事件冒泡", function(){
	
    });

    it("IE部分特殊事件", function(){
	
    });
});

describe("eventBind 使用标准事件绑定", function(){
    
});
