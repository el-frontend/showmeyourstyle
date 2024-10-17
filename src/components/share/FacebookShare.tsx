const faceShareApi = 'https://www.facebook.com/sharer/sharer.php?u='

const FacebookShare = ({ data }: { data: string }) => {
  return (
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(data)}&src=showmeyourstyle.com`}
      target="_blank"
      rel="noreferrer"
    >
      Share on Facebook
    </a>
  )
}

export default FacebookShare
