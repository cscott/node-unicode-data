var resources = [
	// 1.1.5 has a different format, so disable it for now
	/*
	{
		'version': '1.1.5',
		'UnicodeData.txt': 'http://unicode.org/Public/1.1-Update/UnicodeData-1.1.5.txt'
	},
	*/
	{
		'version': '2.0.14',
		'main': 'http://unicode.org/Public/2.0-Update/UnicodeData-2.0.14.txt'
	},
	{
		'version': '2.1.9',
		'main': 'http://unicode.org/Public/2.1-Update4/UnicodeData-2.1.9.txt'
	},
	{
		'version': '3.0.1',
		'main': 'http://unicode.org/Public/3.0-Update1/UnicodeData-3.0.1.txt'
	},
	// 3.2.0 and newer have separate files for Scripts and Blocks
	{
		'version': '3.2.0',
		'main': 'http://unicode.org/Public/3.2-Update/UnicodeData-3.2.0.txt',
		'scripts': 'http://unicode.org/Public/3.2-Update/Scripts-3.2.0.txt',
		'blocks': 'http://unicode.org/Public/3.2-Update/Blocks-3.2.0.txt',
		'properties': 'http://unicode.org/Public/3.2-Update/PropList-3.2.0.txt'
	},
	{
		'version': '4.0.1',
		'main': 'http://unicode.org/Public/4.0-Update1/UnicodeData-4.0.1.txt',
		'scripts': 'http://unicode.org/Public/4.0-Update1/Scripts-4.0.1.txt',
		'blocks': 'http://unicode.org/Public/4.0-Update1/Blocks-4.0.1.txt',
		'properties': 'http://unicode.org/Public/4.0-Update1/PropList-4.0.1.txt'
	},
	{
		'version': '4.1.0',
		'main': 'http://unicode.org/Public/4.1.0/ucd/UnicodeData.txt',
		'scripts': 'http://unicode.org/Public/4.1.0/ucd/Scripts.txt',
		'blocks': 'http://unicode.org/Public/4.1.0/ucd/Blocks.txt',
		'properties': 'http://unicode.org/Public/4.1.0/ucd/PropList.txt'
	},
	{
		'version': '5.0.0',
		'main': 'http://unicode.org/Public/5.0.0/ucd/UnicodeData.txt',
		'scripts': 'http://unicode.org/Public/5.0.0/ucd/Scripts.txt',
		'blocks': 'http://unicode.org/Public/5.0.0/ucd/Blocks.txt',
		'properties': 'http://unicode.org/Public/5.0.0/ucd/PropList.txt'
	},
	{
		'version': '5.1.0',
		'main': 'http://unicode.org/Public/5.1.0/ucd/UnicodeData.txt',
		'scripts': 'http://unicode.org/Public/5.1.0/ucd/Scripts.txt',
		'blocks': 'http://unicode.org/Public/5.1.0/ucd/Blocks.txt',
		'properties': 'http://unicode.org/Public/5.1.0/ucd/PropList.txt'
	},
	{
		'version': '5.2.0',
		'main': 'http://unicode.org/Public/5.2.0/ucd/UnicodeData.txt',
		'scripts': 'http://unicode.org/Public/5.2.0/ucd/Scripts.txt',
		'blocks': 'http://unicode.org/Public/5.2.0/ucd/Blocks.txt',
		'properties': 'http://unicode.org/Public/5.2.0/ucd/PropList.txt'
	},
	{
		'version': '6.0.0',
		'main': 'http://unicode.org/Public/6.0.0/ucd/UnicodeData.txt',
		'scripts': 'http://unicode.org/Public/6.0.0/ucd/Scripts.txt',
		'blocks': 'http://unicode.org/Public/6.0.0/ucd/Blocks.txt',
		'properties': 'http://unicode.org/Public/6.0.0/ucd/PropList.txt'
	},
	{
		'version': '6.1.0',
		'main': 'http://unicode.org/Public/6.1.0/ucd/UnicodeData.txt',
		'scripts': 'http://unicode.org/Public/6.1.0/ucd/Scripts.txt',
		'blocks': 'http://unicode.org/Public/6.1.0/ucd/Blocks.txt',
		'properties': 'http://unicode.org/Public/6.1.0/ucd/PropList.txt'
	},
	{
		'version': '6.2.0',
		'main': 'http://unicode.org/Public/6.2.0/ucd/UnicodeData.txt',
		'scripts': 'http://unicode.org/Public/6.2.0/ucd/Scripts.txt',
		'blocks': 'http://unicode.org/Public/6.2.0/ucd/Blocks.txt',
		'properties': 'http://unicode.org/Public/6.2.0/ucd/PropList.txt'
	}
];

module.exports = resources;