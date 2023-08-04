import skills from "utils/skills";

const Skills = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-6 p-6 '>
      <h1 className='text-4xl font-bold tracking-widest text-center uppercase text-shadow'>
        Skills
      </h1>
      <div className='grid grid-cols-6 gap-6 shrink max-w-7xl'>
        {skills.map((skill) => (
          <div className='flex flex-col items-center justify-start gap-2 p-2 text-center shadow-md bg-nier-200'>
            <h4 className='mt-2 text-xl font-semibold tracking-widest uppercase text-shadow'>
              {skill.name}
            </h4>
            <hr className='w-1/3 h-px border-nier-700' />
            <i className={`text-7xl ${skill.devicon}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
