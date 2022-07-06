<script lang="ts">
    import { page } from '$app/stores';
    // imgs
    import right_arrow from '$lib/assets/fontAwesome/right-arrow.svg';
    import facebook from '$lib/assets/fontAwesome/facebook.svg';
    import instagram from '$lib/assets/fontAwesome/instagram.svg';
    import twitter from '$lib/assets/fontAwesome/twitter.svg';
    import linkedin from '$lib/assets/fontAwesome/linkedin.svg';
    import envelope from '$lib/assets/fontAwesome/envelope.svg';
    import phone from '$lib/assets/fontAwesome/phone.svg';
    // API fetching    
    import { onMount } from 'svelte';
    import {base} from '$app/paths';

    onMount(() => {
        async function extractJSON<T>(url: string) : Promise<T> { // Fetch data from JSON file
        return fetch(url)
        .then(response => response.json())
        .catch(error => console.log(error));
        }
        
        // Quotes 
        interface Quote {
            text: string,
            author: string
        }

        interface Quotes{
            status: number,
            message: string,
            count: number,
            quotes: Array<Quote>
        }
        let q = extractJSON<Quotes>("https://goquotes-api.herokuapp.com/api/v1/random?count=1");
        q.then(function(data){
            let quotes_Conts = document.querySelectorAll('.quote');
            let author_Conts = document.querySelectorAll('.author');
            for(let i = 0; i < quotes_Conts.length; i++){
                quotes_Conts[i].innerHTML = data.quotes[0].text;
                author_Conts[i].innerHTML = `-${data.quotes[0].author}`;
            }
        }).catch( err => console.log("Error: " + err));
    });
</script>

<footer>
    <div class="footer-content">
        <div class="footer-about">
            <h2> About </h2>
            <div class="favQuote">
                <blockquote class="quote"></blockquote>
                <span class="author"></span>
            </div>
            <div class="about-social-icons">
                <a target="_blank" href="https://www.facebook.com/"> <img src={facebook} class="footSocial"> </a>
                <a target="_blank" href="https://www.instagram.com/"> <img src={instagram} class="footSocial"></a>
                <a target="_blank" href="https://www.linkedin.com/"> <img src={linkedin} class="footSocial"> </a>
                <a target="_blank" href="https://twitter.com/"> <img src={twitter} class="footSocial">  </a>
            </div>
        </div>
        <div class="footer-menu">
            <h2> Links </h2>
            <ul> 
                <li class:active={$page.url.pathname === '/'}>
                    <img src = {right_arrow} class ="fa-right-arrow">
                    <a sveltekit:prefetch href="{base}/" content="Home"> Home </a>
                </li>
                <li class:active={$page.url.pathname === '/about'}>
                    <img src = {right_arrow} class ="fa-right-arrow">
                    <a sveltekit:prefetch href="{base}/about" content="About Me"> About Me </a></li>
                <li class:active={$page.url.pathname === '/skills'}>
                    <img src = {right_arrow} class ="fa-right-arrow">
                    <a sveltekit:prefetch href="{base}/skills" content="Skills"> Skills </a>
                </li>
                <li class:active={$page.url.pathname === '/projects'}>
                    <img src = {right_arrow} class ="fa-right-arrow">
                    <a sveltekit:prefetch href="{base}/" content="Projects"> Projects </a>
                </li>
                <li class:active={$page.url.pathname === '/testmonials'}>
                    <img src = {right_arrow} class ="fa-right-arrow">
                    <a sveltekit:prefetch href="{base}/" content="Testmonials"> Testmonials </a>
                </li>
                <li class:active={$page.url.pathname === '/contact'}>
                    <img src = {right_arrow} class ="fa-right-arrow">
                    <a sveltekit:prefetch href="{base}/contact" content="Contact"> Contact </a>
                </li>
            </ul>
        </div>
        <div class="footer-service">
            <h2> Services </h2>
            <ul>
                <li> <img src = {right_arrow} class ="fa-right-arrow"> <a href="#"> Web Design </a> </li>
                <li> <img src = {right_arrow} class ="fa-right-arrow"> <a href="#"> Web Development </a> </li>
                <li> <img src = {right_arrow} class ="fa-right-arrow"> <a href="#"> Cross platform App </a> </li>
            </ul>
        </div>
        <div class="footer-contact">
            <h2> Have a Question? </h2>
            <ul>
                <li> <img src = {envelope} class ="fa-email"> <span> wezza2003@gmail.com </span></li>
                <li> <img src = {phone} class ="fa-phone"> <span> +20 (11) 192 365 35 <br> +7 (987) 729 336 61 </span></li>
            </ul>
        </div>
    </div>
    <p class="copyrights"> Copyright &copy;2022 All rights reserved | Made with <span class="heart">&hearts;</span> by Zeyad Alagamy</p>
