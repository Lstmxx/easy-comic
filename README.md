# easy comic

利用express做的漫画服务，通过通过分析网站接口整理成restful接口，开箱即用。

## 漫画源

- [x] dmzj

## 使用

克隆项目到本地

```bash
git clone git@github.com:Lstmxx/easy-comic.git
```

进入项目文件夹内，安装依赖

```bash
npm install
```

安装完成后运行即可

```bash
npm run dev
```

项目默认端口为8003

## 注意事项

所有接口都是返会一个json数据对象。建议启动项目后用postman来查看返回数据。

```json
{
  "msg": "", // 错误信息
  "data": "", // 返回的数据
  "code": "" // 状态码
}
```

## dmzj

### 获取最新漫画

**GET**

```url
/dmzj/latest/{page} // page为页数，从0开始。
```

### 搜素漫画

**GET**

```url
/dmzj/search/{keyword} // keyword为搜索名。
```

### 获取漫画章节数

**GET**

```url
/dmzj/comic/details/{comicId} // comicId为获取最新漫画或搜索漫画中，对象的id
```

### 获取章节内容

**POST**

```url
/dmzj/chapters/details
```

请使用json作为请求参数

```json
// example
{
  "comicId": "43534",
  "chapterId": "111899"
}

```
