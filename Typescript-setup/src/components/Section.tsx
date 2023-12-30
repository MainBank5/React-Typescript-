import { ReactNode } from "react"


type SectionProps = {
    title?:string,    //the ttitle is optional as shown by sign - ?. If its not provided then we use the defaul title given in props
    children:ReactNode
}



const Section = ({title = "My default title", children}: SectionProps) => {
  return (
    <section>
        <h1>{title}</h1>
        <p>{children}</p>
    </section>
  )
}

export default Section

