import {
  apply,
  mergeWith,
  Rule,
  SchematicContext,
  Source,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

import { ISampleOptions } from './schema';

function generate(options: ISampleOptions): Source {
  return apply(url('./files'), [
    template({
      ...options,
      ...strings
    })
  ]);
}

export function sample(_options: ISampleOptions): Rule {
  return (_tree: Tree, _context: SchematicContext): Rule => {
    return mergeWith(generate(_options));
  };
}
