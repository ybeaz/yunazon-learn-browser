interface HtmlEntitiesListInterface {
  [key: string]: string
}

interface SanitizeInterface {
  sanitize(text: string): string
}

class HtmlEntitiesSanitize implements SanitizeInterface {
  characterBlockedListMapping: HtmlEntitiesListInterface = {
    lt: '<',
    gt: '>',
    amp: '&',
    quot: '"',
    nbsp: String.fromCharCode(160),
    copy: '©',
    apos: '`',
  }

  // sample regex generated : /&(nbsp|amp|quot|lt|gt|apos|copy);/g;
  generateRegex = (blockedList: HtmlEntitiesListInterface) => {
    return new RegExp('&(' + Object.keys(blockedList).join('|') + ');', 'g')
  }

  //helper function that use regex and sanitize text
  replaceHtmlEntites = (text: string) => {
    const sanitize_regex = this.generateRegex(this.characterBlockedListMapping)
    // text =  "Use the&nbsp;Content Report&nbsp; Table macro &amp; &copy;";
    return text.replace(sanitize_regex, (match: string) => {
      return this.characterBlockedListMapping[match.slice(1, -1)]
    })
  }

  //interface implementation
  sanitize(text: string) {
    if (!text) {
      return ''
    }
    return this.replaceHtmlEntites(text)
  }
}

class SanitizeContentService {
  text: string

  constructor(text: string) {
    this.text = text
  }

  setText = (text: string) => {
    this.text = text
  }

  getText = () => {
    return this.text
  }

  //uses html enitites sanitizing strategy and returns service instance for chaining other strategies
  sanitizeHtml = () => {
    const htmlStrategy: HtmlEntitiesSanitize = new HtmlEntitiesSanitize()
    this.setText(htmlStrategy.sanitize(this.text))
    return this
  }
}

//create and call Sanitizing service instance and chains multiple strategies to sanitize content; currently supports only one strategy
export const sanitizeCharacterEncodings = (text: string) => {
  if (!text) {
    return ''
  }
  const sanitizeService = new SanitizeContentService(text)

  //chain of responsibility design pattern to handle multiple sanitization strategies
  // inject your own strategy by : return sanitizeService.sanitizeHtml().NEW_STRATEGY().getText();
  return sanitizeService.sanitizeHtml().getText()
}
