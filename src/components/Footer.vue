<template>
    <div class="footer">
        <div class="footer__content">
            <div class="footer__content--main">
                <ul>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">What I do?</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Ping me</a></li>
                </ul>
            </div>
            <div class="footer__content--copy">
                <p>2021 &nbsp;
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4c.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7c0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4c0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3c-4.2 46.1-40.1 77.8-93 77.8c-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z" fill="#BDC3C7"/></svg>
                        &nbsp;all copyrights are reserved by Aamir Mushtaq</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .footer{
        background-color: #333536;
        // display: flex;
        // justify-content: center;
        &__content{
            max-width: 130rem;
            margin: -15rem auto 0rem auto;
            padding: 20rem 12rem 0rem 12rem;
            @media screen and (max-width: 600px){ // 1200px/16 = 75em
                padding: 10rem 4rem 0rem 4rem;
            }
            @media screen and (max-width: 850px){ // 1200px/16 = 75em
                margin: 0rem auto 0rem auto;
                padding: 10rem 12rem 0rem 12rem;
            }
            &--main{
                padding: 0rem 0rem 1.5rem 0rem;
                border-bottom: .1rem solid #797D7F;
                & > ul{
                    & > li{
                        list-style-type: none;
                        & > a{
                            font-size: 1.6rem;
                            color: white;
                            text-decoration: none;
                            @media screen and (max-width: 600px){ // 1200px/16 = 75em
                                font-size: 1.8rem;
                            }
                        }
                    }
                }
            }
            &--copy{
                font-size: 1.5rem;
                font-weight: 400;
                color: #BDC3C7;
                text-align: center;
                padding: 1.7rem 0rem 1.7rem 0rem;
                display: flex;
                justify-content: center;
                @media screen and (max-width: 600px){ // 1200px/16 = 75em
                    font-size: 1.7rem;
                }
                & > p{
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    
                }
            }
        }
    }
</style>