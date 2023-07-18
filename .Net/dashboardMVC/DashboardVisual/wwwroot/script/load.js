//function loadInitialData() {
//    console.log('shree------1');      
//     $.ajax({
//        type: "POST",
//        url: "/api/AjaxAPI/AjaxMethod",
//        data: {},
//        contentType: "application/json; charset=utf-8",
//        dataType: "json",
//        success: function (response) {
//            console.log('shree------10');
//            debugger;
//            var res = response;
//            return res
//        },
//        failure: function (response) {
//            alert('failed');
//            return {}
//        },
//        error: function (response) {
//            alert('error');
//            return {}
//        }
//    });
//}

$(document).ready(function () {
    updateCharts();
});


updateCharts = function () {
    console.log('shree------1');
    $.ajax({
        type: "POST",
        url: "/api/AjaxAPI/AjaxMethod",
        data: {},
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            console.log('shree------10');
            debugger;
            var res = response;
            return res
        },
        failure: function (response) {
            alert('failed');
            return {}
        },
        error: function (response) {
            alert('error');
            return {}
        }
    });
}


// get a promise from testAjax:



