import React, { useState } from "react";
import "./form.css";

export const Form = () => {
	const [value, setValue] = useState({ email: "" });

	const handleChange = (e) => {
		setValue({ ...value, email: e.target.value });
	};
	return (
		<>
			{/* <!-- Begin Mailchimp Signup Form --> */}
			<div id="mc_embed_signup" className="formContainer">
				<form
					action="https://formeiprofissionais.us17.list-manage.com/subscribe/post?u=be392b8fb25eda729014f1ca6&amp;id=9d5eabf9db"
					method="post"
					id="mc-embedded-subscribe-form"
					name="mc-embedded-subscribe-form"
					class="validate"
					target="_blank"
					novalidate
				>
					<div id="mc_embed_signup_scroll" className="formBox">
						<h2>Assine e receba promoções exclusivas!</h2>
						<div class="boxInput">
							<label for="mce-EMAIL">Seu melhor E-mail:</label>
							<input
								type="email"
								value={value.email}
								name="EMAIL"
								class="requiredEmail"
								id="mce-EMAIL"
								onChange={handleChange}
							/>
						</div>
						<div hidden="true">
							<input type="hidden" name="tags" value="6411905" />
						</div>
						<div id="mce-responses" class="clearFoot">
							<div
								class="response"
								id="mce-error-response"
								className="displayNone"
							></div>
							<div
								class="response"
								id="mce-success-response"
								className="displayNone"
							></div>
						</div>

						{/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}

						<div aria-hidden="true" className="absolutLeft">
							<input
								type="text"
								name="b_be392b8fb25eda729014f1ca6_9d5eabf9db"
								tabindex="-1"
								value=""
							/>
						</div>
						<div class="optionalParent">
							<div class="clearFoot">
								<input
									type="submit"
									value="Enviar!"
									name="subscribe"
									id="mc-embedded-subscribe"
									class="button"
								/>
								{/* <p class="brandingLogo">
									<a
										href="http://eepurl.com/h7dH9P"
										title="Mailchimp - email marketing made easy and fun"
									>
										<img
											src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"
											alt="Newsletter Formei"
										/>
									</a>
								</p> */}
							</div>
						</div>
					</div>
				</form>
			</div>

			{/* <!--End mc_embed_signup--> */}
		</>
	);
};
