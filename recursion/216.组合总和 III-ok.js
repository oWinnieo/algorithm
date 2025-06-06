/*
216. 组合总和 III
中等
相关标签
相关企业
找出所有相加之和为 n 的 k 个数的组合，且满足下列条件：

只使用数字1到9
每个数字 最多使用一次 
返回 所有可能的有效组合的列表 。该列表不能包含相同的组合两次，组合可以以任何顺序返回。

 

示例 1:

输入: k = 3, n = 7
输出: [[1,2,4]]
解释:
1 + 2 + 4 = 7
没有其他符合的组合了。
示例 2:

输入: k = 3, n = 9
输出: [[1,2,6], [1,3,5], [2,3,4]]
解释:
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
没有其他符合的组合了。
示例 3:

输入: k = 4, n = 1
输出: []
解释: 不存在有效的组合。
在[1,9]范围内使用4个不同的数字，我们可以得到的最小和是1+2+3+4 = 10，因为10 > 1，没有有效的组合。
 

提示:

2 <= k <= 9
1 <= n <= 60
*/
/*
和为n的k个数
和为target的count个数
*/
const count1 = 3
const target1 = 7

const count2 = 3
const target2 = 9
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    
};

const combineSum3_250416_1 = (count, target) => {
    let resArr = []
    let path = []
    const dfs = (indexStart, sum) => {
        if (sum === target && path.length === 3) {
            resArr.push(path.slice(0))
        }
        for (let i = indexStart; i <= 9; i++) {
            path.push(i)
            dfs(i + 1, sum + i)
            path.pop()
        }
    }
    dfs(1, 0)
    return resArr
}

const res1 = combineSum3_250416_1(count1, target1)
console.log('combineSum3_250416_1 res1', res1)

const res2 = combineSum3_250416_1(count2, target2)
console.log('res2', res2)