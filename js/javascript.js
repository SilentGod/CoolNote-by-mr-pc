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

// todo: 加入 笔记本选择 功能
// todo: 添加分类按钮
// todo: 删除分类按钮
// todo: 新建笔记按钮
// todo: 编辑笔记按钮

var notebook = {};
var converter = new showdown.Converter();
var currentNoteBookId;
var currentNoteId;
var myDate = new Date();

$(function() {
	readData();
	init();
});

function readData() {
	notebookTemp = localStorage.getItem("notebook") || '{"tGyU30NP":{"notebookname":"默认","notelist":{}}}';
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
		if (confirm('确定删除“' + notebook[currentNoteBookId].notebookname + "”笔记本？")) {
			delete notebook[currentNoteBookId];
		}
		saveData();
		showNotebook();
		showNoteList();
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
	var notetitle = notebook [currentNoteBookId].notelist[currentNoteId].title;
	$("#note-title").text(notetitle);
	// $("#note-title").text(notetitle.substr(0,20) + ((notetitle.length > 20) ? '...' : ''));
	$("#content").html(converter.makeHtml(notebook[currentNoteBookId].notelist[currentNoteId].content));
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

		noteH2Element.innerText = notebook[currentNoteBookId].notelist[noteindex].title;
		// todo: 显示内容摘要
		// notePElement.innerText = converter.makeHtml(notebook[currentNoteBookId].notelist[noteindex].content);
		notePElement.innerText = notebook[currentNoteBookId].notelist[noteindex].content.replace(/\n/, ' ').substr(0, 60);

		noteLiElement.appendChild(noteH2Element);
		noteLiElement.appendChild(notePElement);
		noteLiElement.id = noteindex;
		notelist.append(noteLiElement);
	}
	$("#note-list > li").click(function() {
		$("#note-list > li").removeClass('current');
		this.className = 'current';
		currentNoteId = this.id;
		showContent();
	});
}