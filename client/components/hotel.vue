<template>
    <div class="hotel">
        <div class="hotel-picture" v-bind:style="{ backgroundImage: 'url(images/hotels/' + data.image + ')' }"></div>
        <div class="hotel-info">
            <div class="hotel-name">{{ data.name }}</div>
            <ranking v-bind:stars="data.stars" />
            <ul class="amenities">
                <li v-for="amenity in data.amenities" v-bind:class="['amenity', amenity]"></li>
            </ul>
        </div>
        <div class="hotel-price">
            <p>Precio por noche por habitación</p>
            <span class="price-tag">
                <span class="price-tag-symbol">ARS</span>
                <span class="price-tag-fraction">{{ priceFraction }}</span>
                <span class="price-tag-decimal-separator">,</span>
                <span class="price-tag-cents">{{ priceCents }}</span>
            </span>
            <a href="#" class="button" v-on:click.prevent>Ver Hotel</a>
        </div>
    </div>
</template>

<script>
import Ranking from 'components/ranking.vue';

export default {
    components: {
        Ranking
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    computed: {
        priceFraction () {
            return Math.floor(this.data.price);
        },
        priceCents () {
            // In order to avoid floating point number issues we extract the
            // fractional part manually from the stringified version of the price.
            var srt = this.data.price.toString();
            if (srt.indexOf('.') >= 0) {
                var cents = srt.slice(srt.indexOf('.') + 1);
                if (cents.length == 1) {
                    return cents + '0'; // converts $0.5 to $0.50 por example
                }
                return cents;
            }
            return '00';
        }
    }
};
</script>

<style>
@lost flexbox flex;
@lost gutter 15px;

.hotel {
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(199, 199, 199, .66);
    padding: 10px;
    margin-bottom: 24px;
    lost-flex-container: row;

    &:last-child {
        margin-bottom: 0;
    }
}

.hotel-picture {
    background-repeat: no-repeat;
    background-size: cover;
    lost-column: 2/6;
}

.hotel-picture:after {
  content: "";
  display: block;
  padding-bottom: 75%;
}

.hotel-info {
    lost-column: 2/6;
}

.hotel-name {
    font-weight: bold;
    color: #0679b3;
    margin-bottom: 5px;
}

.hotel-price {
    lost-column: 2/6;
    lost-flex-container: column;
    lost-align: middle-center;
    border-left: 1px dashed #ccc;
    padding: 0 15px;

    & > p {
        text-align: center;
        font-size: 0.8rem;
        color: #595858;
    }
}

.hotel-cost {
  color: #e16800;
  font-size: 1.5rem;
}

.price-tag {
    color: #e16800;
}

.price-tag-symbol {
    line-height: 3;
    margin-right: .2em;
}

.price-tag * {
    float: left;
}

.price-tag-fraction {
  font-size: 2.5rem;
  font-weight: bold;
}

.price-tag-decimal-separator {
    position: absolute;
    font-size: 0;
}

.price-tag-cents {
    font-size: 14px;
    line-height: 1.6;
    vertical-align: text-bottom;
    margin-left: .05em;
}

.button {
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5em;
    height: 40px;
    line-height: 40px;
    padding: 0 16px;
    font-weight: 700;
    background-color: #002c77;
    color: #fff;
    box-shadow: 0 -2px 0 #00163c inset;
    width: 100%;
    display: block;
    margin: 15px 0;
}

.amenities {
    margin: 5px 0;
    padding: 0;
    list-style: none;

    & .amenity {
        display: inline-block;
        margin: 0 5px;
        width: 18px;
        height: 18px;
        background-repeat: no-repeat;
        background-position: center center;

        &:first-child {
            margin-left: 0;
        }

        &:last-child {
            margin-right: 0;
        }

        &.bathrobes {
            background-image: url(~assets/icons/amenities/bathrobes.svg);
        }

        &.bathtub {
            background-image: url(~assets/icons/amenities/bathtub.svg);
        }

        &.beach-pool-facilities {
            background-image: url(~assets/icons/amenities/beach-pool-facilities.svg);
        }

        &.beach {
            background-image: url(~assets/icons/amenities/beach.svg);
        }

        &.business-center {
            background-image: url(~assets/icons/amenities/business-center.svg);
        }

        &.children-club {
            background-image: url(~assets/icons/amenities/children-club.svg);
        }

        &.coffe-maker {
            background-image: url(~assets/icons/amenities/coffe-maker.svg);
        }

        &.deep-soaking-bathtub {
            background-image: url(~assets/icons/amenities/deep-soaking-bathtub.svg);
        }

        &.fitness-center {
            background-image: url(~assets/icons/amenities/fitness-center.svg);
        }

        &.garden {
            background-image: url(~assets/icons/amenities/garden.svg);
        }

        &.kitchen-facilities {
            background-image: url(~assets/icons/amenities/kitchen-facilities.svg);
        }

        &.newspaper {
            background-image: url(~assets/icons/amenities/newspaper.svg);
        }

        &.nightclub {
            background-image: url(~assets/icons/amenities/nightclub.svg);
        }

        &.restaurant {
            background-image: url(~assets/icons/amenities/restaurant.svg);
        }

        &.safety-box {
            background-image: url(~assets/icons/amenities/safety-box.svg);
        }

        &.separate-bredroom {
            background-image: url(~assets/icons/amenities/separate-bredroom.svg);
        }

        &.sheets {
            background-image: url(~assets/icons/amenities/sheets.svg);
        }
    }
}

@media (max-width: 767.98px) {
    .hotel {
        lost-flex-container: column;
    }

    .hotel-picture {
        lost-column: 6/6;
    }

    .hotel-info {
        lost-column: 6/6;
        margin: 10px 0;
    }

    .hotel-price {
        lost-column: 6/6;
        border-left: none;
        border-top: 1px dashed #ccc;
        padding: 0;
    }
}
</style>
