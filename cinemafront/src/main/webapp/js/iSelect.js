(function(a,b,d){var c=function(f,j,i){this.guid=c.guid++;this.action=b.isFunction(f)?f:b.noop;this.options=b.isPlainObject(f)?f:null;this.callback=b.isFunction(j)?j:b.noop;this.multi=!!i;var g=b("#iOptions"),h=b("#iOptions2");this.list=i?h[0]?h:b("<div id='iOptions2'></div>").appendTo(document.body).keyup(c.optionClick2).click(c.optionClick2).delegate("a","mouseenter",c.optionOver):g[0]?g:b("<div id='iOptions'></div>").appendTo(document.body).click(c.optionClick).delegate("a","mouseenter",c.optionOver)},e="\v"=="v"&&!"1"[0]&&(document.compatMode=="BackCompat");b.extend(c,{guid:0,cache:null,obj:null,hide:function(){var f=c;if(f.cache!==null){b(f.cache).removeClass("iSelectDown");f.cache=null;f.obj.list.stop(true,true).hide();f.obj=null;b(document).unbind("click",f.hide)}},optionClick:function(j){var f=b(j.target).closest("a",this),i,l,k=c,h,g;if(!f[0]||k.cache==null){return}h=b(k.cache);i=h[0].hash;l=f[0].hash;j.target=h[0];j.type="i.change";j.value=l.substr(1);j.option=f[0];h.trigger(j);g=k.obj.callback.call(h[0],j);if(g!==false){h.attr("href",l).find("span").text(f.text())}k.hide();j.preventDefault()},optionOver:function(){var g=b(this).parent(),f=g[0].id==="iOptions"?"iOptionOn":"iOptionHover";g.find("a").removeClass(f);b(this).addClass(f)},optionClick2:function(i){var f=b(i.target).closest("a",this),h,k,j=c,g;if(!f[0]||j.cache==null||(i.type=="keyup"&&i.keyCode!==32)){return}g=b(j.cache);h=g[0].hash;k=[];f.toggleClass("iOptionOn");j.obj.list.find(".iOptionOn").each(function(){k.push(this.hash.substr(1))});if(h!=k.join("|")){g.attr("href","#"+k.join("|"));i.target=g[0];i.type="i.change";i.value=k;i.option=f[0];g.trigger(i);j.obj.callback.call(g[0],i)}return false}});b.extend(c.prototype,{show:function(m){var o=b(m),p=this.options,l,i=[],j,f,n,k,h,g;if(c.cache==o[0]){return}c.hide();c.cache=o.addClass("iSelectDown")[0];c.obj=this;if(p===null){h=this.action.call(o[0]);p=b.isPlainObject(h)?h:p}if(p!==null){j=o[0].hash.substr(1);f=j.split("|");for(l in p){g=this.multi?b.inArray(String(l),f)>=0:j==String(l);i.push("<a hideFocus='true' class='"+(g?"iOptionOn":"")+"' title='"+p[l]+"' href='#"+l+"'><div>"+p[l]+"</div></a>")}this.list.removeClass().html(i.join("")).stop(true,true).removeAttr("style").show().css({visibility:"hidden",left:"-20000px",top:"-20000px"});n=o.offset();n.height=o.outerHeight();n.listH=this.list.outerHeight();if(n.listH>300){n.listH=260}n.t=n.top+n.height;k=Math.max(b(document).height(),b(a).height());if(n.t+n.listH+20>=k){this.list.addClass("upShow");n.t=n.top-n.listH}this.list.removeAttr("style").css({width:o.outerWidth()-2,height:n.listH,left:n.left,top:n.t}).slideDown("fast")}a.setTimeout(function(){b(document).bind("click",c.hide)},16)},hide:function(){c.hide()}});b.fn.extend({iSelect:function(p,o,j){var f=this.length,h=0,k=null,g,m,l;for(;h<f;h++){if(this[h].iSelectID===d){k=k||new c(p,o,j);g=this.eq(h).click(function(i){k.show(this);i.preventDefault()});g[0].iSelectID=k.guid;m=g.css("width");if(/^\d+px$/gi.test(m)){if(e){l=g.find("span");l.css("width",+m.replace(/px/gi,"")-l.css("paddingLeft").replace(/px/gi,"")-l.css("paddingRight").replace(/px/gi,""))}else{g.find("span").css("display","block")}}}}return this.setControlEffect?this.setControlEffect("downSelect"):this},iSelect2:function(f,l,k){var j=this.length,g=0,h=null;for(;g<j;g++){if(this[g].iSelectID===d){h=h||new c(f,l,k);this.eq(g).click(function(o){var n=b(o.target),m=n.parent(),i=n.hasClass("iSelect")?n:m.hasClass("iSelect")?m:null;if(i!==null){h.show(i[0]);o.preventDefault()}})[0].iSelectID=h.guid}}return this}});b.xSelect=function(){c.hide()}})(window,jQuery);