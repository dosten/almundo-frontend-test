<template>
    <div class="app">
        <header class="header">
            <div class="header-inner">
                <h1 class="logo">Almundo</h1>
            </div>
        </header>
        <section class="content">
            <router-view></router-view>
        </section>
    </div>
</template>

<style>
@import "normalize.css";

@lost flexbox flex;
@lost gutter 15px;

* {
    box-sizing: border-box;
}

body {
    background-color: #f4f4f4;
    font-family: 'Lato', sans-serif;
}

.header {
    background-color: #1a427f;
    height: 80px;
}

.header-inner {
    height: 100%;
    lost-center: 1280px 20px;
    lost-align: middle-left;
}

.logo {
    display: inline-block;
    background: url(~assets/logo.svg) no-repeat center center;
    background-size: contain;
    width: 233px;
    height: 48px;
    margin: 0;
    padding: 0;
    text-indent: -999px;
}

@media (max-width: 767.98px) {
    .header {
        height: 60px;
    }

    .logo {
        width: 156px;
        height: 36px;
    }
}
</style>
