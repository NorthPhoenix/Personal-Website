import DownArrow from "./design/DownArrow";

const Hero = ({ className = "" }) => {
    return (
        <div className={className + " flex flex-col"}>
            <section className=' mx-4 grow space-y-5 text-center'>
                <h1 className=' text-7xl font-bold'>Nikita Istomin</h1>
                <p className='max-w-7xl text-base xl:text-lg'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Saepe fugiat ab modi maxime officiis molestias, temporibus
                    nostrum porro sint. Ad veritatis, voluptatum ab corporis
                    itaque mollitia rerum laboriosam ducimus repudiandae
                    temporibus autem magnam beatae facilis, quod suscipit sed.
                    Architecto molestiae ducimus dolor, consequuntur numquam vel
                    provident cumque quam temporibus beatae earum aliquam
                    aperiam unde doloribus.
                </p>
            </section>
            <div className='mx-auto my-3 h-7 w-40'>
                <DownArrow className=' h-full w-full' />
            </div>
        </div>
    );
};

export default Hero;
