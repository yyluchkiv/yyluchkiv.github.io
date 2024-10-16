import { Tweet } from 'react-tweet'

function TweetBadge({ id }: { id: string }) {
  return (
    <div className="tweet">
      <Tweet id={ id } />
    </div>
  )
}

export default TweetBadge