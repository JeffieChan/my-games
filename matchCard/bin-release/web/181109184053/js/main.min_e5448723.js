var __reflect=this&&this.__reflect||function(e,t,r){e.__class__=t,r?r.push(t):r=[t],e.__types__=e.__types__?r.concat(e.__types__):r},__extends=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);r.prototype=t.prototype,e.prototype=new r},__awaiter=this&&this.__awaiter||function(e,t,r,i){return new(r||(r=Promise))(function(s,n){function a(e){try{h(i.next(e))}catch(t){n(t)}}function o(e){try{h(i["throw"](e))}catch(t){n(t)}}function h(e){e.done?s(e.value):new r(function(t){t(e.value)}).then(a,o)}h((i=i.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function r(e){return function(t){return i([e,t])}}function i(r){if(s)throw new TypeError("Generator is already executing.");for(;h;)try{if(s=1,n&&(a=n[2&r[0]?"return":r[0]?"throw":"next"])&&!(a=a.call(n,r[1])).done)return a;switch(n=0,a&&(r=[0,a.value]),r[0]){case 0:case 1:a=r;break;case 4:return h.label++,{value:r[1],done:!1};case 5:h.label++,n=r[1],r=[0];continue;case 7:r=h.ops.pop(),h.trys.pop();continue;default:if(a=h.trys,!(a=a.length>0&&a[a.length-1])&&(6===r[0]||2===r[0])){h=0;continue}if(3===r[0]&&(!a||r[1]>a[0]&&r[1]<a[3])){h.label=r[1];break}if(6===r[0]&&h.label<a[1]){h.label=a[1],a=r;break}if(a&&h.label<a[2]){h.label=a[2],h.ops.push(r);break}a[2]&&h.ops.pop(),h.trys.pop();continue}r=t.call(e,h)}catch(i){r=[6,i],n=0}finally{s=a=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}var s,n,a,o,h={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:r(0),"throw":r(1),"return":r(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o},Card=function(e){function t(t,r){var i=e.call(this)||this;return i._isface=!1,i._speed=.1,i._isdeal=!1,i.width=120,i.height=168,i.anchorOffsetX=i.width/2,i._faceID=t,i._backID=r,i.draw(),i}return __extends(t,e),Object.defineProperty(t.prototype,"faceID",{get:function(){return this._faceID},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isface",{get:function(){return this._isface},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"isdeal",{get:function(){return this._isdeal},set:function(e){this._isdeal=e},enumerable:!0,configurable:!0}),t.prototype.init=function(){this._isface=!0,this.reverse()},t.prototype.draw=function(){var e=RES.getRes(this._faceID);this._faceImg=new egret.Bitmap(e),this._faceImg.width=this.width,this._faceImg.height=this.height;var t=RES.getRes(this._backID);this._backImg=new egret.Bitmap(t),this._backImg.width=this.width,this._backImg.height=this.height,this.addChild(this._backImg)},t.prototype.reverse=function(){this._isface=!this._isface,egret.startTick(this.enterFrameHandler,this)},t.prototype.enterFrameHandler=function(){return this.scaleX-=this._speed,Math.abs(this.scaleX)<.1&&(this._isface?(-1!=this.getChildIndex(this._backImg)&&this.removeChild(this._backImg),this.addChild(this._faceImg)):(-1!=this.getChildIndex(this._faceImg)&&this.removeChild(this._faceImg),this.addChild(this._backImg)),this._speed=-.1),1==this.scaleX&&(egret.stopTick(this.enterFrameHandler,this),this._speed=.1),!0},t}(egret.Sprite);__reflect(Card.prototype,"Card");var LoadingUI=function(e){function t(){var t=e.call(this)||this;return t.createView(),t}return __extends(t,e),t.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},t.prototype.onProgress=function(e,t){this.textField.text="Loading..."+e+"/"+t},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(e){function t(){var t=e.call(this)||this;return t.cards=[],t.cardsPos=[],t.leaveCards=52,t.dealCards=[],t.selectedCards=[],t.endTarget=new egret.Point,t.faceCards=[],t.addEventListener(egret.Event.ADDED_TO_STAGE,t.onAddToStage,t),t}return __extends(t,e),t.prototype.onAddToStage=function(e){egret.lifecycle.addLifecycleListener(function(e){e.onUpdate=function(){}}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.loadResource()];case 1:return e.sent(),this.createGameScene(),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),e=new LoadingUI,this.stage.addChild(e),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return r.sent(),[4,RES.loadGroup("preload",0,e)];case 2:return r.sent(),this.stage.removeChild(e),[3,4];case 3:return t=r.sent(),console.error(t),[3,4];case 4:return[2]}})})},t.prototype.createGameScene=function(){var e=new egret.Shape;e.graphics.beginFill(2640246),e.graphics.drawRect(0,0,this.stage.stageWidth,this.stage.stageHeight),this.addChild(e);var t=new egret.Shape;t.graphics.beginFill(16777215,.1),t.graphics.drawRect(0,0,500,692),t.x=250,t.y=50,this.addChild(t),this.endTarget.x=900,this.endTarget.y=50,this.createCards(),this.initCards(),this.setCardPos(),this.setdealCards(),this.deal(16,this.cardsPos)},t.prototype.setCardPos=function(){for(var e=0;4>e;e++)for(var t=0;4>t;t++){var r=new egret.Point;r.x=314+124*t,r.y=54+172*e,this.cardsPos.push(r)}},t.prototype.setdealCards=function(){for(var e=0;16>e;e++)this.dealCards.push(null)},t.prototype.createCards=function(){var e=["a","b","c","d"];this.cards=[];for(var t=0;13>t;t++)for(var r=0;4>r;r++){var i=e[r]+(t+1),s="cards_json#back",n=new Card(i,s);n.touchEnabled=!0,n.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.cardClickHandler,this),this.addChild(n),this.cards.push(n)}},t.prototype.cardClickHandler=function(e){var t=e.currentTarget;if(t.isdeal&&!(this.selectedCards.length>=2)&&!t.isface&&(this.selectedCards.push(t),t.reverse(),2==this.selectedCards.length)){var r=this.selectedCards[0].faceID.slice(1),i=this.selectedCards[1].faceID.slice(1);r!=i?this.wrong():this.right()}},t.prototype.wrong=function(){egret.setTimeout(function(){this.selectedCards[0].reverse(),this.selectedCards[1].reverse(),this.selectedCards=[]},this,1e3)},t.prototype.right=function(){egret.setTimeout(function(){var e=this.selectedCards[0],t=this.selectedCards[1];this.endTarget.y+=10,egret.Tween.get(e).to({x:this.endTarget.x,y:this.endTarget.y},200),egret.Tween.get(t).to({x:this.endTarget.x,y:this.endTarget.y},200);var r=this.cardsPos[this.dealCards.indexOf(e)],i=this.cardsPos[this.dealCards.indexOf(t)];this.faceCards.push(e),this.faceCards.push(t),this.setChildIndex(e,this.faceCards.length+54),this.setChildIndex(t,this.faceCards.length+55),egret.setTimeout(function(){this.leaveCards>0&&this.deal(2,[r,i]),this.selectedCards=[]},this,200)},this,1e3)},t.prototype.initCards=function(){this.shuffer(this.cards);for(var e=0;e<this.cards.length;e++)this.addChild(this.cards[e]),this.cards[e].x=125,this.cards[e].y=50+5*e,this.setChildIndex(this.cards[e],e+10)},t.prototype.shuffer=function(e){for(var t=0,r=e.length;r>t;t++){var i=Math.floor(Math.random()*r),s=e[t];e[t]=e[i],e[i]=s}},t.prototype.deal=function(e,t){for(var r=function(e,r){egret.setTimeout(function(){var i=this.cards[e],s=this.cardsPos.indexOf(t[r]);this.setChildIndex(i,e+10+54),egret.Tween.get(i).to({x:t[r].x,y:t[r].y},100).call(function(){i.isdeal=!0,this.dealCards[s]=i,this.setChildIndex(i,e+10)},this)},i,110*r)},i=this,s=this.leaveCards-1,n=0;s>=this.leaveCards-e;s--,n++)r(s,n);egret.setTimeout(function(){this.leaveCards-=e},this,110*e+10)},t.prototype.createBitmapByName=function(e){var t=new egret.Bitmap,r=RES.getRes(e);return t.texture=r,t},t}(egret.DisplayObjectContainer);__reflect(Main.prototype,"Main");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);