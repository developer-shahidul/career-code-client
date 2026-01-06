import { motion } from "motion/react";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="flex-1">
          <motion.img
            animate={{ y: [50, 80, 50] }}
            transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
            src={team1}
            className="max-w-sm rounded-lg shadow-2xl rounded-t-[40px] rounded-br-[40px] border-l-10
             border-b-10 border-blue-600"
          />
          <motion.img
            animate={{ x: [170, 220, 170] }}
            transition={{
              duration: 10,
              delay: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            src={team2}
            className="max-w-sm rounded-lg shadow-2xl rounded-t-[40px] rounded-br-[40px] border-l-10
             border-b-10 border-blue-600 "
          />
        </div>
        <div className="flex-1">
          {/* <motion.h1
            animate={{
              rotate: 180,
              x: 200,
              y: -200,
              transition: { duration: 4 },
            }}
            className="text-5xl font-bold"
          >
            Latest job for you!
          </motion.h1> */}

          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 1 } }}
            className="text-5xl font-bold"
          >
            Remote {""}
            <motion.span
              animate={{
                color: ["#ff5733", "#33ff33", "#8a33ff"],
                transition: { duration: 4, repeat: Infinity },
              }}
            >
              job
            </motion.span>
            {""} for you!
          </motion.h1>

          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
