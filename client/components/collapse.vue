<template>
    <div class="collapse">
        <div class="collapse-header" v-on:click="toggle">
            <div class="collapse-icon">
                <slot name="icon"></slot>
            </div>
            <div class="collapse-title">{{ title }}</div>
            <i class="collapse-arrow" v-bind:class="{ 'collapse-arrow-up': open }"></i>
        </div>
        <div class="collapse-content" v-show="open">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        collapsed: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            open: !this.collapsed
        };
    },
    methods: {
        toggle () {
            this.open = !this.open;
        }
    }
};
</script>

<style>
.collapse {
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(199, 199, 199, .66);
    margin-bottom: 4px;
}

.collapse-icon {
    float: left;
    width: 16px;
    height: 16px;
    margin-right: 5px;
}

.collapse-title {
    color: #0679b3;
    font-weight: bold;
    font-size: 0.9rem;
    float: left;
}

.collapse-header {
    padding: 14px;
    cursor: pointer;
    overflow: hidden;
}

.collapse-arrow {
    background: url(~assets/icons/arrow-down.svg?fill=%230679b3) no-repeat center center;
    width: 10px;
    height: 10px;
    display: inline-block;
    background-size: contain;
    float: right;

    &.collapse-arrow-up {
        background-image: url(~assets/icons/arrow-up.svg?fill=%230679b3);
    }
}

.collapse-content {
    padding: 14px;
}
</style>
