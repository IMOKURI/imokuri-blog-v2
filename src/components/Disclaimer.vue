<template>
    <div class="disclaimer">

        <p class="disclaimer__intro">
            このblogの内容は個人の意見に基づくものであり、
            所属組織団体の公式見解とは異なる場合があります点、ご了承ください。
        </p>

    </div>
</template>

<style lang="scss">
.disclaimer {
    margin: 0 auto;
    max-width: 500px;
    text-align: center;
    padding: calc(var(--space) / 2) 0;

    &__intro {
        opacity: .8;
    }
}
</style>
