(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-263590a8"],{"0f0a":function(t,e,a){"use strict";var i=a("4fb2"),n=a.n(i);n.a},"2c46":function(t,e,a){"use strict";var i=a("862d"),n=a.n(i);n.a},3020:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cover",class:{"cover-hover":t.coverHover},on:{mouseover:function(e){t.focus=!0},mouseleave:function(e){t.focus=!1},click:function(e){t.clickCoverToPlay?t.play():t.goTo()}}},[a("div",{staticClass:"cover-container"},[a("div",{staticClass:"shade"},[a("button",{directives:[{name:"show",rawName:"v-show",value:t.focus,expression:"focus"}],staticClass:"play-button",style:t.playButtonStyles,on:{click:function(e){return e.stopPropagation(),t.play()}}},[a("svg-icon",{attrs:{"icon-class":"play"}})],1)]),a("img",{style:t.imageStyles,attrs:{src:t.imageUrl}}),t.coverHover||t.alwaysShowShadow?a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.focus||t.alwaysShowShadow,expression:"focus || alwaysShowShadow"}],staticClass:"shadow",style:t.shadowStyles})]):t._e()],1)])},n=[],s=(a("a9e3"),{props:{id:{type:Number,required:!0},type:{type:String,required:!0},imageUrl:{type:String,required:!0},fixedSize:{type:Number,default:0},playButtonSize:{type:Number,default:22},coverHover:{type:Boolean,default:!0},alwaysShowPlayButton:{type:Boolean,default:!0},alwaysShowShadow:{type:Boolean,default:!1},clickCoverToPlay:{type:Boolean,default:!1},shadowMargin:{type:Number,default:12},radius:{type:Number,default:12}},data:function(){return{focus:!1}},computed:{imageStyles:function(){var t={};return 0!==this.fixedSize&&(t.width=this.fixedSize+"px",t.height=this.fixedSize+"px"),"artist"===this.type&&(t.borderRadius="50%"),t},playButtonStyles:function(){var t={};return t.width=this.playButtonSize+"%",t.height=this.playButtonSize+"%",t},shadowStyles:function(){var t={};return t.backgroundImage="url(".concat(this.imageUrl,")"),"artist"===this.type&&(t.borderRadius="50%"),t}},methods:{play:function(){var t=this.$store.state.player,e={album:t.playAlbumByID,playlist:t.playPlaylistByID,artist:t.playArtistByID};e[this.type].bind(t)(this.id)},goTo:function(){this.$router.push({name:this.type,params:{id:this.id}})}}}),l=s,o=(a("2c46"),a("2877")),r=Object(o["a"])(l,i,n,!1,null,"f1a38860",null);e["a"]=r.exports},"4fb2":function(t,e,a){},"5e45":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{class:t.color,style:t.buttonStyle},[null!==t.iconClass?a("svg-icon",{style:{marginRight:t.iconButton?"0px":"8px"},attrs:{iconClass:t.iconClass}}):t._e(),t._t("default")],2)},n=[],s=(a("a9e3"),{name:"ButtonTwoTone",props:{iconClass:{type:String,default:null},iconButton:{type:Boolean,default:!1},horizontalPadding:{type:Number,default:16},color:{type:String,default:"blue"},backgroundColor:{type:String,default:""},textColor:{type:String,default:""},shape:{type:String,default:"square"}},computed:{buttonStyle:function(){var t={borderRadius:"round"===this.shape?"50%":"8px",padding:"8px ".concat(this.horizontalPadding,"px"),width:"round"===this.shape?"38px":"auto"};return""!==this.backgroundColor&&(t.backgroundColor=this.backgroundColor),""!==this.textColor&&(t.color=this.textColor),t}}}),l=s,o=(a("0f0a"),a("2877")),r=Object(o["a"])(l,i,n,!1,null,"18f7e8ba",null);e["a"]=r.exports},"862d":function(t,e,a){},"8b00":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[void 0!==t.specialPlaylistInfo||t.isLikeSongsPage?t._e():a("div",{staticClass:"playlist-info"},[a("Cover",{attrs:{imageUrl:t._f("resizeImage")(t.playlist.coverImgUrl,1024),showPlayButton:!0,alwaysShowShadow:!0,clickCoverToPlay:!0,fixedSize:288,type:"playlist",id:t.playlist.id,coverHover:!1,playButtonSize:18},nativeOn:{contextmenu:function(e){return t.openMenu(e)}}}),a("div",{staticClass:"info"},[a("div",{staticClass:"title",on:{contextmenu:function(e){return t.openMenu(e)}}},[10===t.playlist.privacy?a("span",{staticClass:"lock-icon"},[a("svg-icon",{attrs:{"icon-class":"lock"}})],1):t._e(),t._v(t._s(t.playlist.name))]),a("div",{staticClass:"artist"},[t._v(" Playlist by "),[5277771961,5277965913,5277969451,5277778542,5278068783].includes(t.playlist.id)?a("span",{staticStyle:{"font-weight":"600"}},[t._v("Apple Music")]):a("a",{attrs:{href:"https://music.163.com/#/user/home?id="+t.playlist.creator.userId,target:"blank"}},[t._v(t._s(t.playlist.creator.nickname))])]),a("div",{staticClass:"date-and-count"},[t._v(" "+t._s(t.$t("playlist.updatedAt"))+" "+t._s(t._f("formatDate")(t.playlist.updateTime))+" · "+t._s(t.playlist.trackCount)+" "+t._s(t.$t("common.songs"))+" ")]),a("div",{staticClass:"description",on:{click:function(e){t.showFullDescription=!0}}},[t._v(" "+t._s(t.playlist.description)+" ")]),a("div",{staticClass:"buttons"},[a("ButtonTwoTone",{attrs:{iconClass:"play"},nativeOn:{click:function(e){return t.playPlaylistByID()}}},[t._v(" "+t._s(t.$t("common.play"))+" ")]),t.playlist.creator.userId!==t.data.user.userId?a("ButtonTwoTone",{attrs:{iconClass:t.playlist.subscribed?"heart-solid":"heart",iconButton:!0,horizontalPadding:0,color:t.playlist.subscribed?"blue":"grey",textColor:t.playlist.subscribed?"#335eea":"",backgroundColor:t.playlist.subscribed?"var(--color-secondary-bg)":""},nativeOn:{click:function(e){return t.likePlaylist(e)}}}):t._e(),a("ButtonTwoTone",{attrs:{iconClass:"more",iconButton:!0,horizontalPadding:0,color:"grey"},nativeOn:{click:function(e){return t.openMenu(e)}}})],1)])],1),void 0!==t.specialPlaylistInfo?a("div",{staticClass:"special-playlist"},[a("div",{staticClass:"title",class:t.specialPlaylistInfo.gradient,on:{contextmenu:function(e){return t.openMenu(e)}}},[t._v(" "+t._s(t.specialPlaylistInfo.name)+" ")]),a("div",{staticClass:"subtitle"},[t._v(t._s(t.playlist.englishTitle)+" · "+t._s(t.playlist.updateFrequency)+" ")]),a("div",{staticClass:"buttons"},[a("ButtonTwoTone",{staticClass:"play-button",attrs:{iconClass:"play",color:"grey"},nativeOn:{click:function(e){return t.playPlaylistByID()}}},[t._v(" "+t._s(t.$t("common.play"))+" ")]),t.playlist.creator.userId!==t.data.user.userId?a("ButtonTwoTone",{attrs:{iconClass:t.playlist.subscribed?"heart-solid":"heart",iconButton:!0,horizontalPadding:0,color:t.playlist.subscribed?"blue":"grey",textColor:t.playlist.subscribed?"#335eea":"",backgroundColor:t.playlist.subscribed?"var(--color-secondary-bg)":""},nativeOn:{click:function(e){return t.likePlaylist(e)}}}):t._e(),a("ButtonTwoTone",{attrs:{iconClass:"more",iconButton:!0,horizontalPadding:0,color:"grey"},nativeOn:{click:function(e){return t.openMenu(e)}}})],1)]):t._e(),t.isLikeSongsPage?a("div",{staticClass:"user-info"},[a("h1",[a("img",{staticClass:"avatar",attrs:{src:t._f("resizeImage")(t.data.user.avatarUrl)}}),t._v(t._s(t.data.user.nickname)+t._s(t.$t("library.sLikedSongs"))+" ")])]):t._e(),a("TrackList",{attrs:{tracks:t.tracks,type:"playlist",id:t.playlist.id,extraContextMenuItem:t.isUserOwnPlaylist?["removeTrackFromPlaylist"]:[]}}),a("Modal",{attrs:{show:t.showFullDescription,close:function(){return t.showFullDescription=!1},showFooter:!1,clickOutsideHide:!0,title:"歌单介绍"}},[t._v(t._s(t.playlist.description))]),a("ContextMenu",{ref:"playlistMenu"},[a("div",{staticClass:"item"},[t._v(t._s(t.$t("contextMenu.playNext")))]),a("div",{staticClass:"item",on:{click:function(e){return t.likePlaylist(!0)}}},[t._v(t._s(t.playlist.subscribed?"从音乐库删除":"保存到音乐库"))]),t.playlist.creator.userId===t.data.user.userId?a("div",{staticClass:"item",on:{click:t.editPlaylist}},[t._v("编辑歌单信息")]):t._e(),t.playlist.creator.userId===t.data.user.userId?a("div",{staticClass:"item",on:{click:t.deletePlaylist}},[t._v("删除歌单")]):t._e()])],1)},n=[],s=(a("4de4"),a("a15b"),a("d81d"),a("b0c0"),a("d0ff")),l=a("f3f3"),o=a("2f62"),r=a("323e"),c=a.n(r),d=a("1e9a"),u=a("fefb"),p=a("5f87"),y=a("5e45"),h=a("6825"),f=a("a1a1"),g=a("3020"),b=a("714b"),v={2829816518:{name:"欧美私人订制",gradient:"gradient-pink-purple-blue"},2890490211:{name:"助眠鸟鸣声",gradient:"gradient-green"},5089855855:{name:"夜的胡思乱想",gradient:"gradient-moonstone-blue"},2888212971:{name:"全球百大DJ",gradient:"gradient-orange-red"},2829733864:{name:"睡眠伴侣",gradient:"gradient-midnight-blue"},2829844572:{name:"洗澡时听的歌",gradient:"gradient-yellow"},2920647537:{name:"还是会想你",gradient:"gradient-dark-blue-midnight-blue"},2890501416:{name:"助眠白噪声",gradient:"gradient-sky-blue"},5217150082:{name:"摇滚唱片行",gradient:"gradient-yellow-red"},2829961453:{name:"古风音乐大赏",gradient:"gradient-fog"},4923261701:{name:"Trance",gradient:"gradient-light-red-light-blue "},5212729721:{name:"欧美点唱机",gradient:"gradient-indigo-pink-yellow"},3103434282:{name:"甜蜜少女心",gradient:"gradient-pink"},2829896389:{name:"日系私人订制",gradient:"gradient-yellow-pink"},2829779628:{name:"运动随身听",gradient:"gradient-orange-red"},2860654884:{name:"独立女声精选",gradient:"gradient-sharp-blue"},898150:{name:"浪漫婚礼专用",gradient:"gradient-pink"},2638104052:{name:"牛奶泡泡浴",gradient:"gradient-fog"},5317236517:{name:"后朋克精选",gradient:"gradient-pink-purple-blue"},2821115454:{name:"一周原创发现",gradient:"gradient-blue-purple"},3136952023:{name:"私人雷达",gradient:"gradient-radar"}},m={name:"Playlist",components:{Cover:g["a"],ButtonTwoTone:y["a"],TrackList:f["a"],Modal:b["a"],ContextMenu:h["a"]},data:function(){return{show:!1,playlist:{id:0,coverImgUrl:"",creator:{userId:""},trackIds:[]},showFullDescription:!1,tracks:[],loadingMore:!1,lastLoadedTrackIndex:9}},created:function(){"likedSongs"===this.$route.name?this.loadData(this.data.likedSongPlaylistID):this.loadData(this.$route.params.id)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll,!0)},computed:Object(l["a"])(Object(l["a"])({},Object(o["d"])(["player","data"])),{},{isLikeSongsPage:function(){return"likedSongs"===this.$route.name},specialPlaylistInfo:function(){return v[this.playlist.id]},isUserOwnPlaylist:function(){return this.playlist.creator.userId===this.data.user.userId&&this.playlist.id!==this.data.likedSongPlaylistID}}),methods:Object(l["a"])(Object(l["a"])(Object(l["a"])({},Object(o["c"])(["appendTrackToPlayerList"])),Object(o["b"])(["playFirstTrackOnList","playTrackOnListByID","showToast"])),{},{playPlaylistByID:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"first",e=this.playlist.trackIds.map((function(t){return t.id}));this.$store.state.player.replacePlaylist(e,this.playlist.id,"playlist",t)},likePlaylist:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];Object(p["b"])()?Object(d["g"])({id:this.playlist.id,t:this.playlist.subscribed?2:1}).then((function(a){200===a.code&&(t.playlist.subscribed=!t.playlist.subscribed,!0===e&&t.showToast(t.playlist.subscribed?"已保存到音乐库":"已从音乐库删除")),Object(d["d"])(t.id,!0).then((function(e){t.playlist=e.playlist}))})):this.showToast("此操作需要登录网易云账号")},loadData:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;this.id=t,Object(d["d"])(this.id,!0).then((function(t){return e.playlist=t.playlist,e.tracks=t.playlist.tracks,c.a.done(),void 0!==a&&a(),e.show=!0,e.lastLoadedTrackIndex=t.playlist.tracks.length-1,e.playlist.trackCount>e.tracks.length&&window.addEventListener("scroll",e.handleScroll,!0),t})).then((function(){e.playlist.trackCount>e.tracks.length&&(e.loadingMore=!0,e.loadMore())}))},loadMore:function(){var t=this,e=this.playlist.trackIds.filter((function(e,a){if(a>t.lastLoadedTrackIndex&&a<=t.lastLoadedTrackIndex+50)return e}));e=e.map((function(t){return t.id})),Object(u["c"])(e.join(",")).then((function(a){var i;(i=t.tracks).push.apply(i,Object(s["a"])(a.songs)),t.lastLoadedTrackIndex+=e.length,t.loadingMore=!1}))},handleScroll:function(t){var e=document.querySelector("html"),a=Math.max(e.scrollHeight,e.scrollHeight),i=t.target.scrollingElement.scrollTop,n=e.innerHeight||Math.min(e.clientHeight,e.clientHeight);if(n+i+200>=a){if(this.lastLoadedTrackIndex+1===this.playlist.trackIds.length||this.loadingMore)return;this.loadingMore=!0,this.loadMore()}},openMenu:function(t){this.$refs.playlistMenu.openMenu(t)},deletePlaylist:function(){var t=this;if(Object(p["b"])()){var e=confirm("确定要删除歌单 ".concat(this.playlist.name,"？"));!0===e&&Object(d["c"])(this.playlist.id).then((function(e){200===e.code?(alert("已删除歌单 ".concat(t.playlist.name)),t.$router.go(-1)):alert("发生错误")}))}else this.showToast("此操作需要登录网易云账号")},editPlaylist:function(){alert("此功能开发中")},removeTrack:function(t){Object(p["b"])()?this.tracks=this.tracks.filter((function(e){return e.id!==t})):this.showToast("此操作需要登录网易云账号")}})},k=m,w=(a("b0f3"),a("2877")),C=Object(w["a"])(k,i,n,!1,null,"655eb1fe",null);e["default"]=C.exports},"8b5f":function(t,e,a){},b0f3:function(t,e,a){"use strict";var i=a("8b5f"),n=a.n(i);n.a},d0ff:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var i=a("b680");function n(t){if(Array.isArray(t))return Object(i["a"])(t)}a("a4d3"),a("e01a"),a("d28b"),a("a630"),a("d3b7"),a("3ca3"),a("ddb0");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var l=a("dde1");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t){return n(t)||s(t)||Object(l["a"])(t)||o()}}}]);
//# sourceMappingURL=chunk-263590a8.6ab50d31.js.map