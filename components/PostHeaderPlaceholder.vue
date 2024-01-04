<template>
    <div class="component-border-horizontal relative font-jost">
        <div
            class="bg-[#eee] opacity-50 top-0 bottom-0 left-0 right-0 absolute m-[7px_7px_0_7px]"
        ></div>
        <div class="m-[20px] absolute z-[1] right-0 flex">
            <Back />
        </div>
        <div class="component-padding relative !pt-[200px] bg-[linear-gradient(transparent_25%,white_50%)]">
            <h1 class="flex my-[10px]">
                <span class="text-[38px] animated-background">Mauris sed pulvinar ipsum.</span>
            </h1>

            <div class="flex items-center my-[10px]">
                <span class="text-[17px] font-medium mr-[5px] animated-background">Opublikowano</span>
                <span class="text-[17px] animated-background">nieznany czasu temu</span>
            </div>

            <div class="flex my-[10px]">
                <span class="text-[22px] tracking-[1px] animated-background">Wczytywanie...</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.back:hover,
.back:focus {
    border: 2px solid #fff;
    box-shadow: 0 0 0 2px black;
    background-color: white;
}
</style>
