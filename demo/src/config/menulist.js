const menulist = [
    {
        title: "首页", //侧边栏名称
        key: "/home", //对应的path
        icon: "home", //图标名称
        ispublic: true ,//开放 判断页面能否让人看到,
        index:1
    },
    {
        title: "商品",
        key: "/shop",
        icon: "shop",
        index:2,
        children: [
            //子菜单
            {
                title: "品类管理",
                key: "/category",
                icon: "bar",
                index:2-1
            }, {
                title: "商品管理",
                key: "/product",
                icon: "tool",
                index:2-2
            }
        ]
    },{
        title:"用户管理",
        key:"/user",
        icon:"user",
        index:2
    },{
        title:"角色管理",
        key:"/role",
        icon:"safe",
        index:3
    },
    {
        title:"图形图表",
        key:"/chart",
        icon:"area-chart",
        index:4,
        children:[
            {
                title:"柱形图",
                key:"/chart/bar",
                icon:"bar-chart",
                index:4-1,
            },
            {
                title:"折线图",
                key:"/chart/line",
                icon:"line-chart",
                index:4-2,
            },
            {
                title:"饼状图",
                key:"/chart/bing",
                icon:"bing-chart",
                index:4-3,
            }
        ]
    }
]
export default menulist