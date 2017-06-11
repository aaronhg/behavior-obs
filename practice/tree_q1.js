//     5
//   14  89
// 13 55 x 23

function TreeNode(v, l, r) {
    this.left = l
    this.right = r
    this.value = v
}
TreeNode.prototype.setLeft = function (l) {
    this.left = l
    return this
}
TreeNode.prototype.setRight = function (r) {
    this.right = r
    return this
}
TreeNode.prototype.poTraversal = function (fn) {
    return fn(this.left && this.left.poTraversal(fn),
        this.right && this.right.poTraversal(fn),
        this.value)
}
var treetop = new TreeNode(5)
treetop.setLeft(new TreeNode(14)).setRight(new TreeNode(89))
treetop.left.setLeft(new TreeNode(13)).setRight(new TreeNode(55))
treetop.right.setRight(new TreeNode(23))

treetop.poTraversal((l, r, v) => console.log(v))

reverseed = treetop.poTraversal((l, r, v) => {
    let t = new TreeNode(v)
    if (l)
        t.setRight(l)
    if (r)
        t.setLeft(r)
    return t
})
reverseed.poTraversal((l, r, v) => console.log(v))