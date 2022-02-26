import Vet1 from "../../resources/Photo/Vet1.png"
import Vet2 from "../../resources/Photo/VetTips2.png"
import Vet3 from "../../resources/Photo/VetTips3.png"
import Vet4 from "../../resources/Photo/VetTips4.png"
import Vet5 from "../../resources/Photo/VetArticles1.jpg"
import Vet6 from "../../resources/Photo/VetArticles2.jpg"
import Vet7 from "../../resources/Photo/VetArticles3.png"
import {
    ArticleCapital,
    ArticleLetter,
    ArticleListBox,
    ArtlcleListImg, NewDogBox, ShwMore,
    Tips1,
    Tips1Background,
    Tips1Letter,
    Tips1LetterBox,
    TipsBigContainer,
    TipsBigContainer2,
    VetArticleLetter,
    VetArticleLetter2,
    VetListImg,
    VetSearchBar,
    VetSearchBarContainer,
    VetSearchButton
} from "../../resources/styledComponent/tips";
import { Space } from 'antd';
import {PlusSquareTwoTone } from '@ant-design/icons';

const VetList = [
    {src: Vet2, key: '1'},
    {src: Vet3, key: '2'},
    {src: Vet4, key: '3'}
]


const Tips = () => {
    return (
        <TipsBigContainer>
            <TipsBigContainer2>
                <Tips1Background>
                    <Tips1 src={Vet1}></Tips1>
                    <Tips1LetterBox>
                        <div>Whether you're already a pet parent,</div>
                        <div> or getting ready to welcome a new member of your family,</div>
                        <div>Pet Circle's Vet Squad are here to help!</div>
                    </Tips1LetterBox>
                </Tips1Background>

                {VetList.map((value, index) => {
                    return (
                        <VetListImg src={value.src}></VetListImg>
                    )
                })}

                <VetArticleLetter>Vet Articles</VetArticleLetter>
                <VetArticleLetter2>Browse or search for articles and videos put together by our Pet Circle Vet Squad and
                    other guest contributors.</VetArticleLetter2>
                <VetSearchBarContainer>

                    <VetSearchBar type='text' placeholder={'Search for a vet article'}/>
                    <VetSearchButton>Search</VetSearchButton>
                </VetSearchBarContainer>

                <ArticleListBox>

<NewDogBox>
    <ArtlcleListImg src={Vet5}></ArtlcleListImg>
                    <ArticleCapital>New dog & puppy basics</ArticleCapital>
                    <ArticleLetter>New puppy guide</ArticleLetter>
                    <ArticleLetter>Biting, chewing, pooping: A puppy training guide</ArticleLetter>
                    <ArticleLetter>Puppy food guide</ArticleLetter>
                    <ArticleLetter>How to choose the right dog breed</ArticleLetter>
                    <ArticleLetter>Our best dog names for 2020</ArticleLetter>
    <div>
    <space><PlusSquareTwoTone style={{float:'left'}} /></space>
                    <ShwMore>show more</ShwMore>

    </div>
</NewDogBox>
                    <NewDogBox>
                        <ArtlcleListImg src={Vet6}></ArtlcleListImg>
                    <ArticleCapital>Dog & cat nutrition</ArticleCapital>
                    <ArticleLetter>Premium pet food: Is it worth it?</ArticleLetter>
                    <ArticleLetter>Does grain free dog food cause heart disease?</ArticleLetter>
                    <ArticleLetter>Which pet food is Australian-made?</ArticleLetter>
                    <ArticleLetter>What is the best food for a sensitive stomach?</ArticleLetter>
                    <ArticleLetter>Signs your dog may have a food allergy</ArticleLetter>
                    <div>show more</div>

                        </NewDogBox>

                    <NewDogBox>
                        <ArtlcleListImg src={Vet7}></ArtlcleListImg>
                    <ArticleCapital>Dog & cat health</ArticleCapital>
                    <ArticleLetter>Hemp and cannabis oil for pets</ArticleLetter>
                    <ArticleLetter>Your guide to fleas, ticks and worms</ArticleLetter>
                    <ArticleLetter>How to stop your dog scratching once and for all</ArticleLetter>
                    <ArticleLetter>Ehrlichiosis in Australia: the new, tick-borne disease</ArticleLetter>
                    <ArticleLetter>Daily habits for pet health</ArticleLetter>
                    <div>show more</div>
                    </NewDogBox>
                </ArticleListBox>


            </TipsBigContainer2>
        </TipsBigContainer>
    )
}

export default Tips;