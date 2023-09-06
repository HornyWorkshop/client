<script lang="ts" setup>
import { DefaultApolloClient } from "@vue/apollo-composable";
import { useApollo } from "./apollo";

provide(DefaultApolloClient, useApollo());
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
