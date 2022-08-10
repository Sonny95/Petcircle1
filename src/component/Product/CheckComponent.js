import {
    DogDogCheckBoxSelected,
    DogDogMenuNameBox,
    DogDogVarietyCountBox, VerietyTrigger
} from "../../resources/styledComponent/dog-dogPage";
import {Checkbox} from "antd";
import {BirdBrandList, BirdBreedList, BirdTypeList, BirdVarietyList} from "../../util/BirdSample";
import {useEffect, useState} from "react";
import {CatBrandList, CatFeatureList, CatVarietyList, ProteinList} from "../../util/CatSample";
import {BrandList, FlavourList, TypeList, VarietyList} from "../../util/sample";
import {OtherBreedList, OtherTypeList, OtherVarietyList} from "../../util/OtherSample";

export default function CheckComponent({dataList, type, checkList, setCheckList, location}){


    const [trigger, setTrigger] = useState(false);
    const [categoryList, setCategoryList]  = useState([]);


    //프로덕트 현재 선택된 제품의 수를 표현하는 함수
    const getProductLength = (name, type) => {

        switch (type) {

            case 'Variety' :
                const reulstData = dataList.filter(e => e.variety === name);
                return reulstData.length

            case 'Type' :
                const typeResultData = dataList.filter(e => e.type === name);
                return typeResultData.length

            case 'Feature' :
                const featureResultData = dataList.filter(e => e.Feature === name);
                return featureResultData.length

            case 'Protein' :
                const proteinResultData = dataList.filter(e => e.ProteinSource === name);
                return proteinResultData.length

            case 'Brand' :
                const brandResultData = dataList.filter(e => e.brand === name);
                return brandResultData.length

            case 'Breed' :
                const breedResultData = dataList.filter(e => e.breed === name);
                return breedResultData.length
        }
    }


    useEffect(()=>{

        console.log(location)
        if(location ==='bird'){
            switch (type) {

                case 'Variety' :
                    setCategoryList(BirdVarietyList);
                    break;
                case 'Type' :
                    setCategoryList(BirdTypeList);
                    break;
                case 'Brand' :
                    setCategoryList(BirdBrandList);
                    break;
                case 'Breed' :
                    setCategoryList(BirdBreedList);
                    break;
            }
        }else if( location==='dog') {
            switch (type) {

                case 'Variety' :
                    setCategoryList(VarietyList);
                    break;
                case 'Type' :
                    setCategoryList(TypeList);
                    break;
                case 'Brand' :
                    setCategoryList(BrandList);
                    break;
                case 'Breed' :
                    setCategoryList(FlavourList);
                    break;
            }
        }else if( location ==='cat') {
            switch (type) {
                case 'Variety' :
                    setCategoryList(CatVarietyList);
                    break;
                case 'Brand' :
                    setCategoryList(CatBrandList);
                    break;
                case 'Feature' :
                    setCategoryList(CatFeatureList);
                    break;
                case 'Protein' :
                    setCategoryList(ProteinList);
                    break;
            }
        }else{
            switch (type) {
                case 'Variety' :
                    setCategoryList(OtherVarietyList);
                    break;
                case 'Type' :
                    setCategoryList(OtherTypeList);
                    break;
                case 'Brand' :
                    setCategoryList(OtherBreedList);
                    break;
                case 'Breed' :
                    setCategoryList(BirdBreedList);
                    break;
            }
        }

    },[type, location])

    // check breed
    const changeChecked = (param, value) => {
        let copyList = [...checkList];
        if (param) {
            copyList.push(value.name);
        } else {
            const resultData = checkList.filter(src => src !== value.name);
            copyList = resultData
        }
        setCheckList(copyList)
    }

    return     <>
    <DogDogMenuNameBox>{type}
        {checkList.length !== 0 &&
            <DogDogCheckBoxSelected
                onClick={() => setCheckList([])}>Clear Selected</DogDogCheckBoxSelected>}
    </DogDogMenuNameBox>
    {categoryList.map((value, index) => {
        if (index > 4 && !trigger) {
            return null;
        } else {
            return <div style={{width: 250, height: 28}}>
                <Checkbox checked={checkList.filter(src => src === value.name)[0]}
                          style={{float: 'left'}}
                          onChange={(e) => changeChecked(e.target.checked, value)}
                > {value.name}</Checkbox>
                <DogDogVarietyCountBox>{getProductLength(value.name, type)}</DogDogVarietyCountBox>
            </div>
        }
    })}

    <VerietyTrigger
        onClick={() => setTrigger(!trigger)}>{trigger ? '- See less' : '+ See more'} </VerietyTrigger>
    </>
}