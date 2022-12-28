<template>
    <div :class="[$style.SubscriptionsPage, 'container']">
        <BreadCrumbs :links="breadCrumbs" />
        <h1 :class="$style.title">Подписки «Клерка»</h1>
        <SubscriptionsTabs
            :tabs="navTabs"
            @onClick="handleNavClick"
            :active-tab="activeTab" />
        <div :class="$style.content">
            <SubscriptionsMailing
                v-if="activeTab === 'mailing'"
                :key="activeTab"
                :cards="mailSubscriptions"
                :subscribe-all="subscribeAll"
                @cardInput="handleChangeCardSwitch"
                @subscribeSwitch="handleChangeSubscribeSwitch" />
            <SubscriptionsSocials
                v-else-if="activeTab === 'socials'"
                :key="activeTab"
                :cards="socials"
                :type="activeTab" />
            <SubscriptionsSocials
                v-else-if="activeTab === 'messengers'"
                :key="activeTab"
                :cards="messengers"
                :type="activeTab" />
        </div>
    </div>
</template>

<script>
import BreadCrumbs from '@/components/common/BreadCrumbs';
import SubscriptionsTabs from '@/components/pages/subscriptions/SubscriptionsTabs';
import SubscriptionsMailing from '@/components/pages/subscriptions/SubscriptionsMailing';
import SubscriptionsSocials from '@/components/pages/subscriptions/SubscriptionsSocials';

export default {
    name: 'SubscriptionsPage',

    components: {
        BreadCrumbs,
        SubscriptionsTabs,
        SubscriptionsMailing,
        SubscriptionsSocials,
    },

    data() {
        return {
            activeTab: 'mailing',
            subscribeAll: false,
            breadCrumbs: [
                {
                    name: 'Главная',
                    link: '',
                },
                {
                    name: 'Рассылки',
                    link: '',
                },
                {
                    name: 'Хлебные крошки',
                    link: '',
                },
            ],

            navTabs: [
                {
                    name: 'Рассылки',
                    value: 'mailing',
                },
                {
                    name: 'Соцсети',
                    value: 'socials',
                },
                {
                    name: 'Мессенджеры',
                    value: 'messengers',
                },
            ],

            mailSubscriptions: [
                {
                    title: 'Утренний бухгалтер',
                    subtitle: 'Перед рассветом',
                    text: 'Самые важные новости и события за день. Кратко, по делу, структурировано.',
                    points: [
                        'Новости для бухгалтеров, ИП и директора',
                        'Подборка статей за день',
                    ],
                    subscribersCount: 59342,
                    image: require('@/assets/images/card1.png'),
                    subscribe: false,
                },
                {
                    title: 'Ночной бухгалтер',
                    subtitle: 'После заката',
                    text: 'Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения.',
                    points: [
                        'Анализ, оценка и только самое главное',
                        'Лучшие комменты юзеров в обзоре',
                    ],
                    subscribersCount: 37480,
                    image: require('@/assets/images/card2.png'),
                    subscribe: false,
                },
                {
                    title: 'Ножницы скидок',
                    subtitle: 'Раз в две недели',
                    text: 'Подборка самых выгодных и полезных спецпредложений от надежных компаний.',
                    points: [
                        'Акции и скидки от лидеров рынка',
                        'Те, кто подписался – экономят много денег 🤑',
                    ],
                    subscribersCount: 92118,
                    image: require('@/assets/images/card3.png'),
                    subscribe: true,
                },
                {
                    title: 'Чемодан вебинаров',
                    subtitle: 'По мере появления анонсов',
                    text: 'Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов.',
                    points: [
                        'Никогда не пришлем платные вебинары',
                        'Подборка топовых тем для вебинаров',
                    ],
                    subscribersCount: 92118,
                    image: require('@/assets/images/card4.png'),
                    subscribe: false,
                },
            ],

            socials: [
                {
                    title: 'ВКонтакте',
                    link: 'https://vk.com/',
                    image: require('@/assets/images/socials/vk.svg'),
                },
                {
                    title: 'Одноклассники',
                    link: 'https://ok.ru/',
                    image: require('@/assets/images/socials/odnoklassniki.svg'),
                },
                {
                    title: 'YouTube',
                    link: 'https://www.youtube.com/',
                    image: require('@/assets/images/socials/youtube.svg'),
                },
            ],

            messengers: [
                {
                    title: 'Telegram',
                    link: 'https://web.telegram.org/',
                    image: require('@/assets/images/socials/telegram.svg'),
                },
                {
                    title: 'Whatsapp',
                    link: 'https://web.whatsapp.com/',
                    image: require('@/assets/images/socials/whatsapp.svg'),
                },
                {
                    title: 'Viber',
                    link: 'https://www.viber.com/ru/',
                    image: require('@/assets/images/socials/viber.svg'),
                },
            ],
        };
    },

    methods: {
        handleNavClick(e) {
            this.activeTab = e;
        },

        handleChangeCardSwitch(e) {
            e.subscription.subscribe = e.value;
        },

        handleChangeSubscribeSwitch(e) {
            this.subscribeAll = e;
            if (e) {
                this.mailSubscriptions.forEach((el) => (el.subscribe = true));
            } else {
                this.mailSubscriptions.forEach((el) => (el.subscribe = false));
            }
        },
    },
};
</script>

<style lang="scss" module>
.SubscriptionsPage {
    //
}

.title {
    margin-top: 2.4rem;
    font-weight: 500;
    font-size: 5.6rem;
    line-height: 7.2rem;
    text-align: center;
    letter-spacing: -0.01em;

    @include respond-to(xs) {
        margin-top: 0.8rem;
        font-size: 3.2rem;
        line-height: 4.2rem;
    }
}

.content {
    border-radius: 1.6rem;
    padding: 4.8rem 2.4rem;
    background-color: $base-200;

    @include respond-to(xs) {
        border-radius: 0;
        padding: 3.2rem 1.6rem;
    }
}
</style>
