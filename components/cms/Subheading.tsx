import { ComponentContentSubheading } from "../../generated"
import { styled } from "../../styles/stitches.config"

const Subheading = styled("h2", {
  marginBottom: "$m",
})

export const generateSubheading = (comp: ComponentContentSubheading, idx) => {
  return <Subheading key={idx}>{comp.text}</Subheading>
}
