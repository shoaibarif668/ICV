import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import { Link } from 'gatsby'
import { FaFacebookF,FaTwitter,FaInstagram,FaPinterest } from "react-icons/fa";
import { useStaticQuery, graphql } from "gatsby"

 const socialmedialinks = graphql`
  {
    allContentfulHeader {
      nodes {
        twitterLink
        instagramLink
        facebookLink
        pinterestLink
      }
    }
  }
`


  
const Topbar = () => {

	const links = useStaticQuery(socialmedialinks);
	console.log(links)
	
    return (
        <>
           <div className="topbar">
			<Container>
				<Row>
					<Col sm={5} md={6}>
						<div className="topbar-left">
							<div className="welcome-text">
							Language: English
							</div>
						</div>
					</Col>
					<Col  sm={7} md={6}>
						<div className="topbar-right">
							
							<ul className="topbar-sosmed">
							<li>
								<Link to={links.allContentfulHeader.nodes[0].facebookLink}><FaFacebookF/></Link>
							</li>
							<li>
								<Link to={links.allContentfulHeader.nodes[0].twitterLink}><FaTwitter/></Link>
							</li>
							<li>
								<Link to={links.allContentfulHeader.nodes[0].instagramLink}><FaInstagram/></Link>
							</li>
							<li>
								<Link to={links.allContentfulHeader.nodes[0].pinterestLink}><FaPinterest/></Link>
							</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</div> 
        </>
    )
}

export default Topbar
