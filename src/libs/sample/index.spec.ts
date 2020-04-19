import * as path from 'path';

import {
  SchematicTestRunner, UnitTestTree
} from '@angular-devkit/schematics/testing';

import { ISampleOptions } from './schema';

const collectionPath = path.join(__dirname, '../../collection.json');

describe('schematics sample', () => {
  const runner = new SchematicTestRunner('.', collectionPath);

  it('should manage name only', () => {
    expect.assertions(2);

    const options: ISampleOptions = {
      name: 'foo'
    };
    const tree: UnitTestTree = runner.runSchematic('sample', options);
    const files: string[] = tree.files;

    expect(
      files.find((filename: string) => {
        return filename === '/foo.ts';
      })
    ).not.toBeUndefined();
    expect(tree.readContent('/foo.ts')).toStrictEqual(
      '/*\n' +
        'This is just a sample file generated using schematics\n' +
        'Name: Foo\n' +
        ' */\n' +
        '\n' +
        'console.log(\'Hello Foo\');\n'
    );
  });

  it('should manage name to dasherize', () => {
    expect.assertions(2);

    const options: ISampleOptions = {
      name: 'fooBar'
    };
    const tree: UnitTestTree = runner.runSchematic('sample', options);
    const files: string[] = tree.files;

    expect(
      files.find((filename: string) => {
        return filename === '/foo-bar.ts';
      })
    ).not.toBeUndefined();
    expect(tree.readContent('/foo-bar.ts')).toStrictEqual(
      '/*\n' +
        'This is just a sample file generated using schematics\n' +
        'Name: FooBar\n' +
        ' */\n' +
        '\n' +
        'console.log(\'Hello FooBar\');\n'
    );
  });
});
