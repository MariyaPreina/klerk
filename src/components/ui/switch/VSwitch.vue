<template>
    <div
        class="v-switch"
        :class="classes"
        role="switch"
        :aria-checked="lazyValue"
        :aria-disabled="disabled">
        <span
            v-if="$slots.falseLabel"
            :class="{ _blur: lazyValue }"
            class="v-switch__label _left"
            @click="onLabelClick(false)">
            <slot name="falseLabel"></slot>
        </span>

        <div
            class="v-switch__field"
            tabindex="0"
            @focus="onFocus"
            @blur="onBlur"
            @click="onChange"
            @keydown.enter="onChange">
            <div class="v-switch__dot"></div>
        </div>

        <span
            v-if="$slots.trueLabel"
            :class="{ _blur: !lazyValue }"
            class="v-switch__label _right"
            @click="onLabelClick(true)">
            <slot name="trueLabel"></slot>
        </span>

        <input
            v-if="name"
            type="hidden"
            :name="name"
            :value="lazyValue ? trueValue : falseValue" />
    </div>
</template>

<script>
export default {
    name: 'VSwitch',

    props: {
        /**
         * Имя, которое используется при отправке формы
         */
        name: {
            type: String,
            default: '',
        },

        /**
         * Текущее значение чекбокса
         */
        value: {
            type: [Array, String, Boolean, Number],
            default: undefined,
        },

        /**
         * Значение, которое используется при отправке формы, а также передается в value
         * при активации чекбокса
         */
        trueValue: {
            type: [String, Boolean],
            default: true,
        },

        falseValue: {
            type: [String, Boolean],
            default: false,
        },

        /**
         * Определяет классы, которые будут модифицировать размер
         */
        size: {
            type: String,
            default: 'medium',
            validator(value) {
                return ['medium', 'small'].indexOf(value) !== -1;
            },
        },

        /**
         * Определяет классы, которые будут модифицировать цвет
         */
        color: {
            type: String,
            default: 'primary',
        },

        /**
         * Свойство отключает взаимодействие с чекбоксом
         */
        disabled: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            lazyValue: false,
            isFocused: false,
        };
    },

    computed: {
        classes() {
            return [
                `v-switch--${this.color}`,
                `v-switch--${this.size}`,
                {
                    'is-disabled': this.disabled,
                    'is-active': this.lazyValue,
                    'is-focused': this.isFocused,
                    'is-single': this.singleLabel,
                },
            ];
        },

        singleLabel() {
            return !this.$slots.trueLabel || !this.$slots.falseLabel;
        },
    },

    watch: {
        value(val) {
            const newVal = val;
            if (Array.isArray(newVal)) {
                if (val.includes(this.trueValue)) {
                    if (this.lazyValue !== true) {
                        this.lazyValue = true;
                        this.$emit('change', val);
                    }
                } else if (this.lazyValue !== false) {
                    this.lazyValue = false;
                    this.$emit('change', val);
                }
            } else if (newVal === this.trueValue && this.lazyValue !== true) {
                this.lazyValue = true;
                this.$emit('change', newVal);
            } else if (this.lazyValue !== false) {
                this.lazyValue = false;
                this.$emit('change', newVal);
            }
        },
    },

    created() {
        Array.isArray(this.value)
            ? (this.lazyValue = this.value.includes(this.trueValue))
            : (this.lazyValue = Boolean(this.value));
    },

    methods: {
        onFocus() {
            this.isFocused = true;
        },

        onBlur() {
            this.isFocused = false;
        },

        onLabelClick(val) {
            if (
                this.disabled ||
                (this.lazyValue === val && !this.singleLabel)
            ) {
                return;
            }

            if (this.singleLabel) {
                return this.onChange();
            }

            if (this.value !== undefined) {
                if (Array.isArray(this.value)) {
                    const newValue = [...this.value];
                    val
                        ? newValue.push(this.trueValue)
                        : newValue.splice(newValue.indexOf(this.trueValue), 1);
                    this.$emit('input', newValue);
                } else {
                    this.$emit('input', val ? this.trueValue : this.falseValue);
                }
            } else {
                this.lazyValue = val;
                this.$emit('change', this.lazyValue);
            }
        },

        onChange() {
            if (this.disabled) {
                return;
            }

            if (this.value !== undefined) {
                if (Array.isArray(this.value)) {
                    const newValue = [...this.value];
                    this.lazyValue
                        ? newValue.splice(newValue.indexOf(this.trueValue), 1)
                        : newValue.push(this.trueValue);
                    this.$emit('input', newValue);
                } else {
                    this.$emit(
                        'input',
                        this.lazyValue ? this.falseValue : this.trueValue
                    );
                }
            } else {
                this.lazyValue = !this.lazyValue;
                this.$emit('change', this.lazyValue);
            }
        },
    },
};
</script>

<style lang="scss">
.v-switch {
    $medium-dot-size: 2.2rem;
    $small-dot-size: 1.4rem;

    display: inline-flex;
    align-items: center;
    -webkit-user-select: none;
    user-select: none;
    outline: none;
    transition: $default-transition;
    cursor: pointer;

    @include hover {
        .v-switch__label {
            color: $base-400;
        }
    }

    /* Colors */

    &--primary {
        .v-switch__field {
            background-color: $base-250;
        }

        .v-switch__dot {
            background-color: $base-0;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
        }

        &.is-active {
            .v-switch__field {
                background-color: $blue-900;
            }
        }

        &.is-disabled {
            opacity: 0.44;
        }
    }
    /* End colors */

    /* Sizes */
    &--medium {
        font-size: 1.4rem;
        line-height: 2rem;

        .v-switch__field {
            width: 4.8rem;
            height: 2.4rem;
            margin: 0 0.8rem;
        }

        .v-switch__dot {
            width: $medium-dot-size;
            height: $medium-dot-size;
        }

        &.is-active {
            .v-switch__dot {
                left: calc(100% - #{$medium-dot-size} - 1px);
            }
        }
    }

    &--small {
        font-size: 1.4rem;
        line-height: 2rem;

        .v-switch__field {
            width: 3.2rem;
            height: 1.6rem;
            margin: 0 0.8rem;
        }

        .v-switch__dot {
            width: $small-dot-size;
            height: $small-dot-size;
        }

        &.is-active {
            .v-switch__dot {
                left: calc(100% - #{$small-dot-size} - 1px);
            }
        }
    }
    /* End Sizes */

    /* Modificators */

    &.is-single {
        .v-switch__field {
            margin-left: 0;
        }
    }

    &.is-disabled {
        pointer-events: none;
    }

    /* End Modificators */

    &__label {
        transition: $default-transition;
    }

    &__field {
        position: relative;
        display: block;
        border-radius: 100rem;
        outline: none;
        transition: background-color 0.3s ease-in-out;
        cursor: pointer;
    }

    &__dot {
        position: absolute;
        top: 51%;
        left: 1px;
        border-radius: 50%;
        transform: translate3d(0, -50%, 0);
        transition: left 0.3s ease, background-color $default-color-transition;
        will-change: left;
    }
}
</style>
