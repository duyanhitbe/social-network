import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/graphql",
  documents: ["src/graphql/*.graphql"],
  ignoreNoDocuments: true,
  generates: {
    "./src/graphql/generated.tsx": {
      plugins: [
        'typescript', 
        'typescript-operations', 
        'typescript-react-apollo',
        'typescript-resolvers'
      ],
      config: {
        withHooks: true, // Generates React hooks (like useQuery, useMutation)
        withComponent: false, // If you want to generate React components (optional)
        withHOC: false, // If you want to generate higher-order components (optional)
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'], // Automatically format generated files with Prettier
  },
};

export default config;
