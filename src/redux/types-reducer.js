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

import paint1 from "../Images/StairsTypes/paint/1.jpg"
import paintView1 from "../Images/StairsTypes/paint/1View.png"
import paint2 from "../Images/StairsTypes/paint/2.jpg"
import paintView2 from "../Images/StairsTypes/paint/2View.png"
import paint3 from "../Images/StairsTypes/paint/3.jpg"
import paintView3 from "../Images/StairsTypes/paint/3View.png"

import heating1 from "../Images/StairsTypes/heating/1.jpg"
import heatingV1 from "../Images/StairsTypes/heating/1V.png"
import heating2 from "../Images/StairsTypes/heating/2.jpg"
import heatingV2 from "../Images/StairsTypes/heating/2V.png"
import heating3 from "../Images/StairsTypes/heating/3.jpg"
import heatingV3 from "../Images/StairsTypes/heating/3V.png"

const UPDATE_TYPE = 'UPDATE_TYPE';
const UPDATE_MATERIAL = 'UPDATE_MATERIAL';
const UPDATE_WIDTH_STAGES = 'UPDATE_WIDTH_STAGES';
const UPDATE_HEIGHT_STAGES = 'UPDATE_HEIGHT_STAGES';
const COUNT_ALL_SUM = 'COUNT_ALL_SUM';
const UPDATE_ANDER_STAGE = 'UPDATE_ANDER_STAGE';
const UPDATE_PAINT_TYPE = 'UPDATE_PAINT_TYPE';
const UPDATE_HEATING = 'UPDATE_HEATING';

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

    paintType:
        {
            paintTypeItems:[
                {id: 1, name:'Металло-черепица', img: paint1, viewImg: paintView1, price: 200, description:"Хорошо выдерживает нагрузку и воздействие внешних факторов, к тому же долговечна" },
                {id: 2, name:'Мягкая кровля', img: paint2, viewImg: paintView2, price: 350, description:"Лента шириной 1,5-2 метра, состоящая из нескольких слоев гидроизоляционного материала." },
                {id: 3, name:'Цементная черепица', img: paint3, viewImg: paintView3, price: 450, description:"Вид черепицы, изготавливаемый из портландцемента, кварцевого песка, с добавлением минеральных пигментов."},
            ],
            selectedPaintTypeId: 1,
        },

    heatingType:
        [
            {id: 1, name: 'Радиаторы', img: heating1, viewImg: heatingV1, price: 1000, description:"Классический вариант отопления"},
            {id: 2, name: 'Водяной теплый пол', img: heating2, viewImg: heatingV2, price: 2000, description:"Отопление скрыто под полом. отапливается за счет воды."},
            {id: 3, name: 'Электро теплый пол', img: heating3, viewImg: heatingV3, price: 1500, description:"Отопление скрыто под полом. отапливается за счет электричества."}
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

    paintTypeSum: 0,
    ppp: 0,
    allSum: 0,
    countStages: 0,
    stairsWidth: 0,
    stairsHeight: 0,
    marchWidthSum: 0
};

const typesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TYPE:
            debugger
            return {
                ...state,
                typeSum: action.price,
                selectedStairsTypesId: action.selectedId
            }

        case UPDATE_MATERIAL:
            debugger
            return {
                ...state,
                materialSum: action.price,
                selectedMaterialId: action.selectedId
            };

        case UPDATE_HEATING:
            debugger
            return {
                ...state,
                heatingSum: action.price,
                selectedHeatingId: action.selectedId
            };

        case UPDATE_WIDTH_STAGES:
            debugger
            let a = action.newCount
            let b = 0

            if (a < 100 && a > 0)
            {
                debugger
                b = 300
            }
            else if (a > 100 && a < 200)
            {
                debugger
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
            debugger
            return {
                ...state,
                allSum: (state.materialSum + state.anderStageSum + state.paintTypeSum + state.heatingSum) * (state.typeSum * 2)
            };

        case UPDATE_ANDER_STAGE:
            debugger


            return {
                ...state,
                anderStageSum: action.price,
                selectedAnderStageId: action.selectedId
            };

        case UPDATE_PAINT_TYPE:
            debugger
            return {
                ...state,
                paintTypeSum: action.price,
                selectedPaintTypeId: action.selectedId
            };

        default:
            return state;
    }
}

export const updateTypeAC = (price, selectedId) => ({type: UPDATE_TYPE, price: price, selectedId: selectedId})
export const updateMaterialAC = (price, selectedId) => ({type: UPDATE_MATERIAL, price: price, selectedId: selectedId})
export const updateHeatingAC = (price, selectedId) => ({type: UPDATE_HEATING, price: price, selectedId: selectedId})

export const updateWidthStagesAC = (count) => ({type: UPDATE_WIDTH_STAGES, newCount: count})
export const updateHeightStagesAC = (count) => ({type: UPDATE_HEIGHT_STAGES, newCount: count})

export const countAllSumAC = () => ({type: COUNT_ALL_SUM})
export const updateAnderStageAC = (price, selectedId) => ({type: UPDATE_ANDER_STAGE, price: price, selectedId: selectedId})
export const updatePaintTypeAC = (price, selectedId) => ({type: UPDATE_PAINT_TYPE, price: price, selectedId: selectedId})


export default typesReducer;

