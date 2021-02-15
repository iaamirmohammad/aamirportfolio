<template>
    <div class="contact">
        <div class="contact__main">
            <h1>Get in touch</h1>
            <p>Do you have a project on your mind? Do you want to make your business grow and look
                awesome? Contact me I'll help you to bring your ideas to life.
            </p>
            <div class="contact__main--no">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222c0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4l-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2c0-101.7 82.8-184.5 184.6-184.5c49.3 0 95.6 19.2 130.4 54.1c34.8 34.9 56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18c-5.1-1.9-8.8-2.8-12.5 2.8c-3.7 5.6-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4c-32.6-16.3-54-29.1-75.5-66c-5.7-9.8 5.7-9.1 16.3-30.3c1.8-3.7.9-6.9-.5-9.7c-1.4-2.8-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5c-3.2-.2-6.9-.2-10.6-.2c-3.7 0-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3c0 27.3 19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8c35.2 15.2 49 16.5 66.6 13.9c10.7-1.6 32.8-13.4 37.4-26.4c4.6-13 4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z" fill="#03a9f4"/></svg>
                <p>+923075160744</p>
            </div>
            <div class="contact__main--no">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="2em" height="2em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-2.2 2L16 14.78L6.2 8zM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24z" fill="#03a9f4"/></svg>
                <p>aamirmushtaq.inn@gmail.com</p>
            </div>
        </div>
        <div class="contact__form">
            <h1>Contact me</h1>
            <form action="#" method="get">
                <input type="text" id="fname" name="fname" placeholder="First name"><br>
                <input type="text" id="email" name="email" placeholder="Email address"><br>
                <textarea id="message" name="message" placeholder="Message"></textarea><br>
                <input type="submit" value="Send">
            </form> 
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.contact{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;

    max-width: 130rem;
    // margin: 7rem auto 5rem auto;
    margin: 7rem 5rem 7rem 5rem;
    @media screen and (min-width: 1400px){ // 1200px/16 = 75em
        margin: 7rem auto 5rem auto;
    }

    &__main{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 45rem;
        margin-bottom: 5rem;

        @media screen and (max-width: 850px){ // 1200px/16 = 75em
            width: 58rem;
        } 

        & > h1{
            font-size: 4rem;
            font-family: 'Poppins', sans-serif;  // 2,3,4,5,6
            font-weight: 500;
            color: #212F3D;
            margin: 0rem 0rem 4rem 0rem;
            
        }
        & > p{
            font-size: 1.7rem;
            font-weight: 400;
            color: #34495E;
            margin: 0rem 0rem 3rem 0rem;
            @media screen and (max-width: 850px){ // 1200px/16 = 75em
                font-size: 2rem;
            }
        }
        &--no{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: .5rem 0rem;
            & > p{
                font-size: 1.6rem;
                font-weight: 400;
                color: #34495E;
                margin-left: 2.5rem;
                @media screen and (max-width: 850px){ // 1200px/16 = 75em
                    font-size: 1.8rem;
                }
            }
        }
    }
    &__form{
        // max-width: 60rem;
        width: 44rem;
        // height: 0rem;
        padding: 2.5rem;
        // border: .1rem solid green;
        box-shadow: .3rem .1rem .8rem #888888;
        // z-index: 1;
        border-radius: 5px;
        background-color: white;
        @media screen and (max-width: 850px){ // 1200px/16 = 75em
            width: 57rem;
        } 
        & > h1{
            font-size: 2.2rem;
            font-weight: 500;
            padding: 1.5rem 0rem 0rem 2.7rem;
        }
        & > form{
            padding: 0rem 1rem 1rem 1rem;
            text-align: center;
            & > input[type=text]{
                font-family: "Lucida Grande",Verdana;
                font-size: 1.7rem;
                width: 95%;
                padding: 1.2rem 2rem;
                margin: .8rem 0rem;
                display: inline-block;
                border: .1rem solid #ccc;
                border-radius: .4rem;
                box-sizing: border-box;
                @media screen and (max-width: 850px){ // 1200px/16 = 75em
                    font-size: 2rem;
                }
            }

            & > input[type=submit] {
                font-family: "Lucida Grande",Verdana;
                font-size: 1.7rem;
                width: 95%;
                background-color: #2E86C1;
                font-weight: bolder;
                color: white;
                padding: 1.2rem 2rem;
                margin: .8rem 0rem;
                border: none;
                border-radius: .4rem;
                cursor: pointer;
                @media screen and (max-width: 850px){ // 1200px/16 = 75em
                    font-size: 2rem;
                }
            }
            & > #message{
                font-family: "Lucida Grande",Verdana;
                font-size: 1.7rem;
                width: 95%;
                height: 18rem;
                padding: 1.2rem 2rem;
                margin: .8rem 0rem;
                display: inline-block;
                border: .1rem solid #ccc;
                border-radius: .4rem;
                box-sizing: border-box;
                @media screen and (max-width: 850px){ // 1200px/16 = 75em
                    font-size: 2rem;
                }
            }
        }
    }
}
</style>