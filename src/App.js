import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import NoPage from "./Pages/NoPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
    {/* Layout is the defaukt route; we can attribute it a specific route with index attribute to anoter route */}
        <Route path="/" element={<Layout />}>
    {/* The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /. */}
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
    {/* Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page. So if we don't write an url that is defines in teh Routes, or if we mispell an Url, the content of this route will appear */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
