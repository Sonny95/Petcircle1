import {Divider, Rate, Slider, Tag} from "antd";
import DogBanner from "../resources/img/dog/DogPageBanner.png"
import Checkbox from "antd/es/checkbox/Checkbox";
import {useEffect, useState} from "react";
import {
    DogDogBanner,
    DogDogBigContainer,
    DogDogCheckBoxSelected,
    DogDogContainer,
    DogDogLeftContainer,
    DogDogMenuNameBox
} from "../resources/styledComponent/dog-dogPage";
import {CloseCircleOutlined} from '@ant-design/icons';
import {getData} from "../util/Api";
import ProductContents from "../component/Product/ProductContents";
import CheckComponent from "../component/Product/CheckComponent";
import {useLocation} from "react-router-dom";



/**
 * @author Mia
 * @date 2022-07-14
 * @description bird product 제품 리스트 컴포넌트
 */
export default function ProductListPage() {


    let location = useLocation();


    // category check list
    const [birdVarietyCheck, setBirdVarietyCheck] = useState([]);
    const [birdTypeCheck, setBirdTypeCheck] = useState([]);
    const [ratingCheckList, setRatingCheckList] = useState([]);
    const [maxPrice, setMaxPrice] = useState(0);
    const [price, setPrice] = useState([0, 0]);
    const [birdBrandCheck, setBirdBrandCheck] = useState([]);
    const [birdBreedCheck, setBirdBreedCheck] = useState([]);

    // 동적으로 화면에 제품 리스트를 보여주는 state
    const [dataList, setDataList] = useState([])

    // 데이터베이스에서
    const [birdOrigin, setBirdOrigin] = useState([]);
    const [category, setCategory] = useState('');

// =============================================initial logic===========================================================

    // 데이터베이스에 있는 bird product 관련 제품 정보 호출
    const getBirdList = (location) => {
        // 백엔드에서 birdList를 가져오는중...

        let sendUrl = ''

    switch(location){

        case 'bird' :
            sendUrl = 'birdList'
            break;
        case 'dog' :
            sendUrl = 'dogList'
            break;
        case 'cat' :
            sendUrl = 'catList'
            break;
        case 'other' :
            sendUrl = 'otherList'
            break;
    }
        getData.get(`dashboard/${sendUrl}`).then(res => {

            setBirdOrigin(res.data);
            setDataList(res.data);

            // 가져온 데이터중에서 물품이 제일 비싼녀석을 찾는 로직
            const maxPri = res.data.reduce((acc, cur, index) => {
                return acc > cur.price ? acc : cur.price
            }, res.data[0].price);

            //가격의 최대값
            setMaxPrice(maxPri);
            //초기 가격의 범위
            setPrice([0, maxPri]);
        });
    }


    // 페이지(컴포넌트) 가 열리자마자 처음으로 실행하는 함수(useEffect)
    useEffect(() => {
        if(location.pathname){
            const calldata = location.pathname.split('/')[1]
            setCategory(calldata)
            // 데이터베이스에 있는 bird product 관련 제품 정보 호출
            getBirdList(calldata);
        }

    }, [location.pathname])

// =====================================================================================================================

    useEffect(() => {

        let sendData = []

        // price value가 바뀔때마다 해당 가격의 제품들을 filter 하여 보여주는 로직
        const filterData = birdOrigin.filter(value => value.price >= price[0] && value.price <= price[1])

// ======1차적으로 variety 애덜 고르기

        // variety check 의 값이 1개 이상 있을경우

        if (birdVarietyCheck.length) {
            sendData = filterData.filter(value => birdVarietyCheck.includes(value.variety))

        } else {
            sendData = filterData
        }


// ======2차적으로 type 애덜 고르기
        // type check 의 값이 1개 이상 있을경우:
        if (birdTypeCheck.length) {
            // 위에서 걸러진 sendData 중에서 해당 type인 애들을 찾아서 거른다. 그리고 sendData에 다시 넎어준다.
            const resultData = sendData.filter(value => birdTypeCheck.includes(category === 'cat' ? value.Feature : value.type))
            sendData = resultData
        }


// ======3차적으로 type 애덜 고르기
        // type check 의 값이 1개 이상 있을경우
        if (ratingCheckList.length) {
            // 위에서 걸러진 sendData 중에서 해당 type인 애들을 찾아서 거른다. 그리고 sendData에 다시 넎어준다.
            const resultData = sendData.filter(value => ratingCheckList.includes(value.star))
            sendData = resultData
        }


// ======4차적으로 type 애덜 고르기
        // type check 의 값이 1개 이상 있을경우
        if (birdBrandCheck.length) {
            // 위에서 걸러진 sendData 중에서 해당 type인 애들을 찾아서 거른다. 그리고 sendData에 다시 넎어준다.
            const resultData = sendData.filter(value => birdBrandCheck.includes(value.brand))
            sendData = resultData
        }

// ======5차적으로 type 애덜 고르기
        // type check 의 값이 1개 이상 있을경우
        if (birdBreedCheck.length) {
            // 위에서 걸러진 sendData 중에서 해당 type인 애들을 찾아서 거른다. 그리고 sendData에 다시 넎어준다.
            const resultData = sendData.filter(value => birdBreedCheck.includes(category === 'cat' ? value.ProteinSource : value.breed))
            sendData = resultData
        }
        setDataList(sendData)


    }, [birdVarietyCheck, birdTypeCheck, ratingCheckList, price, birdBrandCheck, birdBreedCheck])


// ==========================================check product list===============================================================
    // check bird variety
    const varChangeChecked = (param, value) => {
        let copyList = [...birdVarietyCheck];
        if (param) {
            copyList.push(value.name);
        } else {
            const resultData = birdVarietyCheck.filter(src => src !== value.name);
            copyList = resultData
        }
        setBirdVarietyCheck(copyList)
    }


    // check bird type
    const birdTypeChangeChecked = (param, value) => {

        let copyList = [...birdTypeCheck];
        if (param) {
            copyList.push(value.name);
        } else {
            const resultData = birdTypeCheck.filter(src => src !== value.name);
            copyList = resultData
        }
        setBirdTypeCheck(copyList)
    }

    // check rating
    const checkRating = (count) => {

        const copyData = [...ratingCheckList]
        const findCheck = ratingCheckList.find(value => value === count)

        //uncheck
        if (findCheck) {

            const filterData = copyData.filter(value => value !== count);
            setRatingCheckList(filterData);

            //check
        } else {

            copyData.push(count)
            setRatingCheckList(copyData);
        }
    }



    // TODO: 이것때문에 뭔말인지 모르곘다.
    // check brand
    const birdBrandChangeChecked = (param, value) => {
        let copyList = [...birdBrandCheck];

        if (param) {
            copyList.push(value.name);
        } else {
            const resultData = birdBrandCheck.filter(src => src !== value.name);
            copyList = resultData
        }
        setBirdBrandCheck(copyList)
    }

    // check breed
    const birdBreedChangeChecked = (param, value) => {
        let copyList = [...birdBreedCheck];
        if (param) {
            copyList.push(value.name);
        } else {
            const resultData = birdBreedCheck.filter(src => src !== value.name);
            copyList = resultData
        }
        setBirdBreedCheck(copyList)
    }

// =====================================================================================================================


    const slideInitPro = () => {
        //price value를 초기화
        setPrice([0, maxPrice]);

        //실제 상품도 초기화상태에 따른 update해주기

        const reData = birdOrigin.filter(value => 1 <= value.price && maxPrice >= value.price);
        setDataList(reData);

    }


    return (
        <DogDogContainer>
            <DogDogBanner src={DogBanner}/>
            <DogDogBigContainer>


                <DogDogLeftContainer>

                    {birdVarietyCheck.map(value => <Tag color="cyan">{value} <CloseCircleOutlined
                        onClick={() => varChangeChecked(false, {name: value})}/>
                    </Tag>)}

                    {birdBrandCheck.map(value => <Tag color="volcano">{value} <CloseCircleOutlined
                        onClick={() => birdBrandChangeChecked(false, {name: value})}/>
                    </Tag>)}

                    {birdTypeCheck.map(value => <Tag color="yellow">{value}
                        <CloseCircleOutlined onClick={() => birdTypeChangeChecked(false, {name: value})}/></Tag>)}

                    {birdBreedCheck.map(value => <Tag color="green">{value}
                        <CloseCircleOutlined onClick={() => birdBreedChangeChecked(false, {name: value})}/></Tag>)}


                    {/*컨텐츠 필터 컴포넌트*/}
                    <CheckComponent location={category} dataList={dataList} type={'Variety'} setCheckList={setBirdVarietyCheck}
                                    checkList={birdVarietyCheck}/>
                    <Divider/>


                    <CheckComponent location={category}  dataList={dataList} type={category === 'cat' ? 'Feature':'Type'} setCheckList={setBirdTypeCheck}
                                    checkList={birdTypeCheck}/>
                    <Divider/>

                    <div style={{fontSize: 18, fontWeight: 700, paddingBottom: 10}}>Customer Rating
                        {[5, 4, 3, 2, 1].map(value =>
                            <Checkbox onClick={() => checkRating(value)} style={{marginLeft: 0}}><Rate disabled
                                                                                                       defaultValue={value}></Rate></Checkbox>
                        )}
                    </div>
                    <Divider/>
                    <DogDogMenuNameBox>price
                        {!(price[0] === 0 && price[1] === maxPrice) &&
                            <DogDogCheckBoxSelected onClick={slideInitPro}>Clear Seleceted</DogDogCheckBoxSelected>}
                    </DogDogMenuNameBox>
                    <Slider range step={0.01} value={price} max={maxPrice} onChange={(e) => setPrice(e)}/>
                    <div style={{paddingTop: 20}}>${price[0]} - ${price[1]} <span
                        style={{float: 'right'}}>{dataList.length}</span>
                    </div>
                    <Divider/>


                    <CheckComponent location={category}  dataList={dataList} type={'Brand'} setCheckList={setBirdBrandCheck}
                                    checkList={birdBrandCheck}/>
                    <Divider/>

                    <CheckComponent location={category}  dataList={dataList} type={category === 'cat' ? 'Protein' :'Breed'} setCheckList={setBirdBreedCheck}
                                    checkList={birdBreedCheck}/>

                </DogDogLeftContainer>


                {/*show productList*/}
                <ProductContents dataList={dataList}/>


            </DogDogBigContainer>


        </DogDogContainer>
    )
}