<template>
    <div class="hotels">
        <filter-box class="aside-filter-box" />
        <div class="hotel-list">
            <template v-if="isLoading">
                <p class="message">Cargando...</p>
            </template>

            <template v-else-if="hasError">
                <p class="message">Ups! Algo salio mal :(</p>
            </template>

            <template v-else-if="isEmpty">
                <p class="message">No hay resultados!</p>
            </template>

            <template v-else>
                <hotel v-for="hotel in hotels" v-bind:key="hotel.id" v-bind:data="hotel" />
            </template>
        </div>
    </div>
</template>

<script>
import FilterBox from 'components/filter-box.vue';
import Hotel from 'components/hotel.vue';

export default {
    components: {
        FilterBox,
        Hotel
    },
    computed: {
        hotels () {
            return this.$store.state.hotels.data;
        },
        hasError () {
            return this.$store.state.hotels.error !== false;
        },
        isLoading () {
            return this.$store.state.hotels.loading;
        },
        isEmpty () {
            return this.$store.state.hotels.data.length === 0;
        }
    },
};
</script>

<style>
@lost flexbox flex;
@lost gutter 15px;

.hotels {
    lost-center: 1280px 20px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.aside-filter-box {
    lost-column: 1/4;
}

.hotel-list {
    lost-column: 3/4;
}

.message {
    color: #595858;
    font-weight: bold;
    font-size: 1.3rem;
    text-align: center;
}

@media (max-width: 767.98px) {
    .hotels {
        lost-center: 1280px 0;
        lost-flex-container: column;
        margin-top: 0;
    }

    .aside-filter-box {
        lost-column: 4/4;
    }

    .hotel-list {
        lost-column: 4/4;
        padding: 0 20px;
    }
}
</style>
