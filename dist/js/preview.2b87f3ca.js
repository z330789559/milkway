(function(e){function t(t){for(var o,a,_=t[0],s=t[1],l=t[2],d=0,u=[];d<_.length;d++)a=_[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&u.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);c&&c(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,_=1;_<n.length;_++){var s=n[_];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={preview:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/munitions/";var _=window["webpackJsonp"]=window["webpackJsonp"]||[],s=_.push.bind(_);_.push=t,_=_.slice();for(var l=0;l<_.length;l++)t(_[l]);var c=s;i.push([1,"chunk-vendors"]),n()})({1:function(e,t,n){e.exports=n("2c42")},"2c42":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("99af"),core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("4160"),core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("159b"),core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__),_Users_libaozhong_munitions_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("e260"),_Users_libaozhong_munitions_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_Users_libaozhong_munitions_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__),_Users_libaozhong_munitions_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("e6cf"),_Users_libaozhong_munitions_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_Users_libaozhong_munitions_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__),_Users_libaozhong_munitions_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("cca6"),_Users_libaozhong_munitions_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_Users_libaozhong_munitions_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_5__),_Users_libaozhong_munitions_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("a79d"),_Users_libaozhong_munitions_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_Users_libaozhong_munitions_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_6__),vue__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("8bbf"),vue__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_7__),_utils_loadScript__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("c88b"),_components_tinymce_index_vue__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("31c6");vue__WEBPACK_IMPORTED_MODULE_7___default.a.component("tinymce",_components_tinymce_index_vue__WEBPACK_IMPORTED_MODULE_9__["a"]);var $previewApp=document.getElementById("previewApp"),childAttrs={file:"",dialog:' width="600px" class="dialog-width" v-if="visible" :visible.sync="visible" :modal-append-to-body="false" '};function buildLinks(e){var t="";return e.forEach((function(e){t+='<link href="'.concat(e,'" rel="stylesheet">')})),t}function init(e){if("refreshFrame"===e.data.type){var t=e.data.data,n=childAttrs[t.generateConf.type],o="";Array.isArray(t.links)&&t.links.length>0&&(o=buildLinks(t.links)),$previewApp.innerHTML="".concat(o,"<style>").concat(t.css,'</style><div id="app"></div>'),Array.isArray(t.scripts)&&t.scripts.length>0?Object(_utils_loadScript__WEBPACK_IMPORTED_MODULE_8__["b"])(t.scripts,(function(){newVue(n,t.js,t.html)})):newVue(n,t.js,t.html)}}function newVue(attrs,main,html){main=eval("(".concat(main,")")),main.template="<div>".concat(html,"</div>"),new vue__WEBPACK_IMPORTED_MODULE_7___default.a({components:{child:main},data:function(){return{visible:!0}},template:"<div><child ".concat(attrs,"/></div>")}).$mount("#app")}window.addEventListener("message",init,!1)},"31c6":function(e,t,n){"use strict";var o,r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("textarea",{staticStyle:{visibility:"hidden"},attrs:{id:e.tinymceId}})},i=[],a=(n("99af"),n("d3b7"),n("25f0"),n("c88b")),_=n("5f72"),s=n.n(_);function l(e){if(o)e(o);else{var t=s.a.Loading.service({fullscreen:!0,lock:!0,text:"富文本资源加载中...",spinner:"el-icon-loading",background:"rgba(255, 255, 255, 0.5)"});Object(a["a"])("https://lib.baomitu.com/tinymce/5.3.2/tinymce.min.js",(function(){t.close(),o=tinymce,e(o)}))}}var c=["advlist anchor autolink autosave code codesample directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textpattern visualblocks visualchars wordcount"],d=["code searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent blockquote removeformat subscript superscript codesample hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],u=n("7a1a"),p=1,m={props:{id:{type:String,default:function(){return 1e4===p&&(p=1),"tinymce".concat(+new Date).concat(p++)}},value:{default:""}},data:function(){return{tinymceId:this.id}},mounted:function(){var e=this;l((function(t){n("afc4");var o={selector:"#".concat(e.tinymceId),language:"zh_CN",menubar:"file edit insert view format table",plugins:c,toolbar:d,height:300,branding:!1,object_resizing:!1,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0};o=Object.assign(o,e.$attrs),o.init_instance_callback=function(t){e.value&&t.setContent(e.value),e.vModel(t)},t.init(o)}))},destroyed:function(){this.destroyTinymce()},methods:{vModel:function(e){var t=this,n=Object(u["debounce"])(250,e.setContent);this.$watch("value",(function(t,o){e&&t!==o&&t!==e.getContent()&&("string"!==typeof t&&(t=t.toString()),n.call(e,t))})),e.on("change keyup undo redo",(function(){t.$emit("input",e.getContent())}))},destroyTinymce:function(){if(window.tinymce){var e=window.tinymce.get(this.tinymceId);e&&e.destroy()}}}},g=m,h=n("2877"),f=Object(h["a"])(g,r,i,!1,null,null,null);t["a"]=f.exports},"5f72":function(e,t){e.exports=ELEMENT},"8bbf":function(e,t){e.exports=Vue},afc4:function(e,t){tinymce.addI18n("zh_CN",{Redo:"重做",Undo:"撤销",Cut:"剪切",Copy:"复制",Paste:"粘贴","Select all":"全选","New document":"新文件",Ok:"确定",Cancel:"取消","Visual aids":"网格线",Bold:"粗体",Italic:"斜体",Underline:"下划线",Strikethrough:"删除线",Superscript:"上标",Subscript:"下标","Clear formatting":"清除格式","Align left":"左边对齐","Align center":"中间对齐","Align right":"右边对齐",Justify:"两端对齐","Bullet list":"项目符号","Numbered list":"编号列表","Decrease indent":"减少缩进","Increase indent":"增加缩进",Close:"关闭",Formats:"格式","Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.":"你的浏览器不支持打开剪贴板，请使用Ctrl+X/C/V等快捷键。",Headers:"标题","Header 1":"标题1","Header 2":"标题2","Header 3":"标题3","Header 4":"标题4","Header 5":"标题5","Header 6":"标题6",Headings:"标题","Heading 1":"标题1","Heading 2":"标题2","Heading 3":"标题3","Heading 4":"标题4","Heading 5":"标题5","Heading 6":"标题6",Preformatted:"预先格式化的",Div:"Div",Pre:"Pre",Code:"代码",Paragraph:"段落",Blockquote:"引文区块",Inline:"文本",Blocks:"基块","Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off.":"当前为纯文本粘贴模式，再次点击可以回到普通粘贴模式。",Fonts:"字体","Font Sizes":"字号",Class:"类型","Browse for an image":"浏览图像",OR:"或","Drop an image here":"拖放一张图像至此",Upload:"上传",Block:"块",Align:"对齐",Default:"默认",Circle:"空心圆",Disc:"实心圆",Square:"方块","Lower Alpha":"小写英文字母","Lower Greek":"小写希腊字母","Lower Roman":"小写罗马字母","Upper Alpha":"大写英文字母","Upper Roman":"大写罗马字母","Anchor...":"锚点...",Name:"名称",Id:"标识符","Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores.":"标识符应该以字母开头，后跟字母、数字、破折号、点、冒号或下划线。","You have unsaved changes are you sure you want to navigate away?":"你还有文档尚未保存，确定要离开？","Restore last draft":"恢复上次的草稿","Special character...":"特殊字符...","Source code":"源代码","Insert/Edit code sample":"插入/编辑代码示例",Language:"语言","Code sample...":"示例代码...","Color Picker":"选色器",R:"R",G:"G",B:"B","Left to right":"从左到右","Right to left":"从右到左","Emoticons...":"表情符号...","Metadata and Document Properties":"元数据和文档属性",Title:"标题",Keywords:"关键词",Description:"描述",Robots:"机器人",Author:"作者",Encoding:"编码",Fullscreen:"全屏",Action:"操作",Shortcut:"快捷键",Help:"帮助",Address:"地址","Focus to menubar":"移动焦点到菜单栏","Focus to toolbar":"移动焦点到工具栏","Focus to element path":"移动焦点到元素路径","Focus to contextual toolbar":"移动焦点到上下文菜单","Insert link (if link plugin activated)":"插入链接 (如果链接插件已激活)","Save (if save plugin activated)":"保存(如果保存插件已激活)","Find (if searchreplace plugin activated)":"查找(如果查找替换插件已激活)","Plugins installed ({0}):":"已安装插件 ({0}):","Premium plugins:":"优秀插件：","Learn more...":"了解更多...","You are using {0}":"你正在使用 {0}",Plugins:"插件","Handy Shortcuts":"快捷键","Horizontal line":"水平分割线","Insert/edit image":"插入/编辑图片","Image description":"图片描述",Source:"地址",Dimensions:"大小","Constrain proportions":"保持纵横比",General:"普通",Advanced:"高级",Style:"样式","Vertical space":"垂直边距","Horizontal space":"水平边距",Border:"边框","Insert image":"插入图片","Image...":"图片...","Image list":"图片列表","Rotate counterclockwise":"逆时针旋转","Rotate clockwise":"顺时针旋转","Flip vertically":"垂直翻转","Flip horizontally":"水平翻转","Edit image":"编辑图片","Image options":"图片选项","Zoom in":"放大","Zoom out":"缩小",Crop:"裁剪",Resize:"调整大小",Orientation:"方向",Brightness:"亮度",Sharpen:"锐化",Contrast:"对比度","Color levels":"颜色层次",Gamma:"伽马值",Invert:"反转",Apply:"应用",Back:"后退","Insert date/time":"插入日期/时间","Date/time":"日期/时间","Insert/Edit Link":"插入/编辑链接","Insert/edit link":"插入/编辑链接","Text to display":"显示文字",Url:"地址","Open link in...":"链接打开位置...","Current window":"当前窗口",None:"无","New window":"在新窗口打开","Remove link":"删除链接",Anchors:"锚点","Link...":"链接...","Paste or type a link":"粘贴或输入链接","The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?":"你所填写的URL地址为邮件地址，需要加上mailto:前缀吗？","The URL you entered seems to be an external link. Do you want to add the required http:// prefix?":"你所填写的URL地址属于外部链接，需要加上http://:前缀吗？","Link list":"链接列表","Insert video":"插入视频","Insert/edit video":"插入/编辑视频","Insert/edit media":"插入/编辑媒体","Alternative source":"镜像","Alternative source URL":"替代来源网址","Media poster (Image URL)":"封面(图片地址)","Paste your embed code below:":"将内嵌代码粘贴在下面:",Embed:"内嵌","Media...":"多媒体...","Nonbreaking space":"不间断空格","Page break":"分页符","Paste as text":"粘贴为文本",Preview:"预览","Print...":"打印...",Save:"保存",Find:"查找","Replace with":"替换为",Replace:"替换","Replace all":"全部替换",Previous:"上一个",Next:"下一个","Find and replace...":"查找并替换...","Could not find the specified string.":"未找到搜索内容.","Match case":"区分大小写","Find whole words only":"全字匹配","Spell check":"拼写检查",Ignore:"忽略","Ignore all":"全部忽略",Finish:"完成","Add to Dictionary":"添加到字典","Insert table":"插入表格","Table properties":"表格属性","Delete table":"删除表格",Cell:"单元格",Row:"行",Column:"列","Cell properties":"单元格属性","Merge cells":"合并单元格","Split cell":"拆分单元格","Insert row before":"在上方插入","Insert row after":"在下方插入","Delete row":"删除行","Row properties":"行属性","Cut row":"剪切行","Copy row":"复制行","Paste row before":"粘贴到上方","Paste row after":"粘贴到下方","Insert column before":"在左侧插入","Insert column after":"在右侧插入","Delete column":"删除列",Cols:"列",Rows:"行",Width:"宽",Height:"高","Cell spacing":"单元格外间距","Cell padding":"单元格内边距","Show caption":"显示标题",Left:"左对齐",Center:"居中",Right:"右对齐","Cell type":"单元格类型",Scope:"范围",Alignment:"对齐方式","H Align":"水平对齐","V Align":"垂直对齐",Top:"顶部对齐",Middle:"垂直居中",Bottom:"底部对齐","Header cell":"表头单元格","Row group":"行组","Column group":"列组","Row type":"行类型",Header:"表头",Body:"表体",Footer:"表尾","Border color":"边框颜色","Insert template...":"插入模板...",Templates:"模板",Template:"模板","Text color":"文字颜色","Background color":"背景色","Custom...":"自定义...","Custom color":"自定义颜色","No color":"无","Remove color":"移除颜色","Table of Contents":"内容列表","Show blocks":"显示区块边框","Show invisible characters":"显示不可见字符","Word count":"字数",Count:"计数",Document:"文档",Selection:"选择",Words:"单词","Words: {0}":"字数：{0}","{0} words":"{0} 字",File:"文件",Edit:"编辑",Insert:"插入",View:"视图",Format:"格式",Table:"表格",Tools:"工具","Powered by {0}":"由{0}驱动","Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help":"在编辑区按ALT-F9打开菜单，按ALT-F10打开工具栏，按ALT-0查看帮助","Image title":"图片标题","Border width":"边框宽度","Border style":"边框样式",Error:"错误",Warn:"警告",Valid:"有效","To open the popup, press Shift+Enter":"按Shitf+Enter键打开对话框","Rich Text Area. Press ALT-0 for help.":"编辑区。按Alt+0键打开帮助。","System Font":"系统字体","Failed to upload image: {0}":"图片上传失败: {0}","Failed to load plugin: {0} from url {1}":"插件加载失败: {0} 来自链接 {1}","Failed to load plugin url: {0}":"插件加载失败 链接: {0}","Failed to initialize plugin: {0}":"插件初始化失败: {0}",example:"示例",Search:"搜索",All:"全部",Currency:"货币",Text:"文字",Quotations:"引用",Mathematical:"数学","Extended Latin":"拉丁语扩充",Symbols:"符号",Arrows:"箭头","User Defined":"自定义","dollar sign":"美元符号","currency sign":"货币符号","euro-currency sign":"欧元符号","colon sign":"冒号","cruzeiro sign":"克鲁赛罗币符号","french franc sign":"法郎符号","lira sign":"里拉符号","mill sign":"密尔符号","naira sign":"奈拉符号","peseta sign":"比塞塔符号","rupee sign":"卢比符号","won sign":"韩元符号","new sheqel sign":"新谢克尔符号","dong sign":"越南盾符号","kip sign":"老挝基普符号","tugrik sign":"图格里克符号","drachma sign":"德拉克马符号","german penny symbol":"德国便士符号","peso sign":"比索符号","guarani sign":"瓜拉尼符号","austral sign":"澳元符号","hryvnia sign":"格里夫尼亚符号","cedi sign":"塞地符号","livre tournois sign":"里弗弗尔符号","spesmilo sign":"spesmilo符号","tenge sign":"坚戈符号","indian rupee sign":"印度卢比","turkish lira sign":"土耳其里拉","nordic mark sign":"北欧马克","manat sign":"马纳特符号","ruble sign":"卢布符号","yen character":"日元字样","yuan character":"人民币元字样","yuan character, in hong kong and taiwan":"元字样（港台地区）","yen/yuan character variant one":"元字样（大写）","Loading emoticons...":"加载表情符号...","Could not load emoticons":"不能加载表情符号",People:"人类","Animals and Nature":"动物和自然","Food and Drink":"食物和饮品",Activity:"活动","Travel and Places":"旅游和地点",Objects:"物件",Flags:"旗帜",Characters:"字符","Characters (no spaces)":"字符(无空格)","{0} characters":"{0} 个字符","Error: Form submit field collision.":"错误: 表单提交字段冲突。","Error: No form element found.":"错误: 没有表单控件。",Update:"更新","Color swatch":"颜色样本",Turquoise:"青绿色",Green:"绿色",Blue:"蓝色",Purple:"紫色","Navy Blue":"海军蓝","Dark Turquoise":"深蓝绿色","Dark Green":"深绿色","Medium Blue":"中蓝色","Medium Purple":"中紫色","Midnight Blue":"深蓝色",Yellow:"黄色",Orange:"橙色",Red:"红色","Light Gray":"浅灰色",Gray:"灰色","Dark Yellow":"暗黄色","Dark Orange":"深橙色","Dark Red":"深红色","Medium Gray":"中灰色","Dark Gray":"深灰色","Light Green":"浅绿色","Light Yellow":"浅黄色","Light Red":"浅红色","Light Purple":"浅紫色","Light Blue":"浅蓝色","Dark Purple":"深紫色","Dark Blue":"深蓝色",Black:"黑色",White:"白色","Switch to or from fullscreen mode":"切换全屏模式","Open help dialog":"打开帮助对话框",history:"历史",styles:"样式",formatting:"格式化",alignment:"对齐",indentation:"缩进","permanent pen":"记号笔",comments:"备注","Format Painter":"格式刷","Insert/edit iframe":"插入/编辑框架",Capitalization:"大写",lowercase:"小写",UPPERCASE:"大写","Title Case":"首字母大写","Permanent Pen Properties":"永久笔属性","Permanent pen properties...":"永久笔属性...",Font:"字体",Size:"字号","More...":"更多...","Spellcheck Language":"拼写检查语言","Select...":"选择...",Preferences:"首选项",Yes:"是",No:"否","Keyboard Navigation":"键盘指引",Version:"版本",Anchor:"锚点","Special character":"特殊符号","Code sample":"代码示例",Color:"颜色",Emoticons:"表情","Document properties":"文档属性",Image:"图片","Insert link":"插入链接",Target:"打开方式",Link:"链接",Poster:"封面",Media:"媒体",Print:"打印",Prev:"上一个","Find and replace":"查找和替换","Whole words":"全字匹配",Spellcheck:"拼写检查",Caption:"标题","Insert template":"插入模板"})},c88b:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));n("4160"),n("159b");var o={};function r(e,t){var n=document.getElementById(e),r=t||function(){};if(!n){o[e]=[];var i=document.createElement("script");i.src=e,i.id=e,i.async=1,document.body.appendChild(i);var a="onload"in i?_.bind(i):s.bind(i);a(i)}function _(t){var n=this;t.onload=function(){n.onerror=n.onload=null,o[e].forEach((function(e){e(null,t)})),delete o[e]},t.onerror=function(){n.onerror=n.onload=null,r(new Error("Failed to load ".concat(e)),t)}}function s(t){var n=this;t.onreadystatechange=function(){"complete"!==n.readyState&&"loaded"!==n.readyState||(n.onreadystatechange=null,o[e].forEach((function(e){e(null,t)})),delete o[e])}}o[e].push(r)}function i(e,t){var n=e.shift();e.length?r(n,(function(){return i(e,t)})):r(n,t)}t["a"]=r}});