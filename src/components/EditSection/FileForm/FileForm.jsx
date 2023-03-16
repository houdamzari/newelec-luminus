import React from "react";
import {FileInput,Flex} from "../../../components";

function FileForm() {
  return (
    <div className="w-[213px] h-[338px]">
      <p className="text-sm text-textColor-grey font-semibold">Training file</p>
      <FileInput className={"mt-4 p-[2px]"} />
      <p className="mt-[6px] text-sm text-textColor-lightGrey">
        *Only Video, PDF and SlideShow files are allowed
      </p>
      <Flex
        className={"mt-[8px]"}
        flexDirection="flex-row"
        justifyContent="justify-center"
        alignItems="items-center"
      >
        <div className="bg-grey w-full h-[1px]"></div>
        <p className="text-sm font-bold text-textColor-lightGrey">OR</p>
        <div className="bg-grey w-full h-[1px]"></div>
      </Flex>
      <p className="mt-[8px] text-sm text-textColor-grey font-semibold">
        Media URL
      </p>
      <input
        className="mt-[5px] border-2 rounded-md px-[10px] py-[7px] placeholder:text-sm placeholder:text-textColor-lightGrey"
        type="text"
        placeholder="https://youtu.be/1g4hoZx8-o4"
      />
    </div>
  );
}

export default FileForm;