import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Avatar, Text, Icon } from "@chakra-ui/react";
import { MdCloudUpload } from "react-icons/md";

export default function PatientDetail() {
  const onDrop = useCallback((acceptedFiles) => {
    // Handle the uploaded files here (e.g., send them to a server, store in state, etc.)
    console.log("Accepted files:", acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box
      className="scroll"
      overflowX="scroll"
      height="calc(100dvh - 250px)"
      mt="65px"
    >
      {/* Header Part */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        border="2px solid rgba(0, 0, 0, 0.29)"
        padding="15px 45px"
        borderRadius="24px"
      >
        <Text fontSize="5xl" color="#0682D1">
          Medical Report
        </Text>
        <Text fontSize="2xl" color="rgba(0, 0, 0, 0.29)">
          supreme diagnostic & imagine center
        </Text>
      </Box>

      {/* Form Part */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="50px"
        marginTop="50px"
      >
        <Avatar
          width="116px"
          height="116px"
          name="Jhon Doe"
          src="https://bit.ly/sage-adebayo"
        />
        <Box display="flex" flexDirection="column" gap="20px" w="500px">
          <Box border="1px solid black" borderRadius="10px" padding="8px">
            <Text fontSize="xl">Patient : </Text>
          </Box>
          <Box border="1px solid black" borderRadius="10px" padding="8px">
            <Text fontSize="xl">Age & Gender : </Text>
          </Box>
          <Box border="1px solid black" borderRadius="10px" padding="8px">
            <Text fontSize="xl">Diagnosis :</Text>
          </Box>
        </Box>
      </Box>

      {/* FileUploads */}
      <Box
        marginTop="50px"
        {...getRootProps()}
        p={6}
        borderWidth={2}
        borderColor={isDragActive ? "#0682D1" : "#0682D1"}
        borderStyle="dashed"
        borderRadius="md"
        textAlign="center"
        cursor="pointer"
      >
        <input {...getInputProps()} />
        <Icon
          as={MdCloudUpload}
          boxSize={12}
          color={isDragActive ? "#0682D1" : "#0682D1"}
          mb={4}
        />
        {isDragActive ? (
          <Text>Upload a file report</Text>
        ) : (
          <Text>Upload a file report Drag and drop files here</Text>
        )}
      </Box>
    </Box>
  );
}
