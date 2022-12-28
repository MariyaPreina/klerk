<template>
    <div class="v-input">
        <input
            ref="input"
            :value="modelValue"
            class="v-input__native"
            :type="type"
            :name="name"
            :maxlength="maxLength"
            :placeholder="placeholder"
            @input="$emit('update:modelValue', $event.target.value)" />
    </div>
</template>

<script>
export default {
    name: 'VInput',

    props: {
        modelValue: {
            type: [String, Number],
            default: '',
        },

        type: {
            type: String,
            default: 'text',
        },

        name: {
            type: String,
            default: '',
        },

        maxLength: {
            type: Number,
            default: null,
        },

        placeholder: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="scss">
.v-input {
    width: 100%;
    height: 5.6rem;
    padding: 0 1.6rem;
    border-radius: 0.8rem;
    background-color: $base-0;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: $base-1000;
    transition: color $default-color-transition;

    &::placeholder {
        color: $base-400;
    }

    &__native {
        position: relative;
        z-index: 2;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        border: none;
        background-color: transparent;
        outline: none;
        font-size: inherit;
        color: currentColor;
        box-shadow: none;
        -webkit-appearance: none;
        -webkit-text-size-adjust: 100%;
    }
}
</style>
