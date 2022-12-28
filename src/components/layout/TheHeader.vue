<template>
    <div :class="$style.TheHeader">
        <IconLogo :class="$style.logo" />
    </div>
</template>

<script>
import IconLogo from '@/components/icons/IconLogo';

export default {
    name: 'TheHeader',
    components: { IconLogo },
};
</script>

<style lang="scss" module>
.TheHeader {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: $header-h;
    background-color: $base-0;

    @include respond-to(xs) {
        height: $header-h-mobile;
    }
}

.logo {
    width: 7.5rem;
    height: 3.6rem;
}
</style>
