function Button({ primary, secondary }) {
  return (
    <>
      {primary && (
        <button className=" px-[27px] py-[10px] rounded-md bg-orange text-white font-bold hover:bg-[#FDA172]
        xs:text-xs xs:px-4 xs:py-2">
          Update & Save
        </button>
      )}
      {secondary && (
        <button className="bg-transparent text-[#B5B5B5] font-bold text-base  xs:text-xs">
          Cancel
        </button>
      )}
    </>
  );
}

export default Button;