</footer>

<style lang="scss">
    @import "../assets/style_src/styleVars.scss";

    footer{
        width: 100vw;
        background-color: black;
        display: flex;
        justify-content: center;
        position: relative;
        font-family: Questrial;
        margin: 0px;
        padding: 120px 0px 120px 0px;
        max-width: 100%;
        text-decoration: none;

        .footer-content{
            height: fit-content;
            display: flex;
            flex-flow: row wrap;
            position: relative;
            font-family: Questrial;
            justify-content: center;
            .footer-about{
                flex-basis: 0;
                min-width: 300px;
                margin: 20px;
                h2{
                    color: white;
                }
                @include quote(rgba(255, 255, 255, 0.5), "black");

                .about-social-icons{
                    display: flex;
                    flex-flow: row wrap;
                    margin-top: 30px;
                    .footSocial{
                        filter: invert(80%); 
                        width: 40px;
                        height: 40px;
                        margin: 6px;
                        transition: all 0.3s ease-in-out;
                        &:hover{
                            filter: invert(100%);
                            transform: scale(1.2);
                        }
                    }
                }
            }
            .footer-menu{
                margin: 20px;
                h2{
                    color: white;
                }
                
                ul{
                    list-style: none;
                    margin-left: -10px;
                    padding: 0px;
                    .fa-right-arrow{
                        width: 20px;
                        filter: invert(70%);
                        margin: 0px 15px -5px 0px;
                    }
                    li{
                        margin: 10px;
                        font-size: 16px;
                        line-height: 2;
                        word-break: break-all;
                        a{
                            color: rgba(255, 255, 255, 0.664);
                            text-decoration: none;
                            margin-top: -20px;
                            font-size: 16px;
                            transition: color 0.3 ease-in-out;
                            &:hover{
                                color: white;
                            }
                        }
                        &:hover{
                            color: white;
                        }
                    }
                }
            }
            .footer-service{
                margin: 20px;
                h2{
                    color: white;
                }

                ul{
                    list-style: none;
                    margin-left: -10px;
                    padding: 0px;
                    .fa-right-arrow{
                        width: 20px;
                        filter: invert(70%);
                        margin: 0px 15px -5px 0px;
                    }
                    li{
                        margin: 10px;
                        font-size: 16px;
                        line-height: 2;
                        word-break: break-all;
                        a{
                            color: rgba(255, 255, 255, 0.664);
                            text-decoration: none;
                            margin-top: -20px;
                            font-size: 16px;
                            transition: color 0.3 ease-in-out;
                            &:hover{
                                color: white;
                            }
                        }
                        &:hover{
                            color: white;
                        }
                    }
                }
            }
            .footer-contact{
                margin: 20px;

                h2{
                    color: white;
                }
                ul{
                    list-style: none;
                    margin-left: -10px;
                    padding: 0px;
                    .fa-email, .fa-phone{
                        width: 20px;
                        filter: invert(70%);
                        margin: 0px 15px -5px 0px;
                    }
                    .fa-phone{
                        margin-bottom: 10px;
                    }
                    li{
                        margin: 10px;
                        font-size: 16px;
                        color: rgba(255, 255, 255, 0.664);
                        text-decoration: none;
                        margin-top: -20px;
                        transition: color 0.3 ease-in-out;
                        margin-top: 20px;
                        span{
                            
                            height: auto;
                            display: inline-block;
                        }
                        &:hover{
                            color: white;
                        }
                        &:hover{
                            color: white;
                        }
                    }
                }
            }
        }

        .copyrights{
            display: block;
            position: absolute;
            bottom: 0px;
            text-align: center;
            color: white;
            font-size: 16px;
            .heart{
                color: red;
                display: inline-block;
                font-size: 18px;
            }
        }
    }

    @media screen and (max-width : 620px) {
        footer{
            .footer-content{
                flex-flow: column nowrap;
            }
        }
    }
</style>