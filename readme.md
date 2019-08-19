-------
node，vue-cli3搭建项目前后端连载
-------
启动node和vue-cli项目需要启动两个很麻烦，可以将前后端连载一次性启动和关闭，使用concurrently可以解决这个问题。

* 首先将vue-cli生成的项目放入node项目中取名client

* 在node项目根目录使用安装命令：
`npm i concurrently -s`

* 安装完成后在node项目的package.json中进行以下配置:

 ```
"scripts": {

    "client-install": "npm install --prefix client",

   "client": "npm run serve --prefix client",

   "start": "node server.js",

    "server": "nodemon server.js",

    "dev": "concurrently \"npm run serve\" \"npm run client\""

  },

  ```


 * 配置完成后，启动项目用命令就可以将两个项目都启动起来:
 `npm run dev`


------------

VUE CLI 3 server默认配置所在目录：node_modules\@vue\cli-service\lib\commands\serve.js

------------
