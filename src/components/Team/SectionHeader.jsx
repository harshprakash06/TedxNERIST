export const SectionHeader = ({ title, subtitle }) => {
  return (
    <header className="mb-10 text-white">
      <h1
        className="mb-2 text-5xl font-semibold max-sm:text-4xl"
        style={{ fontFamily: "Cirka", fontSize: "5.698rem", fontWeight: "700" }}
      >
        {title}
      </h1>
      <p
        className="text-xl text-zinc-500 max-sm:text-lg"
        style={{
          fontFamily: "Gilroy-Regular",
          fontWeight: "400",
          color: "#EBEBEB",
        }}
      >
        {subtitle}
      </p>
    </header>
  );
};
