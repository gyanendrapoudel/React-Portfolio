const Title = ({title, clas}) => {
  return (
    <div className={clas}>
      {/* display-flex skill-text */}
      <span>{title}</span>
    </div>
  )
}
export default Title