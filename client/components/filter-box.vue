<template>
    <div class="filter-box">
        <div class="filter-box-header">
            <div class="filter-box-title">Filtros</div>
            <a href="#" class="filter-box-title-actionable" v-on:click.prevent="toggle">Filtros <i class="filter-box-title-arrow" v-bind:class="{ 'filter-box-title-arrow-up': open }"></i></a>

        </div>
        <div class="filter-box-content" v-show="open">
            <collapse title="Nombre de hotel">
                <template slot="icon">
                    <i class="search-filter-icon"></i>
                </template>
                <template slot="content">
                    <form v-on:submit.prevent="onSubmit">
                        <input ref="name" class="search-input" placeholder="Ingrese el nombre del hotel">
                        <input type="submit" class="search-button" value="Aceptar">
                    </form>
                </template>
            </collapse>
            <collapse title="Estrellas">
                <template slot="icon">
                    <i class="star-filter-icon"></i>
                </template>
                <template slot="content">
                    <label class="star-filter-label">
                        <input type="checkbox" v-bind:checked="!isStarFilterEnabled" v-bind:disabled="!isStarFilterEnabled" v-on:click="cleanStarFilter">
                        <b>Todas las estrellas</b>
                    </label>
                    <template v-for="n in [5, 4, 3, 2, 1]">
                        <label class="star-filter-label">
                            <input type="checkbox" v-bind:value="n" v-model="stars">
                            <ranking v-bind:stars="n" />
                        </label>
                    </template>
                </template>
            </collapse>
        </div>
    </div>
</template>

<script>
import Collapse from 'components/collapse.vue';
import Ranking from 'components/ranking.vue';

export default {
    components: {
        Collapse,
        Ranking
    },
    data () {
        return {
            open: true,
            name: null,
            stars: []
        };
    },
    methods: {
        onSubmit () {
            var name = this.$refs.name.value.trim();
            if (name.length == 0) {
                name = null;
            }
            this.name = name;
        },
        cleanStarFilter () {
            this.stars = [];
        },
        toggle () {
            this.open = !this.open;
        },
        filter () {
            this.$store.dispatch('hotels/fetch', { name: this.name, stars: this.stars });
        }
    },
    computed: {
        isStarFilterEnabled () {
            return this.stars.length > 0;
        }
    },
    watch: {
        stars () {
            // We want to re-fetch the hotels with the given criteria each time
            // the stars filter is updated.
            this.filter();
        },
        name () {
            // We want to re-fetch the hotels with the given criteria each time
            // the hotel name filter is updated.
            this.filter();
        }
    }
};
</script>

<style>
.search-input {
    display: inline-block;
    height: 30px;
    border-radius: 3px;
    padding: 0 7px;
    border: 1px solid #cecece;
    border-top: 1px solid #777;
    vertical-align: middle;
}

.search-button {
  overflow: visible;
  height: 30px;
  border-radius: 3px;
  background-color: #002a79;
  padding: 0 10px;
  border: 0;
  color: #fff;
  border-bottom: 3px solid #001846;
  cursor: pointer;
  font-weight: bold;
}

.filter-box-header {
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(199, 199, 199, .66);
    padding: 14px;
    margin-bottom: 4px;
}

.filter-box-title {
    color: #595858;
    font-weight: bold;
    font-size: 1.1rem;
}

.filter-box-title-arrow {
    background: url(~assets/icons/arrow-down.svg?fill=%230679b3) no-repeat center center;
    width: 11px;
    height: 11px;
    display: inline-block;
    background-size: contain;

    &.filter-box-title-arrow-up {
        background-image: url(~assets/icons/arrow-up.svg?fill=%230679b3);
    }
}

.filter-box-title-actionable {
    color: #0679b3;
    font-weight: bold;
    font-size: 1.1rem;
    display: none;
    text-decoration: none;
}

.star-filter-icon,
.search-filter-icon {
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;
}

.star-filter-icon {
    background-image: url(~assets/icons/filters/star.svg?fill=%230679b3);
}

.search-filter-icon {
    background-image: url(~assets/icons/filters/search.svg?fill=%230679b3);
}

.star-filter-label {
    display: block;
    font-size: 0.9rem;
    margin: 5px 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
}

@media (max-width: 767.98px) {
    .filter-box {
        padding-bottom: 25px;
    }

    .filter-box-header {
        text-align: center;
    }

    .filter-box-title {
        display: none;
    }

    .filter-box-title-actionable {
        display: block;
    }
}
</style>
