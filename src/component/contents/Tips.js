import Vet1 from "../../resources/Photo/Vet1.png"
import Vet2 from "../../resources/Photo/VetTips2.png"
import Vet3 from "../../resources/Photo/VetTips3.png"
import Vet4 from "../../resources/Photo/VetTips4.png"
import Vet5 from "../../resources/Photo/VetArticles1.jpg"
import Vet6 from "../../resources/Photo/VetArticles2.jpg"
import Vet7 from "../../resources/Photo/VetArticles3.png"
import Vet8 from "../../resources/img/dog/DogAddImg/VetArticles4.png"
import Vet9 from "../../resources/img/dog/DogAddImg/VetArticles5.png"
import Vet10 from "../../resources/img/dog/DogAddImg/VetArticles6.png"

import {
    ArticleCapital,
    ArticleLetter,
    ArticleListBox, ArticleUnderLine,
    ArtlcleListImg, DiscoverBox, DiscoverContainer, DiscoverImg, NewDogBox, ShowBox, ShowMore, ShwMore,
    Tips1,
    Tips1Background,
    Tips1Letter,
    Tips1LetterBox,
    TipsBigContainer,
    TipsBigContainer2, TipsBox, TipsListingBox, VetArticleimgBox,
    VetArticleLetter,
    VetArticleLetter2, VetArticleLetterBox,
    VetListImg,
    VetSearchBar,
    VetSearchBarContainer,
    VetSearchButton, VetTipLetter1, VetTipLetter2, VetTipsArticleImgBox, VetTipsArticleTitle, VetTipsExplain
} from "../../resources/styledComponent/tips";
import {Space} from 'antd';
import {PlusSquareTwoTone} from '@ant-design/icons';
import {DiscoverList} from "../../util/sample";

const VetList = [
    {src: Vet2, key: '1'},
    {src: Vet3, key: '2'},
    {src: Vet4, key: '3'}
]


