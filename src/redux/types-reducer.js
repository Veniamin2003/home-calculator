import React from 'react'
import concreteView from "./../Images/StairsTypes/materials/1V.png"
import concrete1 from "./../Images/StairsTypes/materials/1.jpg"
import concreteView2 from "./../Images/StairsTypes/materials/2V.png"
import concrete2 from "./../Images/StairsTypes/materials/2.jpg"
import concreteView3 from "./../Images/StairsTypes/materials/3V.png"
import concrete3 from "./../Images/StairsTypes/materials/3.jpg"
import concreteView4 from "./../Images/StairsTypes/materials/4V.png"
import concrete4 from "./../Images/StairsTypes/materials/4.jpg"

import type1 from "./../Images/StairsTypes/stair/1.jpg"
import type1Card from "./../Images/StairsTypes/stair/1.png"
import type2 from "./../Images/StairsTypes/stair/2.jpg"
import type2Card from "./../Images/StairsTypes/stair/2.png"
import type3 from "./../Images/StairsTypes/stair/3.jpg"
import type3Card from "./../Images/StairsTypes/stair/3.png"
import type4 from "./../Images/StairsTypes/stair/4.jpg"
import type4Card from "./../Images/StairsTypes/stair/4.png"

import wall1 from "../Images/StairsTypes/anderstage/1.jpg"
import wallV1 from "../Images/StairsTypes/anderstage/1V.png"
import wall2 from "../Images/StairsTypes/anderstage/2.jpg"
import wallV2 from "../Images/StairsTypes/anderstage/2V.png"
import wall3 from "../Images/StairsTypes/anderstage/3.jpg"
import wallV3 from "../Images/StairsTypes/anderstage/3V.png"

import roof1 from "../Images/StairsTypes/paint/1.jpg"
import roofView1 from "../Images/StairsTypes/paint/1View.png"
import roof2 from "../Images/StairsTypes/paint/2.jpg"
import roofView2 from "../Images/StairsTypes/paint/2View.png"
import roof3 from "../Images/StairsTypes/paint/3.jpg"
import roofView3 from "../Images/StairsTypes/paint/3View.png"

import heating1 from "../Images/StairsTypes/heating/1.jpg"
import heatingV1 from "../Images/StairsTypes/heating/1V.png"
import heating2 from "../Images/StairsTypes/heating/2.jpg"
import heatingV2 from "../Images/StairsTypes/heating/2V.png"
import heating3 from "../Images/StairsTypes/heating/3.jpg"
import heatingV3 from "../Images/StairsTypes/heating/3V.png"

import flow1 from "../Images/StairsTypes/flow/laminat.jpg"
import flow2 from "../Images/StairsTypes/flow/parket.jpg"
import flow3 from "../Images/StairsTypes/flow/linoleum.jpg"
import flow4 from "../Images/StairsTypes/flow/cafel1.jpg"


import window1 from "../Images/StairsTypes/Windows/1.png"
import window2 from "../Images/StairsTypes/Windows/2.png"
import window3 from "../Images/StairsTypes/Windows/3.png"
import window4 from "../Images/StairsTypes/Windows/4_1.png"

const UPDATE_TYPE = 'UPDATE_TYPE';
const UPDATE_MATERIAL = 'UPDATE_MATERIAL';
const UPDATE_WIDTH_STAGES = 'UPDATE_WIDTH_STAGES';
const UPDATE_HEIGHT_STAGES = 'UPDATE_HEIGHT_STAGES';
const COUNT_ALL_SUM = 'COUNT_ALL_SUM';
const UPDATE_ANDER_STAGE = 'UPDATE_ANDER_STAGE';
const UPDATE_ROOF_TYPE = 'UPDATE_ROOF_TYPE';
const UPDATE_HEATING = 'UPDATE_HEATING';
const UPDATE_WINDOW = 'UPDATE_WINDOW';
const UPDATE_FLOW = 'UPDATE_FLOW';
const ADD_TASK = 'ADD_TASK';
const UPDATE_LOGIN_STATUS = 'UPDATE_LOGIN_STATUS';
const ADD_USER = 'ADD_USER';
const UPDATE_ACTIVE_USER = 'UPDATE_ACTIVE_USER';

