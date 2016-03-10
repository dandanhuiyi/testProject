/**
 * Created by lost on 2016/3/10.
 */
App.controller("studentListController",['$rootScope','$scope','$filter','$http','$cookieStore','$state',function($rootScope,$scope,$filter,$http,$cookieStore,$state){

            ///*  TestCode
    $scope.isLoading=false;
    var students = [
        {
            stuNum:'NJ2016010001',
            stuName:'张三',
            stuGender:1,
            stuClassId:1,
            stuIsPay:0,
            stuMasterId:2,
            stuMasterName:'王老师',
            stuParent:'隔壁老王',
            stuStatus:0,
            stuTel:13891888076,
            ctTime:new Date().toTimeString()
        },
        {
            stuNum:'NJ2016010002',
            stuName:'张三',
            stuGender:0,
            stuClassId:1,
            stuIsPay:0,
            stuMasterId:2,
            stuMasterName:'王老师',
            stuParent:'隔壁老王',
            stuStatus:0,
            stuTel:13891888076,
            ctTime:new Date().toTimeString()
        },
        {
            stuNum:'NJ2016010003',
            stuName:'张三',
            stuGender:1,
            stuClassId:1,
            stuIsPay:0,
            stuMasterId:2,
            stuMasterName:'王老师',
            stuParent:'隔壁老王',
            stuStatus:0,
            stuTel:13891888076,
            ctTime:new Date().toTimeString()
        },
        {
            stuNum:'NJ2016010004',
            stuName:'张三',
            stuGender:1,
            stuClassId:1,
            stuIsPay:0,
            stuMasterId:2,
            stuMasterName:'王老师',
            stuParent:'隔壁老王',
            stuStatus:0,
            stuTel:13891888076,
            ctTime:new Date().toTimeString()
        },
        {
            stuNum:'NJ2016010005',
            stuName:'张三',
            stuGender:1,
            stuClassId:1,
            stuIsPay:0,
            stuMasterId:2,
            stuMasterName:'王老师',
            stuParent:'隔壁老王',
            stuStatus:0,
            stuTel:13891888076,
            ctTime:new Date().toTimeString()
        },
        {
            stuNum:'NJ2016010006',
            stuName:'张三',
            stuGender:1,
            stuClassId:1,
            stuIsPay:0,
            stuMasterId:2,
            stuMasterName:'王老师',
            stuParent:'隔壁老王',
            stuStatus:0,
            stuTel:13891888076,
            ctTime:new Date().toTimeString()
        },
        {
            stuNum:'NJ2016010007',
            stuName:'张三',
            stuGender:1,
            stuClassId:1,
            stuIsPay:0,
            stuMasterId:2,
            stuMasterName:'王老师',
            stuParent:'隔壁老王',
            stuStatus:0,
            stuTel:13891888076,
            ctTime:new Date().toTimeString()
        },
        {
            stuNum:'NJ2016010008',
            stuName:'张三',
            stuGender:1,
            stuClassId:1,
            stuIsPay:0,
            stuMasterId:2,
            stuMasterName:'王老师',
            stuParent:'隔壁老王',
            stuStatus:0,
            stuTel:13891888076,
            ctTime:new Date().toTimeString()
        },
        {
            stuNum:'NJ2016010009',
            stuName:'张三',
            stuGender:1,
            stuClassId:1,
            stuIsPay:0,
            stuMasterId:2,
            stuMasterName:'王老师',
            stuParent:'隔壁老王',
            stuStatus:0,
            stuTel:13891888076,
            ctTime:new Date().toTimeString()
        },
        {
            stuNum:'NJ2016010010',
            stuName:'张三',
            stuGender:1,
            stuClassId:1,
            stuIsPay:0,
            stuMasterId:2,
            stuMasterName:'王老师',
            stuParent:'隔壁老王',
            stuStatus:0,
            stuTel:13891888076,
            ctTime:new Date().toTimeString()
        },
        {
            stuNum:'NJ2016010011',
            stuName:'张三',
            stuGender:1,
            stuClassId:1,
            stuIsPay:0,
            stuMasterId:2,
            stuMasterName:'王老师',
            stuParent:'隔壁老王',
            stuStatus:0,
            stuTel:13891888076,
            ctTime:new Date().toTimeString()
        },
        {
            stuNum:'NJ2016010012',
            stuName:'张三',
            stuGender:1,
            stuClassId:1,
            stuIsPay:0,
            stuMasterId:2,
            stuMasterName:'王老师',
            stuParent:'隔壁老王',
            stuStatus:0,
            stuTel:13891888076,
            ctTime:new Date().toTimeString()
        },
        {
            stuNum:'NJ2016010013',
            stuName:'张三',
            stuGender:1,
            stuClassId:1,
            stuIsPay:0,
            stuMasterId:2,
            stuMasterName:'王老师',
            stuParent:'隔壁老王',
            stuStatus:0,
            stuTel:13891888076,
            ctTime:new Date().toTimeString()
        },
        {
            stuNum:'NJ2016010014',
            stuName:'张三',
            stuGender:1,
            stuClassId:1,
            stuIsPay:0,
            stuMasterId:2,
            stuMasterName:'王老师',
            stuParent:'隔壁老王',
            stuStatus:0,
            stuTel:13891888076,
            ctTime:new Date().toTimeString()
        },
        {
            stuNum:'NJ2016010015',
            stuName:'张三',
            stuGender:1,
            stuClassId:1,
            stuIsPay:0,
            stuMasterId:2,
            stuMasterName:'王老师',
            stuParent:'隔壁老王',
            stuStatus:0,
            stuTel:13891888076,
            ctTime:new Date().toTimeString()
        },
        {
            stuNum:'NJ2016010016',
            stuName:'张三',
            stuGender:1,
            stuClassId:1,
            stuIsPay:0,
            stuMasterId:2,
            stuMasterName:'王老师',
            stuParent:'隔壁老王',
            stuStatus:0,
            stuTel:13891888076,
            ctTime:new Date().toTimeString()
        },
        {
            stuNum:'NJ2016010017',
            stuName:'张三',
            stuGender:1,
            stuClassId:1,
            stuIsPay:0,
            stuMasterId:2,
            stuMasterName:'王老师',
            stuParent:'隔壁老王',
            stuStatus:0,
            stuTel:13891888076,
            ctTime:new Date().toTimeString()
        },
        {
            stuNum:'NJ2016010018',
            stuName:'张三',
            stuGender:1,
            stuClassId:1,
            stuIsPay:0,
            stuMasterId:2,
            stuMasterName:'王老师',
            stuParent:'隔壁老王',
            stuStatus:0,
            stuTel:13891888076,
            ctTime:new Date().toTimeString()
        },
        {
            stuNum:'NJ2016010019',
            stuName:'张三',
            stuGender:1,
            stuClassId:1,
            stuIsPay:0,
            stuMasterId:2,
            stuMasterName:'王老师',
            stuParent:'隔壁老王',
            stuStatus:0,
            stuTel:13891888076,
            ctTime:new Date().toTimeString()
        }
    ];
    $scope.studentList = students;

            //*/


    $scope.showStuDetail=function(stuNum){
        return $state.go('app.stuentDetail',{stuNum:stuNum});
    }












}
]);