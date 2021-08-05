
<div id="customerStatisticsReport">
    <template>
        <div class="">
            <!-- 测试抽奖活动 -->
            <p>抽奖活动小demo</p>
            <div style="position: relative;">
                <!-- 点击时候转动转盘 指针不转 -->
                <div style="width: 100px;height:100px;display: inline-block;" :style="{transform:rotateAngle,transition:rotateTransition == ''?'transform 10s ease-in-out':rotateTransition }">
                    <div style="display: flex;">
                        <div style="background-color:red;height:50px;width:50px;border-top-left-radius: 100%;"></div>
                        <div style="background-color:#20a8d8;height:50px;width:50px;border-top-right-radius: 100%;"></div>
                    </div>
                    <div style="display: flex;">
                        <div style="background-color:blue;height:50px;width:50px;border-bottom-left-radius: 100%;"></div>
                        <div style="background-color:orange;height:50px;width:50px;border-bottom-right-radius: 100%;" ></div>
                    </div>
                </div>
                <div style="width: 20px;height: 20px; background-color: #607d8b; display: inline-block; position: absolute; left: 39px; top: 40px; " @click="luckflag ? pointer():''"></div>
            </div>
          
            <!-- 测试抽奖活动 -->
        </div>
    </template>

</div>
<script>
    const app = new Vue({
        el: "#customerStatisticsReport",
        data: {
            // 抽奖
            luckflag: true,
            rotateAngle: 0, //将要旋转的角度
            startRotatingDegree: 0, //初始旋转角度
            rotateTransition: '', //控制过渡效果
            click_flag: true, //是否可以旋转抽奖

            // 抽奖
        
        },
      
    
        methods: {
            //   1.点击开始抽奖按钮  是否登录 如果没有登录跳到登录页面 
            //   2. 已登录 点击请求接口该用户是否有抽奖机会，若无抽奖机会则提示已无机会抽奖
            //   3. 有机会抽奖 接口返回该用户的奖品  ，
            //   4 奖品对应的角度  指定时间内 ，指定转几圈 后箭头指向奖品对应度数
            //   5 .提示显示中的奖品
            //   6.重置还原 0角度
            //   7.请求接口，活动页面的数据更新
            
            // 点击指针
            pointer() {
                console.log('pointer')
                // const me = this;
                // // 如果没有登录,则前往登录页面
                // if (me.$store.state.loginUser != 'true') {
                //     this.$router.push({
                //         path: '/login.html',
                //         query: {
                //             fancy: 'fancy'
                //         }
                //     })
                //     return
                // }
                // // 抽奖函数
                this.getlotteryPrizeFun()
            },
            // 转动
            rotate(prize) { //目前是只转动转盘
                console.log('rotate')
                if (!this.click_flag) return;
                var type = 0; // 默认为 0  转盘转动
                var randCircle = 12; // 附加多转几圈，2-3
                var duringTime = 5; // 默认为 5s
                var rotateAngle = '';
                switch (prize.name) {
                    case '奖品1':
                        rotateAngle = randCircle * 360 + 90;
                        break;
                    case '奖品2':
                        rotateAngle = randCircle * 360 + 180;
                        break;
                    case '奖品3':
                        rotateAngle = randCircle * 360 + 270;
                        break;
                    case '奖品4':
                        rotateAngle = randCircle * 360 + 360;
                        break;
                  
                }
                this.click_flag = false; // 旋转结束前，不允许再次触发
                if (type == 0) {
                    // 转动盘子
                    var rotateAngle = this.startRotatingDegree + rotateAngle - this.startRotatingDegree % 360; //将要旋转的角度
                    this.startRotatingDegree = rotateAngle; //改变初始旋转的角度
                    this.rotateAngle = "rotate(" + rotateAngle + "deg)"; //真正控制转动角度
                    // 旋转结束后允许再次触发
                    setTimeout(() => {
                        this.click_flag = true;
                        // this.gameOver(prize)
                    }, duringTime * 1000 + 200)
                }
            },
            // 游戏结束
            gameOver() {
                console.log('游戏结束')
                // 游戏结束,重置旋转初始位置
                 
                alert('要还原了')
                this.rotateAngle = "rotate(" + 0 + "deg)"; //真正控制转动角度的,为0,回到初始位置
                this.rotateTransition = 'transform 0.05s ease-in-out' //控制转动过渡效果的
                setTimeout(() => {
                    this.rotateTransition = ''
                }, 100)
                // 中奖弹窗提示
                this.isShowMask = true
                this.winAward = true
                // 更新抽奖次数
                this.getActcivityFancy()
            },
            // 请求活动页面数据
            getActcivityFancy() {
                console.log('重新请求')
                // const me = this;
                // $.Ajax.post({
                //     url: '/common/activity/getActivityPageInfo.json',
                //     callBack(res) {
                //         me.num = res.data.lotteryNum; //剩余抽奖次数
                //     }
                // })
            },
            //请求点击抽奖数据,中奖操作
            getlotteryPrizeFun() {
                // 请求接口控制是否可抽奖以及奖品是什么
                this.rotate({
                    name: '奖品3'
                })
                // const me = this;
                // $.Ajax.post({
                //     url: '/user/activity/lotteryPrize.json',
                //     callBack(res) {
                //         // console.log(res)
                //         me.winId = res.data.join_id;
                //         me.prize = res.data.prize;
                //         me.prizeArr = me.srcArr.filter(item => {
                //             console.log()
                //             if (item.title == me.prize.name) return true
                //             return false
                //         })
                //         me.rotate(res.data.prize)
                //     },
                //     fail: false,
                //     failBack() {
                //         me.tipMessage = '您的抽奖次数为0,无法参与抽奖';
                //         me.noChanceAndNotJoin = true;
                //         me.isShowMask = true;
                //     }
                // })
            },
            // 抽奖活动
       
        },
    })
</script>