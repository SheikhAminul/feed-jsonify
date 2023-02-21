export interface JsonifiedFeed {
    [key: string]: string | JsonifiedFeed[]
}

const extractData = (value: string): string => value.match(/^<!\[CDATA\[(.*)\]\]>$/s)?.[1] || value

const xmlJsonify = (element: Element): { [key: string]: string | any[] } => {
    const { children } = element
    let value: string | any[] | any

    if (element?.getAttribute?.('type') === 'html') {
        value = extractData(element.innerHTML)
    } else if (children.length) {
        const json = {} as any
        for (const child of children) {
            const tagName = child.tagName.toLowerCase()
            if (!json[tagName]) json[tagName] = []
            json[tagName].push(xmlJsonify(child))
        }
        for (const tagName of Object.keys(json)) {
            if (json[tagName].length === 1) json[tagName] = json[tagName][0]
        }
        value = json
    } else {
        value = extractData(element.innerHTML)
        if (!value && element.tagName === 'link' && element.getAttribute('href')) value = element.getAttribute('href')
    }

    return value as { [key: string]: string | any[] }
}

const feedJsonify = (feedData: string): JsonifiedFeed => {
    const feedParser = new DOMParser()
    return xmlJsonify(feedParser.parseFromString(feedData, 'text/xml') as any)
}

export { feedJsonify, xmlJsonify }