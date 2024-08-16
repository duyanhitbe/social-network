import { usePostContext } from "@app/context/PostContext";
import { Button, ModalBody, ModalFooter, Stack } from "@chakra-ui/react";
import { Form } from "formik";
import { useMemo } from "react";
import Input from "../shared/Input";
import Textarea from "../shared/Textarea";

export default function CreateUpdatePostForm() {
  const { onClose } = usePostContext();
  const { isPending, action } = usePostContext();

  const buttonTitle = useMemo(() => {
    if (action === "update") return "Update";
    return "Create";
  }, [action]);

  return (
    <Form>
      <ModalBody>
        <Stack spacing={4}>
          <Textarea
            placeholder="Your post's body"
            id="body"
            name="body"
            label="Post's body"
            isRequired
          />
          <Input id="image" name="image" label="Image" />
        </Stack>
      </ModalBody>
      <ModalFooter>
        <Button mr={3} onClick={onClose}>
          Close
        </Button>
        <Button
          bg="teal.500"
          color="white"
          isLoading={isPending}
          _hover={{ bg: "teal.600" }}
          type="submit"
        >
          {buttonTitle}
        </Button>
      </ModalFooter>
    </Form>
  );
}
