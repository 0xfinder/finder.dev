import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Heading, Link, Stack, Text } from "@chakra-ui/layout"
import { RiGithubFill, RiTwitterFill } from "react-icons/ri"

const Bio = () => {
  const data = useStaticQuery(staticQuery)

  const { twitter, github } = data.site.siteMetadata?.social
  const image = (
    <Flex
      borderRadius="md"
      overflow="hidden"
      borderColor="brandSecondary"
      width="min-content"
      mb={2}
    >
      <GatsbyImage image={data.avatar.data.gatsbyImageData} alt="Avy" />
    </Flex>
  )

  return (
    <>
      <Stack lineHeight="1.7" spacing={4}>
        {image}
        <Heading fontWeight="black" fontSize="3xl" color="text.100">
          Hi, I’m Finder.
        </Heading>
        <Stack spacing={4} fontSize="16px">
          <Text>
            I'm currently serving{" "}
            <Link
              href="https://en.wikipedia.org/wiki/National_service_in_Singapore"
              rel="external nofollower noopener"
              color="brandSecondary"
            >
              National Service
            </Link>{" "}
            in my free time. I like write code.
          </Text>
          <Text>
            I'm a degenerate weeb, I like bunny girls. I also enjoy design and
            writing on the side when I can find the time.
          </Text>
          <Text>
            As of{" "}
            <Text as="time" dateTime={data.site.buildtime} color="text.500">
              {data.site.buildTime}
            </Text>
            , I am {getAge()} years old.
          </Text>
        </Stack>
        <Stack spacing={4} direction="row">
          <Link
            href={`https://github.com/${github}`}
            color="unset"
            _hover={{ color: "brand.100" }}
            aria-label="github link"
          >
            <RiGithubFill size={28} />
          </Link>
          <Link
            href={`https://twitter.com/${twitter}`}
            color="unset"
            _hover={{ color: "brand.100" }}
            aria-label="twitter link"
          >
            <RiTwitterFill size={28} />
          </Link>
        </Stack>
      </Stack>
    </>
  )
}

export default Bio

const staticQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/avatars/finder.png/" }) {
      data: childImageSharp {
        gatsbyImageData(
          width: 280
          height: 280
          layout: FIXED
          quality: 100
          placeholder: TRACED_SVG
        )
      }
    }
    site {
      buildTime(formatString: "MMMM Do, YYYY")
      siteMetadata {
        author {
          name
          summary
        }
        social {
          twitter
          github
        }
      }
    }
  }
`

function getAge() {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const age = year - 2003
  if (month < 9) {
    return age - 1
  }
  if (month > 9) {
    return age
  }
  if (day < 13) {
    return age - 1
  }
  return age
}
