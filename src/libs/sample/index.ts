import {
  Rule,
  SchematicContext,
  Tree
} from '@angular-devkit/schematics';

import { ISampleOptions } from './schema';

export function sample(_options: ISampleOptions): Rule {
  return (tree: Tree, _context: SchematicContext): Tree => {
    return tree;
  };
}
