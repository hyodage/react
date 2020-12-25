import { createStore } from "redux";
function reducer(state = {
    data: [
        {
            id: 0,
            name: "帅哥",
            message: "真困，想睡觉，不想学了",
            selected: false
        }, {
            id: 1,
            name: "Ellen",
            message: "就是就是不学了",
            selected: true
        }
    ]
}, action) {
    let nowData = [...state.data];
    switch (action.type) {
        case "ADD":
            return {
                data: [...nowData, {
                  id: Date.now(),
                  name: action.name,
                  message: action.message,
                  selected: false
                }]
            }
        case "EDIT":
            nowData.forEach((item, index) => {
                if (item.id === action.id) {
                    nowData[index] = {
                        ...item,
                        message: action.message
                    }
                }
            })
            return { data: nowData };
        case "DELETE":
            return { data: nowData.filter(function(el) {
                return el.id !== action.id;
            }) };
        case "ALLDELETE":
            action.ids.forEach(element => {
                nowData = nowData.filter(function(el) {
                    return element !== el.id;
                })
            });
            return { data: nowData };
        case "SELECTED":
            nowData.forEach((item, index) => {
                if (item.id === action.id) {
                    nowData[index] = {
                        ...item,
                        selected: action.selected
                    }
                }
            })
            return { data: nowData };
        case "ALLSELECTED":
            nowData.forEach((item, index) => {
                nowData[index] = {
                    ...item,
                    selected: action.selected
                }
            })
            return { data: nowData };
        default:
            return state
    }
}
const store = createStore(reducer);
export { store };