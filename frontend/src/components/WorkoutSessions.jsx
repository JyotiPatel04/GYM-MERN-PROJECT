import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Transform your body with our high-intensity workout sessions designed 
          by certified trainers. Whether you're a beginner or a fitness enthusiast, 
          our customized training programs help you build strength, burn fat, 
          and improve endurance in a motivating environment.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
           Join our specialized bootcamps designed to accelerate your fitness journey. 
           These focused programs combine strength, endurance, and fat-burning workouts 
           to help you achieve faster and long-lasting results.
        </p>
        <div className="bootcamps">
          <div>
             <h4>Weight Loss Bootcamp</h4>
             <p>
               A high-energy program focused on fat burning, cardio training, 
               and metabolism boosting exercises to help you lose weight effectively.
             </p>
          </div>
          <div>
            <h4>Muscle Building Bootcamp</h4>
             <p>
               Strength-focused training sessions designed to increase muscle mass, 
               improve strength, and enhance overall body composition.
             </p>
          </div>
          <div>
            <h4>HIIT & Endurance Camp</h4>
            <p>
             Intense interval training sessions that improve stamina, 
             heart health, and overall athletic performance.
            </p>
          </div>
          <div>
             <h4>Functional Fitness Camp</h4>
              <p>
               Improve flexibility, balance, and core strength with 
               real-world movement exercises that enhance daily performance.
              </p>
          </div>
          <div>
             <h4>Strength & Power Bootcamp</h4>
             <p>
               Build explosive power and functional strength through compound lifts, 
               resistance training, and progressive overload techniques.
             </p>
           </div>
           <div>
              <h4>Women’s Fitness Camp</h4>
              <p>
                Specialized training sessions focused on toning, strength building, 
                and improving overall health in a supportive environment.
              </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;