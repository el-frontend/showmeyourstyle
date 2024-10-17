const linkedinShareApi =
  'https://www.linkedin.com/shareArticle?mini=true&url=[URL]&title=[TITLE]&source=showmeyourstyle.com'

const LinkedinShare = ({ data }: { data: string }) => {
  const text = `${encodeURIComponent(data)}`
  return (
    <a
      href={linkedinShareApi
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
      Share on Linkedin
    </a>
  )
}

export default LinkedinShare
