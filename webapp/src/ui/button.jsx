const Button = (props) => {
    const classes = 'button text-white ' + props.className
  return (
    <button id={props.id} className={classes}>{props.children}</button>
  )
}

export default Button