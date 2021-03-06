import { styled } from "../../styles/stitches.config"

const Wrapper = styled("a", {
  fontSize: "1.1rem",
  color: "$black",
  textDecoration: "none",
  width: "$xxxl",

  ".link_underline": {
    border: "$active solid $xxxs",
    width: "$z",
    transition: "width ease 200ms, opacity ease 300ms",
    opacity: "0",
  },

  "&:hover": {
    ".link_underline": {
      maxWidth: "100%",
      border: "$active solid $xxxs",
      transition: "width ease 200ms",
      width: "100%",
      opacity: "1",
    },
  },
})

export default (props) => {
  return (
    <>
      <Wrapper
        target={props.target || "_blank"}
        rel="noopener noreferrer"
        href={props.href}
        download={props.download}
        {...props}
      >
        {props.children}
      </Wrapper>
      <div className="link_underline"></div>
    </>
  )
}
