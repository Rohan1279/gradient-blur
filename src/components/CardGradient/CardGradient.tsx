import styles from "./cardGradient.module.css";
import styles2 from "../ListGradient/gradient.module.css";
const CardGradient = () => {
  return (
    <div
      className="w-96 h-[484px]  rounded-2xl flex justify-center items-end shadow-xl  relative z-20 group"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1683573254548-ebb7b94d7def?q=80&w=5106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)')",
        backgroundSize: "cover", // Cover the entire page
        backgroundPosition: "center", // Center the background image
        // zIndex: -1, // Behind the content
      }}
    >
      <h1 className="absolute -bottom-10 z-20 font-semibold text-[26px] tracking-[-1px text-balance text-white">
        Gradient blur
      </h1>

      {/* <div
        className={`absolute w-full h-1/2 backdrop-blur-sm ${styles.mask} flex justify-center items-center `}
      ></div> */}
      <div
        className={`absolute w-full h-full rounded-2xl overflow-hidden ${styles2.gradientBlur} z-10 `}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default CardGradient;
