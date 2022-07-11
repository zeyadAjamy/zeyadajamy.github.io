<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a .static./../ asset in prod
	export const prerender = true;
</script>

<script lang="ts">
    import { onMount } from 'svelte';
    let progressBars = "" as unknown as HTMLDivElement;
    function circleProgress(object: HTMLElement){
        let percent : string | number | undefined = object.dataset.percentage;
        if(percent == undefined){
            console.warn('percentage is undefined or missing');
        } else {
            percent = parseInt(percent);
            if(percent > 100){
                percent = 100;
            } else if (isNaN(percent)){
                console.warn('Not a number!');
            } else if (percent < 0){
                console.warn('Negative number!');
            }
            let deg = percent * 3.6;
            
            let leftNode: HTMLElement = "" as unknown as HTMLElement;
            for(let i = 0; i < object.childNodes.length; i++){
                let node : HTMLElement = Array.from(object.childNodes)[i] as HTMLElement;
                if(typeof node.className == 'undefined'){
                    continue;
                }
                if(node.className.split(" ")[0] == 'left-half'){
                    leftNode = node;
                }
                if(node.className.split(" ")[0] === 'progress-value'){
                    node.innerHTML = percent as unknown as string;
                }
            }

            if(percent <= 50){ // then we should hide the second half of the circle
                leftNode.style.borderColor = '#eee6e1';
                leftNode.style.transform = 'rotate(' + -deg + 'deg)';
            } else {
                leftNode.style.transform = 'rotate(' + -(360-deg) + 'deg)';
            }
        }
    }

    function linearProgress(object: HTMLElement): void{
        let percent : string | number | undefined = object.dataset.percentage;
        if(percent == undefined){
            console.warn('percentage is undefined or missing');
        } else {
            percent = parseInt(percent);
            if(percent > 100){
                percent = 100;
            } else if (isNaN(percent)){
                console.warn('Not a number!');
            } else if (percent < 0){
                console.warn('Negative number!');
            }
        }
        object.style.background = `linear-gradient(90deg, #df7533 ${percent}%, #eee6e1 0%)`;
    }
    onMount(() => {
        let allCircularBars : NodeListOf<HTMLElement> = progressBars.querySelectorAll(".circular-progress-bar");
        for(let i = 0; i < allCircularBars.length; i++){
            circleProgress(allCircularBars[i]);
        }

        let allLinearBars: NodeListOf<HTMLElement>  = progressBars.querySelectorAll(".linear-progress-bar")
        for(let i = 0; i < allLinearBars.length; i++){
            linearProgress(allLinearBars[i]);
        }
    });

    // import media 
    import info from '$lib/assets/fontAwesome/info.svg';
    import fav from '$lib/assets/favicon.png';

</script>

<svelte:head>
    <link rel="icon" href={fav} />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title> Zeyad Alagamy | Home Site </title>        
</svelte:head>



