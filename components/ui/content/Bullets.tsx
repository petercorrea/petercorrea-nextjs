import { CaretRightIcon } from "@radix-ui/react-icons"
import { styled } from "../../../stitches.config"
import Box from "../../layout/Box"

const Wrapper = styled(Box, {
  // border: "red solid 2px",
  marginBottom: "0px",
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "flex-start",
  alignItems: "flex-start",

  "& > svg": {
    position: "relative",
    right: "-2px",
    top: "0px",
    color: "$active",
    minWidth: "30px",
    minHeight: "30px",
  },
})

export default ({ items }) => {
  let html = items.map((item, idx) => {
    return (
      <Wrapper key={idx}>
        <CaretRightIcon></CaretRightIcon>
        <p>{item}</p>
      </Wrapper>
    )
  })

  return <Box>{html}</Box>
}
