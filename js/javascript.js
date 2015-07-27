// Data Structre

/*notebook = {
	"tGyU30LP": {
		notebookname: "设计",
		notelist: {
			"Mw82rFlA": {
				title: "图片排版与字体排版",
				date: "2015-07-20 15:32",
				content: '![Showdown][sd-logo]\n\n[![Build Status](https://travis-ci.org/showdownjs/showdown.svg?branch=master)](https://travis-ci.org/showdownjs/showdown) [![npm version](https://badge.fury.io/js/showdown.svg)](http://badge.fury.io/js/showdown) [![Bower version](https://badge.fury.io/bo/showdown.svg)](http://badge.fury.io/bo/showdown) [![Join the chat at https://gitter.im/showdownjs/showdown](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/showdownjs/showdown?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)\n\n------\n\nShowdown is a Javascript Markdown to HTML converter, based on the original works by John Gruber. Showdown can be used client side (in the browser) or server side (with NodeJs).\n\n## Live DEMO\n\nCheck a live Demo here http://showdownjs.github.io/demo/\n\n## Installation\n\n### Download tarball\n\nYou can download the latest release tarball directly from [releases][releases]\n\n### Bower\n\n\tbower install showdown\n\n### npm (server-side)\n\n\tnpm install showdown'
			},
			"URtdoOXq": {
				title: "图片排版与字体排版1",
				date: "2015-07-20 15:32",
				content: '![Showdown][sd-logo]\n\n[![Build Status](https://travis-ci.org/showdownjs/showdown.svg?branch=master)](https://travis-ci.org/showdownjs/showdown) [![npm version](https://badge.fury.io/js/showdown.svg)](http://badge.fury.io/js/showdown) [![Bower version](https://badge.fury.io/bo/showdown.svg)](http://badge.fury.io/bo/showdown) [![Join the chat at https://gitter.im/showdownjs/showdown](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/showdownjs/showdown?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)\n\n------\n\nShowdown is a Javascript Markdown to HTML converter, based on the original works by John Gruber. Showdown can be used client side (in the browser) or server side (with NodeJs).\n\n## Live DEMO\n\nCheck a live Demo here http://showdownjs.github.io/demo/\n\n## Installation\n\n### Download tarball\n\nYou can download the latest release tarball directly from [releases][releases]\n\n### Bower\n\n\tbower install showdown\n\n### npm (server-side)\n\n\tnpm install showdown'
			}
		}
	},
	"CrqzJPDl": {
		notebookname: "xxx",
		notelist: {
			"IunumE9p": {
				title: "图片排版与字体排版2",
				date: "2015-07-20 15:32",
				content: '![Showdown][sd-logo]\n\n[![Build Status](https://travis-ci.org/showdownjs/showdown.svg?branch=master)](https://travis-ci.org/showdownjs/showdown) [![npm version](https://badge.fury.io/js/showdown.svg)](http://badge.fury.io/js/showdown) [![Bower version](https://badge.fury.io/bo/showdown.svg)](http://badge.fury.io/bo/showdown) [![Join the chat at https://gitter.im/showdownjs/showdown](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/showdownjs/showdown?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)\n\n------\n\nShowdown is a Javascript Markdown to HTML converter, based on the original works by John Gruber. Showdown can be used client side (in the browser) or server side (with NodeJs).\n\n## Live DEMO\n\nCheck a live Demo here http://showdownjs.github.io/demo/\n\n## Installation\n\n### Download tarball\n\nYou can download the latest release tarball directly from [releases][releases]\n\n### Bower\n\n\tbower install showdown\n\n### npm (server-side)\n\n\tnpm install showdown'
			},
			"EBrqZr1H": {
				title: "图片排版与字体排版3",
				date: "2015-07-20 15:32",
				content: '![Showdown][sd-logo]\n\n[![Build Status](https://travis-ci.org/showdownjs/showdown.svg?branch=master)](https://travis-ci.org/showdownjs/showdown) [![npm version](https://badge.fury.io/js/showdown.svg)](http://badge.fury.io/js/showdown) [![Bower version](https://badge.fury.io/bo/showdown.svg)](http://badge.fury.io/bo/showdown) [![Join the chat at https://gitter.im/showdownjs/showdown](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/showdownjs/showdown?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)\n\n------\n\nShowdown is a Javascript Markdown to HTML converter, based on the original works by John Gruber. Showdown can be used client side (in the browser) or server side (with NodeJs).\n\n## Live DEMO\n\nCheck a live Demo here http://showdownjs.github.io/demo/\n\n## Installation\n\n### Download tarball\n\nYou can download the latest release tarball directly from [releases][releases]\n\n### Bower\n\n\tbower install showdown\n\n### npm (server-side)\n\n\tnpm install showdown'
			}
		}
	}
};
*/

