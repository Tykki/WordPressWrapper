var ify=function(){return{entities:function(a){return a.replace(/(&[a-z0-9]+;)/g,function(a){return ENTITIES[a]})},link:function(a){return a.replace(/[a-z]+:\/\/([a-z0-9-_]+\.[a-z0-9-_:~\+#%&\?\/.=]+[^:\.,\)\s*$])/ig,function(a,b){return'<a target="_blank" title="'+a+'" href="'+a+'">'+(b.length>36?b.substr(0,35)+"…":b)+"</a>"})},at:function(a){return a.replace(/(^|[^\w]+)\@([a-zA-Z0-9_]{1,15}(\/[a-zA-Z0-9-_]+)*)/g,function(a,b,c){return b+'@<a target="_blank" href="http://twitter.com/'+c+'">'+c+"</a>"})},hash:function(a){return a.replace(/(^|[^&\w'"]+)\#([a-zA-Z0-9_^"^<]+)/g,function(a,b,c){return a.substr(-1)==='"'||a.substr(-1)=="<"?a:b+'#<a target="_blank"href="http://search.twitter.com/search?q=%23'+c+'">'+c+"</a>"})},clean:function(a){return this.hash(this.at(this.link(a)))}}}();var time=function(){var a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return{time:function(a){var b=a.getHours(),c=a.getMinutes()+"",d="AM";if(b==0){b=12}else if(b==12){d="PM"}else if(b>12){b-=12;d="PM"}if(c.length==1){c="0"+c}return b+":"+c+" "+d},date:function(b){var c=a[b.getMonth()],d=b.getDate()+"",e=~~d,f=b.getFullYear(),g=(new Date).getFullYear(),h="th";if(e%10==1&&d.substr(0,1)!="1"){h="st"}else if(e%10==2&&d.substr(0,1)!="1"){h="nd"}else if(e%10==3&&d.substr(0,1)!="1"){h="rd"}if(d.substr(0,1)=="0"){d=d.substr(1)}return c+" "+d+h+(g!=f?", "+f:"")},shortdate:function(b){var c=b.split(" "),d=Date.parse(c[1]+" "+c[2]+", "+c[5]+" "+c[3]),e=new Date(d),f=a[e.getMonth()],g=e.getDate()+"",h=e.getFullYear(),i=(new Date).getFullYear();if(i===h){return g+" "+f}else{return g+" "+f+(h+"").substr(2,2)}},datetime:function(a){var b=a.split(" "),c=new Date(Date.parse(b[1]+" "+b[2]+", "+b[5]+" "+b[3]));return this.time(c)+" "+this.date(c)},relative:function(a){var b=a.split(" "),c=Date.parse(b[1]+" "+b[2]+", "+b[5]+" "+b[3]),d=new Date(c),e=arguments.length>1?arguments[1]:new Date,f=~~((e.getTime()-c)/1e3),g="";f=f+e.getTimezoneOffset()*60;if(f<=1){g="1 second ago"}else if(f<60){g=f+" seconds ago"}else if(f<120){g="1 minute ago"}else if(f<45*60){g=~~(f/60)+" minutes ago"}else if(f<2*90*60){g="1 hour ago"}else if(f<24*60*60){g=~~(f/3600)+" hours ago"}else{g=this.shortdate(a)}return g}}}();var Twitter={init:function(){this.insertLatestTweets("SC_ExecDirector")},insertLatestTweets:function(a){var b=5;var c="https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name="+a+"&count="+b+"&callback=?";$.getJSON(c,function(b){var c='<marquee behavior="scroll" scrollamount="1" direction="left">';for(var d in b){c+=ify.clean(b[d].text)+' <i><a target="_blank" href="http://twitter.com/'+a+"#status_"+b[d].id_str+'">'+time.relative(b[d].created_at)+"</a></i>   "}c+="</marquee>";$("#twitter p").replaceWith(c);Twitter.fancyMarquee()})},fancyMarquee:function(){$("#twitter marquee").marquee("pointer").mouseover(function(){$(this).trigger("stop")}).mouseout(function(){$(this).trigger("start")}).mousemove(function(a){if($(this).data("drag")==true){this.scrollLeft=$(this).data("scrollX")+($(this).data("x")-a.clientX)}}).mousedown(function(a){$(this).data("drag",true).data("x",a.clientX).data("scrollX",this.scrollLeft)}).mouseup(function(){$(this).data("drag",false)})}};Twitter.init()
