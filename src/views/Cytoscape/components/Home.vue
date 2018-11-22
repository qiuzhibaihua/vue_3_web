<template>
  <div class="cy">
    <img class="test" src="" alt="测试">
  </div>
</template>

<script>
import cytoscape from 'cytoscape'
export default {
  name: 'home',
  data(){
    return{
      title:'home'
    }
  },
  components: {
    
  },
  methods:{
  },
  mounted(){
    this.$nextTick(function(){
      var cy = cytoscape({
        container: document.getElementsByClassName('cy'), //创建容器

        // elements: [ // 元素对象
        //   { // node a
        //     data: { id: 'a' },
        //     position: { x: 0, y: 0 }
        //   },
        //   { // node b
        //     data: { id: 'b' },
        //     position: { x: 100, y: 0 }
        //   },
        //   { // edge ab
        //     data: { id: 'ab', source: 'a', target: 'b' }
        //   }
        // ],
        pan: { x: 0, y: 0 },
        style: [ // 图形样式
          {
            selector: 'node',
            style: {
              'content': 'data(id)',
              'background-color': '#000',
              'label': 'data(id)',
              "height": 60,
              "width": 60,
            },
          },
          {
            selector: 'node#n4',
            style: {
              'opacity':1,
              "height": 160,
              "width": 160,
            },
          },
          {
            selector: ':selected',
            style: {
              'content': 'data(classes)',
              'opacity':1,
              'background-color':'red'
            },
          },
          {
            selector: 'edge',
            style: {
              'width': 3,
              'line-color': '#ccc',
              'target-arrow-color': '#ccc',
              'target-arrow-shape': 'triangle'
            }
          },
        ],
        layout: {
          name: 'random',
          rows: 2
        }
      })
      // cy.add({
        //     group: "nodes",
      //     data: { id:'c', weight: 175 },
      //     position: { x: 0, y: 200 }
      // })
      //  添加点跟线(数组)
      var eles = cy.add([
        { group: "nodes", data: { id: "n0", weight: '175'}, position: { x: 700, y: 100 }},
        { group: "nodes", data: { id: "n1",  weight: '175'}, position: { x: 200, y: 200 } },
        { group: "edges", data: { id: "e0", source: "n0", target: "n1" } }
      ]);

      // 构建集合
      // var collection = cy.collection();
      // cy.elements().on("click", function(){
      //   // console.log(this)
      //   collection = collection.add(this)
      //   // console.log(collection.style)
      //   // collection.style({'background-color':'red','line-color':'red'})
      //   console.log(this.hasClass('funny'))
      // });
      // 删除某个元素
      // cy.remove( cy.elements("node[weight > 50]") );

      // 缓存数据
      // cy.scratch('ROBERT','HUABAIQIU')
      // console.log(cy.scratch('ROBERT'))

      // cy.batch(function(){
      //   cy.$('#n0')
      //     .data('weight', '70')
      //     .addClass('funny')
      //     .removeClass('serious')
      // })

      // 事件绑定
      // cy.on('tap', 'node', function(evt){
      //   // var node = evt.target;
      //   //  获取当前对象的数据
      //   console.log(this.position())
      //   console.log(evt.target)
      //   // console.log( 'tapped ' + node.id() )
      // })
      // 在图标上的第一个事件执行后执行(只执行一次)
      // cy.pon('tap').then(function( event ){
      //   console.log('tap promise fulfilled');
      // });

      // console.log(cy.$('node'))
      
      // 多个事件
      // cy.emit('tap', ['foo', 'bar']);
      // 居中显示某个对象
      // console.log(cy.center(cy.$('#n1')))
      
      // 适配
      // cy.fit( cy.$('#n1') );
      // cy.style().selector('node').style({'background-color':'blue'})

       var n3 = [
        { group: "nodes", data: { id: "n3", weight: '75',classes:'demo',parent:'n2'}, position: { x: 300, y: 200 }},
        { group: "nodes", data: { id: "n4" ,classes:'foo',parent:'n3'}, position: { x: 400, y: 200 } },
        { group: "edges", data: { id: "e1",weight: '150', source: "n0", target: "n3" } }
      ]
        cy.add(n3)
      // 回复
      cy.on('tap', 'node', function(evt, f, b){
        // cy.reset()
        // 移动到固定位置
        // cy.pan({ x: 50, y: -100 })

        // 放大
        // cy.zoom( 2 )

        // 平移 移动
        // cy.panBy({ x: -100, y: 0 })

        // 组合位置
        // cy.viewport({
        //   zoom: 1,
        //   pan: { x: 100, y: 100 }
        // })
        
        // 容器宽高
        // console.log(cy.extent())

        // 动画
        // cy.animate({
        //   pan: { x: 100, y: 100 },
        //   zoom: 1
        // }, {
        //   duration: 1000
        // })

        // cy.fit( {
        //   // eles: cy.$('#n3'),
        //   padding:0
        // } )

        // setTimeout( function(){
        //     // cy.pan({ x: 50, y: -100 });
        // }, 1000 )

        // setTimeout( function(){
        //     // cy.zoom( 2 )
        // }, 2000 )

        // setTimeout( function(){
        //   // 恢复默认位置
        //     cy.reset()
        // }, 3000 )

        // cy.animate({
        //   fit: { eles: '#n1' }
        // }).delay(1000).animate({
        //   fit: { eles: '#n0' }
        // })

        // 获取延迟动画信息
        // console.log(cy.delayAnimation())
        // var layout = cy.nodes('#n0').layout({
        //   name: 'random',
        // });

        // layout.run()


        // 修改样式
        // cy.style().selector('node').style({'background-color':'blue'}).update()
        // cy.style().selector('edge').style({'line-color':'blue'}).update()

        // 打印图片
        // console.log(cy.png())
        // document.querySelector('.test').setAttribute('src',cy.png())
        
        // 下载图片
        // var alink = document.createElement("a");
        // alink.href = cy.png();
        // alink.download = "pic"; //图片名
        // alink.click();

        // console.log( eles )
        // eles是原始的  cy.elements()是指全部
        // console.log( cy.elements('#n0').position() )
        
        // 通过方法修改点的位置
        // cy.nodes('#n0').positions(function( node, i ){
        //   return {
        //     x: 100,
        //     y: 100
        //   }
        // })

        // console.log(cy.nodes('#n0').boundingBox())
        // cy.elements().remove()

        // 不允许用户抓去节点
        // cy.nodes().ungrabify()
        // cy.edges('#e1').targetEndpoint()

        // 让节点被选中
        console.log(this.renderedStyle())
        console.log(this.style())
        // console.log(this.numericStyle())

        // 获取是否显示
        // console.log(cy.nodes('#n4').hide())
        //获取透明度
        console.log(cy.nodes('#n4').effectiveOpacity())

        // 修改样式
        // this.style({width:'200px'}).update()
        // this.toggleClass('foo');
        console.log(this.style().width)

        // 元素动画修改样式
        // cy.nodes('#n4').animate({
        //   position:{x:250,y:250},
        //   style: { backgroundColor: 'red' }
        // },{
        //   duration:2000
        // })
        console.log(cy.nodes('#n4').animation())
        
        //  is  allAre some every (带函数)
        var j = cy.$('#n0, #n1');

        // console.log( 'j has weight > 50 ? ' + j.allAre('[weight > 50]') )

        // console.log(j.empty())
        var nodes = cy.nodes();
        // 合并对象
        // j.union(e)
        // console.log(j.union(e))

        // 找出不同的元素
        // console.log(nodes.difference(j))

        //  找出除了对象之外的其他所有元素
        // console.log(cy.$('#n1, #n0, #n4, #n3').absoluteComplement())

        // 相邻元素
        // console.log(cy.$('#n4').neighborhood())
        
        // 左右中集合 中间both表示两边都有的元素  左右表示另一边没有的元素
        // console.log(cy.$('#n0, #n1, #n3').diff('#n1'))

        // merge 添加不重复元素
        // var col = cy.collection(); // new, empty collection
        // col = col.add(cy.$('#n0'))
        // // console.log(col)
        
        // var j = cy.$('#n0')
        // var e = cy.$('#n0, #n1 ,#n3')
        // // console.log(e)
        // console.log(col.unmerge( e ))


        // 获取两点间的边缘
        // var j = cy.$('#n0')
        // var e = cy.$('#n1')
        // console.log(j.edgesWith(e))

        // 获取相连的点
        // var j = cy.$('#n0')
        // j.connectedEdges().style({'line-color':'blue'})
        // console.log(cy.$('#n1').neighborhood())

        // parallelEdges（平行） 源头
        var j = cy.$('#n3')
        console.log(j.leaves())
        j.leaves().style({'background-color':'blue'})
      })
    })
  }
}
</script>
<style>
.cy{
  width: 100%;
  height:400px;
  display: block
}
.test{}
</style>


