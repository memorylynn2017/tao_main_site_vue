<template>
    <div class="app">
        <!-- 头部 -->
        <headBar :headTitle="headTitle"></headBar>

        <div class="mui-content order mb50">
            <div class="mui-slider te-slider">
                <div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted te-slider-nav">
                    <a class="mui-control-item mui-active" href="#all">
                        全部
                    </a>
                    <a class="mui-control-item" href="#pay">
                        待付款
                    </a>
                    <a class="mui-control-item" href="#receive">
                        待收货
                    </a>
                    <a class="mui-control-item" href="#ok">
                        已完成
                    </a>
                    <a class="mui-control-item" href="#cancel">
                        已取消
                    </a>
                </div>
                <div id="sliderProgressBar" class="mui-slider-progress-bar mui-col-xs-2 te-slider-line"></div>
                <div class="mui-slider-group te-slider-con">
                    <div id="all" class="mui-slider-item mui-control-content mui-active">
                        <ul class="order-list mui-table-view">
                            <li class="mui-table-view-cell mui-media">
                                <h5 class="mui-content-padded clearfix te-info">
                                    <div class="mui-pull-left te-ordernum">
                                        <span>订单</span>
                                        <span class="num">9000003</span>
                                    </div>
                                    <span class="mui-pull-right te-date">2017-08-21 11:36</span>
                                </h5>
                                <a class="te-pics" href="javascript:;">
                                    <ul class="mui-table-view mui-grid-view top-noline bottom-noline">
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1190/11902879/raw_1502867980.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1194/11949886/raw_1502972473.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1145/11455325/raw_1501411974.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-pull-right">
                                            <span class="allnum">
                                                共<span>2</span>件
                                                <span class="mui-icon mui-icon-forward"></span>
                                            </span>
                                        </li>
                                    </ul>
                                </a>
                                <h5 class="mui-content-padded clearfix te-fun">
                                    <div class="mui-pull-left te-count">
                                        <span>合计</span>
                                        <span class="title">￥3706.00</span>
                                    </div>
                                    <a class="mui-btn mui-pull-right te-btn red-block" href="javascript:;">立即付款</a>
                                </h5>
                            </li>
                            <li class="mui-table-view-cell mui-media">
                                <h5 class="mui-content-padded clearfix te-info">
                                    <div class="mui-pull-left te-ordernum">
                                        <span>订单</span>
                                        <span class="num">9000003</span>
                                    </div>
                                    <span class="mui-pull-right te-date">2017-08-21 11:36</span>
                                </h5>
                                <a class="te-pics" href="javascript:;">
                                    <ul class="mui-table-view mui-grid-view top-noline bottom-noline">
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1190/11902879/raw_1502867980.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1194/11949886/raw_1502972473.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1145/11455325/raw_1501411974.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-pull-right">
                                            <span class="allnum">
                                                共<span>2</span>件
                                                <span class="mui-icon mui-icon-forward"></span>
                                            </span>
                                        </li>
                                    </ul>
                                </a>
                                <h5 class="mui-content-padded clearfix te-fun">
                                    <div class="mui-pull-left te-count">
                                        <span>合计</span>
                                        <span class="title">￥3706.00</span>
                                    </div>
                                    <a class="mui-btn mui-pull-right te-btn red-block" href="javascript:;">立即付款</a>
                                </h5>
                            </li>
                            <li class="mui-table-view-cell mui-media">
                                <h5 class="mui-content-padded clearfix te-info">
                                    <div class="mui-pull-left te-ordernum">
                                        <span>订单</span>
                                        <span class="num">9000003</span>
                                    </div>
                                    <span class="mui-pull-right te-date">2017-08-21 11:36</span>
                                </h5>
                                <a class="te-pics" href="javascript:;">
                                    <ul class="mui-table-view mui-grid-view top-noline bottom-noline">
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1190/11902879/raw_1502867980.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1194/11949886/raw_1502972473.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1145/11455325/raw_1501411974.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-pull-right">
                                            <span class="allnum">
                                                共<span>2</span>件
                                                <span class="mui-icon mui-icon-forward"></span>
                                            </span>
                                        </li>
                                    </ul>
                                </a>
                                <h5 class="mui-content-padded clearfix te-fun">
                                    <div class="mui-pull-left te-count">
                                        <span>合计</span>
                                        <span class="title">￥3706.00</span>
                                    </div>
                                    <a class="mui-btn mui-pull-right te-btn red-block" href="javascript:;">立即付款</a>
                                </h5>
                            </li>
                        </ul>
                    </div>
                    <div id="pay" class="mui-slider-item mui-control-content">
                        <ul class="order-list mui-table-view">
                            <li class="mui-table-view-cell mui-media">
                                <h5 class="mui-content-padded clearfix te-info">
                                    <div class="mui-pull-left te-ordernum">
                                        <span>订单</span>
                                        <span class="num">9000003</span>
                                    </div>
                                    <span class="mui-pull-right te-date">2017-08-21 11:36</span>
                                </h5>
                                <a class="te-pics" href="javascript:;">
                                    <ul class="mui-table-view mui-grid-view top-noline bottom-noline">
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1190/11902879/raw_1502867980.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1194/11949886/raw_1502972473.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1145/11455325/raw_1501411974.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-pull-right">
                                            <span class="allnum">
                                                共<span>2</span>件
                                                <span class="mui-icon mui-icon-forward"></span>
                                            </span>
                                        </li>
                                    </ul>
                                </a>
                                <h5 class="mui-content-padded clearfix te-fun">
                                    <div class="mui-pull-left te-count">
                                        <span>合计</span>
                                        <span class="title">￥3706.00</span>
                                    </div>
                                    <a class="mui-btn mui-pull-right te-btn red-block" href="javascript:;">立即付款</a>
                                </h5>
                            </li>
                            <li class="mui-table-view-cell mui-media">
                                <h5 class="mui-content-padded clearfix te-info">
                                    <div class="mui-pull-left te-ordernum">
                                        <span>订单</span>
                                        <span class="num">9000003</span>
                                    </div>
                                    <span class="mui-pull-right te-date">2017-08-21 11:36</span>
                                </h5>
                                <a class="te-pics" href="javascript:;">
                                    <ul class="mui-table-view mui-grid-view top-noline bottom-noline">
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1190/11902879/raw_1502867980.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1194/11949886/raw_1502972473.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1145/11455325/raw_1501411974.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-pull-right">
                                            <span class="allnum">
                                                共<span>2</span>件
                                                <span class="mui-icon mui-icon-forward"></span>
                                            </span>
                                        </li>
                                    </ul>
                                </a>
                                <h5 class="mui-content-padded clearfix te-fun">
                                    <div class="mui-pull-left te-count">
                                        <span>合计</span>
                                        <span class="title">￥3706.00</span>
                                    </div>
                                    <a class="mui-btn mui-pull-right te-btn red-block" href="javascript:;">立即付款</a>
                                </h5>
                            </li>
                            <li class="mui-table-view-cell mui-media">
                                <h5 class="mui-content-padded clearfix te-info">
                                    <div class="mui-pull-left te-ordernum">
                                        <span>订单</span>
                                        <span class="num">9000003</span>
                                    </div>
                                    <span class="mui-pull-right te-date">2017-08-21 11:36</span>
                                </h5>
                                <a class="te-pics" href="javascript:;">
                                    <ul class="mui-table-view mui-grid-view top-noline bottom-noline">
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1190/11902879/raw_1502867980.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1194/11949886/raw_1502972473.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1145/11455325/raw_1501411974.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-pull-right">
                                            <span class="allnum">
                                                共<span>2</span>件
                                                <span class="mui-icon mui-icon-forward"></span>
                                            </span>
                                        </li>
                                    </ul>
                                </a>
                                <h5 class="mui-content-padded clearfix te-fun">
                                    <div class="mui-pull-left te-count">
                                        <span>合计</span>
                                        <span class="title">￥3706.00</span>
                                    </div>
                                    <a class="mui-btn mui-pull-right te-btn red-block" href="javascript:;">立即付款</a>
                                </h5>
                            </li>
                        </ul>
                    </div>
                    <div id="receive" class="mui-slider-item mui-control-content">
                        <ul class="order-list mui-table-view">
                            <li class="mui-table-view-cell mui-media">
                                <h5 class="mui-content-padded clearfix te-info">
                                    <div class="mui-pull-left te-ordernum">
                                        <span>订单</span>
                                        <span class="num">9000003</span>
                                    </div>
                                    <span class="mui-pull-right te-date">2017-08-21 11:36</span>
                                </h5>
                                <a class="te-pics" href="javascript:;">
                                    <ul class="mui-table-view mui-grid-view top-noline bottom-noline">
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1190/11902879/raw_1502867980.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1194/11949886/raw_1502972473.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1145/11455325/raw_1501411974.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-pull-right">
                                            <span class="allnum">
                                                共<span>2</span>件
                                                <span class="mui-icon mui-icon-forward"></span>
                                            </span>
                                        </li>
                                    </ul>
                                </a>
                                <h5 class="mui-content-padded clearfix te-fun">
                                    <div class="mui-pull-left te-count">
                                        <span>合计</span>
                                        <span class="title">￥3706.00</span>
                                    </div>
                                    <a class="mui-btn mui-pull-right te-btn red-frame" href="javascript:;">配货中</a>
                                </h5>
                            </li>
                            <li class="mui-table-view-cell mui-media">
                                <h5 class="mui-content-padded clearfix te-info">
                                    <div class="mui-pull-left te-ordernum">
                                        <span>订单</span>
                                        <span class="num">9000003</span>
                                    </div>
                                    <span class="mui-pull-right te-date">2017-08-21 11:36</span>
                                </h5>
                                <a class="te-pics" href="javascript:;">
                                    <ul class="mui-table-view mui-grid-view top-noline bottom-noline">
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1190/11902879/raw_1502867980.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1194/11949886/raw_1502972473.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1145/11455325/raw_1501411974.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-pull-right">
                                            <span class="allnum">
                                                共<span>2</span>件
                                                <span class="mui-icon mui-icon-forward"></span>
                                            </span>
                                        </li>
                                    </ul>
                                </a>
                                <h5 class="mui-content-padded clearfix te-fun">
                                    <div class="mui-pull-left te-count">
                                        <span>合计</span>
                                        <span class="title">￥3706.00</span>
                                    </div>
                                    <a class="mui-btn mui-pull-right te-btn red-frame" href="javascript:;">配货中</a>
                                </h5>
                            </li>
                            <li class="mui-table-view-cell mui-media">
                                <h5 class="mui-content-padded clearfix te-info">
                                    <div class="mui-pull-left te-ordernum">
                                        <span>订单</span>
                                        <span class="num">9000003</span>
                                    </div>
                                    <span class="mui-pull-right te-date">2017-08-21 11:36</span>
                                </h5>
                                <a class="te-pics" href="javascript:;">
                                    <ul class="mui-table-view mui-grid-view top-noline bottom-noline">
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1190/11902879/raw_1502867980.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1194/11949886/raw_1502972473.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1145/11455325/raw_1501411974.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-pull-right">
                                            <span class="allnum">
                                                共<span>2</span>件
                                                <span class="mui-icon mui-icon-forward"></span>
                                            </span>
                                        </li>
                                    </ul>
                                </a>
                                <h5 class="mui-content-padded clearfix te-fun">
                                    <div class="mui-pull-left te-count">
                                        <span>合计</span>
                                        <span class="title">￥3706.00</span>
                                    </div>
                                    <a class="mui-btn mui-pull-right te-btn red-frame" href="javascript:;">配货中</a>
                                </h5>
                            </li>
                        </ul>
                    </div>
                    <div id="ok" class="mui-slider-item mui-control-content">
                        <ul class="order-list mui-table-view">
                            <li class="mui-table-view-cell mui-media">
                                <h5 class="mui-content-padded clearfix te-info">
                                    <div class="mui-pull-left te-ordernum">
                                        <span>订单</span>
                                        <span class="num">9000003</span>
                                    </div>
                                    <span class="mui-pull-right te-date">2017-08-21 11:36</span>
                                </h5>
                                <a class="te-pics" href="javascript:;">
                                    <ul class="mui-table-view mui-grid-view top-noline bottom-noline">
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1190/11902879/raw_1502867980.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1194/11949886/raw_1502972473.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1145/11455325/raw_1501411974.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-pull-right">
                                            <span class="allnum">
                                                共<span>2</span>件
                                                <span class="mui-icon mui-icon-forward"></span>
                                            </span>
                                        </li>
                                    </ul>
                                </a>
                                <h5 class="mui-content-padded clearfix te-fun">
                                    <div class="mui-pull-left te-count">
                                        <span>合计</span>
                                        <span class="title">￥3706.00</span>
                                    </div>
                                    <a class="mui-btn mui-pull-right te-btn red-frame" href="javascript:;">已发货</a>
                                </h5>
                            </li>
                            <li class="mui-table-view-cell mui-media">
                                <h5 class="mui-content-padded clearfix te-info">
                                    <div class="mui-pull-left te-ordernum">
                                        <span>订单</span>
                                        <span class="num">9000003</span>
                                    </div>
                                    <span class="mui-pull-right te-date">2017-08-21 11:36</span>
                                </h5>
                                <a class="te-pics" href="javascript:;">
                                    <ul class="mui-table-view mui-grid-view top-noline bottom-noline">
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1190/11902879/raw_1502867980.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1194/11949886/raw_1502972473.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1145/11455325/raw_1501411974.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-pull-right">
                                            <span class="allnum">
                                                共<span>2</span>件
                                                <span class="mui-icon mui-icon-forward"></span>
                                            </span>
                                        </li>
                                    </ul>
                                </a>
                                <h5 class="mui-content-padded clearfix te-fun">
                                    <div class="mui-pull-left te-count">
                                        <span>合计</span>
                                        <span class="title">￥3706.00</span>
                                    </div>
                                    <a class="mui-btn mui-pull-right te-btn red-frame" href="javascript:;">已发货</a>
                                </h5>
                            </li>
                            <li class="mui-table-view-cell mui-media">
                                <h5 class="mui-content-padded clearfix te-info">
                                    <div class="mui-pull-left te-ordernum">
                                        <span>订单</span>
                                        <span class="num">9000003</span>
                                    </div>
                                    <span class="mui-pull-right te-date">2017-08-21 11:36</span>
                                </h5>
                                <a class="te-pics" href="javascript:;">
                                    <ul class="mui-table-view mui-grid-view top-noline bottom-noline">
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1190/11902879/raw_1502867980.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1194/11949886/raw_1502972473.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1145/11455325/raw_1501411974.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-pull-right">
                                            <span class="allnum">
                                                共<span>2</span>件
                                                <span class="mui-icon mui-icon-forward"></span>
                                            </span>
                                        </li>
                                    </ul>
                                </a>
                                <h5 class="mui-content-padded clearfix te-fun">
                                    <div class="mui-pull-left te-count">
                                        <span>合计</span>
                                        <span class="title">￥3706.00</span>
                                    </div>
                                    <a class="mui-btn mui-pull-right te-btn red-frame" href="javascript:;">已发货</a>
                                </h5>
                            </li>
                        </ul>
                    </div>
                    <div id="cancel" class="mui-slider-item mui-control-content">
                        <ul class="order-list mui-table-view">
                            <li class="mui-table-view-cell mui-media">
                                <h5 class="mui-content-padded clearfix te-info">
                                    <div class="mui-pull-left te-ordernum">
                                        <span>订单</span>
                                        <span class="num">9000003</span>
                                    </div>
                                    <span class="mui-pull-right te-date">2017-08-21 11:36</span>
                                </h5>
                                <a class="te-pics" href="javascript:;">
                                    <ul class="mui-table-view mui-grid-view top-noline bottom-noline">
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1190/11902879/raw_1502867980.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1194/11949886/raw_1502972473.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-pull-right">
                                            <span class="allnum">
                                                共<span>2</span>件
                                                <span class="mui-icon mui-icon-forward"></span>
                                            </span>
                                        </li>
                                    </ul>
                                </a>
                                <h5 class="mui-content-padded clearfix te-fun">
                                    <div class="mui-pull-left te-count">
                                        <span>合计</span>
                                        <span class="title">￥3706.00</span>
                                    </div>
                                    <a class="mui-btn mui-pull-right te-btn" href="javascript:;">已取消</a>
                                </h5>
                            </li>
                            <li class="mui-table-view-cell mui-media">
                                <h5 class="mui-content-padded clearfix te-info">
                                    <div class="mui-pull-left te-ordernum">
                                        <span>订单</span>
                                        <span class="num">9000003</span>
                                    </div>
                                    <span class="mui-pull-right te-date">2017-08-21 11:36</span>
                                </h5>
                                <a class="te-pics" href="javascript:;">
                                    <ul class="mui-table-view mui-grid-view top-noline bottom-noline">
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1190/11902879/raw_1502867980.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-pull-right">
                                            <span class="allnum">
                                                共<span>2</span>件
                                                <span class="mui-icon mui-icon-forward"></span>
                                            </span>
                                        </li>
                                    </ul>
                                </a>
                                <h5 class="mui-content-padded clearfix te-fun">
                                    <div class="mui-pull-left te-count">
                                        <span>合计</span>
                                        <span class="title">￥3706.00</span>
                                    </div>
                                    <a class="mui-btn mui-pull-right te-btn" href="javascript:;">已取消</a>
                                </h5>
                            </li>
                            <li class="mui-table-view-cell mui-media">
                                <h5 class="mui-content-padded clearfix te-info">
                                    <div class="mui-pull-left te-ordernum">
                                        <span>订单</span>
                                        <span class="num">9000003</span>
                                    </div>
                                    <span class="mui-pull-right te-date">2017-08-21 11:36</span>
                                </h5>
                                <a class="te-pics" href="javascript:;">
                                    <ul class="mui-table-view mui-grid-view top-noline bottom-noline">
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1190/11902879/raw_1502867980.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1194/11949886/raw_1502972473.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3">
                                            <img src="https://pro.modao.cc/uploads3/images/1145/11455325/raw_1501411974.jpeg" alt="">
                                        </li>
                                        <li class="mui-table-view-cell mui-media mui-col-xs-3 mui-pull-right">
                                            <span class="allnum">
                                                共<span>2</span>件
                                                <span class="mui-icon mui-icon-forward"></span>
                                            </span>
                                        </li>
                                    </ul>
                                </a>
                                <h5 class="mui-content-padded clearfix te-fun">
                                    <div class="mui-pull-left te-count">
                                        <span>合计</span>
                                        <span class="title">￥3706.00</span>
                                    </div>
                                    <a class="mui-btn mui-pull-right te-btn" href="javascript:;">已取消</a>
                                </h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import headBar from "../../public/m/header-oth";
