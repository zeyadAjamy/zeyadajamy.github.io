<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
    import { scale } from "svelte/transition";
    let type_effect : HTMLElement;
    // typeWriter effect
    let s : number = 0; // sentence index
    let l : number = 0; // letter index
    let txt : string [] = ['Frontend Developer.', 'UI designer.', 'UX researcher.', 'Backend Developer.']; // text
    let speed : number= 200; // typing speed

    function typeWriter(txt : string[]): void{
        let text : string = txt[s];
        let sentence_length : number = text.length;
        if(l < sentence_length){
            let typeContainer: HTMLElement | null = type_effect;
            if(typeContainer != null){
                typeContainer.innerHTML += text.charAt(l);
                l++;
            }
            setTimeout(function(){typeWriter(txt)}, speed);
        } else {
            l = 0;
            s++;
            if(s >= txt.length) s = 0;


            removeLastLetter();  // remove the existing text letter by letter
        }
    }

    function removeLastLetter(): void{
        let typeContainer: HTMLElement | null = type_effect;

        if(typeContainer != null && typeContainer.innerHTML.length > 0){
            let tmp: string[] = typeContainer.innerHTML.split("");
            tmp.pop();
            type_effect!.innerHTML = tmp.join("");
            setTimeout(function(){removeLastLetter()}, speed);

        } else {
            setTimeout(function(){typeWriter(txt)}, speed);
        }
    }

    typeWriter(txt);

    import fav from '../favicon.png';
</script>

<svelte:head>
    <link rel="icon" href={fav} />
	<title> Zeyad Alagamy | Home Site </title>        
</svelte:head>

<section class="home" >
    <div class="decorations">
        <div class="decoration1"></div>
        <div class="decoration1"></div>
        <div class="decoration1"></div>
        <div class="decoration1"></div>
        <div class="decoration1"></div>
        <div class="decoration1"></div>
        <div class="decoration1"></div>
        <div class="decoration1"></div>
        <div class="decoration1"></div>
    </div>
    <h3> WELCOME! I AM</h3>
    <h1> Zeyad Alagamy </h1>
    <h2> I'm a <span id="type-effect" bind:this={type_effect}> </span> </h2>
    <div class="decorations" transition:scale={{start: 0}}>
        <div class="decoration2"></div>
        <div class="decoration2"></div>
        <div class="decoration2"></div>
        <div class="decoration2"></div>
        <div class="decoration2"></div>
        <div class="decoration2"></div>
        <div class="decoration2"></div>
        <div class="decoration2"></div>
        <div class="decoration2"></div>
    </div>
</section>
<style lang="scss">
    @import "../../static/style_src/styleVars.scss";

    .home{
        width: 100vw;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: relative;
        background-color: white;
        margin-top: -100px;
        min-height: 100vh;
        background: linear-gradient(90deg, $secondary-color 50%, white 50%);
        .decoration1{
            width: 25px;
            height: 25px;
            background-color: $secondary-color;
            transform: rotate(45deg);
            margin: -6px 0px 0px 0px;
            background: linear-gradient(270deg, white 80%, $secondary-color 20%);
            animation: spring 2s ease-in-out infinite;
        }
        .decoration2{
            width: 25px;
            height: 25px;
            background-color: $secondary-color;
            transform: rotate(45deg);
            margin: -6px 0px 0px -5px;
            background: linear-gradient(0deg, $secondary-color 80%, white 20%);
            transition: transform 0.3s ease-in-out;
            animation: spring 2s ease-in-out infinite;
        }
        h3{
            font-family: Questrial;
            font-size: 1.2rem;
            color: $primary-color;
            font-weight: 100;
            letter-spacing: 5px;
        }
        h1{
            margin: 0px;
            font-size: clamp(5rem, 8vw , 10rem);
            line-height: clamp(5rem, 8vw , 10rem);
            font-family: Rozha;
            letter-spacing: 1px;
        }
        h2{
            font-family: Questrial;
            font-size: clamp(1rem, 5vw , 2rem);
            line-height: clamp(1rem, 5vw , 2rem);
            font-weight: 100;
            display: inline-block;
            margin: 20px auto;
            height: 37px;
            overflow: hidden;
        }
        #type-effect{
            font-family: Questrial;        
            margin-bottom: -15px;
            padding: 5px;
            display: inline-block;
            color: $primary-color;
            text-decoration: underline 2px solid $primary-color;
            height: 35px;
            border-right: 0.09em solid rgb(73, 73, 73);
            transition: all 0.3s ease-in-out;
            animation: blinking 0.5s infinite;
        }

    }

    @keyframes spring {
        50%{
            transform: rotate(35deg);
        }
    }

    @keyframes blinking {
        50% {
            border-color: rgb(177, 177, 177);
        }
    }
</style>