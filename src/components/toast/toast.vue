<template>
  <div class="toast" v-if="show">
      <div class="text">{{text}}</div>
  </div>
</template>

<style lang="less" scoped>
  .toast {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0,0,0,0);
      .text {
          font-size: 14px;
          color: #fff;
          padding: 8px 12px;
          border-radius: 4px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(0,0,0,0.5);
      }
  }
</style>
