import {
  Stack,
  Box,
  Flex,
  Card,
  SimpleGrid,
  Heading,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Icon,
  CardBody,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaChartPie } from "react-icons/fa";
import { ComputeChart, MonthChart } from "./chart";
import { IoMdArrowDropup } from "react-icons/io";
import Example, { AreaExample } from "./chart2";

export default function MidWidget() {
  // const cardData = [
  //   { title: "Total Rewards", text: "Monthly Analysis" },
  //   { title: "Miners", text: "Computing Power" },
  //   // Add more card data objects as needed
  // ];
  return (
    <>
      <SimpleGrid gap={5} columns={{ base: 1, sm: 1, md: 1, lg: 2 }}>
        <Card
          rounded={"2xl"}
          border="2px solid"
          borderColor={useColorModeValue("#EDE8FC", "#301287")}
          bg={useColorModeValue("#8F6AFB", "#301287")}
          px={6}
          py={4}
          h={{ base: "500px", md: "400px" }}
        >
          <Flex justify="space-between">
            <Flex>
              <Text color={"white"} fontWeight="500">
                Monthly Analysis
              </Text>
            </Flex>
            <Box bg={"#ffffff"} rounded="full" p={1}>
              <Icon
                boxSize={8}
                color={useColorModeValue("#8F6AFB", "#501EE1")}
                as={FaChartPie}
              />
            </Box>
          </Flex>
          <Flex direction={{ base: "column", md: "row" }} h={400}>
            <Stat color="white">
              <StatNumber>$0.0K</StatNumber>
              <StatLabel>Total Spent</StatLabel>
              <StatHelpText color={"#00D87D"}>
                <StatArrow type="increase" />
                +0.00%
              </StatHelpText>
            </Stat>
            <AreaExample />
            {/* <MonthChart /> */}
          </Flex>
        </Card>
        <Card
          rounded={"2xl"}
          border="2px solid"
          borderColor={useColorModeValue("#EDE8FC", "#301287")}
          bg={useColorModeValue("#8F6AFB", "#301287")}
          px={6}
          py={4}
          h={{ base: "500px", md: "400px" }}
        >
          <Flex justify="space-between">
            <Flex>
              <Text color={"white"} fontWeight="500">
                Computing Power
              </Text>
            </Flex>
            <Box bg={"#ffff"} rounded="full" p={1}>
              <Icon
                boxSize={8}
                color={useColorModeValue("#8F6AFB", "#501EE1")}
                as={FaChartPie}
              />
            </Box>
          </Flex>
          <Flex h={400}>
            <Example />
          </Flex>
          {/* <CardBody>
           
            <ComputeChart />
          </CardBody> */}
        </Card>
      </SimpleGrid>
    </>
  );
}
