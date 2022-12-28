<template>
    <nav :class="$style.SubscriptionsTabs">
        <ul :class="$style.list">
            <li
                v-for="(tab, i) in tabs"
                :key="`${tab.name}-${i}`"
                :class="[
                    $style.tab,
                    { [$style._active]: activeTab === tab.value },
                ]"
                @click="$emit('on-click', tab.value)">
                {{ tab.name }}
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'SubscriptionsTabs',

    props: {
        tabs: {
            type: Array,
            default: () => [],
        },

        activeTab: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="scss" module>
.SubscriptionsTabs {
    //
}

.list {
    display: flex;
    justify-content: center;
}

.tab {
    padding: 2.4rem 0 1.8rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: $base-400;
    border-bottom: 2px solid transparent;
    transition: all $default-color-transition;
    cursor: pointer;

    @include hover {
        color: $blue-800;
    }

    &:not(:last-child) {
        margin-right: 2.4rem;
    }

    &._active {
        color: $blue-800;
        border-bottom: 2px solid $blue-800;
    }

    @include respond-to(xs) {
        padding: 2.4rem 0 1.6rem;
    }
}
</style>
