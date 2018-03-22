
    /*
    * 测试引入插件以及datatable的使用
    * */
    define([
        'app1',
        'datatables',
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
           }
       ])
   })