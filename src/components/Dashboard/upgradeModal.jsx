import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
  useColorModeValue,
  HStack,
  Box,
  Image,
  Flex,
  Heading,
  ButtonGroup,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Link,
  Icon,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import Rec9 from "../../images/Rectangle9.png";
import { BiSolidPlug } from "react-icons/bi";
import { IoIosFlash } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { SiBitcoincash } from "react-icons/si";
import { ArrowForwardIcon, InfoOutlineIcon } from "@chakra-ui/icons";
// import { Link } from "@chakra-ui/next-js";
import CModal from "./createModal";

export default function UpgradeModal({ user }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showList, setShowList] = useState(false); // Initialize showForm state
  const [showCard, setShowCard] = useState(false); // Add state for controlling card visibility

  const handleLinkClick = () => {
    setShowCard(!showCard); // Show the card when the link is clicked
  };

  const handleAddMinerClick = () => {
    setShowList(!showList); // Toggle the showList state
    setShowCard(false); // Reset the showCard state
  };
  const resetState = () => {
    setShowList(false);
    setShowCard(false);
  };

  const handleModalClose = () => {
    resetState();
    onClose();
  };

  const [power, setpower] = useState("");
  const [payout, setPayout] = useState(0);

  useEffect(() => {
    console.log(power);
    const payout = (power * 35 * 300) / 100;
    setPayout(payout);
  }, [power]);

  console.log(user);

  const [miner, setMiner] = useState(null);
  const [balance, setBalance] = useState(0);

  const [value, setValue] = React.useState(0);
  const handleChange = (value) => setpower(value);

  return (
    <>
      <Button
        bg={useColorModeValue("#EDE8FC", "#301287")}
        color={useColorModeValue("#10062D", "#fff")}
        _hover={{ bg: "#301287" }}
        onClick={onOpen}
      >
        Upgrade
      </Button>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent
          textAlign={"center"}
          bg={useColorModeValue("#fff", "#10062D")}
          color={useColorModeValue("#10062D", "#fff")}
          border="2px solid"
          borderColor={useColorModeValue("#EDE8FC", "#301287")}
        >
          <ModalHeader>Upgrade your miner</ModalHeader>
          <ModalCloseButton />
          <ModalBody gap={10}>
            <Text mb={5}>
              Choose a pack or customize an upgrade yourself to get more rewards
            </Text>
            <Button
              leftIcon={<IoIosAddCircleOutline />}
              onClick={handleAddMinerClick}
              mb={5}
            >
              Add Miner
            </Button>
            {showList && (
              <Box
                bg={useColorModeValue("gray.100", "rgba(0,0,0,0.2)")}
                px={[3, 5]}
                py={3}
                rounded={"20px"}
              >
                <Flex justify={"space-between"} align={"center"}>
                  <HStack>
                    <Image
                      src={
                        "https://gateway.pinata.cloud/ipfs/QmRqSZ2bFS46QYZ1HgwGurogGsrZrwMDaRgckM32yZKrQb/1.png"
                      }
                      width={[45, 35, 50]}
                      height={[45, 35, 50]}
                      rounded={"lg"}
                    />

                    <Box>
                      {" "}
                      <Text
                        color={"white.500"}
                        fontSize={["13px", "sm", "initial"]}
                      >
                        <Link href="#" onClick={handleLinkClick}>
                          The miner Box #14401
                        </Link>
                      </Text>
                      <HStack fontSize={["13px", "sm"]}>
                        <HStack gap={"5px"}>
                          <Box
                            p={"1px"}
                            bg={"green.400"}
                            rounded={"full"}
                            color={"#fff"}
                          >
                            <IoIosFlash />
                          </Box>
                          <Text>1 TH</Text>
                        </HStack>
                        <HStack ml={"5px"} gap={"5px"}>
                          <Box
                            p={"1px"}
                            bg={"yellow.400"}
                            rounded={"full"}
                            color={"#fff"}
                          >
                            <BiSolidPlug />
                          </Box>
                          <Text>35 W/TH</Text>
                        </HStack>
                      </HStack>
                    </Box>
                  </HStack>
                </Flex>
              </Box>
            )}
            {showCard && (
              <Stack
                bg={useColorModeValue("#fff", "#10062D")}
                color={useColorModeValue("#10062D", "#fff")}
                border="2px solid"
                borderColor={useColorModeValue("#EDE8FC", "#301287")}
                rounded="2xl"
                mt={5}
              >
                {/* <Heading size={"sm"}>Computing power</Heading> */}
                <ButtonGroup gap="4" variant={"outline"} mb={4}>
                  <Button
                    value={1}
                    onClick={(e) => setpower(e.target.value)}
                    color={"#00D87D"}
                    border="1px solid #301287"
                    fontSize={["12px", "initial"]}
                  >
                    1 TH
                  </Button>
                  <Button
                    value={10}
                    onClick={(e) => setpower(e.target.value)}
                    color={"#00D87D"}
                    border="1px solid #301287"
                    fontSize={["12px", "initial"]}
                  >
                    10 TH
                  </Button>
                  <Button
                    value={100}
                    onClick={(e) => setpower(e.target.value)}
                    color={"#00D87D"}
                    border="1px solid #301287"
                    fontSize={["12px", "initial"]}
                  >
                    100 TH
                  </Button>
                  <NumberInput
                    min={1}
                    value={power}
                    onChange={handleChange}
                    max={1000} // Set the maximum value for the NumberInput
                  >
                    <NumberInputField placeholder={"Value"} p={"5px"} />
                  </NumberInput>
                </ButtonGroup>
                <Heading size={"sm"}>Rewards Calculation</Heading>
                <Tabs variant="enclosed" textColor="white">
                  <TabList gap={1} mb={2} border={"none"}>
                    <Tab
                      bg="#3b49df"
                      rounded={"lg"}
                      border={"none"}
                      textColor="white"
                      w={100}
                    >
                      Annually
                    </Tab>
                    {/* <Tab
                    bg="#3b49df"
                    rounded={"lg"}
                    border={"none"}
                    textColor="white"
                    w={100}
                  >
                    Daily
                  </Tab> */}
                  </TabList>
                  <TabPanels>
                    <TabPanel
                      backgroundImage={`url(${Rec9.src})`}
                      backgroundSize="cover"
                      backgroundPosition="center"
                      rounded={"lg"}
                    >
                      <TableContainer p={2} borderRadius={"lg"}>
                        <Table variant="simple">
                          <Tbody>
                            <Tr>
                              <Td fontSize="xs">POOL PAYOUT</Td>
                              <Td isNumeric align="center">
                                {payout}
                                <Icon
                                  boxSize={3}
                                  as={SiBitcoincash}
                                  color={"yellow.50"}
                                />
                              </Td>
                            </Tr>
                            <Tr>
                              <Td fontSize="xs">
                                <Flex
                                  align={"center"}
                                  justify={"start"}
                                  gap={1}
                                >
                                  <Text>NET REWARD</Text> <InfoOutlineIcon />
                                </Flex>
                              </Td>
                              <Td isNumeric>${payout}</Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </TableContainer>

                      <Stack p={2} fontSize="xs">
                        <Text>Reward history</Text>
                      </Stack>
                      <Stack border={"2px solid #301287"} rounded={"lg"} p={2}>
                        <Flex align={"center"} justify={"space-between"}>
                          <Text>Price per TH</Text>
                          <Text>$35</Text>
                        </Flex>
                        <Flex align={"center"} justify={"space-between"}>
                          <Text>Historical ROI</Text>
                          <Text>${payout}</Text>
                        </Flex>
                        <Flex align={"center"} justify={"space-between"}>
                          <Text>Total</Text>
                          <Text>${power * 35}</Text>
                        </Flex>
                      </Stack>
                    </TabPanel>
                    <TabPanel>
                      <p>two!</p>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Stack>
            )}
            {/* Render the card component when showCard is true */}
          </ModalBody>

          <ModalFooter>
            <Button
              bg={useColorModeValue("#8F6AFB", "#3b49df")}
              color="white"
              _hover="inherit"
              mr={3}
              onClick={handleModalClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
