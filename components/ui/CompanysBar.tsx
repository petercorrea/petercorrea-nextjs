import Image from "next/image"
import AppleLogo from "../../public/logos/apple.png"
import CoinbaseLogo from "../../public/logos/coinbase.png"
import PaypalLogo from "../../public/logos/paypal.png"
import TargetLogo from "../../public/logos/target.png"
import ThinkfulLogo from "../../public/logos/thinkful.svg"
import { styled } from "../../stitches.config"
import Box from "../layout/Box"

const CompanysBar = styled(Box, {
  display: "block",
  backgroundColor: "rgba(0, 0, 0, 0.94)",
  // height: "150px",
  padding: "20px 0px",

  h3: {
    color: "white",
    textAlign: "center",
    margin: "10px",
  },

  ul: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

    li: {
      display: "block",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",

      img: {
        filter: "grayscale(100%) contrast(100%) invert(100%) brightness(120%)",
      },
    },
  },
})

export default (props) => {
  return (
    <CompanysBar {...props} column>
      <Box row full>
        <h3>I've work with...</h3>
      </Box>

      <Box row>
        <ul>
          <li key="CompanysBar_0">
            <Image
              src={ThinkfulLogo}
              alt="company logo of thinkful"
              width={100}
              height={100}
            ></Image>
          </li>

          <li key="CompanysBar_2">
            <Image
              src={TargetLogo}
              alt="company logo of target"
              width={60}
              height={60}
            ></Image>
          </li>
          <li key="CompanysBar_1">
            <Image
              src={AppleLogo}
              alt="company logo of Apple"
              width={60}
              height={60}
            ></Image>
          </li>
          <li key="CompanysBar_3">
            <Image
              src={CoinbaseLogo}
              alt="company logo of  coinbase"
              width={100}
              height={100}
            ></Image>
          </li>
          <li key="CompanysBar_4">
            <Image
              src={PaypalLogo}
              alt="company logo of paypal"
              width={100}
              height={100}
            ></Image>
          </li>
        </ul>
      </Box>
    </CompanysBar>
  )
}
