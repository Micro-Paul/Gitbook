let DocSetGenerator = require("docset-generator").DocSetGenerator;
let docSetGenerator = new DocSetGenerator({
  destination: "./output/",
  name: "Micro-Paul",
  documentation: "./_book",
  icon: "./images/note.png",
  entries: [ // entries 可以设置 Docsets 的分类，一般一个分类对应一个 html
    {
      name: "学习笔记",
      type: "Guide",
      path: "./index.html"
    }
  ]
});
docSetGenerator.create();
