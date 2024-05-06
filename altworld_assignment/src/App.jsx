import { Button, Card, Flex, Heading, Progress, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBox,
  faFile,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import "./App.css"; 

function App() {
  return (
    <>
      <Flex gap={4} className="container">
        <div className="sidebar">
          <Flex pl={8} pb={2} pt={4}>
            {" "}
            <FontAwesomeIcon icon={faBars} className="secondary-menu" />
            <Heading size="xs" pl={2}>
              HI, AltWorld
            </Heading>
          </Flex>
          <Flex pl={8} pb={2} pt={2}>
            {" "}
            <FontAwesomeIcon icon={faHouse} color="#1ec3b3" />
            <Text fontSize={"12px"} fontWeight={"bold"} pl={2}>
              Dashboard
            </Text>
          </Flex>

          <Flex
            backgroundColor={"rgb(79,209,197)"}
            flexDir={"column"}
            p={3}
            width={"fit-content"}
            borderRadius={"20px"}
            m={4}
          >
            <AddIcon
              color={"gray"}
              boxSize={6}
              background={"white"}
              p={1}
              borderRadius={"25%"}
              ml={2}
            />
            <Heading size="xs" color={"white"} p={2}>
              New Assignment?
            </Heading>
            <Text fontSize={"12px"} color={"white"} p={2} pb={0}>
              Select from pre-defined questions
            </Text>
            <Text fontSize={"12px"} color={"white"} pl={2} pb={2}>
              to have a quick turnaround
            </Text>
            <Button
              style={{
                backgroundColor: "white",
                color: "gray",
                fontSize: "12px",
                height: "30px",
                margin: "10px",
              }}
            >
              Create new Assignment
            </Button>
          </Flex>
        </div>

        <div className="secondItem">
          <Text fontSize={"12px"} fontWeight={"bold"} p={4}>
            Pages/<span style={{ color: "gray" }}>Assignment</span>{" "}
          </Text>
          <Heading size="xs" pl={4}>
            Sales BDE
          </Heading>
          <Card>
            <Heading size="sm" p={4}>
              Sales BDE{" "}
              <span
                style={{ color: "#68D391", marginLeft: "180px" }}
                className="active-heading"
              >
                Active
              </span>
            </Heading>
            <Text fontSize={"12px"} pl={4} fontWeight={"bold"} color={"gray"}>
              Assignment Link
              <a
                href="https://tiny.url/asknandna"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginLeft: "160px",
                  color: "blue",
                  textDecoration: "underline",
                  paddingRight: "10px",
                }}
                className="link"
              >
                https://tiny.url/asknandna
              </a>
            </Text>
            <Text fontSize={"12px"} pl={4} fontWeight={"bold"} color={"gray"}>
              Assignment Hours{" "}
              <span
                className="link"
                style={{ color: "gray", marginLeft: "150px" }}
              >
                3 hours
              </span>
            </Text>
            <Text
              fontSize={"12px"}
              pl={4}
              pb={4}
              fontWeight={"bold"}
              color={"gray"}
            >
              Assignment ends at{" "}
              <span
                className="link"
                style={{ color: "gray", marginLeft: "140px" }}
              >
                11 March 2024
              </span>
            </Text>
            <Flex p={2}>
              <Button
                style={{
                  backgroundColor: "white",
                  fontSize: "10px",
                  height: "20px",
                }}
              >
                <FontAwesomeIcon
                  icon={faBox}
                  style={{ paddingRight: "10px" }}
                />
                TO REVIEW
              </Button>
              <Button
                style={{
                  backgroundColor: "white",
                  fontSize: "10px",
                  height: "20px",
                }}
              >
                <FontAwesomeIcon
                  icon={faFile}
                  style={{ paddingRight: "10px" }}
                />
                Shortlisted
              </Button>
            </Flex>
          </Card>
        </div>
       
      </Flex>
    </>
  );
}

export default App;
