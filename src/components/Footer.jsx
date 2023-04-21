import "./footer.css"
import { FaGithub } from "react-icons/fa";

function Footer(){
  return(
    <footer>
      <div>
        Created by samirls 
      </div>
      <div >
        <a className="githubIcon" href=""><FaGithub /></a>
      </div>
    
    </footer>
  )
}

export default Footer