<template>
    <div class="exp">
        <div class="exp--head">
            <h1>Portfolio</h1>
        </div>
        <div class="exp__main">
            <div class="exp__main--common">
                <img src="../assets/social-app.png" alt="killtime img">
                <div class="exp__main--common--desc">
                    <h2>Killtime</h2>
                    <p>Social application to make friends and spend time well.</p>
                    <button>
                        <span>More</span>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M2 11V9h12l-4-4l1-2l7 7l-7 7l-1-2l4-4H2z" fill="black"/></svg>
                    </button>
                </div>
            </div>
            <div class="exp__main--common">
                <img src="../assets/handbag-app.png" alt="killtime img">
                <div class="exp__main--common--desc">
                    <h2>Stockbag</h2>
                    <p>Store to buy and cell handbags and other accessories.</p>
                    <button>
                        <span>More</span>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M2 11V9h12l-4-4l1-2l7 7l-7 7l-1-2l4-4H2z" fill="black"/></svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Poppins:wght@200;300;400;500;600&family=Roboto+Slab:wght@300;400;500;600;700&display=swap');


.exp{
    display: grid;
    grid-template-rows: repeat(2, min-content);
    grid-template-columns: repeat(auto-fit,minmax(11rem, 1fr));
    // align-items: center;
    // justify-items: center;
    background-color: #D3F3F0;
    padding: 7rem 0rem;

    &--head{
        grid-row: 1 / 2;
        grid-column: 1 / -1;
        align-self: center; //vertically
        justify-self: center; //horizontally
        margin-bottom: 3rem;
        & > h1{
            font-size: 4.5rem;
            font-family: 'Poppins', sans-serif;  // 2,3,4,5,6
            font-weight: 450;
            text-align: center;
            text-decoration: underline;
            color: #2E4053;
        }
    }
    &__main{
        grid-row: 2 / 3; 
        grid-column: 1 / -1;

        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        // margin: 0rem 25rem;
        max-width: 85rem;
        // max-width: 100rem;
        margin: 0rem auto;

        

        &--common{
            margin: 0rem 3rem;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;

            @media screen and (max-width: 686px){ // 900px/16 = 56.25em
                &:first-child{
                    margin-bottom: 5rem;
                    & > img{
                        display: none;
                    }
                }
            } 
            & > img{
                width: 36rem;
                height: 36rem;
                @media screen and (max-width: 686px){ // 900px/16 = 56.25em
                    width: 50rem;
                    height: 50rem;
                } 
            }
            &--desc{
                background-color: #F2F3F4;
                width: 36rem;
                // height: 16rem;
                height: min-content;
                padding: 1.5rem 1.5rem;
                @media screen and (max-width: 686px){ // 900px/16 = 56.25em
                    width: 50rem;
                    height: min-content;
                } 
                & > h2{
                    font-size: 2.2rem;
                    font-family: 'Poppins', sans-serif;  // 2,3,4,5,6
                    text-decoration: underline;
                    text-decoration-color: #F39C12;
                    text-decoration-style: double;
                    margin-top: 0rem;
                    @media screen and (max-width: 686px){ // 900px/16 = 56.25em
                        font-size: 2.4rem;
                    }
                }
                & > p{
                    font-size: 1.5rem;
                    margin-top: .5rem;
                    font-family: 'Poppins', sans-serif;  // 2,3,4,5,6
                    @media screen and (max-width: 686px){ // 900px/16 = 56.25em
                        font-size: 1.9rem;
                    }
                }
                & > button{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    border: .2rem solid black;
                    font-size: 1.8rem;
                    font-family: 'Poppins', sans-serif;  // 2,3,4,5,6
                    padding: .5rem 1rem;
                    margin: 1rem 0rem;
                    & > svg{
                        margin-left: .6rem;
                    }
                }
            }
        }
        }
    }
</style>