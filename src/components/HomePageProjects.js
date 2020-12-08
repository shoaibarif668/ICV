import React from 'react'
import { Container, Row, Col, Tabs , Tab } from 'react-bootstrap'
import { Link } from 'gatsby'
import img1 from '../images/slide-1.jpg'
import { useStaticQuery, graphql } from "gatsby"




const HomePageProjects = () => {



const getprojects = useStaticQuery(graphql`
    {
      allContentfulProjects {
        nodes {
          projectTitle
          projectSubtitle
          projectImage {
            fluid {
              src
            }
          }
        }
      }
	}
`)


  const { allContentfulProjects: { nodes: allprojects }, } = getprojects

    return (
        <>

				<div class="section">

					<Container>

						<Row>
							<Col sm={12} md={12}>
								<h2 className="section-heading">
									PROJECTS
								</h2>
							</Col>
						</Row>

						<Row>

							<Col sm={12} md={12}>

								<Tabs defaultActiveKey="tab1" id="uncontrolled-tab-example">
									<Tab eventKey="tab1" title="ALL">
										<Row  className="grid-services">

											{allprojects.map((project) => {

												return(

													<Col sm={6} md={4}>
														<div className="box-image-4">
															<Link to="project-detail.html" title="Industrial Complex">
																<div className="media">
																	<img src={project.projectImage.fluid.src} alt="" className="img-responsive"/>
																</div>
																<div className="body">
																	<div className="content">
																		<h4 className="title">{project.projectTitle}</h4>
																		<span className="category">{project.projectSubtitle}</span>
																	</div>
																</div>
															</Link>
														</div>
													</Col>
												)

											})}

											
										</Row>
									</Tab>
									<Tab eventKey="tab2" title="ECO">
										<Row  className="grid-services">
											<Col sm={6} md={4}>
												<div className="box-image-4">
													<Link to="project-detail.html" title="Industrial Complex">
														<div className="media">
															<img src={img1} alt="" className="img-responsive"/>
														</div>
														<div className="body">
															<div className="content">
																<h4 className="title">INDUSTRIAL COMPLEX</h4>
																<span className="category">Commodoenim</span>
															</div>
														</div>
													</Link>
												</div>
											</Col>
											<Col sm={6} md={4}>
												<div className="box-image-4">
													<Link to="project-detail.html" title="Industrial Complex">
														<div className="media">
															<img src={img1} alt="" className="img-responsive"/>
														</div>
														<div className="body">
															<div className="content">
																<h4 className="title">INDUSTRIAL COMPLEX</h4>
																<span className="category">Commodoenim</span>
															</div>
														</div>
													</Link>
												</div>
											</Col>
											<Col sm={6} md={4}>
												<div className="box-image-4">
													<Link to="project-detail.html" title="Industrial Complex">
														<div className="media">
															<img src={img1} alt="" className="img-responsive"/>
														</div>
														<div className="body">
															<div className="content">
																<h4 className="title">INDUSTRIAL COMPLEX</h4>
																<span className="category">Commodoenim</span>
															</div>
														</div>
													</Link>
												</div>
											</Col>
										</Row>
										
									</Tab>
									<Tab eventKey="tab3" title="MANUFACTURING" >
										<Row  className="grid-services">
											<Col sm={6} md={4}>
												<div className="box-image-4">
													<Link to="project-detail.html" title="Industrial Complex">
														<div className="media">
															<img src={img1} alt="" className="img-responsive"/>
														</div>
														<div className="body">
															<div className="content">
																<h4 className="title">INDUSTRIAL COMPLEX</h4>
																<span className="category">Commodoenim</span>
															</div>
														</div>
													</Link>
												</div>
											</Col>
											<Col sm={6} md={4}>
												<div className="box-image-4">
													<Link to="project-detail.html" title="Industrial Complex">
														<div className="media">
															<img src={img1} alt="" className="img-responsive"/>
														</div>
														<div className="body">
															<div className="content">
																<h4 className="title">INDUSTRIAL COMPLEX</h4>
																<span className="category">Commodoenim</span>
															</div>
														</div>
													</Link>
												</div>
											</Col>
											<Col sm={6} md={4}>
												<div className="box-image-4">
													<Link to="project-detail.html" title="Industrial Complex">
														<div className="media">
															<img src={img1} alt="" className="img-responsive"/>
														</div>
														<div className="body">
															<div className="content">
																<h4 className="title">INDUSTRIAL COMPLEX</h4>
																<span className="category">Commodoenim</span>
															</div>
														</div>
													</Link>
												</div>
											</Col>
											<Col sm={6} md={4}>
												<div className="box-image-4">
													<Link to="project-detail.html" title="Industrial Complex">
														<div className="media">
															<img src={img1} alt="" className="img-responsive"/>
														</div>
														<div className="body">
															<div className="content">
																<h4 className="title">INDUSTRIAL COMPLEX</h4>
																<span className="category">Commodoenim</span>
															</div>
														</div>
													</Link>
												</div>
											</Col>
										</Row>
									</Tab>
									<Tab eventKey="tab4" title="OIL" >
										<p>this is 3</p>
									</Tab>
									<Tab eventKey="tab5" title="GAS" >
										<p>this is 3</p>
									</Tab>
									<Tab eventKey="tab6" title="FACTORY" >
										<p>this is 3</p>
									</Tab>
								</Tabs>

							</Col>

						</Row>
						

					</Container>
				
				</div>
			</>
    )
}

export default HomePageProjects
