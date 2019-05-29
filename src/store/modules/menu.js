


const ADD_MENU = 'ADD_MENE'

const menu = {
    state:{
        menuDate:[],
    },
    getters: {

    },
    mutations: {
      // 设置菜单
      [ADD_MENU]: (state, data) => {
          console.log(data);
          
        state.menuData = data
      },
    },
    actions: {
  
    }
}

export default menu