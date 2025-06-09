import { ReactNode } from 'react'
interface IProps {
    children:ReactNode,
    className?:string
}
const Container = ({children,className}:IProps) => {
  return (
    <div className={`max-w-[1200px] mx-auto lg:px-0 px-2 ${className}`}>{children}</div>
  )
}

export default Container