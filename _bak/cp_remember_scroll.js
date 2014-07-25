	
	"use strict";
	
	var RememberScroll = {
			
		init:function(){
			this._scrollToSavedPosition(),this._onUnloadStoreScrollPosition();
		},
		_scrollToSavedPosition:function(){
			var e=CPLocalStorage.getItem(this._getScrollPositionKey());
				
			e!==undefined&&window.scrollTo(0,e), CPLocalStorage.removeItem(this._getScrollPositionKey());
		},
		_onUnloadStoreScrollPosition:function(){
			if(window.onunload)return 0;var e=this;
		
			window.onunload=function(){
				var t=document.getElementsByTagName("body")[0];CPLocalStorage.setItem(e._getScrollPositionKey(),t.scrollTop);
			};
		},
		_getScrollPositionKey:function(){
			var e=document.location.pathname.split("/").pop();
			
			return"scrollposition:"+e;
		}
		
	};
	
	RememberScroll.init();