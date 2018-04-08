<template>
    <span class="ranking">
        <span v-for="n in stars" class="star"></span>
    </span>
</template>

<script>
export default {
    props: {
        stars: {
            type: Number,
            required: true
        }
    }
};
</script>

<style>
.ranking {
    & .star {
        display: inline-block;
        margin: 0 2px;
        background: url(~assets/icons/filters/star.svg?fill=%23ffdc00) no-repeat center center;
        width: 16px;
        height: 16px;

        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }
    }
}
</style>
