const Authbtns = (props) => {
    const classes = 'authbtn ' + props.className;
  return (
    <button className={classes}>{props.children}</button>
  )
}

export default Authbtns