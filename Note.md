Note
===

- [2015暑期训练营RIA启航任务一提交 · Issue #839 · baidu-ife/ife](https://github.com/baidu-ife/ife/issues/839)
- [ife/ria_qihang_01.md at master · baidu-ife/ife](https://github.com/baidu-ife/ife/blob/master/2015_summer/task/ria_qihang_01.md)
- [ife/ria_qihang_02.md at master · baidu-ife/ife](https://github.com/baidu-ife/ife/blob/master/2015_summer/task/ria_qihang_02.md)
- [ife/ria_qihang_03.md at master · baidu-ife/ife](https://github.com/baidu-ife/ife/blob/master/2015_summer/task/ria_qihang_03.md)


### Todo：

1. 笔记内容区域的 浮动实现：标题栏高度可变、内容区随之变化
2. 笔记内容区域的宽度超出问题：单行代码过长时出现
3. 浮动（float）与定位（position）区别及使用
4. note-del-button按钮问题
5. 笔记所在的 笔记本 改变
6. 回收站
    - ~~建立一个ID为"recycle_"的不可见的笔记本，将删除的笔记移入该笔记本中~~ 此法不能处理笔记本的回收
    - 在notebook变量之外，另建一个变量 recycle_
7. 笔记本 删除、重命名
8. 笔记 标签
9. 大量笔记情况下，笔记列表的加载显示
10. 研究indexeddb：[IndexedDB：浏览器端数据库 -- JavaScript 标准参考教程（alpha）](http://javascript.ruanyifeng.com/bom/indexeddb.html)



### 疑问：

1. 全局变量颜色
2. 笔记内容区域的水平

### 已解决：

1. 多行的行内元素垂直居中 http://www.gbtags.com/gb/gbtutorials/147.htm
2. 代码高亮：
  引入：
    ```html
    <link href="http://cdn.bootcss.com/highlight.js/8.6/styles/default.min.css" rel="stylesheet">
    <script type="text/javascript" src="http://cdn.bootcss.com/highlight.js/8.6/highlight.min.js"></script>
    ```
  并在“显示笔记内容”的函数中，加入：
  ``javascript
    $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
   });
   ``
3. 在JS中写入图标字体的编码：
    "\uexxx"
  参考：
    + [Unicode字符百科](http://unicode-table.com/cn/)
    + [HTML 字符集](http://www.w3school.com.cn/tags/html_ref_charactersets.asp)
    + [字符值引用 - 维基百科，自由的百科全书](https://zh.wikipedia.org/zh/%E5%AD%97%E7%AC%A6%E5%80%BC%E5%BC%95%E7%94%A8)
    + [Unicode与JavaScript详解 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2014/12/unicode.html)
    + [字符编码 unicode 及其在javascript 中的使用 - ecalf - 博客园](http://www.cnblogs.com/ecalf/archive/2012/09/04/unicode.html)
4. BUG: 删除笔记本后的 当前笔记本 问题
    获取第一个笔记本的ID，设为当前笔记本的ID



### 作品筛选参考：
- [KimojiMarkdown](https://ife-kimoji.github.io/KimojiMarkdown/html/)
- [Note Manage](https://linkmyth.github.io/)
- [笔记本](https://skybit.github.io/task01/#)



