import Styles from './TweetBadge.module.css'
import { Tweet } from 'react-tweet'

function TweetBadge({ id }: { id: string }) {
  return (
    <div className={ Styles.tweet }>
      <Tweet id={ id } />
    </div>
  )
}

export default TweetBadge