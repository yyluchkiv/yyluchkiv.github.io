import Styles from './Loader.module.css'

const Loader: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <div style={{ display: loading ? 'block' : 'none'}} className={ Styles.loader }>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Loader
