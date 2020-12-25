import { createStore } from "redux";
function reducer(state = {
    data: [
        {
            id: 0,
            message: "真困，想睡觉，不想学了",
            done: false,
            selected: false
        }, {
            id: 1,
            message: "就是就是不学了",
            done: true,
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
                    message: action.message,
                    done: false,
                    selected:false
                }]
            }
        case "CHANGEDONE":
            nowData.forEach((item, index) => {
                if (item.id === action.id) {
                    nowData[index] = {
                        ...item,
                        done: !item.done
                    }
                }
            })
            return { data: nowData };
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
        case "DONEDELETE":
            action.doneids.forEach(element => {
                nowData = nowData.filter(function (el) {
                    return element !== el.id;
                })
            });
            return { data: nowData };
        case "SELECTEDDELETE":
            action.selectedids.forEach(element => {
                nowData = nowData.filter(function (el) {
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
        default:
            return state
    }
}
const store = createStore(reducer);
export { store };