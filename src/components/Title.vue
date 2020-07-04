<template>
    <div>
        <div class="title-bar">
            <div class="title-box" style="float:left;">
                <div>DAVID</div>
                <div>BAUER</div>
            </div>
            
            <div class="info-box" style="float:left">
                <div class="accent">Research</div><br>
                <div>Immerserive Visualization</div>
                <div>Computer Graphics</div>
                <div>Biomedical Data</div>              
            </div>

            <div class="info-box" style="float:right; text-align:right;">
                <div class="accent">Contact</div><br>
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
.title-bar {
    position: fixed; 
    top: 0; 
    left: 0; 
    width: 100%; 
    padding: 0;
    background-color: rgba(245, 245, 245, 0.5);
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
</style>