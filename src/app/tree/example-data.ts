/** Example file/folder data. */
export const files2 = [
  {
    "path": "file:///C:/Users/eoste/.snail4j/sutApp/com/github/eostermueller/tjp2/markdown/part01/index.md",
    "sortOrder": 1,
    "displayName": "Part I",
    "content": "[meta]: # (sortOrder=1)\n[meta]: # (displayName=Part I)\n\n# The main deal\n\n## Still important\n\n\n### Detail 1\n\n### Detail 2\n\nThis is my  __first__  bit of text ooo love it.\n\n## Also a bit important\n",
    "childMarkdownFiles": [
        {
            "path": "file:///C:/Users/eoste/.snail4j/sutApp/com/github/eostermueller/tjp2/markdown/part01/firstPage.md",
            "sortOrder": 1,
            "displayName": "First Page",
            "content": "[meta]: # (sortOrder=1)\n[meta]: # (displayName=First Page)\n# First Problem\n\nTry <a href=\"javascript:void(0);\" (click)=\"setWorkloadAlias('katrina')\">katrina</a>\n\n# Second Problem\n\nTry <a href=\"javascript:void(0);\" (click)=\"setWorkloadAlias('julio')\">julio</a>\n"
        },
        {
            "path": "file:///C:/Users/eoste/.snail4j/sutApp/com/github/eostermueller/tjp2/markdown/part01/secondPage.md",
            "sortOrder": 2,
            "displayName": "Second Page",
            "content": "[meta]: # (sortOrder=2)\n[meta]: # (displayName=Second Page)\n# First Problem\n\nTry <a href=\"javascript:void(0);\" (click)=\"setWorkloadAlias('quinta')\">quinta</a>\n\n# Second Problem\n\nTry <a href=\"javascript:void(0);\" (click)=\"setWorkloadAlias('omar')\">omar</a>\n"
        }
    ]
},
{
    "path": "file:///C:/Users/eoste/.snail4j/sutApp/com/github/eostermueller/tjp2/markdown/part02/index.md",
    "sortOrder": 2,
    "displayName": "Part II",
    "content": "[meta]: # (sortOrder=2)\n[meta]: # (displayName=Part II)\n# The main deal\n\n## Still important\n\n\n### Detail 1\n\n### Detail 2\n\nThis is my  __first__  bit of text ooo love it.\n\n## Also a bit important\n",
    "childMarkdownFiles": [
        {
            "path": "file:///C:/Users/eoste/.snail4j/sutApp/com/github/eostermueller/tjp2/markdown/part02/thirdPage.md",
            "sortOrder": 1,
            "displayName": "Third Page",
            "content": "[meta]: # (sortOrder=1)\n[meta]: # (displayName=Third Page)\n# First Problem\n\nTry <a href=\"javascript:void(0);\" (click)=\"setWorkloadAlias('franklin')\">franklin</a>\n\n# Second Problem\n\nTry <a href=\"javascript:void(0);\" (click)=\"setWorkloadAlias('kanga')\">kanga</a>\n"
        },
        {
            "path": "file:///C:/Users/eoste/.snail4j/sutApp/com/github/eostermueller/tjp2/markdown/part02/fourthPage.md",
            "sortOrder": 2,
            "displayName": "Fourth Page",
            "content": "[meta]: # (sortOrder=2)\n[meta]: # (displayName=Fourth Page)\n\n# First Problem\n\nTry <a href=\"javascript:void(0);\" (click)=\"setWorkloadAlias('bertha')\">bertha</a>\n\n# Second Problem\n\nTry <a href=\"javascript:void(0);\" (click)=\"setWorkloadAlias('stan')\">stan</a>\n"
        }
    ]
}

];
export const files = [
  {
    name: 'components',
    type: 'folder',
    children: [
      {
        name: 'src',
        type: 'folder',
        children: [
          {
            name: 'cdk',
            type: 'folder',
            children: [
              { name: 'package.json', type: 'file' },
              { name: 'BUILD.bazel', type: 'file' },
            ]
          },
          { name: 'material', type: 'folder' }
        ]
      }
    ]
  },
  {
    name: 'angular',
    type: 'folder',
    children: [
      {
        name: 'packages',
        type: 'folder',
        children: [
          { name: '.travis.yml', type: 'file' },
          { name: 'firebase.json', type: 'file' }
        ]
      },
      { name: 'package.json', type: 'file' }
    ]
  },
  {
    name: 'angularjs',
    type: 'folder',
    children: [
      { name: 'gulpfile.js', type: 'file' },
      { name: 'README.md', type: 'file' }
    ]
  }
];
