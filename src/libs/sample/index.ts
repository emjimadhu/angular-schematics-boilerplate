import {
  apply, mergeWith,
  Rule,
  SchematicContext, template,
  Tree, url
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

import { ISampleOptions } from './schema';

export function sample(_options: ISampleOptions): Rule {
  return (_tree: Tree, _context: SchematicContext): Rule => {
    const sourceFiles = url('./files');
    const sourceParameterizedTemplate = apply(sourceFiles, [
      template({
        ..._options,
        ...strings
      })
    ]);
    return mergeWith(sourceParameterizedTemplate);
  };
}
