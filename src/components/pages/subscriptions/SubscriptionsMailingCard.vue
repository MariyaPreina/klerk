<template>
    <div :class="$style.SubscriptionsMailingCard">
        <div :class="$style.content">
            <div :class="$style.info">
                <div :class="$style.titleWrapper">
                    <p :class="$style.subtitle">{{ data.subtitle }}</p>
                    <h3 :class="$style.title">{{ data.title }}</h3>
                </div>
                <p :class="$style.text">{{ data.text }}</p>
                <ul>
                    <li
                        v-for="(point, i) in data.points"
                        :key="`${i}-point`"
                        :class="$style.point">
                        <IconCheck :class="$style.iconCheck" />
                        <p>{{ point }}</p>
                    </li>
                </ul>
            </div>
            <VSwitch
                :value="data.subscribe"
                :class="$style.switch"
                @input="
                    $emit('on-input', { value: $event, subscription: data })
                ">
                <template #trueLabel>
                    Уже получает
                    {{ $filters.splitThousands(data.subscribersCount) }}
                    {{
                        $filters.plural(data.subscribersCount, [
                            'человек',
                            'человека',
                            'человек',
                        ])
                    }}
                </template>
            </VSwitch>
        </div>

        <div :class="$style.imageWrapper">
            <img
                :src="data.image"
                alt="Card image"
                :class="$style.image" />
        </div>
    </div>
</template>

<script>
import IconCheck from '@/components/icons/IconCheck';
import VSwitch from '@/components/ui/switch/VSwitch';

export default {
    name: 'SubscriptionsMailingCard',

    components: {
        IconCheck,
        VSwitch,
    },

    props: {
        data: {
            type: Object,
            default: () => ({}),
        },
    },
};
</script>

<style lang="scss" module>
.SubscriptionsMailingCard {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 2.4rem;
    border-radius: 1.6rem;
    background-color: $base-0;
    box-shadow: 0 8px 16px rgba($base-1000, 0.08);

    @include respond-to(sm) {
        position: relative;
    }

    @include respond-to(xs) {
        padding: 2.4rem 1.6rem;
    }
}

.content {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-right: 2.4rem;

    @include respond-to(sm) {
        padding-right: 0;
    }
}

.switch {
    margin-top: 1.6rem;
}

.info {
    flex: 1;
}

.titleWrapper {
    @include respond-to(sm) {
        padding-right: 5rem;
    }
}

.subtitle {
    font-size: 1.3rem;
    line-height: 1.6rem;
    color: $base-300;
}

.title {
    margin-bottom: 0.8rem;
    font-size: 2rem;
    line-height: 2.8rem;
    font-weight: 500;
}

.text {
    margin-bottom: 1.6rem;
    font-size: 1.4rem;
    line-height: 2rem;
    color: $base-300;
}

.imageWrapper {
    width: 8rem;
    min-width: 8rem;
    height: 8rem;
    border-radius: 0.8rem;
    overflow: hidden;
    -webkit-mask-image: -webkit-radial-gradient(white, black);

    @include respond-to(sm) {
        position: absolute;
        right: 1.6rem;
        width: 4.5rem;
        min-width: 4.5rem;
        height: 4.5rem;
    }

    @include respond-to(xs) {
        width: 4rem;
        min-width: 4rem;
        height: 4rem;
    }
}

.image {
    max-width: 100%;
    object-fit: cover;
}

.point {
    display: flex;
    font-size: 1.4rem;
    line-height: 2rem;

    &:not(:last-child) {
        margin-bottom: 0.8rem;
    }
}

.iconCheck {
    width: 1.6rem;
    min-width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.8rem;
    color: $green;
}
</style>
