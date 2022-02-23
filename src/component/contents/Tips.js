import Vet1 from "../../resources/Photo/Vet1.png"
import Vet2 from "../../resources/Photo/VetTips2.png"
import Vet3 from "../../resources/Photo/VetTips3.png"
import Vet4 from "../../resources/Photo/VetTips4.png"
import Vet5 from "../../resources/Photo/VetArticles1.jpg"
import Vet6 from "../../resources/Photo/VetArticles2.jpg"
import Vet7 from "../../resources/Photo/VetArticles3.png"
import {
    ArticleListBox,
    ArtlcleListImg,
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


const VetList = [
    {src: Vet2, key: '1'},
    {src: Vet3, key: '2'},
    {src: Vet4, key: '3'}
]

const VetArticleList = [
    {src: Vet5, key: '1'},
    {src: Vet6, key: '2'},
    {src: Vet7, key: '3'},
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
                    {VetArticleList.map((value, index) => {
                        return (
                            <ArtlcleListImg src={value.src}></ArtlcleListImg>
                        )
                    })}
                </ArticleListBox>
                <div>New dog & puppy basics</div>
                <div>New puppy guide</div>
                <div>Biting, chewing, pooping: A puppy training guide</div>
                <div>Puppy food guide</div>
                <div>How to choose the right dog breed</div>
                <div>Our best dog names for 2020</div>
                <div>show more</div>


                <div>Dog & cat nutrition</div>
                <div>Premium pet food: Is it worth it?</div>
                <div>Does grain free dog food cause heart disease?</div>
                <div>Which pet food is Australian-made?</div>
                <div>What is the best food for a sensitive stomach?</div>
                <div>Signs your dog may have a food allergy</div>
                <div>show more</div>


                <div>Dog & cat health</div>
                <div>Hemp and cannabis oil for pets</div>
                <div>Your guide to fleas, ticks and worms</div>
                <div>How to stop your dog scratching once and for all</div>
                <div>Ehrlichiosis in Australia: the new, tick-borne disease</div>
                <div>Daily habits for pet health</div>
                <div>show more</div>

            </TipsBigContainer2>
        </TipsBigContainer>
    )
}

export default Tips;