let idTask = 1;
let initialState = {
    stairsTypes: [
        {id: 1, name: 'Ливадийский пентхаус', img: type1, price: 139,
            viewImg: type1Card,  description: "Размер: Высота-4м, Длина-7м. Ширина-4м. Объём-139м3. 4 комнат и большая терраса. 2 входа. На втором этаже 2 спальни и сан узел."},
        {id: 2, name: 'Британский стиль ', img: type2, price: 112,
            viewImg: type2Card,  description: "Размер: Высота-3,5м, Длина-8м. Ширина-4м. Объём-112м3. 3 комнаты, 2 сан. узла и просторная гостинная, совмещённая с кухней."},
        {id: 3, name: 'Европейский домик', img: type3, price: 364.5,
            viewImg: type3Card,  description: "Размер: Высота-4,5м, Длина-9м. Ширина-9м. Объём-364.5м3. 3 комнаты, 2 сан. узла, большая кухня и гостинная. Гараж на 2 машины"},
        {id: 4, name: 'Классический дизайн', img: type4, price: 250,
            viewImg: type4Card,  description: "Размер: Высота-5м, Длина-10м. Ширина-5м. Объём-250м3. 5 комнат. 1 сан узел. Огромная гостинная и кухня. а также просторная терасса. "}
    ],

    materials: [
        {id: 1, name: 'Стандартный', img: concrete1 , viewImg: concreteView, price: 2000, description: "Песок - Щебень - Гидроизоляция - Цемент с арматурой. Высота 1 метр"},
        {id: 2, name: 'Плита', img: concrete2, viewImg: concreteView2, price: 3600, description: "Песок - Массивная уельная плита с арматурной сеткой внутри."},
        {id: 3, name: 'Якорь', img: concrete3, viewImg: concreteView3, price: 3000, description: "Якореобразное углубление в совместимости с арматурным поясом придает прочности всей конструкции."},
        {id: 4, name: 'Копьё', img: concrete4, viewImg: concreteView4, price: 2500, description: "Песок - Фундаментная подушка - Арматура по периметру - Фундаментный массив. "},
    ],

    windows: [
        {id: 1, name: 'WHS-60', img: window1 , price: 990, description: "Оптимальное сочетание доступной цены и высоких показателей тепла."},
        {id: 2, name: 'VEKA Euroline', img: window2, price: 1570, description: "Универсальный облегченный профиль с высокой тепло- и звукоизоляцией."},
        {id: 3, name: 'VEKA Softline', img: window3, price: 2650, description: "Премиальная серия линейки VEKA для экстремальных условий нашего региона."},
        {id: 4, name: 'VEKA Softline 82', img: window4, price: 3820, description: "Самый тихий профиль из всех брендов VEKA. Уникальные трехконтурные окна."},
    ],

    flows: [
        {id: 1, name: 'Ламинат', img: flow1 , price: 1990, description: "Многослойное напольное покрытие, основой для которого служит плита ДВП или ДСП"},
        {id: 2, name: 'Паркет', img: flow2, price: 1570, description: "Вид деревянного покрытия. Различают: штучный паркет, щитовой и наборный."},
        {id: 3, name: 'Линолеум', img: flow3, price: 650, description: "Вид напольного покрытия, в настоящее время преимущественно из полимерных материалов."},
        {id: 4, name: 'Кафель', img: flow4, price: 3820, description: "Пластины из обожжённой глины, на современном рынке чаще всего плоские."},
    ],

    stairsSize: {
        size: [
            {id: 1, name: 'Ширина марша'},
            {id: 1, name: 'Высота марша'}
      ]
    },

    anderStage: [
        { id: 1, name: 'Шлакоблок', img: wall1, viewImg: wallV1, price: 1250, description:"Образует ощущение большего пространства в помещении"},
        { id: 2, name: 'Кирпич', img: wall2, viewImg: wallV2, price: 4500, description: "Делает помещение более уютным и теплым"},
        { id: 3, name: 'Брус', img: wall3, viewImg: wallV3, price: 2500, description: "Делает помещение более уютным и теплым"}
    ],

    roofType:
        {
            roofTypeItems:[
                {id: 1, name:'Металло-черепица', img: roof1, viewImg: roofView1, price: 200, description:"Хорошо выдерживает нагрузку и воздействие внешних факторов, к тому же долговечна" },
                {id: 2, name:'Мягкая кровля', img: roof2, viewImg: roofView2, price: 350, description:"Лента шириной 1,5-2 метра, состоящая из нескольких слоев гидроизоляционного материала." },
                {id: 3, name:'Цементная черепица', img: roof3, viewImg: roofView3, price: 450, description:"Вид черепицы, изготавливаемый из портландцемента, кварцевого песка, с добавлением минеральных пигментов."},
            ],
            selectedRoofTypeId: 1,
        },

    heatingType:
        [
            {id: 1, name: 'Радиаторы', img: heating1, viewImg: heatingV1, price: 1000, description:"Классический вариант отопления"},
            {id: 2, name: 'Водяной теплый пол', img: heating2, viewImg: heatingV2, price: 2000, description:"Отопление скрыто под полом. отапливается за счет воды."},
            {id: 3, name: 'Электро теплый пол', img: heating3, viewImg: heatingV3, price: 1500, description:"Отопление скрыто под полом. отапливается за счет электричества."}
        ],

    tasks:
        [],

    users: [
        {id:1, name: "Виктор", lname:"Красильников", login: "vik123", password:"12345"},
        {id:2, name: "Александр", lname:"Николаев", login: "sasha333", password:"12345"},
    ],

    heatingTypesParams : {
        selectedHeatingId: 1,
    },

    stairsTypesParams : {
        selectedStairsTypesId: 1,
    },

    stairMaterialsParam: {
        selectedMaterialId: 1,

    },

    anderStagesParam: {
        anderStageTypeSum: 0,
        selectedAnderStageId: 1
    },

    windowsParams: {
        windowTypeSum: 0,
        selectedWindowTypeId: 1
    },

    flowParams: {
        flowTypeSum: 0,
        selectedFlowTypeId: 1
    },

    idTask: 1,
    isLogin: true,
    idAU: "",
    nameAU: "",
    lnameAU: "",
    loginAU: "",
    passwordAU: "",


    roofTypeSum: 0,
    ppp: 0,
    allSum: 0,
    countStages: 0,
    stairsWidth: 0,
    stairsHeight: 0,
    marchWidthSum: 0,

    homeSelectedType: "<<не выбрано>>",
    baseSelectedType: "<<не выбрано>>",
    wallSelectedType: "<<не выбрано>>",
    roofSelectedType: "<<не выбрано>>",
    heatingSelectedType: "<<не выбрано>>",
    windowSelectedName: "<<не выбрано>>",
    flowSelectedName: "<<не выбрано>>",
};

const typesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TYPE:
            return {
                ...state,
                typeSum: action.price,
                selectedStairsTypesId: action.selectedId,
                homeSelectedType: action.name
            }

        case UPDATE_MATERIAL:
            return {
                ...state,
                materialSum: action.price,
                selectedMaterialId: action.selectedId,
                baseSelectedType: action.name
            };

        case UPDATE_HEATING:
            return {
                ...state,
                heatingSum: action.price,
                selectedHeatingId: action.selectedId,
                heatingSelectedType: action.name
            };

        case UPDATE_WIDTH_STAGES:
            let a = action.newCount
            let b = 0

            if (a < 100 && a > 0)
            {
                b = 300
            }
            else if (a > 100 && a < 200)
            {
                b = 600
            }
            else {
                b = 2000
            }

            state.ppp = b

            return {
                ...state,
                stairsWidth: action.newCount,
                marchWidthSum: state.ppp
            };

        case UPDATE_HEIGHT_STAGES:
            return {
                ...state,
                stairsHeight: action.newCount,
                countStages: Math.round(action.newCount / 14)
            };

        case COUNT_ALL_SUM:
            return {
                ...state,
                allSum: (state.materialSum + state.anderStageSum + state.roofTypeSum + state.heatingSum) * (state.typeSum * 2)
            };

        case UPDATE_ANDER_STAGE:
            return {
                ...state,
                anderStageSum: action.price,
                selectedAnderStageId: action.selectedId,
                wallSelectedType: action.name
            };

        case UPDATE_ROOF_TYPE:
            return {
                ...state,
                roofTypeSum: action.price,
                selectedRoofTypeId: action.selectedId,
                roofSelectedType: action.name
            };

        case UPDATE_WINDOW:
            return {
                ...state,
                windowTypeSum: action.price,
                selectedWindowTypeId: action.selectedId,
                windowSelectedName: action.name
            };

        case UPDATE_FLOW:
            return {
                ...state,
                flowTypeSum: action.price,
                selectedFlowTypeId: action.selectedId,
                flowSelectedName: action.name
            };

        case UPDATE_ACTIVE_USER:
            return {
                ...state,
                idAU: action.id,
                nameAU: action.name,
                lnameAU: action.lname,
                loginAU: action.login,
                passwordAU: action.password,
            };

        case UPDATE_LOGIN_STATUS:
            return {
                ...state,
                isLoginUser: action.isLogin,
            };

        case ADD_TASK:
            let newTask = {
                id: 1,
                taskSum: action.allSum,
                baseSelectedType: action.baseSelectedType,
                wallSelectedType: action.wallSelectedType,
                roofSelectedType: action.roofSelectedType,
                heatingSelectedType: action.heatingSelectedType,
                windowSelectedName: action.windowSelectedName,
                flowSelectedName: action.flowSelectedName,
                taskHomeType: action.homeSelectedType
            };
            return {
                ...state,
                tasks: [...state.tasks, newTask],
            };

        case ADD_USER:
            let idUser = 0;

            let newUser = {
                id: ++idUser,
                name: action.nameUser,
                lname: action.lnameUser,
                login: action.loginUser,
                password: action.passwordUser,
            };
            return {
                ...state,
                users: [...state.users, newUser],
            };

        default:
            return state;
    }
}

