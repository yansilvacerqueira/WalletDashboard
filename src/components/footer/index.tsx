import { Footer } from "antd/es/layout/layout"

type MyFooterProps = {
  text: string;
}

export const MyFooter = ({text}: MyFooterProps) => {
  return (
    <Footer style={{ textAlign: "center" }}>©2023 {text}</Footer>
  )
}
