import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Contact = () => {
    return <div>
        <Header/>
        	<main className="main pages">
		<div className="page-header breadcrumb-wrap">
			<div className="container">
				<div className="breadcrumb">
					<a href="index-2.html" rel="nofollow"><i className="fi-rs-home mr-5"></i>Home</a>
					<span></span> Pages <span></span> Contact
				</div>
			</div>
		</div>
		<div className="page-content pt-50">
			<section className="container mb-50  d-md-block">
				<div className="border-radius-15 overflow-hidden">
					<iframe width="100%" height="500"
						src="https://maps.google.com/maps?q=new%20york,%20usa&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
						frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
				</div>
			</section>
			<div className="container">
				<div className="row">
					<div className="col-xl-10 col-lg-12 m-auto">
						<section className="mb-50">
							<div className="row mb-60">
								<div className="col-md-4 mb-4 mb-md-0">
									<h4 className="mb-15 text-brand">Shop</h4>
									205 North Michigan Avenue, Suite<br />
									810 Chicago, 60601, USA<br />
									<abbr title="Phone">Phone:</abbr> (123) 456-7890<br />
									<abbr title="Email">Email: </abbr><a href="../cdn-cgi/l/email-protection.html"
										className="__cf_email__"
										data-cfemail="46252928322725320603302734276825292b">[email&#160;protected]</a><br />
									<a href="https://www.google.com/maps/dir//New+York+USA/@40.7127753,-74.0059728,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62"
										className="btn btn-sm font-weight-bold text-white mt-20 border-radius-5 btn-shadow-brand hover-up"><i
											className="fi-rs-marker mr-5"></i>View map</a>
								</div>
								<div className="col-md-4 mb-4 mb-md-0">
									<h4 className="mb-15 text-brand">Studio</h4>
									205 North Michigan Avenue, Suite<br />
									810 Chicago, 60601, USA<br />
									<abbr title="Phone">Phone:</abbr> (123) 456-7890<br />
									<abbr title="Email">Email: </abbr> <a href="../cdn-cgi/l/email-protection.html"
										className="__cf_email__"
										data-cfemail="6a0905041e0b091e2a2f1c0b180b44090507">[email&#160;protected]</a><br />
									<a href="https://www.google.com/maps/dir//New+York+USA/@40.7127753,-74.0059728,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62"
										className="btn btn-sm font-weight-bold text-white mt-20 border-radius-5 btn-shadow-brand hover-up"><i
											className="fi-rs-marker mr-5"></i>View map</a>
								</div>
								<div className="col-md-4 mb-4 mb-md-0">
									<h4 className="mb-15 text-brand">Office</h4>
									205 North Michigan Avenue, Suite<br />
									810 Chicago, 60601, USA<br />
									<abbr title="Phone">Phone:</abbr> (123) 456-7890<br />
									<abbr title="Email">Email: </abbr><a href="../cdn-cgi/l/email-protection.html"
										className="__cf_email__"
										data-cfemail="56353938223735221613203724377835393b">[email&#160;protected]</a><br />
									<a href="https://www.google.com/maps/dir//New+York+USA/@40.7127753,-74.0059728,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62"
										className="btn btn-sm font-weight-bold text-white mt-20 border-radius-5 btn-shadow-brand hover-up"><i
											className="fi-rs-marker mr-5"></i>View map</a>
								</div>
							</div>
							<div className="row">
								<div className="col-xl-8 col-lg-10 m-auto">
									<div className="contact-from-area padding-20-row-col">
										<h2 className="mb-10 text-center">Leave A Message</h2>
										<p className="text-muted  text-center mb-30 font-sm">Our staff will call back later
											and answer your questions.</p>
										<form className="contact-form-style mt-30" id="contact-form" method="POST"
											action="https://nest.apexcode.info/contact/">
											<input type="hidden" name="csrfmiddlewaretoken"
												value="10H8brTVPQ1VYrDivQMCrmLrMRkf32bOyMZANxAbGTIOHTpGPBcJ18jB0KxI1EJj" />
											<div className="row">
												<div className="col-lg-6 col-md-6">
													<div className="input-style mb-20">
														<input name="name" placeholder="First Name" type="text"
															required />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="input-style mb-20">
														<input name="email" placeholder="Your Email" type="email"
															required />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="input-style mb-20">
														<input name="phone" placeholder="Your Phone" type="tel"
															required />
													</div>
												</div>
												<div className="col-lg-6 col-md-6">
													<div className="input-style mb-20">
														<input name="subject" placeholder="Subject" type="text"
															required />
													</div>
												</div>
												<div className="col-lg-12 col-md-12">
													<div className="textarea-style mb-30">
														<textarea name="message" placeholder="Message"
															required></textarea>
													</div>
													<button className="submit submit-auto-width" type="submit">Send
														message</button>
												</div>
											</div>
										</form>
										<p className="form-messege"></p>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	</main>
    <Footer/>
        
    </div>;
}


export default Contact;