<section class="skills">
    <h1> Skills </h1>
    <div class="tooltip">
        <p data-author="Jurgen Klopp">My biggest skill is common sense. I understand life.</p>
        <img class="info" src={info} alt="Jurgen Klopp">
        <span class="tooltiptext"> Jurgen Klopp </span>
    </div>
    <div class="skills-container">
        <div class="skills-content" bind:this={progressBars}>
            <div class="card">
                <div class="card-header">
                    <h2> HTML </h2>
                </div>
                <div class="card-body">
                    <div class="circular-progress-bar" data-percentage="95">
                        <div class="left-half"></div>
                        <div class="progress-value"></div>
                        <div class="right-half"></div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h2> CSS </h2>
                </div>
                <div class="card-body">
                    <div class="circular-progress-bar" data-percentage="80">
                        <div class="left-half"></div>
                        <div class="progress-value"></div>
                        <div class="right-half"></div>
                    </div>
                </div>
            </div>
            <div class="card">
                    <div class="card-header">
                        <h2> JavaScript </h2>
                    </div>
                    <div class="circular-progress-bar" data-percentage="75">
                        <div class="left-half"></div>
                        <div class="progress-value"></div>
                        <div class="right-half"></div>
                    </div>
            </div>
            <div class="linear-container">
                <div class="linear-progress-bar" data-percentage="80%" data-label="Sass"></div>
                <div class="linear-progress-bar" data-percentage="90%" data-label="PugJs"></div>
                <div class="linear-progress-bar" data-percentage="95%" data-label="JSON/Ajax"></div>
                <div class="linear-progress-bar" data-percentage="75%" data-label="UI/UX"></div>
                <div class="linear-progress-bar" data-percentage="40%" data-label="NodeJS"></div>
                <div class="linear-progress-bar" data-percentage="50%" data-label="VueJS"></div>
                <div class="linear-progress-bar" data-percentage="80%" data-label="Bootstrap"></div>
                <div class="linear-progress-bar" data-percentage="60%" data-label="Java"></div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @import  '../lib/assets/style_src/styleVars.scss';

    .tooltip {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
        opacity: 0.7;
        margin-top: -30px;
        opacity: 0.5;
        font-family: Questrial;
        p{
            display: inline-block;
            font-size: 15px;
            letter-spacing: 1.5px;
            font-weight: 100;
            padding: 20px;
            margin: auto;
            text-align: center;
        }
        .info{
            width: 8px;
            height: 8px;
            background-color: white;
            border-radius: 50%;
            position: relative;
            padding: 2px;
            filter: invert(100%);
            cursor: pointer;
            margin: 0px 0px 25px -15px;
        }
        .tooltiptext {
            visibility: hidden;
            width: 120px;
            background-color: black;
            font-size: 15px;
            color: #fff;
            text-align: center;
            padding: 5px 0;
            border-radius: 11px;
            position: absolute;
            margin: -15px 10px;
            z-index: 1;
        }
        &:hover .tooltiptext {
            visibility: visible;
        }
            
    }

    .skills{
        display: flex;
        flex-flow: column;
        margin: auto;
        text-align: center;
        padding: auto;
        align-items: center;
        justify-content: center;
        padding: 50px 0px 100px 0px;
        position: relative;
        background-color: #fff;
        
        @include mainHead();
        h1::after{
            content: "";
            display: block;
            width: 20%;
            height: 2px;
            border-radius: 11px;
            background-color: $primary-color;
            margin: 10px auto -20px auto;
        }
        .skills-container{
            display: flex;
            flex-flow: row wrap;
            .skills-content{
                display: flex;
                align-self: flex-start;
                flex-flow: row wrap;
                width: 80vw;
                height: 100%;
                margin: auto;
                z-index: 1;
                .card{
                    display: flex;
                    flex-flow: column nowrap;
                    flex-grow: 1;
                    z-index: 1;
                    align-items: center;
                    margin: 30px;
                    min-width: 200px;
                    padding-bottom: 50px;
                    height: fit-content;
                    box-shadow: 0px 0px 10px 0px rgba(53, 53, 53, 0.15);
                    font-family: Questrial;
                    transition: transform 0.2s ease-in-out;
                    &:hover{
                        transform: scale(1.2);
                    }
        
                    .circular-progress-bar{
                        height: 120px;
                        width: 120px;
                        margin-left: -20px;
                        .left-half{
                            width: 120px;
                            z-index: 1;
                            position: absolute;
                            height: 120px;
                            border: 8px solid $primary-color;
                            border-radius: 50%;
                            clip: rect(0px, 70px, 140px, 0px);
                    }
                        .right-half{
                            width: 120px;
                            position: absolute;
                            height: 120px;
                            border: 8px solid $primary-color;
                            border-radius: 50%;
                            clip: rect(0px, 70px, 140px, 0px);
                            transform: rotate(180deg);
                        }
                        .progress-value{
                            display: flex;
                            position: absolute;
                            font-size: Questrial;
                            width: 120px;
                            height: 120px;
                            border-radius: 50%;
                            margin: auto;
                            align-items: center;
                            justify-content: center;
                            font-size: 20px;
                            font-weight: 800;
                            border: 8px solid $secondary-color;
                            &::after{
                                content: "%";
                                font-size: 16px;
                                margin-bottom: 10px;
                            }
                        }
                    }
        
                } 
                .linear-container{
                    display: flex;
                    flex-flow: row wrap;
                    width: 80vw;
                    margin-top: 50px;
                    .linear-progress-bar{
                        height: 10px;
                        min-width: 40%;
                        flex-grow: 2;
                        position: relative;
                        margin: 30px;
                        border-radius: 11px;
                        &::before{
                            content: attr(data-label);
                            position: absolute;
                            top: -30px;
                            left: 0px;
                            font-family: Questrial;
                            font-size: 1.2rem;
                            font-weight: bolder;
                        }
                        &::after{
                            content: attr(data-percentage);
                            position: absolute;
                            top: -10px;
                            right: 10px;
                            transition: transform 0.3s ease-in-out;
                            font-family: Questrial;
                            font-size: 0.9rem;
                        }
                    }
                }
            }
        }
    }
</style>