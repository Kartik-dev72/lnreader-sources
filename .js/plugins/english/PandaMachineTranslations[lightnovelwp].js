"use strict";var e=this&&this.__awaiter||function(e,t,a,r){return new(a||(a=Promise))((function(s,n){function i(e){try{o(r.next(e))}catch(e){n(e)}}function l(e){try{o(r.throw(e))}catch(e){n(e)}}function o(e){var t;e.done?s(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,l)}o((r=r.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,r,s,n,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return n={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function l(l){return function(o){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;n&&(n=0,l[0]&&(i=0)),i;)try{if(a=1,r&&(s=2&l[0]?r.return:l[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,l[1])).done)return s;switch(r=0,s&&(l=[2&l[0],s.value]),l[0]){case 0:case 1:s=l;break;case 4:return i.label++,{value:l[1],done:0};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!(s=i.trys,(s=s.length>0&&s[s.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!s||l[1]>s[0]&&l[1]<s[3])){i.label=l[1];break}if(6===l[0]&&i.label<s[1]){i.label=s[1],s=l;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(l);break}s[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],r=0}finally{a=s=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:1}}([l,o])}}};Object.defineProperty(exports,"__esModule",{value:1});var a=require("cheerio"),r=require("@libs/fetch"),s=require("@libs/novelStatus"),n=require("@libs/defaultCover"),i=new(function(){function i(e){this.fetchImage=r.fetchFile,this.id=e.id,this.name=e.sourceName,this.icon="multisrc/lightnovelwp/".concat(e.id,".png"),this.site=e.sourceSite,this.version="1.0.3",this.options=e.options,this.filters=e.filters}return i.prototype.getHostname=function(e){return e.split("/")[2]},i.prototype.getCheerio=function(s,n){return e(this,void 0,void 0,(function(){var e,i,l,o;return t(this,(function(t){switch(t.label){case 0:return[4,(0,r.fetchApi)(s)];case 1:if(!(e=t.sent()).ok&&1!=n)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return l=a.load,[4,e.text()];case 2:if(i=l.apply(void 0,[t.sent()]),o=i("title").text().trim(),this.getHostname(s)!=this.getHostname(e.url)||"Bot Verification"==o||"You are being redirected..."==o||"Un instant..."==o||"Just a moment..."==o||"Redirecting..."==o)throw new Error("Captcha error, please open in webview");return[2,i]}}))}))},i.prototype.parseNovels=function(e){var t=this,a=[];return e("div.listupd > article").each((function(r,s){var i=e(s).find("h2").text(),l=e(s).find("img"),o=e(s).find("a").attr("href");o&&a.push({name:i,cover:l.attr("data-src")||l.attr("src")||n.defaultCover,path:o.replace(t.site,"")})})),a},i.prototype.popularNovels=function(a,r){var s=r.filters,n=r.showLatestNovels;return e(this,void 0,void 0,(function(){var e,r,i,l,o,u;return t(this,(function(t){switch(t.label){case 0:for(r in e=this.site+"/series/?page="+a,s||(s={}),n&&(e+="&order=latest"),s)if("object"==typeof s[r].value)for(i=0,l=s[r].value;i<l.length;i++)o=l[i],e+="&".concat(r,"=").concat(o);else s[r].value&&(e+="&".concat(r,"=").concat(s[r].value));return[4,this.getCheerio(e,0)];case 1:return u=t.sent(),[2,this.parseNovels(u)]}}))}))},i.prototype.parseNovel=function(a){var r,i;return e(this,void 0,void 0,(function(){var e,l,o,u,c,p,h,v=this;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,0)];case 1:switch(e=t.sent(),(l={path:a.replace(this.site,""),name:"Untitled"}).name=e("h1.entry-title").text().trim(),o=e("img.wp-post-image"),l.cover=o.attr("data-src")||o.attr("src")||n.defaultCover,(null===(r=e("div.sertostat > span").attr("class"))||void 0===r?void 0:r.toLowerCase())||""){case"completed":l.status=s.NovelStatus.Completed;break;case"ongoing":l.status=s.NovelStatus.Ongoing;break;case"hiatus":l.status=s.NovelStatus.OnHiatus;break;default:l.status=s.NovelStatus.Unknown}return(u=e("div.serl")).length||(u=e("div.spe > span")),u.each((function(){var t=e(this).contents().first().text().replace(":","").trim().toLowerCase(),a=e(this).contents().last().text().trim().toLowerCase();switch(t){case"الكاتب":case"author":case"auteur":case"autor":case"yazar":l.author=a;break;case"الحالة":case"status":case"statut":case"estado":case"durum":switch(a){case"مكتملة":case"completed":case"complété":case"completo":case"completado":case"tamamlandı":l.status=s.NovelStatus.Completed;break;case"مستمرة":case"ongoing":case"en cours":case"em andamento":case"en progreso":case"devam ediyor":l.status=s.NovelStatus.Ongoing;break;case"متوقفة":case"hiatus":case"en pause":case"hiato":case"pausa":case"pausado":case"duraklatıldı":l.status=s.NovelStatus.OnHiatus;break;default:l.status=s.NovelStatus.Unknown}break;case"الفنان":case"artist":case"artiste":case"artista":case"çizer":l.artist=a}})),(c=e(".sertogenre")).length||(c=e(".genxed")),l.genres=c.children("a").map((function(t,a){return e(a).text()})).toArray().join(","),(p=e(".sersys > p").map((function(t,a){return e(a).text().trim()})).toArray()).length||(p=e(".entry-content > p").map((function(t,a){return e(a).text().trim()})).toArray()),l.summary=p.join("\n"),h=[],e(".eplister li").each((function(t,a){var r,s=e(a).find(".epl-num").text()+" "+e(a).find(".epl-title").text(),n=e(a).find("a").attr("href")||"",i=e(a).find(".epl-date").text().trim();switch(e(a).find(".epl-price").text().trim().toLowerCase()){case"free":case"gratuit":case"مجاني":case"livre":case"":r=1;break;default:r=0}r&&h.push({name:s,path:n.replace(v.site,""),releaseTime:i})})),(null===(i=this.options)||void 0===i?void 0:i.reverseChapters)&&h.length&&h.reverse(),l.chapters=h,[2,l]}}))}))},i.prototype.parseChapter=function(a){var r;return e(this,void 0,void 0,(function(){var e,s;return t(this,(function(t){switch(t.label){case 0:return[4,this.getCheerio(this.site+a,0)];case 1:return e=t.sent(),"kolnovel"==this.id&&((s=e("article > style").text().trim().split(",")).push.apply(s,(null===(r=s.pop())||void 0===r?void 0:r.match(/^\.\w+/))||[]),s.map((function(t){return e("p".concat(t)).remove()}))),[2,e(".epcontent p").map((function(t,a){return e(a)})).toArray().join("\n")||""]}}))}))},i.prototype.searchNovels=function(a,r){return e(this,void 0,void 0,(function(){var e,s;return t(this,(function(t){switch(t.label){case 0:return e=this.site+"page/"+r+"/?s="+a,[4,this.getCheerio(e,1)];case 1:return s=t.sent(),[2,this.parseNovels(s)]}}))}))},i}())({id:"pandamtl",sourceSite:"https://pandamtl.com/",sourceName:"Panda Machine Translations",options:{lang:"English",reverseChapters:1},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"Action",value:"action"},{label:"Adult",value:"adult"},{label:"Adventure",value:"adventure"},{label:"Comedy",value:"comedy"},{label:"Ecchi",value:"ecchi"},{label:"Fantasy",value:"fantasy"},{label:"Harem",value:"harem"},{label:"Josei",value:"josei"},{label:"Martial Arts",value:"martial-arts"},{label:"Mature",value:"mature"},{label:"Romance",value:"romance"},{label:"School Life",value:"school-life"},{label:"Sci-fi",value:"sci-fi"},{label:"Seinen",value:"seinen"},{label:"Slice of Life",value:"slice-of-life"},{label:"Smut",value:"smut"},{label:"Sports",value:"sports"},{label:"Supernatural",value:"supernatural"},{label:"Tragedy",value:"tragedy"}]},"type[]":{type:"Checkbox",label:"Type",value:[],options:[{label:"Light Novel (KR)",value:"light-novel-kr"},{label:"Web Novel",value:"web-novel"}]},status:{type:"Picker",label:"Status",value:"",options:[{label:"All",value:""},{label:"Ongoing",value:"ongoing"},{label:"Hiatus",value:"hiatus"},{label:"Completed",value:"completed"}]},order:{type:"Picker",label:"Order by",value:"",options:[{label:"Default",value:""},{label:"A-Z",value:"title"},{label:"Z-A",value:"titlereverse"},{label:"Latest Update",value:"update"},{label:"Latest Added",value:"latest"},{label:"Popular",value:"popular"}]}}});exports.default=i;