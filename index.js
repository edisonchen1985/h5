$(function () {
    // $.alert('欢迎使用。。。')
    $(document).on('click','.alert-text',function (e) {
        let name = e.target.innerText;
        // $.alert('您的'+ name +'为xxx<div>描述信息....</><p><img style="width: 80px;height: 80px" src="bg.png"></p>','关于' + name);
        $.alert('您的'+ name +'为xxx<div>测量的具体描述信息为....</>','关于' + name);
    });
})