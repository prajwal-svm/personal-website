import React from "react";
import {
  Center,
  Link,
  Divider,
  Stack,
  Icon,
  Flex,
  useColorMode,
} from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaCodepen } from "react-icons/fa";
import { MdMailOutline, MdWeb, MdDescription } from "react-icons/md";
import { FOOTER } from "../data/content";
import { primaryBackgroundColor } from "../styles/theme";
import { EditIcon, StarIcon } from "@chakra-ui/icons";

const LinksToIcon = {
  FaInstagram: FaInstagram,
  FaTwitter: FaTwitter,
  FaGithub: FaGithub,
  FaLinkedinIn: FaLinkedinIn,
  MdMailOutline: MdMailOutline,
  FaCodepen: FaCodepen,
};

const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Stack
      as="footer"
      justifyContent="center"
      alignItems="center"
      m="auto"
      maxWidth="fit"
      w="100%"
      pt="1rem"
      px={2}
      pb={2}
      bg={primaryBackgroundColor + "99"}
    >
      <Divider
        mb={4}
        orientation="horizontal"
        borderColor={FOOTER.colorSwitch.divider[colorMode]}
      />
      <Flex pb={2} w="320px" justifyContent="space-between" alignItems="center">
        {FOOTER.socialMediaHandles.map((item, index) => (
          <Link
            key={index}
            color={FOOTER.colorSwitch.link[colorMode]}
            href={item.href}
            isExternal
          >
            <Icon
              w={8}
              h={8}
              as={LinksToIcon[item.icon]}
              color={FOOTER.colorSwitch.link[colorMode]}
              _hover={{ color: FOOTER.colorSwitch.linkHover[colorMode] }}
            />
          </Link>
        ))}
      </Flex>
      <Divider
        orientation="horizontal"
        borderColor={FOOTER.colorSwitch.divider[colorMode]}
      />
      <Center w="100%" color={FOOTER.colorSwitch.notes[colorMode]}>
        &copy; 2023 Prajwal S Venkateshmurthy. All rights reserved.
      </Center>
    </Stack>
  );
};

export default Footer;
