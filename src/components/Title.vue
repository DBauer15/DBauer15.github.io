<template>
    <div>
        <div class="title-bar">
            <div class="title-box" style="float:left;">
                <div>DAVID</div>
                <div>BAUER</div>
            </div>
            
            <div class="info-box desktop-only" style="float:left">
                <div class="accent info-box-title">Research</div>
                <div>Immerserive Visualization</div>
                <div>Computer Graphics</div>
                <div>Biomedical Data</div>              
            </div>

            <div class="info-box" style="float:right; text-align:right;">
                <div class="accent info-box-title">Contact</div>
                <div><a href="https://github.com/DBauer15" target="_blank">GitHub</a></div>
                <div>davbauer at ucdavis.edu</div>                
            </div>
        </div>
        <div class="clearfix"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>


@media (max-width: 700px) {
    .title-bar {
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100%; 
        padding: 0;
        background-color: var(--background-translucent);
        backdrop-filter: blur(30px);
    }

    .title-box {
        font-size: 0.7rem;
        font-weight: 600;
        letter-spacing: 0.05rem;
        text-align: center;
        color: var(--text-on-accent);

        margin: 12px;
        padding-top: 5px;
        height: 45px;
        width: 50px;

        background-color: var(--accent);
        border: 3px solid var(--accent);
    }

    .info-box {
        display: block;
        font-size: 0.8rem;
        font-weight: lighter;
        text-align: left;
        
        margin: 12px;
        height: 45px;
        width: 200px;

        background-color: transparent;
    }

    .info-box-title {
        font-size: 0.9rem !important;
        margin-bottom: 8px;
    }
}


@media (max-width: 400px) {
    .info-box {
        display: none !important;
    }
}

@media (min-width: 701px) {
    .title-bar {
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100%; 
        padding: 0;
        background-color: var(--background-translucent);
        backdrop-filter: blur(30px);
    }

    .title-box {
        font-size: 1.3rem;
        font-weight: 600;
        letter-spacing: 0.05rem;
        text-align: center;
        color: var(--text-on-accent);


        margin: 25px 5px 25px 25px;
        padding-top: 5px;
        height: 95px;
        width: 100px;

        background-color: var(--accent);
        border: 3px solid var(--accent);
    }

    .info-box {
        font-size: 0.9rem;
        font-weight: lighter;
        text-align: left;

        margin: 25px;
        
        height: 95px;
        width: 200px;

        background-color: transparent;
    }

    .info-box-title {
        margin-bottom: 15px;
    }
}


</style>