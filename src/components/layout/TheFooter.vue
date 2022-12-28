<template>
    <div :class="$style.TheFooter">
        <IconEmoji :class="$style.icon"></IconEmoji>
    </div>
</template>

<script>
import IconEmoji from '@/components/icons/IconEmoji';

export default {
    name: 'TheFooter',
    components: { IconEmoji },
};
</script>

<style lang="scss" module>
.TheFooter {
    padding: 4.8rem 0;
    text-align: center;
}

.icon {
    width: 19.4rem;
    height: 4.8rem;
    color: $base-1000;
}
</style>
