const pinterestUrl =
  'http://pinterest.com/pin/create/button/?url=[URL]&description=[TITLE]'

const PinterestShare = ({ data }: { data: string }) => {
  const text = `${encodeURIComponent(data)}`
  return (
    <a
      href={pinterestUrl
        .replace('[URL]', text)
        .replace(
          '[TITLE]',
          'I just generated this image using showmeyourstyle.com. What do you think?'.replace(
            ' ',
            '+'
          )
        )}
      target="_blank"
      rel="noreferrer"
    >
      Share on Pinterest
    </a>
  )
}

export default PinterestShare
