<template>
  <div class="header">
    <div class="header__main">
        <img src="../assets/aamir13.jpg" alt="zohaib pic" class="header__main--logo">
        <p>Hello! My name is Aamir Mushtaq</p>
        <h1>I'm a front-end developer</h1>
        <h1>I bring your <span>ideas to life</span></h1>
        <button>
            <a href="#">Portfolio</a>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M2 11V9h12l-4-4l1-2l7 7l-7 7l-1-2l4-4H2z" fill="white"/></svg>
        </button>
    </div>
    <nav class="header__nav">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact Me</a></li>
        </ul>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">


.header{
    display: grid;
    grid-template-rows: 100vh min-content;
    grid-template-columns: repeat(auto-fit,minmax(11rem, 1fr));

    &__main{
        grid-row: 1 / 2;
        grid-column: 1 / -1;

        background-image: url('../assets/header-bg-edited.png');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        font-size: 1.9rem;
        font-family: 'Poppins', sans-serif;  // 2,3,4,5,6
        color: white;
        padding: 0rem 0rem 2rem 0rem;
        text-align: center;

        &--logo{
            border-radius: 100%;
            width: 15rem;
            height: 15rem;
            margin-bottom: 1.8rem;
            object-fit: cover;
        }
        & > p{
            font-size: 2.2rem;
            font-weight: 400;
        }
        & > h1{
            font-weight: 400;
            // line-height: 6rem;
            & > span {
                color: #FFD700;
            }
        }
        & > button {
            font-size: 1.8rem;
            font-weight: 400;
            padding: 1rem 2rem;
            margin-top: 2.2rem;
            background-color: transparent;
            color: white;
            border: .2rem solid white;

            display: flex;
            align-items: center;

            & > a{
                margin-right: 1rem;
                text-decoration: none;
                font-size: 1.7rem;
                font-weight: 500;
                letter-spacing: .1rem;
                color: white;
            }
        }
    }
    &__nav{
        grid-row: 2 / 3;
        grid-column: 1 / -1;
        background-color: black;
        border-bottom: .5rem solid #2E86C1;
        & > ul{
            display: flex;
            justify-content: center;
            align-items: center;
            list-style-type: none;
            flex-wrap: wrap;

            & > li{
                margin: 1.3rem 1.6rem;
                &:first-child{
                    & > a{
                        color: #5DADE2;
                    }
                }
            }

            & > li > a{
                text-decoration: none;
                color: white;
                font-size: 1.7rem;
                // font-family: 'Lato', sans-serif;  // 3,4,7
                font-family: 'Poppins', sans-serif;  // 2,3,4,5,6
                // font-family: 'Roboto Slab', serif;   // 3,4,5,6,7
                font-weight: 300;
                // letter-spacing: .3rem;
            }
        }
    }
}

</style>