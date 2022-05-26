---

title: 说说

date: 2021-08-13 00:22:33

type: bilibili

description: bilibili优质up视频

aside: false

comments: false

top_img: "https://npm.elemecdn.com/chen-ruo-boke/背景/wallhaven-m928jy.webp"
background: url(https://npm.elemecdn.com/chen-ruo-boke/背景/wallhaven-k7268d.webp)
---
<div id='speak'></speak>
<!-- 使用markdown渲染 -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/ispeak-bber/ispeak-bber-md.min.js" charset="utf-8" ></script> 
<!-- 不使用markdown渲染 -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/ispeak-bber/ispeak-bber.min.js" charset="utf-8" ></script>
<!-- 解析微信表情（参考：https://github.com/buddys/qq-wechat-emotion-parser） -->
<!-- <script src="https://cdn.jsdelivr.net/gh/buddys/qq-wechat-emotion-parser@master/dist/qq-wechat-emotion-parser.min.js"></script> -->
<script>
ispeakBber
    .init({
      el: '#speak', // 容器选择器
      name: '陈若 🦄', // 显示的昵称
      envId: 'cloudbase-prepaid-6ehzwd684da903', // 环境id
      region: 'ap-shanghai', // 腾讯云地址，默认为上海
      limit: 10, // 每次加载的条数，默认为5
      avatar: 'https://npm.elemecdn.com/chen-ruo-boke/背景/头像.webp',
      fromColor:'rgb(245, 150, 170)', // 下方标签背景颜色 默认 rgb(245, 150, 170)
      loadingImg: 'https://npm.elemecdn.com/chen-ruo-boke/背景/9f5310a2d38c3cb00a8b1de26afd5c0e.gif', // 自定义loading的图片，示例值为默认值
      dbName:'talks' // 数据的名称，默认talks，避免有人的命名不是这个，所以加入此配置字段。
    })
    .then(function() {
      // 哔哔加载完成后的回调函数，你可以写你自己的功能
      console.log('说说 加载完成')
    })
</script>