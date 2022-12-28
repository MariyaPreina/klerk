<template>
    <div :class="$style.SubscriptionsSocials">
        <div
            v-for="(card, i) in cards"
            :key="`${i}-${card.title}`"
            :class="$style.card">
            <SubscriptionsSocialsCard
                :data="card"
                :type="type" />
        </div>
    </div>
</template>

<script>
import SubscriptionsSocialsCard from '@/components/pages/subscriptions/SubscriptionsSocialsCard';

export default {
    name: 'SubscriptionsSocials',

    components: { SubscriptionsSocialsCard },

    props: {
        cards: {
            type: Array,
            default: () => [],
        },

        type: {
            type: String,
            default: 'social',
        },
    },
};
</script>

<style lang="scss" module>
.SubscriptionsSocials {
    display: flex;
    flex-wrap: wrap;
    margin: -1.2rem;
}

.card {
    width: 33.33333%;
    padding: 1.2rem;

    @include respond-to(xs) {
        width: 100%;
    }
}
</style>
