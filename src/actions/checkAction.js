import { FETCH_ITEMS, CHECK_ITEM } from "./types";

const itemList = [
    {
        id:1,
        name:'Portugal',
        items:[
            {
                id:11,
                name:'Aasiya Jayavant',
                checked:false
            },
            {
                id:12,
                name:'Luvleen Lawrence',
                checked:false
            },
            {
                id:13,
                name:'Rey Mibourne',
                checked:false
            },
            {
                id:14,
                name:'Cayla Brister',
                checked:false
            },
        ]
    },
    {
        id:2,
        name:'Nicaragua',
        items:[
            {
                id:21,
                name:'Devidaas Nandi',
                checked:false
            },
            {
                id:22,
                name:'Obasey Chidy',
                checked:false
            },
            {
                id:23,
                name:'Xenie Delezeolva',
                checked:false
            },
            {
                id:24,
                name:'Ezequiel Dengra',
                checked:false
            },
        ]
    },
    {
        id:3,
        name:'Marshall Islands',
        items:[
            {
                id:31,
                name:'Akjsdsj Kdjkkd',
                checked:false
            },
            {
                id:32,
                name:'Bkdsji Hskjss',
                checked:false
            },
            {
                id:33,
                name:'Cksjjdsi Mldskkj',
                checked:false
            },
            {
                id:34,
                name:'Ddkjkjd Bosajoo',
                checked:false
            },
        ]
    }
]

export const fetchItems = () => dispatch => {
      dispatch({
        type: FETCH_ITEMS,
        payload: itemList
  });
};

export const checkItem = (list_Id,id) => dispatch => {
    let updatedList = itemList.map(element => {
        if(element.id === list_Id){
            element.items.map(items => {
                if(items.id === id){
                    items.checked = !items.checked;
                }
                return items;
            });
        }
        for(let i=0;i<element.items.length;i++){
            if(element.items[i].checked === true){
                element.isChecked = true;
                break;
            }else{
                element.isChecked = false;
            }
        }
        return element;
    });
      dispatch({
        type: CHECK_ITEM,
        payload: updatedList
      });
};