// todo: add close button
// todo: 加入 笔记本选择 功能


var notebook = {};
// var converter = new showdown.Converter();
var currentNoteBookId;
var currentNoteId;
var myDate = new Date();

$(function() {
	readData();
	init();
});

function readData() {
	notebookTemp = localStorage.getItem("notebook") || '{"default_":{"notebookname":"默认笔记本","notelist":{"lUeSJKmJ":{"title":"Cool Note介绍","date":"2015-6-27 12:56","content":"### 特性：\\n1. 支持Markdown 及 代码高亮\\n2. 支持xxx\\n3. 支持ooo\\n\\n### Todo:\\n1. 修复bug\\n2. 增加响应式支持\\n3. xxxx\\n\\n"},"uAU3cCEe":{"title":"Markdown语法说明","date":"2015-6-27 13:59","content":"[Markdown 语法说明 (简体中文版)](http://wowubuntu.com/markdown/)\\n================\\n\\n* 概述\\n* 宗旨\\n* 兼容 HTML\\n* 特殊字符自动转换\\n* 区块元素\\n* 段落和换行\\n* 标题\\n* 区块引用\\n* 列表\\n* 代码区块\\n* 分隔线\\n* 区段元素\\n* 链接\\n* 强调\\n* 代码\\n* 图片\\n* 其它\\n* 反斜杠\\n* 自动链接\\n* 感谢\\n* Markdown 免费编辑器"}}}}';
	notebook = JSON.parse(notebookTemp);
}

function saveData() {
	localStorage.setItem('notebook', JSON.stringify(notebook));
}


// 页面初始化
function init() {

	// 设置链接的打开方式为 新标签
	$("a").target = "_blank";

	// 显示笔记本列表
	showNotebook();

	// 设置当前显示的笔记本
	$("#notebook-list > li:first").addClass("current");
	currentNoteBookId = $("#notebook-list > li:first")[0].id;

	// 显示笔记列表
	showNoteList();


	// 按钮：添加笔记本
	$("#add-notebook").click(function() {
		var newnotebookname = prompt("请输入新建笔记本名称：");
		if (newnotebookname) {
			notebook[randomString(8)] = {
				notebookname: newnotebookname,
				notelist: {}
			};
		}
		saveData();
		showNotebook();
	});

	$("#add-note").click(function() {
		$("#content-edit-div").show();
	});

	$("#content-edit-ok").click(editNote);

	$("#content-edit-cancel").click(function() {
		$("#content-edit-div").hide();
		// 清空输入框
		$("#content-edit-div > h1 > input").val("");
		$("#content-edit-textarea").val("");
	});

	// 按钮：编辑笔记
	$("#note-edit-button").click(function() {
		$("#content-edit-div").show();
		// 标记编辑的笔记ID & 所在的笔记本ID
		$("#content-edit-div > h1 > input")[0].id = currentNoteBookId + "-" + currentNoteId;
		$("#content-edit-div > h1 > input").val(notebook[currentNoteBookId].notelist[currentNoteId].title);
		$("#content-edit-textarea").val(notebook[currentNoteBookId].notelist[currentNoteId].content);
	});

	// 删除笔记本
	$("#del-notebook").click(function() {
		if (currentNoteBookId === "default_") {
			alert("无法删除“默认”笔记本！");
			return;
		}
		if (confirm('确定删除“' + notebook[currentNoteBookId].notebookname + "”笔记本？")) {
			delete notebook[currentNoteBookId];
			// 在删除笔记本后，获取第一个笔记本的ID，设为当前笔记本
			// todo: 寻找 其他的获取“对象的第一个属性的key”的方法
			for(var i in notebook){
				currentNoteBookId = i;
				break;
			}
		}
		saveData();
		showNotebook();
		showNoteList();
	});

	$("#note-close-button").click(function() {
		$("#content-div").hide();
	});


}



