(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{nvDW:function(e,n,t){"use strict";t.r(n);var l=t("CcnG"),r=function(){return function(){}}(),i=t("pMnS"),o=t("Ip0R"),c=t("K9Ia"),a=t("dzgT"),u=t("P6uZ"),s=function(){function e(e,n){this.elementRef=e,this.document=n,this.width=0,this.height=0,this.sourceInitialized=new c.a,this.viewInitialized=new c.a,Object(a.a)(this.sourceInitialized,this.viewInitialized).pipe(Object(u.a)()).subscribe(this.injectImage.bind(this))}return Object.defineProperty(e.prototype,"element",{get:function(){return this.elementRef.nativeElement},enumerable:!0,configurable:!0}),Object.defineProperty(e,"isNativeLazyLoadingSupported",{get:function(){return"loading"in HTMLImageElement.prototype},enumerable:!0,configurable:!0}),e.prototype.ngOnChanges=function(){this.element.style.width=this.width+"px",this.element.style.height=this.height+"px",this.source&&this.sourceInitialized.next(!0)},e.prototype.ngAfterViewInit=function(){this.element.style.position="relative";var e=this.document.createElement("div");e.style.width="40px",e.style.height="40px",e.style.position="absolute",e.style.top="50%",e.style.left="50%",e.style.marginTop="-20px",e.style.marginLeft="-20px",e.style.animation="rotation 1.5s infinite linear",e.innerHTML='\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;" x="0px" y="0px">\n    <g id="outer">\n        <g>\n            <path d="M20,0C22.2058,0 23.9939,1.78813 23.9939,3.9939C23.9939,6.19968 22.2058,7.98781 20,7.98781C17.7942,7.98781 16.0061,6.19968 16.0061,3.9939C16.0061,1.78813 17.7942,0 20,0Z" style="fill:black;"/>\n        </g>\n        <g>\n            <path d="M5.85786,5.85786C7.41758,4.29815 9.94638,4.29815 11.5061,5.85786C13.0658,7.41758 13.0658,9.94638 11.5061,11.5061C9.94638,13.0658 7.41758,13.0658 5.85786,11.5061C4.29815,9.94638 4.29815,7.41758 5.85786,5.85786Z" style="fill:rgb(210,210,210);"/>\n        </g>\n        <g>\n            <path d="M20,32.0122C22.2058,32.0122 23.9939,33.8003 23.9939,36.0061C23.9939,38.2119 22.2058,40 20,40C17.7942,40 16.0061,38.2119 16.0061,36.0061C16.0061,33.8003 17.7942,32.0122 20,32.0122Z" style="fill:rgb(130,130,130);"/>\n        </g>\n        <g>\n            <path d="M28.4939,28.4939C30.0536,26.9342 32.5824,26.9342 34.1421,28.4939C35.7019,30.0536 35.7019,32.5824 34.1421,34.1421C32.5824,35.7019 30.0536,35.7019 28.4939,34.1421C26.9342,32.5824 26.9342,30.0536 28.4939,28.4939Z" style="fill:rgb(101,101,101);"/>\n        </g>\n        <g>\n            <path d="M3.9939,16.0061C6.19968,16.0061 7.98781,17.7942 7.98781,20C7.98781,22.2058 6.19968,23.9939 3.9939,23.9939C1.78813,23.9939 0,22.2058 0,20C0,17.7942 1.78813,16.0061 3.9939,16.0061Z" style="fill:rgb(187,187,187);"/>\n        </g>\n        <g>\n            <path d="M5.85786,28.4939C7.41758,26.9342 9.94638,26.9342 11.5061,28.4939C13.0658,30.0536 13.0658,32.5824 11.5061,34.1421C9.94638,35.7019 7.41758,35.7019 5.85786,34.1421C4.29815,32.5824 4.29815,30.0536 5.85786,28.4939Z" style="fill:rgb(164,164,164);"/>\n        </g>\n        <g>\n            <path d="M36.0061,16.0061C38.2119,16.0061 40,17.7942 40,20C40,22.2058 38.2119,23.9939 36.0061,23.9939C33.8003,23.9939 32.0122,22.2058 32.0122,20C32.0122,17.7942 33.8003,16.0061 36.0061,16.0061Z" style="fill:rgb(74,74,74);"/>\n        </g>\n        <g>\n            <path d="M28.4939,5.85786C30.0536,4.29815 32.5824,4.29815 34.1421,5.85786C35.7019,7.41758 35.7019,9.94638 34.1421,11.5061C32.5824,13.0658 30.0536,13.0658 28.4939,11.5061C26.9342,9.94638 26.9342,7.41758 28.4939,5.85786Z" style="fill:rgb(50,50,50);"/>\n        </g>\n    </g>\n</svg>\n',this.element.appendChild(e),this.viewInitialized.next(!0)},e.prototype.injectImage=function(){var n=this.document.createElement("img");if(e.isNativeLazyLoadingSupported){var t=this.document.createAttribute("loading");t.value="lazy",n.src=this.source,n.attributes.setNamedItem(t)}else{var l=this.document.createAttribute("data-src");l.value=this.source,n.attributes.setNamedItem(l),n.classList.add("lazyload")}n.style.width="100%",n.style.height="100%",n.style.objectFit="cover",n.style.objectPosition="center",n.style.position="relative",this.element.appendChild(n)},e}(),d=t("mrSG"),p=t("b36G"),h=function(){function e(){}return Object(d.b)([Object(p.Expose)(),Object(d.d)("design:type",Number)],e.prototype,"id",void 0),Object(d.b)([Object(p.Expose)(),Object(d.d)("design:type",String)],e.prototype,"title",void 0),e}(),b=function(){function e(){}return Object(d.b)([Object(p.Expose)(),Object(d.d)("design:type",Number)],e.prototype,"id",void 0),Object(d.b)([Object(p.Expose)(),Object(d.d)("design:type",String)],e.prototype,"name",void 0),e}(),g=function(){return h},f=function(){return b},m=function(){function e(){}return Object.defineProperty(e.prototype,"isColorless",{get:function(){return!this.colors.length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isWhite",{get:function(){return this.colors.includes("W")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isBlue",{get:function(){return this.colors.includes("U")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isBlack",{get:function(){return this.colors.includes("B")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isRed",{get:function(){return this.colors.includes("R")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isGreen",{get:function(){return this.colors.includes("G")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isMultiColored",{get:function(){return this.colors.length>1},enumerable:!0,configurable:!0}),Object(d.b)([Object(p.Expose)(),Object(d.d)("design:type",Number)],e.prototype,"id",void 0),Object(d.b)([Object(p.Expose)(),Object(d.d)("design:type",String)],e.prototype,"oracleId",void 0),Object(d.b)([Object(p.Expose)(),Object(d.d)("design:type",String)],e.prototype,"name",void 0),Object(d.b)([Object(p.Expose)(),Object(d.d)("design:type",String)],e.prototype,"artCrop",void 0),Object(d.b)([Object(p.Expose)(),Object(d.d)("design:type",String)],e.prototype,"manaCost",void 0),Object(d.b)([Object(p.Expose)(),Object(d.d)("design:type",Number)],e.prototype,"cmc",void 0),Object(d.b)([Object(p.Expose)(),Object(d.d)("design:type",String)],e.prototype,"typeLine",void 0),Object(d.b)([Object(p.Expose)(),Object(d.d)("design:type",String)],e.prototype,"colors",void 0),Object(d.b)([Object(p.Expose)(),Object(d.d)("design:type",String)],e.prototype,"text",void 0),Object(d.b)([Object(p.Expose)(),Object(d.d)("design:type",String)],e.prototype,"flavorText",void 0),Object(d.b)([Object(p.Expose)(),Object(d.d)("design:type",Number)],e.prototype,"edhrecRank",void 0),Object(d.b)([Object(p.Expose)(),Object(d.d)("design:type",String)],e.prototype,"power",void 0),Object(d.b)([Object(p.Expose)(),Object(d.d)("design:type",String)],e.prototype,"toughness",void 0),Object(d.b)([Object(p.Type)(g),Object(p.Expose)(),Object(d.d)("design:type",h)],e.prototype,"rarity",void 0),Object(d.b)([Object(p.Type)(f),Object(p.Expose)(),Object(d.d)("design:type",b)],e.prototype,"artist",void 0),e}(),y=function(){return function(){}}(),x=l.pb({encapsulation:0,styles:[[".mana-colorless[_ngcontent-%COMP%]{background-color:#69a}.mana-white[_ngcontent-%COMP%]{background-color:#d4dbcd}.mana-blue[_ngcontent-%COMP%]{background-color:#002269}.mana-black[_ngcontent-%COMP%]{background-color:#0e0e0e}.mana-red[_ngcontent-%COMP%]{background-color:#8d0c0c}.mana-green[_ngcontent-%COMP%]{background-color:#003504}.mana-white.mana-blue[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#002269,#d4dbcd)}.mana-white.mana-black[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#d4dbcd,#0e0e0e)}.mana-white.mana-red[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#8d0c0c,#d4dbcd)}.mana-white.mana-green[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#003504,#d4dbcd)}.mana-blue.mana-black[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#002269,#0e0e0e)}.mana-blue.mana-red[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#002269,#8d0c0c)}.mana-blue.mana-green[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#003504,#002269)}.mana-black.mana-red[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#0e0e0e,#8d0c0c)}.mana-black.mana-green[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#0e0e0e,#003504)}.mana-red.mana-green[_ngcontent-%COMP%]{background-image:linear-gradient(90deg,#8d0c0c,#003504)}.mana-multi-colored[_ngcontent-%COMP%]{background-color:#ab8545!important}"],[".card[_ngcontent-%COMP%]{background:#000;color:#000;padding:17px 17px 10px;height:550px;width:400px;border-radius:5px;box-shadow:2px 2px 4px rgba(0,0,0,.75);position:relative}.card__color-layer[_ngcontent-%COMP%], .card__texture-layer[_ngcontent-%COMP%]{border-radius:10px 10px 40px 40px;height:475px;width:100%}.card__texture-layer[_ngcontent-%COMP%]{background-image:url(card-bg-texture.419fea4894b731feae26.jpg);position:relative}.card__color-layer[_ngcontent-%COMP%]{opacity:.7;position:absolute;top:0;left:0;padding:10px 11px 0}.card__artist[_ngcontent-%COMP%]{color:#a9b7c6;font-family:Matrix,sans-serif;font-size:16px;line-height:1.1;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.card__content-layer[_ngcontent-%COMP%]{position:absolute;top:27px;left:28px;right:28px}.content__header[_ngcontent-%COMP%], .content__type[_ngcontent-%COMP%]{font-family:Beleren,sans-serif;font-weight:600;background:radial-gradient(ellipse farthest-corner,#e0e7ed 50%,#bdc6cd);border:2px solid #000;border-radius:10px/20px;box-shadow:inset 2px -3px 0 #aaa,inset -1px 1px 0 #fff;height:33px;padding:4px 8px 0;line-height:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.content__header-wrapper[_ngcontent-%COMP%], .content__type-wrapper[_ngcontent-%COMP%]{padding:3px;background:#ddd;border-radius:8px/20px;box-shadow:-2px 0 0 0 rgba(0,0,0,.8)}.content__header[_ngcontent-%COMP%]{font-size:21px}.content__type[_ngcontent-%COMP%]{font-size:18px;padding-top:5px}.content__art[_ngcontent-%COMP%]{border:2px solid #333;margin:0 auto}.content__art-wrapper[_ngcontent-%COMP%]{width:332px;background:#ddd;margin:0 auto;border-left:2px solid rgba(0,0,0,.8)}.content__text[_ngcontent-%COMP%]{font-family:Matrix,sans-serif;font-size:19px;height:169px;margin:0 auto;padding:10px;border:2px solid #999;width:323px}.content__text-wrapper[_ngcontent-%COMP%]{width:332px;margin:0 auto;border-left:2px solid rgba(0,0,0,.8);border-bottom:2px solid rgba(0,0,0,.8);background-color:#ddd;padding-bottom:2px}.content__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:11px;line-height:1.1}.content__text[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]{font-style:italic}.content__pt[_ngcontent-%COMP%]{background:radial-gradient(ellipse farthest-corner,#e0e7ed 50%,#bdc6cd);border-radius:10px/20px;padding:3px 15px 0;height:23px;box-shadow:inset -2px 2px 1px #333,inset 1px -1px 0 #fff;border:0;display:inline-block;font-size:18px;line-height:1em;font-family:Beleren,sans-serif;font-weight:600}.content__pt-wrapper[_ngcontent-%COMP%]{box-shadow:-2px 1px 2px 0 rgba(0,0,0,.8);padding:3px;background:#ddd;border-radius:8px/20px;display:inline-block;position:absolute;right:0;bottom:-10px}"]],data:{}});function O(e){return l.Hb(0,[(e()(),l.rb(0,0,null,null,2,"div",[["class","content__pt-wrapper"]],null,null,null,null,null)),(e()(),l.rb(1,0,null,null,1,"div",[["class","content__pt"]],null,null,null,null,null)),(e()(),l.Fb(2,null,[" ","/"," "]))],null,function(e,n){var t=n.component;e(n,2,0,null==t.card?null:t.card.power,null==t.card?null:t.card.toughness)})}function v(e){return l.Hb(2,[(e()(),l.rb(0,0,null,null,23,"div",[["class","card d-flex fd-column ai-start jc-space-between"]],null,null,null,null,null)),(e()(),l.rb(1,0,null,null,1,"div",[["class","card__texture-layer"]],null,null,null,null,null)),(e()(),l.rb(2,0,null,null,0,"div",[["class","card__color-layer"]],[[2,"mana-colorless",null],[2,"mana-white",null],[2,"mana-blue",null],[2,"mana-black",null],[2,"mana-red",null],[2,"mana-green",null],[2,"mana-multi-colored",null]],null,null,null,null)),(e()(),l.rb(3,0,null,null,18,"div",[["class","card__content-layer"]],null,null,null,null,null)),(e()(),l.rb(4,0,null,null,2,"div",[["class","content__header-wrapper"]],null,null,null,null,null)),(e()(),l.rb(5,0,null,null,1,"h3",[["class","content__header"]],null,null,null,null,null)),(e()(),l.Fb(6,null,[" "," "])),(e()(),l.rb(7,0,null,null,2,"div",[["class","content__art-wrapper"]],null,null,null,null,null)),(e()(),l.rb(8,0,null,null,1,"div",[["class","content__art"],["progressiveImage",""]],null,null,null,null,null)),l.qb(9,4734976,null,0,s,[l.k,o.d],{width:[0,"width"],height:[1,"height"],source:[2,"source"]},null),(e()(),l.rb(10,0,null,null,2,"div",[["class","content__type-wrapper"]],null,null,null,null,null)),(e()(),l.rb(11,0,null,null,1,"h5",[["class","content__type"]],null,null,null,null,null)),(e()(),l.Fb(12,null,[" "," "])),(e()(),l.rb(13,0,null,null,6,"div",[["class","content__text-wrapper"]],null,null,null,null,null)),(e()(),l.rb(14,0,null,null,5,"div",[["class","content__text d-flex fd-column ai-start jc-center"]],null,null,null,null,null)),(e()(),l.rb(15,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),l.Fb(16,null,["",""])),(e()(),l.rb(17,0,null,null,2,"blockquote",[],null,null,null,null,null)),(e()(),l.rb(18,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),l.Fb(19,null,["",""])),(e()(),l.gb(16777216,null,null,1,null,O)),l.qb(21,16384,null,0,o.i,[l.P,l.M],{ngIf:[0,"ngIf"]},null),(e()(),l.rb(22,0,null,null,1,"div",[["class","card__artist"]],[[8,"title",0]],null,null,null,null)),(e()(),l.Fb(23,null,[" Art by "," "]))],function(e,n){var t=n.component;e(n,9,0,323,237,null==t.card?null:t.card.artCrop),e(n,21,0,null==t.card?null:t.card.power)},function(e,n){var t=n.component;e(n,2,0,null==t.card?null:t.card.isColorless,null==t.card?null:t.card.isWhite,null==t.card?null:t.card.isBlue,null==t.card?null:t.card.isBlack,null==t.card?null:t.card.isRed,null==t.card?null:t.card.isGreen,null==t.card?null:t.card.isMultiColored),e(n,6,0,null==t.card?null:t.card.name),e(n,12,0,null==t.card?null:t.card.typeLine),e(n,16,0,null==t.card?null:t.card.text),e(n,19,0,null==t.card?null:t.card.flavorText),e(n,22,0,null==t.card?null:null==t.card.artist?null:t.card.artist.name),e(n,23,0,null==t.card?null:null==t.card.artist?null:t.card.artist.name)})}var _=t("AytR"),C=t("RCfQ"),w=t("gDsI"),j=t("t/Na"),M=t("67Y/"),k=function(e){function n(n){var t=e.call(this,"/cards")||this;return t.httpClient=n,t}return Object(d.c)(n,e),n.prototype.getRandom=function(){var e=new j.g({fromObject:{limit:"1"}});return this.httpClient.get(this.apiEndpoint,{params:e}).pipe(Object(M.a)(function(e){return Object(p.plainToClass)(m,e.rows[0])}))},n}(w.a),P=t("26FU"),E=t("VnD/"),I=function(e){function n(n,t){var l=e.call(this,n,t)||this;return l.scheduler=n,l.work=t,l.pending=!1,l}return d.c(n,e),n.prototype.schedule=function(e,n){if(void 0===n&&(n=0),this.closed)return this;this.state=e;var t=this.id,l=this.scheduler;return null!=t&&(this.id=this.recycleAsyncId(l,t,n)),this.pending=!0,this.delay=n,this.id=this.id||this.requestAsyncId(l,this.id,n),this},n.prototype.requestAsyncId=function(e,n,t){return void 0===t&&(t=0),setInterval(e.flush.bind(e,this),t)},n.prototype.recycleAsyncId=function(e,n,t){if(void 0===t&&(t=0),null!==t&&this.delay===t&&!1===this.pending)return n;clearInterval(n)},n.prototype.execute=function(e,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var t=this._execute(e,n);if(t)return t;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},n.prototype._execute=function(e,n){var t=!1,l=void 0;try{this.work(e)}catch(r){t=!0,l=!!r&&r||new Error(r)}if(t)return this.unsubscribe(),l},n.prototype._unsubscribe=function(){var e=this.id,n=this.scheduler,t=n.actions,l=t.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==l&&t.splice(l,1),null!=e&&(this.id=this.recycleAsyncId(n,e,null)),this.delay=null},n}(function(e){function n(n,t){return e.call(this)||this}return d.c(n,e),n.prototype.schedule=function(e,n){return void 0===n&&(n=0),this},n}(t("pugT").a)),N=function(){function e(n,t){void 0===t&&(t=e.now),this.SchedulerAction=n,this.now=t}return e.prototype.schedule=function(e,n,t){return void 0===n&&(n=0),new this.SchedulerAction(this,e).schedule(t,n)},e.now=function(){return Date.now()},e}(),A=new(function(e){function n(t,l){void 0===l&&(l=N.now);var r=e.call(this,t,function(){return n.delegate&&n.delegate!==r?n.delegate.now():l()})||this;return r.actions=[],r.active=!1,r.scheduled=void 0,r}return d.c(n,e),n.prototype.schedule=function(t,l,r){return void 0===l&&(l=0),n.delegate&&n.delegate!==this?n.delegate.schedule(t,l,r):e.prototype.schedule.call(this,t,l,r)},n.prototype.flush=function(e){var n=this.actions;if(this.active)n.push(e);else{var t;this.active=!0;do{if(t=e.execute(e.state,e.delay))break}while(e=n.shift());if(this.active=!1,t){for(;e=n.shift();)e.unsubscribe();throw t}}},n}(N))(I),S=t("FFOo"),z=t("G5J1"),F=t("F/XL"),R=t("6blF"),q=function(){function e(e,n,t){this.kind=e,this.value=n,this.error=t,this.hasValue="N"===e}return e.prototype.observe=function(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}},e.prototype.do=function(e,n,t){switch(this.kind){case"N":return e&&e(this.value);case"E":return n&&n(this.error);case"C":return t&&t()}},e.prototype.accept=function(e,n,t){return e&&"function"==typeof e.next?this.observe(e):this.do(e,n,t)},e.prototype.toObservable=function(){var e;switch(this.kind){case"N":return Object(F.a)(this.value);case"E":return e=this.error,new R.a(function(n){return n.error(e)});case"C":return Object(z.b)()}throw new Error("unexpected notification kind value")},e.createNext=function(n){return void 0!==n?new e("N",n):e.undefinedValueNotification},e.createError=function(n){return new e("E",void 0,n)},e.createComplete=function(){return e.completeNotification},e.completeNotification=new e("C"),e.undefinedValueNotification=new e("N",void 0),e}(),L=function(){function e(e,n){this.delay=e,this.scheduler=n}return e.prototype.call=function(e,n){return n.subscribe(new B(e,this.delay,this.scheduler))},e}(),B=function(e){function n(n,t,l){var r=e.call(this,n)||this;return r.delay=t,r.scheduler=l,r.queue=[],r.active=!1,r.errored=!1,r}return d.c(n,e),n.dispatch=function(e){for(var n=e.source,t=n.queue,l=e.scheduler,r=e.destination;t.length>0&&t[0].time-l.now()<=0;)t.shift().notification.observe(r);if(t.length>0){var i=Math.max(0,t[0].time-l.now());this.schedule(e,i)}else this.unsubscribe(),n.active=!1},n.prototype._schedule=function(e){this.active=!0,this.destination.add(e.schedule(n.dispatch,this.delay,{source:this,destination:this.destination,scheduler:e}))},n.prototype.scheduleNotification=function(e){if(!0!==this.errored){var n=this.scheduler,t=new T(n.now()+this.delay,e);this.queue.push(t),!1===this.active&&this._schedule(n)}},n.prototype._next=function(e){this.scheduleNotification(q.createNext(e))},n.prototype._error=function(e){this.errored=!0,this.queue=[],this.destination.error(e),this.unsubscribe()},n.prototype._complete=function(){this.scheduleNotification(q.createComplete()),this.unsubscribe()},n}(S.a),T=function(){return function(e,n){this.time=e,this.notification=n}}(),Z=function(){function e(e,n){this.document=e,this.cardsService=n,this.isCardClicked=new P.a(!1)}return e.prototype.ngOnInit=function(){this.randomCard=this.cardsService.getRandom().pipe(Object(M.a)(function(e){return e.text="Click "+e.name+": enter the game.",e})),this.isCardClicked.pipe(Object(E.a)(function(e){return e}),function(e,n){void 0===n&&(n=A);var t=500 instanceof Date&&!isNaN(500)?500-n.now():Math.abs(500);return function(e){return e.lift(new L(t,n))}}()).subscribe(this.signIn.bind(this))},e.prototype.onCardClicked=function(){this.isCardClicked.next(!0)},e.prototype.signIn=function(){var e=new URL("https://accounts.google.com/o/oauth2/v2/auth");e.searchParams.append("access_type","offline"),e.searchParams.append("scope",["https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/userinfo.profile","openid"].join(" ")),e.searchParams.append("response_type","code"),e.searchParams.append("client_id",_.b),e.searchParams.append("redirect_uri",_.c+"/"+C.a.CompleteSignIn.ROOT),this.document.location.href=e.href},e}(),G=l.pb({encapsulation:0,styles:[[".home[_ngcontent-%COMP%]{height:100vh}.home[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]{cursor:pointer;transform:scale(1);transition:transform .2s linear}.home[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]:hover{transform:scale(1.05)}.home[_ngcontent-%COMP%]   .card-wrapper.clicked[_ngcontent-%COMP%]{transform:scale(1)}.home[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   am-card[_ngcontent-%COMP%]{display:block;transform:rotate(0);transition:transform .5s ease-in-out}.home[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%]   am-card.clicked[_ngcontent-%COMP%]{transform:rotate(90deg)}"]],data:{}});function H(e){return l.Hb(2,[(e()(),l.rb(0,0,null,null,6,"div",[["class","home d-flex ai-center jc-center"]],null,null,null,null,null)),(e()(),l.rb(1,0,null,null,5,"div",[["class","card-wrapper"]],[[2,"clicked",null]],null,null,null,null)),l.Cb(131072,o.b,[l.h]),(e()(),l.rb(3,0,null,null,3,"am-card",[],[[2,"clicked",null]],[[null,"click"]],function(e,n,t){var l=!0;return"click"===n&&(l=!1!==e.component.onCardClicked()&&l),l},v,x)),l.qb(4,49152,null,0,y,[],{card:[0,"card"]},null),l.Cb(131072,o.b,[l.h]),l.Cb(131072,o.b,[l.h])],function(e,n){var t=n.component;e(n,4,0,l.Gb(n,4,0,l.Bb(n,5).transform(t.randomCard)))},function(e,n){var t=n.component;e(n,1,0,l.Gb(n,1,0,l.Bb(n,2).transform(t.isCardClicked))),e(n,3,0,l.Gb(n,3,0,l.Bb(n,6).transform(t.isCardClicked)))})}function D(e){return l.Hb(0,[(e()(),l.rb(0,0,null,null,1,"am-home",[],null,null,null,H,G)),l.qb(1,114688,null,0,Z,[o.d,k],null,null)],function(e,n){e(n,1,0)},null)}var V=l.nb("am-home",Z,D,{},{},[]),W=t("ZYCi"),J=function(){return function(){}}(),U=function(){return function(){}}();t.d(n,"HomeModuleNgFactory",function(){return Y});var Y=l.ob(r,[],function(e){return l.zb([l.Ab(512,l.j,l.Z,[[8,[i.a,V]],[3,l.j],l.y]),l.Ab(4608,o.k,o.j,[l.v,[2,o.r]]),l.Ab(4608,k,k,[j.c]),l.Ab(1073742336,o.c,o.c,[]),l.Ab(1073742336,W.p,W.p,[[2,W.u],[2,W.o]]),l.Ab(1073742336,J,J,[]),l.Ab(1073742336,U,U,[]),l.Ab(1073742336,r,r,[]),l.Ab(1024,W.m,function(){return[[{path:"",pathMatch:"full",component:Z}]]},[])])})}}]);