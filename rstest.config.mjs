import { defineConfig } from '@rstest/core';

const _crIncludeDir = (
 token
) => `<rootDir>/src/${token}/__tests__/*.test.ts`
, _crInclude = (...tokens) => tokens.map(_crIncludeDir);

export default defineConfig({
  setupFiles: ['<rootDir>/src/__tests__/global.setup.ts'],

  include: _crInclude(
    'components/box-shadow',
    'components/zhn',    
    'colors',
    'utils'
  ),

  resolve: {
    alias: {
      '@testHelpers': './src/__tests__/setupHelpers.test.ts'
    }
  }        
});