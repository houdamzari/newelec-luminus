import Button from "../Button/Button";
import Flex from "../Flex/Flex";

function TitleSection() {
  return (
    <Flex justifyContent={"justify-center"} alignItems={"align-center"}>
      <Flex
        className={"w-[1100px]"}
        flexDirection={"flex-row"}
        justifyContent={"justify-between"}
        alignItems={"items-center"}
      >
        <h1 className="text-lg font-semibold text-[#7C7C7C] xs:text-md xs:w-1/2">
          Edit Training "Working At Height"
        </h1>
        <Flex
          flexDirection={"flex-row"}
          justifyContent={"justify-center"}
          alignItems={"items-center"}
          gap={"gap-[25px] xs:gap-2"}
        >
          <Button secondary />
          <Button primary />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default TitleSection;
