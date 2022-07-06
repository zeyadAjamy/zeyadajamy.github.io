<script lang="ts">
    import { page } from '$app/stores';
    import menuIcon from './bars.svg';
    let nav : HTMLElement;
    const navbar = () =>{
        let height = nav.style.height;
        if(height != '375px'){
            nav.style.height = '375px';
            return;
        }
        nav.style.height = '95px';
    }
    import logo from './logo.png';
    let toRoutes: string =  '../../routes/';
</script>

<header bind:this={nav}>
    <img src={logo} title="Zeyad Alagamy" alt="Zeyad Alagamy" class="logo">
    <ul class="nav">
        <li class:active={$page.url.pathname === '/'}>
            <a sveltekit:prefetch href="./" content="Home"> Home </a>
        </li>
        <li class:active={$page.url.pathname === '/about'}>
            <a sveltekit:prefetch href="./about" content="About Me"> About Me </a></li>
        <li class:active={$page.url.pathname === '/skills'}>
            <a sveltekit:prefetch href="./skills" content="Skills"> Skills </a>
        </li>
        <li class:active={$page.url.pathname === '/projects'}>
            <a sveltekit:prefetch href="./" content="Projects"> Projects </a>
        </li>
        <li class:active={$page.url.pathname === '/testmonials'}>
            <a sveltekit:prefetch href="./" content="Testmonials"> Testmonials </a>
        </li>
        <li class:active={$page.url.pathname === '/contact'}>
            <a sveltekit:prefetch href="./contact" content="Contact"> Contact </a>
        </li>
    </ul>
    <div class="menuIcon" on:click={navbar}>
        <img src={menuIcon}  alt="menu">
    </div>
    <ul class="mobile-nav">
        <li class:active={$page.url.pathname === '/'}>
            <a sveltekit:prefetch href='./' content="Home"> Home </a>
        </li>
        <li class:active={$page.url.pathname === '/about'}>
            <a sveltekit:prefetch href="./about" content="About Me"> About Me </a></li>
        <li class:active={$page.url.pathname === '/skills'}>
            <a sveltekit:prefetch href="./skills" content="Skills"> Skills </a>
        </li>
        <li class:active={$page.url.pathname === '/projects'}>
            <a sveltekit:prefetch href="./" content="Projects"> Projects </a>
        </li>
        <li class:active={$page.url.pathname === '/testmonials'}>
            <a sveltekit:prefetch href="./" content="Testmonials"> Testmonials </a>
        </li>
        <li class:active={$page.url.pathname === '/contact'}>
            <a sveltekit:prefetch href="./contact" content="Contact"> Contact </a>
        </li>
    </ul>
    
</header>

<style type="text/scss">
    @import "../assets/style_src/styleVars.scss";

    header {
        position: sticky;
        overflow: hidden;
        z-index: 100;
        top: 0px;
        padding-top: 10px;
        width: 100vw;
        height: 95px;
        top: 0px;
        background-color: white;
        box-shadow: 0px 0px 10px #888888;
        transition: height 0.3s ease-in-out;

        .logo{
            width: 150px;
            height: 80px;
            margin-left: 8vw;
        }

        .nav{
            display: inline-flex;
            position: absolute;
            right: 8vw;
            justify-content: space-evenly;
            align-items: center;
            list-style: none;
            height: 34px;
            margin-top: 35px;
            overflow: hidden;
            li{
                position: relative;
                top: 10px;
                margin-right: 25px;
                transition: all 0.3s ease-in-out;
                &:hover{
                    top: -23px;
                    a::after{
                        color: black;
                    }
                }
                a{
                    font-family: Questrial;
                    display: block;
                    text-align: center;
                    font-size: 18px;
                    color: rgb(82, 80, 80);
                    text-decoration: none;
                    transition: all 0.2s ease-in-out;
                    cursor: pointer;
                    &::after{
                        content: attr(content);
                        display: block;
                        color: transparent;
                        transition: all 0.3s linear;
                        border-bottom: 3px solid $primary-color;
                    }
                }
            }
        }

        .menuIcon{
            width: 20px;
            display: inline-block;
            cursor: pointer;
            position: fixed;
            top: 45px;
            right: 120px;
            filter: invert(30%);
            transition: filter 0.3s ease-in-out;
            &::after{
                content: "MENU";
                color: black;
                font-family: Questrial;
                margin-left: 5px;
                font-weight: 100;
                font-size: 16px;
                position: absolute;
                top: -5px;
            }
            &:hover{
                filter: invert(0%);
            }
        }

        .mobile-nav{
            list-style: none;
            margin: 0px 0px 50px 8vw;
            padding: 0px;
            a{
                text-decoration: none;
                font-family: Questrial;
                font-size: 18px;
                color: rgb(82, 80, 80);
                padding-left: 20px;
                margin: 10px;
                display: block;
                transition: all 0.1s ease-in-out;
                &:hover{
                    color: $primary-color;
                    border-left: 8px solid $primary-color;
                }
            }
        }
    }

    @media screen and (max-width: 1120px) {
        header {
            background-color: white;
            .nav{
                display: none;
            }
            .mobile-nav, .menuIcon {
                display: block;
            }
        }
    }

    @media screen and (min-width: 1120px) {
        header{
            .mobile-nav, .menuIcon {
                display: none;
            }
        }
    }
</style>
