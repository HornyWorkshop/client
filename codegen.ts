import type { CodegenConfig } from "@graphql-codegen/cli";

export default {
  watch: true,
  overwrite: true,
  schema: "http://localhost:5000/graphql/",
  documents: ["./graphql/**/*.graphql"],
  ignoreNoDocuments: true,
  generates: {
    "./api/gql/index.ts": {
      config: {
        declarationKind: {
          type: "interface",
          input: "interface",
        },
        useTypeImports: true,
        constEnums: true,
        immutableTypes: true,
        withCompositionFunctions: true,
        skipTypename: true,
        vueCompositionApiImportFrom: "vue",
      },
      plugins: ["typescript", "typescript-operations", "typescript-vue-apollo"],
    },
  },
} as CodegenConfig;
