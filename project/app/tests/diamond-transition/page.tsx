import DiamondTransition from "app/_globalComponents/design/DiamondTransition";

export default () => {
  return (
    <>
      <div className='bg-black h-[200px]'></div>
      <DiamondTransition
        twTransitionFill='fill-black'
        twTransitionStroke='stroke-nier-700'
        unitWidth={100}
      />
    </>
  );
};
