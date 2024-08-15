"use client";
import {
  Button,
  Circle,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

export default function ButtonCreatePost() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Circle
        onClick={onOpen}
        size="50px"
        bg="teal.500"
        shadow="lg"
        color="white"
        position="fixed"
        right="2rem"
        bottom="6.5rem"
        borderRadius="100%"
        cursor="pointer"
        _hover={{
          bgColor: "teal.600",
        }}
      >
        <FiPlus />
      </Circle>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>12312312312312312312</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
