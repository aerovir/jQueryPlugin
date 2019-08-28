var imageList = [
    'https://avatars.mds.yandex.net/get-pdb/199965/5f645f96-ec2b-42b5-9019-0b6f4c2b8b31/s1200',
    'https://avatars.mds.yandex.net/get-pdb/25978/471b011b-57a6-4d7a-acd4-1196a14b9602/s1200',
    'https://avatars.mds.yandex.net/get-pdb/215709/aef034e5-8c2c-4b56-98b8-1ad1a1a1729c/s1200',
    'https://avatars.mds.yandex.net/get-pdb/28866/8af71988-68b7-4437-94e4-0321999fb823/s1200'
];
var point = 0;

$('.block').click(function () {
    if(point > imageList.length){
        $('img').attr('src', imageList[0])
    }else if(point < imageList.length){
        $('img').attr('src', imageList[point])
        point++
            if(point == imageList.length){
                point = 0
            }
    }
    

})