const xShareApi = 'https://x.com/intent/tweet?text='

const XShare = ({data}: {data: string}) => {
  const text = `I just generated this image using showmeyourstyle.com. What do you think? ${encodeURIComponent(data)}`
  return (
    <a href={xShareApi + text} target="_blank" rel="noreferrer">
      Share on X
    </a>
  )
}

export default XShare
