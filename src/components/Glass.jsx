export default function Glass(props) {
  return (
    <div className={!props.glass ? "glass" : "glass show"} onClick={props.handleGlass} />
  )
}