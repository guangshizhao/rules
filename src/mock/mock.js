import Mock from 'mockjs'

// 缺点 每一级都有name 不能重复
Mock.mock('/login', 'post', (prarms) => {
  console.log('我看看', prarms)
  return {
    code: 200,
    data: {
      token: JSON.parse(prarms.body).user
    }
  }
})

Mock.mock(/\/rules/, 'get', (params) => {
  console.log('用户', params.url.split('?')[1].split('=')[1])
  const user = params.url.split('?')[1].split('=')[1]
  if (user === 'admin') {
    return {
      code: 200,
      data: {
        token: 'admin',
        rules: {
          page: {
            home: true,
            home_index: true,
            one: true,
            one_index: true,
            one_index1: true,
            two: true,
            two_index: true,
            two_index1: true,
            three: true,
            three_index: true,
            three_index1: true
          },
          component: {
            home: {
              add_button: true,
              del_button: true,
              updata_button: true
            },
            one: {
              add_button: true,
              del_button: true,
              updata_button: true
            }
          }
        }
      }
    }
  } else if (user === 'test') {
    return {
      code: 200,
      data: {
        token: 'test',
        rules: {
          page: {
            home: true,
            home_index: true,
            one: false,
            one_index: false,
            one_index1: false,
            two: false,
            two_index: false,
            two_index1: false,
            three: false,
            three_index: false,
            three_index1: false
          },
          component: {
            home: {
              add_button: false,
              del_button: true,
              updata_button: true
            },
            one: {
              add_button: false,
              del_button: true,
              updata_button: true
            }
          }
        }
      }
    }
  } else {
    return {
      code: 200,
      data: {
        token: 'putong',
        rules: {
          page: {
            home: true,
            home_index: true,
            one: false,
            one_index: true,
            one_index1: false,
            two: true,
            two_index: true,
            two_index1: false,
            three: false,
            three_index: false,
            three_index1: false
          },
          component: {
            home: {
              add_button: false,
              del_button: false,
              updata_button: false
            },
            one: {
              add_button: false,
              del_button: false,
              updata_button: false
            }
          }
        }
      }
    }
  }
})
