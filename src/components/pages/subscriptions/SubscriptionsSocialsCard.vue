<template>
    <div :class="$style.SubscriptionsSocialsCard">
        <h3 :class="$style.title">{{ data.title }}</h3>
        <div :class="$style.wrapper">
            <div :class="$style.imageWrapper">
                <img
                    :src="data.image"
                    alt="Card image"
                    :class="$style.image" />
            </div>
            <a
                :href="data.link"
                :class="$style.link"
                >{{ type === 'socials' ? 'Подписаться' : 'Написать' }}</a
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'SubscriptionsSocialsCard',

    props: {
        data: {
            type: Object,
            default: () => ({}),
        },

        type: {
            type: String,
            default: 'social',
        },
    },
};
</script>

<style lang="scss" module>
.SubscriptionsSocialsCard {
    width: 100%;
    height: 100%;
    padding: 2.4rem;
    border-radius: 1.6rem;
    background-color: $base-0;
    box-shadow: 0 8px 16px rgba($base-1000, 0.08);
}

.title {
    margin-bottom: 1rem;
    font-size: 2rem;
    color: $base-400;
}

.wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.head {
    display: flex;
}

.imageWrapper {
    width: 5rem;
    min-width: 5rem;
    height: 5rem;
    border-radius: 0.8rem;
    overflow: hidden;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
}

.image {
    max-width: 100%;
    object-fit: cover;
}

.link {
    padding: 1rem;
    border-radius: 0.8rem;
    background-color: $blue-800;
    color: $base-0;
    transition: background-color $default-color-transition;

    @include hover {
        background-color: rgba($blue-800, 0.8);
    }
}
</style>
