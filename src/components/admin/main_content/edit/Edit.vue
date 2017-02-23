<template>
  <div class="wrapper">
    <div class="header">
      撰写文章
    </div>
    <div class="main">
      <div class="left">
        <header class="post-info">
          文章信息
        </header>
        <div class="post-info-wrapper">
          <div class="input-group">
            <div>标题</div>
            <input type="text" id="post-title" placeholder="请输入文章标题" v-model="title" required>
          </div>
          <div class="input-group">
            <div>标签</div>
            <input type="text" id="post-tag" placeholder="标签以空格分开，最多3个" v-model="tag" required>
          </div>
          <div class="input-group">
            <div>分组</div>
            <input type="text" id="post-category" placeholder="文章分组" v-model="category" required>
          </div>
          <div class="input-group input-description">
            <div>描述</div>
            <textarea type="text" placeholder="文章描述" v-model="description" required></textarea>
          </div>
        </div>
      </div>
      <div class="right">
        <markdown-editor preview-class="markdown-body" v-model="content" :configs="configs"></markdown-editor>
        <div class="dowm">
          <button class="save-btn" @click="savePost">存为草稿</button>
          <button class="save-btn" @click="publicPost">发布</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {markdownEditor} from 'vue-simplemde'
  import 'github-markdown-css'

  export default {
    data () {
      return {
        content: '',
        configs: {
          initialValue: '~~~\rHello World!\r~~~', // 设置初始值
          renderingConfig: {
            codeSyntaxHighlighting: true, // 开启代码高亮
            highlightingTheme: 'github' // 自定义代码高亮主题，可选列表(https://github.com/isagalaev/highlight.js/tree/master/src/styles)
          }
        },
        title: '',
        description: '',
        tag: '',
        category: ''
      }
    },
    components: {
      markdownEditor
    },
    mounted(){
      console.log(this.$el.querySelector('.markdown-editor').style.display);
      this.$el.querySelector('.markdown-editor').style.display = 'flex';
      this.$el.querySelector('.CodeMirror').style["flex-grow"] = 1;
      this.$el.querySelector('.CodeMirror-scroll').style["height"] = '600px';
    },
    methods: {
      savePost(){
        if (this.checkInput()) {
          this.$http.post('/x-blog/posts', {
            title: this.title,
            content: this.content,
            tag: this.tag,
            category: this.category,
            description: this.description,
            status: 1 //saved
          }).then(data => {
            console.log('文章保存成功!')
          }).catch(err => {
            console.log('文章保存失败!' + err)
          })
        }
      },
      publicPost(){
        if (this.checkInput()) {
          this.$http.post('/x-blog/posts', {
            title: this.title,
            content: this.content,
            tag: this.tag,
            category: this.category,
            description: this.description,
            status: 0 //public
          }).then(data => {
            console.log('文章发表成功!')
          }).catch(err => {
            console.log('文章保存失败!' + err)
          })
        }
      },
      checkInput(){
        return true;
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../../../assets/css/constants";

  .wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    .header {
      font-size: 2rem;
      padding: 2rem 0 0 2rem;
      font-weight: bolder;
      flex-grow: 0;
      color: white;
    }
    .main {
      flex-grow: 1;
      display: flex;
      .left {
        width: 40rem;
        margin: 2rem;
        display: flex;
        flex-direction: column;
        .post-info {
          text-align: center;
          font-size: 2rem;
          color: white;
          font-weight: bold;
          padding-top: 1rem;
          height: 4rem;
          background: $admin-dark-bg;
        }
        .post-info-wrapper {
          flex-grow: 1;
          background: $admin-light-panel-bg;
          display: flex;
          flex-direction: column;
          .input-group {
            margin: 2rem 1rem 0;
            div {
              width: 100%;
              text-align: left;
              color: white;
              font-weight: bold;
              font-size: 1.4rem;
            }
            input {
              margin-top: 1rem;
            }
          }
          //最后一个input-group，也就是输入文章描述的
          .input-description {
            display: flex;
            flex-direction: column;
            margin-bottom: 2rem;
            flex-grow: 1;
            textarea {
              flex-grow: 1;
              margin-top: 1rem;
            }
          }
        }
      }
      .right {
        overflow-y: scroll;
        width: 100%;
        background: white;
        margin: 2rem 2rem 2rem 0;
        display: flex;
        flex-direction: column;
        .markdown-editor {
          flex-grow: 1;
          flex-direction: column;
        }
        .dowm {
          padding: 2rem 0;
          background: $admin-light-panel-bg;
          display: flex;
          justify-content: space-around;
          .save-btn {
            padding: 1rem 0;
            width: 8rem;
            border-radius: .3rem;
            text-align: center;
            font-size: 1.3rem;
            font-weight: bold;
            color: white;
            border: 1px solid $admin-dark-green;
            background: $admin-dark-green;
          }
        }
      }
    }
  }

</style>
