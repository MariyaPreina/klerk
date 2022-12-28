<template>
    <div :class="$style.SubscriptionsMailing">
        <h2 :class="$style.title">
            Выберите рассылки, которые подходят именно вам
        </h2>
        <div :class="$style.formWrapper">
            <form
                @submit.prevent="handleSubmit"
                :class="$style.form">
                <div :class="$style.inputWrapper">
                    <VInput
                        v-model="email"
                        :class="$style.input"
                        placeholder="Электронная почта"
                        name="email" />
                    <button
                        type="submit"
                        :class="$style.submitBtn">
                        <span :class="$style.submitBtnText">Подписаться</span>
                        <IconArrow :class="$style.submitBtnIcon" />
                    </button>
                </div>
            </form>
            <VSwitch
                :value="subscribeAll"
                :class="$style.switch"
                size="small"
                @input="$emit('subscribe-switch', $event)">
                <template #trueLabel> Подписаться на все рассылки </template>
            </VSwitch>
        </div>

        <div :class="$style.cardsContainer">
            <div
                v-for="(card, i) in cards"
                :key="`${i}-mail`"
                :class="$style.card">
                <SubscriptionsMailingCard
                    :data="card"
                    @onInput="$emit('card-input', $event)" />
            </div>
        </div>
    </div>
</template>

<script>
import VInput from '@/components/ui/input/VInput';
import VSwitch from '@/components/ui/switch/VSwitch';
import SubscriptionsMailingCard from '@/components/pages/subscriptions/SubscriptionsMailingCard';
import IconArrow from '@/components/icons/IconArrow';

export default {
    name: 'SubscriptionsMailing',

    components: {
        VInput,
        VSwitch,
        SubscriptionsMailingCard,
        IconArrow,
    },

    props: {
        cards: {
            type: Array,
            default: () => [],
        },

        subscribeAll: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            email: '',
        };
    },

    methods: {
        // handleInput(e) {
        //     this.email = e;
        //     console.log(this.email);
        // },

        handleSubmit() {
            alert(`email: ${this.email}`);
            this.email = '';
        },
    },
};
</script>

<style lang="scss" module>
.SubscriptionsMailing {
    //
}

.title {
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 500;
    text-align: center;
    letter-spacing: -0.01em;

    @include respond-to(xs) {
        text-align: left;
    }
}

.formWrapper {
    padding: 2.4rem 2.4rem 3.2rem;

    @include respond-to(xs) {
        padding: 1.6rem 0 2.4rem;
    }
}

.inputWrapper {
    display: flex;
    background-color: $base-0;
    border-radius: 0.8rem 10rem 10rem 0.8rem;
}

.submitBtn {
    height: 5.6rem;
    padding: 0 3.2rem;
    border-radius: 10rem;
    background-color: $blue-900;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: $base-0;
    cursor: pointer;
    transition: background-color $default-color-transition;

    @include hover {
        background-color: rgba($blue-900, 0.8);
    }

    &:active {
        background-color: rgba($blue-900, 0.9);
    }

    @include respond-to(xs) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5.6rem;
        min-width: 5.6rem;
        padding: 0;
    }
}

.submitBtnText {
    @include respond-to(xs) {
        display: none;
    }
}

.submitBtnIcon {
    display: none;
    width: 2.4rem;
    height: 2.4rem;

    @include respond-to(xs) {
        display: block;
    }
}

.switch {
    margin-top: 1.6rem;
}

.cardsContainer {
    display: flex;
    flex-wrap: wrap;
    margin: -1.2rem;
}

.card {
    width: 50%;
    padding: 1.2rem;

    @include respond-to(xs) {
        width: 100%;
    }
}
</style>
