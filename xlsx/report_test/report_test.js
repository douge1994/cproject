
var app = angular.module("myapp",[])
    .controller('mainCtrl',function($scope){
        /*
         FileReader共有4种读取方法：
         1.readAsArrayBuffer(file)：将文件读取为ArrayBuffer。
         2.readAsBinaryString(file)：将文件读取为二进制字符串
         3.readAsDataURL(file)：将文件读取为Data URL
         4.readAsText(file, [encoding])：将文件读取为文本，encoding缺省值为'UTF-8'
         */
        $scope.name = "wang";
        var wb;//读取完成的数据
        var rABS = false; //是否将文件读取为二进制字符串

        $scope.importf = function(obj){//导入
            if(!obj.files) {
                return;
            }
            var f = obj.files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
                var data = e.target.result;
                if(rABS) {
                    wb = XLSX.read(btoa(fixdata(data)), {//手动转化
                        type: 'base64'
                    });
                } else {
                    wb = XLSX.read(data, {
                        type: 'binary'
                    });
                }
                //wb.SheetNames[0]是获取Sheets中第一个Sheet的名字
                //wb.Sheets[Sheet名]获取第一个Sheet的数据
                document.getElementById("demo").innerHTML= JSON.stringify( XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]) );
            };
            if(rABS) {
                reader.readAsArrayBuffer(f);
            } else {
                reader.readAsBinaryString(f);
            }
        }

        function fixdata(data) { //文件流转BinaryString
            var o = "",
                l = 0,
                w = 10240;
            for(; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
            o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
            return o;
        }



        var jsono = [{ //测试数据
            "保质期临期预警(天)": "adventLifecycle",
            "商品标题": "title",
            "建议零售价": "defaultPrice",
            "高(cm)": "height",
            "商品描述": "Description",
            "保质期禁售(天)": "lockupLifecycle",
            "商品名称": "skuName",
            "商品简介": "brief",
            "宽(cm)": "width",
            "阿达": "asdz",
            "货号": "goodsNo",
            "商品条码": "skuNo",
            "商品品牌": "brand",
            "净容积(cm^3)": "netVolume",
            "是否保质期管理": "isShelfLifeMgmt",
            "是否串号管理": "isSNMgmt",
            "商品颜色": "color",
            "尺码": "size",
            "是否批次管理": "isBatchMgmt",
            "商品编号": "skuCode",
            "商品简称": "shortName",
            "毛重(g)": "grossWeight",
            "长(cm)": "length",
            "英文名称": "englishName",
            "净重(g)": "netWeight",
            "商品分类": "categoryId",
            "这里超过了": 1111.0,
            "保质期(天)": "expDate"
        }];

        $scope.data1 = jsono;
        var tmpDown; //导出的二进制对象
        $scope.downloadExl = function(json, type) {
            json=jsono;
            console.log(jsono);

            var tmpdata = json[0];

            return false;
            json.unshift({});
            var keyMap = []; //获取keys
            for (var k in tmpdata) {
                keyMap.push(k);
                json[0][k] = k;
            }
            var tmpdata = [];//用来保存转换好的json
            json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
                v: v[k],
                position: (j > 25 ? getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
            }))).reduce((prev, next) => prev.concat(next)).forEach((v, i) => tmpdata[v.position] = {
                v: v.v
            });
            var outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
            var tmpWB = {
                SheetNames: ['mySheet'], //保存的表标题
                Sheets: {
                    'mySheet': Object.assign({},
                        tmpdata, //内容
                        {
                            '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] //设置填充区域
                        })
                }
            };
            tmpDown = new Blob([s2ab(XLSX.write(tmpWB,
                {bookType: (type == undefined ? 'xlsx':type),bookSST: false, type: 'binary'}//这里的数据是用来定义导出的格式类型
            ))], {
                type: ""
            }); //创建二进制对象写入转换好的字节流
            var href = URL.createObjectURL(tmpDown); //创建对象超链接
            document.getElementById("hf").href = href; //绑定a标签
            document.getElementById("hf").click(); //模拟点击实现下载
            setTimeout(function() { //延时释放
                URL.revokeObjectURL(tmpDown); //用URL.revokeObjectURL()来释放这个object URL
            }, 100);
        }

        function s2ab(s) { //字符串转字符流
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
// 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
        function getCharCol(n) {
            let temCol = '',
                s = '',
                m = 0
            while (n > 0) {
                m = n % 26 + 1
                s = String.fromCharCode(m + 64) + s
                n = (n - m) / 26
            }
            return s
        }

        /*if(typeof require !== 'undefined') XLSX = require('xlsx');
         var workbook = XLSX.readFile('test.xlsx');

         var worksheet = XLSX.utils.table_to_book(document.getElementById('tableau'));
         var url = "test_files/formula_stress_test_ajax.xlsx";
         var oReq = new XMLHttpRequest();
         oReq.open("GET", url, true);
         oReq.responseType = "arraybuffer";
         oReq.onload = function(e) {
         var arraybuffer = oReq.response;
         /!* convert data to binary string *!/
         var data = new Uint8Array(arraybuffer);
         var arr = new Array();
         for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
         var bstr = arr.join("");
         /!* Call XLSX *!/
         var workbook = XLSX.read(bstr, {type:"binary"});
         /!* DO SOMETHING WITH workbook HERE *!/
         }

         oReq.send();


         ////
         /!* processing array buffers, only required for readAsArrayBuffer *!/
         function fixdata(data) {
         var o = "", l = 0, w = 10240;
         for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
         o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
         return o;
         }

         var rABS = true; // true: readAsBinaryString ; false: readAsArrayBuffer
         /!* set up drag-and-drop event *!/
         function handleDrop(e) {
         e.stopPropagation();
         e.preventDefault();
         var files = e.dataTransfer.files;
         var i,f;
         for (i = 0; i != files.length; ++i) {
         f = files[i];
         var reader = new FileReader();
         var name = f.name;
         reader.onload = function(e) {
         var data = e.target.result;

         var workbook;
         if(rABS) {
         /!* if binary string, read with type 'binary' *!/
         workbook = XLSX.read(data, {type: 'binary'});
         } else {
         /!* if array buffer, convert to base64 *!/
         var arr = fixdata(data);
         workbook = XLSX.read(btoa(arr), {type: 'base64'});
         }

         /!* DO SOMETHING WITH workbook HERE *!/
         };
         if(rABS) reader.readAsBinaryString(f);
         else reader.readAsArrayBuffer(f);
         }
         }
         var drop_dom_element = document.getElementById("#div1");
         drop_dom_element.addEventListener('drop', handleDrop, false);

         ////
         /!* fixdata and rABS are defined in the drag and drop example *!/
         function handleFile(e) {
         var files = e.target.files;
         var i,f;
         for (i = 0; i != files.length; ++i) {
         f = files[i];
         var reader = new FileReader();
         var name = f.name;
         reader.onload = function(e) {
         var data = e.target.result;

         var workbook;
         if(rABS) {
         /!* if binary string, read with type 'binary' *!/
         workbook = XLSX.read(data, {type: 'binary'});
         } else {
         /!* if array buffer, convert to base64 *!/
         var arr = fixdata(data);
         workbook = XLSX.read(btoa(arr), {type: 'base64'});
         }

         /!* DO SOMETHING WITH workbook HERE *!/
         };
         reader.readAsBinaryString(f);
         }
         }
         var input_dom_element = document.getElementById('#div2')
         input_dom_element.addEventListener('change', handleFile, false);*/

        /*
         var jsono = [{ //测试数据
         "保质期临期预警(天)": "保质期临期预警(天)",
         "商品标题": "商品标题",
         "建议零售价": "建议零售价",
         "高(cm)": "高(cm)",
         "商品描述": "商品描述",
         "保质期禁售(天)": "保质期禁售(天)",
         "商品名称": "商品名称",
         "商品简介": "商品简介",
         "宽(cm)": "宽(cm)",
         "阿达": "阿达",
         "货号": "货号",
         "商品条码": "商品条码",
         "商品品牌": "商品品牌",
         "净容积(cm^3)": "净容积(cm^3)",
         "是否保质期管理": "是否保质期管理",
         "是否串号管理": "是否串号管理",
         "商品颜色": "商品颜色",
         "尺码": "尺码",
         "是否批次管理": "是否批次管理",
         "商品编号": "商品编号",
         "商品简称": "商品简称",
         "毛重(g)": "毛重(g)",
         "长(cm)": "长(cm)",
         "英文名称": "英文名称",
         "净重(g)": "净重(g)",
         "商品分类": "商品分类",
         "这里超过了": "这里超过了",
         "保质期(天)": "保质期(天)"
         }, {
         "保质期临期预警(天)": "adventLifecycle",
         "商品标题": "title",
         "建议零售价": "defaultPrice",
         "高(cm)": "height",
         "商品描述": "Description",
         "保质期禁售(天)": "lockupLifecycle",
         "商品名称": "skuName",
         "商品简介": "brief",
         "宽(cm)": "width",
         "阿达": "asdz",
         "货号": "goodsNo",
         "商品条码": "skuNo",
         "商品品牌": "brand",
         "净容积(cm^3)": "netVolume",
         "是否保质期管理": "isShelfLifeMgmt",
         "是否串号管理": "isSNMgmt",
         "商品颜色": "color",
         "尺码": "size",
         "是否批次管理": "isBatchMgmt",
         "商品编号": "skuCode",
         "商品简称": "shortName",
         "毛重(g)": "grossWeight",
         "长(cm)": "length",
         "英文名称": "englishName",
         "净重(g)": "netWeight",
         "商品分类": "categoryId",
         "这里超过了": 1111.0,
         "保质期(天)": "expDate"
         }];

         function downloadExl(json, type) {
         var tmpDown; //导出的二进制对象
         var keyMap = []; //获取键
         for(k in json[0]) {
         keyMap.push(k);
         }
         var tmpdata = []; //用来保存转换好的json
         json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {  //运用ES6内容
         v: v[k],
         position: (j > 25 ? getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
         }))).reduce((prev, next) => prev.concat(next)).forEach((v, i) => tmpdata[v.position] = {
         v: v.v
         });
         //              json.map(function(v, i) {  //运用ES5内容
         //                  return keyMap.map(function(k, j) {
         //                      return Object.assign({}, {
         //                          v: v[k],
         //                          position: (j > 25 ? getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
         //                      });
         //                  });
         //              }).reduce(function(prev, next) {
         //                  return prev.concat(next);
         //              }).forEach(function(v, i) {
         //                  tmpdata[v.position] = {
         //                      v: v.v
         //                  }
         //              });
         var outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
         var tmpWB = {
         SheetNames: ['mySheet'], //保存的表标题
         Sheets: {
         'mySheet': Object.assign({},
         tmpdata, //内容
         {
         '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] //设置填充区域
         })
         }
         };
         tmpDown = new Blob([s2ab(XLSX.write(tmpWB, {
         bookType: (type == undefined ? 'xlsx' : type),
         bookSST: false,
         type: 'binary'
         } //这里的数据是用来定义导出的格式类型
         ))], {
         type: ""
         }); //创建二进制对象写入转换好的字节流
         var href = URL.createObjectURL(tmpDown); //创建对象超链接
         document.getElementById("hf").href = href; //绑定a标签
         document.getElementById("hf").click(); //模拟点击实现下载
         setTimeout(function() { //延时释放
         URL.revokeObjectURL(tmpDown); //用URL.revokeObjectURL()来释放这个object URL
         }, 100);
         }

         function s2ab(s) { //字符串转字符流
         var buf = new ArrayBuffer(s.length);
         var view = new Uint8Array(buf);
         for(var i = 0; i != s.length; ++i) {
         view[i] = s.charCodeAt(i) & 0xFF;
         }
         return buf;
         }
         // 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
         function getCharCol(n) {
         let temCol = '',
         s = '',
         m = 0
         while(n > 0) {
         m = n % 26 + 1
         s = String.fromCharCode(m + 64) + s
         n = (n - m) / 26
         }
         return s
         }

         var f=document.getElementById("file");
         f.onchange=function(ev){
         var obj =window.event||ev; //兼容浏览器
         var files=obj.target.files;
         if(files.length>0){
         var file=files[0]; //取得导入的第一个文件
         var reader=new FileReader(); //创建FileReader对象
         reader.readAsText(file,"gbk"); //设置读取方式为Text，字符编码为GBK
         reader.onload=function(){
         var result=this.result; //读取成功后结果存放在result属性中
         console.log(result);
         }
         }
         };
         var f=document.getElementById("upload");
         f.onchange=function(){
         var files=this.files;
         if(files.length>0){
         var file=files[0];
         readDataByType(file);
         }
         };
         function readDataByType(file){
         var name=file.name, //取得File的名字
         nameArr=name.split("."),
         type=nameArr[nameArr.length-1], //取得文件的扩展名
         reader=new FileReader();
         switch(type){
         case "xls":
         case "xlsx":
         reader.readAsBinaryString(file); //以二进制方式读取文件
         reader.onload=function(f){
         var result=this.result;
         var wb=XLSX.read(result,{type:"binary"}); //以二进制方式读取excel文件
         var sheet=wb.Sheets[wb.SheetNames[0]]; //通过第一个sheet表名找到对应的sheet表
         var jsono=XLSX.utils.sheet_to_row_object_array(sheet); //读取sheet表中的数据为JSON格式
         var data="";
         for(var i in jsono){ //遍历JSON对象
         var str="";
         for(var item in jsono[i]){
         str+=jsono[i][item]+"  ";
         }
         data+=str+"\n";
         }
         console.log(data);
         }
         ;break;
         }
         }*/


        /*
         function s2ab(s) {
         if(typeof ArrayBuffer !== 'undefined') {
         var buf = new ArrayBuffer(s.length);
         var view = new Uint8Array(buf);
         for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
         return buf;
         } else {
         var buf = new Array(s.length);
         for (var i=0; i!=s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;
         return buf;
         }
         }

         function export_table_to_excel(id, type, fn) {
         var wb = XLSX.utils.table_to_book(document.getElementById(id), {sheet:"Sheet JS"});
         var wbout = XLSX.write(wb, {bookType:type, bookSST:true, type: 'binary'});
         var fname = fn || 'test.' + type;
         try {
         saveAs(new Blob([s2ab(wbout)],{type:"application/octet-stream"}), fname);
         } catch(e) { if(typeof console != 'undefined') console.log(e, wbout); }
         return wbout;
         }

         function doit(type, fn) { return export_table_to_excel('table', type || 'xlsx', fn); }
         */
    });








