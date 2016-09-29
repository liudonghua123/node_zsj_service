# zsj-service的quickstart

这是一个使用node-soap连接金智的主数据接口的quickstart，可以根据自己需要修改参数获取自己所需要的内容，主要修改`args`和`extraHeaders`，详细可参考代码。

### 如何使用

```bash
git clone https://github.com/liudonghua123/node_zsj_service.git
cd node_zsj_service
npm install
node main.js
```

The result may something like this

```bash
node /Users/liudonghua/code/nodejs/node_zsj_service/main.js
The err is null

The result is {"return":{"message":"调用成功!","returnCode":"600000","data":{"columns":["rn","xxdm"],"values":[{"item":["1","00"]}]},"pageNum":0,"pageSize":0,"total":"1"}}

The last request body is "<?xml version=\"1.0\" encoding=\"utf-8\"?><soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"  xmlns:tns=\"http://wscommon.publish.ws.zsj.wisedu.com/\"><soap:Body><ns:getData xmlns:ns=\"http://wscommon.publish.ws.zsj.wisedu.com/\"><arg0><interfaceId>8141</interfaceId><pageNum>1</pageNum><pageSize>10</pageSize><params><key>XXMC</key><value>云南大学</value></params></arg0></ns:getData></soap:Body></soap:Envelope>"

```

### License

Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/