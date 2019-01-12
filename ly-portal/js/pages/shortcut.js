
const shortcut = {
    template: "\
    <div class='py-container'> \
        <div class='shortcut'> \
            <ul class='fl'> \
               <li class='f-item'>乐优欢迎您！</li> \
               <li class='f-item' v-if='user && user.name'>\
               尊敬的会员，<span style='color: red;'>{{user.name}}</span>\
               </li>\
               <li v-else class='f-item'> \
                   请<a href='javascript:void(0)' @click='gotoLogin'>登录</a>　 \
                   <span><a href='/register.html' target='_blank'>免费注册</a></span> \
               </li> \
           </ul> \
           <ul class='fr'> \
               <li class='f-item'><a href='/home.html' target='_blank'>我的订单</a></li> \
                        <li class='f-item space'></li>   \
               <li class='f-item'>网站导航</li> \
           </ul> \
       </div> \
    </div>\
    ",
    name: "shortcut",
    data() {
        return {
            user: null
        }
    },
    created() {
        ly.http("/auth/verify")
            .then(resp => {
                this.user = resp.data;
            })
    },
    methods: {
        gotoLogin() {
            window.location = "/login.html";
        },
        logout() {
            // 删除cookie中的token即可
            Cookies.remove("LY_TOKEN",{
                path:"/",
                domain:"lyshop.com"
            });
            window.location = 'http://www.lyshop.com'
        }

    }
}
export default shortcut;