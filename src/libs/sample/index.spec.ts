import * as path from 'path';

import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';


const collectionPath = path.join(__dirname, '../../collection.json');


describe('schematics sample', () => {
  it('works', () => {
    expect.assertions(1);

    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = runner.runSchematic('sample', {
      name: 'foo'
    }, Tree.empty());

    expect(tree.files).toStrictEqual([]);
  });
});
