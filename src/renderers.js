module.exports = {
	'#translated_text': data => {
	  const language = data.language || 'It'
	  return [
	    {
	      typing: true,
	      markdown: true,
	      text: data[`text${language}`]
	    }
	  ]
	}
}
