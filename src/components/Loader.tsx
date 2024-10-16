const Loader: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <div style={{ display: loading ? 'block' : 'none'}} className="loader">
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