// 编辑笔记
function editNote() {
	var newNote_bookId;
	var newNoteId;
	if ($("#content-edit-div > h1 > input").val().replace(/(^\s*)|(\s*$)/g, "").length === 0) {
		alert("请输入标题");
		return;
	}
	$("#content-edit-div").hide();

	//判断当前编辑的笔记是已存在的笔记，还是新笔记
	if ($("#content-edit-div > h1 > input")[0].id) {
		newNote_bookId = $("#content-edit-div > h1 > input")[0].id.split('-')[0];
		newNoteId = $("#content-edit-div > h1 > input")[0].id.split('-')[1];
		$("#content-edit-div > h1 > input")[0].id = '';
	} else {
		newNote_bookId = currentNoteBookId;
		newNoteId = randomString(8);
		currentNoteId = newNoteId;
	}

	notebook[newNote_bookId].notelist[newNoteId] = {
		title: $("#content-edit-div > h1 > input").val(),
		date: myDate.getFullYear() + '-' + myDate.getMonth() + '-' + myDate.getDate() + ' ' + myDate.getHours() + ':' + myDate.getMinutes(),
		content: $("#content-edit-textarea").val()
	};

	// 清空输入框
	$("#content-edit-div > h1 > input").val("");
	$("#content-edit-textarea").val("");

	// 保存数据
	saveData();

	// 刷新 笔记本 & 笔记 列表
	showNoteList();
	showNotebook();

	// 显示 新建笔记的内容
	showContent();
}

// 显示笔记本列表
function showNotebook() {
	var notebooklistUl = $("#notebook-list");
	notebooklistUl.empty();
	for (var notebookindex in notebook) {
		var notebookLiElement = document.createElement("li");
		var notebookNode = document.createTextNode(notebook[notebookindex].notebookname + ' (' + count(notebook[notebookindex].notelist) + ')');
		notebookLiElement.appendChild(notebookNode);
		notebookLiElement.id = notebookindex;
		notebookLiElement.onclick = switchNoteBook;
		notebooklistUl.append(notebookLiElement);
	}

	if (currentNoteBookId) {
		$("#" + currentNoteBookId).addClass("current");
	}
}



// 显示笔记内容
function showContent() {
	$("#content-div").show();
	var notetitle = notebook[currentNoteBookId].notelist[currentNoteId].title;
	$("#note-title").text(notetitle);
	// $("#note-title").text(notetitle.substr(0,20) + ((notetitle.length > 20) ? '...' : ''));
	// $("#content").html(converter.makeHtml(notebook[currentNoteBookId].notelist[currentNoteId].content));
	$("#content").html(marked(notebook[currentNoteBookId].notelist[currentNoteId].content));
	// code highlight init
	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block);
	});
}


// 切换笔记本
function switchNoteBook() {
	currentNoteId = null;
	$("#content-div").hide();
	$("#notebook-list > li").removeClass("current");
	$("#" + this.id).addClass('current');
	currentNoteBookId = this.id;
	showNoteList();
}

// 显示笔记列表
function showNoteList() {
	var notelist = $("#note-list");
	notelist.empty();
	for (var noteindex in notebook[currentNoteBookId].notelist) {
		var noteLiElement = document.createElement("li");
		var noteH2Element = document.createElement("H2");
		var notePElement = document.createElement("P");
		var buttonElement = document.createElement("button");

		noteH2Element.innerText = notebook[currentNoteBookId].notelist[noteindex].title;
		// todo: 显示内容摘要
		// notePElement.innerText = converter.makeHtml(notebook[currentNoteBookId].notelist[noteindex].content);
		notePElement.innerText = notebook[currentNoteBookId].notelist[noteindex].content.replace(/\n/, ' ').substr(0, 60);
		buttonElement.innerText = "\ue603";
		buttonElement.className = "iconfont note-del-button";
		noteLiElement.appendChild(noteH2Element);
		noteLiElement.appendChild(notePElement);
		noteLiElement.appendChild(buttonElement);
		noteLiElement.id = noteindex;
		notelist.append(noteLiElement);
	}
	$("#note-list > li").click(function() {
		$("#note-list > li").removeClass('current');
		this.className = 'current';
		currentNoteId = this.id;
		showContent();
	});


    // 按钮：删除笔记
	$(".note-del-button").click(function(e) {
		var this_id = $(this).parent()[0].id;
		if (confirm("删除笔记：" + notebook[currentNoteBookId].notelist[this_id].title + "？")) {
			delete notebook[currentNoteBookId].notelist[this_id];
			showNoteList();
			showNotebook();
			saveData();
		}
		stopBubble(e);

	});
}