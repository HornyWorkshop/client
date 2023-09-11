<script lang="ts" setup>
import { DefaultApolloClient } from "@vue/apollo-composable";
import { useApollo } from "./apollo";

provide(DefaultApolloClient, useApollo());
</script>

<template>
  <div class="min-h-screen bg-gray-900">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
