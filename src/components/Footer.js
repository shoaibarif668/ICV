import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import {Container,Row,Col} from "react-bootstrap"
import { FaEnvelope } from "react-icons/fa";
import { Link } from 'gatsby'


const Footer = () => {

	const footerdata = useStaticQuery(graphql`
    {
      allContentfulFooter {
        nodes {
          officeLocation1
          officeLocation2
          officeLocation3
          officeAddress1
          officeAddress2
          officeAddress3
          officeContact1
          officeContact2
          officeContact3
          officeMail1
          officeMail2
          officeMail3
          socialLink1
          socialLink2
          subscriptionText {
            subscriptionText
          }
          footerDesc {
            footerDesc
          }
          copyright
          logo {
            fluid {
              src
            }
          }
        }
      }
    }
  `)



    return (
        <>
	<div className="section info overlap-bottom">
		<Container>
			<Row>
				
				<Col md={4} sm={4}>
					<div className="box-icon-4">
						<div className="icon"><i className="fa fa-phone"></i></div>
						<div className="body-content">
							<div className="heading">{footerdata.allContentfulFooter.nodes[0].officeLocation1}</div>
							<div>{footerdata.allContentfulFooter.nodes[0].officeAddress1}</div>
							<div>{footerdata.allContentfulFooter.nodes[0].officeContact1}</div>
							<div>{footerdata.allContentfulFooter.nodes[0].officeMail1}</div>
						</div>
					</div>
				</Col>
				<Col md={4} sm={4}>
					<div className="box-icon-4">
						<div className="icon"><i className="fa fa-map-marker"></i></div>
						<div className="body-content">
							<div className="heading">{footerdata.allContentfulFooter.nodes[0].officeLocation2}</div>
							<div>{footerdata.allContentfulFooter.nodes[0].officeAddress2}</div>
							<div>{footerdata.allContentfulFooter.nodes[0].officeContact2}</div>
							<div>{footerdata.allContentfulFooter.nodes[0].officeMail2}</div>
						</div>
					</div>
				</Col>
				<Col md={4} sm={4}>
					<div className="box-icon-4">
						<div className="icon"><i className="fa fa-envelope"></i></div>
						<div className="body-content">
							<div className="heading">{footerdata.allContentfulFooter.nodes[0].officeLocation3}</div>
							<div>{footerdata.allContentfulFooter.nodes[0].officeAddress3}</div>
							<div>{footerdata.allContentfulFooter.nodes[0].officeContact3}</div>
							<div>{footerdata.allContentfulFooter.nodes[0].officeMail3}</div>
						</div>
					</div>
				</Col>
				
			</Row>

		</Container>
	</div>

	<div className="footer">
		
		<Container>
			
			<Row>
				<Col md={3} sm={3}>
					<div className="footer-item">
						<img src={footerdata.allContentfulFooter.nodes[0].logo.fluid.src} alt="logo bottom" className="logo-bottom"/>
						<p>{footerdata.allContentfulFooter.nodes[0].footerDesc.footerDesc}</p>
						<div className="footer-sosmed">
							<Link to={footerdata.allContentfulFooter.nodes[0].socialLink1} title="">
								<div className="item">
									<i className="fa fa-facebook"></i>
								</div>
							</Link>
							<Link to={footerdata.allContentfulFooter.nodes[0].socialLink2} title="">
								<div className="item">
									<i className="fa fa-twitter"></i>
								</div>
							</Link>
						</div>
					</div>
				</Col>
				<Col md={3} sm={3}>
					<div className="footer-item">
						<div className="footer-title">
						Press Release
						</div>
						<ul className="recent-post">
							<li><Link to="" title="">The Best in dolor sit amet consectetur adipisicing elit sed</Link>
							<span className="date"><i className="fa fa-clock-o"></i> September 1, 2020</span></li><li><Link to="" title="">The Best in dolor sit amet consectetur adipisicing elit sed</Link>
							<span className="date"><i className="fa fa-clock-o"></i> September 1, 2020</span></li>
						</ul>
					</div>
				</Col>
				<Col md={3} sm={3}>
					<div className="footer-item">
						<div className="footer-title">
							Company
						</div>
						<ul className="list">
							<li><Link to="" title="">Our Core</Link></li>
							<li><Link to="" title="">Business Segments</Link></li>
							<li><Link to="" title="">News / Press Release</Link></li>
							<li><Link to="" title="">Careers</Link></li>
							<li><Link to="" title="">Downloads</Link></li>
							<li><Link to="" title="">Imprint</Link></li>
							<li><Link to="" title="">Cookie Policy</Link></li>
							<li><Link to="" title="">Data Protection</Link></li>
						</ul>
					</div>
				</Col>
				<Col md={3} sm={3}>
					<div className="footer-item">
						<div className="footer-title">
							Subscribe
						</div>
						<p>{footerdata.allContentfulFooter.nodes[0].subscriptionText.subscriptionText}</p>
						<form action="#" className="footer-subscribe">
			              <input type="email" name="EMAIL" className="form-control" placeholder="enter your email"/>
			              <input id="p_submit" type="submit" value="send"/>
			              <label for="p_submit"><FaEnvelope/></label>
			            </form>
					</div>
				</Col>
			</Row>
		</Container>
		
		<div className="fcopy">
			<Container>
				<Row>
					<Col md={12} sm={12}>
						<p className="ftex">{footerdata.allContentfulFooter.nodes[0].copyright}</p> 
					</Col>
				</Row>
			</Container>
		</div>
		
	</div>
	
        </>
    )
}

export default Footer
