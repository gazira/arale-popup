define("arale/popup/1.1.2/popup",["$","arale/overlay/1.1.2/overlay","arale/position/1.0.1/position","arale/iframe-shim/1.0.2/iframe-shim","arale/position/1.0.0/position","arale/widget/1.1.1/widget","arale/base/1.1.1/base","arale/class/1.1.0/class","arale/events/1.1.0/events"],function(a,b,c){function d(a,b,c,d,e){var f=d&&d[0];e.delegateEvents(f?d:b,f?a+" "+b.selector:a,function(a){c.call(a.currentTarget,a)})}var e=a("$"),f=a("arale/overlay/1.1.2/overlay"),g=f.extend({attrs:{trigger:{value:null,getter:function(a){return e(a)}},triggerType:"hover",delegateNode:{value:null,getter:function(a){return e(a)}},align:{value:{baseXY:[0,"100%"],selfXY:[0,0]},setter:function(a){return a?(a.baseElement?this._specifiedBaseElement=!0:this.activeTrigger&&(a.baseElement=this.activeTrigger),a):void 0},getter:function(a){return e.extend({},a,this._specifiedBaseElement?{}:{baseElement:this.activeTrigger})}},delay:70,disabled:!1,effect:"",duration:250},setup:function(){g.superclass.setup.call(this),this._bindTrigger(),this._blurHide(this.get("trigger")),this.activeTrigger=this.get("trigger").eq(0)},show:function(){return this.get("disabled")?void 0:g.superclass.show.call(this)},_bindTrigger:function(){var a=this.get("triggerType");"click"===a?this._bindClick():"focus"===a?this._bindFocus():this._bindHover()},_bindClick:function(){function a(a){b.get("disabled")||b.get("trigger").each(function(c,d){a==d?(d._active=!0,b.activeTrigger=e(d)):d._active=!1})}var b=this;d("click",this.get("trigger"),function(c){"a"===this.tagName.toLowerCase()&&c.preventDefault(),this._active===!0?b.hide():(a(this),b.show())},this.get("delegateNode"),this),this.before("hide",function(){a()})},_bindFocus:function(){var a=this;d("focus",this.get("trigger"),function(){a.activeTrigger=e(this),a.show()},this.get("delegateNode"),this),d("blur",this.get("trigger"),function(){setTimeout(function(){!a._downOnElement&&a.hide(),a._downOnElement=!1},a.get("delay"))},this.get("delegateNode"),this),this.delegateEvents("mousedown",function(){this._downOnElement=!0})},_bindHover:function(){function a(){clearTimeout(b),b=null,i.get("visible")&&(c=setTimeout(function(){i.hide()},h))}var b,c,f=this.get("trigger"),g=this.get("delegateNode"),h=this.get("delay"),i=this;return 0>h?(this._bindTooltip(),void 0):(d("mouseenter",f,function(){clearTimeout(c),c=null,i.activeTrigger=e(this),b=setTimeout(function(){i.show()},h)},g,this),d("mouseleave",f,a,g,this),this.delegateEvents("mouseenter",function(){clearTimeout(c)}),this.delegateEvents("mouseleave",a),void 0)},_bindTooltip:function(){var a=this.get("trigger"),b=this.get("delegateNode"),c=this;d("mouseenter",a,function(){c.activeTrigger=e(this),c.show()},b,this),d("mouseleave",a,function(){c.hide()},b,this)},_onRenderVisible:function(a){var b=-1!==this.get("effect").indexOf("fade"),c=-1!==this.get("effect").indexOf("slide"),d={};c&&(d.height=a?"show":"hide"),b&&(d.opacity=a?"show":"hide"),b||c?this.element.stop(!0,!0).animate(d,this.get("duration")).css({visibility:"visible"}):this.element[a?"show":"hide"]()}});c.exports=g});
