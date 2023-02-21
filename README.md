feed-jsonify<br>
[![NPM Version](https://img.shields.io/npm/v/feed-jsonify.svg?branch=main)](https://www.npmjs.com/package/feed-jsonify)
[![Install Size](https://badgen.net/packagephobia/install/feed-jsonify)](https://packagephobia.now.sh/result?p=feed-jsonify)
[![Downloads](https://img.shields.io/npm/dt/feed-jsonify)](https://www.npmjs.com/package/feed-jsonify)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/SheikhAminul/feed-jsonify/blob/main/LICENSE)
================

Parse RSS/Atom/XML feed data and convert to JSON format.<br>
feed-jsonify provides functions to parse RSS/Atom/XML feed data and convert it to JSON format. This package can be useful for developers who are working with RSS or Atom feeds and need to convert them to JSON format for further processing.


## Table of Contents

-   [Features](#features)
-   [Install](#install)
-   [Usage](#usage)
-   [API Reference](#api-reference)
*   [Contributing](#contributing)
-   [License](#license)
-   [Author](#author)


## Features

- Convert RSS/Atom/XML feed data to JSON format.
- The `feedJsonify` function can handle XML elements nested to any level and convert them to a nested JSON object.
- The package handles CDATA sections in XML data and extracts the text content of the CDATA sections.
- Lightweight and easy to use. The package has no external dependencies.

## Install

```sh
npm i feed-jsonify
```

## Usage

Fetch RSS feed and convert to JSON:
```javascript
import { feedJsonify } from 'feed-jsonify'

const feedData = await fetch('https://moxie.foxnews.com/google-publisher/world.xml').then(response => response.text())
const jsonData = feedJsonify(feedData)
console.log(jsonData)
```

Convert RSS/Atom/XML feed string to JSON:
```javascript
import { feedJsonify } from 'feed-jsonify'

const feedData = `
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
	<channel>
		<title>Breaking News</title>
		<link>https://www.example.com</link>
		<description>FREE breaking news service of every hour in RSS.</description>
		<item>
			<title>Sports News</title>
			<link>https://www.example.com/sports</link>
			<description>Sports news services for cricket, football, and more.</description>
		</item>
		<item>
			<title>Entertainment News</title>
			<link>https://www.example.com/entertainment</link>
			<description>Entertainment news services for Hollywood and more.</description>
		</item>
	</channel>
</rss>
`
const jsonData = feedJsonify(feedData)
console.log(jsonData)
```


## API Reference
### feedJsonify(feedData: string): JsonifiedFeed
Converts RSS/Atom/XML string to JSON.

#### Arguments:

- `feedData` (required): A string containing the RSS/Atom/XML data to be converted to JSON.

#### Return Value:

A JSON object representing the XML data. The returned object has the following structure:
```javascript
interface JsonifiedFeed {
    [key: string]: string | JsonifiedFeed[]
}
```


## Contributing

You are welcome to contribute! If you are adding a feature or fixing a bug, please contribute to the [GitHub repository](https://github.com/SheikhAminul/feed-jsonify/).


## License

feed-jsonify is licensed under the [MIT license](https://github.com/SheikhAminul/feed-jsonify/blob/main/LICENSE).


## Author

|[![@SheikhAminul](https://avatars.githubusercontent.com/u/25372039?v=4&s=96)](https://github.com/SheikhAminul)|
|:---:|
|[@SheikhAminul](https://github.com/SheikhAminul)|
