yiyan = [
    "每个人都是自己的上帝。如果你自己都放弃自己了，还有谁会救你？强者自救，圣者渡人。",
    "生命就像一盒巧克力，结果往往出人意料。",
    "对，过去是痛楚的，但我认为你要么可以逃避，要么可以向它学习。",
    "不管怎样，明天又是全新的一天。",
    "All life is a game of luck.",
    "应该有更好的方式开始新一天，而不是千篇一律的在每个上午都醒来。",
    "要么忙的死,要么忙的活。",
    "开拓视野，冲破艰险，看见世界，身临其境，贴近彼此，感受生活，这就是生活的目的。",
    "陆上的人喜欢寻根问底，虚度了大好光阴，冬天忧虑夏天的姗姗来迟，夏天忧虑冬天的将至，所以他们不停四处游走，追求一个遥不可及的四季如夏的地方，然而我并不羡慕。",
    "There is something inside, that they can't get to, that they can' t touch. That's yours.",
    "You know some birds are not meant to be caged, their feathers are just too bright."
]
//随机选择一句一言
window.onload = () => document.getElementById("yiyanText").innerHTML = yiyan[Math.floor(Math.random() * yiyan.length)]
//刷新时间
setInterval(_ => {
    let date = new Date()
    document.getElementById("time").innerHTML = date.toLocaleTimeString()
    document.getElementById("date").innerHTML = date.toLocaleDateString()
    document.getElementById("week").innerHTML = "星期" + date.getDay()
}, 200)

if(/Mobi|Android|iPhone/i.test(navigator.userAgent)){
    window.location.replace("./mobile.html")
}
