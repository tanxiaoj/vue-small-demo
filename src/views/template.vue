<template>
  <div class="template">
    <div class="introduce" v-if="!status" @click="toggle">
      {{`下面代码介绍了
          ${intro}
        等语法的使用。`
        }}
        <div class="tips">点击任意处切换</div>
    </div>
    <template v-if="status">
      <div class="search">
        <input type="text" v-model="value" placeholder="请输入搜索内容(按分数查找)">
        <div class="button">搜索</div>
      </div>
      <div>{{value}}</div>
      <div class="rating-wrapper" v-for="(item, index) in ratings" :key="index">
        <ul>
          <li class="rating-item">
            <div class="avatar">
              <img width="28" height="28" :src="item.avatar" alt="">
            </div>
            <div class="content">
              <h1 class="name">{{item.username}}</h1>
              <div class="star-wrapper" :class="{scoreColor: item.score > 3 ? true : false}">{{item.score}}分 --- {{scoreStatus(item.score)}}</div>
              <div class="text" v-if="item.text !== ''">{{item.text}}</div>
              <div class="noText" v-if="item.text === ''">暂无评价</div>
              <div class="recommend">
                <span v-for="(list, index) in item.recommend" :key="index" class="item">{{list}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
import { getRatings } from 'api'
export default {
  name: 'template',
  data () {
    return {
      value: '',
      status: false,
      intro: 'v-for, v-if, v-show, v-class, 模板语法{{}}, v-model, watch',
      ratings: []
    }
  },
  created () {
    this._getRatings()
  },
  methods: {
    toggle () {
      this.status = !this.status
    },
    _getRatings () {
      getRatings().then(res => {
        this.ratings = res
      })
    },
    scoreStatus (score) {
      let status
      switch (score) {
        case 1: status = '很一般'; break
        case 2: status = '一般'; break
        case 3: status = '还可以'; break
        case 4: status = '很好'; break
        default: status = '非常好'
      }
      return status
    }
  },
  watch: {
    value (newValue, oldValue) {
      getRatings().then(res => {
        if (newValue === '') {
          this.ratings = res
        } else {
          this.ratings = res.filter((item) => {
            return item.score == newValue
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .introduce {
    position: absolute;
    padding: 260px 20px 0;
    line-height: 30px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    color: #fff;
    background-color: rgba(0,0,0,.6);
    .tips {
      color: blue;
    }
  }
  .search {
    padding: 0 40px;
    overflow: hidden;
    input {
      width: 200px;
      height: 30px;
      float: left;
      outline: medium;
      border-radius: 5px;
    }
    .button {
      margin-left: 10px;
      float: left;
    }
  }
  .rating-wrapper {
      padding: 0 18px;
      ul {
        li {
          display: flex;
          padding: 18px 0;
          border-bottom: 1px solid #f1f1f1;
          .avatar{
            flex: 0 0 28px;
            width: 28px;
            margin-right: 12px;
            img {
              height: auto;
              border-radius: 50%;
            }
          }
          .content{
            position: relative;
            flex: 1;
            .name{
              margin-bottom: 4px;
              line-height: 12px;
              font-size: 10px;
              color: #333;
            }
            .star-wrapper {
              margin-bottom: 6px;
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              &.scoreColor {
                color: red;
              }
            }
            .text, .noText {
              margin-bottom: 8px;
              line-height: 18px;
              color: #333;
              font-size: 12px;
            }
            .noText {
              color: #ff6400;
            }
            .recommend {
              display: flex;
              align-items: center;
              flex-wrap: wrap;
              line-height: 16px;
              .item{
                font-size: 12px;
                padding: 0 6px;
                margin: 0 2px 2px 0;
                border: 1px solid rgba(7,17,27,0.1);
                border-radius: 1px;
                color: #999;
                background: #fff;
              }
            }
          }
        }
      }
  }
</style>
