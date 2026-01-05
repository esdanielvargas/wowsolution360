function Glass(props) {
  return (
    <div className={!props.glass ? "glass" : "glass show"} onClick={props.handleGlass} />
  )
}
export default Glass