export default {
    name: 'app',
    data() {
        return {
            headTitle: '我的订单'
        }
    },
    components: {
        headBar
    }
}
</script>
<style lang="less" scoped>
.order{
    .te-slider{
        // 导航
        .te-slider-nav{
            position: fixed;
            top: 44px;
            background: #fff;
            border-bottom: 1px solid #c8c7cc;
            z-index: 99;
            .mui-control-item{
                line-height: 44px;
                color: #888;
                &.mui-active{
                    color: #E51C23;
                }
            }
        }
        // 线
        .te-slider-line{
            position: fixed;
            top: 86px;
            width: 20%;
            background-color: #E51C23;
            z-index: 99;
        }
        // 内容
        .te-slider-con{
            padding-top: 44px;
            .mui-slider-item{
                border: 0;
                // 列表
                .order-list{
                    background-color: transparent;
                    >.mui-table-view-cell{
                        margin-top: 10px;
                        padding: 0;
                        color: #646464;
                        background-color: #fff;
                        
                        // 信息
                        .te-info{
                        }
                        // 图片信息
                        .te-pics{
                            margin: 0;
                            height: 110px;
                            .mui-table-view{
                                height: 110px;
                                background-color: #FAFAFA;
                                >.mui-table-view-cell{
                                    padding-top: 13px; 
                                    img{
                                        width: 100%;
                                        height: 84px;
                                    }
                                }
                                .allnum{
                                    line-height: 85px;
                                    font-size: 14px;
                                    .mui-icon{
                                        font-size: 18px;
                                    }
                                }
                            }
                        }
                        // 功能
                        .te-fun{
                            .te-count{
                                line-height: 30px;
                            }
                            .te-btn{
                                padding: 0;
                                width: 80px;
                                height: 30px;
                                line-height: 30px;
                                color: #646464;
                                border: 1px solid #646464;
                                border-radius: 0;
                                &.red-frame{
                                    color: #E51C23;
                                    border: 1px solid #E51C23;
                                }
                                &.red-block{
                                    color: #fff;
                                    background-color: #E51C23;
                                    border: 1px solid #E51C23;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>