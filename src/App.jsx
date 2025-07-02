import React from 'react';
import {motion} from 'framer-motion';
import './App.css';

const Fitzone = () => {

    const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div>
      
      {/* Navbar */}

      <nav className="nav">
          <div className="navbar-container">

            <div className="logo">
              <h1><a href="#home"><span className="multi">Fit</span>Zone<span className="multi"> Gym</span></a></h1> 
            </div>

            <div className="display: flex; align-items:center; flex-end;">
              <a href="#home" class="nav-link">Home</a>
              <a href="#aboutus" class="nav-link">About Us</a>
              <a href="#services" class="nav-link">Services</a>
              <a href="#trainers" class="nav-link">Trainers</a>
              <a href="#pricing" class="nav-link">Pricing</a>
              <a href="#contactus" class="nav-link">Contact Us</a>
          </div>

        </div>
    </nav>

      {/* homepage */}

      <motion.section
      id="home"
      className="home"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}>

        <motion.h1
        className="main-title"
        variants={fadeInUp}>

          Transform Your <span class="multi">Body</span>

        </motion.h1>

        <motion.p
        className="subtitle"
        variant={fadeInUp}>

          Join <span class="multi">Fit</span>Zone and start your fitness journey today

        </motion.p>

        <motion.div
        className="home-buttons"
        variant={fadeInUp}>

          <motion.button
          className="btn-book"
          whileTap={{ scale: 0.95 }}>

              <a href="#pricing">Book Now</a>

          </motion.button>

          <motion.button
          className="btn-learn"
          whileTap={{ scale: 0.95 }}>

              <a href="#services">Learn More</a>

            </motion.button>
        </motion.div>    
      </motion.section>

      {/* ABOUT US */}

      <motion.section 
        id="aboutus" 
        className="pages1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}>
      
        <motion.div 
        className="about-header" 
        variants={fadeInUp}>

          <h1 className="title">About <span className="multi">Fit</span>Zone</h1>
          <p className="subtitle">IDEAL DESTINATION FOR <span className="multi-bold">FITNESS</span> EXCELLENCE</p>

        </motion.div>

        <div className="about-content">

          <motion.div 
            className="about-text"
            variants={slideInLeft}>
          
            <h3 className="about-h3">20+ Years of Excellence</h3>
            <p className="about-p">At <span className="multi">Fit</span>Zone, we've been helping people achieve their fitness goals for over two decades. Our state-of-the-art facility, expert trainers, and supportive community create the perfect environment for your transformation.</p>

            <motion.ul 
              className="about-list"
              variants={staggerContainer}>

              <motion.li 
              variants={scaleIn}>

                <span className="fas fa-check-circle feature-icon"></span>Class Equipments

              </motion.li>

              <motion.li 
              variants={scaleIn}>

                <span className="fas fa-check-circle feature-icon"></span>Certified Personal Trainer

              </motion.li>

              <motion.li 
              variants={scaleIn}>

                <span className="fas fa-check-circle feature-icon"></span>Fully Air-Conditioned

              </motion.li>

              <motion.li 
              variants={scaleIn}>

                <span className="fas fa-check-circle feature-icon"></span>24/7 Standby Emergency Healthcare

              </motion.li>

            </motion.ul>
          </motion.div>

          <motion.div 
            className="about-grid"
            variants={slideInRight}>

            <motion.div 
              className="about-grid1"
              whileHover={{ scale: 1.05 }}
              variants={scaleIn}>

              <h4 className="grid-title">5000+</h4>
              <p className="grid-text">Satisfied Customers</p>

            </motion.div>

            <motion.div 
              className="about-grid2"
              whileHover={{ scale: 1.05 }}
              variants={scaleIn}>

              <h4 className="grid-title">50+</h4>
              <p className="grid-text">Expert Trainers</p>

            </motion.div>

            <motion.div 
              className="about-grid3"
              whileHover={{ scale: 1.05 }}
              variants={scaleIn}>

              <h4 className="grid-title">1000+</h4>
              <p className="grid-text">Equipments Pieces</p>

            </motion.div>

            <motion.div 
              className="about-grid4"
              whileHover={{ scale: 1.05 }}
              variants={scaleIn}>

              <h4 className="grid-title">24/7</h4>
              <p className="grid-text">Gym Access</p>

            </motion.div>
          </motion.div>

        </div>

      </motion.section>

      {/* Services */}

      <motion.section 
        id="services" 
        className="pages2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}>

        <motion.div 
        className="services-header" 
        variants={fadeInUp}>

          <h1 className="title">Our <span className="multi">Services</span></h1>
          <p className="subtitle">EVERYTHING YOU NEED TO REACH YOUR <span className="multi-bold">FITNESS</span> GOAL</p>

        </motion.div>

        <motion.div 
          className="services-grid"
          variants={staggerContainer}>

          <motion.div 
            className="service-card1"
            variants={scaleIn}
            whileHover={{ scale: 1.02}}>

            <div className="icon">
              <i className="fas fa-dumbbell"></i>
            </div>
            <h3 className="grid-title">WEIGHT TRAINING</h3>
            <p className="grid-text">Build strength and muscles with our top class weight training equipments and expert guidance</p>

          </motion.div>

          <motion.div 
            className="service-card2"
            variants={scaleIn}
            whileHover={{ scale: 1.02}}>

            <div className="icon">
              <i className="fas fa-running"></i>
            </div>
            <h3 className="grid-title">CARDIO TRAINING</h3>
            <p className="grid-text">Improve your cardiovascular health with our modern cardio equipment and high-energy classes</p>

          </motion.div>

          <motion.div 
            className="service-card1"
            variants={scaleIn}
            whileHover={{ scale: 1.02}}>

            <div className="icon">
              <i className="fas fa-wind"></i>
            </div>
            <h3 className="grid-title">FULLY AIR-CONDITIONED</h3>
            <p className="grid-text">Hygienic and fully air-conditioned gym</p>

          </motion.div>

          <motion.div 
            className="service-card2"
            variants={scaleIn}
            whileHover={{ scale: 1.02}}>

            <div className="icon">
              <i className="fas fa-person"></i>
            </div>
            <h3 className="grid-title">PERSONAL TRAINING</h3>
            <p className="grid-text">Get personalized attention with our certified trainers to achieve your specific goals faster</p>

          </motion.div>

          <motion.div 
            className="service-card1"
            variants={scaleIn}
            whileHover={{ scale: 1.02}}>

            <div className="icon">
              <i className="fas fa-bed"></i>
            </div>
            <h3 className="grid-title">24/7 STANDBY EMERGENCY</h3>
            <p className="grid-text">Worried you will get hurt exercising? Specialized physiotherapist and emergency doctor is always available</p>

          </motion.div>

          <motion.div 
            className="service-card2"
            variants={scaleIn}
            whileHover={{ scale: 1.02}}>

            <div className="icon">
              <i className="fas fa-burger"></i>
            </div>
            <h3 className="grid-title">NUTRITION COACH</h3>
            <p className="grid-text">Get expert nutrition advice and meal planning to complement your fitness routine.</p>

          </motion.div>

        </motion.div>
      </motion.section>

      {/* TRAINERS */}

      <motion.section 
        id="trainers" 
        className="pages1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}>

        <motion.div 
        className="trainers-header" 
        variants={fadeInUp}>

          <h1 className="title">Our <span className="multi">Trainers</span></h1>
          <p className="subtitle">EXPERT <span className="multi-bold">PROFESSIONALS</span> DEDICATED TO YOUR SUCCESS</p>

        </motion.div>

        <motion.div 
          className="trainers-grid"
          variants={staggerContainer}>

          <motion.div 
            className="trainers-card1"
            variants={scaleIn}
            whileHover={{ scale: 1.02}}>

            <div className="icon">
              <i className="fas fa-person"></i>
            </div>
            <h3 className="grid-title">AMMAR TARIQ</h3>
            <p className="grid-text">Your very own personal trainer - Certified Gym Trainer</p>
            <a href="https://www.instagram.com/iammartariq" className="link">Instagram: @iammartariq</a>

          </motion.div>

          <motion.div 
            className="trainers-card2"
            variants={scaleIn}
            whileHover={{ scale: 1.02}}>

            <div className="icon">
              <i className="fa-solid fa-running"></i>
            </div>
            <h3 className="grid-title">ZEESHAN AKBAR</h3>
            <p className="grid-text">Body building and Zeeshan goes side by side</p>
            <a href="https://www.instagram.com/iammartariq" className="link">Instagram: @iammartariq</a>

          </motion.div>

          <motion.div 
            className="trainers-card3"
            variants={scaleIn}
            whileHover={{ scale: 1.02}}>

            <div className="icon">
              <i className="fa-solid fa-child"></i>
            </div>
            <h3 className="grid-title">HAIDER KHAN</h3>
            <p className="grid-text">Making your gym journey easy</p>
            <a href="https://www.instagram.com/iammartariq" className="link">Instagram: @iammartariq</a>

          </motion.div>

        </motion.div>
      </motion.section>

      {/* PRICING */}

      <motion.section 
        id="pricing" 
        className="pages2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}>

        <motion.div 
        className="pricing-header" 
        variants={fadeInUp}>

          <h1 className="title">Our <span className="multi">Prices</span></h1>
          <p className="subtitle">GET THE <span className="multi-bold">MOST OUT OF</span> US</p>

        </motion.div>

        <motion.div 
          className="pricing-grid"
          variants={staggerContainer}>

          <motion.div 
            className="pricing-card1"
            variants={scaleIn}
            whileHover={{ scale: 1.02}}>
            
            <h2 className="pricing-grid-title">BASIC MONTHLY</h2>
            <h3 className="pricing-grid-price">PKR 2500</h3>
            <p className="pricing-grid-text">Perfect for beginners</p>

            <motion.ul 
              className="pricing-list"
              variants={staggerContainer}>

              <motion.li 
              variants={scaleIn}>
                <span className="fas fa-check-circle pricing-icon"></span>Gym access during regular hours
              </motion.li>

              <motion.li 
              variants={scaleIn}>
                <span className="fas fa-check-circle pricing-icon"></span>Basic equipments usage
              </motion.li>

              <motion.li 
              variants={scaleIn}>
                <span className="fas fa-check-circle pricing-icon"></span>Access to shower
              </motion.li>

              <motion.li 
              variants={scaleIn}>
                <span className="fas fa-xmark pricing-icon-2"></span>Access to swimming pool
              </motion.li>

              <motion.li 
              variants={scaleIn}>
                <span className="fas fa-xmark pricing-icon-2"></span>Personal trainer
              </motion.li>

              <motion.li 
              variants={scaleIn}>
                <span className="fas fa-xmark pricing-icon-2"></span>Locker room
              </motion.li>
            </motion.ul>          

          <motion.button
          className="pricing-btn-1"
          whileTap={{ scale: 0.95 }}>

              <a href="#pricing">Book Now</a>
          </motion.button>
        
          </motion.div>

          <motion.div 
            className="pricing-card2"
            variants={scaleIn}
            whileHover={{ scale: 1.02}}>
            
            <h2 className="pricing-grid-title">PREMIUM MONTHLY</h2>
            <h3 className="pricing-grid-price">PKR 7500</h3>
            <p className="pricing-grid-text">Ideal for workout freaks</p>

            <motion.ul 
              className="pricing-list"
              variants={staggerContainer}>

              <motion.li 
              variants={scaleIn}>
                <span className="fas fa-check-circle pricing-icon"></span>24/7 access allowed
              </motion.li>

              <motion.li 
              variants={scaleIn}>
                <span className="fas fa-check-circle pricing-icon"></span>Full cardio included
              </motion.li>

              <motion.li 
              variants={scaleIn}>
                <span className="fas fa-check-circle pricing-icon"></span>2 Guest passes per month
              </motion.li>

              <motion.li 
              variants={scaleIn}>
                <span className="fas fa-check-circle pricing-icon"></span>Free diet consultation
              </motion.li>

              <motion.li 
              variants={scaleIn}>
                <span className="fas fa-check-circle pricing-icon"></span>Basic locker room
              </motion.li>

              <motion.li 
              variants={scaleIn}>
                <span className="fas fa-xmark pricing-icon-2"></span>Access to swimming pool
              </motion.li>

              <motion.li 
              variants={scaleIn}>
                <span className="fas fa-xmark pricing-icon-2"></span>Personal trainer
              </motion.li>
            </motion.ul>

          <motion.button
          className="pricing-btn-2"
          whileTap={{ scale: 0.95 }}>

              <a href="#pricing">Book Now</a>
          </motion.button>              

          </motion.div>

          <motion.div 
            className="pricing-card1"
            variants={scaleIn}
            whileHover={{ scale: 1.02}}>
            
            <h2 className="pricing-grid-title">YEARLY</h2>
            <h3 className="pricing-grid-price">PKR 60,000</h3>
            <p className="pricing-grid-text">Perfect discount</p>

            <motion.ul 
              className="pricing-list"
              variants={staggerContainer}>

              <motion.li 
              variants={scaleIn}>
                <span className="fas fa-check-circle pricing-icon"></span>Everything in Premium
              </motion.li>

              <motion.li 
              variants={scaleIn}>
                <span className="fas fa-check-circle pricing-icon"></span>VIP locker room
              </motion.li>

              <motion.li 
              variants={scaleIn}>
                <span className="fas fa-check-circle pricing-icon"></span>Massage therapy
              </motion.li>

              <motion.li 
              variants={scaleIn}>
                <span className="fas fa-check-circle pricing-icon"></span>Access to swimming pool
              </motion.li>

              <motion.li 
              variants={scaleIn}>
                <span className="fas fa-check-circle pricing-icon"></span>Personal trainer
              </motion.li>
            </motion.ul>

          <motion.button
          className="pricing-btn-1"
          whileTap={{ scale: 0.95 }}>

              <a href="#pricing">Book Now</a>
          </motion.button>

          </motion.div>

        </motion.div>
      </motion.section>

      {/* Contact US */}

        <motion.section
        id="contactus" 
        className="pages1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}>

          <motion.div 
          className="contact-header" 
          variants={fadeInUp}>

            <h1 className="title">Contact <span className="multi">Us</span></h1>
            <p className="subtitle">NEED HELP? <span className="multi-bold">REACH OUT</span> TO US</p>
          </motion.div>

          <motion.div
          class="form"
          variants={fadeInUp}
          whileHover={{ scale: 1.02}}>>
            <form>
              <input class="text" type="text" placeholder="Name" />
              <input class="email" type="email" placeholder="Email" />
              <input class="number" type="number" placeholder="Phone" />
              <input class="text" type="text" placeholder='enter your query' />
              <button class="pricing-btn-2" >submit</button>
            </form>
          </motion.div>

        </motion.section>

    </div>
  );
};

export default Fitzone;