export default file => {
  return map[file] || null
}
// 动态路由地址配置
const map = {
  // 首页
  Dashboard: () => import('@/views/Cytoscape/home/index.vue'),
  // 公共头部
  // Layout: () => import('@/views/Cytoscape/layout/Layout'),
  // 审核 合作商审核 合作商审核1
  auditManage: () => import('@/views/Cytoscape/layout/Layout'),
  partnerReview: () => import('@/views/Cytoscape/auditManage/partnerReview/index.vue'),
  partnerReview1: () => import('@/views/Cytoscape/auditManage/partnerReview/partnerReview1.vue'),
    // user
    Example: () => import('@/views/Cytoscape/layout/Layout'),
    common: () => import('@/views/Cytoscape/auditManage/partnerReview/index.vue'),
    table: () => import('@/views/Cytoscape/auditManage/partnerReview/index.vue'),
}