export const updateTypeAC = (price, selectedId, name) => ({type: UPDATE_TYPE, price: price, selectedId: selectedId, name: name})
export const updateMaterialAC = (price, selectedId, name) => ({type: UPDATE_MATERIAL, price: price, selectedId: selectedId, name: name})
export const updateHeatingAC = (price, selectedId, name) => ({type: UPDATE_HEATING, price: price, selectedId: selectedId, name: name})

export const updateWidthStagesAC = (count) => ({type: UPDATE_WIDTH_STAGES, newCount: count})
export const updateHeightStagesAC = (count) => ({type: UPDATE_HEIGHT_STAGES, newCount: count})

export const countAllSumAC = () => ({type: COUNT_ALL_SUM})
export const updateAnderStageAC = (price, selectedId, name) => ({type: UPDATE_ANDER_STAGE, price: price, selectedId: selectedId, name: name})
export const updateRoofTypeAC = (price, selectedId, name) => ({type: UPDATE_ROOF_TYPE, price: price, selectedId: selectedId, name: name})
export const updateWindowTypeAC = (price, selectedId, name) => ({type: UPDATE_WINDOW, price: price, selectedId: selectedId, name: name})
export const updateFlowTypeAC = (price, selectedId, name) => ({type: UPDATE_FLOW, price: price, selectedId: selectedId, name: name})

export const addTaskAC = (allSum, homeSelectedType, baseSelectedType, wallSelectedType, roofSelectedType, heatingSelectedType, windowSelectedName, flowSelectedName) =>
    ({type: ADD_TASK,
        homeSelectedType: homeSelectedType,
        baseSelectedType: baseSelectedType,
        wallSelectedType: wallSelectedType,
        roofSelectedType: roofSelectedType,
        heatingSelectedType: heatingSelectedType,
        windowSelectedName: windowSelectedName,
        flowSelectedName: flowSelectedName,
        allSum: allSum })
export const updateIsLoginAC = (isLogin) => ({type: UPDATE_LOGIN_STATUS, isLogin: isLogin})
export const updateActiveUserAC = (id, name, lname, login, password) => ({type: UPDATE_ACTIVE_USER, id: id, name: name, lname: lname, login: login, password: password})
export const addUserAC = (nameUser, lnameUser, loginUser, passwordUser) => ({type: ADD_USER, nameUser: nameUser, lnameUser: lnameUser, loginUser: loginUser, passwordUser: passwordUser})


export default typesReducer;

