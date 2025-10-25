import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import News from "./Pages/News/news";
import Courses from "./Pages/courses/Courses";
import CourseDetails from "./Pages/EnrollCourse/CourseDetails";
import Certificates from "./Pages/Certificates/Certificates";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
