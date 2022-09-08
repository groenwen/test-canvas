const app = Vue.createApp({
  data() {
    return {
      message: 'Vue!',
      name: 'Vue',
      vueCanvas: null,
      form: {
        fname: '55555',
        phone: ''
      }

    }
  },
  computed: {
    name () {
      console.log('computed')
      return this.vueCanvas
    }
  },
  watch: {
    name () {
      console.log('watch')
      this.createCanvas()
    }
  },
  methods: {
    createCanvas () {
      let canvas = this.$refs.canvas
      canvas.width  = 360
      canvas.height  = 216
      let ctx =  canvas.getContext('2d')
      
      // 先設定顏色 在繪製位置及尺寸
      ctx.fillStyle = "#F7F9FB";
      ctx.fillRect(0, 0, 360, 216);
      
      // 矩形
      // ctx.fillStyle = "#000000";
      // ctx.fillRect(10, 10, 340, 196);
      ctx.save()
      
      ctx.restore()
      // 文字
      ctx.font = '32px serif'
      ctx.fillStyle= '#00A0E9'
      ctx.fillText(this.name, 125, 137)     

      this.vueCanvas = ctx
      
    },
  },
  mounted () {
    this.createCanvas()
  }
})

app.mount('#app')

