<template>
    <div :class="$style.App">
        <TheHeader />
        <SubscriptionsPage :class="$style.content" />
        <TheFooter />
    </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader';
import SubscriptionsPage from '@/components/pages/subscriptions/SubscriptionsPage';
import TheFooter from '@/components/layout/TheFooter';

export default {
    name: 'App',

    components: {
        TheHeader,
        SubscriptionsPage,
        TheFooter,
    },

    created() {
        document.title = `${process.env.VUE_APP_TITLE}`;
    },
};
</script>

<style lang="scss" module>
.App {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.content {
    width: 100%;
    flex: 1;
}
</style>
