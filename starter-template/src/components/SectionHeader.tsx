export const SectionHeader = ({
    title,
    eyebrow,
    description,
}:{
    title:string;
    eyebrow:string;
    description:string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent text-center bg-clip-text">
            {eyebrow}
        </p>
      </div>
      <h2 className=" font-serif text-3xl text-center md:text-5xl mt-6">
        {title}
      </h2>
      <p className="text-center md:text-lg max-w-md mx-auto text-white/60 mt-4 lg:text-xl">
        {description}
      </p>
    </>
  );
};
