## README

### Introduction

练手的一个小项目，加深对 redux-thunk、react 生命周期及代码分割的理解。

### Document

#### 个人信息展示



个人信息展示:



请求地址：

http://118.31.58.177:8080/Face/signIn/showOne



请求参数：

​		学号：num

​		课程ID：lessonId



示例：

```
http://118.31.58.177:8080/Face/signIn/showOne?num=04173011&lessonId=40289
```



响应信息：

```json
{
	"success": true,
	"data": {
		"identity": 0,
		"num": "04173011",
		"password": "V1A+vSikz/Y=",
		"name": "王帅",
		"academy": "计算机学院",
		"group": "软件1701",
		"gender": "M",
		"image": "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\nbh5YyP32/fr1w+DBg+1287NwOg75VjdOZGOgQBfZgDF0eIEXV02y25gB9dhjj9kua2LA8X0OrESJ\n8zG0GXLEAGPA8TXD04U2MbwY6jzV7YEHHrDPuSyOZ/ByXoYn183XDt/ne+TC3IU7nzO8XbhymXyP\n285qmkHN7nk2St5++207D6trNkq4j5vns/NzvfDCC/YqdGxscB73OV1PArEhwGXx8xG3kQO3id30\nF154IT7++GN7bvw777yDSy+91H5+7ufnNnE7+ZrbSfze3OcQ2Zgo0EU2YAwmHs3NsGJ3NCtQBiuf\n33nnnbarnEHHca56JVdJM6z4PkPKVeUMZ4dh6PZhE7vAGbIcz7DmgWQMYRd2xKDk8l24u2VyPcTA\nZsOC28MqnF3pnN41MriNXK5rVLDHgXdd4+fkMngw3dy5c3H55ZfbXQzTp0+36+Bnd0HLy9FyG7lv\nnsvicQCuQcH18LKyvMAN97XzADr2FHB5DHH2cnA8ezbY0OA2cVvyGznEdYpsVMyPQET+R0xotD37\nBseZcMmZYMyZsM3tvvvuOROeOROwTFU7mFC0j6Z6za1cudLOZyr5nAl6O96E1KppTdjnTNCteu2W\nw2n5npvGvb///vvnJk+enKutrbXL5TaYqjlngjNnQjpnAtNuH3EbTXjb58TnpgHQ9iqX++tf/5oz\noZkzgb9qnaYSt8/5mUwg2+3h+126dMlttdVWdqiqqrLj+Tk48LmbzlTdOVOR22WYBkDOhLR95PLG\njh2bGz9+vN1mbquzZMkS+3jHHXfY+Tp37pz75JNP7Dji52j/b8FxIhsTVegiG7BFixatqjpZQbpz\n0tntzAr15Zdfxvvvv2/HcR87q2fX9WwC0M7LCptVKPH66eZ3b5+794jvu/l4MZYrr7zSXvec3d9c\njjt6nfPwtauY+ZzbxdeszLldrHqJp9ndc889tlp383Jazkec1+3/ZzXPSp5XrZs1a5bdR85qnfNx\n2ZyXPQKcjgcEun3nfJ/7xvk+u9K5K4Jd9BzPz8nKnTgvr4fP/fDcH8/98tx/z+3ld8bPz2Xk4/aJ\nbEwU6CIbsN69e9tA4/5lYhe26yZmGDOEeZtUciHH8OI85EKJ4c9peYMVhh1xGe59dlszkLlvmtM+\n/vjj9mh63iqVIcn3OC3DjwHNeTkd8T2GJ8e5bnduJ08N45H53B43jcMu+vztZVc4Pxe3m8vh52Uj\n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\nQmCC",
		"course": {
			"cdmc": " FF305  ",
			"jcs": "3-4",
			"kcmc": "操作系统A",
			"xm": " 陈莉君",
			"xqjmc": "1",
			"xqmc": " 长安校区东区 ",
			"zcd": "9",
			"className": null,
			"isDou": 0,
			"status": null
		},
		"signTime": "2019-11-04 10:10:40.0",
		"status": 1
	},
	"error": null
}
```

#### 课表

请求地址：

```
http://118.31.58.177:8080/Face/courseTable/select
```

请求参数：

​		班级：className

示例：

```
http://118.31.58.177:8080/Face/courseTable/select?className=%E8%BD%AF%E4%BB%B61701
```


```json
{
	"success": true,
	"data": [null, {
		"cdmc": " FF305  ",
		"jcs": "3-4",
		"kcmc": "操作系统A",
		"xm": " 陈莉君",
		"xqjmc": null,
		"xqmc": " 长安校区东区 ",
		"zcd": "1-16",
		"className": null,
		"isDou": 0,
		"status": null
	}, {
		"cdmc": " FF305  ",
		"jcs": "5-6",
		"kcmc": "Web应用开发",
		"xm": " 张荣",
		"xqjmc": null,
		"xqmc": " 长安校区东区 ",
		"zcd": "1-16",
		"className": null,
		"isDou": 0,
		"status": null
	}, null, null, {
		"cdmc": " FF405  ",
		"jcs": "1-2",
		"kcmc": "编译原理",
		"xm": " 陈燕",
		"xqjmc": null,
		"xqmc": " 长安校区东区 ",
		"zcd": "1-16",
		"className": null,
		"isDou": 0,
		"status": null
	}, {
		"cdmc": " FF505  ",
		"jcs": "3-4",
		"kcmc": "UML与设计模式",
		"xm": " 孟伟君",
		"xqjmc": null,
		"xqmc": " 长安校区东区 ",
		"zcd": "1-16",
		"className": null,
		"isDou": 0,
		"status": null
	}, {
		"cdmc": " FF305  ",
		"jcs": "5-6",
		"kcmc": "微机原理与接口技术E",
		"xm": " 王忠民",
		"xqjmc": null,
		"xqmc": " 长安校区东区 ",
		"zcd": "1-16",
		"className": null,
		"isDou": 0,
		"status": null
	}, null, null, null, {
		"cdmc": " FF305  ",
		"jcs": "3-4",
		"kcmc": "操作系统A",
		"xm": " 陈莉君",
		"xqjmc": null,
		"xqmc": " 长安校区东区 ",
		"zcd": "1-16",
		"className": null,
		"isDou": 0,
		"status": null
	}, null, null, null, {
		"cdmc": " FF405  ",
		"jcs": "1-2",
		"kcmc": "编译原理",
		"xm": " 陈燕",
		"xqjmc": null,
		"xqmc": " 长安校区东区 ",
		"zcd": "1-16",
		"className": null,
		"isDou": 0,
		"status": null
	}, {
		"cdmc": " FF505  ",
		"jcs": "3-4",
		"kcmc": "微机原理与接口技术E",
		"xm": " 王忠民",
		"xqjmc": null,
		"xqmc": " 长安校区东区 ",
		"zcd": "1-16",
		"className": null,
		"isDou": 0,
		"status": null
	}, {
		"cdmc": " FF303  ",
		"jcs": "5-6",
		"kcmc": "Web应用开发",
		"xm": " 张荣",
		"xqjmc": null,
		"xqmc": " 长安校区东区 ",
		"zcd": "1-16",
		"className": null,
		"isDou": 0,
		"status": null
	}, null, null, null, {
		"cdmc": " FF505  ",
		"jcs": "3-4",
		"kcmc": "UML与设计模式",
		"xm": " 孟伟君",
		"xqjmc": null,
		"xqmc": " 长安校区东区 ",
		"zcd": "1-16",
		"className": null,
		"isDou": 0,
		"status": null
	}, null, null, null],
	"error": null
}
```

​		

