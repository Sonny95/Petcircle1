import {useParams} from "react-router-dom";
import {getData} from "../../util/Api";
import {useEffect, useState} from "react";
import {DogDogRightContainer, DogDogRightLetter} from "../../resources/styledComponent/dog-dogPage";
import {ProductImage} from "../../resources/styledComponent/bird-birdPage";

export default function DetailContents(){


    const param = useParams();

    const [data, setData] = useState([]);


    useEffect(()=>{
        const productKey = param.postId.split('_');
        console.log(productKey,'productKey')
        let parameter = {
            type : productKey[0],
            key : productKey[1]
        }
        getData.post(`product/detail`, parameter).then(res => {
            setData(res.data[0])
        });
    },[])


    return <>
        <img src={'http://localhost:8080/img/bird/' + data.source}/>
    </>
}