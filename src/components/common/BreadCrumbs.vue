<template>
    <ul :class="$style.BreadCrumbs">
        <li
            v-for="(link, i) in links"
            :key="`${link.name}-${i}`"
            :class="$style.link">
            <a
                href="#"
                :class="$style.linkInner"
                >{{ link.name }}</a
            >
        </li>
    </ul>
</template>

<script>
export default {
    name: 'BreadCrumbs',

    props: {
        links: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style lang="scss" module>
.BreadCrumbs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2.4rem;

    @include respond-to(xs) {
        margin-top: 2.8rem;
        padding: 0 0.8rem;
    }
}

.link {
    white-space: nowrap;
    font-size: 1.3rem;
    line-height: 1.6rem;
    color: $base-300;
    transition: color $default-color-transition;

    @include hover {
        color: $base-400;
    }

    &:not(:last-child) {
        &::after {
            content: '\2192';
            margin: 0 0.8rem;
            color: $base-300;
        }
    }
}

.linkInner {
    border-bottom: 1px solid $blue-100;
}
</style>
