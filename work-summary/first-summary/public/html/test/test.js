
    /*
    * 测试引入插件以及datatable的使用
    * */
    define([
        'app1',
        'datatables',
        'bootstrap-table',
        'datatables.net-bs',
        'datatables.net-buttons',
        '../../services/test-service',
        '../../commoon/common-directive'
    ],function(myApp){
        myApp.controller('testCtrl', [ '$scope','testService',function($scope,testService){
             console.log('this is testPage');
             $scope.name ='welcome to testPage';

            testService.searchAllMenu().then(function(res){
                console.log(res)
            });
            /*datatable----------------start*/
            var newTable='';
            $scope.list=[];
            $scope.data=[];
            $scope.lists=[];
            $.get('./mock/mock1.json',function(res){
                for(var x in res.data[0]){
                    $scope.list.push(x)
                }
                for(var i=0;i<$scope.list.length;i++){
                    if(i==0){
                        $scope.lists.push( {
                            "sClass": "text-center",
                            "data": $scope.list[i],
                            "render": function (data, type, full, meta) {
                                return '<input type="checkbox"  class="checkchild"  />';
                            }
                        })
                    }
                    $scope.lists.push( { "data": $scope.list[i] });
                }
                if(1){
                    $scope.lists.push( {
                        "sClass": "text-center",
                        "data": '',
                        "render": function (data, type, full, meta) {
                            return '<input type="button" value="delete" class="delete"  />';
                        }
                    })
                }
                //console.log($scope.lists)
                $scope.data = res.data;
                $scope.$apply(function(){
                    newTable=$('#newTable').DataTable({
                        "dom": '<"row"<"col-md-6"B><"col-md-1"><"col-md-5"f>><tip>',
                        "buttons": [
                            {
                                text: '增加',
                                className: 'btn  btn-sm btn-default',
                                action: function (e, dt, node, config) {
                                    $scope.addRole();
                                }
                            }
                        ],
                        "paging": true,//是否开启本地分页
                        "lengthChange": false,//是否允许用户改变表格每页显示的记录数
                        "searching": true,//是否开启本地搜索
                        "serverSide": false,//是否开启服务器模式
                        "retrieve": true,//检索已经存在的Datatables实例(第一次之后可以沿用当前已有的table实例)
                        // "destroy": true,
                        "order": [[1, 'asc']],//排序
                        "data":$scope.data,
                        "columns": $scope.lists,
                        "ordering": false,//是否允许Datatables开启排序
                        "info": false,//控制是否显示表格左下角的信息
                        "autoWidth": false,//控制Datatables是否自适应宽度
                        "iDisplayLength":4,//每页显示数据量
                        "oLanguage": {//界面语言...
                            "oPaginate": {
                                "sPrevious": "&laquo;",
                                "sNext": "&raquo;"
                            } ,
                            "sSearch": "<i class='fa fa-search'></i>",
                            "sSearchPlaceholder": "请输入关键字查找",
                            "sZeroRecords": "没有检索到符合条件的数据",
                            'emptyTable': '无相应数据',
                            'loadingRecords': '加载中...',
                            'processing': '查询中...'
                        }
                    })
                })
            });
            $scope.addRole=function(){

            };
            //删除操作
            $('#newTable').on('click','.delete',function(){
                // newTable.row($(this).parents('tr')).remove().draw();
            });
            //checkbox选择
            $('#newTable').on('click','.checkchild',function(){
                var data = newTable.row($(this).parents('tr')).data();
            });
            /*datatable----------------start*/


            /* bootstrap-table----------------start*/
            //后台分页-----------无法访问...没做后台...haha---------
            // 可参考lib 文件夹下 bootstrap-table-fengzhuagn文件
            function inittalTable(){
                var columns = [
                    // {
                    //     title:'全选',
                    //     field:'select',
                    //     //复选框
                    //     checkbox:true,
                    //     width:25,
                    //     align:'center',
                    //     valign:'middle'
                    // },
                    {
                        title:'加油站名称',
                        field:'gasStationCode',
                        align:'center',
                        //列数据格式化
                        // formatter:operateFormatter
                    },
                    {
                        title:'报警设备',
                        field:'alarmID',
                        // visible:false
                    },
                    {
                        title:'结束加油时间',
                        field:'createTime',
                        // sortable:true
                    },
                    {
                        title:'报警时间',
                        field:'alarmTime',
                        // sortable:true
                    },
                    {
                        title:'报警类型',
                        field:'Tel',
                    },
                    {
                        title:'报警说明',
                        field:'alarmInstructions',
                    }
                ]
                if($('.panel-body div').hasClass('bootstrap-table')){
                    console.log(123);
                    var obt={
                        silent: true, //静默刷新
                    }
                    $('#roleTable').bootstrapTable('refresh',obt)
                }
                $('#roleTable').bootstrapTable({
                    // url:"http://192.168.193.202:8088/report/oil/list",          //要请求数据的文件路径
                    url:$rootScope.url+"/report/alarmInfo/list",
                    contentType: "application/x-www-form-urlencoded",   // 编码类型
                    method: 'get',                                     // 请求方式（*）
                    cache: false,                                       // 是否使用缓存
                    pagination: true,                                   // 是否显示分页（*）
                    sidePagination: "server",                           // 启用服务端分页
                    showRefresh:true,                                   //刷新按钮
                    showColumns:true,
                    locale:'zh-CN',                                     //中文支持,
                    clickToSelect: true,                                //是否启用点击选中行
                    toolbarAlign:'right',                               //工具栏对齐方式
                    buttonsAlign:'right',                               //按钮对齐方式
                    queryParamsType:'limit',                            //查询参数组织方式
                    pageNumber: 1,                                      // 初始化加载第一页，默认第一页
                    pageSize: 10,                                       // 每页的记录行数（*）
                    pageList: [10, 25, 50],                             // 可供选择的每页的行数（*）
                    iconSize: 'outline',                                // 图标大小：undefined默认的按钮尺寸 xs超小按钮sm小按钮lg大按钮
                    toolbar: '#toolbar',                                // 指定工作栏
                    queryParams: queryParams,                           // 传递参数（*）
                    columns:columns,
                    locale:'zh-CN',
                    responseHandler:function(res){
                        //在ajax获取到数据，渲染表格之前，修改数据源
                        console.log(res)
                        return res;
                    }
                });
            }
            //三个参数，value代表该列的值
            function operateFormatter(value,row,index){
                if(value==2){
                    return '<i class="fa fa-lock" style="color:red"></i>'
                }else if(value==1){
                    return '<i class="fa fa-unlock" style="color:green"></i>'
                }else{
                    return '数据错误'
                }
            }
            //请求服务数据时所传参数
            function queryParams(params){
                var beginTime='',endTime='',stationCode='';
                beginTime=$scope.time.split('-')[0];        //开始时间
                endTime=$scope.time.split('-')[1];         //结束时间
                stationCode=$scope.selectOption.stationCode;//站点名代号
                return{
                    //每页多少条数据
                    pageSize: params.limit,
                    //请求第几页
                    pageNum:params.offset / params.limit + 1,
                    oderByColumn:'isAsc',
                    beginTime:beginTime,
                    endTime:endTime,
                    gasStationCode:stationCode
                }
            }
            //查询按钮事件
            $('#search_btn').click(function(){
                $('#mytab').bootstrapTable('refresh', {url: '../index.php/admin/index/userManagement'});
            });
            //后台分页-----------无法访问...没做后台...haha---------


            //前台分页-----------宿便弄一个.............haha---------

            var $table = $('#bootstrapTable');
            $(function () {
                var data = [
                    {
                        "id": 0,
                        "name": "Item 0",
                        "price": "$0"
                    },
                    {
                        "id": 1,
                        "name": "Item 1",
                        "price": "$1"
                    },
                    {
                        "id": 2,
                        "name": "Item 2",
                        "price": "$2"
                    },
                    {
                        "id": 3,
                        "name": "Item 3",
                        "price": "$3"
                    },
                    {
                        "id": 4,
                        "name": "Item 4",
                        "price": "$4"
                    },
                    {
                        "id": 5,
                        "name": "Item 5",
                        "price": "$5"
                    }
                ];
                $table.bootstrapTable({data: data});
            });

            //前台分页-----------宿便弄一个.............haha---------
            /* bootstrap-table----------------end*/


            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('main'));
            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
           }
       ])
   })