<template>
	<view class="main">
		 <scroll-view class="main_box" scroll-y="true"  @scrolltolower="lower">
			<view class="jian-kong-box">
				<view class="pick-box">
					<picker :range="array" @change="sizeTypeChange" :value="sexIndex" mode="selector">
						<view class="uni-input">{{array[sexIndex]}}</view>
					</picker>
					<uni-icons type="arrowdown" color="#000000" size="18" />
				</view>
				<view class="pick-box">
					<picker :range="array" @change="sizeTypeChange" :value="sexIndex" mode="selector">
						<view class="uni-input">{{array[sexIndex]}}</view>
					</picker>
					<uni-icons type="arrowdown" color="#000000" size="18" />
				</view>
				<view class="pick-box">
					<picker :range="array" @change="sizeTypeChange" :value="sexIndex" mode="selector">
						<view class="uni-input">{{array[sexIndex]}}</view>
					</picker>
					<uni-icons type="arrowdown" color="#000000" size="18" />
				</view>
				
			</view>
			<!-- 正文 -->
			<view class=" big-mm" v-for="(item, index) in list" :index="index" :key="index" >
				
	
			<view class="grid-item-box"  >
				<image class="image" :src="item.url" mode=""></image>
			<text class="text">{{item.text}}</text>
			</view>
					</view>
		</scroll-view>
	</view>
</template>

<script>
	import uniGrid from '@/components/uni-grid/uni-grid.vue'
	import uniGridItem from '@/components/uni-grid-item/uni-grid-item.vue'
	export default{
		components: {
			
			uniGrid,
			uniGridItem
			
		},
		data() {
			return {
				imageList:[],
				name:"",
				idCard:"",
				phone:"",
				 array: ['小金县', '金川县', '丹巴县'],
				   sexIndex: 0,
				   workList:['请选择','政府','国家电网','财务','路政','纪委'],
				   workIndex:0,
				   dynamicList: [],
				   list: [{
				   		url: '/static/img/news/bg.png',
				   		text: '美兴镇-新街社区',
				   		badge: '0',
				   		type: "primary"
				   	},
				   	{
				   		url: '/static/img/news/bg.png',
				   		text: '美兴镇-新街社区',
				   		badge: '1',
				   		type: "success"
				   	},
				   	{
				   		url: '/static/img/news/bg.png',
				   		text: '美兴镇-新街社区',
				   		badge: '99',
				   		type: "warning"
				   	},
				   	{
				   		url: '/static/img/news/bg.png',
				   		text: '美兴镇-新街社区',
				   		badge: '2',
				   		type: "error"
				   	},
				   	{
				   		url: '/static/img/news/bg.png',
				   		text: '美兴镇-新街社区'
				   	},
				   	{
				   		url: '/static/img/news/bg.png',
				   		text: '美兴镇-新街社区'
				   	},
				   	{
				   		url: '/static/img/news/bg.png',
				   		text: '美兴镇-新街社区'
				   	},
				   	{
				   		url: '/static/img/news/bg.png',
				   		text: '美兴镇-新街社区'
				   	},
				   	{
				   		url: '/static/img/news/bg.png',
				   		text: '美兴镇-新街社区'
				   	}
				   ]
			};
		},
		methods: {
			ontrueGetList(){
				uni.showToast({
					title:'第1个页面'
				})
				console.log("加载了第一个页面，可以把网络请求放这里")
			},
			lower(){
				uni.showToast({
					title:'scroll-view的加载更多'
				})
				console.log("分页数据可以放这里~~~~~~嘿嘿")
			},
			sizeTypeChange(e){
				this.sexIndex = parseInt(e.detail.value)
			},
			change(e) {
				let {
					index
				} = e.detail
				this.list[index].badge && this.list[index].badge++
			
				uni.showToast({
					title: `点击第${index+1}个宫格`,
					icon: 'none'
				})
			},
		}
	}
</script>

<style lang="scss">
	.main{ background-color: #FFFFFF;}
	// padding-bottom:120rpx;box-sizing: border-box;重要*************************保证页面底部内容不被隐藏也不会出现多余的滚动条
	.main_box{width:100vw;height: 100vh;padding-bottom:120rpx;box-sizing: border-box;}
	.main_centent{width: 100%;height: 100vh;color: #fff;letter-spacing: 4rpx;display: flex;align-items: center;justify-content: center;}
		
	.jian-kong-box{
	 display: flex;
	 flex-direction: row;
	 justify-content: space-between;
	 width: 750rpx;
	 height: 84rpx;
	 
	}
	.pick-box{
		width: 33.3%;
		height: 84rpx;
		text-align: center;
		line-height:84rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
		
	.uni-input{
		font-size: 30rpx;
	}
			
		.big-mm{
			display: inline-block;
			width: 355rpx;
			height: 306rpx;
			margin: 0 10rpx 30rpx 10rpx;
		}	
		
		.grid-item-box {
			display: flex;
			flex-direction: column;
			
			justify-content: left;
			
			
		}
	.image {
		width: 360rpx;
		height: 256rpx;
		margin-bottom: 10rpx;
	}
	
	.text {
		font-size: 28rpx;
		font-weight: 500;
		margin-top: 10rpx;
	}
</style>