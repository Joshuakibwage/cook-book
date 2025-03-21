 

const Button = ({label, className, href}) => {
  return (
    <Button className={className} href={href}>
      {label}
    </Button>
  )
}

export default Button