const Tips = () => {
    return (
        <TipsBigContainer>
            <TipsBigContainer2>
                <TipsBox>
                    <Tips1Background>

                        <Tips1 src={Vet1}></Tips1>
                        <Tips1LetterBox>
                            <VetTipLetter1>Vet Tips to Pet Better</VetTipLetter1>
                            <VetTipLetter2>Whether you're already a pet parent, or getting ready to welcome a new</VetTipLetter2>
                            <VetTipLetter2>member of your family, Pet Circle's Vet Squad are here to help!</VetTipLetter2>
                        </Tips1LetterBox>
                    </Tips1Background>
                </TipsBox>


                <TipsListingBox>
                    {VetList.map((value, index) => {
                        return (
                            <VetListImg src={value.src}></VetListImg>
                        )
                    })}
                </TipsListingBox>

                <VetArticleLetterBox>
                    <VetArticleLetter>Vet Articles</VetArticleLetter>
                    <VetArticleLetter2>Browse or search for articles and videos put together by our Pet Circle Vet Squad
                        and
                        other guest contributors.</VetArticleLetter2>
                    <VetSearchBarContainer>
                        <VetSearchBar type='text' placeholder={'Search for a vet article'}/>
                        <VetSearchButton>Search</VetSearchButton>
                    </VetSearchBarContainer>
                </VetArticleLetterBox>


                <VetTipsArticleImgBox>
                    <NewDogBox>
                        <ArtlcleListImg src={Vet5}></ArtlcleListImg>
                        <ArticleCapital>New dog & puppy basics</ArticleCapital>
                        <ArticleLetter>New puppy guide</ArticleLetter>
                        <ArticleLetter>Biting, chewing, pooping: A puppy training guide</ArticleLetter>
                        <ArticleLetter>Puppy food guide</ArticleLetter>
                        <ArticleLetter>How to choose the right dog breed</ArticleLetter>
                        <ArticleLetter>Our best dog names for 2020</ArticleLetter>
                        <div style={{marginLeft: 8}}>
                            <space><PlusSquareTwoTone style={{float: 'left', marginTop: 10, marginRight: 5}}/></space>
                            <ShowMore>show more</ShowMore>

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
                        <div style={{marginLeft: 8}}>
                            <space><PlusSquareTwoTone style={{float: 'left', marginTop: 10, marginRight: 5,}}/></space>
                            <ShowMore>show more</ShowMore>

                        </div>

                    </NewDogBox>

                    <NewDogBox>
                        <ArtlcleListImg src={Vet7}></ArtlcleListImg>
                        <ArticleCapital>Dog & cat health</ArticleCapital>
                        <ArticleLetter>Hemp and cannabis oil for pets</ArticleLetter>
                        <ArticleLetter>Your guide to fleas, ticks and worms</ArticleLetter>
                        <ArticleLetter>How to stop your dog scratching once and for all</ArticleLetter>
                        <ArticleLetter>Ehrlichiosis in Australia: the new, tick-borne disease</ArticleLetter>
                        <ArticleLetter>Daily habits for pet health</ArticleLetter>
                        <div style={{marginLeft: 8}}>
                            <space><PlusSquareTwoTone style={{float: 'left', marginTop: 10, marginRight: 5}}/></space>
                            <ShowMore>show more</ShowMore>

                        </div>
                    </NewDogBox>

                    <NewDogBox>
                        <ArtlcleListImg src={Vet8}></ArtlcleListImg>
                        <ArticleCapital>Horse care</ArticleCapital>
                        <ArticleLetter>Choosing the best supplements for your horse</ArticleLetter>
                        <ArticleLetter>Horse feeding guide</ArticleLetter>
                        <ArticleLetter>Managing common skin problems in horses</ArticleLetter>
                        <ArticleLetter>First aid for horses</ArticleLetter>
                        <ArticleLetter>Horse worming guide</ArticleLetter>
                        <div style={{marginLeft: 8}}>
                            <space><PlusSquareTwoTone style={{float: 'left', marginTop: 10, marginRight: 5}}/></space>
                            <ShowMore>show more</ShowMore>

                        </div>

                    </NewDogBox>
                    <NewDogBox>
                        <ArtlcleListImg src={Vet9}></ArtlcleListImg>
                        <ArticleCapital>Bird care</ArticleCapital>
                        <ArticleLetter>Why your bird should be eating pellets</ArticleLetter>
                        <ArticleLetter>The best toys for pet birds</ArticleLetter>
                        <ArticleLetter>Backyard Chicken Guide</ArticleLetter>
                        <ArticleLetter>Beginner's guide to bird care</ArticleLetter>
                        <ArticleLetter>Common bird illnesses and how to avoid them</ArticleLetter>
                        <div style={{marginLeft: 8}}>
                            <space><PlusSquareTwoTone style={{float: 'left', marginTop: 10, marginRight: 5}}/></space>
                            <ShowMore>show more</ShowMore>

                        </div>

                    </NewDogBox>
                    <NewDogBox>
                        <ArtlcleListImg src={Vet10}></ArtlcleListImg>
                        <ArticleCapital>Fish, pond & aquarium care</ArticleCapital>
                        <ArticleLetter>The beginner's guide to seeting up a fish tank</ArticleLetter>
                        <ArticleLetter>How to choose the best food for your fish</ArticleLetter>
                        <ArticleLetter>Best fish for small aquariums</ArticleLetter>
                        <ArticleLetter>Is it cruel to keep fish in a bowl?</ArticleLetter>
                        <ArticleLetter>Truth & myth: Siamese Fighting Fish facts</ArticleLetter>
                        <div style={{marginLeft: 8}}>
                            <space><PlusSquareTwoTone style={{float: 'left', marginTop: 10, marginRight: 5}}/></space>
                            <ShowMore>show more</ShowMore>
                        </div>
                    </NewDogBox>
                </VetTipsArticleImgBox>

                <ArticleUnderLine></ArticleUnderLine>
                <ArticleCapital>Discover More...</ArticleCapital>
                <DiscoverContainer>
                    {DiscoverList.map(value=> {
                        return (
                            <DiscoverBox>
                            <DiscoverImg src={value.source}></DiscoverImg>
                            </DiscoverBox>
                        )

                    })}
                    <VetTipsExplain>*Between 10pm and 6am vet enquiries will be triaged by our customer service team*</VetTipsExplain>
                </DiscoverContainer>

            </TipsBigContainer2>
        </TipsBigContainer>
    )
}

export default Tips;