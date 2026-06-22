#!/bin/sh

# Bitbucket Cloud
curl --output ./src/cloud/openapi/swagger.v3.json https://dac-static.atlassian.com/cloud/bitbucket/swagger.v3.json
pnpm exec openapi-typescript ./src/cloud/openapi/swagger.v3.json --output ./src/cloud/openapi/openapi-typescript.ts --immutable --empty-objects-unknown --alphabetize --root-types
pnpm exec ts-autofix ./src/cloud/openapi

# Bitbucket Data Center
curl --output ./src/server/openapi/swagger.v3.json https://dac-static.atlassian.com/server/bitbucket/9.2.swagger.v3.json
pnpm exec openapi-typescript ./src/server/openapi/swagger.v3.json --output ./src/server/openapi/openapi-typescript.ts --immutable --empty-objects-unknown --alphabetize --root-types
pnpm exec ts-autofix ./src/server/openapi

# Use `operationId` as method names
node ./scripts/generate_clients.ts
pnpm run lint:fix
